<script>
	// Define primary color scheme based on emerald green
	import { colors } from '$lib/data.js';

	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<header
	class="sticky top-0 z-50 border-b border-gray-200 bg-white"
	style="border-color: {colors.primaryLight}"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center">
				<div class="text-2xl font-bold" style="color: {colors.primary}">
					STEMAX
					<span class="ml-2 text-sm font-normal" style="color: {colors.textLight}"
						>Healthcare Consultancy</span
					>
				</div>
			</div>

			<nav class="hidden items-center justify-end space-x-10 md:flex">
				<a
					href="#services"
					class="text-base font-medium hover:text-emerald-700"
					style="color: {colors.text}"
				>
					Services
				</a>
				<a
					href="#clinical-trials"
					class="text-base font-medium hover:text-emerald-700"
					style="color: {colors.text}"
				>
					Clinical Trials
				</a>
				<a
					href="#about"
					class="text-base font-medium hover:text-emerald-700"
					style="color: {colors.text}"
				>
					About Us
				</a>
				<a
					href="#testimonials"
					class="text-base font-medium hover:text-emerald-700"
					style="color: {colors.text}"
				>
					Testimonials
				</a>
				<a
					href="#contact"
					class="text-base font-medium hover:text-emerald-700"
					style="color: {colors.text}"
				>
					Contact
				</a>
			</nav>

			<div class="flex md:hidden">
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
		<div class="md:hidden">
			<div class="space-y-1 bg-white pt-2 pb-4">
				<a
					href="#services"
					class="block border-l-4 px-4 py-2 text-base font-medium"
					style="border-color: {colors.primary}; background-color: #f3f4f6"
					onclick={toggleMobileMenu}
				>
					Services
				</a>
				<a
					href="#clinical-trials"
					class="block border-l-4 border-transparent px-4 py-2 text-base font-medium hover:bg-gray-50"
					onclick={toggleMobileMenu}
				>
					Clinical Trials
				</a>
				<a
					href="#about"
					class="block border-l-4 border-transparent px-4 py-2 text-base font-medium"
					onclick={toggleMobileMenu}
				>
					About Us
				</a>
				<a
					href="#testimonials"
					class="block border-l-4 border-transparent px-4 py-2 text-base font-medium"
					onclick={toggleMobileMenu}
				>
					Testimonials
				</a>
				<a
					href="#contact"
					class="block border-l-4 border-transparent px-4 py-2 text-base font-medium"
					onclick={toggleMobileMenu}
				>
					Contact
				</a>
				<a
					href="#book"
					class="block px-4 py-2 text-base font-medium"
					style="background-color: {colors.primary}; color: {colors.light}"
					onclick={toggleMobileMenu}
				>
					Book Appointment
				</a>
			</div>
		</div>
	{/if}
</header>
