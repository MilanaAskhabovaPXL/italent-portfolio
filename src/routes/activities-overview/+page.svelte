<script>
	import { ACTIVITIES } from '$lib/utils/constants.js';
	let currentIndex = 0;
	let slideDirection = 'right';

	const activityXFactor = {
		'ddd': ['innovation', 'personal'],
		'bip': ['international', 'personal', 'engagement'],
		'hackathon': ['innovation', 'personal', 'engagement'],
		'csc': ['international', 'personal', 'engagement']
	};

	const xFactorLabels = {
		'innovation': 'Innovatie',
		'international': 'Internationalisering',
		'personal': 'Persoonlijke Ontwikkeling',
		'engagement': 'Engagement & Empathie'
	};

	function nextSlide() {
		slideDirection = 'right';
		currentIndex = (currentIndex + 1) % ACTIVITIES.length;
	}

	function prevSlide() {
		slideDirection = 'left';
		currentIndex = (currentIndex - 1 + ACTIVITIES.length) % ACTIVITIES.length;
	}

	function goToSlide(index) {
		slideDirection = index > currentIndex ? 'right' : 'left';
		currentIndex = index;
	}

	$: currentActivity = ACTIVITIES[currentIndex];
	$: currentXFactors = activityXFactor[currentActivity.id] || [];
</script>

<svelte:head>
	<title>Activiteiten Overzicht | Portfolio</title>
</svelte:head>

<style>
	.slide-enter {
		animation: slideIn 0.5s ease-out;
	}

	@keyframes slideIn {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.progress-bar {
		height: 3px;
		background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
		border-radius: 2px;
	}
</style>

<main class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6">
	<div class="max-w-4xl mx-auto">
		<!-- Header -->
		<div class="text-center mb-12">
			<h1 class="text-4xl font-extrabold text-gray-900 mb-3">Mijn Activiteiten</h1>
			<p class="text-lg text-gray-600">Swipe door mijn I-Talent ervaringen</p>
		</div>

		<!-- Slide Container -->
		<div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
			<!-- Progress Bar -->
			<div class="h-1 bg-gray-200">
				<div class="progress-bar" style="width: {((currentIndex + 1) / ACTIVITIES.length) * 100}%"></div>
			</div>

			<!-- Main Slide -->
			<div class="slide-enter relative min-h-[500px] bg-gradient-to-br from-white via-blue-50 to-purple-50 p-8 md:p-12">
				<!-- Content -->
				<div class="flex flex-col h-full justify-between">
					<div>
						<div class="flex items-start justify-between mb-6">
							<div>
								<span class="text-sm font-semibold text-blue-600 uppercase tracking-wide">Activiteit {currentIndex + 1} van {ACTIVITIES.length}</span>
								<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-tight">{currentActivity.title}</h2>
							</div>
						</div>

						<div class="flex flex-wrap gap-2 mb-8">
							{#each currentActivity.tags as tag (tag)}
								<span class="inline-block bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-semibold">{tag}</span>
							{/each}
						</div>

						<p class="text-sm text-gray-500 mb-6 font-semibold">
							{currentActivity.date} • {currentActivity.location} • {currentActivity.duration}
						</p>

						<!-- X-Factor Tags -->
						<div class="mb-8 pb-6 border-b border-gray-200">
							<h3 class="text-xs font-bold text-gray-600 uppercase tracking-wider mb-3">Koppeling X-Factor:</h3>
							<div class="flex flex-wrap gap-2">
								{#each currentXFactors as xf (xf)}
									<span class="inline-flex items-center gap-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full px-3 py-1 text-sm font-semibold">
										{#if xf === 'innovation'}
											<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>
										{:else if xf === 'international'}
											<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5h2c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3v2c2.76 0 5-2.24 5-5-2.24 0-5-2.24-5-5z"/></svg>
										{:else if xf === 'personal'}
											<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
										{:else if xf === 'engagement'}
											<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
										{/if}
										{xFactorLabels[xf]}
									</span>
								{/each}
							</div>
						</div>

						<div class="space-y-6">
							<div>
								<h3 class="font-bold text-gray-900 mb-2">Korte Uitleg</h3>
								<p class="text-gray-700 leading-relaxed text-lg">{currentActivity.description}</p>
							</div>

							<div>
								<h3 class="font-bold text-gray-900 mb-2">Mijn Doelstelling</h3>
								<p class="text-gray-700 leading-relaxed">{currentActivity.eigenDoelstelling}</p>
							</div>

							<div>
								<h3 class="font-bold text-gray-900 mb-2">Het Hoogtepunt</h3>
								<p class="text-gray-700 leading-relaxed">{currentActivity.highlight}</p>
							</div>

							<div class="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
								<h3 class="font-bold text-gray-900 mb-2">Key Learnings</h3>
								<ul class="space-y-1">
									{#each currentActivity.details.slice(0, 3) as detail (detail)}
										<li class="text-sm text-gray-700">• {detail}</li>
									{/each}
								</ul>
							</div>
						</div>
					</div>

					<!-- CTA Button -->
					<div class="mt-8 pt-6 border-t border-gray-200 space-y-3">
						<a
							href="/italent-portfolio/activities/{currentActivity.id}"
							class="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition-all duration-200"
						>
							Lees volledig verslag
						</a>
						<a
							href="/italent-portfolio/xfactor"
							class="inline-block w-full text-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 rounded-lg transition-all duration-200"
						>
							Ontdek mijn X-Factor
						</a>
					</div>
				</div>
			</div>

			<!-- Navigation Controls -->
			<div class="bg-white p-6 md:p-8 flex items-center justify-between gap-4">
				<button
					on:click={prevSlide}
					class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 rounded-lg transition-colors duration-200"
				>
					← Vorige
				</button>

				<!-- Dots Navigation -->
				<div class="flex gap-2 justify-center flex-wrap">
					{#each ACTIVITIES as _, index (index)}
						<button
							on:click={() => goToSlide(index)}
							class="w-3 h-3 rounded-full transition-all duration-300 {index === currentIndex
								? 'bg-blue-600 w-8'
								: 'bg-gray-300 hover:bg-gray-400'}"
							aria-label="Go to slide {index + 1}"
						/>
					{/each}
				</div>

				<button
					on:click={nextSlide}
					class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors duration-200"
				>
					Volgende →
				</button>
			</div>
		</div>

		<!-- Footer Link -->
		<div class="text-center mt-8">
			<a href="/#activities" class="text-blue-600 hover:text-blue-700 font-semibold">← Terug naar activiteiten</a>
		</div>
	</div>
</main>
