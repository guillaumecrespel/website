import { useCallback, useEffect, useState } from "react"
import type { Theme } from "@/lib/theme"
import { 
  applyTheme, 
  getEffectiveTheme, 
  getStoredTheme, 
  saveTheme 
} from "@/lib/theme"

/**
 * Custom hook for theme management
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>("system")
  const [mounted, setMounted] = useState(false)

  // Memoized theme change function
  const changeTheme = useCallback((newTheme: Theme) => {
    setTheme(newTheme)
    saveTheme(newTheme)
    applyTheme(newTheme)
  }, [])

  // Initialize theme on mount
  useEffect(() => {
    const storedTheme = getStoredTheme()
    setTheme(storedTheme)
    
    // Only apply theme if it's different from what's already applied
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    const effectiveTheme = getEffectiveTheme(storedTheme)
    
    if (currentTheme !== effectiveTheme) {
      applyTheme(storedTheme)
    }
    
    setMounted(true)
  }, [])

  // Listen for system theme changes with better cleanup
  useEffect(() => {
    if (theme !== "system") return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    
    const handleChange = () => {
      // Only apply if we're still in system mode
      if (theme === "system") {
        applyTheme("system")
      }
    }

    // Apply initial system theme
    handleChange()

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme])

  // Listen for storage changes (other tabs)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "theme" && e.newValue) {
        const newTheme = e.newValue as Theme
        setTheme(newTheme)
        applyTheme(newTheme)
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  const toggleTheme = useCallback(() => {
    // Cycle through: light → dark → system → light
    const themeCycle: Theme[] = ["light", "dark", "system"]
    const currentIndex = themeCycle.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themeCycle.length
    const newTheme = themeCycle[nextIndex]
    changeTheme(newTheme)
  }, [theme, changeTheme])

  return {
    theme,
    mounted,
    changeTheme,
    toggleTheme,
    effectiveTheme: getEffectiveTheme(theme),
    isDark: getEffectiveTheme(theme) === "dark",
    isLight: getEffectiveTheme(theme) === "light",
    isSystem: theme === "system"
  }
} 