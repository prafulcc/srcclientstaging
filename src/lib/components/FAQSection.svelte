<script>
	import { Plus, Minus, Phone, MessageSquare } from 'lucide-svelte';
	import { slide } from 'svelte/transition';
	import { colors } from '$lib/data.js';

	// State to track which FAQ is currently open
	let openIndex = 0;

	const toggle = (index) => {
		openIndex = openIndex === index ? null : index;
	};

	const faqs = [
		{
			question: 'What is a Clinical Trial?',
			answer:
				'A clinical trial is a research study conducted with human participants to evaluate the safety and effectiveness of new medical treatments, drugs, or devices. These studies are essential for bringing new medical advancements to the public.'
		},
		{
			question: 'What is a "Placebo" and will I receive one?',
			answer:
				'A placebo is a substance that looks like the study drug but contains no active ingredient. Many trials are "double-blind," meaning neither you nor your doctor knows if you are receiving the active treatment or the placebo. This ensures the study results are objective.'
		},

		// --- Eligibility & Joining ---
		{
			question: 'Who can participate in a clinical trial?',
			answer:
				'Each study has specific "inclusion" and "exclusion" criteria, such as age, gender, medical history, or current health status. We conduct a free screening visit to determine if a specific trial is a safe and appropriate fit for you.'
		},
		{
			question: 'Can I stay on my current medications?',
			answer:
				'This depends on the specific trial. Some medications may interact with the study treatment. During your screening, our medical team will review your current prescriptions to determine if you can continue them while participating.'
		},

		// --- Daily Life & Logistics ---
		{
			question: 'Do I have to stay overnight at the clinic?',
			answer:
				'No. Most of our current trials are outpatient-based. You will live at home and simply visit the clinic for scheduled appointments, much like a standard doctor’s visit.'
		},
		{
			question: 'How much time will I need to commit?',
			answer:
				'The duration varies by study. Some involve a few visits over a month, while others may last a year or more. We provide a full schedule of visits before you consent so you can ensure it fits your lifestyle.'
		},
		{
			question: 'Can I work or go to school during the trial?',
			answer:
				'Absolutely. Since these are outpatient trials, most participants continue their normal work or school routines. We often offer flexible appointment times to accommodate your schedule.'
		},

		// --- Safety & Rights ---
		{
			question: 'Is it safe to participate?',
			answer:
				'Every trial is reviewed by an Independent Ethics Committee and regulatory bodies (like the FDA or MHRA). While all medical research carries some risk, your safety is monitored throughout the process by qualified medical professionals.'
		},
		{
			question: 'What is "Informed Consent"?',
			answer:
				'Informed Consent is the process of providing you with all the details about a study—including potential risks, benefits, and your rights—before you decide to join. It is an ongoing conversation, not just a signed form.'
		},

		// --- Costs & Compensation ---
		{
			question: 'Does it cost anything to participate?',
			answer:
				'No. There is no cost to you. The study drug, medical exams, and lab tests required for the trial are provided free of charge.'
		},
		{
			question: 'How do I get paid for my time?',
			answer:
				'Most trials offer reimbursement for travel expenses and compensation for the time spent at the clinic. These payments are usually made via bank transfer or a dedicated debit card following your scheduled visits.'
		},

		// --- After the Trial ---
		{
			question: 'What happens when the study ends?',
			answer:
				'Once the study is over, you will return to your regular healthcare provider for ongoing care. In some cases, "open-label extension" studies may allow participants to continue receiving the study treatment if it proved beneficial.'
		},
		{
			question: 'Will I find out the results of the study?',
			answer:
				'Yes, once the data has been analyzed and the study is officially completed, we aim to share a summary of the findings with all participants.'
		},
		{
			question: "Can I leave a clinical trial once I've started?",
			answer:
				'Yes. Participation is entirely voluntary. You have the right to withdraw your consent and leave the study at any time, for any reason, without any penalty or loss of benefits to which you are otherwise entitled.'
		},
		{
			question: 'How is my personal data protected?',
			answer:
				'We strictly adhere to GDPR and GCP (Good Clinical Practice) guidelines. Your personal information is de-identified (coded) to protect your privacy. Only authorized study personnel and regulatory authorities have access to your medical records.'
		},
		{
			question: 'What happens if I experience side effects?',
			answer:
				'All potential risks are explained in the Informed Consent form before you join. If you experience any side effects, our medical team provides immediate care and evaluation. All adverse events are reported and managed according to strict regulatory safety protocols.'
		}
	];
</script>

<section class="py-12 md:py-20" style:background-color={colors.background}>
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="text-base font-semibold tracking-wide uppercase" style:color={colors.primary}>
				Frequently Asked Questions
			</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl" style:color={colors.secondary}>
				Common Questions & <span style:color={colors.primary}>Patient Rights</span>
			</p>
			<p class="mt-4 text-lg leading-relaxed" style:color={colors.textLight}>
				Stepping into clinical research is a unique opportunity to access breakthrough medicines
				within a safety net of constant expert monitoring. We ensure you feel confident, seen, and
				protected at every turn.
			</p>
		</div>

		<div class="space-y-4">
			{#each faqs as faq, index}
				<div
					class="border border-gray-200 bg-white transition-colors duration-200"
					class:bg-gray-50={openIndex === index}
				>
					<button
						type="button"
						class="flex w-full items-center justify-between p-6 text-left focus:outline-none"
						on:click={() => toggle(index)}
						aria-expanded={openIndex === index}
					>
						<span
							class="text-lg font-medium"
							style:color={openIndex === index ? colors.primary : colors.text}
						>
							{faq.question}
						</span>
						<span class="ml-6 flex h-7 items-center">
							{#if openIndex === index}
								<Minus class="h-5 w-5" />
							{:else}
								<Plus class="h-5 w-5" />
							{/if}
						</span>
					</button>

					{#if openIndex === index}
						<div transition:slide={{ duration: 300 }} class="px-6 pt-0 pb-6">
							<p class="text-base leading-relaxed" style:color={colors.textLight}>
								{faq.answer}
							</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>

	<div
		class="mx-auto mt-16 max-w-4xl p-8 text-center sm:p-12"
		style:background-color={`${colors.primary}50`}
	>
		<h3 class="text-2xl font-bold sm:text-3xl" style:color={colors.secondary}>Need Assistance?</h3>
		<p class="mx-auto mt-4 max-w-2xl text-lg" style:color={colors.text}>
			All related office visits, medical evaluations, and study medication are provided at no
			charge. Financial compensation for time and travel may be provided.
		</p>
		<div class="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
			<a
				href="tel:01908032992"
				class="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white transition-opacity hover:opacity-90"
				style:background-color={colors.primary}
			>
				<Phone class="mr-2 h-5 w-5" /> +44 1908 032992
			</a>
			<a
				href="https://stemaxconsult.com/contact-us"
				class="inline-flex items-center justify-center px-8 py-3 text-base font-medium transition-colors hover:bg-white/20"
				style:border-color={colors.primary}
				style:color={colors.primary}
			>
				<MessageSquare class="mr-2 h-5 w-5" /> General Enquiry Form
			</a>
		</div>
	</div>
</section>
