<script>
	import { MILANA_PROFILE, SEMINARIES } from '$lib/utils/constants.js';

	/** @param {string} path */
	function getImageUrl(path) {
		return `/italent-portfolio/images/${path}`;
	}
</script>

<section id="about" class="py-12 sm:py-20 bg-gray-50">
	<div class="max-w-6xl mx-auto px-6">
		<h2 class="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-3">Over mij</h2>

		<div class="grid md:grid-cols-3 gap-8 md:gap-12 mb-16 items-start">
			<div class="flex flex-col items-center gap-4">
				<div class="relative flex items-center justify-center mb-2">
					<div class="w-44 h-44 sm:w-60 sm:h-60 rounded-full gradient-primary flex items-center justify-center shadow-blue z-10">
						<img class="rounded-2xl w-full object-cover max-h-[420px] shadow-md" src="/italent-portfolio/images/me/me.png" alt="MA"/>
					</div>
				
				</div>
				<div class="text-center">
					<h3 class="text-lg font-bold text-gray-900">{MILANA_PROFILE.name}</h3>
					<p class="text-sm font-semibold text-[#5ba4d4]">{MILANA_PROFILE.title}</p>
					<p class="text-sm text-gray-500">{MILANA_PROFILE.university}</p>
				</div>
			</div>

			<div class="md:col-span-2 flex flex-col gap-6">
				<div class="flex flex-col gap-4">
					{#each MILANA_PROFILE.introduction as paragraph}
						<p class="text-base text-gray-600 leading-relaxed">{paragraph}</p>
					{/each}
				</div>


				<div>
					<h4 class="text-lg font-bold text-gray-900 mb-3">Mijn sterke punten</h4>
					<ul class="grid grid-cols-1 sm:grid-cols-3 gap-3 list-none p-0 m-0">
						{#each MILANA_PROFILE.strengths as strength}
							<li class="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm font-medium text-gray-800">
								<span class="w-2 h-2 rounded-full bg-[#5ba4d4] flex-shrink-0"></span>
								{strength}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>

		<div class="mb-10 mt-10">
			<h3 class="text-2xl font-bold text-gray-900 text-center mb-8">Hobbies</h3>
			<div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
				{#each MILANA_PROFILE.hobbies as hobby}
					<div class="flex flex-col gap-2">
						{#if hobby.images.length === 1}
							<div class="rounded-2xl overflow-hidden h-52 shadow-sm">
								<img src={getImageUrl(hobby.images[0])} alt={hobby.name}
								     class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
							</div>
						{:else}
							<div class="flex gap-2 h-52">
								{#each hobby.images as imgSrc}
									<div class="flex-1 rounded-2xl overflow-hidden shadow-sm min-w-0">
										<img src={getImageUrl(imgSrc)} alt={hobby.name}
										     class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
									</div>
								{/each}
							</div>
						{/if}
						<p class="text-center text-sm font-semibold text-gray-700">{hobby.name}</p>
					</div>
				{/each}
			</div>
		</div>

		<div class="bg-white rounded-2xl p-4 sm:p-8 mb-8 shadow-sm">
			<h3 class="text-2xl font-bold text-gray-900 text-center mb-8">Seminaries</h3>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
				{#each SEMINARIES as seminary}
					<div class="bg-gray-50 border border-gray-200 rounded-xl p-5 text-center hover:border-[#5ba4d4] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
						<h4 class="text-sm font-bold text-gray-900 mb-1">{seminary.title}</h4>
						<p class="text-xs font-semibold text-[#5ba4d4] mb-1">{seminary.date} - {seminary.duration}</p>
						{#if seminary.location}<p class="text-xs text-gray-400 mb-2">{seminary.location}</p>{/if}
						<p class="text-xs text-gray-500 leading-relaxed">{seminary.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes spin {
		to { transform: rotate(360deg); }
	}
</style>
