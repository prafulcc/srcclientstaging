<script>
	// Define primary color scheme based on emerald green
	import { colors } from '$lib/data.js';
	import RegionSwitcher from './RegionSwitcher.svelte';

	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	// Single source of truth for all navigation links
	const navLinks = [
		{
			label: 'Pharmacovigilance Solutions',
			href: '/clinical-research-services#pharmacovigilance-solutions',
			isActive: true // Preserves original active background styling
		},
		{
			label: 'Clinical Research Services',
			href: '/clinical-research-services#clinical-research-services'
		},
		{
			label: 'Volunteer In A Trial',
			href: '/volunteer-for-clinical-trials'
		},
		{
			label: 'Locate Clinic',
			href: '#location'
		},
		{
			label: 'Careers',
			href: '/',
			isCta: true // Preserves original primary color button styling
		}
	];
</script>

<RegionSwitcher />
<header
	class="sticky top-0 z-50 border-b border-gray-200 bg-white"
	style="border-color: {colors.primaryLight}"
>
	<div class="mx-auto max-w-7xl py-3">
		<div class="flex h-16 items-center justify-between">
			<!-- logo -->
			<a href="/" class="flex items-end gap-3 transition-opacity hover:opacity-90">
				<img src="/favicon.png" alt="STEMAX Logo" class="h-10 w-10" />
				<div class="flex flex-col">
					<span class="font-heading text-2xl leading-none font-bold tracking-tight text-slate-900">
						STEMAX
					</span>
					<span
						class="pt-1 text-xs leading-none font-light tracking-widest text-emerald-700 uppercase"
					>
						Clinical Research
					</span>
				</div>
			</a>

			<nav class="hidden items-center justify-end space-x-10 lg:flex">
				{#each navLinks as link}
					<a href={link.href} class="text-base font-medium hover:text-emerald-700">
						{link.label}
					</a>
				{/each}
			</nav>

			<div class="flex lg:hidden">
				<button
					type="button"
					class="inline-flex items-center justify-center p-2"
					style="color: {colors.primary}"
					onclick={toggleMobileMenu}
				>
					{#if mobileMenuOpen}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>

	{#if mobileMenuOpen}
		<div class="lg:hidden">
			<div class="space-y-1 bg-white pt-2 pb-4">
				{#each navLinks as link}
					{#if link.isCta}
						<a
							href={link.href}
							class="block px-4 py-2 text-base font-medium"
							style="background-color: {colors.primary}; color: {colors.light}"
							onclick={toggleMobileMenu}
						>
							{link.label}
						</a>
					{:else if link.isActive}
						<a
							href={link.href}
							class="block border-l-4 px-4 py-2 text-base font-medium"
							style="border-color: {colors.primary}; background-color: #f3f4f6"
							onclick={toggleMobileMenu}
						>
							{link.label}
						</a>
					{:else}
						<a
							href={link.href}
							class="block border-l-4 border-transparent px-4 py-2 text-base font-medium hover:bg-gray-50"
							onclick={toggleMobileMenu}
						>
							{link.label}
						</a>
					{/if}
				{/each}
			</div>
		</div>
	{/if}
</header>
