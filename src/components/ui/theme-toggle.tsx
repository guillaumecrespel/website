import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import { useThemeSync } from '@/hooks/use-theme-sync';
import type { Theme } from '@/lib/theme';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  showLabels?: boolean;
  className?: string;
}

const THEMES: Record<Theme, { label: string; icon: React.ReactNode }> = {
  light: { label: 'Clair', icon: <Icon icon="solar:sun-linear" className="size-4" /> },
  dark: { label: 'Sombre', icon: <Icon icon="solar:moon-bold" className="size-4" /> },
  system: { label: 'Système', icon: <Icon icon="solar:monitor-linear" className="size-4" /> },
};

/**
 * Theme toggle component with smooth transitions
 */
export function ThemeToggle({
  variant = 'ghost',
  size = 'icon',
  showLabels = false,
  className,
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useThemeSync();

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleTheme}
      className={cn(
        'transition-all duration-300 ease-in-out',
        'hover:scale-105 active:scale-95',
        className,
      )}
      aria-label={`Basculer vers le ${THEMES[theme as Theme].label}`}
    >
      {THEMES[theme as Theme].icon}
      {showLabels && <span>{THEMES[theme as Theme].label}</span>}
    </Button>
  );
}
