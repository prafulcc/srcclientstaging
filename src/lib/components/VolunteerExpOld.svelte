<script>
	import {
		Search,
		FilePenLine,
		Stethoscope,
		BrainCircuit,
		Activity,
		ShieldAlert,
		HeartHandshake
	} from 'lucide-svelte';
	import { colors } from '$lib/data.js';

	const timeline = [
		{
			phase: 'Pre-Trial Phase',
			steps: [
				{
					title: 'Discovery & Pre-Screening',
					desc: 'Confidential discussion about your condition and study goals. No cost or commitment required.',
					icon: Search,
					duration: '1–3 Days',
					points: [
						'Review of medical history',
						'Preliminary phone interview',
						'Check against basic requirements'
					]
				},
				{
					title: 'Informed Consent (ICF)',
					desc: 'Critical meeting with the research doctor to review risks, benefits, and alternatives line-by-line.',
					icon: FilePenLine,
					duration: '1 Visit',
					points: ['Take document home to review', 'Ask questions freely', 'Sign only when ready']
				},
				{
					title: 'Medical Screening',
					desc: 'Comprehensive health check more detailed than a standard physical to ensure safety.',
					icon: Stethoscope,
					duration: '2–4 Weeks',
					points: ['ECG, blood work, & vitals', 'Medication review', 'Diagnosis verification']
				}
			]
		},
		{
			phase: 'Active Study Phase',
			steps: [
				{
					title: 'Randomization & Baseline',
					desc: 'Assignment to a treatment group (often double-blind) and recording of baseline measurements.',
					icon: BrainCircuit,
					duration: 'Day 0',
					points: ['Treatment assignment', 'Baseline health metrics', 'Receive study kit/diary']
				},
				{
					title: 'Treatment & Monitoring',
					desc: 'Frequent clinic visits focused intensely on your specific condition and overall safety.',
					icon: Activity,
					duration: 'Months to Years',
					points: ['24/7 medical team access', 'Real-time care adjustments', 'Travel reimbursement']
				}
			]
		},
		{
			phase: 'Post-Trial Phase',
			steps: [
				{
					title: 'Safety Follow-Up',
					desc: 'Monitoring after medication stops to ensure drug leaves system safely without delayed side effects.',
					icon: ShieldAlert,
					duration: '4–12 Weeks',
					points: ['Final labs & physical', 'Transition to GP', 'Share medical results']
				},
				{
					title: 'Long-Term Extension',
					desc: 'Optional opportunity to roll over into an "Open Label Extension" to receive active medication.',
					icon: HeartHandshake,
					duration: 'Optional',
					points: [
						'Access to cutting-edge therapy',
						'Continued cost-free care',
						'Long-term safety contribution'
					]
				}
			]
		}
	];
</script>

<section class="py-12 md:py-20" style:background-color={colors.background}>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 lg:text-center">
			<h2 class="text-base font-semibold tracking-wide uppercase" style:color={colors.primary}>
				Timeline
			</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl" style:color={colors.secondary}>
				The Volunteer Experience
			</p>
			<p class="mt-4 max-w-2xl text-xl lg:mx-auto" style:color={colors.textLight}>
				Joining a trial gives you access to breakthrough medicines within a safety net of constant,
				expert medical attention.
			</p>
		</div>

		<div class="space-y-16">
			{#each timeline as phase, i}
				<div class="relative">
					<div class="mb-8 flex items-center gap-4">
						<div
							class="flex h-8 w-8 items-center justify-center font-bold text-white"
							style:background-color={colors.primary}
						>
							{i + 1}
						</div>
						<h3 class="text-xl font-bold tracking-wide uppercase" style:color={colors.secondary}>
							{phase.phase}
						</h3>
						<div class="h-px flex-grow bg-gray-200"></div>
					</div>

					<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{#each phase.steps as step}
							<div class="flex h-full flex-col border border-gray-200 bg-white p-6 shadow-sm">
								<div class="mb-6 flex items-start justify-between">
									<div
										class="flex h-12 w-12 flex-shrink-0 items-center justify-center text-white"
										style:background-color={colors.primary}
									>
										<svelte:component this={step.icon} class="h-6 w-6" />
									</div>
									<span
										class="px-2 py-1 text-xs font-bold tracking-wider uppercase"
										style:background-color={`${colors.primary}15`}
										style:color={colors.primary}
									>
										{step.duration}
									</span>
								</div>

								<div class="flex-grow">
									<h4 class="mb-2 text-lg font-medium" style:color={colors.text}>
										{step.title}
									</h4>
									<p class="mb-4 text-sm leading-relaxed" style:color={colors.textLight}>
										{step.desc}
									</p>
								</div>

								<div class="mt-4 border-t border-gray-100 pt-4">
									<ul class="space-y-2">
										{#each step.points as point}
											<li class="flex items-start text-xs" style:color={colors.textLight}>
												<span class="mt-1 mr-2 text-xs" style:color={colors.primary}>■</span>
												{point}
											</li>
										{/each}
									</ul>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-16 border-t border-gray-200 pt-12 text-center">
			<a
				href="/apply"
				class="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white shadow-sm transition-opacity hover:opacity-90"
				style:background-color={colors.primary}
			>
				Start Your Journey
			</a>
		</div>
	</div>
</section>
