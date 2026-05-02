/**
 * Application constants and data
 * Data layer for the portfolio
 */

/** @type {Array<{id: string, title: string, subtitle: string, description: string, tags: string[], icon: string}>} */
export const ACTIVITIES = [
	{
		id: 'ddd',
		title: 'Design Driven Development',
		subtitle: 'DDD Seminary',
		description:
			'Participated in a Design Driven Development seminary where I explored the intersection of design thinking and software development. Learned how user-centered design processes can improve product quality and team collaboration.',
		tags: ['Design Thinking', 'UX/UI', 'Agile', 'Collaboration'],
		icon: '🎨'
	},
	{
		id: 'bip',
		title: 'Business Innovation Project',
		subtitle: 'BIP International',
		description:
			'Took part in an intensive Business Innovation Project with international students. Worked on real-world business challenges, developed entrepreneurial skills, and gained cross-cultural collaboration experience.',
		tags: ['Innovation', 'Entrepreneurship', 'International', 'Teamwork'],
		icon: '🌍'
	},
	{
		id: 'hackathon',
		title: 'Hackathon Challenge',
		subtitle: '24h Innovation Sprint',
		description:
			'Competed in a 24-hour hackathon, building a prototype solution for a pressing social problem. Sharpened technical skills under pressure, practiced rapid prototyping, and collaborated with diverse teammates.',
		tags: ['Problem Solving', 'Prototyping', 'Development', 'Creativity'],
		icon: '⚡'
	}
];

/** @type {{name: string, title: string, program: string, institution: string, stats: Array<{value: string, label: string}>}} */
export const MILANA_PROFILE = {
	name: 'Milana Askhabova',
	title: 'Applied Computer Science Student',
	program: 'Bachelor Applied Computer Science',
	institution: 'PXL University of Applied Sciences and Arts',
	bio: 'Passionate student at PXL University, constantly exploring the boundaries between technology, design, and innovation. Through iLearning activities, I have had the opportunity to grow both personally and professionally by engaging with real-world challenges, international teams, and creative problem-solving methodologies.',
	stats: [
		{ value: '8+', label: 'Seminaries' },
		{ value: '3', label: 'Innovations' },
		{ value: '1', label: 'International' }
	]
};

/** @type {Array<{year: string, title: string, description: string, category: string}>} */
export const HIGHLIGHTS = [
	{
		year: '2024',
		title: 'BIP International Program',
		description:
			'Selected to participate in an international Business Innovation Project, collaborating with students from across Europe on real business challenges.',
		category: 'International'
	},
	{
		year: '2024',
		title: 'Hackathon Winner',
		description:
			'Our team developed an innovative solution during the 24-hour hackathon, earning recognition for creativity and technical execution.',
		category: 'Achievement'
	},
	{
		year: '2023',
		title: 'DDD Seminary Completion',
		description:
			'Completed the Design Driven Development seminary, gaining valuable insights into user-centered design processes and agile methodologies.',
		category: 'Learning'
	},
	{
		year: '2023',
		title: 'iLearning Journey Begins',
		description:
			'Started the iLearning track at PXL, committing to personal and professional development beyond traditional classroom learning.',
		category: 'Milestone'
	}
];

/** @type {Array<{id: string, label: string, href: string}>} */
export const NAV_LINKS = [
	{ id: 'home', label: 'Home', href: '#home' },
	{ id: 'about', label: 'About', href: '#about' },
	{ id: 'activities', label: 'Activities', href: '#activities' },
	{ id: 'highlights', label: 'Highlights', href: '#highlights' },
	{ id: 'reflection', label: 'Reflection', href: '#reflection' }
];
