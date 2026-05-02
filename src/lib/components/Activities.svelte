<script>
	import { ACTIVITIES } from '$lib/utils/constants.js';
	import ActivityCard from '$lib/components/ActivityCard.svelte';
</script>

<section id="activities" class="activities">
	<div class="container">
		<h2 class="section-title">My Activities</h2>
		<p class="section-subtitle">Key iLearning experiences that shaped my journey</p>

		<div class="activities-grid">
			{#each ACTIVITIES as activity (activity.id)}
				<ActivityCard {activity} />
			{/each}
		</div>
	</div>
</section>

<style>
	.activities {
		background: var(--color-white);
	}

	.activities-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--spacing-xl);
	}

	@media (max-width: 900px) {
		.activities-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 600px) {
		.activities-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
