/**
 * Theme initialization script
 * Handles theme detection, localStorage management, and system theme changes
 */

export const themeInitScript = `
(function () {
  try {
    // Performance: Use requestIdleCallback if available
    const scheduleTask = window.requestIdleCallback || window.setTimeout;

    const initTheme = () => {
      const theme = localStorage.getItem("theme") || "system";
      const getSystemTheme = () => {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
      };
      const effectiveTheme =
        theme === "system" ? getSystemTheme() : theme;

      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(effectiveTheme);
      root.setAttribute("data-theme", effectiveTheme);

      // Add theme-loaded class to show content
      root.classList.add("theme-loaded");

      // Dispatch custom event for other scripts
      window.dispatchEvent(
        new CustomEvent("theme-loaded", {
          detail: { theme: effectiveTheme },
        })
      );
    };

    // Initialize immediately for critical rendering
    initTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (e) => {
      const currentTheme = localStorage.getItem("theme");
      if (currentTheme === "system") {
        scheduleTask(() => initTheme());
      }
    });
  } catch (e) {
    // Fallback to light theme if localStorage is not available
    console.warn("Theme initialization failed:", e);
    document.documentElement.classList.add("theme-loaded");
  }
})();
`; 