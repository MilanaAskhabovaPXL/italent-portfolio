<script>
	import { onMount, onDestroy } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Activities from '$lib/components/Activities.svelte';
	import Reflection from '$lib/components/Reflection.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { activeSection, windowWidth } from '$lib/stores/index.js';
	import { getActiveSection } from '$lib/services/scrollService.js';

	const SECTION_IDS = ['home', 'about', 'activities', 'reflection', 'contact'];

	let cleanup;

	onMount(() => {
		function onScroll() {
			const current = getActiveSection(SECTION_IDS);
			activeSection.set(current);
		}

		function onResize() {
			windowWidth.set(window.innerWidth);
		}

		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onResize, { passive: true });
		// Run once on load
		onScroll();
		onResize();

		cleanup = () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onResize);
		};
	});

	onDestroy(() => {
		if (cleanup) cleanup();
	});
</script>

<svelte:head>
	<title>Milana Askhabova | I-Talent Portfolio</title>
	<meta name="description" content="I-Talent Portfolio van Milana Askhabova aan Hogeschool PXL" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="theme-color" content="#667eea" />
</svelte:head>

<Navbar />

<main id="main-content">
	<Hero />
	<About />
	<Activities />
	<Reflection />
</main>

<Footer />

<style>
	#main-content {
		scroll-margin-top: 80px;
	}
</style>
