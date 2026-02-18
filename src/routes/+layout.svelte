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

<Header />
{@render children()}
<Footer />
