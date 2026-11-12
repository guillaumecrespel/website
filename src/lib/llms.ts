import { durationInMonths, formatDuration, formatPeriod } from '@/i18n/data/experiences/utils';
import type { Lang } from '@/i18n/ui';
import { getSiteContent } from './content';
import { absoluteUrl, cvPath, cvPdfPath, homePath } from './site';

/**
 * llms.txt (https://llmstxt.org): a plain Markdown brief that answer engines
 * and AI assistants can read without rendering the page. Generated from the
 * same data as the site so it never drifts.
 */

function section(lang: Lang, full: boolean): string {
  const c = getSiteContent(lang);
  const { ui, profile, stats } = c;
  const present = ui.experiences.present;
  const lines: string[] = [];

  lines.push(`## ${lang === 'fr' ? 'En bref' : 'Key facts'}`);
  lines.push(`- ${profile.role}, ${profile.location.label}.`);
  lines.push(
    `- ${stats.years} ${ui.stats.years}, ${stats.companies} ${ui.stats.companies}, ${stats.products} ${ui.stats.products}, ${stats.sectors} ${ui.stats.sectors}.`,
  );
  for (const mission of c.currentMissions) {
    lines.push(
      `- ${ui.profile.currently}: ${mission.position} ${ui.profile.at} ${mission.company.name}.`,
    );
  }
  lines.push(
    `- ${lang === 'fr' ? 'Contact' : 'Contact'}: ${profile.socialLinks
      .filter((link) => link.professional)
      .map((link) => `[${link.label}](${link.url})`)
      .join(', ')}.`,
  );
  lines.push('');

  lines.push(`## ${ui.apps.title}`);
  lines.push(ui.apps.lead);
  for (const step of ui.apps.steps) lines.push(`- **${step.title}**: ${step.description}`);
  lines.push(`- **${ui.apps.caseTitle}**: ${ui.apps.caseDescription}`);
  lines.push('');

  lines.push(`## ${ui.saas.title}`);
  lines.push(`${ui.studio.description} https://unirakun.fr`);
  for (const product of c.saas.saas) {
    lines.push(`- [${product.name}](${product.url}): ${product.description}`);
  }
  lines.push('');

  lines.push(`## ${ui.offers.title}`);
  lines.push(ui.offers.lead);
  for (const offer of c.offers.offers) lines.push(`- **${offer.name}**: ${offer.description}`);
  lines.push('');

  lines.push(`## ${ui.experiences.title}`);
  for (const exp of c.experiences) {
    const period = formatPeriod(lang, exp, present);
    const duration = formatDuration(lang, durationInMonths(exp));
    lines.push(
      `- **${exp.position}**, ${exp.company.name} (${period}, ${duration}): ${exp.description}`,
    );
    if (full) {
      for (const achievement of exp.achievements) lines.push(`  - ${achievement}`);
      if (exp.technologies.length)
        lines.push(`  - ${ui.experiences.stack}: ${exp.technologies.join(', ')}`);
    }
  }
  lines.push('');

  lines.push(`## ${ui.cv.stack}`);
  const byLevel = (level: string) =>
    c.rankedTechnologies.filter((tech) => tech.level === level).map((tech) => tech.name);
  for (const level of ['expert', 'senior', 'intermediate', 'beginner', 'learning'] as const) {
    const names = byLevel(level);
    if (names.length) lines.push(`- ${ui.technologies.levels[level]}: ${names.join(', ')}`);
  }
  lines.push(`- ${ui.sectors.title}: ${c.sectors.map((s) => s.label).join(', ')}`);
  lines.push('');

  if (full) {
    lines.push(`## ${ui.faq.title}`);
    for (const item of ui.faq.items) {
      lines.push(`### ${item.q}`);
      lines.push(item.a);
      lines.push('');
    }
  }

  lines.push(`## ${lang === 'fr' ? 'Pages' : 'Pages'}`);
  lines.push(`- [${ui.nav.home}](${absoluteUrl(homePath(lang))})`);
  lines.push(`- [${ui.actions.viewCv}](${absoluteUrl(cvPath(lang))})`);
  lines.push(`- [${ui.actions.downloadCv} (PDF)](${absoluteUrl(cvPdfPath(lang))})`);
  lines.push('');
  return lines.join('\n');
}

export function buildLlmsTxt(full: boolean): string {
  const en = getSiteContent('en');
  const fr = getSiteContent('fr');
  return [
    `# ${en.profile.name}`,
    '',
    `> ${en.ui.meta.description}`,
    '',
    `> ${fr.ui.meta.description}`,
    '',
    full
      ? `Full version of ${absoluteUrl('/llms.txt')}. English first, then French.`
      : `English first, then French. Detailed version: ${absoluteUrl('/llms-full.txt')}`,
    '',
    section('en', full),
    '---',
    '',
    '# Version française',
    '',
    section('fr', full),
  ].join('\n');
}
