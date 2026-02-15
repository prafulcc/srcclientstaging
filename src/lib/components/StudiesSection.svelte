<script>
	import { colors } from '$lib/data.js';
	import { ExternalLink, Phone, ClipboardCheck } from 'lucide-svelte';

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

<section id="studies" class="py-20" style="background-color: {colors.background}">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="text-3xl font-bold tracking-tight sm:text-4xl" style="color: {colors.secondary}">
				Current Clinical Trials
			</h2>
			<p class="mt-4 text-lg" style="color: {colors.textLight}">
				Participate in medical research to help pave the way for future treatments.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2">
			{#each studies as study (study.title)}
				<div
					class="flex flex-col rounded-2xl border bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
					style="border-color: {colors.primaryLight}33"
				>
					<div class="mb-4 flex items-center justify-between">
						<span
							class="rounded-full px-3 py-1 text-xs font-semibold"
							style="background-color: {study.status === 'Enrolling'
								? colors.primary + '22'
								: '#fee2e2'};
									 color: {study.status === 'Enrolling' ? colors.primary : '#ef4444'}"
						>
							{study.status}
						</span>
					</div>

					<h3 class="mb-3 text-xl font-bold" style="color: {colors.secondary}">
						{study.title}
					</h3>

					<p class="mb-6 flex-grow text-base" style="color: {colors.text}">
						{study.description}
					</p>

					{#if study.link && study.status === 'Enrolling'}
						<a
							href={study.link}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors"
							style="background-color: {colors.primary}; hover:background-color: {colors.primaryDark}"
						>
							Register Interest <ExternalLink class="ml-2 h-4 w-4" />
						</a>
					{:else}
						<button
							disabled
							class="inline-flex cursor-not-allowed items-center justify-center rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-400"
						>
							Registration Closed
						</button>
					{/if}
				</div>
			{/each}
		</div>

		<div class="mt-16 rounded-2xl p-8 text-center" style="background-color: {colors.primary}11">
			<h4 class="mb-4 text-xl font-bold" style="color: {colors.primary}">Need Assistance?</h4>
			<p class="mb-6" style="color: {colors.text}">
				All related office visits, medical evaluations, and study medication are provided at no
				charge. Financial compensation for time and travel may be provided.
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="tel:01908032992"
					class="flex items-center justify-center gap-2 font-bold"
					style="color: {colors.primary}"
				>
					<Phone class="h-5 w-5" /> 01908 032992
				</a>
				<span class="hidden text-gray-300 sm:block">|</span>
				<a
					href="https://stemaxconsult.com/contact-us"
					class="flex items-center justify-center gap-2 font-bold"
					style="color: {colors.primary}"
				>
					<ClipboardCheck class="h-5 w-5" /> General Interest Form
				</a>
			</div>
		</div>
	</div>
</section>
