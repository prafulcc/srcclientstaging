<script>
	import ServiceModal from './ServiceModal.svelte';

	// Define colors for the component
	import { colors } from '$lib/data.js';
	import { services, serviceCategories, getAllServices, getCategoryLabel } from '$lib/data.js';

	// Service data from the PDF document

	// Reactive state
	let activeTab = $state('all');
	let searchQuery = $state('');
	let showAllServices = $state(false); // New state to track if we should show all services
	let modalOpen = $state(false); // Track if the modal is open
	let selectedServiceDetails = $state(null); // Store the selected service details for the modal

	// Function to open the modal with service details
	function openServiceModal(service) {
		selectedServiceDetails = service;
		modalOpen = true;
	}

	// Function to close the modal
	function closeModal() {
		modalOpen = false;
		selectedServiceDetails = null;
	}

	// Combine all services for the "All" tab
	const allServices = getAllServices();

	// Filter function to apply to all services
	const filterBySearchQuery = (service) => {
		const query = searchQuery.toLowerCase();
		return (
			service.name.toLowerCase().includes(query) ||
			(service.details && service.details.toLowerCase().includes(query))
		);
	};

	// First filter all services by the search query, then filter by tab if needed
	let filteredServices = $derived(
		searchQuery
			? allServices.filter(filterBySearchQuery) // When searching, always search across all services
			: activeTab === 'all' // When not searching, respect the tab filter
				? allServices
				: services[activeTab]
	);

	// Limit services shown when in the "all" tab and not showing all
	let displayedServices = $derived(
		activeTab === 'all' && !showAllServices && !searchQuery
			? filteredServices.slice(0, 10)
			: filteredServices
	);
</script>

<section id="services" class="py-12 md:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 lg:text-center">
			<h2 class="text-base font-semibold tracking-wide uppercase" style:color={colors.primary}>
				Our Services
			</h2>
			<p
				class="mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl"
				style:color={colors.secondary}
			>
				Comprehensive Healthcare Solutions
			</p>
			<p class="mt-4 max-w-2xl text-xl lg:mx-auto" style:color={colors.textLight}>
				We offer a wide range of healthcare services to meet the needs of your business and
				employees.
			</p>
		</div>

		<div class="mt-12">
			<!-- Search Bar -->
			<div class="mx-auto mb-8 max-w-md">
				<div class="relative">
					<input
						type="text"
						placeholder="Search services..."
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
				<div class="flex overflow-x-auto md:justify-center">
					{#each serviceCategories as category (category.id)}
						<button
							onclick={() => (activeTab = category.id)}
							class="relative mt-2 flex-shrink-0 border-b-2 px-3 py-4 text-center text-sm font-medium sm:w-auto sm:px-6"
							class:border-emerald-700={activeTab === category.id}
							class:border-transparent={activeTab !== category.id}
							class:text-emerald-700={activeTab === category.id}
							class:text-gray-500={activeTab !== category.id}
							class:hover:text-gray-700={activeTab !== category.id}
							class:hover:border-gray-300={activeTab !== category.id}
							style="border-color: {activeTab === category.id
								? colors.primary
								: 'transparent'}; color: {activeTab === category.id
								? colors.primary
								: colors.textLight}"
						>
							{#if category.id === 'all'}
								<span
									class="absolute -top-2 left-1/2 flex h-5 w-auto -translate-x-1/2 transform items-center justify-center rounded-full bg-emerald-700 px-1.5 text-xs text-white"
									style:background-color={colors.primary}
								>
									{allServices.length}
								</span>
							{:else if services[category.id]}
								<span
									class="absolute -top-2 left-1/2 flex h-5 w-auto -translate-x-1/2 transform items-center justify-center rounded-full bg-emerald-700 px-1.5 text-xs text-white"
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
				<div class="mt-8 border border-gray-200 py-12 text-center">
					<p class="text-lg" style:color={colors.textLight}>
						No services found matching your search criteria.
					</p>
					<button
						onclick={() => (searchQuery = '')}
						class="mt-4 px-4 py-2 text-white"
						style:background-color={colors.primary}
					>
						Clear Search
					</button>
				</div>
			{:else}
				<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{#each displayedServices as service (service.name)}
						<div
							class="flex h-full flex-col border border-gray-200 shadow-sm"
							style:background-color={colors.light}
						>
							<div class="flex-grow p-6">
								<div class="flex items-start justify-between">
									<div>
										<div class="mb-2 flex items-center gap-2">
											<h3 class="text-lg font-semibold" style:color={colors.text}>
												{service.name}
											</h3>
										</div>
										{#if service.category}
											<p class="mb-2 text-xs" style:color={colors.textLight}>
												{getCategoryLabel(service.category)}
											</p>
										{/if}
										<p class="text-xl font-bold" style:color={colors.primary}>{service.price}</p>
									</div>
								</div>

								<div class="mt-2 flex items-center gap-2 text-sm" style:color={colors.textLight}>
									<!-- Clock icon -->
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-4 w-4"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<circle cx="12" cy="12" r="10"></circle>
										<polyline points="12 6 12 12 16 14"></polyline>
									</svg>
									<span>{service.duration}</span>
								</div>

								{#if service.details}
									<p class="mt-3 text-sm" style:color={colors.text}>
										{service.details}
									</p>
								{/if}

								{#if service.doses}
									<div class="mt-4 flex items-center gap-2">
										<!-- Check icon -->
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											style:color={colors.primary}
										>
											<polyline points="20 6 9 17 4 12"></polyline>
										</svg>
										<span class="text-sm"
											>{service.doses} {service.doses === 1 ? 'dose' : 'doses'} required</span
										>
									</div>
								{/if}
							</div>

							<div class="mt-auto border-t border-gray-200 px-6 py-4">
								<button
									onclick={() => openServiceModal(service)}
									class="flex w-full items-center justify-center border border-transparent px-4 py-2 text-sm font-medium text-white"
									style:background-color={colors.primary}
								>
									Book Appointment
								</button>
							</div>
						</div>
					{/each}

					{#if activeTab === 'all' && !showAllServices && !searchQuery && filteredServices.length > 10}
						<button
							class="flex h-full cursor-pointer flex-col items-center justify-center border border-dashed border-gray-200 p-6"
							onclick={() => (showAllServices = true)}
							style="background-color: rgba(4, 120, 87, 0.05)"
						>
							<div class="text-center">
								<p class="mb-2 text-lg font-medium" style:color={colors.primary}>
									View All Services
								</p>
								<p class="mb-4 text-sm text-gray-500">
									{filteredServices.length - 10} more services available
								</p>
								<div
									class="inline-flex h-10 w-10 items-center justify-center rounded-full"
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

			<div class="mt-10 text-center">
				<a
					href="#book"
					class="inline-flex items-center justify-center border border-transparent px-8 py-3 text-base font-medium text-white"
					style:background-color={colors.primary}
				>
					Book a Service
					<!-- Arrow right icon -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="ml-2 h-5 w-5"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<line x1="5" y1="12" x2="19" y2="12"></line>
						<polyline points="12 5 19 12 12 19"></polyline>
					</svg>
				</a>
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
