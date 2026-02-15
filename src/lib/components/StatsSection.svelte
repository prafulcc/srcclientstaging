<script>
	// Define colors object as in the original React component
	import { colors } from '$lib/data.js';

	// Stats data
	let stats = [
		{
			value: '15+',
			label: 'Years Experience'
		},
		{
			value: '500+',
			label: 'Corporate Clients'
		},
		{
			value: '25,000+',
			label: 'Vaccinations'
		},
		{
			value: '98%',
			label: 'Client Satisfaction'
		}
	];
</script>

<section class="border-t border-b border-gray-200 py-12 md:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 text-center md:grid-cols-4">
			{#each stats as stat (stat.label)}
				<div>
					<p class="text-4xl font-bold" style:color={colors.primary}>{stat.value}</p>
					<p class="mt-2 text-lg" style:color={colors.textLight}>{stat.label}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
