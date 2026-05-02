<script>
	import { smoothScroll } from '$lib/services/scrollService.js';
	import { NAV_LINKS } from '$lib/utils/constants.js';

	const currentYear = new Date().getFullYear();

	function handleLink(e, href) {
		e.preventDefault();
		smoothScroll(href.replace('#', ''));
	}
</script>

<footer class="footer">
	<div class="footer-gradient"></div>
	<div class="container footer-inner">
		<div class="footer-brand">
			<span class="footer-icon">🎓</span>
			<div>
				<p class="footer-name">Milana Askhabova</p>
				<p class="footer-tagline">iLearning Portfolio · PXL University</p>
			</div>
		</div>

		<nav class="footer-nav" aria-label="Footer navigation">
			<ul role="list">
				{#each NAV_LINKS as link (link.id)}
					<li>
						<a href={link.href} on:click={(e) => handleLink(e, link.href)}>{link.label}</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="footer-copy">
			<p>© {currentYear} Milana Askhabova. Built with Svelte &amp; ❤️</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		position: relative;
		background: var(--color-dark);
		color: rgba(255, 255, 255, 0.8);
		padding: var(--spacing-2xl) 0 var(--spacing-xl);
		overflow: hidden;
	}

	.footer-gradient {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: var(--gradient-primary);
	}

	.footer-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-xl);
		text-align: center;
	}

	.footer-brand {
		display: flex;
		align-items: center;
		gap: var(--spacing-md);
	}

	.footer-icon {
		font-size: 2rem;
	}

	.footer-name {
		font-weight: 700;
		font-size: var(--font-size-lg);
		color: var(--color-white);
	}

	.footer-tagline {
		font-size: var(--font-size-sm);
		opacity: 0.6;
		margin-top: var(--spacing-xs);
	}

	.footer-nav ul {
		display: flex;
		gap: var(--spacing-xl);
		flex-wrap: wrap;
		justify-content: center;
	}

	.footer-nav a {
		font-size: var(--font-size-sm);
		color: rgba(255, 255, 255, 0.6);
		transition: color var(--transition-base);
		font-weight: 500;
	}

	.footer-nav a:hover {
		color: var(--color-primary);
	}

	.footer-copy {
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		padding-top: var(--spacing-lg);
		width: 100%;
		text-align: center;
	}

	.footer-copy p {
		font-size: var(--font-size-sm);
		opacity: 0.5;
	}
</style>
