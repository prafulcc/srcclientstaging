<script>
	import ServiceModal from './ServiceModal.svelte';
	import SponsorBanner from '$lib/components/SponsorBanner.svelte';
	import { partnerLogos } from '$lib/data';

	import { colors, getAllServices, getCategoryLabel } from '$lib/data.js';

	let modalOpen = $state(false);
	let selectedServiceDetails = $state(null);

	function openServiceModal(service) {
		selectedServiceDetails = service;
		modalOpen = true;
	}

	function closeModal() {
		modalOpen = false;
		selectedServiceDetails = null;
	}

	const allServices = getAllServices();
</script>

<SponsorBanner logos={partnerLogos} id="clinical-research-services" />

<section
	class="relative flex min-h-screen w-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
	style:background-color={colors.background}
>
	<div class="relative z-10 text-center">
		<h2 class="text-lg font-bold tracking-widest uppercase" style:color={colors.primary}>
			For Sponsors
		</h2>
		<h1
			class="mt-4 text-5xl leading-tight font-extrabold tracking-tight sm:text-6xl md:text-7xl"
			style:color={colors.secondary}
		>
			The Clinical Trial Journey
		</h1>
		<p class="mx-auto mt-6 max-w-3xl text-2xl leading-relaxed" style:color={colors.textLight}>
			A comprehensive, end-to-end approach to clinical research—from site activation to real-world
			evidence.
		</p>
	</div>
</section>

<section style:background-color={colors.background}>
	<div class="wrap relative flex h-full w-full flex-col overflow-hidden">
		<div
			class="absolute top-0 left-1/2 z-10 hidden h-full w-1 -translate-x-1/2 bg-white/10 md:block"
		></div>

		{#each allServices as service, index (service.name)}
			<div
				class="relative flex min-h-screen w-full items-center justify-center overflow-hidden py-16 md:py-24"
			>
				{#if service.image}
					<img
						src={service.image}
						alt={service.name}
						class="absolute inset-0 h-full w-full object-cover"
						loading={index === 0 ? 'eager' : 'lazy'}
						fetchpriority={index === 0 ? 'high' : 'low'}
						decoding="async"
					/>
				{:else}
					<div class="absolute inset-0 bg-black"></div>
				{/if}

				<div class="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>

				<div
					class="relative z-20 flex w-full max-w-6xl flex-col items-center justify-between px-4 sm:px-6 {index %
						2 ===
					0
						? 'md:flex-row'
						: 'md:flex-row-reverse'} gap-8 md:gap-0"
				>
					<div class="flex w-full flex-col md:w-5/12">
						<div
							class="flex flex-col border border-white/10 bg-black/60 p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] backdrop-blur-md sm:p-8"
						>
							<p class="mb-2 text-sm font-bold tracking-wider text-emerald-300 uppercase">
								{getCategoryLabel(service.category)}
							</p>
							<h3 class="mb-3 text-3xl leading-tight font-bold text-white">
								{service.name}
							</h3>
							<p class="mb-8 text-lg leading-relaxed text-gray-200">
								{service.details}
							</p>
							<button
								onclick={() => openServiceModal(service)}
								class="mt-auto w-fit px-8 py-3 text-base font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg {index %
									2 !==
								0
									? 'md:ml-auto'
									: ''}"
								style:background-color={colors.primary}
							>
								Learn More
							</button>
						</div>
					</div>

					<div class="hidden w-2/12 justify-center md:flex">
						<div
							class="z-30 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/60 shadow-lg backdrop-blur-md"
						>
							<div
								class="h-5 w-5 animate-pulse rounded-full shadow-inner"
								style:background-color={colors.primary}
							></div>
						</div>
					</div>

					<div class="hidden w-full md:block md:w-5/12"></div>
				</div>
			</div>
		{/each}
	</div>

	<div class="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
		<div class="relative mt-20 overflow-hidden p-8 text-center shadow-2xl sm:p-16">
			<div class="cta-background"></div>
			<div class="relative z-10">
				<h3 class="text-3xl font-bold text-white sm:text-4xl">
					Ready to discuss your clinical trial?
				</h3>
				<p class="mx-auto mt-4 max-w-2xl text-xl text-gray-100">
					Connect with our experts to discuss how our integrated services can streamline your
					development timeline.
				</p>
				<div class="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
					<a
						href="/contact"
						class="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white shadow-lg transition-shadow hover:shadow-xl"
						style:background-color={colors.primary}
					>
						Contact Us
					</a>
					<a
						href="/case-studies"
						class="text-lg font-semibold text-white underline underline-offset-4 transition-colors hover:text-gray-200"
					>
						View Case Studies
					</a>
				</div>
			</div>
		</div>
	</div>

	<ServiceModal service={selectedServiceDetails} isOpen={modalOpen} onClose={closeModal} />
</section>

<style>
	.cta-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		background-image:
			linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)),
			url('https://unsplash.com/photos/3m1h6CgfLL8/download?force=true&w=2400&auto=format,compress&q=80');
		background-size: cover;
		background-position: center;
		filter: blur(2px);
		transform: scale(1.05);
	}
</style>
