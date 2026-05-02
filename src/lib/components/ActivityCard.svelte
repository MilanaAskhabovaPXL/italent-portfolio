<script>
	/** @type {{id: string, title: string, subtitle: string, description: string, tags: string[], icon: string}} */
	export let activity;
</script>

<article class="activity-card">
	<div class="card-icon" aria-hidden="true">{activity.icon}</div>
	<div class="card-body">
		<p class="card-subtitle">{activity.subtitle}</p>
		<h3 class="card-title">{activity.title}</h3>
		<p class="card-description">{activity.description}</p>
		<div class="card-tags" aria-label="Tags">
			{#each activity.tags as tag (tag)}
				<span class="tag">{tag}</span>
			{/each}
		</div>
	</div>
</article>

<style>
	.activity-card {
		background: var(--color-white);
		border-radius: var(--radius-xl);
		padding: var(--spacing-xl);
		box-shadow: var(--shadow-md);
		border: 1px solid var(--color-gray-200);
		transition: all var(--transition-base);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		height: 100%;
	}

	.activity-card:hover {
		transform: translateY(-6px);
		box-shadow: var(--shadow-purple);
		border-color: rgba(102, 126, 234, 0.3);
	}

	.card-icon {
		font-size: 2.5rem;
		line-height: 1;
		padding: var(--spacing-md);
		background: var(--color-gray-100);
		border-radius: var(--radius-lg);
		align-self: flex-start;
	}

	.card-body {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
		flex: 1;
	}

	.card-subtitle {
		font-size: var(--font-size-sm);
		font-weight: 600;
		color: var(--color-primary);
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.card-title {
		font-size: var(--font-size-xl);
		font-weight: 700;
		color: var(--color-dark);
		line-height: 1.3;
	}

	.card-description {
		font-size: var(--font-size-base);
		color: var(--color-gray-600);
		line-height: 1.7;
		flex: 1;
	}

	.card-tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-xs);
		margin-top: var(--spacing-sm);
	}

	.tag {
		background: var(--color-gray-100);
		color: var(--color-gray-800);
		padding: var(--spacing-xs) var(--spacing-sm);
		border-radius: var(--radius-full);
		font-size: var(--font-size-sm);
		font-weight: 500;
		border: 1px solid var(--color-gray-200);
		transition: all var(--transition-fast);
	}

	.activity-card:hover .tag {
		background: rgba(102, 126, 234, 0.1);
		border-color: rgba(102, 126, 234, 0.3);
		color: var(--color-primary);
	}
</style>
