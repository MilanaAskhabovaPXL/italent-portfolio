/**
 * scrollService.js
 * Service layer: pure functions for scroll-related business logic
 */

/**
 * Smoothly scrolls to the element with the given section id.
 * Falls back to native scroll if element is not found.
 * @param {string} sectionId - The id of the target section element
 * @param {number} [offset=80] - Offset in pixels (e.g. to account for a fixed navbar)
 */
export function smoothScroll(sectionId, offset = 80) {
	const element = document.getElementById(sectionId);
	if (!element) return;

	const top = element.getBoundingClientRect().top + window.scrollY - offset;
	window.scrollTo({ top, behavior: 'smooth' });
}

/**
 * Determines which section is currently active based on scroll position.
 * Returns the id of the section whose top edge is closest to (but still above)
 * the given threshold from the top of the viewport.
 *
 * @param {string[]} sectionIds - Ordered list of section ids to check
 * @param {number} [threshold=200] - Pixel offset from top of viewport
 * @returns {string} The id of the active section, or the first section if none match
 */
export function getActiveSection(sectionIds, threshold = 200) {
	if (!sectionIds.length) return '';

	let active = sectionIds[0];

	for (const id of sectionIds) {
		const el = document.getElementById(id);
		if (!el) continue;

		const rect = el.getBoundingClientRect();
		if (rect.top <= threshold) {
			active = id;
		}
	}

	return active;
}
