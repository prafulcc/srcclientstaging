<script>
	import ServiceModal from './ServiceModal.svelte';
	import { partnerLogos } from '$lib/data';
	import SponsorBanner from '$lib/components/SponsorBanner.svelte';

	// Define colors and import centralized clinical data helper functions [cite: 12, 13]
	import {
		colors,
		services,
		serviceCategories,
		getAllServices,
		getCategoryLabel
	} from '$lib/data.js';

	// Reactive state for tabs, search, and modal [cite: 13, 14, 15]
	let activeTab = $state('all');
	let searchQuery = $state('');
	let showAllServices = $state(false);
	let modalOpen = $state(false);
	let selectedServiceDetails = $state(null); // [cite: 16]

	// Function to open the modal with service details
	function openServiceModal(service) {
		selectedServiceDetails = service; // [cite: 16]
		modalOpen = true; // [cite: 17]
	}

	// Function to close the modal
	function closeModal() {
		modalOpen = false;
		selectedServiceDetails = null; // [cite: 17, 18]
	}

	// Combine all services for the "All" tab [cite: 18]
	const allServices = getAllServices();

	// Filter function to apply to all services based on name and details [cite: 19, 20]
	const filterBySearchQuery = (service) => {
		const query = searchQuery.toLowerCase();
		return (
			service.name.toLowerCase().includes(query) ||
			(service.details && service.details.toLowerCase().includes(query))
		);
	};

	// First filter all services by the search query, then filter by tab if needed [cite: 20]
	let filteredServices = $derived(
		searchQuery
			? allServices.filter(filterBySearchQuery)
			: activeTab === 'all'
				? allServices
				: services[activeTab]
	);

	// Limit services shown when in the "all" tab and not showing all [cite: 21]
	let displayedServices = $derived(
		activeTab === 'all' && !showAllServices && !searchQuery
			? filteredServices.slice(0, 10)
			: filteredServices
	);
</script>

<SponsorBanner logos={partnerLogos} id="clinical-research-services" />

