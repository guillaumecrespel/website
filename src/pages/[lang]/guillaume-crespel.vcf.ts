import { join } from 'node:path';
import type { APIRoute, GetStaticPaths } from 'astro';
import sharp from 'sharp';
import { getProfile } from '@/i18n/data/profile';
import { LANGS, type Lang, useTranslations } from '@/i18n/ui';
import { absoluteUrl, homePath } from '@/lib/site';

/**
 * Contact card (vCard 3.0, the version every address book reads) with the
 * site, professional profiles and a small photo. Served as text/vcard so
 * phones offer to add the contact directly.
 */

export const getStaticPaths = (() =>
  LANGS.map((lang) => ({ params: { lang } }))) satisfies GetStaticPaths;

/** Escapes text values (RFC 6350 §3.4). */
const esc = (value: string) =>
  value
    .replace(/\\/g, '\\\\')
    .replace(/\n/g, '\\n')
    .replace(/([,;])/g, '\\$1');

/** Folds lines longer than 75 octets with a leading space (RFC 6350 §3.2). */
function fold(line: string): string {
  const bytes = new TextEncoder().encode(line);
  if (bytes.length <= 75) return line;
  const parts: string[] = [];
  let current = '';
  let size = 0;
  for (const char of line) {
    const length = new TextEncoder().encode(char).length;
    const limit = parts.length === 0 ? 75 : 74;
    if (size + length > limit) {
      parts.push(current);
      current = '';
      size = 0;
    }
    current += char;
    size += length;
  }
  parts.push(current);
  return parts.join('\r\n ');
}

async function photo(): Promise<string> {
  const source = join(process.cwd(), 'src/assets/images/portrait.jpg');
  const buffer = await sharp(source)
    .resize(240, 240, { fit: 'cover' })
    .jpeg({ quality: 78 })
    .toBuffer();
  return buffer.toString('base64');
}

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as Lang;
  const t = useTranslations(lang);
  const profile = getProfile(lang);
  const social = profile.socialLinks.filter((link) => link.professional && link.id !== 'github');

  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${esc(profile.familyName)};${esc(profile.givenName)};;;`,
    `FN:${esc(profile.name)}`,
    `TITLE:${esc(profile.role)}`,
    `ADR;TYPE=WORK:;;;${esc(profile.location.city)};${esc(profile.location.region)};;France`,
    `URL;TYPE=WORK:${absoluteUrl(homePath(lang))}`,
    ...social.flatMap((link, index) => [
      `item${index + 1}.URL:${link.url}`,
      `item${index + 1}.X-ABLabel:${link.label}`,
    ]),
    ...social.map((link) => `X-SOCIALPROFILE;TYPE=${link.id}:${link.url}`),
    ...(profile.email ? [`EMAIL;TYPE=WORK:${profile.email}`] : []),
    `NOTE:${esc(t('share.vcardNote'))}`,
    `PHOTO;ENCODING=b;TYPE=JPEG:${await photo()}`,
    `REV:${new Date().toISOString().replace(/\.\d{3}Z$/, 'Z')}`,
    'END:VCARD',
  ];

  return new Response(`${lines.map(fold).join('\r\n')}\r\n`, {
    headers: { 'Content-Type': 'text/vcard; charset=utf-8' },
  });
};
