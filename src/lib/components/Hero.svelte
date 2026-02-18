<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	// Define primary color scheme based on emerald green [cite: 1]
	import { colors } from '$lib/data.js';

	const markets = ['The 🇬🇧 Market', 'The 🇪🇺 Market', 'The 🇺🇸 Market'];
	let index = 0;

	onMount(() => {
		const interval = setInterval(() => {
			index = (index + 1) % markets.length;
		}, 3000);

		return () => clearInterval(interval);
	});
</script>

<div class="relative overflow-hidden">
	<div
		class="absolute inset-0 z-0"
		style="
			background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://unsplash.com/photos/zleiqVXMqkc/download?force=true&w=2400');
			background-size: cover;
			background-position: center;
			filter: blur(6px);
			transform: scale(1.1);
		"
	></div>

	<div class="relative z-10 mx-auto max-w-7xl">
		<div class="pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:p-32">
			<main class="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8">
				<div class="sm:text-center lg:text-left">
					<h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
						<span class="block text-white">Bring Life-Changing</span>
						<span class="block text-white">
							Pharmaceutical Therapies To <br class="md:hidden" />

							<span class="inline-grid text-emerald-400">
								{#key index}
									<span
										class="col-start-1 row-start-1"
										in:fly={{ y: 20, duration: 500, delay: 200 }}
										out:fly={{ y: -20, duration: 500 }}
									>
										{markets[index]}
									</span>
								{/key}
								<span class="pointer-events-none invisible col-start-1 row-start-1 opacity-0">
									{markets[0]}
								</span>
							</span>
						</span>
					</h1>
					<p
						class="mt-3 text-base sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
						style="color: white"
					>
						We partner with pharmaceutical leaders to execute clinical trials with rapid enrollment,
						high retention, and uncompromising data quality.
					</p>
					<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
						<div class="sm:flex">
							<a
								href="#run-clinical-trials"
								class="flex items-center justify-center bg-emerald-700 px-8 py-3 text-base font-medium text-white md:px-10 md:py-4 md:text-lg"
							>
								For Sponsors
							</a>
							<a
								href="#volunteer-experience"
								class="bg-yellow-500-400 mt-3 flex items-center justify-center border border-white/20 bg-black/40 p-6 px-8 py-3 text-base font-medium text-white backdrop-blur-sm sm:mt-0 sm:ml-3 md:px-10 md:py-4 md:text-lg"
							>
								Volunteer For A Study
							</a>
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
</div>
