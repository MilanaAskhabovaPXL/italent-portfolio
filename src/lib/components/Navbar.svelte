<script>
	import { fly } from 'svelte/transition';
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
		<button class="md:hidden flex flex-col justify-center gap-[5px] w-9 h-9 cursor-pointer bg-transparent border-0 p-0"
		        on:click={() => isMenuOpen.update((v) => !v)}
		        aria-label="Toggle navigatiemenu"
		        aria-expanded={$isMenuOpen}>
			<span class="block w-6 h-0.5 rounded transition-all duration-300 origin-center
			             {scrolled ? 'bg-gray-900' : 'bg-white'}
			             {$isMenuOpen ? 'translate-y-[8px] rotate-45' : ''}"></span>
			<span class="block w-6 h-0.5 rounded transition-all duration-300
			             {scrolled ? 'bg-gray-900' : 'bg-white'}
			             {$isMenuOpen ? 'opacity-0 scale-x-0' : ''}"></span>
			<span class="block w-6 h-0.5 rounded transition-all duration-300 origin-center
			             {scrolled ? 'bg-gray-900' : 'bg-white'}
			             {$isMenuOpen ? '-translate-y-[8px] -rotate-45' : ''}"></span>
		</button>
	</div>
</nav>

<!-- Mobile panel (outside nav so overlay doesn't fight z-index) -->
{#if $isMenuOpen}
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
	<div class="md:hidden fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
	     on:click={() => isMenuOpen.set(false)}
	     transition:fly={{ duration: 200, x: 0, y: 0, opacity: 0 }}>
	</div>

	<div class="md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white shadow-2xl z-50 flex flex-col"
	     transition:fly={{ x: 320, duration: 280 }}>

		<!-- Drawer header -->
		<div class="flex items-center justify-between px-6 py-5 border-b border-gray-100">
			<div>
				<p class="font-bold text-gray-900 text-sm leading-tight">Milana Askhabova</p>
				<p class="text-xs text-[#5ba4d4] mt-0.5">I-Talent Portfolio</p>
			</div>
			<button class="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
			        on:click={() => isMenuOpen.set(false)}
			        aria-label="Sluit menu">
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
				     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
				     class="text-gray-600">
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			</button>
		</div>

		<!-- Nav links -->
		<ul class="flex flex-col px-4 py-4 gap-1 list-none m-0 flex-1">
			{#each NAV_LINKS as link (link.id)}
				<li>
					<a href={link.href}
					   class="flex items-center gap-3 font-medium text-base rounded-xl px-4 py-3 transition-colors
					          {$activeSection === link.id
					            ? 'bg-[#5ba4d4]/10 text-[#5ba4d4]'
					            : 'text-gray-700 hover:bg-gray-50 hover:text-[#5ba4d4]'}"
					   on:click={(e) => handleNavClick(e, link.href)}>
						{#if $activeSection === link.id}
							<span class="w-1.5 h-1.5 rounded-full bg-[#5ba4d4] flex-shrink-0"></span>
						{:else}
							<span class="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0"></span>
						{/if}
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}
