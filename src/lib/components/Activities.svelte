<script>
	import { ACTIVITIES, PERSONAL_DEVELOPMENT, EXTRA_ACTIVITIES } from '$lib/utils/constants.js';
	import ActivityCard from '$lib/components/ActivityCard.svelte';

	/** @param {string} path */
	function getImageUrl(path) {
		return `/italent-portfolio/images/${path}`;
	}
</script>

<section id="activities" class="py-20 bg-white">
	<div class="max-w-6xl mx-auto px-6">

		<h2 class="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-3">Mijn Activiteiten</h2>
		<p class="text-base sm:text-lg text-gray-500 text-center mb-10 sm:mb-16">Een overzicht van alle I-Talent activiteiten</p>

		<h3 class="text-xl font-bold text-gray-900 mb-2 flex items-center justify-between gap-3">
			<div class="flex items-center gap-3">
				<span class="w-1 h-6 rounded-full gradient-primary inline-block"></span>
				Geselecteerde activiteiten
			</div>
			<a href="/italent-portfolio/timeline"
			   class="text-sm bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 whitespace-nowrap">
				Mijn I-Talent
			</a>
		</h3>
		<p class="text-sm text-gray-500 mb-8 ml-4">Vier activiteiten uitgewerkt met volledig verslag en reflectie</p>
		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
						<p class="text-xs font-semibold text-[#5ba4d4] mb-3">{item.date} - {item.duration} - {item.location}</p>
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
			<p class="text-sm text-gray-500 mb-8 ml-4">Extra hackathons uit eigen initiatief</p>
			<div class="grid sm:grid-cols-2 gap-6 mb-16">
				<div class="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl border-2 border-red-200 overflow-hidden hover:border-red-400 hover:shadow-md transition-all duration-300">
					<div class="p-6">
						<div class="flex items-start justify-between mb-2">
							<h4 class="text-base font-bold text-gray-900 leading-snug">Cyber Security Challenge Belgium</h4>
							<span class="text-xs font-bold bg-red-200 text-red-800 px-3 py-1 rounded-full">Hackathon</span>
						</div>
						<p class="text-xs font-semibold text-red-600 mb-3">14-15 maart 2025 - Online - 32 uur</p>
						<p class="text-sm text-gray-600 leading-relaxed mb-4">Deelname in team "Onions" aan Capture The Flag competitie. Flags gevonden via Python scripts, steganografie en metadata-analyse.</p>
						<div class="flex flex-wrap gap-2">
							<span class="bg-red-100 text-red-700 border border-red-200 rounded-full px-3 py-1 text-xs font-semibold">CTF</span>
							<span class="bg-red-100 text-red-700 border border-red-200 rounded-full px-3 py-1 text-xs font-semibold">Cybersecurity</span>
							<span class="bg-red-100 text-red-700 border border-red-200 rounded-full px-3 py-1 text-xs font-semibold">Python</span>
						</div>
					</div>
				</div>

				<div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-200 overflow-hidden hover:border-amber-400 hover:shadow-md transition-all duration-300">
					<div class="p-6">
						<div class="flex items-start justify-between mb-2">
							<h4 class="text-base font-bold text-gray-900 leading-snug">Info Support: CodeBash</h4>
							<span class="text-xs font-bold bg-amber-200 text-amber-800 px-3 py-1 rounded-full">Hackathon</span>
						</div>
						<p class="text-xs font-semibold text-amber-600 mb-3">25 oktober 2025 - Mechelen - 7 uur</p>
						<p class="text-sm text-gray-600 leading-relaxed mb-4">Algoritmische programmeerwedstrijd in teamverband. Complexe logische problemen oplossen en code optimaliseren onder tijdsdruk.</p>
						<div class="flex flex-wrap gap-2">
							<span class="bg-amber-100 text-amber-700 border border-amber-200 rounded-full px-3 py-1 text-xs font-semibold">Algoritmen</span>
							<span class="bg-amber-100 text-amber-700 border border-amber-200 rounded-full px-3 py-1 text-xs font-semibold">Competitie</span>
							<span class="bg-amber-100 text-amber-700 border border-amber-200 rounded-full px-3 py-1 text-xs font-semibold">Teamwork</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div>
	
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
