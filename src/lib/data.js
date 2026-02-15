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

// Centralized services data for the application
export const services = {
	vaccines: [
		{
			name: 'Hepatitis B',
			price: '£55.00',
			duration: '0, 1 & 6 months',
			doses: 3,
			booster: '5 years',
			details: 'Protects against Hepatitis B virus that can cause liver inflammation and damage.'
		},
		{
			name: 'Hepatitis B + Nurse visit',
			price: '£60.00',
			duration: '0, 1 & 6 months',
			doses: 3
		},
		{
			name: 'MMR (Measles/Mumps/Rubella)',
			price: '£70.00',
			duration: 'Two doses required',
			doses: 2,
			details:
				'Protects against measles, mumps, and rubella viruses which can cause serious complications.'
		},
		{
			name: 'MMR + Nurse visit',
			price: '£75.00',
			duration: 'Two doses required',
			doses: 2
		},
		{
			name: 'Chicken Pox (varicella)',
			price: '£70.00',
			duration: 'Two doses required',
			doses: 2,
			details: 'Provides immunity against the varicella virus which causes chickenpox.'
		},
		{
			name: 'Chicken Pox + Nurse visit',
			price: '£75.00',
			duration: 'Two doses required',
			doses: 2
		},
		{
			name: 'Mantoux Test & Read (skin test)',
			price: '£70.00',
			duration: 'Test 1st day, Reading at 72 hrs'
		},
		{
			name: 'Mantoux Test & Read + Nurse visit',
			price: '£80.00',
			duration: 'Test 1st day, Reading at 72 hrs'
		},
		{
			name: 'BCG TB vaccines',
			price: '£45.00',
			duration: 'One dose',
			doses: 1
		},
		{
			name: 'BCG Scar verify',
			price: '£35.00',
			duration: 'One visit'
		}
	],
	immune: [
		{
			name: 'Immune Booster (single)',
			price: '£150.00',
			duration: 'One session',
			doses: 1,
			details: 'Vitamin and mineral IV therapy to help boost your immune system.'
		},
		{
			name: 'Immune Booster (5 sessions)',
			price: '£650.00',
			duration: 'Five sessions',
			doses: 5
		},
		{
			name: 'Vit C (10g) + glutathione (600mg)',
			price: '£110.00',
			duration: 'One session',
			doses: 1,
			details: 'High-dose vitamin C combined with glutathione for antioxidant support.'
		},
		{
			name: 'Myers Cocktail',
			price: '£170.00',
			duration: 'One session',
			doses: 1,
			details:
				'A nutrient cocktail given intravenously to help with various health conditions and improve energy.'
		},
		{
			name: 'Glutathione 1200mg (alone)',
			price: '£80.00',
			duration: 'One session',
			doses: 1
		},
		{
			name: 'B12 Methylcobalamin 5mg / 1ml',
			price: '£40.00',
			duration: 'One injection',
			doses: 1
		}
	],
	occupational: [
		{
			name: 'Safety Critical Medical Assessment',
			price: 'POA',
			duration: 'One session',
			details: 'Comprehensive medical assessment for safety-critical roles.'
		},
		{
			name: 'HGV/LGV/PSV medical',
			price: '£50.00',
			duration: 'One session',
			details:
				'Medical assessment required for Heavy Goods Vehicle, Large Goods Vehicle, or Public Service Vehicle licenses.'
		},
		{
			name: 'Pre-employment health questionnaire (paper-screen only)',
			price: '£25.00',
			duration: 'One assessment'
		},
		{
			name: 'Pre-employment health questionnaire with follow up',
			price: '£100.00',
			duration: 'Assessment with telephone consult'
		},
		{
			name: 'Preemployment (fitness for work) medical assessment',
			price: '£140.00',
			duration: 'One session'
		},
		{
			name: 'Oil & Gas UK (OGUK) medical',
			price: '£200.00',
			duration: 'One session'
		},
		{
			name: 'Oil & Gas UK (OGUK) medical plus ERT',
			price: '£250.00',
			duration: 'One session'
		},
		{
			name: 'Oil & Gas UK (OGUK) medical plus Fit to train',
			price: '£300.00',
			duration: 'One session'
		},
		{
			name: 'In water Fit to Train medicals',
			price: '£120.00',
			duration: 'One session'
		},
		{
			name: 'Working at height medicals',
			price: '£100.00',
			duration: 'One session'
		},
		{
			name: 'HSE diving medical',
			price: '£150.00',
			duration: 'One session'
		},
		{
			name: 'Padi diving medical',
			price: '£60.00',
			duration: 'One session'
		}
	],
	bloodtests: [
		{
			name: 'Full blood Count',
			price: '£40.00',
			duration: 'One test',
			details:
				'Measures several components of your blood including red and white blood cells, and platelets.'
		},
		{
			name: 'Biochemistry plus liver function tests',
			price: '£45.00',
			duration: 'One test',
			details: 'Comprehensive blood test assessing liver function and general biochemistry markers.'
		},
		{
			name: 'Hepatitis B antibody (post immunisation)',
			price: '£50.00',
			duration: 'One test'
		},
		{
			name: 'Hepatitis B core antibodies',
			price: '£50.00',
			duration: 'One test'
		},
		{
			name: 'Hepatitis A antibodies',
			price: '£45.00',
			duration: 'One test'
		},
		{
			name: 'Measles, Mumps, Rubella antibodies',
			price: '£100.00',
			duration: 'One test'
		},
		{
			name: 'Chicken pox (Varicella) antibodies',
			price: '£45.00',
			duration: 'One test'
		},
		{
			name: 'TB Quantiferon Gold',
			price: '£70.00',
			duration: 'One test'
		},
		{
			name: 'Drug test 10 part',
			price: '£45.00',
			duration: 'One test'
		},
		{
			name: 'Alcohol test',
			price: '£25.00',
			duration: 'One test'
		}
	],
	consultation: [
		{
			name: '60 minutes Physician Consultation',
			price: '£260.00',
			duration: 'One consultation'
		},
		{
			name: '30 minutes Physician Consultation',
			price: '£120.00',
			duration: 'One consultation'
		},
		{
			name: '60 minutes Nutritional Consultation',
			price: '£120.00',
			duration: 'One consultation'
		},
		{
			name: '30 minutes Nutritional Consultation',
			price: '£60.00',
			duration: 'One consultation'
		},
		{
			name: '60 minutes Psychological counselling',
			price: '£100.00',
			duration: 'One consultation'
		},
		{
			name: '30 minutes Psychological counselling',
			price: '£60.00',
			duration: 'One consultation'
		}
	],
	diagnostic: [
		{
			name: 'Basic (Core Diagnostic test) FDx01',
			price: '£175.00',
			duration: 'One test'
		},
		{
			name: 'Comprehensive (Maximum Diagnostic test) FDx02',
			price: '£340.00',
			duration: 'One test'
		},
		{
			name: 'Vital (Diagnostic test) FDx03',
			price: '£285.00',
			duration: 'One test'
		},
		{
			name: 'Thyroid (CoreDiagnostic test) FDx14',
			price: '£200.00',
			duration: 'One test'
		},
		{
			name: 'Thyroid (VitalDiagnostic test) FDx15',
			price: '£340.00',
			duration: 'One test'
		},
		{
			name: 'Female Health FDx18',
			price: '£380.00',
			duration: 'One test'
		},
		{
			name: 'Male Health FDx19',
			price: '£350.00',
			duration: 'One test'
		},
		{
			name: 'Vitamins FDx04',
			price: '£70.00',
			duration: 'One test'
		}
	]
};

// Service categories for UI display
export const serviceCategories = [
	{ id: 'all', label: 'All Services' },
	{ id: 'vaccines', label: 'Vaccinations' },
	{ id: 'immune', label: 'Immune Support' },
	{ id: 'occupational', label: 'Occupational Health' },
	{ id: 'bloodtests', label: 'Blood Tests' },
	{ id: 'consultation', label: 'Consultations' },
	{ id: 'diagnostic', label: 'Diagnostic Tests' }
];

// Helper function to get category label from category ID
export function getCategoryLabel(categoryId) {
	const categoryMap = {
		vaccines: 'Vaccination',
		immune: 'Immune Support',
		occupational: 'Occupational Health',
		bloodtests: 'Blood Test',
		consultation: 'Consultation',
		diagnostic: 'Diagnostic Test'
	};
	return categoryMap[categoryId] || '';
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
