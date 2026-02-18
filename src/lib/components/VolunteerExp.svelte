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

	// Defined the phases with custom hex colors to guarantee gorgeous and accessible contrast
	const timelineData = [
		{
			phase: 'Pre-Trial Phase',
			theme: { main: '#3b82f6', bg: '#eff6ff', border: '#bfdbfe', text: '#1e3a8a' }, // Blue
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
			theme: { main: '#10b981', bg: '#ecfdf5', border: '#a7f3d0', text: '#064e3b' }, // Green
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
			theme: { main: '#8b5cf6', bg: '#f5f3ff', border: '#ddd6fe', text: '#4c1d95' }, // Purple
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

	// Create an absolute index for the timeline so the desktop view alternates left and right flawlessly
	let absIndex = 0;
	const timeline = timelineData.map((phase) => {
		return {
			...phase,
			steps: phase.steps.map((step) => {
				const currentAbs = absIndex++;
				return { ...step, absIndex: currentAbs };
			})
		};
	});
</script>

<section class="relative overflow-hidden py-12 md:py-20" style:background-color={colors.background}>
	<div
		class="pointer-events-none absolute inset-0 z-0 hidden bg-gradient-to-br from-blue-50 via-emerald-50 to-purple-50 lg:block"
	></div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

		<div class="space-y-16 lg:relative lg:mx-auto lg:max-w-5xl lg:space-y-0 lg:pb-12">
			<div
				class="absolute top-0 bottom-0 left-1/2 z-0 -ml-[3px] hidden w-1.5 bg-gradient-to-b from-blue-400 via-emerald-400 to-purple-400 opacity-80 lg:block"
			></div>

			{#each timeline as phase, i}
				<div class="relative z-10 lg:mb-8">
					<div class="mb-8 flex items-center gap-4 lg:hidden">
						<div
							class="flex h-8 w-8 items-center justify-center font-bold text-white shadow-sm"
							style:background-color={phase.theme.main}
						>
							{i + 1}
						</div>
						<h3 class="text-xl font-bold tracking-wide uppercase" style:color={phase.theme.main}>
							{phase.phase}
						</h3>
						<div class="h-px flex-grow bg-gray-200"></div>
					</div>

					<div class="relative z-10 mb-10 hidden justify-center pt-4 lg:flex">
						<div
							class="z-20 border bg-white px-6 py-2.5 text-sm font-bold tracking-widest uppercase shadow-md"
							style:border-color={phase.theme.border}
							style:color={phase.theme.main}
						>
							{phase.phase}
						</div>
					</div>

					<div class="grid gap-6 md:grid-cols-2 lg:flex lg:flex-col lg:gap-0 lg:space-y-8">
						{#each phase.steps as step}
							<div
								class="relative lg:w-1/2 {step.absIndex % 2 === 0
									? 'lg:self-start lg:pr-12'
									: 'lg:self-end lg:pl-12'}"
							>
								<div
									class="absolute top-12 z-20 hidden h-5 w-5 -translate-y-1/2 border-4 border-white shadow-sm lg:block {step.absIndex %
										2 ===
									0
										? '-right-2.5'
										: '-left-2.5'}"
									style:background-color={phase.theme.main}
								></div>

								<div
									class="flex h-full flex-col border p-6 shadow-sm transition-transform hover:-translate-y-1 lg:h-auto"
									style:background-color={phase.theme.bg}
									style:border-color={phase.theme.border}
								>
									<div class="mb-6 flex items-start justify-between">
										<div
											class="flex h-12 w-12 flex-shrink-0 items-center justify-center text-white shadow-sm"
											style:background-color={phase.theme.main}
										>
											<svelte:component this={step.icon} class="h-6 w-6" />
										</div>
										<span
											class="bg-opacity-70 bg-white px-3 py-1.5 text-xs font-bold tracking-wider uppercase shadow-sm"
											style:color={phase.theme.text}
										>
											{step.duration}
										</span>
									</div>

									<div class="flex-grow">
										<h4 class="mb-2 text-lg font-bold" style:color={phase.theme.text}>
											{step.title}
										</h4>
										<p class="mb-4 text-sm leading-relaxed" style:color={phase.theme.text}>
											{step.desc}
										</p>
									</div>

									<div class="mt-4 border-t pt-4" style:border-color={phase.theme.border}>
										<ul class="space-y-2">
											{#each step.points as point}
												<li class="flex items-start text-sm" style:color={phase.theme.text}>
													<span class="mt-1 mr-2 text-xs" style:color={phase.theme.main}>■</span>
													{point}
												</li>
											{/each}
										</ul>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
