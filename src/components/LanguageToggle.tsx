'use client';

import { Icon } from '@iconify/react/dist/iconify.js';
import { Button } from '@/components/ui/button';
import { LANGUAGE_ICONS } from '@/i18n/constants';
import type { Lang } from '@/i18n/ui';
import { useI18n } from '@/i18n/utils';

interface LanguageToggleProps {
  currentLang: Lang;
  children?: React.ReactNode;
}

export function LanguageToggle({ currentLang, children }: LanguageToggleProps) {
  const { t } = useI18n(currentLang);

  const toggleLanguage = () => {
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    window.location.href = `/${newLang}/`;
  };

  return (
    <Button
      size="icon"
      onClick={toggleLanguage}
      aria-label={t('language.switchTo')}
      title={t('language.switchTo')}
    >
      {children || (
        <Icon icon={LANGUAGE_ICONS[currentLang]} width={24} height={24} />
      )}
    </Button>
  );
}
