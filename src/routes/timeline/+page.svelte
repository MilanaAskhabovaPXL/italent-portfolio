<script>
  import { ACTIVITIES } from '$lib/utils/constants.js';
  import { base } from '$app/paths';

  const timelineData = [
    {
      id: 'csc',
      month: 'MRT',
      year: '2025',
      title: 'Cyber Security Challenge Belgium',
      location: 'Online',
      duration: '32 uur',
      color: '#c0395e',
      tags: ['CTF', 'Cybersecurity', 'Python'],
      xfactors: ['(Em)passie', 'Int. samenwerking'],
      description: 'Capture The Flag competitie in team "Onions". Flags gevonden via Python scripts, steganografie en metadata-analyse van audiobestanden en PNG-bestanden.',
      highlight: 'Zelf een flag vinden met een zelfgeschreven Python script — bewijs dat je on-the-fly kunt leren.',
      icon: 'ti-shield-lock',
      domain: 'Cybersecurity',
      activityId: 'csc',
      image: '/images/hackathon/csc2025/pixel-csc.png'
    },
    {
      id: 'bip',
      month: 'MEI',
      year: '2025',
      title: 'BIP: Innovate with AI',
      location: 'Hogeschool PXL, Hasselt',
      duration: '30 uur',
      color: '#0F6E56',
      tags: ['Internationaal', 'AI', 'Teamwork', 'UX'],
      xfactors: ['Internationalisering', 'Multi-disciplinariteit'],
      description: 'Een week in een multidisciplinair internationaal team (België, Duitsland, Kroatië) een app "GenLink" ontwikkeld. Als enige IT-student maakte ik alle mockups.',
      highlight: 'Vrienden maken van over heel Europa en ontdekken dat teamwerk meer is dan taakuitvoering.',
      icon: 'ti-world',
      domain: 'Internationalisering',
      activityId: 'bip',
      image: '/images/bip/bip2025.png'
    },
    {
      id: 'ddd',
      month: 'OKT',
      year: '2025',
      title: 'Innovatieroute: Domain Driven Design',
      location: 'Corda Campus, Hasselt',
      duration: '25 uur',
      color: '#4a42a8',
      tags: ['Architectuur', 'DDD', '.NET', 'Event Storming'],
      xfactors: ['Innovatie', 'Persoonlijke ontwikkeling'],
      description: '3 dagen bij experts von Cyber Tree Consulting, Erqigen en Info Support. Event Storming, value objects, aggregates en onion architecture geïmplementeerd in .NET.',
      highlight: 'De post-its oefening — complexe processen visueel ontleden samen met het hele team.',
      icon: 'ti-topology-star',
      domain: 'Innovatie',
      activityId: 'ddd',
      image: '/images/ddd/postits.png'
    },
    {
      id: 'htf',
      month: 'NOV',
      year: '2025',
      title: 'Hackathon: Hack the Future',
      location: 'Cronos Group, Antwerpen',
      duration: '25 uur',
      color: '#b86a10',
      tags: ['Flutter', 'AI', 'Gemini LLM', 'Mobile'],
      xfactors: ['Innovatie', 'Persoonlijke ontwikkeling', '(Em)passie'],
      description: '"Agentic Ocean Explorer" — Flutter-app die vragen over oceaandata beantwoordt via Gemini LLM. Bugs gefixt tot 10 minuten voor de presentatie.',
      highlight: 'Kalm blijven onder druk en het project toch succesvol presenteren — doorzettingsvermogen bewezen.',
      icon: 'ti-rocket',
      domain: 'Hackathon',
      activityId: 'hackathon',
      image: '/images/hackathon/hack-the-future/pxl-studenten-hackathon.jpg'
    }
  ];

  let hoveredId = null;

  function rgb(hex) {
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return `${r},${g},${b}`;
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />
</svelte:head>

<section class="tl-section">

  <div class="tl-header">
    <div class="tl-eyebrow">I-Talent 2025–2026</div>
    <h2 class="tl-title">Mijn activiteiten</h2>
    <p class="tl-sub">Vier geselecteerde ervaringen die me hebben gevormd</p>
  </div>

  <div class="tl-track">
    <div class="tl-spine"></div>

    {#each timelineData as act, i}
      {@const isRight = i % 2 !== 0}
      {@const isHovered = hoveredId === act.id}
      {@const r = rgb(act.color)}

      <div
        class="tl-row {isRight ? 'row-right' : 'row-left'}"
        on:mouseenter={() => hoveredId = act.id}
        on:mouseleave={() => hoveredId = null}
      >
        <div class="tl-date {isRight ? 'date-left' : 'date-right'}">
          <span class="date-month" style="color: {act.color}">{act.month}</span>
          <span class="date-year">{act.year}</span>
        </div>

        <div class="tl-dot-wrap">
          <div
            class="tl-dot"
            class:dot-active={isHovered}
            style="
              background: {isHovered ? act.color : '#fff'};
              border-color: {act.color};
              box-shadow: {isHovered ? `0 0 0 8px rgba(${r},0.15)` : 'none'};
            "
          >
            <i
              class="ti {act.icon}"
              style="color: {isHovered ? '#fff' : act.color}; font-size: 20px;"
            ></i>
          </div>
        </div>

        <div class="tl-card-wrap">
          <div
            class="tl-card"
            class:card-active={isHovered}
            style="
              --c: {act.color};
              --cr: {r};
              border-top-color: {isHovered ? act.color : 'transparent'};
            "
          >
            <div class="card-badge" style="color: {act.color}; background: rgba({r},0.08)">
              <i class="ti {act.icon}" aria-hidden="true"></i>
              {act.domain}
            </div>

            <h3 class="card-title">{act.title}</h3>

            <div class="card-meta">
              <span><i class="ti ti-map-pin" aria-hidden="true"></i>{act.location}</span>
              <span><i class="ti ti-clock" aria-hidden="true"></i>{act.duration}</span>
            </div>

            <div class="card-tags">
              {#each act.tags as tag}
                <span class="tag" style="color: {act.color}; background: rgba({r},0.08); border-color: rgba({r},0.2)">{tag}</span>
              {/each}
            </div>

            {#if isHovered}
              <div class="card-reveal">
                {#if act.image}
                  <div class="card-img-wrap mb-6">
                    <img src={base + act.image} alt={act.title} class="w-full h-96 object-cover rounded-2xl shadow-md border border-slate-100" />
                  </div>
                {/if}

                <p class="card-desc">{act.description}</p>

                <div class="card-quote" style="border-color: {act.color}; background: rgba({r},0.04)">
                  <i class="ti ti-sparkles" style="color:{act.color}" aria-hidden="true"></i>
                  <span>{act.highlight}</span>
                </div>

                <div class="card-xf">
                  <span class="xf-label">X-Factor</span>
                  {#each act.xfactors as xf}
                    <span class="xf-tag" style="color:{act.color}; background:rgba({r},0.08); border-color:rgba({r},0.2)">{xf}</span>
                  {/each}
                </div>

                <a href="/italent-portfolio/activities/{act.activityId}" class="card-link" style="color:{act.color}">
                  Lees volledig verslag
                  <i class="ti ti-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>

  <div class="tl-nav-buttons">
    <a href="/italent-portfolio/#activities" class="btn-nav btn-back">
      <i class="ti ti-arrow-left"></i>
      Terug naar overzicht
    </a>
    <a href="/italent-portfolio/reflection" class="btn-nav btn-next">
      Naar Eindreflectie
      <i class="ti ti-arrow-right"></i>
    </a>
  </div>

</section>

<style>
  /* ─── Section (Verbreed naar 1400px) ─── */
  .tl-section {
    padding: 5rem 1.5rem;
    max-width: 1400px;
    margin: 0 auto;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  /* ─── Header ─── */
  .tl-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .tl-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(37, 99, 235, 0.1);
    color: #2563eb;
    border: 1px solid rgba(37, 99, 235, 0.2);
    border-radius: 999px;
    padding: 0.4rem 1.5rem;
    font-size: 0.825rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
  }

  .tl-title {
    font-size: 3rem;
    font-weight: 800;
    color: #111827;
    margin-bottom: 0.5rem;
    letter-spacing: -0.02em;
  }

  .tl-sub {
    font-size: 1.35rem;
    color: #6b7280;
  }

  /* ─── Track & spine ─── */
  .tl-track {
    position: relative;
    padding-bottom: 2rem;
  }

  .tl-spine {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, transparent 0%, #cbd5e1 5%, #cbd5e1 95%, transparent 100%);
    transform: translateX(-50%);
    z-index: 0;
  }

  /* ─── Row ─── */
  .tl-row {
    display: grid;
    grid-template-columns: 1fr 100px 1fr;
    align-items: flex-start;
    margin-bottom: 3rem;
    position: relative;
    z-index: 1;
  }

  /* ─── Dot ─── */
  .tl-dot-wrap {
    display: flex;
    justify-content: center;
    padding-top: 16px;
  }

  .tl-dot {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: 4px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    flex-shrink: 0;
    background: #fff;
    box-sizing: border-box;
  }

  .dot-active {
    transform: scale(1.2);
  }

  /* ─── Date stamp ─── */
  .tl-date {
    display: flex;
    flex-direction: column;
    padding-top: 22px;
    gap: 4px;
  }

  .date-left  { align-items: flex-end; padding-right: 24px; }
  .date-right { align-items: flex-start; padding-left: 24px; }

  .date-month {
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .date-year {
    font-size: 14px;
    color: #9ca3af;
    font-weight: 700;
  }

  /* ─── Card column ─── */
  .tl-card-wrap {
    padding: 6px 0;
  }

  .row-left  .tl-date     { grid-column: 3; grid-row: 1; }
  .row-left  .tl-dot-wrap { grid-column: 2; grid-row: 1; }
  .row-left  .tl-card-wrap{ grid-column: 1; grid-row: 1; padding-right: 24px; }

  .row-right .tl-date     { grid-column: 1; grid-row: 1; }
  .row-right .tl-dot-wrap { grid-column: 2; grid-row: 1; }
  .row-right .tl-card-wrap{ grid-column: 3; grid-row: 1; padding-left: 24px; }

  /* ─── Card ─── */
  .tl-card {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-top: 5px solid transparent;
    border-radius: 24px;
    padding: 36px;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02);
  }

  .tl-card:hover, .card-active {
    transform: scale(1.02);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
    border-color: var(--c);
  }

  /* ─── Badge ─── */
  .card-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 6px 18px;
    border-radius: 999px;
    margin-bottom: 20px;
  }

  .card-badge .ti { font-size: 15px; }

  /* ─── Title ─── */
  .card-title {
    font-size: 28px;
    font-weight: 800;
    color: #111827;
    line-height: 1.4;
    margin-bottom: 20px;
    letter-spacing: -0.01em;
  }

  /* ─── Meta ─── */
  .card-meta {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 16px;
    color: #4b5563;
    margin-bottom: 24px;
    font-weight: 600;
  }

  .card-meta span {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .card-meta .ti { font-size: 20px; color: #94a3b8; }

  /* ─── Tags ─── */
  .card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .tag {
    font-size: 13px;
    font-weight: 700;
    padding: 6px 16px;
    border-radius: 10px;
    border: 1px solid;
  }

  /* ─── Reveal ─── */
  .card-reveal {
    margin-top: 36px;
    padding-top: 36px;
    border-top: 1px solid #e2e8f0;
    animation: fadeUp 0.4s ease forwards;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(15px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .card-desc {
    font-size: 18px;
    color: #374151;
    line-height: 1.85;
    margin-bottom: 24px;
    font-weight: 500;
  }

  .card-quote {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
    color: #1e293b;
    border-left: 4px solid;
    border-radius: 0 16px 16px 0;
    padding: 18px 24px;
    margin-bottom: 28px;
    line-height: 1.6;
  }

  .card-quote .ti { font-size: 22px; margin-top: 2px; flex-shrink: 0; }

  /* ─── X-Factor ─── */
  .card-xf {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    margin-bottom: 28px;
  }

  .xf-label {
    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #94a3b8;
    margin-right: 6px;
  }

  .xf-tag {
    font-size: 13px;
    font-weight: 700;
    padding: 6px 18px;
    border-radius: 999px;
    border: 1px solid;
  }

  /* ─── Link ─── */
  .card-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    font-weight: 800;
    text-decoration: none;
    transition: gap 0.2s;
  }

  .card-link:hover { gap: 16px; }
  .card-link .ti { font-size: 20px; }

  /* ─── Nav Knoppen Onderaan ─── */
  .tl-nav-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 6rem;
    padding-top: 3rem;
    border-top: 2px solid #e2e8f0;
    gap: 1.5rem;
  }

  .btn-nav {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px 40px;
    border-radius: 20px;
    font-size: 18px;
    font-weight: 800;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    letter-spacing: -0.01em;
  }

  .btn-back {
    color: #374151;
    background: #f8fafc;
    border: 2px solid #cbd5e1;
  }

  .btn-back:hover {
    background: #f1f5f9;
    color: #0f172a;
    border-color: #94a3b8;
    transform: translateY(-2px);
  }

  .btn-next {
    color: #ffffff;
    background: linear-gradient(to right, #2563eb, #9333ea);
    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
  }

  .btn-next:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 15px 30px rgba(37, 99, 235, 0.4);
  }

  .btn-nav .ti { font-size: 24px; }

  /* ─── Mobile ─── */
  @media (max-width: 768px) {
    .tl-nav-buttons {
      flex-direction: column-reverse;
      gap: 1.5rem;
    }
    .btn-nav {
      width: 100%;
    }
  }

  @media (max-width: 640px) {
    .tl-spine { left: 27px; transform: none; }

    .tl-row {
      grid-template-columns: 54px 1fr;
      grid-template-rows: auto;
      margin-bottom: 2.5rem;
    }

    .row-left  .tl-dot-wrap,
    .row-right .tl-dot-wrap { grid-column: 1; grid-row: 1; padding-top: 24px; justify-content: flex-start; }

    .row-left  .tl-card-wrap,
    .row-right .tl-card-wrap { grid-column: 2; grid-row: 1; padding: 0 0 0 20px; }

    .row-left  .tl-date,
    .row-right .tl-date { display: none; }
  }
</style>