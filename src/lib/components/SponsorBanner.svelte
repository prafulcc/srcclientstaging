<script>
	/* Svelte 5 uses the $props() rune */
	let {
		logos = [],

		speed = '10s', // Adjusted slightly for the larger array size
		title = 'Trusted Partners',
		className = ''
	} = $props();

	// Guarantees the row is long enough to span ultra-wide monitors without blank gaps
	const duplicatedLogos = [...logos, ...logos];
</script>

<section class="border-t border-b border-gray-200 pt-8 pb-12 {className}">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		{#if title}
			<div class="mb-10 text-center">
				<p class="font-heading text-sm font-semibold tracking-widest text-slate-400 uppercase">
					{title}
				</p>
			</div>
		{/if}

		<div class="mask-edges relative flex overflow-hidden">
			<div class="marquee-content" style="--duration: {speed}">
				<div class="flex flex-shrink-0 items-center gap-16 pr-16">
					{#each duplicatedLogos as logo, i (i)}
						<div class="flex-shrink-0">
							<img
								src={logo.src}
								alt={logo.name}
								class="h-20 w-auto object-contain transition-transform duration-300 hover:scale-110 sm:h-24"
							/>
						</div>
					{/each}
				</div>

				<div class="flex flex-shrink-0 items-center gap-16 pr-16" aria-hidden="true">
					{#each duplicatedLogos as logo, i (i)}
						<div class="flex-shrink-0">
							<img
								src={logo.src}
								alt={logo.name}
								class="h-20 w-auto object-contain transition-transform duration-300 hover:scale-110 sm:h-24"
							/>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* Modern CSS Masking */
	.mask-edges {
		mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
		-webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
	}

	.marquee-content {
		display: flex;
		width: max-content;
		animation: scroll var(--duration) linear infinite;
	}

	.marquee-content:hover {
		animation-play-state: paused;
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}
</style>
