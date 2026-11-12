/**
 * Share helpers, used at build time (default links, QR codes) and in the
 * browser (links rebuilt as the visitor edits the message). Keep this module
 * free of Node or Astro imports so the client script can bundle it.
 */

/** Id of the share dialog, opened with `commandfor` from any page. */
export const SHARE_SHEET_ID = 'share-sheet';

export type ShareKind = 'site' | 'cv';

export type ShareChannel = 'whatsapp' | 'linkedin' | 'telegram' | 'email' | 'sms';

export interface ShareContent {
  url: string;
  message: string;
  subject: string;
}

export const SHARE_CHANNELS: ShareChannel[] = ['whatsapp', 'linkedin', 'telegram', 'email', 'sms'];

const enc = encodeURIComponent;

/** Message followed by the link, as most apps expect a single text field. */
export function shareText({ message, url }: ShareContent): string {
  const text = message.trim();
  return text ? `${text}\n${url}` : url;
}

/** Deep link that opens the channel with the message and link prefilled. */
export function shareHref(channel: ShareChannel, content: ShareContent): string {
  const { url, message, subject } = content;
  switch (channel) {
    case 'whatsapp':
      return `https://wa.me/?text=${enc(shareText(content))}`;
    case 'linkedin':
      // LinkedIn only takes the URL; the post text is written in LinkedIn.
      return `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`;
    case 'telegram':
      return `https://t.me/share/url?url=${enc(url)}&text=${enc(message.trim())}`;
    case 'email':
      return `mailto:?subject=${enc(subject)}&body=${enc(shareText(content))}`;
    case 'sms':
      // `?&body=` is understood by both iOS and Android.
      return `sms:?&body=${enc(shareText(content))}`;
  }
}
