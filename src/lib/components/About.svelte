<script>
	import { MILANA_PROFILE } from '$lib/utils/constants.js';
</script>

<section id="about" class="about">
	<div class="container">
		<h2 class="section-title">About Me</h2>
		<p class="section-subtitle">Getting to know who I am</p>

		<div class="about-grid">
			<div class="about-avatar-col">
				<div class="avatar-wrapper">
					<div class="avatar-circle">
						<span class="avatar-initials">MA</span>
					</div>
					<div class="avatar-ring" aria-hidden="true"></div>
				</div>
				<div class="about-meta">
					<h3 class="about-name">{MILANA_PROFILE.name}</h3>
					<p class="about-role">{MILANA_PROFILE.title}</p>
					<p class="about-program">{MILANA_PROFILE.program}</p>
				</div>
			</div>

			<div class="about-content-col">
				<h3 class="about-heading">My iLearning Story</h3>
				<p class="about-bio">{MILANA_PROFILE.bio}</p>

				<div class="stats-grid">
					{#each MILANA_PROFILE.stats as stat (stat.label)}
						<div class="stat-card">
							<span class="stat-value">{stat.value}</span>
							<span class="stat-label">{stat.label}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.about {
		background: var(--color-light);
	}

	.about-grid {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: var(--spacing-3xl);
		align-items: center;
	}

	/* Avatar column */
	.about-avatar-col {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-lg);
	}

	.avatar-wrapper {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		margin-bottom: var(--spacing-md);
	}

	.avatar-circle {
		width: 140px;
		height: 140px;
		border-radius: 50%;
		background: var(--gradient-primary);
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: var(--shadow-purple);
		position: relative;
		z-index: 1;
	}

	.avatar-initials {
		font-size: var(--font-size-3xl);
		font-weight: 800;
		color: var(--color-white);
		letter-spacing: 2px;
	}

	.avatar-ring {
		position: absolute;
		width: 160px;
		height: 160px;
		border-radius: 50%;
		border: 3px dashed rgba(102, 126, 234, 0.3);
		animation: spin 12s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.about-meta {
		text-align: center;
	}

	.about-name {
		font-size: var(--font-size-xl);
		font-weight: 700;
		color: var(--color-dark);
		margin-bottom: var(--spacing-xs);
	}

	.about-role {
		color: var(--color-primary);
		font-weight: 500;
		font-size: var(--font-size-base);
		margin-bottom: var(--spacing-xs);
	}

	.about-program {
		font-size: var(--font-size-sm);
		color: var(--color-gray-600);
	}

	/* Content column */
	.about-content-col {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-lg);
	}

	.about-heading {
		font-size: var(--font-size-2xl);
		font-weight: 700;
		color: var(--color-dark);
	}

	.about-bio {
		font-size: var(--font-size-base);
		line-height: 1.8;
		color: var(--color-gray-800);
	}

	/* Stats */
	.stats-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--spacing-md);
	}

	.stat-card {
		background: var(--color-white);
		border-radius: var(--radius-lg);
		padding: var(--spacing-lg);
		text-align: center;
		box-shadow: var(--shadow-sm);
		border: 1px solid var(--color-gray-200);
		transition: transform var(--transition-base);
	}

	.stat-card:hover {
		transform: translateY(-3px);
		box-shadow: var(--shadow-purple);
	}

	.stat-value {
		display: block;
		font-size: var(--font-size-3xl);
		font-weight: 800;
		background: var(--gradient-primary);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.stat-label {
		display: block;
		font-size: var(--font-size-sm);
		color: var(--color-gray-600);
		font-weight: 500;
		margin-top: var(--spacing-xs);
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	@media (max-width: 768px) {
		.about-grid {
			grid-template-columns: 1fr;
			gap: var(--spacing-xl);
		}

		.stats-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
