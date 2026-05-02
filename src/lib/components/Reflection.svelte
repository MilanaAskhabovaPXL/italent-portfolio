<script>
	import { REFLECTION_CONTENT } from '$lib/utils/constants.js';
</script>

<section id="reflection" class="py-20 bg-white">
	<div class="max-w-4xl mx-auto px-6">
		<h2 class="text-4xl font-extrabold text-center text-gray-900 mb-12">{REFLECTION_CONTENT.title}</h2>

		<div class="flex flex-col gap-5">
			{#each REFLECTION_CONTENT.paragraphs as paragraph}
				<p class="text-gray-700 leading-relaxed text-base">{paragraph}</p>
			{/each}
		</div>
	</div>
</section>
