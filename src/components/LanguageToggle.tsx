import { Icon } from "@iconify/react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import type { Lang } from "@/i18n/ui";
import { changeLang, getCurrentLang } from "@/i18n/utils";

export function LanguageToggle({
  size = "icon",
  className = "",
}: {
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}) {
  const [lang, setLang] = useState<Lang>('fr');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLang(getCurrentLang());
    }
  }, []);

  const toggleLang = useCallback(() => {
    if (typeof window !== 'undefined') {
      const newLang = lang === 'fr' ? 'en' : 'fr';
      changeLang(newLang);
    }
  }, [lang]);

  return (
    <Button
      size={size}
      onClick={toggleLang}
      className={className}
      aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
    >
      <Icon icon={lang === 'fr' ? 'circle-flags:fr' : 'circle-flags:gb'} width={24} height={24} />
    </Button>
  );
} 