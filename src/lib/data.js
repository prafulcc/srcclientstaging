import { Rocket, Users, ShieldCheck, Database, MapPinPlus, Gavel } from '@lucide/svelte';

export const partnerLogos = [
	{ name: 'Moderna', src: '/logos/moderna.png' },
	{ name: 'Biohaven', src: '/logos/biohaven-pharmaceuticals.png' },
	{ name: 'Accelsiors', src: '/logos/accelsiors.png' },
	{ name: 'CRPN', src: '/logos/clinical-research-payment-network.png' }
];

export const regulatoryLogos = [
	{
		name: 'MHRA',
		src: 'https://assets.publishing.service.gov.uk/media/5b2cbf31e5274a55dc9b0229/s960_MHRA-logo-960px.jpg'
	},
	{
		name: 'FDA',
		src: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Logo_of_the_United_States_Food_and_Drug_Administration.svg'
	},
	{
		name: 'EMA',
		src: 'https://www.ema.europa.eu/themes/custom/ema_theme/resources/images/logo_ema.svg'
	},
	{
		name: 'NHS HRA',
		src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Health_Research_Authority_logo.svg/1280px-Health_Research_Authority_logo.svg.png'
	},
	{
		name: 'NICE',
		src: 'https://www.hdruk.ac.uk/wp-content/uploads/2024/01/NICE-logo-e1704811229663.png'
	},
	{
		name: 'OHRP',
		src: 'https://www.hhs.gov/ohrp/sites/default/files/ohrp-logo191.png'
	}
];

export const colors = {
	primary: '#047857', // emerald-700
	primaryDark: '#065f46', // emerald-800
	primaryLight: '#059669', // emerald-600
	secondary: '#0f172a', // slate-900
	background: '#f8fafc', // slate-50
	light: '#ffffff',
	text: '#1e293b', // slate-800
	textLight: '#64748b' // slate-500
};

