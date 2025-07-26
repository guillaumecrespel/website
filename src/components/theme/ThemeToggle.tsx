import { Icon } from '@iconify/react';
import type { Theme } from '@/components/theme/theme';
import { useThemeSync } from '@/components/theme/use-theme-sync';
import { Button } from '@/components/ui/button';

interface ThemeToggleProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  showLabels?: boolean;
  className?: string;
}

const THEMES: Record<Theme, { label: string; icon: React.ReactNode }> = {
  light: {
    label: 'Clair',
    icon: <Icon icon="solar:sun-linear" className="size-4" />,
  },
  dark: {
    label: 'Sombre',
    icon: <Icon icon="solar:moon-bold" className="size-4" />,
  },
  system: {
    label: 'Système',
    icon: <Icon icon="solar:monitor-linear" className="size-4" />,
  },
};

/**
 * Theme toggle component with smooth transitions
 */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useThemeSync();

  return (
    <Button
      size="icon"
      onClick={toggleTheme}
      className={className}
      aria-label={`Basculer vers le ${THEMES[theme as Theme].label}`}
    >
      {THEMES[theme as Theme].icon}
    </Button>
  );
}
