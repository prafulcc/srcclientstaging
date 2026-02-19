import { redirect } from '@sveltejs/kit';

const validRegions = ['gb', 'usa', 'eu', 'ng, ke', 'za'];
const euCountries = [
	'FR',
	'DE',
	'IT',
	'ES',
	'NL',
	'BE',
	'SE',
	'IE',
	'DK',
	'FI',
	'PL',
	'AT',
	'PT',
	'GR'
];

export async function handle({ event, resolve }) {
	const { pathname } = event.url;

	// 1. Ignore static assets, API routes, and SvelteKit internals
	if (pathname.startsWith('/api') || pathname.startsWith('/_app') || pathname.includes('.')) {
		return resolve(event);
	}

	// 2. Guess the user's region from hosting headers
	const countryCode =
		event.request.headers.get('x-vercel-ip-country') ||
		event.request.headers.get('cf-ipcountry') ||
		'GB';

	let guessedRegion = 'gb'; // Default jurisdiction
	if (countryCode === 'US') {
		guessedRegion = 'usa';
	} else if (euCountries.includes(countryCode)) {
		guessedRegion = 'eu';
	}

	// 3. Save the guess globally so your Svelte app can access it later
	event.locals.guessedRegion = guessedRegion;

	// 4. Check if the URL has a valid region prefix
	const firstSegment = pathname.split('/')[1];

	if (!validRegions.includes(firstSegment)) {
		// 5. NO REGION PREFIX: Instant 307 Redirect to the guessed region (no prompt)
		const redirectUrl = `/${guessedRegion}${pathname === '/' ? '' : pathname}${event.url.search}`;
		throw redirect(307, redirectUrl);
	}

	// 6. Let the request proceed if it already has a valid region prefix
	return resolve(event);
}
