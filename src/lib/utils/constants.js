export const MILANA_PROFILE = {
	name: 'Milana Askhabova',
	title: 'Toegepaste Informatica - Applicatieontwikkeling',
	university: 'Hogeschool PXL',
	introduction: [
		'Ik ben Milana, laatstejaarsstudent aan Hogeschool PXL, waar ik Toegepaste Informatica studeer met de afstudeerrichting Applicatieontwikkeling. Ik koos deze richting omdat ik graag dingen ontwikkel en het leuk vind om problemen op te lossen door te programmeren. Mijn doel is om toepassingen te maken die het leven van mensen vergemakkelijken of helpen om praktische problemen op te lossen. Naast mijn interesse in IT ben ik graag creatief bezig met pottenbakken, patisserie en het maken van kleren en ik zou me daar graag verder in verdiepen.',
		'Tijdens mijn studies heb ik deelgenomen aan verschillende activiteiten: seminaries, innovatieroute, hackathons en een internationaal programma. Dit heeft me geholpen om mijn interesses beter te begrijpen en mijn vaardigheden uit te breiden.',
		'Na afstuderen hoop ik toepassingen te ontwikkelen die efficiënter werken mogelijk maken of complexe processen vereenvoudigen. Ik wil mijn programmeer- en teamvaardigheden verder versterken en op termijn graag een leidinggevende rol opnemen.'
	],
	strengths: [
		'Doorzettingsvermogen',
		'Teamwork',
		'Klantgericht werken',
		'Engagement'
	],
	goals: 'Na afstuderen hoop ik toepassingen te ontwikkelen die efficiënter werken mogelijk maken of complexe processen vereenvoudigen. Ik wil mijn programmeer- en teamvaardigheden verder versterken en op termijn graag een leidinggevende rol opnemen.',
	hobbies: [
		{ name: 'Pottenbakken', images: ['hobby/pottery.jpg', 'hobby/pottery-hasselt.jpg'] },
		{ name: 'Patisserie', images: ['hobby/cake.jpg'] },
		{ name: 'Kleren maken', images: ['hobby/naaimachine.jpg'] }
	]
};

