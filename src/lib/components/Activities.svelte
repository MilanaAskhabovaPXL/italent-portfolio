<script>
	import { ACTIVITIES, PERSONAL_DEVELOPMENT, EXTRA_ACTIVITIES } from '$lib/utils/constants.js';
	import ActivityCard from '$lib/components/ActivityCard.svelte';

	const imageModules = import.meta.glob('/src/images/**/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });

	/** @param {string} path */
	function getImageUrl(path) {
		return /** @type {string|undefined} */ (imageModules[`/src/images/${path}`]);
	}
</script>

<section id="activities" class="py-20 bg-white">
	<div class="max-w-6xl mx-auto px-6">

		<h2 class="text-4xl font-extrabold text-center text-gray-900 mb-3">Mijn Activiteiten</h2>
		<p class="text-lg text-gray-500 text-center mb-16">Een overzicht van alle I-Talent activiteiten</p>

		<h3 class="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
			<span class="w-1 h-6 rounded-full gradient-primary inline-block"></span>
			Geselecteerde activiteiten
		</h3>
		<p class="text-sm text-gray-500 mb-8 ml-4">Drie activiteiten uitgewerkt met volledig verslag en reflectie</p>
		<div class="grid md:grid-cols-3 gap-8 mb-16">
			{#each ACTIVITIES as activity (activity.id)}
				<ActivityCard {activity} />
			{/each}
		</div>

		<div class="mb-16">
			<h3 class="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
				<span class="w-1 h-6 rounded-full gradient-primary inline-block"></span>
				Persoonlijke ontwikkeling
			</h3>
			<p class="text-sm text-gray-500 mb-8 ml-4">Workshops en sessies gericht op persoonlijke en professionele groei</p>
			<div class="grid sm:grid-cols-2 gap-4">
				{#each PERSONAL_DEVELOPMENT as item}
					<div class="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#5ba4d4]/40 hover:shadow-md transition-all duration-300">
						<h4 class="text-base font-bold text-gray-900 mb-1 leading-snug">{item.title}</h4>
						<p class="text-xs font-semibold text-[#5ba4d4] mb-3">{item.date} · {item.duration} · {item.location}</p>
						<p class="text-sm text-gray-600 leading-relaxed">{item.description}</p>
					</div>
				{/each}
			</div>
		</div>

		<div>
			<h3 class="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
				<span class="w-1 h-6 rounded-full gradient-primary inline-block"></span>
				Andere deelnames
			</h3>
	
			<div class="grid sm:grid-cols-2 gap-6">
				{#each EXTRA_ACTIVITIES as item}
					<div class="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:border-[#5ba4d4]/40 hover:shadow-md transition-all duration-300">
						{#if item.images && item.images.length}
							<div class="flex gap-1 h-40">
								{#each item.images as img (img.src)}
									<img src={getImageUrl(img.src)} alt={img.alt}
									     class="flex-1 object-cover min-w-0"
									     style="flex: 1" />
								{/each}
							</div>
						{/if}
						<div class="p-6">
							<h4 class="text-base font-bold text-gray-900 mb-1 leading-snug">{item.title}</h4>
							<p class="text-xs font-semibold text-[#5ba4d4] mb-3">{item.date} - {item.duration} - {item.location}</p>
							<p class="text-sm text-gray-600 leading-relaxed mb-4">{item.description}</p>
							<div class="flex flex-wrap gap-2">
								{#each item.tags as tag (tag)}
									<span class="bg-white border border-gray-200 text-gray-600 rounded-full px-3 py-1 text-xs font-semibold">{tag}</span>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

	</div>
</section>