<section class="py-12 md:py-20" style:background-color={colors.background}>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 lg:text-center">
			<h2 class="text-base font-semibold tracking-wide uppercase" style:color={colors.primary}>
				For Sponsors
			</h2>
			<p
				class="mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl"
				style:color={colors.secondary}
			>
				Clinical Trial Services
			</p>
			<p class="mt-4 max-w-2xl text-xl lg:mx-auto" style:color={colors.textLight}>
				Expertise to handle any stage of the clinical research life-cycle.
			</p>
		</div>

		<div class="mt-12">
			<div class="mx-auto mb-8 max-w-md">
				<div class="relative">
					<input
						type="text"
						placeholder="Search 30+ trial services..."
						bind:value={searchQuery}
						class="w-full border border-gray-300 px-4 py-2 focus:border-emerald-500 focus:outline-none"
						style:border-color={colors.primary}
					/>
					<button
						aria-label="button"
						class="absolute top-0 right-0 flex h-full items-center justify-center px-4"
						style:color={colors.primary}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</button>
				</div>
			</div>

			<div class="border-b border-gray-200">
				<div class="scrollbar-hide flex overflow-x-auto md:justify-center">
					{#each serviceCategories as category (category.id)}
						<button
							onclick={() => (activeTab = category.id)}
							class="relative mt-2 flex-shrink-0 border-b-2 px-3 py-4 text-center text-sm font-medium transition-colors sm:w-auto sm:px-6"
							style="border-color: {activeTab === category.id ? colors.primary : 'transparent'};
								   color: {activeTab === category.id ? colors.primary : colors.textLight}"
						>
							{#if category.id === 'all'}
								<span
									class="absolute -top-2 left-1/2 flex h-5 w-auto -translate-x-1/2 transform items-center justify-center px-1.5 text-xs text-white"
									style:background-color={colors.primary}
								>
									{allServices.length}
								</span>
							{:else if services[category.id]}
								<span
									class="absolute -top-2 left-1/2 flex h-5 w-auto -translate-x-1/2 transform items-center justify-center px-1.5 text-xs text-white"
									style:background-color={activeTab === category.id
										? colors.primary
										: colors.textLight}
								>
									{services[category.id].length}
								</span>
							{/if}
							{category.label}
						</button>
					{/each}
				</div>
			</div>

			{#if filteredServices.length === 0}
				<div
					class="mt-8 border border-gray-200 py-12 text-center"
					style:background-color={colors.light}
				>
					<p class="text-lg" style:color={colors.textLight}>
						No services found matching your search criteria.
					</p>
					<button
						onclick={() => (searchQuery = '')}
						class="mt-4 px-6 py-2 text-white transition-opacity hover:opacity-90"
						style:background-color={colors.primary}
					>
						Clear Search
					</button>
				</div>
			{:else}
				<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{#each displayedServices as service (service.name)}
						<div
							class="group relative flex h-full flex-col overflow-hidden border border-gray-200 transition-shadow hover:shadow-md"
						>
							<div
								class="flex-grow p-6 transition-transform duration-300 group-hover:-translate-y-2"
							>
								<div class="flex items-start justify-between">
									<div>
										<div class="mb-2 flex items-center gap-2">
											<h3 class="text-lg font-semibold capitalize" style:color={colors.text}>
												{service.name}
											</h3>
										</div>
										{#if service.category}
											<p
												class="mb-2 text-sm font-medium tracking-wide"
												style:color={colors.primary}
											>
												{getCategoryLabel(service.category)}
											</p>
										{/if}
									</div>
								</div>

								{#if service.details}
									<p class="mt-3 text-sm leading-relaxed" style:color={colors.textLight}>
										{service.details}
									</p>
								{/if}
							</div>

							<div
								class="absolute right-0 bottom-0 left-0 translate-y-full px-6 py-4 transition-transform duration-300 ease-in-out group-hover:translate-y-0"
							>
								<button
									onclick={() => openServiceModal(service)}
									class="flex w-full items-center justify-center border border-transparent px-4 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
									style:background-color={colors.primary}
								>
									Learn More
								</button>
							</div>
						</div>
					{/each}

					{#if activeTab === 'all' && !showAllServices && !searchQuery && filteredServices.length > 10}
						<button
							class="flex h-full cursor-pointer flex-col items-center justify-center border border-dashed border-gray-300 p-6 transition-colors hover:bg-gray-50"
							onclick={() => (showAllServices = true)}
							style:background-color={colors.light}
						>
							<div class="text-center">
								<p class="mb-2 text-lg font-medium" style:color={colors.primary}>
									View All Services
								</p>
								<p class="mb-4 text-sm" style:color={colors.textLight}>
									{filteredServices.length - 10} more services available
								</p>
								<div
									class="inline-flex h-10 w-10 items-center justify-center"
									style:background-color={colors.primary}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6 text-white"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 6v6m0 0v6m0-6h6m-6 0H6"
										/>
									</svg>
								</div>
							</div>
						</button>
					{/if}
				</div>
			{/if}

			<div class="relative mt-16 overflow-hidden p-8 text-center sm:p-12">
				<div class="cta-background"></div>

				<div class="relative z-10">
					<h3 class="text-2xl font-bold text-white sm:text-3xl">
						Ready to discuss your clinical trial?
					</h3>
					<p class="mx-auto mt-4 max-w-2xl text-lg text-gray-200">
						Connect with our experts to discuss how our integrated services can streamline your
						development timeline.
					</p>
					<div class="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
						<a
							href="/contact"
							class="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white transition-opacity hover:opacity-90"
							style:background-color={colors.primary}
						>
							Contact Us
						</a>
						<a
							href="/case-studies"
							class="text-base font-semibold text-white transition-colors hover:opacity-80"
						>
							View Case Studies
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<ServiceModal
		service={selectedServiceDetails}
		{activeTab}
		isOpen={modalOpen}
		onClose={closeModal}
	/>
</section>

<style>
	.cta-background {
		position: absolute; /* [cite: 28] */
		top: 0; /* [cite: 29] */
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		/* Using the same image and dark tint for consistency across the page [cite: 30] */
		background-image:
			linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url('https://unsplash.com/photos/3m1h6CgfLL8/download?force=true&w=2400');
		background-size: cover; /* [cite: 31] */
		background-position: center;
		filter: blur(2px);
		transform: scale(1.1); /* Prevents white bleed at the edges from the blur [cite: 31] */
	}
</style>