export const ACTIVITIES = [
	{
		id: 'ddd',
		title: 'Innovatieroute: Domain Driven Design',
		date: 'oktober 2025',
		dates: '2, 9 en 16 oktober 2025',
		location: 'Corda Campus, Hasselt',
		duration: '25 uur',
		doelstelling: 'Businessproblemen vertalen naar schaalbare software-architecturen met Domain Driven Design.',
		eigenDoelstelling: 'Beter leren ontwerpen voor ik begin met coderen.',
		description: 'Tijdens deze innovatieroute heb ik me verdiept in Domain Driven Design onder begeleiding van experts van Cyber Tree Consulting, Erqigen en Infosupport. We leerden businessproblemen te vertalen naar schaalbare software-architecturen.',
		tags: ['Architectuur', 'DDD', '.NET', 'Event Storming'],
		details: [
			'Event Storming met gekleurde post-its',
			'Value Objects en Entities',
			'Aggregates en Bounded Contexts',
			'Onion Architecture patroon',
			'.NET implementatie'
		],
		highlight: 'De post-its oefening verliep vlot en we konden goed samenwerken in het team. Dit hielp enorm om complexe processen te ontleden.',
		verslag: [
			'De innovatieroute Domain Driven Design bestond uit drie dagen op de Corda Campus in Hasselt: 2, 9 en 16 oktober 2025. De sessies werden gegeven door experts van drie bedrijven: Cyber Tree Consulting, Erqigen en Info Support. De rode draad door alle drie de dagen was het inzicht dat strategische planning moet voorafgaan aan tactische uitvoering en dat communicatie binnen en buiten het domein cruciaal is voor een goed systeem.',
			'Op donderdag 2 oktober begonnen we met de theoretische concepten van DDD. Erwin Jacobs en Raf Van Baelen introduceerden ons in strategische DDD en gaven een inleiding in Event Storming. We werkten in groepjes van vier aan een concrete case en voerden enkele flows uit via Event Storming, waarbij we Bounded Contexten en Aggregates uithaalden. Dit gaf meteen inzicht in hoe je een business process in kaart brengt: niet wat je gaat bouwen, maar wat er daadwerkelijk gebeurt in het domein. Met gekleurde post-its bouwden we een visueel overzicht van het gehele systeem. Oranje post-its stelden domain events voor, blauw commands, paars policies, groen read models, geel actoren en rood hotspots. Deze visuele representatie bleek echt waardevol. Iedereen in onze groep van vier kon mee discussiëren, ongeacht technische achtergrond. Het stapelen van post-its op een muur gaf een duidelijk beeld van waar de bottlenecks zaten en welke processen onafhankelijk van elkaar konden verlopen.',
			'Op donderdag 9 oktober verschoof Daniël Mertens van Info Support de focus naar tactische uitvoering. We bouwden voort op de event storming van dag één en implementeerden stapsgewijs de strategie om een solide basis te leggen voor onze service. Ik leerde het verschil tussen value objects en entities. Value objects zijn immutable, hebben geen identiteit en worden getypeerd door hun properties. Entities daarentegen zijn mutabel en hebben een unieke identiteit. Daarnaast maakte ik een aggregate: een cluster van entities en value objects die samen een consistentiegrens vormen. Domain events waren het mechanisme waarmee aggregates hun state muteren en naar andere delen van het systeem communiceerden. Deze concrete concepten werkten veel beter wanneer ik ze meteen in .NET implementeerde. De hands-on aanpak maakte het veel helderder dan zuivere theorie. Na elke oefening keerden we terug naar onze event storming van dag één om te controleren of onze implementatie nog wel aansloot bij wat we oorspronkelijk in kaart hadden gebracht.',
			'Op donderdag 16 oktober richtten we ons op communicatie. We bouwden een application layer op en leerden over onion architecture waarbij het domein centraal staat en alle afhankelijkheden naar binnen wijzen via interfaces. Ook persistence kwam aan bod. Messaging was een belangrijk onderdeel: hoe je domain events publiceert en naar andere bounded contexts communiceert. We spraken over het verschil tussen command events, die imperatief zijn en gericht aan een specifieke ontvanger en notification events, die in verleden tijd staan en breed worden uitgestuurd. Dit sloot aan bij het eerste event storming moment, waarin we al zagen hoe processen van het ene domein naar het andere stromen. De onion architecture maakte het duidelijk waarom interfaces zo belangrijk zijn: ze ontkoppelen je domain logica van technische details als databases en API\'s. Dit principe van scheiding van concerns was eigenlijk het thema dat de hele drie dagen bij elkaar hield. Je begrijpt eerst wat het domein is, implementeert vervolgens alleen de nodige details, en communiceert tot slot met andere domeinen zonder je core logic te vervuilen.'
		],
		reflectie: [
			'Tijdens de drie dagen DDD innovatieroute heb ik eerst de theoretische concepten geleerd en daarna direct in de praktijk gebracht. We werkten in groepjes van vier met gekleurde post-its om bounded contexts in kaart te brengen. Dit visuele systeem hielp enorm om complexe processen te ontleden. Daarna implementeerden we DDD-concepten zoals aggregates en value objects in een .NET project.',
			'De post-its oefening verliep vlot en we konden goed samenwerken in het team. Het .NET project was echter moeilijker. In het begin was het verwarrend waar en hoe ik aggregates moest gebruiken. Mijn eerste implementatie was niet meteen correct. Door vragen te stellen en naar de voorbeelden in de code te kijken, snapte ik het uiteindelijk wel.',
			'De hands-on oefeningen waren echt leerzaam. Ik heb nu begrepen dat je eerst moet nadenken over DDD-concepten voordat je gaat coderen. Value objects zijn waardevol omdat validatie ingebakken zit, zodat je geen ongeldig data kan hebben. Aggregates creëren duidelijke grenzen in je domein, zodat je weet wie verantwoordelijk is voor wat.',
			'Mijn sterkste moment was de post-its oefening. Ik kon goed samenwerken en we konden de processen helder krijgen. Het .NET project vond ik lastiger aan het begin, maar door hulp van experts verliep het goed. In mijn .NET lessen zag ik deze concepten ook terug, wat hielp om het thema verder te verdiepen. Ik heb deze activiteit geselecteerd omdat ik het belangrijk vind om niet gewoon te coderen, maar ook na te denken over architectuur. Met DDD leer je structureel nadenken. Bovendien vond ik het bijzonder dat experts van verschillende bedrijven hun kennis deelden. Dit gaf me zicht op hoe professionals in de industrie denken.'
		],
		images: [
			{ src: 'ddd/postits.png', alt: 'Event Storming met post-its op dag 1', beforeParagraph: 1 },
			{ src: 'ddd/ddd-opdracht.png', alt: 'DDD opdracht in .NET op dag 2', beforeParagraph: 2 }
		]
	},
	{
		id: 'bip',
		title: 'Blended Intensive Programme: Innovate with AI',
		date: 'mei 2025',
		dates: '5 mei - 9 mei 2025',
		location: 'Hogeschool PXL, Hasselt',
		duration: '30 uur',
		doelstelling: 'In een multidisciplinair en internationaal team een AI-gedreven app-concept ontwikkelen dat een echt probleem oplost.',
		eigenDoelstelling: 'Ervaring opdoen in teamwerk en leren samenwerken met collega\'s uit andere landen en andere richtingen dan IT.',
		teamSamenstelling: 'Zes personen: drie marketing-studenten, twee management-studenten en ik als enige IT-student.',
		description: 'In een multidisciplinair en internationaal team (België, Duitsland, Kroatië) ontwikkelden we een AI-gestuurde app-concept dat jongeren en ouderen met elkaar verbindt voor wederzijds leren en hulp.',
		tags: ['Internationaal', 'AI', 'Teamwork', 'Innovation'],
		details: [
			'Multidisciplinair team (marketing, management, IT)',
			'Internationale samenwerking in het Engels',
			'Marktanalyse en business model',
			'Mockups en UI/UX design met AI',
			'Bootreis en sociale activiteiten'
		],
		highlight: 'Vrienden maken van over heel Europa en leren dat teamwerk om meer gaat dan alleen taakuitvoering.',
		verslag: [
			'Het Blended Intensive Programme vond plaats van 5 tot en met 9 mei 2025 op Hogeschool PXL in Hasselt. De week bracht internationale studenten samen uit verschillende universiteiten en richtingen: Hogeschool PXL, Rosenheim Technical University of Applied Sciences uit Duitsland en Sveučilište Algebra Bernays uit Kroatië.',
			'Op de eerste dag leerden we elkaar kennen en moesten we samen als team een oefening maken. Ons team bestond uit zes personen: drie marketing-studenten, twee management-studenten en ik als enige IT-student. We hadden eerst twee verschillende ideeën in het team die beide interessant waren, maar door brainstormen kwamen we uiteindelijk tot één concept. Ons idee was een app waarin jongeren konden inschrijven om oudere mensen te helpen met dagelijkse taken: boodschappen doen, naar ergens met de auto gebracht worden, of huishoudelijke hulp uitvoeren. Dit lost een echt maatschappelijk probleem op: veel ouderen hebben behoefte aan hulp in hun dagelijks leven, maar kunnen zich professionele diensten niet altijd veroorloven. Jongeren op hun beurt zoeken flexibel inkomsten en willen zinvol werk doen.',
			'We onderzochten zorgvuldig of dit idee al bestond in België. Gelukkig vonden we dat het concept nog niet op de markt was, dus we konden iets uniek en origineel maken. Dit gaf ons veel vertrouwen in ons idee en motiveerde het hele team. De marketing-studenten werkten aan diepgaande marktanalyse en het business model, de management-studenten concentreerden zich op strategie en operationele haalbaarheid en ik maakte de mockups voor de mobile app. We gebruikten AI om het design-proces te versnellen en intuïtiever te werken. De taakverdeling was helder en effectief: iedereen wist exact wat hij of zij moest doen en wanneer het klaar moest zijn.',
			'Als onderdeel van het programma creëerden we ook onze eigen AI-avatars, wat een leuke en interactieve manier was om met kunstmatige intelligentie om te gaan.',
			'Op de volgende dagen verdiepten we ons in alle details van ons concept. De team-samenwerking was soepel en productief omdat de verschillende richtingen elkaar aanvulden in plaats van overlap te creëren. De marketing-studenten brachten waardevolle inzichten in doelgroepen, concurrentiepositie en prijs-strategieën. De management-studenten dachten diep na over verdienmodellen, hoe we geld zouden verdienen en schaalbaarheidsvragen. Ik zorgde ervoor dat de user interface intuïtief, aantrekkelijk en gebruiksvriendelijk was. We integreerden AI-functies in onze mockups om automatisch passende matches tussen jongeren en ouderen te maken. We presenteerden samen onze pitch aan een jury, die positief reageerde op het concept en het potentieel ervan.',
			'Naast het werk hadden we ook waardevolle sociale momenten: bootreis, kaas proeven in de Grotten van Kanne en Maastricht. Eind van de week ging ik nogeens mee met sommige studenten naar Maastricht. We keken naar de architectuur, wandelden door de gezellige straten en gingen naar een café waar we rustig konden zitten, praten en elkaar beter leren kennen. Dit moment was waardevol omdat we ontspannen waren en gewoon konden genieten van elkaars gezelschap. Deze activiteiten maakten de week niet alleen professioneel maar ook persoonlijk waardevol en versterkten de banden in het team.'
		],
		reflectie: [
			'Deze week in een internationaal team werken was intensief en heeft me veel bijgebracht over teamwerk op een niveau dat ik nog niet eerder had meegemaakt. Het eerste wat me opviel was dat ik volledig in het Engels moest werken en communiceren. In het begin was dit moeilijk omdat ik nooit Engels spreek. Ik was voorzichtig met mijn woordkeuze en maakte fouten, maar door deze intensieve ervaring heb ik mijn Engels veel kunnen oefenen. Ik moest elke dag spreken en luisteren in het Engels. Na de week voelde ik me veel meer vertrouwen hebben in het spreken.',
			'In het begin was het spannend dat ik de enige IT-er in het team was. Ik maakte me zorgen dat ik niet goed kon uitleggen wat ik aan het doen was. Maar toen ik aan de mockups begon en ze elke dag toonde aan het team, snapten de marketing en management-studenten precies wat ik wilde bereiken. Wat me het meest is bijgebleven, is hoe snel je vertrouwen opbouwt in een team wanneer de rollen duidelijk zijn en iedereen zijn best doet. Mijn collega\'s uit Duitsland en Kroatië waren open, behulpzaam en zorgzaam. We konden serieus samenwerken aan het concept, maar ook veel lachen en plezier hebben.',
			'De activiteiten georganiseerd door PXL maakten het team echt sterker. De bootreis, de Grotten van Kanne, de trip naar Maastricht. Dit waren niet alleen leuke momenten, maar ze lieten me zien dat teamwerk om meer gaat dan alleen taakuitvoering. We leerden elkaar kennen buiten het werk om. Ik maakte vrienden van over heel Europa en dat is iets wat ik nooit zal vergeten.',
			'Mijn sterke punt was dat ik flexibel kon schakelen tussen IT-werk en samenwerking met niet-technische collega\'s. Ik kon mijn mockups uitleggen en begrijpen wat marketing en management nodig hadden van mij. Mijn zwak punt was in het begin het Engels spreken, maar dit verbeterde snel naarmate de week vorderde.',
			'Dit past perfect bij mijn opleiding Applicatieontwikkeling. In de praktijk werk je zelden alleen als IT-developer. Je werkt met product managers, designers, marketing-mensen. Deze week gaf me inzicht in hoe die rollen samen moeten werken. Ik heb deze activiteit geselecteerd omdat het me veel heeft gebracht op persoonlijk en professioneel vlak. Dit week-intensive heeft mijn teamwork-skills echt veel verbeterd. Ik weet nu dat ik kan samenwerken met collega\'s uit andere vakgebieden en dat culturele verschillen geen probleem zijn maar juist verrijkend. Dit zal me in mijn toekomst veel helpen: in veel bedrijven werk je met internationale teams.'
		],
		images: [
			{ src: 'bip/bip2025.png', alt: 'BIP 2025 internationaal team', beforeParagraph: 1 },
			{ src: 'bip/presentatie_genlink.png', alt: 'Presentatie van het GenLink concept aan de jury', beforeParagraph: 4 },
			{ src: 'bip/boat.png', alt: 'Bootreis tijdens het BIP', beforeParagraph: 5 }
		]
	},
	{
		id: 'hackathon',
		title: 'Hackathon: Hack the Future',
		date: 'november 2025',
		dates: '12 november 2025',
		location: 'Antwerpen (Cronos Group)',
		duration: '25 uur',
		doelstelling: 'Een werkende Flutter-applicatie bouwen die vragen over oceaandata beantwoordt met behulp van Gemini LLM en AI-agenten.',
		eigenDoelstelling: 'Meer ervaring opdoen in Flutter en tegelijk meer leren over AI-integratie.',
		teamSamenstelling: 'Ik werkte samen met één student uit de AI-richting.',
		description: 'Een werkende Flutter-applicatie bouwen die vragen over oceaandata beantwoordt met behulp van Gemini LLM. We losten diverse technische uitdagingen op en fixten bugs tot 10 minuten voor de presentatie.',
		tags: ['Flutter', 'AI', 'Gemini', 'Mobile', 'Hackathon'],
		details: [
			'Flutter app development',
			'Gemini LLM integratie',
			'Chat interface en data visualisatie',
			'Rapid prototyping onder tijdsdruk',
			'Live demo en jury presentatie'
		],
		highlight: 'Dit gaf veel zelfvertrouwen dat je onder druk kan werken en toch iets aflevert.',
		verslag: [
			'De hackathon Hack the Future vond plaats op 12 november 2025 in Antwerpen bij Cronos Group. Dit was een intensieve coding wedstrijd waarin teams een werkende applicatie moesten bouwen rond een gegeven challenge. De challenge die we kozen was de "Agentic Ocean Explorer": een Flutter-app waarin gebruikers vragen over oceaandata kunnen stellen en de AI antwoorden geeft met visuele grafieken en schema\'s. We kozen deze challenge omdat ik meer praktische ervaring wilde opdoen in Flutter en omdat het ook goed aansloot bij AI, een onderwerp dat steeds belangrijker wordt in de softwareontwikkeling.',
			'Flutter is een heel goede framework voor mobile app development. Het stelt je in staat om met één codebase zowel iOS als Android apps te bouwen, wat veel efficiënter is dan aparte apps schrijven voor elk platform. Dit betekent dat je dezelfde code kan gebruiken voor iPhone en Android-toestellen, wat tijd en moeite bespaart. Flutter heeft ook een grote en actieve community, veel beschikbare libraries en packages die je kan hergebruiken en een snelle development cycle.',
			'Onze app moest een chat-interface hebben waarin gebruikers vragen konden stellen over oceaandata. Gemini LLM zou die vragen begrijpen en daar intelligente antwoorden op geven. De AI zou ook schema\'s genereren om data visueel weer te geven, bijvoorbeeld om de temperatuur van oceanen de afgelopen week in een grafiek weer te geven. Dit zou het voor gebruikers veel gemakkelijker maken om complexe oceaandata te begrijpen.',
			'We hadden wat errors en bugs onderweg, maar door veel debuggen en vragen stellen aan experts hebben we het uiteindelijk afgemaakt. Het was intensief werk, maar we bleven gefocust op het doel. Wat jammer was, is dat we weinig tijd hadden voor UI en UX polish. Onze focus lag vooral op dat de functionaliteit werkte en stabiel was, en daar hebben we goed in geslaagd.',
			'Ondanks de korte timeframe was de sfeer heel leuk. We kregen veel gratis eten en drank gedurende de hackathon, wat fijn was na uren intensief coderen. Dit hielp ons energie te behouden. Ook heb ik tijdens de introductie aan het begin van de dag en in de pauzes veel nieuwe mensen leren kennen van andere teams. Het was interessant om studenten van andere scholen leren kennen. Het netwerken met andere developers en studenten gaf een fijne afwisseling van het pure coderen en maakte de hackathon meer dan alleen een competitie. In onze pauze gingen we naar de zoo in Antwerpen, wat gratis was voor deelnemers. Dit gaf ons even rust van het intense coderen en het was een fijne break om ons hoofd even vrij te maken.',
			'Op het einde hebben we onze app kunnen presenteren voor de jury. De demo liet zien hoe je een vraag kon stellen over bijvoorbeeld de temperatuur van de oceaan in graden Celsius van de afgelopen week en de AI genereerde een schema dat in de app werd weergegeven als een mooi antwoord met relevante data. Onze presentatie ging goed en we kregen positieve feedback van de jury.'
		],
		reflectie: [
			'Deze hackathon was een leerzame ervaring voor me. Ik had nog weinig kennis van Flutter toen ik begon, dus het was een uitdaging om in zo\'n korte termijn een volledig werkende app te maken. Wat echt hielp, was dat we ondersteuning kregen van experts ter plaatse. Uiteindelijk hebben we het toch afgemaakt, wat een goed gevoel gaf. Het was intensief, maar ook productief.',
			'De sfeer op de hackathon was echt leuk. We kregen veel gratis eten en drank, wat fijn was na uren intensief coderen. Maar nog belangrijker waren de mensen die ik ontmoette. Tijdens de introductie aan het begin van de dag en in de pauzes leerde ik veel nieuwe mensen kennen van andere teams. Het was interessant om studenten van andere scholen en universiteiten te ontmoeten. Dit netwerken gaf me een waardevolle afwisseling van het pure coderen.',
			'Deze ervaring heeft mijn stressbestandigheid echt versterkt. In de laatste tien minuten hebben we nog snel bugs gefixt voordat we konden presenteren. Dat geeft veel zelfvertrouwen. Mijn Flutter-skill was niet geweldig aan het begin, maar door veel zoekwerk, het lezen van documentatie en het stellen van vragen aan experts hebben we toch een werkende app afgemaakt. Dit heeft ook mijn teamwork en flexibiliteit verbeterd.',
			'Ik heb deze hackathon geselecteerd voor mijn portfolio omdat ik hackathons echt leuk vind. Het gaat niet eens om winnen. Zelfs als je niet wint, breng je altijd meerwaarde mee: nieuwe kennis, nieuwe skills, betere probleemoplossingsvaardigheden. Deze keer heb ik Flutter beter leren kennen, heb ik ervaring opgedaan met Gemini API-integratie en heb ik geleerd hoe je onder druk kan werken en toch iets afleveren. Dit zijn allemaal skills die ik in mijn toekomstige werk als developer zal nodig hebben.'
		],
		images: [
			{ src: 'hackathon/hack-the-future/pxl-studenten-hackathon.jpg', alt: 'Hack the Future deelnemers', beforeParagraph: 0 },
			{ src: 'hackathon/hack-the-future/zoo.jpg', alt: 'Bezoek aan de zoo Antwerpen tijdens de pauze', beforeParagraph: 4 }
		]
	}
];

