<script>
	// Define primary color scheme based on emerald green
	import { colors } from '$lib/data.js';
</script>

<div class="relative overflow-hidden" style="background-color: {colors.background}">
	<div class="mx-auto max-w-7xl">
		<div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:p-32">
			<main class="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8">
				<div class="sm:text-center lg:text-left">
					<h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
						<span class="block" style="color: {colors.secondary}">Professional Healthcare</span>
						<span class="block" style="color: {colors.primary}">Solutions for Your Business</span>
					</h1>
					<p
						class="mt-3 text-base sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
						style="color: {colors.textLight}"
					>
						Stemax Consultancy offers comprehensive occupational health services, including medical
						assessments, vaccinations, and health surveillance programs tailored to your company's
						needs.
					</p>
					<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
						<div class="sm:flex">
							<a
								href="#book"
								class="flex items-center justify-center px-8 py-3 text-base font-medium text-white md:px-10 md:py-4 md:text-lg"
								style="background-color: {colors.primary}"
							>
								Book a Service
							</a>
							<a
								href="#services"
								class="mt-3 flex items-center justify-center border px-8 py-3 text-base font-medium sm:mt-0 sm:ml-3 md:px-10 md:py-4 md:text-lg"
								style="border-color: {colors.primary}; color: {colors.primary}"
							>
								Explore Services
							</a>
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
</div>
