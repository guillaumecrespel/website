import { useCallback, useSyncExternalStore } from "react"
import type { Theme } from "@/components/theme/theme"
import { themeStore } from "@/components/theme/theme-store"

/**
 * Ultra-simplified theme hook using useSyncExternalStore
 */
export function useThemeSync() {
  // Sync with external store
  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    () => "system" as Theme // Server fallback
  )

  // Memoized actions
  const changeTheme = useCallback((newTheme: Theme) => {
    themeStore.setTheme(newTheme)
  }, [])

  const toggleTheme = useCallback(() => {
    // Cycle through: light → dark → system → light
    const themeCycle: Theme[] = ["light", "dark", "system"]
    const currentIndex = themeCycle.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themeCycle.length
    const newTheme = themeCycle[nextIndex]
    themeStore.setTheme(newTheme)
  }, [theme])

  return {
    theme,
    mounted: true, // Always mounted since we use SSR fallback
    changeTheme,
    toggleTheme,
    effectiveTheme: themeStore.getEffectiveTheme(),
    isDark: themeStore.isDark(),
    isLight: themeStore.isLight(),
    isSystem: themeStore.isSystem()
  }
} 