export const PERSONAL_DEVELOPMENT = [
	{
		title: 'Projectweek 2TIN: Professional Development & Research Kick-off',
		date: '10-14 februari 2025',
		duration: '27 uur',
		location: 'Hogeschool PXL, Hasselt',
		description: 'Een week gericht op professionele vaardigheden en de start van het Research Project. Workshops over kernkwadranten, netwerken via LinkedIn en academisch schrijven.'
	},
	{
		title: 'POP-sessie: Brein aan het werk!',
		date: '18 februari 2025',
		duration: '4 uur',
		location: 'Hogeschool PXL Gebouw B, Hasselt',
		description: 'POP-sessie over focus, productiviteit en digitale afleidingen.'
	},
	{
		title: 'POPping: Veerkracht, Feedback & Teamdynamiek',
		date: '24 maart 2025',
		duration: '2 uur',
		location: 'Hogeschool PXL, Gebouw E, Hasselt',
		description: 'Interactieve sessie gericht op het versterken van persoonlijke en professionele veerkracht.'
	},
	{
		title: 'My Team and I',
		date: '8 oktober 2025',
		duration: '3 uur',
		location: 'Zelfstudie',
		description: 'Zelfstandige analyse over groepsdynamica. Verdieping in de Piramide van Lencioni: kwetsbaar vertrouwen als basis voor productieve conflicten en gezamenlijke resultaten.'
	}
];

