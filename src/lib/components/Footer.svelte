<script>
	import { smoothScroll } from '$lib/services/scrollService.js';
	import { NAV_LINKS, SOCIAL_LINKS } from '$lib/utils/constants.js';

	const linkedinImg = '/italent-portfolio/images/contacts/linkedin.png';
	const githubImg = '/italent-portfolio/images/contacts/github.png';

	const currentYear = new Date().getFullYear();

	function handleLink(e, href) {
		e.preventDefault();
		smoothScroll(href.replace('#', ''));
	}
</script>

<footer id="contact" class="relative bg-[#1a1a2e] text-white/80 pt-16 pb-8 overflow-hidden">
	<!-- Top accent line -->
	<div class="absolute top-0 left-0 right-0 h-1 gradient-primary"></div>

	<div class="max-w-6xl mx-auto px-6 flex flex-col items-center gap-8 text-center">

		<!-- Brand -->
		<div class="flex items-center gap-3">
			<div>
				<p class="font-bold text-lg text-white m-0">Milana Askhabova</p>
				<p class="text-sm opacity-60 m-0 mt-0.5">I-Talent Portfolio - Hogeschool PXL</p>
			</div>
		</div>

		<!-- Navigation -->
		<nav aria-label="Footer-navigatie">
			<ul class="flex gap-8 flex-wrap justify-center list-none m-0 p-0">
				{#each NAV_LINKS as link (link.id)}
					<li>
						<a href={link.href}
						   class="text-sm font-medium text-white/60 hover:text-[#5ba4d4] transition-colors"
						   on:click={(e) => handleLink(e, link.href)}>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- Social links -->
		<div class="flex gap-4 justify-center flex-wrap">
			<a href={SOCIAL_LINKS[0].url}
			   class="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3
			          hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 transition-all duration-300"
			   target="_blank" rel="noopener noreferrer">
				<img src={linkedinImg} alt="LinkedIn" class="w-7 h-7 rounded" />
				<span class="text-white font-medium text-sm">LinkedIn</span>
			</a>
			<a href={SOCIAL_LINKS[1].url}
			   class="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3
			          hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 transition-all duration-300"
			   target="_blank" rel="noopener noreferrer">
				<img src={githubImg} alt="GitHub" class="w-7 h-7 rounded-full" style="filter: invert(1)" />
				<span class="text-white font-medium text-sm">GitHub</span>
			</a>
		</div>

		<!-- Copyright -->
		<div class="border-t border-white/10 pt-6 w-full">
			<p class="text-sm opacity-50 m-0">
				I-Talent {currentYear} Milana Askhabova
			</p>
		</div>
	</div>
</footer>
