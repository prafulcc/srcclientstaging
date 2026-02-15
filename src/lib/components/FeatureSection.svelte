<script>
	import { Check } from '@lucide/svelte';

	// Define colors object as in the original React component
	import { colors } from '$lib/data.js';

	// Features data
	let features = [
		{
			title: 'Corporate Vaccinations',
			description:
				'Protect your workforce from preventable diseases with our comprehensive vaccination programs delivered at your workplace.'
		},
		{
			title: 'Occupational Health Assessments',
			description:
				'Ensure your employees are fit for their roles with our detailed medical assessments tailored to your industry requirements.'
		},
		{
			title: 'Mobile Clinic Services',
			description:
				'Our healthcare professionals can visit your workplace, minimizing disruption and maximizing convenience for your team.'
		},
		{
			title: 'Industry-Specific Solutions',
			description:
				'Specialized services for oil & gas, transportation, healthcare, and other sectors with unique health and safety requirements.'
		}
	];
</script>

<section class="py-12 md:py-20" style:background-color={colors.background}>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 lg:text-center">
			<h2 class="text-base font-semibold tracking-wide uppercase" style:color={colors.primary}>
				Features
			</h2>
			<p
				class="mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl"
				style:color={colors.secondary}
			>
				Why Choose Stemax
			</p>
			<p class="mt-4 max-w-2xl text-xl lg:mx-auto" style:color={colors.textLight}>
				We deliver professional healthcare services with efficiency, expertise, and excellence.
			</p>
		</div>

		<div class="mt-10">
			<div class="md:grid md:grid-cols-2 md:gap-8">
				{#each features as feature}
					<div class="mt-4 flex border border-gray-200 p-6 md:mt-0">
						<div class="flex-shrink-0">
							<div
								class="flex h-12 w-12 items-center justify-center text-white"
								style:background-color={colors.primary}
							>
								<Check class="h-6 w-6" />
							</div>
						</div>
						<div class="ml-4">
							<h3 class="text-lg font-medium" style:color={colors.text}>{feature.title}</h3>
							<p class="mt-2" style:color={colors.textLight}>{feature.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
