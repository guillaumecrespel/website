import type { Lang } from '../ui';

export interface SaaS {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  bgColor: string;
  fgColor: string;
}

export interface SaaSList {
  title: string;
  saas: SaaS[];
}

export async function getSaaS(lang: Lang): Promise<SaaSList> {
  const ui = await import(`../locales/${lang}/ui.json`).then((m) => m.default);

  return {
    title: ui.saas.title,
    saas: [
      {
        id: 'kojimo',
        name: ui.saas.kojimo.name,
        description: ui.saas.kojimo.description,
        url: 'https://kojimo.fr',
        icon: 'kojimo',
        bgColor: '#ffffff',
        fgColor: '#ffffff',
      },
      {
        id: 'qrakun',
        name: ui.saas.qrakun.name,
        description: ui.saas.qrakun.description,
        url: 'https://qr.rakun.sh',
        icon: 'qrakun',
        bgColor: '#FFFFFF',
        fgColor: '#000000',
      },
    ],
  };
}
