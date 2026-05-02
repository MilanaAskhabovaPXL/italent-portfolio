<script>
	import { activeSection, isMenuOpen } from '$lib/stores/index.js';
	import { smoothScroll } from '$lib/services/scrollService.js';
	import { NAV_LINKS } from '$lib/utils/constants.js';

	let scrolled = false;

	function handleNavClick(e, href) {
		e.preventDefault();
		smoothScroll(href.replace('#', ''));
		isMenuOpen.set(false);
	}
</script>

<svelte:window on:scroll={() => { scrolled = window.scrollY > 50; }} />

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300
            {scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}">
	<div class="max-w-6xl mx-auto px-6 flex items-center justify-between">

		<!-- Logo -->
		<a href="#home"
		   class="flex items-center gap-2 font-bold text-lg transition-colors duration-300
		          {scrolled ? 'text-gray-900' : 'text-white'}"
		   on:click={(e) => handleNavClick(e, '#home')}
		   aria-label="Ga naar boven">
			<span>Milana Askhabova</span>
		</a>

		<!-- Desktop links -->
		<ul class="hidden md:flex gap-8 items-center list-none m-0 p-0">
			{#each NAV_LINKS as link (link.id)}
				<li>
					<a href={link.href}
					   class="font-medium text-sm transition-all duration-300 relative
					          {$activeSection === link.id
					            ? 'text-[#5ba4d4]'
					            : scrolled ? 'text-gray-700 hover:text-[#5ba4d4]' : 'text-white/85 hover:text-white'}"
					   on:click={(e) => handleNavClick(e, link.href)}>
						{link.label}
						{#if $activeSection === link.id}
							<span class="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded bg-[#5ba4d4]"></span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Hamburger -->
		<button class="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 cursor-pointer bg-transparent border-0 p-0"
		        on:click={() => isMenuOpen.update((v) => !v)}
		        aria-label="Toggle navigatiemenu"
		        aria-expanded={$isMenuOpen}>
			<span class="block w-6 h-0.5 rounded transition-all duration-300 origin-center
			             {scrolled ? 'bg-gray-900' : 'bg-white'}
			             {$isMenuOpen ? 'translate-y-[7px] rotate-45' : ''}"></span>
			<span class="block w-6 h-0.5 rounded transition-all duration-300
			             {scrolled ? 'bg-gray-900' : 'bg-white'}
			             {$isMenuOpen ? 'opacity-0' : ''}"></span>
			<span class="block w-6 h-0.5 rounded transition-all duration-300 origin-center
			             {scrolled ? 'bg-gray-900' : 'bg-white'}
			             {$isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}"></span>
		</button>
	</div>

	<!-- Mobile panel -->
	{#if $isMenuOpen}
		<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
		<div class="md:hidden fixed inset-0 bg-black/20 z-40" on:click={() => isMenuOpen.set(false)}></div>
		<ul class="md:hidden fixed top-0 right-0 w-72 h-full bg-white shadow-2xl flex flex-col gap-1 pt-20 px-8 z-50 list-none m-0">
			{#each NAV_LINKS as link (link.id)}
				<li>
					<a href={link.href}
					   class="font-medium text-gray-800 text-lg transition-colors block py-2 hover:text-[#5ba4d4]
					          {$activeSection === link.id ? 'text-[#5ba4d4]' : ''}"
					   on:click={(e) => handleNavClick(e, link.href)}>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</nav>
