<script>
	import { REFLECTION_CONTENT } from '$lib/utils/constants.js';
</script>

<section id="reflection" class="py-20 bg-white">
	<div class="max-w-6xl mx-auto px-6">
		<h2 class="text-4xl font-extrabold text-center text-gray-900 mb-3">{REFLECTION_CONTENT.title}</h2>

		<div class="grid md:grid-cols-2 gap-8">
			{#each REFLECTION_CONTENT.sections as section (section.heading)}
				<div class="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#5ba4d4]
				            hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
					<h3 class="text-xl font-bold text-gray-900 mb-4">{section.heading}</h3>
					<p class="text-gray-600 leading-relaxed">{section.content}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
