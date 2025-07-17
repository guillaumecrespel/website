import type { Theme } from "./theme"
import { applyTheme, getEffectiveTheme, THEME_STORAGE_KEY } from "./theme"

// Store state
let currentTheme: Theme = "system"
const listeners: Set<() => void> = new Set()

// Initialize theme from localStorage
function initializeTheme() {
  if (typeof window === "undefined") return "system"
  
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    currentTheme = (stored as Theme) || "system"
  } catch {
    currentTheme = "system"
  }
  
  return currentTheme
}

// Get current theme
function getTheme(): Theme {
  return currentTheme
}

// Set theme and notify listeners
function setTheme(newTheme: Theme) {
  if (currentTheme === newTheme) return
  
  currentTheme = newTheme
  
  // Save to localStorage
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme)
    } catch (e) {
      console.warn("Failed to save theme to localStorage:", e)
    }
  }
  
  // Apply theme to DOM
  applyTheme(newTheme)
  
  // Notify all listeners
  listeners.forEach(listener => listener())
}

// Subscribe to theme changes
function subscribe(listener: () => void) {
  listeners.add(listener)
  
  return () => {
    listeners.delete(listener)
  }
}

// Get snapshot for useSyncExternalStore
function getSnapshot(): Theme {
  return currentTheme
}

// Initialize on module load
if (typeof window !== "undefined") {
  initializeTheme()
  
  // Listen for system theme changes
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  mediaQuery.addEventListener("change", () => {
    if (currentTheme === "system") {
      applyTheme("system")
      listeners.forEach(listener => listener())
    }
  })
}

// Export store functions
export const themeStore = {
  getTheme,
  setTheme,
  subscribe,
  getSnapshot,
  getEffectiveTheme: () => getEffectiveTheme(currentTheme),
  isDark: () => getEffectiveTheme(currentTheme) === "dark",
  isLight: () => getEffectiveTheme(currentTheme) === "light",
  isSystem: () => currentTheme === "system"
} 