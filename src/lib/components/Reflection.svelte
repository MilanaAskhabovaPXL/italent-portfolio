<script>
	const reflectionPoints = [
		{
			icon: '💡',
			heading: 'What I Learned',
			text: 'Through the iLearning journey, I discovered that real growth happens outside the comfort zone. Participating in seminaries, international programs, and hackathons taught me more about adaptability, collaboration, and creative problem-solving than any single course could. Each activity brought a unique lens through which I could see both technical challenges and human dynamics differently.'
		},
		{
			icon: '🔄',
			heading: 'How I Changed',
			text: "Before starting this iLearning track, I was primarily focused on technical skills. Now I understand that soft skills — communication, empathy, and leadership — are equally critical in a professional environment. The Business Innovation Project in particular reshaped how I approach problem-solving: I now always start with \"Who is this for?\" before asking \"How do we build this?\""
		},
		{
			icon: '🚀',
			heading: 'Looking Forward',
			text: "These experiences have ignited a passion for interdisciplinary work — where technology, business strategy, and human-centered design converge. As I move forward in my career, I want to keep building bridges between different domains and disciplines. The iLearning program has given me the confidence to step into unfamiliar situations and contribute meaningfully, and I'm excited to carry this mindset into whatever comes next."
		}
	];
</script>

<section id="reflection" class="reflection">
	<div class="container">
		<h2 class="section-title">Reflection</h2>
		<p class="section-subtitle">Looking back to look forward</p>

		<div class="reflection-grid">
			{#each reflectionPoints as point (point.heading)}
				<div class="reflection-card">
					<div class="reflection-icon" aria-hidden="true">{point.icon}</div>
					<h3 class="reflection-heading">{point.heading}</h3>
					<p class="reflection-text">{point.text}</p>
				</div>
			{/each}
		</div>

		<blockquote class="reflection-quote">
			<p>
				"The iLearning journey isn't just a curriculum requirement — it's a mindset shift. It teaches
				you to be curious, brave, and human in everything you do."
			</p>
			<cite>— Milana Askhabova</cite>
		</blockquote>
	</div>
</section>

<style>
	.reflection {
		background: var(--color-white);
	}

	.reflection-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--spacing-xl);
		margin-bottom: var(--spacing-2xl);
	}

	.reflection-card {
		background: var(--color-light);
		border-radius: var(--radius-xl);
		padding: var(--spacing-xl);
		border-left: 4px solid var(--color-primary);
		transition: all var(--transition-base);
	}

	.reflection-card:hover {
		transform: translateY(-3px);
		box-shadow: var(--shadow-lg);
	}

	.reflection-icon {
		font-size: 2rem;
		margin-bottom: var(--spacing-md);
	}

	.reflection-heading {
		font-size: var(--font-size-xl);
		font-weight: 700;
		color: var(--color-dark);
		margin-bottom: var(--spacing-md);
	}

	.reflection-text {
		font-size: var(--font-size-base);
		color: var(--color-gray-600);
		line-height: 1.8;
	}

	.reflection-quote {
		background: var(--gradient-primary);
		border-radius: var(--radius-xl);
		padding: var(--spacing-2xl);
		text-align: center;
		color: var(--color-white);
		position: relative;
		overflow: hidden;
	}

	.reflection-quote::before {
		content: '"';
		position: absolute;
		top: -20px;
		left: var(--spacing-xl);
		font-size: 10rem;
		opacity: 0.1;
		font-family: Georgia, serif;
		line-height: 1;
	}

	.reflection-quote p {
		font-size: var(--font-size-xl);
		font-style: italic;
		font-weight: 500;
		line-height: 1.7;
		margin-bottom: var(--spacing-md);
		position: relative;
	}

	.reflection-quote cite {
		font-size: var(--font-size-base);
		opacity: 0.8;
		font-style: normal;
		font-weight: 600;
	}

	@media (max-width: 900px) {
		.reflection-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
