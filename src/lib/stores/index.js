import { writable, derived } from 'svelte/store';

/**
 * Tracks which section is currently active (visible in viewport)
 * @type {import('svelte/store').Writable<string>}
 */
export const activeSection = writable('home');

/**
 * Controls whether the mobile navigation menu is open
 * @type {import('svelte/store').Writable<boolean>}
 */
export const isMenuOpen = writable(false);

/**
 * Derived store: true when the menu is open (alias for readability)
 * @type {import('svelte/store').Readable<boolean>}
 */
export const isMobileMenuVisible = derived(isMenuOpen, ($isMenuOpen) => $isMenuOpen);
