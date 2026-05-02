import { ACTIVITIES } from '$lib/utils/constants.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const activity = ACTIVITIES.find((a) => a.id === params.id);
	if (!activity) {
		throw error(404, 'Activiteit niet gevonden');
	}
	return { activity };
}
