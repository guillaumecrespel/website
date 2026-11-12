/**
 * The only client-side script of the site (~1 KB). Everything works without it
 * except the theme toggle; it adds polish and fallbacks for older browsers.
 */

type ThemeChoice = 'light' | 'dark' | 'system';
const THEME_KEY = 'theme';
const THEME_CYCLE: ThemeChoice[] = ['light', 'dark', 'system'];
const media = window.matchMedia('(prefers-color-scheme: dark)');

function readTheme(): ThemeChoice {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    return stored === 'light' || stored === 'dark' ? stored : 'system';
  } catch {
    return 'system';
  }
}

function applyRoot(choice: ThemeChoice) {
  const dark = choice === 'dark' || (choice === 'system' && media.matches);
  document.documentElement.classList.toggle('dark', dark);
  document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
}

function syncButtons(choice: ThemeChoice) {
  for (const button of document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]')) {
    button.dataset.state = choice;
    const label = button.dataset[`label${choice[0].toUpperCase()}${choice.slice(1)}`];
    const template = button.dataset.labelTemplate;
    if (label && template) {
      const text = template.replace('{theme}', label);
      button.setAttribute('aria-label', text);
      button.title = text;
    }
  }
}

function applyTheme(choice: ThemeChoice) {
  applyRoot(choice);
  syncButtons(choice);
}

function setTheme(choice: ThemeChoice) {
  try {
    if (choice === 'system') localStorage.removeItem(THEME_KEY);
    else localStorage.setItem(THEME_KEY, choice);
  } catch {
    /* storage unavailable: theme still applies for this page view */
  }
  syncButtons(choice);
  const animate =
    'startViewTransition' in document &&
    document.visibilityState === 'visible' &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (animate) document.startViewTransition(() => applyRoot(choice));
  else applyRoot(choice);
}

function initTheme() {
  applyTheme(readTheme());
  media.addEventListener('change', () => {
    if (readTheme() === 'system') applyTheme('system');
  });
  document.addEventListener('click', (event) => {
    const button = (event.target as Element).closest<HTMLButtonElement>('[data-theme-toggle]');
    if (!button) return;
    const current = readTheme();
    setTheme(THEME_CYCLE[(THEME_CYCLE.indexOf(current) + 1) % THEME_CYCLE.length]);
  });
}

/** Invoker commands (`commandfor`) fallback for browsers that lack them. */
function initDialogs() {
  const supportsInvokers = 'commandForElement' in HTMLButtonElement.prototype;

  if (!supportsInvokers) {
    document.addEventListener('click', (event) => {
      const trigger = (event.target as Element).closest<HTMLButtonElement>('button[commandfor]');
      if (!trigger) return;
      const target = document.getElementById(trigger.getAttribute('commandfor') ?? '');
      if (!(target instanceof HTMLDialogElement)) return;
      const command = trigger.getAttribute('command');
      if (command === 'show-modal') target.showModal();
      if (command === 'close') target.close();
    });
  }

  for (const dialog of document.querySelectorAll<HTMLDialogElement>('dialog.sheet')) {
    dialog.addEventListener('click', (event) => {
      const target = event.target as Element;
      // Light dismiss: a click on the backdrop (the dialog box itself) closes it.
      if (target === dialog) dialog.close();
      // In-page links (e.g. to a timeline entry) close the sheet before scrolling.
      if (target.closest('a[href^="#"]')) dialog.close();
    });
  }
}

/** Close the mobile menu after following an in-page link. */
function initMenu() {
  const menu = document.getElementById('site-menu');
  if (!menu || !('hidePopover' in menu)) return;
  menu.addEventListener('click', (event) => {
    if ((event.target as Element).closest('a')) menu.hidePopover();
  });
}

/** Highlight the navigation entry of the section being read. */
function initScrollSpy() {
  const links = new Map<string, HTMLAnchorElement[]>();
  for (const link of document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]')) {
    const id = link.hash.slice(1);
    links.set(id, [...(links.get(id) ?? []), link]);
  }
  if (!links.size || !('IntersectionObserver' in window)) return;

  const visible = new Set<string>();
  const order = [...links.keys()];

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target.id);
        else visible.delete(entry.target.id);
      }
      // Last visible section in document order wins; none when between sections.
      const current = order.filter((id) => visible.has(id)).at(-1);
      for (const [id, anchors] of links) {
        for (const anchor of anchors) {
          if (id === current) anchor.setAttribute('aria-current', 'true');
          else anchor.removeAttribute('aria-current');
        }
      }
    },
    { rootMargin: '-40% 0px -55% 0px' },
  );

  for (const id of order) {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  }
}

/**
 * Adds a class the first time an element enters the viewport. CSS hides the
 * "before" state only under `html.js` and `prefers-reduced-motion:
 * no-preference`, so content is always visible without this script.
 */
function playOnView(selector: string, className: string, options: IntersectionObserverInit) {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;
  if (!('IntersectionObserver' in window)) {
    for (const element of elements) element.classList.add(className);
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add(className);
      observer.unobserve(entry.target);
    }
  }, options);
  for (const element of elements) observer.observe(element);
}

function initOnView() {
  // Highlighter under titles.
  playOnView('.marker', 'is-marked', { rootMargin: '0px 0px -15% 0px' });
  // Step-by-step process of the apps section.
  playOnView('[data-steps]', 'is-visible', { threshold: 0.2 });
  // Check marks of completed missions in the timeline.
  playOnView('.timeline-item[data-play]', 'is-played', { rootMargin: '0px 0px -30% 0px' });
}

initTheme();
initOnView();
initDialogs();
initMenu();
initScrollSpy();
