import { Icon } from "@iconify/react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function LanguageToggle({
  variant = "ghost",
  size = "icon",
  className = "",
}: {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}) {
  const [lang, setLang] = useState<'fr' | 'en'>(
    typeof window !== 'undefined' && window.location.pathname.startsWith('/en') ? 'en' : 'fr'
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLang(window.location.pathname.startsWith('/en') ? 'en' : 'fr');
    }
  }, []);

  const toggleLang = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (lang === 'fr') {
        window.location.pathname = '/en';
      } else {
        window.location.pathname = '/';
      }
    }
  }, [lang]);

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleLang}
      className={className}
      aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
    >
      <Icon icon={lang === 'fr' ? 'circle-flags:fr' : 'circle-flags:gb'} width={24} height={24} />
    </Button>
  );
} 