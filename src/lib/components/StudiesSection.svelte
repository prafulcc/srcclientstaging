<script>
	import { colors } from '$lib/data.js';
	import { ClipboardCheck, ExternalLink, Phone, MessageSquare } from 'lucide-svelte';

	// Studies data preserved from original source
	const studies = [
		{
			title: 'Chronic Obstructive Pulmonary Disease (COPD)',
			status: 'Enrolling',
			description:
				'Clinical study for individuals aged 40-80 diagnosed with moderate to severe COPD and a history of smoking (10+ years).',
			link: 'https://forms.office.com/Pages/ResponsePage.aspx?id=7SrJMp_Y9E-00dDZb8k73y_lJxBdoUtHiOhODDGZZjhUMTRYTlNTQVZGOVlYNDdQSkRSUDBITFlLTi4u&amp'
		},
		{
			title: 'Lichen Simplex Chronicus (LSC)',
			status: 'Enrolling',
			description:
				'Study for those experiencing moderate to severe skin itch affecting sleep despite 6+ months of medication.',
			link: 'https://forms.office.com/e/HbGV7Na8cB?origin=lprLink'
		},
		{
			title: 'Covid-19 Vaccine Booster',
			status: 'Closed',
			description:
				'Clinical trial study for adults and children over 12 regarding vaccine boosters.',
			link: null
		},
		{
			title: 'Obsessive Compulsive Disorder (OCD)',
			status: 'Closed',
			description:
				'Study for individuals aged 18-65 diagnosed with OCD for at least one year with inadequate relief from current treatments.',
			link: null
		}
	];
</script>

<section id="studies" class="py-12 md:py-20" style:background-color={colors.background}>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 lg:text-center">
			<h2 class="text-base font-semibold tracking-wide uppercase" style:color={colors.primary}>
				Current Enrollment
			</h2>
			<p
				class="mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl"
				style:color={colors.secondary}
			>
				Active Opportunities
			</p>
			<p class="mt-4 max-w-2xl text-xl lg:mx-auto" style:color={colors.textLight}>
				Access cutting-edge pharmaceuticals, get paid for your time.
			</p>
		</div>

		<div class="mt-10">
			<div class="md:grid md:grid-cols-2 md:gap-8">
				{#each studies as study}
					<div class="mt-4 flex border border-gray-200 bg-white p-6 md:mt-0">
						<div class="flex-shrink-0">
							<div
								class="flex h-12 w-12 items-center justify-center text-white"
								style:background-color={study.status === 'Enrolling' ? colors.primary : '#9ca3af'}
							>
								<ClipboardCheck class="h-6 w-6" />
							</div>
						</div>
						<div class="ml-4 flex flex-col">
							<div class="mb-3">
								<span
									class="inline-block px-2.5 py-0.5 text-xs font-semibold tracking-wider uppercase"
									style="background-color: {study.status === 'Enrolling'
										? colors.primary + '22'
										: '#f3f4f6'};
										   color: {study.status === 'Enrolling' ? colors.primary : '#6b7280'}"
								>
									{study.status}
								</span>
							</div>

							<div class="mb-2 flex items-center justify-between">
								<h3 class="text-lg font-medium" style:color={colors.text}>
									{study.title}
								</h3>
							</div>

							<p class="mb-6 flex-grow text-sm" style:color={colors.textLight}>
								{study.description}
							</p>

							{#if study.link && study.status === 'Enrolling'}
								<a
									href={study.link}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex w-fit items-center justify-center px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
									style:background-color={colors.primary}
								>
									Volunteer Now <ExternalLink class="ml-2 h-4 w-4" />
								</a>
							{:else}
								<button
									disabled
									class="inline-flex w-fit cursor-not-allowed items-center justify-center bg-gray-100 px-4 py-2 text-sm font-medium text-gray-400"
								>
									View Impact
								</button>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
