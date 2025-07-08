import { getLangFromUrl, type Lang, useTranslations } from './ui.js';

/**
 * Hook pour utiliser les traductions dans les composants React
 */
export function useI18n() {
  const lang = getLangFromUrl(new URL(window.location.href));
  const t = useTranslations(lang);
  
  return {
    lang,
    t,
  };
}

/**
 * Fonction pour obtenir la langue actuelle côté client
 */
export function getCurrentLang(): Lang {
  if (typeof window === 'undefined') return 'fr';
  return getLangFromUrl(new URL(window.location.href));
}

/**
 * Fonction pour changer de langue
 */
export function changeLang(newLang: Lang) {
  if (typeof window === 'undefined') return;
  
  const currentPath = window.location.pathname;
  const pathSegments = currentPath.split('/');
  
  // Si on est déjà sur une route avec langue, on la remplace
  if (pathSegments[1] && ['fr', 'en'].includes(pathSegments[1])) {
    pathSegments[1] = newLang;
  } else {
    // Sinon on insère la langue au début
    pathSegments.splice(1, 0, newLang);
  }
  
  const newPath = pathSegments.join('/');
  window.location.href = newPath;
}

/**
 * Fonction pour obtenir l'URL d'une langue spécifique
 */
export function getLangUrl(lang: Lang, currentPath?: string): string {
  if (typeof window === 'undefined') return `/${lang}`;
  
  const path = currentPath || window.location.pathname;
  const pathSegments = path.split('/');
  
  // Si on est déjà sur une route avec langue, on la remplace
  if (pathSegments[1] && ['fr', 'en'].includes(pathSegments[1])) {
    pathSegments[1] = lang;
  } else {
    // Sinon on insère la langue au début
    pathSegments.splice(1, 0, lang);
  }
  
  return pathSegments.join('/');
} 