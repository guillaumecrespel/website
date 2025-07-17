import { Icon } from '@iconify/react';
import { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { getOppositeLanguage, LANGUAGE_ICONS } from '@/i18n/constants';
import { changeLang, useI18n } from '@/i18n/utils';

export function LanguageToggle() {
  const { t, lang } = useI18n();



  const toggleLang = useCallback(() => {
    if (typeof window !== 'undefined') {
      const newLang = getOppositeLanguage(lang);
      changeLang(newLang);
    }
  }, [lang]);

  return (
    <Button
      size="icon"
      onClick={toggleLang}
      aria-label={t('language.switchTo')}
    >
      <Icon icon={LANGUAGE_ICONS[lang]} width={24} height={24} />
    </Button>
  );
}
