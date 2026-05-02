import { writable, derived } from 'svelte/store';

/**
 * State Management Layer
 * Svelte stores for reactive state management
 */

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
 * Tracks the current window width (for responsive behavior)
 * @type {import('svelte/store').Writable<number>}
 */
export const windowWidth = writable(typeof window !== 'undefined' ? window.innerWidth : 1024);

/**
 * Derived store: true when screen size is mobile (< 768px)
 * @type {import('svelte/store').Readable<boolean>}
 */
export const isMobile = derived(windowWidth, ($width) => $width < 768);

/**
 * Derived store: true when the menu is open (alias for readability)
 * @type {import('svelte/store').Readable<boolean>}
 */
export const isMobileMenuVisible = derived(isMenuOpen, ($isMenuOpen) => $isMenuOpen);

/**
 * Closes the mobile menu
 */
export function closeMenu() {
	isMenuOpen.set(false);
}

/**
 * Toggles the mobile menu
 */
export function toggleMenu() {
	isMenuOpen.update((open) => !open);
}

/**
 * Updates the active section
 * @param {string} sectionId - The section id to set as active
 */
export function updateActiveSection(sectionId) {
	activeSection.set(sectionId);
}
