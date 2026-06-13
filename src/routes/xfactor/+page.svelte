<script>
    import { ACTIVITIES } from '$lib/utils/constants.js';
    import { onMount } from 'svelte';

    const X_FACTOR_CORE = [
        {
            id: 'passion',
            label: '(em)passie',
            icon: 'heart',
            color: 'from-red-500 to-rose-600',
            activities: ['bip', 'hackathon', 'csc'],
            description: 'Echte betrokkenheid en hartstocht voor het vakgebied. Ik toonde passie door vrijwillig deel te nemen aan 3 hackathons en volledig in te zetten in multidisciplinaire teams.',
            howAchieved: 'Ik nam deel aan 3 hackathons: Hack the Future (verplicht), CodeBash en CSC (beide vrijwillig). Dit toonde echte engagement en passie voor het vakgebied. Ik gaf niet op als het moeilijk werd en zette volledig in voor het team, ondanks mijn beperkte voorkennnis.',
            angle: 270
        },
        {
            id: 'entrepreneurship',
            label: 'ondernemend & innovatief',
            icon: 'lightbulb',
            color: 'from-amber-500 to-orange-600',
            activities: ['ddd', 'hackathon'],
            description: 'Onderzoekend handelen en het zoeken naar innovatieve oplossingen. Ik creëerde DDD-concepten en bouwde Flutter-apps onder tijdsdruk.',
            howAchieved: 'Ik volgde de DDD-route en leerde over Domain Driven Design-concepten. In hackathons bouwde ik Flutter-apps onder stressvolle omstandigheden. Ik zocht creatieve oplossingen, dacht out-of-the-box en experimenteerde met nieuwe technologieën.',
            angle: 0
        },
        {
            id: 'multidisciplinary',
            label: 'multi- & disciplinariteit',
            icon: 'users',
            color: 'from-blue-500 to-cyan-600',
            activities: ['bip'],
            description: 'Samenwerking in diverse teams met verschillende achtergronden. Bij BIP werkte ik met marketing- en managementstudenten uit verschillende landen.',
            howAchieved: 'Bij het BIP-programma werkte ik in een multidisciplinaire groep met marketing- en managementstudenten uit Duitsland en Kroatië. Ik leerde om samen te werken met mensen uit verschillende vakgebieden en culturen, wat mijn perspectief verbreedde.',
            angle: 90
        },
        {
            id: 'international',
            label: '(internationaal) samennetwerking',
            icon: 'globe',
            color: 'from-purple-500 to-indigo-600',
            activities: ['bip', 'csc'],
            description: 'Perspectief verruimen in internationale context. Ik werkte met teams uit Duitsland, Kroatië en online met studenten wereldwijd.',
            howAchieved: 'Bij BIP communiceerde ik in het Engels met teamleden uit buitenlandse universiteiten. Bij CSC werkte ik met een online team van studenten uit verschillende landen. Dit gaf mij international werkervaring en flexibiliteit om in internationale omgevingen te functioneren.',
            angle: 180
        }
    ];

    let selectedCore = null;
    let isSpinning = false;
    let isFlipped = false; 
    let spinInterval = null;
    let spinIndex = 0;
    let wrapperEl;

    onMount(() => {
        return () => {
            if (spinInterval) clearInterval(spinInterval);
        };
    });

    $: selectedCoreData = selectedCore ? X_FACTOR_CORE.find(c => c.id === selectedCore) : null;

    $: if (selectedCore && !isSpinning) {
        isFlipped = false;
    }

    function getActivityById(id) {
        return ACTIVITIES.find(a => a.id === id);
    }

    function getPosition(angle, distance = 140) { // Afstand iets verkleind voor betere mobiele schaalbaarheid
        const rad = (angle * Math.PI) / 180;
        return {
            x: Math.cos(rad) * distance,
            y: Math.sin(rad) * distance
        };
    }

    function toggleSpin() {
        if (isSpinning) {
            isSpinning = false;
            if (spinInterval) {
                clearInterval(spinInterval);
                spinInterval = null;
            }
        } else {
            isSpinning = true;
            isFlipped = false;
            
            if (selectedCore === null) {
                spinIndex = 0;
                selectedCore = X_FACTOR_CORE[0].id;
            }

            if (!spinInterval) {
                spinInterval = setInterval(() => {
                    isFlipped = false; 
                    spinIndex = (spinIndex + 1) % X_FACTOR_CORE.length;
                    selectedCore = X_FACTOR_CORE[spinIndex].id;
                }, 9000);
            }
        }
    }

    function selectCore(core) {
        if (isSpinning) {
            isSpinning = false;
            if (spinInterval) {
                clearInterval(spinInterval);
                spinInterval = null;
            }
        }
        selectedCore = core.id;
        isFlipped = false;
    }
