<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// Import state instead of stores
	import { page } from '$app/state';
	import { beforeNavigate, goto } from '$app/navigation';

	let { children } = $props();

	beforeNavigate(({ to, cancel, type }) => {
		if (type !== 'link') return;

		// No '$' prefix needed
		const currentRegion = page.params.region;
		if (!currentRegion || !to || !to.url) return;

		const validRegions = ['gb', 'usa', 'eu'];
		const firstPathSegment = to.url.pathname.split('/')[1];

		if (validRegions.includes(firstPathSegment)) return;

		cancel();

		const newPath = `/${currentRegion}${to.url.pathname === '/' ? '' : to.url.pathname}${to.url.search}${to.url.hash}`;
		goto(newPath);
	});
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Stemax Healthcare Consultancy | Occupational Health Services UK</title>
	<meta name="title" content="Stemax Healthcare Consultancy | Occupational Health Services UK" />
	<meta
		name="description"
		content="Professional occupational health services including vaccinations, medical assessments, and health surveillance for businesses across the UK. Based in Milton Keynes."
	/>

	<!-- Keywords -->
	<meta
		name="keywords"
		content="occupational health, corporate vaccinations, health assessments, medical services, OGUK medical, HGV medical, Milton Keynes"
	/>

	<!-- Canonical URL -->
	<link rel="canonical" href="https://www.stemaxmedical.co.uk" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.stemaxmedical.co.uk" />
	<meta
		property="og:title"
		content="Stemax Healthcare Consultancy | Professional Medical Services"
	/>
	<meta
		property="og:description"
		content="Comprehensive healthcare solutions for businesses including vaccinations, occupational health assessments, and mobile services."
	/>
	<meta property="og:image" content="https://www.stemaxmedical.co.uk/favicon.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.stemaxmedical.co.uk" />
	<meta
		property="twitter:title"
		content="Stemax Healthcare Consultancy | Professional Medical Services"
	/>
	<meta
		property="twitter:description"
		content="Comprehensive healthcare solutions for businesses including vaccinations, occupational health assessments, and mobile clinic services."
	/>
	<meta property="twitter:image" content="https://www.stemaxmedical.co.uk/twitter-image.jpg" />

	<!-- Favicon -->
	<link rel="icon" type="image/png" href="/favicon.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />

	<!-- Viewport and Character Set -->
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<!-- Color Scheme -->
	<meta name="theme-color" content="#047857" />

	<!-- Additional Meta Information -->
	<meta name="author" content="Stemax Consult Healthcare Services Ltd" />
	<meta name="robots" content="index, follow" />
	<meta name="google" content="notranslate" />

	<!-- Structured Data / JSON-LD for Local Business -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Medical Clinic",
			"name": "Stemax Healthcare Consultancy",
			"image": "https://www.stemaxmedical.co.uk/favicon.png",
			"url": "https://www.stemaxmedical.co.uk",
			"telephone": "+441908032992",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "Ground Floor Suite F, Old Stratford Business Park, Falcon Drive",
				"addressLocality": "Old Stratford, Milton Keynes",
				"postalCode": "MK19 6FG",
				"addressCountry": "UK"
			},
			"geo": {
				"@type": "GeoCoordinates",
				"latitude": 52.1234,
				"longitude": -0.5678
			},
			"openingHoursSpecification": {
				"@type": "OpeningHoursSpecification",
				"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
				"opens": "09:00",
				"closes": "17:00"
			},
			"sameAs": [
				"https://www.facebook.com/stemaxconsult",
				"https://www.linkedin.com/company/stemax-consultancy"
			]
		}
	</script>
</svelte:head>

<Header />
{@render children()}
<Footer />
