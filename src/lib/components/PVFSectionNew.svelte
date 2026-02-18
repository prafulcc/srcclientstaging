<script>
	import { Bell, Scale, BookOpen, ShieldAlert, Activity, ClipboardCheck } from '@lucide/svelte';
	// Define colors object as in the original component
	import { colors } from '$lib/data.js';

	// PV Features data formatted to match original structure, with images added for the new card layout
	let features = [
		{
			title: 'Adverse Event Reporting',
			icon: Bell,
			image: 'https://unsplash.com/photos/Ass0DusYDk4/download?force=true&w=640',
			points: [
				'Streamlined reporting systems for adverse drug reactions (ADRs)',
				'End-to-end case processing and lifecycle management',
				'Real-time safety monitoring and signal identification'
			]
		},
		{
			title: 'Regulatory Compliance',
			icon: Scale,
			image: 'https://unsplash.com/photos/_pc8aMbI9UQ/download?force=true&w=640',
			points: [
				'Adherence to global pharmacovigilance regulations',
				'Customized solutions for local and international markets',
				'Audit preparation and inspection readiness'
			]
		},
		{
			title: 'Literature Monitoring',
			icon: BookOpen,
			image: 'https://unsplash.com/photos/9BoqXzEeQqM/download?force=true&w=640',
			points: [
				'Comprehensive scientific literature surveillance',
				'Preparation of high-quality pharmacovigilance documentation',
				'Narrative writing, aggregate reports, and regulatory submissions'
			]
		},
		{
			title: 'Risk Management Services',
			icon: ShieldAlert,
			image: 'https://unsplash.com/photos/qwtCeJ5cLYs/download?force=true&w=640',
			points: [
				'Development and implementation of Risk Management Plans (RMPs)',
				'Periodic Safety Update Reports (PSURs) & Risk-Benefit Evaluation',
				'Proactive safety strategies for high-risk products'
			]
		},
		{
			title: 'Signal Detection',
			icon: Activity,
			image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800&q=80',
			points: [
				'Advanced data mining and statistical safety analysis',
				'Early detection of emerging safety concerns',
				'Collaborative safety reviews with regulatory authorities'
			]
		},
		{
			title: 'Inspection Readiness',
			icon: ClipboardCheck,
			image: 'https://unsplash.com/photos/-Wt8AyCr9i4/download?force=true&w=640',
			points: [
				'Inspection readiness training and internal audits',
				'Pharmacovigilance system master file (PSMF) support',
				'Mock inspections, interviews, and QPPV representation'
			]
		}
	];
</script>

<section
	id="pharmacovigilance-solutions"
	class="py-12 md:py-20"
	style:background-color={colors.background}
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 lg:text-center">
			<h2 class="text-base font-semibold tracking-wide uppercase" style:color={colors.primary}>
				Protecting you & Safeguarding Volunteers
			</h2>
			<p
				class="mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl"
				style:color={colors.secondary}
			>
				Bespoke Pharmacovigilance Solutions
			</p>
			<p class="mt-4 max-w-2xl text-xl lg:mx-auto" style:color={colors.textLight}>
				Ensuring drug safety with a commitment to patient safety and regulatory excellence for
				small-to-mid size sponsors.
			</p>
		</div>

		<div class="mt-10">
			<div class="md:grid md:grid-cols-3 md:gap-6">
				{#each features as feature}
					<div
						class="mt-4 flex flex-col overflow-hidden border border-gray-200 hover:bg-white md:mt-0"
					>
						<div class="relative h-20 w-full">
							<img
								src={feature.image}
								alt={feature.title}
								class="absolute inset-0 h-full w-full object-cover blur-[2px]"
							/>

							<div
								class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
							></div>

							<div class="absolute inset-0 flex w-full items-center justify-center gap-4 p-4">
								<div
									class="flex h-10 w-10 flex-shrink-0 items-center justify-center text-white"
									style:background-color={colors.primary}
								>
									<svelte:component this={feature.icon} class="h-5 w-5" />
								</div>
								<h3 class="text-center text-lg font-medium text-white shadow-sm">
									{feature.title}
								</h3>
							</div>
						</div>

						<div class="flex flex-1 flex-col p-6 pt-5">
							<ul class="list-disc space-y-1 pl-5" style:color={colors.textLight}>
								{#each feature.points as point}
									<li class="text-base">{point}</li>
								{/each}
							</ul>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="relative mt-16 overflow-hidden p-8 text-center sm:p-12">
			<div class="cta-background"></div>

			<div class="relative z-10">
				<h3 class="text-2xl font-bold text-white sm:text-3xl">
					Ready to secure your product's safety lifecycle?
				</h3>
				<p class="mx-auto mt-4 max-w-2xl text-lg text-gray-200">
					Speak directly with our pharmacovigilance team to get a comprehensive review of your
					compliance gaps.
				</p>
				<div class="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
					<a
						href="/contact"
						class="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white shadow-sm transition-opacity hover:opacity-90"
						style:background-color={colors.primary}
					>
						Contact Us
					</a>
					<a
						href="/case-studies"
						class="text-base font-semibold text-white transition-colors hover:opacity-80"
					>
						View Case Studies
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.cta-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		/* Applying the requested Unsplash image with a 70% black tint */
		background-image:
			linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
			url('https://unsplash.com/photos/SMCQQlSYx4s/download?force=true&w=2400');
		background-size: cover;
		background-position: center;
		filter: blur(4px);
		transform: scale(1.1); /* Eliminates white edges caused by the blur filter */
	}
</style>