</script>

<svelte:head>
    <title>Mijn X-Factor | PXL Digital</title>
</svelte:head>

<style>
    :global(body) {
        overflow-x: hidden;
    }

    .x-factor-container {
        perspective: 1000px;
        position: relative;
        width: 100%;
        height: 100%;
        transform: scale(0.8); /* Standaard schaal voor desktop */
        transform-origin: center center;
        transition: transform 0.3s ease;
    }

    @media (max-width: 768px) {
        .x-factor-container {
            transform: scale(0.65); /* Verkleint het wiel op tablets/mobiel zodat het past */
        }
    }

    .x-logo {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 140px; 
        font-weight: 900;
        color: rgba(102, 126, 234, 0.06);
        z-index: 0;
        letter-spacing: -10px;
        line-height: 1;
    }

    .core-items-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .core-item {
        position: absolute;
        left: 50%;
        top: 50%;
        cursor: pointer;
        transition: all 0.3s ease;
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: -50px;
        margin-top: -50px;
    }

    .core-circle {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
        border: 4px solid white; 
        position: relative;
        z-index: 2;
    }

    .core-item:hover .core-circle {
        transform: scale(1.1);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
    }

    .core-icon {
        width: 50px;
        height: 50px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .core-label {
        position: absolute;
        top: 108px; 
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
        font-weight: 800; 
        font-size: 18px; 
        text-align: center;
        width: 250px; 
        opacity: 0; 
        transition: all 0.3s ease;
        pointer-events: none;
        color: white; 
        text-shadow: 0 2px 4px rgba(0,0,0,0.5); 
        letter-spacing: -0.01em;
        line-height: 1.1;
    }

    .core-item:hover .core-label {
        opacity: 1;
        text-shadow: 0 0 15px currentColor; 
    }

    .spin-wrapper {
        animation: spinSlow 30s linear infinite;
        animation-play-state: paused;
    }

    .spin-wrapper.is-spinning {
        animation-play-state: running;
    }

    @keyframes spinSlow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }

    .activity-tag {
        display: inline-block;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 13px;
        font-weight: 600;
        margin: 6px 6px 6px 0;
        cursor: pointer;
        transition: all 0.3s ease;
        text-decoration: none;
        color: white;
    }

    .activity-tag:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    }

    .glow-text {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: 900;
    }

    .fade-in {
        animation: fadeIn 0.6s ease-out;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .glow {
        box-shadow: 0 8px 40px rgba(102, 126, 234, 0.5);
    }

    /* FLIP CARD CSS */
    .flip-container {
        perspective: 1500px;
        width: 100%;
    }

    .flip-inner {
        position: relative;
        width: 100%;
        transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
        transform-style: preserve-3d;
        display: grid; 
    }

    .is-flipped {
        transform: rotateY(180deg);
    }

    .flip-front, .flip-back {
        grid-area: 1 / 1;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden; 
    }

    .flip-back {
        transform: rotateY(180deg);
    }
</style>

<main class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 left-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>

    <div class="relative z-10 px-4 sm:px-6">
        <div class="text-center pt-12 pb-8">
            <h1 class="text-4xl sm:text-6xl font-black mb-2 glow-text">Mijn X-Factor</h1>
            <p class="text-lg sm:text-xl text-gray-300">PXL Digital</p>
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-12">
            <button
                on:click={toggleSpin}
                class="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-bold transition-all hover:scale-105 shadow-lg text-white"
            >
                {isSpinning ? '⏹ Stop draaien' : '▶ Start draaien'}
            </button>
            <button
                on:click={() => {
                    isSpinning = false;
                    isFlipped = false;
                    selectedCore = null;
                    if (spinInterval) {
                        clearInterval(spinInterval);
                        spinInterval = null;
                    }
                }}
                class="w-full sm:w-auto px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-bold transition-all hover:scale-105 text-white"
            >
                Alles resetten
            </button>
        </div>

        <div class="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-2 sm:px-6 items-center lg:items-start">
            <div class="flex-shrink-0 w-[320px] sm:w-[400px] lg:w-[500px] h-[320px] sm:h-[400px] lg:h-[500px] flex items-center justify-center">
                <div class="x-factor-container w-full h-full relative">
                    <div class="x-logo">X</div>

                    <div 
                        bind:this={wrapperEl}
                        class="core-items-wrapper spin-wrapper"
                        class:is-spinning={isSpinning}
                        style="{isSpinning && isFlipped ? 'animation-play-state: paused;' : ''}"
                    >
                        {#each X_FACTOR_CORE as core (core.id)}
                            {@const pos = getPosition(core.angle, 120)}
                            <div
                                class="core-item"
                                style="left: calc(50% + {pos.x}px); top: calc(50% + {pos.y}px);"
                                on:click={() => selectCore(core)}
                                on:keydown={(e) => e.key === 'Enter' && selectCore(core)}
                                role="button"
                                tabindex="0"
                            >
                                <div class="core-circle bg-gradient-to-br {core.color} {selectedCore === core.id ? 'glow' : ''}">
                                    {#if core.icon === 'heart'}
                                        <svg class="core-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                                    {:else if core.icon === 'lightbulb'}
                                        <svg class="core-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" /></svg>
                                    {:else if core.icon === 'users'}
                                        <svg class="core-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>
                                    {:else if core.icon === 'globe'}
                                        <svg class="core-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.34.16-2h4.68c.09.66.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>
                                    {/if}
                                </div>
                                <div class="core-label">
                                    <span class={core.textColor}>{core.label}</span>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>

            <div class="w-full max-w-2xl">
            {#if selectedCoreData}
                <div class="flip-container fade-in px-2 sm:px-0">
                    <div class="flip-inner" class:is-flipped={isFlipped}>
                        
                        <div class="flip-front bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 sm:p-8 border border-slate-600 shadow-2xl h-full flex flex-col justify-between">
                            <div>
                                <div class="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                                    <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br {selectedCoreData.color} flex items-center justify-center flex-shrink-0 shadow-lg mx-auto sm:mx-0">
                                        {#if selectedCoreData.icon === 'heart'}
                                            <svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                                        {:else if selectedCoreData.icon === 'lightbulb'}
                                            <svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" /></svg>
                                        {:else if selectedCoreData.icon === 'users'}
                                            <svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>
                                        {:else if selectedCoreData.icon === 'globe'}
                                            <svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.34.16-2h4.68c.09.66.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>
                                        {/if}
                                    </div>
                                    <div class="text-center sm:text-left">
                                        <h2 class="text-2xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">{selectedCoreData.label}</h2>
                                        <p class="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed">{selectedCoreData.description}</p>
                                    </div>
                                </div>

                                <div class="mt-4 pt-4 sm:mt-6 sm:pt-6 border-t border-slate-600">
                                    <h3 class="text-base sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white">Gekoppelde Activiteiten:</h3>
                                    <div class="flex flex-wrap gap-2 sm:gap-3">
                                        {#each selectedCoreData.activities as activityId (activityId)}
                                            {@const activity = getActivityById(activityId)}
                                            <a
                                                href="/italent-portfolio/activities/{activity.id}"
                                                class="activity-tag bg-gradient-to-r {selectedCoreData.color} shadow-md hover:shadow-lg text-xs sm:text-sm"
                                            >
                                                {activity.title}
                                            </a>
                                        {/each}
                                    </div>
                                </div>
                            </div>

                            <div class="mt-6 pt-4 sm:mt-8 sm:pt-6 border-t border-slate-600 flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <button 
                                    on:click={() => isFlipped = true} 
                                    class="w-full sm:flex-1 px-4 py-3 bg-slate-600 hover:bg-slate-500 rounded-lg font-bold transition-all shadow-md text-white border border-slate-500 text-sm sm:text-base"
                                >
                                    Hoe heb ik dit bereikt? ⤾
                                </button>
                                <a
                                    href="/italent-portfolio/activities-overview"
                                    class="w-full sm:flex-1 text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-bold transition-all shadow-lg text-white text-sm sm:text-base"
                                >
                                    Bekijk overzicht
                                </a>
                            </div>
                        </div>

                        <div class="flip-back bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 sm:p-8 border border-slate-600 shadow-2xl h-full flex flex-col">
                            <div class="flex items-center gap-4 mb-4 sm:mb-6">
                                <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br {selectedCoreData.color} flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <span class="text-xl sm:text-2xl font-bold text-white">X</span>
                                </div>
                                <h2 class="text-2xl sm:text-3xl font-black text-white">{selectedCoreData.label}</h2>
                            </div>

                            <div class="bg-slate-900/50 rounded-xl p-4 sm:p-6 border border-slate-600 mb-6 sm:mb-8 flex-grow">
                                <h3 class="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">Hoe heb ik dit bereikt?</h3>
                                <p class="text-sm sm:text-lg text-gray-200 leading-relaxed font-medium">
                                    {selectedCoreData.howAchieved}
                                </p>
                            </div>

                            <button
                                on:click={() => isFlipped = false}
                                class="w-full px-6 py-3 sm:py-4 bg-slate-600 hover:bg-slate-500 rounded-lg font-bold transition-all shadow-md text-white border border-slate-500 mt-auto text-base sm:text-lg flex justify-center items-center gap-2"
                            >
                                ⤾ Terug draaien
                            </button>
                        </div>
                        
                    </div>
                </div>
            {:else}
                <div class="text-center fade-in h-full flex items-center justify-center px-4 sm:px-0">
                    <div class="inline-block bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-6 sm:p-12 backdrop-blur">
                        <p class="text-xl sm:text-2xl text-gray-100 font-semibold mb-2 sm:mb-3">Kies een dimensie</p>
                        <p class="text-gray-300 text-sm sm:text-lg">Klik op een bol in het diagram links</p>
                        <p class="text-gray-400 mt-2 text-xs sm:text-sm italic">...of laat het wiel draaien via de knop bovenaan</p>
                    </div>
                </div>
            {/if}
            </div>
        </div>

        <div class="flex flex-col items-center gap-6 mt-12 sm:mt-16 pb-12">
            <a 
                href="/italent-portfolio/#reflection" 
                class="w-full max-w-xs text-center px-6 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 rounded-xl font-black transition-all hover:scale-105 shadow-xl text-white text-base sm:text-lg tracking-wide"
            >
                Naar Mijn Eindreflectie ➔
            </a>

            <a href="/italent-portfolio/#activities" class="text-blue-400 hover:text-blue-300 font-semibold transition-colors text-base sm:text-lg">
                ← Terug naar portfolio
            </a>
        </div>
    </div>
</main>