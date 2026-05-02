<script>
	import { activeSection, isMenuOpen } from '$lib/stores/index.js';
	import { smoothScroll } from '$lib/services/scrollService.js';
	import { NAV_LINKS } from '$lib/utils/constants.js';

	let scrolled = false;

	function handleNavClick(e, href) {
		e.preventDefault();
		const sectionId = href.replace('#', '');
		smoothScroll(sectionId);
		isMenuOpen.set(false);
	}

	function toggleMenu() {
		isMenuOpen.update((v) => !v);
	}
</script>

<svelte:window
	on:scroll={() => {
		scrolled = window.scrollY > 50;
	}}
/>

<nav class="navbar" class:scrolled>
	<div class="navbar-inner container">
		<a
			href="#home"
			class="navbar-brand"
			on:click={(e) => handleNavClick(e, '#home')}
			aria-label="Go to top"
		>
			<span class="brand-icon">🎓</span>
			<span class="brand-text">Milana Askhabova</span>
		</a>

		<button
			class="hamburger"
			class:open={$isMenuOpen}
			on:click={toggleMenu}
			aria-label="Toggle navigation menu"
			aria-expanded={$isMenuOpen}
		>
			<span></span>
			<span></span>
			<span></span>
		</button>

		<ul class="nav-links" class:open={$isMenuOpen} role="list">
			{#each NAV_LINKS as link (link.id)}
				<li>
					<a
						href={link.href}
						class="nav-link"
						class:active={$activeSection === link.id}
						on:click={(e) => handleNavClick(e, link.href)}
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: var(--z-navbar);
		padding: var(--spacing-md) 0;
		transition: all var(--transition-base);
		background: transparent;
	}

	.navbar.scrolled {
		background: rgba(255, 255, 255, 0.97);
		backdrop-filter: blur(12px);
		box-shadow: var(--shadow-md);
		padding: var(--spacing-sm) 0;
	}

	.navbar-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.navbar-brand {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
		font-weight: 700;
		font-size: var(--font-size-lg);
		color: var(--color-white);
		transition: color var(--transition-base);
	}

	.navbar.scrolled .navbar-brand {
		color: var(--color-dark);
	}

	.brand-icon {
		font-size: var(--font-size-xl);
	}

	.nav-links {
		display: flex;
		gap: var(--spacing-xl);
		align-items: center;
	}

	.nav-link {
		font-weight: 500;
		font-size: var(--font-size-base);
		color: rgba(255, 255, 255, 0.85);
		padding: var(--spacing-xs) var(--spacing-sm);
		border-radius: var(--radius-sm);
		transition: all var(--transition-base);
		position: relative;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 0;
		height: 2px;
		background: var(--gradient-primary);
		transition: width var(--transition-base);
		border-radius: var(--radius-sm);
	}

	.nav-link:hover::after,
	.nav-link.active::after {
		width: 100%;
	}

	.navbar.scrolled .nav-link {
		color: var(--color-gray-800);
	}

	.nav-link:hover,
	.nav-link.active {
		color: var(--color-primary);
	}

	.navbar.scrolled .nav-link:hover,
	.navbar.scrolled .nav-link.active {
		color: var(--color-primary);
	}

	/* Hamburger button */
	.hamburger {
		display: none;
		flex-direction: column;
		gap: 5px;
		padding: var(--spacing-xs);
		cursor: pointer;
	}

	.hamburger span {
		display: block;
		width: 25px;
		height: 2px;
		background: var(--color-white);
		border-radius: var(--radius-sm);
		transition: all var(--transition-base);
	}

	.navbar.scrolled .hamburger span {
		background: var(--color-dark);
	}

	.hamburger.open span:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}

	.hamburger.open span:nth-child(2) {
		opacity: 0;
	}

	.hamburger.open span:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	@media (max-width: 768px) {
		.hamburger {
			display: flex;
		}

		.nav-links {
			position: fixed;
			top: 0;
			right: -100%;
			width: 70%;
			max-width: 280px;
			height: 100vh;
			background: var(--color-white);
			flex-direction: column;
			align-items: flex-start;
			padding: 5rem var(--spacing-xl) var(--spacing-xl);
			gap: var(--spacing-md);
			box-shadow: var(--shadow-xl);
			transition: right var(--transition-base);
		}

		.nav-links.open {
			right: 0;
		}

		.nav-link {
			color: var(--color-gray-800);
			font-size: var(--font-size-lg);
		}

		.nav-link:hover,
		.nav-link.active {
			color: var(--color-primary);
		}
	}
</style>
