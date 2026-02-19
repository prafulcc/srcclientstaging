<script>
	import { onMount } from 'svelte';
	import ServiceModal from './ServiceModal.svelte';
	import SponsorBanner from '$lib/components/SponsorBanner.svelte';
	import { partnerLogos } from '$lib/data';
	import {
		colors,
		getAllServices,
		getCategoryLabel,
		services,
		serviceCategories
	} from '$lib/data.js';

	let modalOpen = $state(false);
	let selectedServiceDetails = $state(null);

	// Filtering and animation state
	let activeTab = $state('all');
	let isLinking = $state(false);

	// Reference to the carousel container for scroll calculations
	let carouselContainer = $state(null);

	// Auto-scroll state
	let isPaused = $state(false);
	let animationFrameId;

	function openServiceModal(service) {
		selectedServiceDetails = service;
		modalOpen = true;
	}

	function closeModal() {
		modalOpen = false;
		selectedServiceDetails = null;
	}

	const allServices = getAllServices();
	// Derive filtered services based on the active tab
	let filteredServices = $derived(activeTab === 'all' ? allServices : services[activeTab]);

	// Create a base array of all selectable categories
	const baseCategories = [{ id: 'all', label: 'All Services' }, ...serviceCategories];

	// Duplicate the array multiple times to simulate an infinite looping carousel
	const carouselItems = [
		...baseCategories,
		...baseCategories,
		...baseCategories,
		...baseCategories,
		...baseCategories,
		...baseCategories,
		...baseCategories
	];

	// On mount, silently move the scroll position to the middle set of items
	onMount(() => {
		if (carouselContainer) {
			const totalWidth = carouselContainer.scrollWidth;
			// Jump to the middle of the duplicated sets
			carouselContainer.scrollLeft = (totalWidth / 7) * 3;

			// Start the gentle scroll
			startAutoScroll();
		}

		// Cleanup animation frame when component is destroyed
		return () => {
			if (animationFrameId) cancelAnimationFrame(animationFrameId);
		};
	});

	function startAutoScroll() {
		if (!carouselContainer) return;

		// Only scroll if not hovering/touching and not doing the dramatic drop
		if (!isPaused && !isLinking) {
			// Adjust 0.5 to make it faster or slower
			carouselContainer.scrollLeft += 0.5;

			// Infinite loop math: Keep the scroll in the middle sets seamlessly
			const setWidth = carouselContainer.scrollWidth / 7;

			if (carouselContainer.scrollLeft >= setWidth * 5) {
				carouselContainer.scrollLeft -= setWidth * 2;
			} else if (carouselContainer.scrollLeft <= setWidth) {
				carouselContainer.scrollLeft += setWidth * 2;
			}
		}

		animationFrameId = requestAnimationFrame(startAutoScroll);
	}

	// Handle category selection with centering, dramatic glowing, and scrolling
	function handleCardClick(categoryId, event) {
		activeTab = categoryId;

		// Temporarily pause the auto-scroll so smooth scrolling doesn't fight it
		isPaused = true;

		// 1. Smoothly spin the carousel to center the clicked card
		const node = event.currentTarget;
		if (carouselContainer && node) {
			const containerCenter = carouselContainer.offsetWidth / 2;
			const nodeCenter = node.offsetLeft + node.offsetWidth / 2;
			carouselContainer.scrollTo({
				left: nodeCenter - containerCenter,
				behavior: 'smooth'
			});
		}

		// 2. Trigger the dramatic drop animation
		isLinking = true;

		// 3. Wait 1 full second for the drama, then scroll to timeline
		setTimeout(() => {
			isLinking = false;
			isPaused = false; // Resume auto-scroll
			document.getElementById('timeline-start')?.scrollIntoView({ behavior: 'smooth' });
		}, 1000);
	}
</script>

<SponsorBanner logos={partnerLogos} id="clinical-research-services" />

<section
	class="relative flex min-h-screen w-full flex-col items-center justify-center pt-24 pb-12 sm:px-6 lg:px-8"
	style:background-color={colors.background}
