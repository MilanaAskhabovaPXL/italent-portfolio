export const MILANA_PROFILE = {
	name: 'Milana Askhabova',
	title: 'Toegepaste Informatica - Applicatieontwikkeling',
	university: 'Hogeschool PXL',
	introduction: [
		'Ik ben Milana, laatstejaarsstudent aan Hogeschool PXL, waar ik Toegepaste Informatica studeer met de afstudeerrichting Applicatieontwikkeling. Ik koos deze richting omdat ik graag dingen ontwikkel en het leuk vind om problemen op te lossen door te programmeren. Mijn doel is om toepassingen te maken die het leven van mensen vergemakkelijken of helpen om praktische problemen op te lossen. Naast mijn interesse in IT ben ik graag creatief bezig met pottenbakken, patisserie en het maken van kleren en ik zou me daar graag verder in verdiepen.',
		'Tijdens mijn studies heb ik deelgenomen aan verschillende activiteiten: seminaries, innovatieroute, hackathons en een internationaal programma. Dit heeft me geholpen om mijn interesses beter te begrijpen en mijn vaardigheden uit te breiden.',
		'Een van mijn sterke punten is mijn doorzettingsvermogen: ik wil taken graag afronden en niet halverwege opgeven. Door mijn ervaring met groepsprojecten ben ik een betere teamspeler geworden en dankzij mijn studentenjobs heb ik geleerd om klantgericht te werken en goed samen te werken met anderen.',
		'Na afstuderen hoop ik toepassingen te ontwikkelen die efficiënter werken mogelijk maken of complexe processen vereenvoudigen. Ik wil mijn programmeer- en teamvaardigheden verder versterken en op termijn graag een leidinggevende rol opnemen.'
	],
	strengths: [
		'Doorzettingsvermogen',
		'Teamwork',
		'Klantgericht werken'
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
			'Op donderdag 16 oktober richtten we ons op communicatie. We bouwden een application layer op en leerden over onion architecture waarbij het domein centraal staat en alle afhankelijkheden naar binnen wijzen via interfaces. Ook persistence kwam aan bod. Messaging was een belangrijk onderdeel: hoe je domain events publiceert en naar andere bounded contexts communiceert. Vervolgens werd er toegelicht over het verschil tussen command events, die imperatief zijn en gericht aan een specifieke ontvanger en notification events, die in verleden tijd staan en breed worden uitgestuurd. Dit sloot aan bij het eerste event storming moment, waarin we al zagen hoe processen van het ene domein naar het andere stromen. De onion architecture maakte het duidelijk waarom interfaces zo belangrijk zijn: ze ontkoppelen je domain logica van technische details als databases en API\'s. Dit principe van scheiding van concerns was eigenlijk het thema dat de hele drie dagen bij elkaar hield. Je begrijpt eerst wat het domein is, implementeert vervolgens alleen de nodige details, en communiceert tot slot met andere domeinen zonder je core logic te vervuilen.'
		],
		reflectie: [
			'Tijdens de drie dagen DDD innovatieroute heb ik eerst de theoretische concepten geleerd en daarna direct in de praktijk gebracht. We werkten in groepjes van vier met gekleurde post-its om bounded contexts in kaart te brengen. Dit visuele systeem hielp enorm om complexe processen te ontleden. Daarna implementeerden we DDD-concepten zoals aggregates en value objects in een .NET project.',
			'De post-its oefening verliep vlot en we konden goed samenwerken in het team. Het .NET project was echter moeilijker. In het begin was het verwarrend waar en hoe ik aggregates moest gebruiken. Mijn eerste implementatie was niet meteen correct. Door vragen te stellen en naar de voorbeelden in de code te kijken, snapte ik het uiteindelijk wel.',
			'De hands-on oefeningen waren echt leerzaam. Ik heb nu begrepen dat je eerst moet nadenken over DDD-concepten voordat je gaat coderen. Value objects zijn waardevol omdat validatie ingebakken zit, zodat je geen ongeldig data kan hebben. Aggregates creëren duidelijke grenzen in je domein, zodat je weet wie verantwoordelijk is voor wat.',
			'Het beste moment was de post-its oefening. Ik kon goed samenwerken en we konden de processen helder krijgen. Het .NET project vond ik lastiger aan het begin, maar door hulp van experts verliep het goed. In mijn .NET lessen zag ik deze concepten ook terug, wat hielp om het thema verder te verdiepen. Ik heb deze activiteit geselecteerd omdat ik het belangrijk vind om niet gewoon te coderen, maar ook na te denken over architectuur. Met DDD leer je structureel nadenken. Bovendien vond ik het bijzonder dat experts van verschillende bedrijven hun kennis deelden. Dit gaf me zicht op hoe professionals in de industrie denken.'
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
		doelstelling: 'In een multidisciplinair en internationaal team een AI-gestuurd app-concept ontwikkelen dat studenten en ouderen verbindt voor wederzijds leren.',
		eigenDoelstelling: 'Ervaring opdoen in teamwerk en leren samenwerken met collega\'s uit andere landen en andere richtingen dan IT.',
		teamSamenstelling: 'Ons team bestond uit zes personen. Ik als enige IT-student voor de mockups, studenten van marketing en management.',
		description: 'In een multidisciplinair en internationaal team een AI-gestuurd app-concept ontwikkeld dat jongeren en ouderen verbindt voor wederzijds leren.',
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
			'We onderzochten zorgvuldig of dit idee al bestond in België. Gelukkig vonden we dat het concept nog niet op de markt was, dus we konden iets uniek en origineel maken. Dit gaf ons veel vertrouwen in ons idee en motivateerde het hele team. De marketing studenten werkten aan diepgaande marktanalyse en het business model, de management studenten concentreerden zich op strategie en operationele haalbaarheid en ik maakte de mockups voor de mobile app. De integratie van AI-tools ondersteunde ons in vrijwel elk aspect van het project. De taakverdeling was helder en effectief: iedereen wist exact wat hij of zij moest doen en wanneer het klaar moest zijn.',
			'Als onderdeel van het programma creëerden we ook onze eigen AI-avatars, wat een leuke en interactieve manier was om met kunstmatige intelligentie om te gaan.',
			'Op de volgende dagen verdiepten we ons in alle details van ons concept. De team-samenwerking was soepel en productief omdat de verschillende richtingen elkaar aanvulden in plaats van overlap te creëren. De marketing studenten brachten waardevolle inzichten in doelgroepen, concurrentiepositie en prijs-strategieën. De management studenten dachten diep na over verdienmodellen, hoe we geld zouden verdienen en schaalbaarheidsvragen. Ik zorgde ervoor dat de user interface intuïtief, aantrekkelijk en gebruiksvriendelijk was. Het toelichten van mijn mock-ups aan zowel de marketing- als de managementstudenten verliep soepeler dan ik vooraf had verwacht, waardoor we gezamenlijk konden brainstormen over mogelijke verbeteringen aan de mockups. We integreerden AI-functies in onze mockups om automatisch passende matches tussen jongeren en ouderen te maken. We presenteerden samen onze pitch aan een jury, die positief reageerde op het concept en het potentieel ervan.',
			'Naast het werk hadden we ook waardevolle sociale momenten: bootreis, kaas proeven in de Grotten van Kanne en Maastricht. Eind van de week ging ik nogeens mee met sommige studenten naar Maastricht. We keken naar de architectuur, wandelden door de gezellige straten en gingen naar een café waar we rustig konden zitten, praten en elkaar beter leren kennen. Dit moment was waardevol omdat we ontspannen waren en gewoon konden genieten van elkaars gezelschap. Deze activiteiten versterkten de banden in het team.'
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
			'De hackathon Hack the Future vond plaats op 12 november 2025 in Antwerpen. Het was georganiseerd door de Cronos Group. Dit was een intensieve coding wedstrijd waarin teams een werkende applicatie moesten bouwen rond een gegeven challenge. De challenge die we kozen was de "Agentic Ocean Explorer": een Flutter-app waarin gebruikers vragen over oceaandata kunnen stellen en de AI antwoorden geeft met visuele grafieken en schema\'s. We kozen deze challenge omdat ik meer praktische ervaring wilde opdoen in Flutter en omdat het ook goed aansloot bij AI, een onderwerp dat steeds belangrijker wordt in de softwareontwikkeling.',
			'Flutter is een heel goede framework voor mobile app development. Het stelt je in staat om met één codebase zowel iOS als Android apps te bouwen, wat veel efficiënter is dan aparte apps schrijven voor elk platform. Dit betekent dat je dezelfde code kan gebruiken voor iPhone en Android-toestellen, wat tijd en moeite bespaart. Flutter heeft ook een grote en actieve community, veel beschikbare libraries en packages die je kan hergebruiken en een snelle development cycle.',
			'De kern van de applicatie bestond uit een chat-interface die gebruikmaakt van het Gemini LLM. Dit model werd ingezet om natuurlijke taalvragen over oceaandata te interpreteren en om te zetten in gestructureerde antwoorden. Een essentieel onderdeel hiervan was de visuele weergave: de AI genereerde json data voor schema\'s en grafieken, zoals temperatuurverloopsdiagrammen om de data toegankelijk te maken voor de eindgebruiker.',
			'We hadden wat bugs onderweg en we zijn vooral erg lang aan het zoeken geweest naar een specifieke fout in onze code, wat voor merkbare vertragingen binnen de app zorgde. We hebben geruime tijd besteed aan het systematisch doorlopen van de functies en het analyseren van de logs om de oorzaak te achterhalen. Door veel te debuggen en gerichte vragen te stellen aan de experts, hebben we het uiteindelijk opgelost en de app afgemaakt. Hoewel de focus primair lag op de technische functionaliteit, waardoor de afwerking van de gebruikersinterface (UI/UX) beperkt bleef, werd het gestelde doel van een werkend prototype behaald.',
			'Ondanks de korte timeframe was de sfeer heel leuk. We kregen gratis eten en drank gedurende de hackathon, wat fijn was na uren coderen. Dit hielp ons energie te behouden. Ik heb veel nieuwe mensen leren kennen van andere teams tijdens de introductie aan het begin van de dag en in de pauzes.',
			'Gedurende de dag was er ook ruimte voor noodzakelijke rustmomenten. We gingen naar de ZOO Antwerpen, dat gratis toegankelijk was voor alle deelnemers. Tijdens een wandeling door het park konden we de focus even verleggen en ontspannen in een buitenomgeving. We konden buiten zijn en wat anders doen, wat ons weer energie gaf om verder te gaan.',
			'Het project werd afgesloten met een demonstratie voor een vakjury. Ondanks enkele technische complicaties in de laatste tien minuten voor de deadline, slaagden we erin een stabiele versie te presenteren. De demo liet zien hoe een gebruiker een vraag kon stellen over bijvoorbeeld de oceaantemperatuur, waarna de AI de relevante data genereerde. Deze informatie werd vervolgens gekoppeld aan widgets die in de app werden weergegeven als een overzichtelijk en visueel antwoord. De presentatie verliep ondanks de eerdere tijdsdruk succesvol, en we ontvingen positieve feedback van de jury op de functionele werking van de applicatie.'
		],
		reflectie: [
			'Deze hackathon was een leerzame ervaring voor me. Het was een uitdaging om in zo\'n korte termijn een volledig werkende app te maken. Wat echt hielp, was dat we ondersteuning kregen van experts ter plaatse. Echter, ondanks hun aanwezigheid, bleek de specifieke fout die de vertraging in onze app veroorzaakte zo hardnekkig dat zelfs zij niet direct een oplossing konden aanreiken. We bleven debuggen en de code analyseren tot we de oorzaak uiteindelijk vonden. Het was een enorme uitdaging om dit volledig zelfstandig op te lossen onder de tijdsdruk van de naderende deadline. Uiteindelijk hebben we het toch afgemaakt, wat een goed gevoel gaf. Het was intensief, maar ook productief.',
			'We kregen veel gratis eten en drank, wat fijn was na uren intensief coderen. Maar nog belangrijker waren de mensen die ik ontmoette. Tijdens de introductie aan het begin van de dag en in de pauzes leerde ik veel nieuwe mensen kennen van andere teams. Het was interessant om studenten van andere scholen en universiteiten te ontmoeten. Dit netwerken gaf me een waardevolle afwisseling van het pure coderen.',
			'Dit ervaring heeft mijn stressbestandigheid echt versterkt. In de laatste tien minuten hebben we nog snel bugs gefixt voordat we konden presenteren. Dat geeft veel zelfvertrouwen.',
			'Ik heb deze hackathon geselecteerd voor mijn portfolio vanwege de aanzienlijke leerwaarde die dergelijke evenementen bieden. Ongeacht het eindresultaat levert een hackathon altijd waardevolle expertise op, zoals diepgaande technische kennis en verbeterde probleemoplossende vaardigheden. Tijdens dit project heb ik mijn beheersing van Flutter aangescherpt en praktische ervaring opgedaan met de integratie van de Gemini API. Daarnaast heb ik bewezen effectief te kunnen presteren onder hoge tijdsdruk. Dit zijn essentiële competenties die ik direct kan toepassen in mijn toekomstige carrière als software developer.'
		],
		images: [
			{ src: 'hackathon/hack-the-future/pxl-studenten-hackathon.jpg', alt: 'Hack the Future deelnemers', beforeParagraph: 0 },
			{ src: 'hackathon/hack-the-future/zoo.jpg', alt: 'Bezoek aan de zoo Antwerpen tijdens de pauze', beforeParagraph: 4 }
		]
	},
	{
		id: 'csc',
		title: 'Cyber Security Challenge Belgium (CSC)',
		date: 'maart 2025',
		dates: '14-15 maart 2025',
		location: 'Online',
		duration: '32 uur',
		doelstelling: 'Deelnemen aan een Capture The Flag (CTF) competitie waarbij je diverse cybersecurity challenges oplost. Het doel is om verborgen flags te vinden en je skills in ethical hacking en problem-solving aan te scherpen.',
		eigenDoelstelling: 'Meer ervaring opdoen met cybersecurity, leren hoe je beveiligingsproblemen aanpakt en mijn problem-solving skills versterken.',
		teamSamenstelling: 'Ik werkte samen met mijn team "Onions" bestaande uit 3 studenten.',
		description: 'Deelname in team "Onions" aan een Capture The Flag (CTF) competitie. Flags gevonden in audiobestanden, PNG-metadata en via zelfgeschreven Python scripts.',
		tags: ['CTF', 'Cybersecurity', 'Python'],
		details: [
			'Capture The Flag challenges',
			'Python scripting voor flags',
			'Steganografie en audio-analyse',
			'Metadata analyse (PNG/audio)',
			'Cryptografie en reverse engineering'
		],
		highlight: 'Het moment dat ik zelf een flag vond met mijn Python script gaf me veel vertrouwen dat je dingen kan leren en toepassen zelfs zonder veel voorkennis.',
		verslag: [
			'De Cyber Security Challenge Belgium was een twee-daagse Capture The Flag competitie waarbij teams diverse cybersecurity challenges moesten oplossen. Dit was heel anders dan de andere hackathons die ik deed. In plaats van iets te bouwen, moest je gaten in beveiliging vinden en flags uit verschillende systemen halen. De Cyber Security Challenge is een jaarlijkse competitie in België waar meer dan 1000 studenten aan deelnemen.',
			'Elke challenge had een bepaalde puntwaarde. De challenges met 500 punten werden door niemand opgelost. De punten daalden naarmate meer deelnemers dezelfde challenge oplossen. Dit systeem maakte het spannend en competitief. Teams konden kiezen welke challenges ze willen aanpakken en in welke volgorde. Dit gaf ons flexibiliteit want als we ergens vastzaten, konden we naar een ander challenge type gaan.',
			'Ons team Onions bestond uit drie personen met verschillende skills. Ik kende mijn teamgenoten niet goed aan het begin. We waren allemaal van verschillende richtingen en hadden verschillende ervaringsniveaus met cybersecurity. Maar door deze twee intensieve dagen samen te werken, leerden we elkaar veel beter kennen.',
			'De challenges varieerden in type en moeilijkheid. De Cyber Security Challenge bevat verschillende categoriën: cryptografie, reverse engineering, web security, forensics en programmeren. Sommige challenges waren straightforward: je moest een flag vinden die in een image verborgen was met steganografie. Andere waren veel complexer en vereisten diepe technische kennis. Je moest scripts schrijven, bestanden analyseren, metadata checken op foto\'s en binaire data decoderen.',
			'Ik werkte veel met Python scripts om flags op te sporen. Met een van de Python scripts heb ik zelf een vlag kunnen vinden. We moesten audiobestanden doorzoeken, PNG metadata checken en binaire data decoderen. Een van de flags die ik zelf vond was verstopt in een audiobestand. Ik gebruikte de Audiopsy tool om het bestand te analyseren en de flag te extraheren. Dit moment gaf me veel vertrouwen dat ik ook zonder veel kennis iets kon bereiken. Ik realiseerde me dat je niet alles op voorhand hoeft te weten want je kan veel leren door te experimenteren.',
			'De atmosfeer was intens en uitdagend. Je zit urenlang achter je laptop met je team, zoekt naar hints en probeert verschillende aanpakken. Je bent constant op zoek naar nieuwe ideeën en manieren om challenges op te lossen. Als je een flag vindt, spring je op van enthousiasme. Als je vast zit, vraag je je teamgenoten om hulp. Het teamwerk verliep vlot. In het begin kenden we elkaar niet goed, maar naarmate we langer samenwerkten, begrepen we hoe we het beste samen konden werken.',
			'Wanneer iemand vastzat, deelde hij zijn scherm om zijn probleem te tonen. Zo brainstormden we samen over mogelijke oplossingen. Deze samenwerking maakte ons sterker als team. We leerden van elkaars sterktes en steunden elkaar in zwaktes. De community van Cyber Security Challenge is heel groot en in hun Discord server konden we vragen stellen en soms krijgen we goede inzichten van andere deelnemers en mentoren. Dit hielp ons ook vooruit te komen met challenges. Het was een echte leerervaring waarbij we niet alleen cybersecurity leerden, maar ook hoe je effectief in een team kunt werken en hoe je gebruik maakt van de bredere community.'
		],
		reflectie: [
			'Deze hackathon was echt anders dan Hack the Future. Hier ging het niet om code schrijven maar om problemen oplossen met tools die je niet kent. Dit leerde me veel over mijn aanpak en hoe ik onder druk kan denken.',
			'Mijn sterke punt was dat ik niet snel opgaf. Als een challenge niet werkte, probeerde ik een ander approach. Ik leerde snel van mijn teamgenoten. Ze hielpen me begrijpen hoe je bepaalde tools gebruikt. Dit samenwerken maakte het veel efficiënter en leuker.',
			'Mijn zwakke punt was dat ik niet veel cybersecurity kennis had. Ik moest veel googlen en veel dingen werden me uitgelegd. Ik voelde me soms verloren tussen al die tools en technieken. Maar dit is ook waarom ik deze hackathon deed, om precies dit te leren. Dit gaf me inzicht dat je niet alles op school leert. Je moet actief zoeken naar kennis en je moet durven deelnemen aan activiteiten waar je niet alles van weet.',
			'Wat me het meest is bijgebleven is het moment dat ik zelf een flag vond met mijn Python script. Ik had het script geschreven en het werkte. Dit toont dat je dingen kan leren en kan toepassen zelfs als je niet veel voorkennis hebt.',
			'Het teamwork in CSC was anders dan in andere hackathons. We zaten samen online, delen onze schermen, brainstormden samen. Als iemand vastzat, hij deelde het probleem en we hielpen elkaar.',
			'Dit hackathon toont ook mijn passie. Ik deed dit niet omdat het verplicht was. Ik schreef me in omdat ik benieuwd was en omdat ik wilde leren. Voor de toekomst wil ik meer over cybersecurity leren.'
		],
		images: [
			{ src: 'hackathon/csc2025/pixel-csc.png', alt: 'CSC 2025 deelname', beforeParagraph: 0 }
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
		reflectie: [
			'Deze hackathon was echt anders dan Hack the Future. Hier ging het niet om code schrijven maar om problemen oplossen met tools en scripts die je niet kent. Dit leerde me veel over mijn aanpak en hoe ik onder druk kan denken.',
			'Mijn sterke punt was dat ik niet snel opgaf. Als een challenge niet werkte, probeerde ik een ander approach. Ik leerde snel van mijn teamgenoten. Ze hielpen me begrijpen hoe je bepaalde tools gebruikt en hoe je naar beveiligingsproblemen denkt. Dit leerde me dat je in IT veel kan leren van andere mensen als je bereid bent vragen te stellen. In het begin snapte ik niet hoe Python scripts werkten, maar door te experimenteren en vragen te stellen aan mijn team, snapte ik het uiteindelijk wel.',
			'Mijn zwakke punt was dat ik niet veel cybersecurity kennis had. Ik moest veel googlen en veel dingen werden me uitgelegd. Ik voelde me soms verloren tussen al die tools en technieken. Maar dit is ook waarom ik deze hackathon deed, om precies dit te leren. Dit gaf me inzicht dat je niet alles op school leert. Je moet actief zoeken naar kennis en je moet durven deelnemen aan activiteiten waar je niet alles van weet.',
			'De CSC was mijn eerste echte Capture The Flag competitie en het gaf me inzicht dat er veel verschillende soorten programmeerwerk bestaan. Niet alles is applicatieontwikkeling. Er is security, data analysis, forensics, en veel meer. Dit kan een richting zijn die me interesseert voor later. Ik realiseerde me dat cybersecurity echt boeiend is. Het gaat over het vinden van zwakke plekken, over creatief denken, over het begrijpen van systemen op een dieper niveau.',
			'Wat me het meest is bijgebleven is het moment dat ik zelf een flag vond met mijn Python script. Ik had het script geschreven, het werkte, en ik vond iets wat anderen niet hadden gevonden. Dat gaf me echt vertrouwen. Dit toont dat je dingen kan leren en kan toepassen zelfs als je niet veel voorkennnis hebt.',
			'Het teamwork in CSC was anders dan in andere hackathons. We zaten samen online, delen onze schermen, brainstormden samen. Dit leerde me dat goed communiceren essentieel is in een team. Als iemand vastzat, hij deelde het probleem en we hielpen elkaar. Dit is wat samenwerking betekent: elkaar helpen en samen verder gaan.',
			'Dit hackathon toont ook mijn engagement en ondernemerschap. Ik deed dit niet omdat het verplicht was. Ik schreef me in omdat ik benieuwd was en omdat ik wilde leren. Dit is mijn X-Factor: ik zoek actief naar kansen, ik probeer dingen die ik niet ken, en ik geef niet op als het moeilijk wordt.',
			'Ik heb deze activiteit geselecteerd omdat het me toont dat ik uit mijn comfortzone kan gaan. Ik kende cybersecurity niet echt maar ik deed het toch. Dit leerde me ook dat failuren niet erg zijn. We wonnen niet, maar we leerden. Dit is wat telt.',
			'Voor de toekomst wil ik meer over cybersecurity leren. Misschien volg ik later een cursus of een specialisatie. Dit hackathon gaf me een eerste smaak en ik wil meer. Dit toont ook dat I-Talent me helpt om mijn interesses beter te ontdekken en uit te bouwen.',
			'Tot slot: deze hackathon herinnert me eraan dat je als developer nooit kan stoppen met leren. De IT-wereld verandert snel en je moet openstaan voor nieuwe dingen. CSC leerde me dit op een praktische manier.'
		],
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
		description: 'Daniel Mertens van Info Support gaf een uiteenzetting over .NET Aspire, een Microsoft framework dat ontwikkelaars helpt bij het bouwen en beheren van cloud-native applicaties met een microservices-architectuur.',
		company: 'Info Support',
		location: 'Corda Campus, Hasselt',
		date: '25 februari 2025',
		duration: '3 uur'
	},
	{
		title: 'Politie: Digitaal onderzoek',
		description: 'Alexander Bijnens en Arne Vanmechelen gaven een diepgaande blik op het werk van de Regionale Computer Crime Unit (RCCU). De focus lag op digital forensics en cybercrime. Aan de hand van een casus werd getoond hoe DLT-analyse en carving op de boordcomputer van een auto bewijslast leverden.',
		company: 'Politie',
		location: 'Corda Campus, Hasselt',
		date: '1 april 2025',
		duration: '3 uur'
	},
	{
		title: 'ACA Group: React',
		description: 'Introductie in React met kerntconcepten: JSX, state management, de useEffect hook, functionele componenten en one-way databinding. De theorie werd concreet gemaakt door de bouw van een Pokémon-app met herbruikbare componenten en routing via useContext.',
		company: 'ACA Group',
		location: 'Corda Campus, Hasselt',
		date: '29 april 2025',
		duration: '3 uur'
	},
	{
		title: 'Vanroey: AI in de praktijk',
		description: 'Praktijkgerichte introductie in artificiële intelligentie met uitgebreide aandacht voor basisprincipes van prompt engineering om AI effectief in te zetten in een professionele omgeving.',
		company: 'Vanroey',
		location: 'Corda Campus, Hasselt',
		date: '13 mei 2025',
		duration: '3 uur'
	},
	{
		title: 'BDD & ATDD',
		description: 'De noodzaak van kwalitatief testen geïllustreerd aan de hand van bekende softwarefouten uit het verleden. Methodieken als TDD (Test Driven Development), BDD (Behavior Driven Development) en ATDD (Acceptance Test Driven Development) werden toegelicht.',
		company: 'Brightest',
		location: 'Corda Campus, Hasselt',
		date: '5 november 2025',
		duration: '3 uur'
	},
	{
		title: 'Refleqt: Software testing',
		description: 'Zeer praktisch ingestoken seminar met focus op Postman. Er werd getoond hoe de AI-functionaliteiten van Postman helpen bij het genereren van testcases en code-export.',
		company: 'Refleqt',
		location: 'Corda Campus, Hasselt',
		date: '26 november 2025',
		duration: '3 uur'
	},
	{
		title: 'Inetum: Enterprise UX',
		description: 'Uitgebreid overzicht van Enterprise UX met focus op het gebruik van design patterns voor zakelijke applicaties en de volledige UX-methodologie.',
		company: 'Inetum',
		location: 'Corda Campus, Hasselt',
		date: '10 december 2025',
		duration: '3 uur'
	},
	{
		title: 'Cegeka: Open Source',
		description: 'Bespreking van open-source software in het moderne IT-landschap. Naast de voordelen werden ook de risico\'s in kaart gebracht, zoals beveiligingskwetsbaarheden en het gebrek aan onderhoud.',
		company: 'Cegeka',
		location: 'Corda Campus, Hasselt',
		date: '17 december 2025',
		duration: '3 uur'
	}
];

