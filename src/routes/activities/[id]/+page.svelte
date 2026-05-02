<script>
	export let data;
	const { activity } = data;

	const imageModules = import.meta.glob('/src/images/**/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });

	/** @param {string} path */
	function getImageUrl(path) {
		return /** @type {string|undefined} */ (imageModules[`/src/images/${path}`]);
	}

	/** @param {number} index */
	function imagesAt(index) {
		return (activity.images || []).filter(/** @param {any} img */ img => img.beforeParagraph === index);
	}
</script>

<svelte:head>
	<title>{activity.title} | Milana Askhabova</title>
</svelte:head>

<div class="gradient-hero min-h-[280px] flex flex-col justify-end pb-10 pt-32 px-6">
	<div class="max-w-4xl mx-auto w-full">
		<div class="flex flex-wrap gap-2 mb-4">
			{#each activity.tags as tag (tag)}
				<span class="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
					{tag}
				</span>
			{/each}
		</div>
		<h1 class="text-3xl md:text-4xl font-extrabold text-white leading-tight">{activity.title}</h1>
		<p class="text-white/75 mt-2 font-medium">{activity.dates}</p>
		{#if activity.location}
			<p class="text-white/60 mt-1 text-sm">{activity.location}{activity.duration ? ` · ${activity.duration}` : ''}</p>
		{/if}
	</div>
</div>

<div class="max-w-4xl mx-auto px-6 py-12">

	{#if activity.doelstelling}
		<section class="mb-10">
			<div class="rounded-2xl p-6 border-l-4 border-[#5ba4d4]"
			     style="background: linear-gradient(135deg, rgba(91,164,212,0.08) 0%, rgba(45,135,195,0.08) 100%)">
				<h2 class="text-sm font-bold text-[#5ba4d4] uppercase tracking-wide mb-2">Doelstelling</h2>
				<p class="text-gray-800 leading-relaxed">{activity.doelstelling}</p>
				{#if activity.eigenDoelstelling}
					<p class="text-gray-600 leading-relaxed mt-2 text-sm italic">Eigen doelstelling: {activity.eigenDoelstelling}</p>
				{/if}
				{#if activity.teamSamenstelling}
					<p class="text-gray-600 leading-relaxed mt-2 text-sm">Team: {activity.teamSamenstelling}</p>
				{/if}
			</div>
		</section>
	{/if}

	<!-- Verslag -->
	{#if activity.verslag && activity.verslag.length}
		<section class="mb-10">
			<h2 class="text-xl font-bold text-gray-900 mb-5">Verslag</h2>
			<div class="flex flex-col gap-5">
				{#each activity.verslag as paragraph, i}
					{#each imagesAt(i) as img (img.src)}
						<figure class="m-0">
							<img src={getImageUrl(img.src)} alt={img.alt}
							     class="rounded-2xl w-full object-cover max-h-[420px] shadow-md" />
						</figure>
					{/each}
					<p class="text-gray-700 leading-relaxed text-base">{paragraph}</p>
				{/each}
			</div>
		</section>
	{/if}

	<!-- Reflectie -->
	{#if activity.reflectie && activity.reflectie.length}
		<section class="mb-10">
			<h2 class="text-xl font-bold text-gray-900 mb-5">Reflectie</h2>
			<div class="flex flex-col gap-4">
				{#each activity.reflectie as paragraph}
					<p class="text-gray-700 leading-relaxed text-base">{paragraph}</p>
				{/each}
			</div>
		</section>
	{/if}


<!-- Back button -->
	<a href="/#activities"
	   class="inline-flex items-center gap-2 gradient-primary text-white px-6 py-3 rounded-full font-semibold
	          hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
			<path fill-rule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clip-rule="evenodd" />
		</svg>
		Terug naar overzicht
	</a>
</div>
