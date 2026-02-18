<script>
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { colors } from '$lib/data.js';

	const regions = [
		{ code: 'gb', label: 'UK', flag: '🇬🇧' },
		{ code: 'usa', label: 'USA', flag: '🇺🇸' },
		{ code: 'eu', label: 'EU', flag: '🇪🇺' }
	];

	let currentRegion = $derived(page.params.region);
	let guessedRegion = $derived(page.data.guessedRegion);

	let pendingRegion = $state(null);
	let dialogRef = $state();
	let isChanging = $state(false);

	$effect(() => {
		const hasPrompted = sessionStorage.getItem('regionPrompted');

		// Only prompt if they haven't been asked AND they are in a mismatched region
		if (!hasPrompted && guessedRegion && currentRegion) {
			if (currentRegion !== guessedRegion) {
				const targetRegion = regions.find((r) => r.code === guessedRegion);

				if (targetRegion) {
					const timer = setTimeout(() => {
						pendingRegion = targetRegion;
						dialogRef.showModal();
						sessionStorage.setItem('regionPrompted', 'true');
					}, 800);

					return () => clearTimeout(timer);
				}
			}
		}
	});

	function handleRegionClick(e, region) {
		if (region.code === currentRegion) return;
		e.preventDefault();
		pendingRegion = region;
		dialogRef.showModal();
	}

	async function confirmSwitch() {
		if (pendingRegion) {
			isChanging = true;
			// Simulated network latency
			await new Promise((r) => setTimeout(r, 800));
			await goto(`/${pendingRegion.code}`);

			isChanging = false;
			pendingRegion = null;
			dialogRef.close();
		}
	}
</script>

<div class="border-b border-gray-200 px-4 text-sm font-medium">
	<div class="mx-auto flex h-12 max-w-7xl items-center justify-end gap-6">
		<span class="hidden lg:block">Change where are currently visiting from...</span>
		{#each regions as region (region.code)}
			<button
				onclick={(e) => handleRegionClick(e, region)}
				class="flex items-center gap-2 transition-opacity hover:opacity-80"
				style:color={currentRegion === region.code ? colors.primary : 'text-black'}
			>
				{#if currentRegion === region.code}
					<span class="h-2 w-2 rounded-full" style:background-color={colors.primary}></span>
				{/if}
				<span class="text-base">{region.flag}</span>
				<span>{region.label}</span>
			</button>
		{/each}
	</div>
</div>

<dialog
	bind:this={dialogRef}
	class="fixed inset-0 m-0 h-full max-h-none w-full max-w-none border-none p-0 focus:outline-none"
	style:background-color={colors.background}
>
	<div class="flex h-full w-full flex-col items-center justify-center px-6">
		<div class="w-full max-w-md text-center">
			<div
				class="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-gray-200 text-6xl shadow-sm"
				style:background-color={colors.background}
			>
				{pendingRegion?.flag}
			</div>

			<h3 class="mb-4 text-3xl font-bold tracking-tight uppercase" style:color={colors.secondary}>
				Switch to <span style:color={colors.primary} class="underline decoration-gray-300"
					>{pendingRegion?.label}</span
				>
			</h3>

			<p class="mb-10 text-base leading-relaxed" style:color={'text-black'}>
				You are transitioning to the <strong>{pendingRegion?.label}</strong> regulatory jurisdiction.
				Local data compliance standards and privacy policies will be applied to your session.
			</p>

			<div class="flex w-full flex-col gap-4 font-semibold tracking-wide uppercase">
				<button
					type="button"
					onclick={confirmSwitch}
					disabled={isChanging}
					class="relative flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 text-sm text-white shadow-sm transition-opacity hover:opacity-90 active:scale-[0.99] disabled:opacity-50"
					style:background-color={colors.primary}
				>
					{#if isChanging}
						<span class="spinner"></span>
						<span>Establishing Connection...</span>
					{:else}
						<span>Confirm Change</span>
					{/if}
				</button>

				<button
					type="button"
					disabled={isChanging}
					onclick={() => dialogRef.close()}
					class="w-full border border-gray-200 bg-transparent px-8 py-4 text-sm transition-colors hover:bg-gray-50 disabled:opacity-50"
					style:color={colors.text}
				>
					Cancel
				</button>
			</div>
		</div>
	</div>
</dialog>

<style>
	/* Full screen overrides */
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.4);
	}

	dialog[open] {
		display: flex;
		animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.spinner {
		width: 16px;
		height: 16px;
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-top-color: #fff;
		border-radius: 50%;
		animation: spin 0.6s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	/* Disable scrolling when modal is open */
	:global(body:has(dialog[open])) {
		overflow: hidden;
	}
</style>