>
	<div class="relative z-10 w-full text-center">
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
			A comprehensive, end-to-end approach to clinical research, from site activation to real-world
			evidence.
		</p>

		<div class="mt-16 w-full overflow-hidden">
			<div
				bind:this={carouselContainer}
				onmouseenter={() => (isPaused = true)}
				onmouseleave={() => (isPaused = false)}
				ontouchstart={() => (isPaused = true)}
				ontouchend={() => (isPaused = false)}
				class="scrollbar-hide px-1/2 flex gap-6 overflow-x-auto pt-8 pb-12"
				style="scroll-padding-inline: 50%;"
			>
				{#each carouselItems as category, index}
					<button
						onclick={(e) => handleCardClick(category.id, e)}
						class="relative z-20 flex h-40 w-72 shrink-0 flex-col items-center justify-center border px-6 text-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/90 hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)]"
						style:background-color={activeTab === category.id
							? 'rgba(255, 255, 255, 0.95)'
							: 'rgba(255, 255, 255, 0.65)'}
						style:border-color={activeTab === category.id
							? colors.primary
							: 'rgba(255, 255, 255, 0.5)'}
						style:transform={activeTab === category.id ? 'scale(1.05)' : 'scale(1)'}
					>
						{#if category.icon}
							<div
								class="mb-3 transition-colors duration-300"
								style:color={activeTab === category.id ? colors.primary : '#4b5563'}
							>
								<svelte:component this={category.icon} size={32} strokeWidth={1.5} />
							</div>
						{/if}

						<span
							class="text-xl font-extrabold tracking-widest uppercase transition-colors duration-300 sm:text-2xl"
							style:color={activeTab === category.id ? colors.primary : '#1f2937'}
						>
							{category.label}
						</span>

						{#if activeTab === category.id}
							<div
								class="absolute inset-x-0 bottom-0 h-1.5 rounded-b-sm shadow-[0_-2px_10px_rgba(16,185,129,0.2)]"
								style:background-color={colors.primary}
							></div>
						{/if}
					</button>
				{/each}
			</div>
		</div>
	</div>

	<div
		class="absolute bottom-0 left-1/2 h-24 w-px -translate-x-1/2 overflow-hidden bg-white/10 md:h-32"
	>
		{#if isLinking}
			<div
				class="animate-link-drop h-full w-full"
				style:background-color={colors.primary}
				style="--glow-color: {colors.primary}"
			></div>
		{/if}
	</div>
</section>

<section id="timeline-start" style:background-color={colors.background}>
	<div class="wrap relative flex h-full w-full flex-col overflow-hidden">
		<div
			class="absolute top-0 left-1/2 z-10 hidden h-full w-1 -translate-x-1/2 bg-white/10 md:block"
		></div>

		{#each filteredServices as service, index (service.name)}
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
					class="relative z-20 flex w-full max-w-6xl flex-col items-center justify-between gap-8 px-4 sm:px-6 md:gap-0 {index %
						2 ===
					0
						? 'md:flex-row-reverse'
						: 'md:flex-row'}"
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
							class="z-30 flex h-14 w-14 animate-pulse items-center justify-center rounded-full border border-white/10 bg-black/60 shadow-lg backdrop-blur-md"
						>
							<div
								class="h-5 w-5 rounded-full shadow-inner"
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
	/* Hide scrollbar for the category carousel while keeping functionality */
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
	.scrollbar-hide {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	/* Dramatic animation for the line connecting hero and timeline */
	@keyframes linkDrop {
		0% {
			transform: translateY(-100%);
			opacity: 1;
			box-shadow:
				0 0 20px var(--glow-color),
				0 0 40px var(--glow-color);
		}
		50% {
			box-shadow:
				0 0 30px var(--glow-color),
				0 0 60px var(--glow-color);
		}
		100% {
			transform: translateY(100%);
			opacity: 0;
			box-shadow: 0 0 10px var(--glow-color);
		}
	}
	.animate-link-drop {
		animation: linkDrop 1s ease-in-out forwards;
	}

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