export const EXTRA_ACTIVITIES = [
	{
		title: 'Cyber Security Challenge Belgium (CSC)',
		date: '14-15 maart 2025',
		duration: '32 uur',
		location: 'Online',
		tags: ['CTF', 'Cybersecurity', 'Python'],
		description: 'Deelname in team "Onions" aan een Capture The Flag (CTF) competitie. Flags gevonden in audiobestanden, PNG-metadata en via zelfgeschreven Python scripts.',
		images: [
			{ src: 'hackathon/csc2025/pixel-csc.png', alt: 'CSC 2025 deelname' },
			{ src: 'hackathon/csc2025/scoreboard.png', alt: 'CSC scoreboard' }
		]
	},
	{
		title: 'Info Support: CodeBash',
		date: '25 oktober 2025',
		duration: '7 uur',
		location: 'Info Support, Mechelen',
		tags: ['Algoritmen', 'Competitie', 'Teamwork'],
		description: 'Algoritmische programmeerwedstrijd in teamverband. Complexe logische problemen oplossen en code optimaliseren onder tijdsdruk.',
		images: [
			{ src: 'hackathon/codebash/pizza-break.png', alt: 'CodeBash pauze' }
		]
	}
];

export const SEMINARIES = [
	{
		title: '.NET Aspire',
		description: 'Microsoft framework voor het bouwen en beheren van cloud-native applicaties met microservices-architectuur',
		company: 'Info Support',
		date: '25 februari 2025',
		duration: '3 uur'
	},
	{
		title: 'Politie: Digitaal onderzoek',
		description: 'Digital forensics, cybercrime, crypto-assets en data-analyse met de Regionale Computer Crime Unit',
		company: 'Politie',
		date: '1 april 2025',
		duration: '3 uur'
	},
	{
		title: 'ACA Group: React',
		description: 'Introductie in React met JSX, state management, useEffect hook, functionele componenten en routing',
		company: 'ACA Group',
		date: '29 april 2025',
		duration: '3 uur'
	},
	{
		title: 'Vanroey: AI in de praktijk',
		description: 'Praktijkgerichte introductie in kunstmatige intelligentie en prompt engineering',
		company: 'Vanroey',
		date: '13 mei 2025',
		duration: '3 uur'
	},
	{
		title: 'BDD & ATDD',
		description: 'Gedragsgedreven softwareontwikkeling met TDD, BDD en ATDD methodieken',
		company: 'Brightest',
		date: '5 november 2025',
		duration: '3 uur'
	},
	{
		title: 'Refleqt: Software testing',
		description: 'Praktisch seminar over Postman en AI-functies voor het genereren van testcases',
		company: 'Refleqt',
		date: '26 november 2025',
		duration: '3 uur'
	},
	{
		title: 'Inetum: Enterprise UX',
		description: 'Uitgebreid overzicht van Enterprise UX, design patterns en volledige UX-methodologie',
		company: 'Inetum',
		date: '10 december 2025',
		duration: '3 uur'
	},
	{
		title: 'Cegeka: Open Source',
		description: 'Open-source software in het moderne IT-landschap, voordelen en risico\'s',
		company: 'Cegeka',
		date: '17 december 2025',
		duration: '3 uur'
	}
];