// Centralized clinical research services data
export const services = {
	'study-startup': [
		{
			name: 'Assisted trial design',
			details:
				'Strategic consultation to optimize your study endpoints and methodology for maximum clinical impact.'
		},
		{
			name: 'Protocol writing',
			details:
				'Developing scientifically rigorous and regulatory-compliant protocols tailored to your specific therapeutic area.'
		},
		{
			name: 'Site feasibility, selection, training and initiation',
			details:
				'Identifying high-performing sites and ensuring teams are fully equipped to meet enrollment and safety targets.'
		},
		{
			name: 'IRB/ethics and regulatory submissions',
			details:
				'Navigating complex global submission pathways to secure rapid approvals and maintain study timelines.'
		},
		{
			name: 'CTMS configuration and UAT',
			details:
				'Setting up robust Clinical Trial Management Systems with thorough User Acceptance Testing for flawless operations.'
		},
		{
			name: 'Study plans',
			details:
				'Crafting detailed operational roadmaps that align stakeholders and define clear paths to project milestones.'
		}
	],
	'patient-recruitment': [
		{
			name: 'EMR databank querying',
			details:
				'Utilizing advanced Electronic Medical Record data to identify eligible participants with precision and speed.'
		},
		{
			name: 'Central digital advertising',
			details:
				'Running targeted multi-channel campaigns to reach diverse patient populations across digital platforms.'
		},
		{
			name: 'On-site patient recruitment',
			details:
				'Deploying specialist teams directly to clinical sites to facilitate face-to-face engagement and enrollment.'
		},
		{
			name: 'Study websites and marketing materials',
			details:
				'Designing patient-centric digital portals and high-quality printed materials to boost trial visibility.'
		},
		{
			name: 'Patient concierge',
			details:
				'Providing dedicated support to participants to reduce burden and improve long-term study retention.'
		},
		{
			name: 'Pre-screening',
			details:
				'Implementing rigorous initial vetting processes to ensure only the most qualified candidates reach the site.'
		}
	],
	'study-management': [
		{
			name: 'Project management',
			details:
				'Proactive oversight of timelines, budgets, and resources to keep your clinical trial on track and within scope.'
		},
		{
			name: 'Monitoring',
			details:
				'Comprehensive clinical monitoring to ensure data integrity and strict adherence to GCP standards.'
		},
		{
			name: 'Vendor management',
			details:
				'Seamless coordination with IMP providers, central labs, and IRT vendors for integrated trial delivery.'
		},
		{
			name: 'TMF management',
			details:
				'Maintaining a complete and "inspection-ready" Trial Master File throughout the entire study lifecycle.'
		},
		{
			name: 'Pharmacovigilance',
			details:
				'Continuous safety monitoring and reporting to protect participant well-being and meet regulatory duties.'
		},
		{
			name: 'Medical monitoring',
			details:
				'Expert medical oversight to provide real-time guidance on safety signals and eligibility queries.'
		}
	],
	'data-management': [
		{
			name: 'Database locks',
			details:
				'Executing timely and accurate database locks to prepare your data for final analysis and reporting.'
		},
		{
			name: 'Data delivery in CDISC SDTM-like format',
			details:
				'Providing high-quality datasets structured for immediate submission to global regulatory authorities.'
		},
		{
			name: 'Data standardization',
			details:
				'Harmonizing disparate data sources into a unified, consistent format for cleaner analysis.'
		},
		{
			name: 'Biostatistics and Programming',
			details:
				'Advanced statistical modeling and programming to extract meaningful insights from your clinical data.'
		},
		{
			name: 'Medical writing',
			details:
				'Crafting clear, professional Clinical Study Reports (CSRs) and summaries for regulatory review.'
		}
	],
	'site-management': [
		{
			name: 'On-site Principal Investigators and Clinical Research Coordinators',
			details:
				'Providing experienced clinical leadership and staff to manage day-to-day trial activities effectively.'
		},
		{
			name: 'Local Primary Care Physician and GP Sites',
			details:
				'Expanding your reach by leveraging community-based medical practices for broader accessibility.'
		},
		{
			name: 'Speciality Sites',
			details:
				'Accessing specialized expertise across Neurology, Dermatology, Endocrinology, and other therapeutic areas.'
		},
		{
			name: 'Mobile Phlebotomy and Nursing',
			details:
				'Bringing the trial to the patient with mobile services to increase convenience and data quality.'
		}
	],
	'regulatory-affairs': [
		{
			name: 'Legal Representation within the UK, USA and EU',
			details:
				'Acting as your authorized legal representative to ensure compliance for foreign-sponsored trials.'
		},
		{
			name: 'Health Authority Interface',
			details:
				'Managing all communications and negotiations with agencies like the FDA, EMA, and MHRA.'
		},
		{
			name: 'Response Management',
			details:
				'Coordinating rapid, technical responses to health authority queries to prevent trial delays.'
		},
		{
			name: 'Approval Tracking',
			details:
				'Monitoring global regulatory statuses in real-time to provide clarity on your market entry timeline.'
		}
	]
};

// Service categories for UI display, updated with icons
export const serviceCategories = [
	{ id: 'all', label: 'All Services' },
	{ id: 'study-startup', label: 'Study Startup', icon: Rocket },
	{ id: 'patient-recruitment', label: 'Patient Recruitment', icon: Users },
	{ id: 'study-management', label: 'Study Management', icon: ShieldCheck },
	{ id: 'data-management', label: 'Data Management', icon: Database },
	{ id: 'site-management', label: 'Site Management', icon: MapPinPlus },
	{ id: 'regulatory-affairs', label: 'Regulatory Affairs', icon: Gavel }
];

// Helper function to get category label from category ID dynamically
export function getCategoryLabel(categoryId) {
	const category = serviceCategories.find((c) => c.id === categoryId);
	return category ? category.label : '';
}

// Get all services as a flat array with category information
export function getAllServices() {
	return Object.keys(services).flatMap((category) =>
		services[category].map((service) => ({
			...service,
			category
		}))
	);
}
