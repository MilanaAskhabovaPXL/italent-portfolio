<script>
	import { onMount } from 'svelte';
	import { smoothScroll } from '$lib/services/scrollService.js';
	import { MILANA_PROFILE } from '$lib/utils/constants.js';

	let visible = false;

	onMount(() => {
		// Trigger entrance animation after mount
		setTimeout(() => {
			visible = true;
		}, 100);
	});

	function handleCta(e) {
		e.preventDefault();
		smoothScroll('about');
	}

	function handleActivitiesLink(e) {
		e.preventDefault();
		smoothScroll('activities');
	}
</script>

<section id="home" class="hero">
	<div class="hero-bg"></div>
	<div class="hero-content container" class:visible>
		<div class="hero-badge">
			<span>🎓</span>
			<span>iLearning Portfolio 2024</span>
		</div>

		<h1 class="hero-title">
			Hi, I'm <br />
			<span class="hero-name">{MILANA_PROFILE.name}</span>
		</h1>

		<p class="hero-subtitle">{MILANA_PROFILE.title}</p>
		<p class="hero-institution">{MILANA_PROFILE.institution}</p>

		<div class="hero-actions">
			<a href="#about" class="btn btn-primary" on:click={handleCta}> Discover My Journey </a>
			<a href="#activities" class="btn btn-outline" on:click={handleActivitiesLink}>
				View Activities
			</a>
		</div>

		<div class="hero-scroll-hint" aria-hidden="true">
			<span class="scroll-arrow">↓</span>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		min-height: 100vh;
		display: flex;
		align-items: center;
		overflow: hidden;
		padding: 0;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		background: var(--gradient-hero);
		z-index: 0;
	}

	.hero-bg::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(ellipse at 80% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 60%),
			radial-gradient(ellipse at 10% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
	}

	.hero-content {
		position: relative;
		z-index: 1;
		text-align: center;
		color: var(--color-white);
		opacity: 0;
		transform: translateY(30px);
		transition:
			opacity 0.8s ease,
			transform 0.8s ease;
	}

	.hero-content.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.hero-badge {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-sm);
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(8px);
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: var(--radius-full);
		padding: var(--spacing-sm) var(--spacing-lg);
		font-size: var(--font-size-sm);
		font-weight: 500;
		margin-bottom: var(--spacing-xl);
		letter-spacing: 0.5px;
	}

	.hero-title {
		font-size: var(--font-size-5xl);
		font-weight: 800;
		line-height: 1.1;
		margin-bottom: var(--spacing-lg);
		letter-spacing: -1px;
	}

	.hero-name {
		display: block;
		font-size: clamp(2.5rem, 6vw, 4rem);
		background: linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.7) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero-subtitle {
		font-size: var(--font-size-xl);
		font-weight: 500;
		margin-bottom: var(--spacing-sm);
		opacity: 0.9;
	}

	.hero-institution {
		font-size: var(--font-size-base);
		opacity: 0.7;
		margin-bottom: var(--spacing-2xl);
		font-style: italic;
	}

	.hero-actions {
		display: flex;
		gap: var(--spacing-md);
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: var(--spacing-3xl);
	}

	.hero-scroll-hint {
		animation: bounce 2s infinite;
		opacity: 0.7;
		font-size: var(--font-size-xl);
	}

	.scroll-arrow {
		display: inline-block;
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(8px);
		}
	}

	@media (max-width: 768px) {
		.hero-title {
			font-size: var(--font-size-3xl);
		}

		.hero-actions {
			flex-direction: column;
			align-items: center;
		}

		.btn {
			width: 100%;
			max-width: 260px;
			text-align: center;
		}
	}
</style>