export const REFLECTION_CONTENT = {
	title: 'Eindreflectie',
	sections: [
		{
			heading: 'Mijn I-Talent ervaring',
			content: 'I-Talent was een unieke ervaring die me veel over mezelf heeft geleerd. Aan het begin twijfelde ik of dit echt mijn ding is, maar elke activiteit was boeiend en leerzaam. Nu ben ik zeker dat ik dit wil doen. In het begin had ik als doel om meer ervaring op te doen en beter te leren samenwerken. Door DDD, het internationale BIP, hackathons en seminaries heb ik mezelf opengesteld om nieuwe dingen te proberen. Dit heeft me een beter beeld gegeven van wie ik ben en wat ik kan.'
		},
		{
			heading: 'Wat ik heb bijgeleerd',
			content: 'Het belangrijkste dat ik heb bijgeleerd, is dat je in IT altijd moet blijven openstaan voor nieuwe dingen. De seminaries hebben me nieuwe technieken geleerd die ik niet kende. De hackathons hebben me geleerd hoe je onder druk iets aflevert. Het BIP heeft me getoond dat samenwerken met mensen van verschillende richtingen en afkomsten veel kan opleveren. Dit zijn dingen die ik in mijn toekomst zeker nog ga gebruiken.'
		},
		{
			heading: 'Wie ik ben geworden',
			content: 'Ik ben bewuster geworden van wie ik ben. Mijn sterke punten zijn teamwork en doorzettingsvermogen. Ik geef niet op wanneer dingen moeilijk worden. Ik ben iemand die engagement toont voor wat ik doe. Ik doe niet alleen de verplichte dingen, maar zoek ook naar extra kansen. Ik schrijf me in voor hackathons, ik ga naar internationale programma, ik probeer nieuwe dingen.'
		},
		{
			heading: 'Goals',
			content: 'In de toekomst hoop ik mijn skills verder te ontwikkelen binnen een bedrijf. Ik wil zien hoe alles echt werkt in de praktijk. Ik hoop ook dat ik kan bijdragen en anderen kan helpen met wat ik heb geleerd.'
		}
	]
};

export const SOCIAL_LINKS = [
	{
		label: 'LinkedIn',
		url: 'https://linkedin.com/in/milana-askhabova-745a29257',
		icon: 'contacts/linkedin.png'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/MilanaAskhabovaPXL',
		icon: 'contacts/github.png'
	}
];

export const NAV_LINKS = [
	{ id: 'home', label: 'Home', href: '#home' },
	{ id: 'about', label: 'Over mij', href: '#about' },
	{ id: 'activities', label: 'Activiteiten', href: '#activities' },
	{ id: 'reflection', label: 'Reflectie', href: '#reflection' },
	{ id: 'contact', label: 'Contact', href: '#contact' }
];
