<script>
	export let activity;
</script>

<article class="group bg-white rounded-2xl border border-gray-200 shadow-md flex flex-col h-full
                hover:-translate-y-1.5 hover:shadow-xl hover:border-[#5ba4d4]/30 transition-all duration-300">

	<div class="p-6 border-b border-gray-100">
		<h3 class="text-lg font-bold text-gray-900 leading-snug mb-1">
			<a href="/italent-portfolio/activities/{activity.id}"
			   class="hover:text-[#5ba4d4] transition-colors duration-200 inline-flex items-center gap-1.5">
				{activity.title}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
				     width="14" height="14"
				     class="text-[#5ba4d4] opacity-0 group-hover:opacity-100 flex-shrink-0 transition-opacity duration-200">
					<path fill-rule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clip-rule="evenodd" />
				</svg>
			</a>
		</h3>
		<p class="text-sm font-semibold text-[#5ba4d4]">{activity.dates}</p>
		<p class="text-xs text-gray-400 mt-0.5">{activity.location} - {activity.duration}</p>
	</div>

	<div class="p-6 flex flex-col gap-4 flex-1">
		<p class="text-sm text-gray-600 leading-relaxed">{activity.description}</p>

<div class="flex flex-wrap gap-2">
			{#each activity.tags as tag (tag)}
				<span class="bg-gray-100 text-gray-700 border border-gray-200 rounded-full px-3 py-1 text-xs font-semibold
				             hover:bg-[#5ba4d4]/10 hover:border-[#5ba4d4] hover:text-[#5ba4d4] transition-all duration-150 cursor-default">
					{tag}
				</span>
			{/each}
		</div>
	</div>

</article>
