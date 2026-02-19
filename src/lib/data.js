import {
	ShieldCheck,
	Building,
	HeartHandshake,
	FileCheck,
	FlaskConical,
	Globe,
	BarChart
} from '@lucide/svelte';

export const partnerLogos = [
	{ name: 'Moderna', src: '/logos/moderna.png' },
	{ name: 'Biohaven', src: '/logos/biohaven-pharmaceuticals.png' },
	{ name: 'Accelsiors', src: '/logos/accelsiors.png' },
	{ name: 'CRPN', src: '/logos/clinical-research-payment-network.png' },
	{ name: 'Sanofi', src: '/logos/sanofi.svg' },
	{ name: 'Inato', src: '/logos/inato.webp' }
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
	// {
	// 	name: 'NICE',
	// 	src: 'https://www.hdruk.ac.uk/wp-content/uploads/2024/01/NICE-logo-e1704811229663.png'
	// },
	// {
	// 	name: 'OHRP',
	// 	src: 'https://www.hhs.gov/ohrp/sites/default/files/ohrp-logo191.png'
	// },
	{
		name: 'ISO',
		src: '/iso.avif'
	},
	{
		name: 'HIPAA',
		src: '/hipaa.avif'
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
// Exported services broken down into granular Site Management and Late Phase categories
export const services = {
	'site-selection-activation': [
		{
			name: 'Site Identification and Profiling',
			details:
				'Utilizing data-driven feasibility assessments to pinpoint high-performing sites and ideal patient populations.',
			image: 'https://unsplash.com/photos/gUFQybn_CVg/download?force=true&w=1920'
		},
		{
			name: 'Site Qualification Visits (SQV)',
			details:
				'Conducting thorough evaluations of facility infrastructure, staff expertise, and equipment capabilities.',
			image: 'https://unsplash.com/photos/BGbLDm77t0M/download?force=true&w=1920'
		},
		{
			name: 'Investigator and KOL Engagement',
			details:
				'Building strong relationships with Key Opinion Leaders and principal investigators to drive study success.',
			image: 'https://unsplash.com/photos/jm2XIuyvh4A/download?force=true&w=1920'
		},
		{
			name: 'IRB/Ethics and Regulatory Submissions',
			details:
				'Managing localized ethics committee approvals and regulatory documentation for rapid site activation.',
			image: 'https://unsplash.com/photos/eXcF6L9pEug/download?force=true&w=1920'
		},
		{
			name: 'Site Initiation Visits (SIV) and Training',
			details:
				'Ensuring all site personnel are fully trained on study protocols, GCP, and electronic systems before trial commencement.',
			image: 'https://unsplash.com/photos/7Z2Xf8Bb7iM/download?force=true&w=1920'
		}
	],
	'site-monitoring-oversight': [
		{
			name: 'Risk-Based Monitoring (RBM)',
			details:
				'Implementing adaptive, centralized monitoring strategies to identify and mitigate risks proactively.',
			image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit'
		},
		{
			name: 'Interim Monitoring Visits (IMV)',
			details:
				'Conducting regular on-site or remote visits to verify source data, assess protocol compliance, and resolve queries.',
			image: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit'
		},
		{
			name: 'Source Data Verification (SDV) & Review (SDR)',
			details:
				'Ensuring absolute data integrity by cross-referencing EDC entries with original patient records.',
			image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit'
		},
		{
			name: 'IMP and Clinical Supply Accountability',
			details:
				'Overseeing the secure storage, dispensing, and tracking of Investigational Medicinal Products at the site level.',
			image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit'
		},
		{
			name: 'Protocol Deviation Management',
			details:
				'Identifying, documenting, and implementing corrective and preventive actions (CAPA) for any protocol deviations.',
			image: ''
		}
	],
	'site-patient-support': [
		{
			name: 'Site-Specific Recruitment Planning',
			details:
				'Developing localized patient outreach strategies tailored to the unique demographics of each site.',
			image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit'
		},
		{
			name: 'Patient Concierge and Travel Services',
			details: 'Reducing dropout rates by managing participant travel, and stipend reimbursements.',
			image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit'
		},
		{
			name: 'Community Practice and GP Integration',
			details:
				'Expanding trial access by integrating local primary care physicians and community clinics into the site network.',
			image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit'
		},
		{
			name: 'Pre-Screening and Enrollment Tracking',
			details:
				'Implementing robust initial vetting processes to ensure only highly qualified candidates reach the randomization phase.',
			image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit'
		}
	],
	'site-closeout-qa': [
		{
			name: 'Site Close-Out Visits (COV)',
			details:
				'Managing the final reconciliation of data, drug supplies, and documentation to officially close trial sites.',
			image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit'
		},
		{
			name: 'Database Lock Preparation',
			details:
				'Collaborating with data management teams to accelerate query resolution and ensure a clean, timely database lock.',
			image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit'
		},
		{
			name: 'Inspection Readiness and Auditing',
			details:
				'Conducting mock audits and comprehensive QC checks to ensure sites are fully prepared for regulatory inspections.',
			image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit'
		},
		{
			name: 'eTMF Reconciliation',
			details:
				'Verifying that the electronic Trial Master File is complete, accurate, and inspection-ready at the site level.',
			image: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit'
		},
		{
			name: 'Investigator Payment Management',
			details:
				'Automating and tracking accurate, milestone-based financial reimbursements to sites and investigators.',
			image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit'
		}
	],
	'phase-iv-clinical-trials': [
		{
			name: 'Phase IIIb/IV Pragmatic Trials',
			details:
				'Designing large-scale, post-approval studies to gather safety and efficacy data in real-world clinical settings.',
			image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit'
		},
		{
			name: 'Label Extension Studies',
			details:
				'Generating robust clinical evidence required by regulatory bodies to expand a product’s approved indications.',
			image: ''
		},
		{
			name: 'Post-Marketing Safety Surveillance',
			details:
				'Conducting continuous pharmacovigilance to detect, monitor, and report long-term or rare adverse events.',
			image: ''
		},
		{
			name: 'Comparative Effectiveness Research (CER)',
			details:
				'Evaluating how a new therapy compares to existing standard-of-care treatments in real-world scenarios.',
			image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit'
		},
		{
			name: 'Compassionate Use and Early Access Programs',
			details:
				'Managing ethical pathways to provide pre-approval access to experimental drugs for patients with unmet medical needs.',
			image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit'
		}
	],
	'observational-rwe': [
		{
			name: 'Non-Interventional Cohort Studies',
			details:
				'Executing prospective observational studies where patients are treated according to standard clinical practice.',
			image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit'
		},
		{
			name: 'Retrospective Chart Reviews',
			details:
				'Analyzing existing medical records and historical data to identify treatment patterns and historical control cohorts.',
			image: 'https://images.unsplash.com/photo-1568227451433-a3d8b5211915?auto=format&fit'
		},
		{
			name: 'Disease and Product Registries',
			details:
				'Building and managing longitudinal databases to track patient outcomes, disease progression, and long-term safety.',
			image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit'
		},
		{
			name: 'Electronic Health Record (EHR) Analytics',
			details:
				'Extracting and standardizing vast amounts of unstructured healthcare data to generate actionable Real-World Evidence.',
			image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit'
		},
		{
			name: 'Wearable and ePRO Integration',
			details:
				'Collecting continuous, real-time physiological data and patient-reported outcomes outside of traditional clinical settings.',
			image: 'https://images.unsplash.com/photo-1575316315890-410a7248e3d6?auto=format&fit'
		}
	],
	'health-economics-outcomes': [
		{
			name: 'Health Economics and Outcomes Research (HEOR)',
			details:
				'Generating economic models and value dossiers to support pricing, reimbursement, and market access strategies.',
			image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit'
		},
		{
			name: 'Quality of Life (QoL) Assessments',
			details:
				"Validating and analyzing the direct impact of therapies on patients' daily lives and overall wellbeing.",
			image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit'
		},
		{
			name: 'Post-Authorization Safety Studies (PASS)',
			details:
				'Fulfilling mandatory regulatory requirements to evaluate specific safety concerns post-approval.',
			image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit'
		},
		{
			name: 'Post-Authorization Efficacy Studies (PAES)',
			details:
				'Collecting supplementary data to confirm the ongoing efficacy of a drug within the general population.',
			image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit'
		},
		{
			name: 'Cost-Effectiveness Analysis',
			details:
				'Demonstrating the economic value of a therapy to healthcare payers, HTA bodies, and formulary committees.',
			image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit'
		}
	]
};

// Service categories for UI display, updated with relevant icons
export const serviceCategories = [
	{ id: 'all', label: 'All Services' },
	{ id: 'site-selection-activation', label: 'Site Selection & Activation', icon: Building },
	{ id: 'site-monitoring-oversight', label: 'Site Monitoring & Oversight', icon: ShieldCheck },
	{ id: 'site-patient-support', label: 'Site Patient Support', icon: HeartHandshake },
	{ id: 'site-closeout-qa', label: 'Site Close-Out & QA', icon: FileCheck },
	{ id: 'phase-iv-clinical-trials', label: 'Phase IIIb/IV Trials', icon: FlaskConical },
	{ id: 'observational-rwe', label: 'Observational & RWE', icon: Globe },
	{ id: 'health-economics-outcomes', label: 'Health Economics (HEOR)', icon: BarChart }
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
