<script>
	// Imported specific Lucide icons relevant to clinical research [cite: 1]
	import { Rocket, Users, ShieldCheck, Database, MapPinPlus, Gavel } from '@lucide/svelte';

	// Define colors object as in the original React component [cite: 1]
	import { colors } from '$lib/data.js';

	// Features data updated with specific icon components
	let features = [
		{
			title: 'Study Startup',
			icon: Rocket, // Represents launch and initiation
			points: [
				'Assisted trial design',
				'Protocol writing',
				'Site feasibility, selection, training and initiation',
				'IRB/ethics and regulatory submissions',
				'CTMS configuration and UAT',
				'Study plans'
			]
		},
		{
			title: 'Patient Recruitment',
			icon: Users, // Represents patient populations and recruitment
			points: [
				'EMR databank querying',
				'Central digital advertising',
				'On-site patient recruitment',
				'Study websites and marketing materials',
				'Patient concierge',
				'Pre-screening'
			]
		},
		{
			title: 'Study Management',
			icon: ShieldCheck, // Represents oversight, safety, and pharmacovigilance
			points: [
				'Project management',
				'Monitoring',
				'Vendor management (e.g. IMP, central lab, IRT etc.)',
				'TMF management',
				'Pharmacovigilance',
				'Medical monitoring'
			]
		},
		{
			title: 'Data Management',
			icon: Database, // Represents database locks and data standardization
			points: [
				'Database locks',
				'Data delivery in CDISC SDTM-like format',
				'Data standardization',
				'Biostatistics and Programming',
				'Medical writing'
			]
		},
		{
			title: 'Site Management',
			icon: MapPinPlus, // Represents database locks and data standardization
			points: [
				'On-site Principal Investigators and Clinical Research Coordinators',
				'Local Primary Care Physician and GP Sites',
				'Speciality Sites (Neurology, Dermatology, Endocrinology, etc.)',
				'Mobile Phlebolotmy and Nursing'
			]
		},
		{
			title: 'Regulatory Affairs',
			icon: Gavel, // Represents database locks and data standardization
			points: [
				'Legal Representation within the UK, USA and EU for foreign sponsors',
				'Health Authority Interface',
				'Response Management',
				'Approval Tracking'
			]
		}
	];
</script>

<section id="run-clinical-trials" class="py-12 md:py-20" style:background-color={colors.background}>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 lg:text-center">
			<h2 class="text-base font-semibold tracking-wide uppercase" style:color={colors.primary}>
				For Sponsors
			</h2>
			<p
				class="mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl"
				style:color={colors.secondary}
			>
				We Help Run Your Clinical Trial
			</p>
			<p class="mt-4 max-w-2xl text-xl lg:mx-auto" style:color={colors.textLight}>
				Expertise to handle any stage of your clinical research journey.
			</p>
		</div>

		<div class="mt-10">
			<div class="md:grid md:grid-cols-3 md:gap-8">
				{#each features as feature}
					<div class="mt-4 flex border border-gray-200 p-6 md:mt-0">
						<div class="flex-shrink-0">
							<div
								class="flex h-12 w-12 items-center justify-center text-white"
								style:background-color={colors.primary}
							>
								<svelte:component this={feature.icon} class="h-6 w-6" />
							</div>
						</div>
						<div class="ml-4">
							<h3 class="text-lg font-medium" style:color={colors.text}>
								{feature.title}
							</h3>
							<ul class="mt-2 list-disc space-y-1 pl-5" style:color={colors.textLight}>
								{#each feature.points as point}
									<li class="text-sm">{point}</li>
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
					Ready to discuss your clinical trial?
				</h3>
				<p class="mx-auto mt-4 max-w-2xl text-lg text-gray-200">
					Connect with our experts to discuss how our integrated services can streamline your
					development timeline.
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
		/* Using the same image and dark tint for consistency across the page */
		background-image:
			linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url('https://unsplash.com/photos/3m1h6CgfLL8/download?force=true&w=2400');
		background-size: cover;
		background-position: center;
		filter: blur(2px);
		transform: scale(1.1); /* Prevents white bleed at the edges from the blur */
	}
</style>
