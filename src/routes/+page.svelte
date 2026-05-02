<script>
	import { onMount, onDestroy } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Activities from '$lib/components/Activities.svelte';
	import Highlights from '$lib/components/Highlights.svelte';
	import Reflection from '$lib/components/Reflection.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { activeSection } from '$lib/stores/index.js';
	import { getActiveSection } from '$lib/services/scrollService.js';

	const SECTION_IDS = ['home', 'about', 'activities', 'highlights', 'reflection'];

	/** @type {() => void} */
	let cleanup;

	onMount(() => {
		function onScroll() {
			const current = getActiveSection(SECTION_IDS);
			activeSection.set(current);
		}

		window.addEventListener('scroll', onScroll, { passive: true });
		// Run once on load
		onScroll();

		cleanup = () => window.removeEventListener('scroll', onScroll);
	});

	onDestroy(() => {
		if (cleanup) cleanup();
	});
</script>

<svelte:head>
	<title>Milana Askhabova | iLearning Portfolio</title>
	<meta name="description" content="iLearning Portfolio of Milana Askhabova at PXL University" />
</svelte:head>

<Navbar />

<main id="main-content">
	<Hero />
	<About />
	<Activities />
	<Highlights />
	<Reflection />
</main>

<Footer />

<style>
	#main-content {
		/* Push content below fixed navbar on skip links, if any */
		scroll-margin-top: 80px;
	}
</style>
