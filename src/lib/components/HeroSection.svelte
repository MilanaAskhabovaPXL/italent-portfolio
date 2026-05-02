<script>
	import { onMount } from 'svelte';
	import { smoothScroll } from '$lib/services/scrollService.js';
	import { MILANA_PROFILE } from '$lib/utils/constants.js';

	let visible = false;

	onMount(() => {
		setTimeout(() => { visible = true; }, 100);
	});
</script>

<section id="home" class="relative min-h-screen flex items-center overflow-hidden">
	<div class="absolute inset-0 gradient-hero"></div>
	<div class="absolute inset-0"
	     style="background: radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 60%), radial-gradient(ellipse at 10% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)">
	</div>

	<div class="relative z-10 w-full max-w-6xl mx-auto px-6 text-center text-white transition-all duration-700
	            {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}">

		<div class="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 text-sm font-medium mb-8 tracking-wide">
			I-Talent Portfolio 2026
		</div>

		<h1 class="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
			<span class="block mt-2 text-4xl md:text-5xl"
			      style="background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
				{MILANA_PROFILE.name}
			</span>
		</h1>

		<p class="text-xl font-medium mb-3 opacity-90">{MILANA_PROFILE.title}</p>
		<p class="text-base opacity-70 mb-12 italic">{MILANA_PROFILE.university}</p>

		<div class="flex gap-4 justify-center flex-wrap mb-16">
			<a href="#about"
			   class="px-8 py-3 rounded-full font-semibold bg-white text-[#2d87c3] hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
			   on:click|preventDefault={() => smoothScroll('about')}>
				Over mij
			</a>
			<a href="#activities"
			   class="px-8 py-3 rounded-full font-semibold bg-white text-[#2d87c3] hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
			   on:click|preventDefault={() => smoothScroll('activities')}>
				Activiteiten zien
			</a>
		</div>
	</div>
</section>