export const REFLECTION_CONTENT = {
	title: 'Eindreflectie',
	paragraphs: [
		'I-Talent was voor mij een erg waardevolle ervaring. In het begin zag ik het voornamelijk als een verplicht onderdeel, maar na verloop van tijd veranderde dit. Ik begon de meerwaarde ervan in te zien en besefte dat het me daadwerkelijk heeft geholpen om te groeien, zowel als developer als teamplayer.',
		'Mijn voornaamste doelen waren het opdoen van praktijkervaring en het versterken van mijn samenwerkingsvaardigheden. Door actieve deelname aan de Domain Driven Design-route, het BIP, hackathons en seminaries, heb ik mezelf uitgedaagd om nieuwe vaardigheden te ontwikkelen. Hierdoor heb ik niet alleen geleerd om effectief samen te werken, maar heb ik ook ervaren dat ik in staat ben om projecten, zelfs onder druk, succesvol af te ronden.',
		'Tijdens het BIP was ik de enige met een IT-achtergrond in een internationale groep, die verder bestond uit studenten met een specialisatie in marketing en management uit Duitsland en Kroatië. Doordat we al snel een goede band opbouwden, werd de samenwerking aanzienlijk bevorderd. Het toelichten van mijn mock-ups aan de marketingstudenten verliep soepeler dan ik vooraf had verwacht. Zij begrepen mijn doelen helder en ik kreeg op mijn beurt een goed inzicht in wat zij vanuit hun vakgebied nodig hadden. Deze samenkomst van verschillende perspectieven heeft de kwaliteit van ons uiteindelijke concept sterk verhoogd.',
		'Het belangrijkste wat ik heb geleerd is dat je in IT altijd open moet blijven voor nieuwe concepten en inzichten. De seminaries gaven me veel nieuwe kennis maar de hackathons leerden me iets anders. Hackathons zijn over snel leren, samenwerken onder druk, iets afmaken wat werkt.',
		'Ik deed mee aan drie hackathons en elke was anders. De eerste was de CSC hackathon, een Capture The Flag competitie. Dit was heel anders. Je moet denken als een hacker, problemen oplossen met scripts en tools die je niet kent. Dit leerde me creatief denken en samenwerken met andere mensen.',
		'De tweede was CodeBash, een algoritmische programmeerwedstrijd. Hier moest je snel complexe problemen oplossen. Met mijn team leerden we vlot van elkaar en we konden elkaar helpen als iemand vast zat. De derde was Hack the Future in Antwerpen. We moesten in korte tijd een Flutter app maken. In de laatste minuten moesten we nog bugs fixen voordat we konden presenteren. Dat moment gaf me echt vertrouwen. We hebben het afgekregen terwijl ik dacht dat het niet zou lukken.',
		'Naast deze activiteiten heb ik ook aan persoonlijke ontwikkeling gewerkt. De POP-sessies over veerkracht en teamdynamiek hebben me geholpen om mezelf beter te leren kennen. De projectweek sessies over kernkwadranten en netwerken gaf me inzicht in mijn waarden en hoe ik beter kan communiceren. Deze persoonlijke ontwikkelingen vormden de basis voor hoe ik in teams kan functioneren.',
		'Mijn kernkwaliteiten zijn teamwork en doorzettingsvermogen. Ik ben iemand die niet snel opgeeft, wat duidelijk naar voren kwam tijdens de hackathons. Zo stonden we bij "Hack the Future" onder aanzienlijke tijdsdruk om snel een werkende applicatie te ontwikkelen. Ondanks deze strakke deadline zijn we erin geslaagd het project succesvol af te ronden.',
		'Daarnaast ben ik goed in staat om effectief samen te werken met mensen met verschillende vaardigheden. Deze kwaliteit heb ik uitgebreid in de praktijk kunnen brengen. Tijdens het BIP deed ik dit in samenwerking met de marketing- en managementstudenten.',
		'Dit vak heeft me veel bijgebracht en bovendien voor mooie herinneringen gezorgd. Vooral de hackathons en het BIP zullen me nog lang bijblijven.'
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
