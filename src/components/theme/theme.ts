export type Theme = "dark" | "light" | "system"

export const THEME_STORAGE_KEY = "theme"

export const themes: Theme[] = ["light", "dark", "system"]

/**
 * Get the system theme preference
 */
export function getSystemTheme(): "dark" | "light" {
  if (typeof window === "undefined") return "light"
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

/**
 * Get the effective theme (resolves system theme)
 */
export function getEffectiveTheme(theme: Theme): "dark" | "light" {
  if (theme === "system") {
    return getSystemTheme()
  }
  return theme
}

/**
 * Apply theme to document
 */
export function applyTheme(theme: Theme) {
  const effectiveTheme = getEffectiveTheme(theme)
  
  if (typeof document === "undefined") return
  
  const root = document.documentElement
  
  // Remove existing theme classes
  root.classList.remove("light", "dark")
  
  // Add new theme class
  root.classList.add(effectiveTheme)
  
  // Set data attribute for additional styling
  root.setAttribute("data-theme", effectiveTheme)
}

/**
 * Apply theme immediately on page load (for SSR)
 */
export function applyThemeImmediately() {
  if (typeof window === "undefined") return
  
  const storedTheme = getStoredTheme()
  const effectiveTheme = getEffectiveTheme(storedTheme)
  
  const root = document.documentElement
  
  // Remove existing theme classes
  root.classList.remove("light", "dark")
  
  // Add new theme class
  root.classList.add(effectiveTheme)
  
  // Set data attribute for additional styling
  root.setAttribute("data-theme", effectiveTheme)
}

/**
 * Get theme from localStorage
 */
export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "system"
  
  const stored = localStorage.getItem(THEME_STORAGE_KEY)
  return (stored as Theme) || "system"
}

/**
 * Save theme to localStorage
 */
export function saveTheme(theme: Theme) {
  if (typeof window === "undefined") return
  localStorage.setItem(THEME_STORAGE_KEY, theme)
} 