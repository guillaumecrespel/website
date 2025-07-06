import { Monitor, Moon, Sun } from 'lucide-react';
import { useCallback, useSyncExternalStore } from 'react';
import { Button } from '@/components/ui/button';
import type { Theme } from '@/lib/theme';
import { themeStore } from '@/lib/theme-store';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  showLabels?: boolean;
  className?: string;
}

const THEMES: Record<Theme, { label: string; icon: React.ReactNode }> = {
  light: { label: 'Clair', icon: <Sun className="size-4" /> },
  dark: { label: 'Sombre', icon: <Moon className="size-4" /> },
  system: { label: 'Système', icon: <Monitor className="size-4" /> },
};

/**
 * Ultra-simplified theme toggle using useSyncExternalStore directly
 */
export function ThemeToggleSimple({
  variant = 'ghost',
  size = 'icon',
  showLabels = false,
  className,
}: ThemeToggleProps) {
  // Direct sync with external store
  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    () => 'system' as Theme
  );

  const toggleTheme = useCallback(() => {
    const themeCycle: Theme[] = ['light', 'dark', 'system'];
    const currentIndex = themeCycle.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeCycle.length;
    const newTheme = themeCycle[nextIndex];
    themeStore.setTheme(newTheme);
  }, [theme]);

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
      aria-label={`Basculer vers le ${THEMES[theme].label}`}
    >
      {THEMES[theme].icon}
      {showLabels && <span>{THEMES[theme].label}</span>}
    </Button>
  );
} 