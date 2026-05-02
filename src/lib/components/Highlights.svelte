<script>
	import { HIGHLIGHTS } from '$lib/utils/constants.js';

	const categoryColors = {
		International: '#667eea',
		Achievement: '#f093fb',
		Learning: '#764ba2',
		Milestone: '#48c774'
	};
</script>

<section id="highlights" class="highlights">
	<div class="container">
		<h2 class="section-title">Key Highlights</h2>
		<p class="section-subtitle">Milestones and achievements along the way</p>

		<div class="timeline" role="list">
			{#each HIGHLIGHTS as item, i (item.title)}
				<div class="timeline-item" class:right={i % 2 === 1} role="listitem">
					<div class="timeline-content">
						<span
							class="timeline-category"
							style="background: {categoryColors[item.category] || '#667eea'}20; color: {categoryColors[
								item.category
							] || '#667eea'}"
						>
							{item.category}
						</span>
						<div class="timeline-year">{item.year}</div>
						<h3 class="timeline-title">{item.title}</h3>
						<p class="timeline-description">{item.description}</p>
					</div>
					<div class="timeline-dot" aria-hidden="true"></div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.highlights {
		background: var(--color-light);
	}

	/* Timeline layout */
	.timeline {
		position: relative;
		padding: var(--spacing-xl) 0;
	}

	.timeline::before {
		content: '';
		position: absolute;
		left: 50%;
		top: 0;
		bottom: 0;
		width: 2px;
		background: var(--gradient-primary);
		transform: translateX(-50%);
	}

	.timeline-item {
		position: relative;
		width: 45%;
		margin-bottom: var(--spacing-2xl);
		margin-left: 0;
	}

	.timeline-item.right {
		margin-left: 55%;
	}

	.timeline-content {
		background: var(--color-white);
		border-radius: var(--radius-xl);
		padding: var(--spacing-xl);
		box-shadow: var(--shadow-md);
		border: 1px solid var(--color-gray-200);
		transition: all var(--transition-base);
		position: relative;
	}

	.timeline-content:hover {
		transform: translateY(-3px);
		box-shadow: var(--shadow-purple);
		border-color: rgba(102, 126, 234, 0.3);
	}

	.timeline-dot {
		position: absolute;
		top: var(--spacing-xl);
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background: var(--gradient-primary);
		box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
	}

	/* Left item: dot on right edge pointing to center line */
	.timeline-item:not(.right) .timeline-dot {
		right: -7%;
	}

	/* Right item: dot on left edge pointing to center line */
	.timeline-item.right .timeline-dot {
		left: -7%;
	}

	.timeline-category {
		display: inline-block;
		padding: var(--spacing-xs) var(--spacing-sm);
		border-radius: var(--radius-full);
		font-size: var(--font-size-sm);
		font-weight: 600;
		margin-bottom: var(--spacing-sm);
	}

	.timeline-year {
		font-size: var(--font-size-2xl);
		font-weight: 800;
		background: var(--gradient-primary);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: var(--spacing-xs);
	}

	.timeline-title {
		font-size: var(--font-size-lg);
		font-weight: 700;
		color: var(--color-dark);
		margin-bottom: var(--spacing-sm);
	}

	.timeline-description {
		font-size: var(--font-size-base);
		color: var(--color-gray-600);
		line-height: 1.7;
	}

	@media (max-width: 768px) {
		.timeline::before {
			left: 16px;
		}

		.timeline-item,
		.timeline-item.right {
			width: 100%;
			margin-left: 40px;
		}

		.timeline-item:not(.right) .timeline-dot,
		.timeline-item.right .timeline-dot {
			left: -32px;
			right: auto;
		}
	}
</style>
