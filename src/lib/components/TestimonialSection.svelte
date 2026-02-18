<script>
	// Define colors for the component
	import { colors } from '$lib/data.js';

	// Testimonials data
	const testimonials = [
		{
			quote:
				'I was nervous about my first trial, but the medical team at Stemax was incredible. They talked me through every blood test and check-up, making me feel like a person, not just a data point.',
			author: 'David Richardson',
			position: 'Repeat Clinical Volunteer'
		},
		{
			quote:
				'The flexibility of the outpatient visits was the deciding factor for me. I could book my appointments around my work shifts, and the clinic was always punctual and professional.',
			author: 'Samantha Reed',
			position: 'Asthma Study Participant'
		},
		{
			quote:
				'It’s a great feeling knowing you’re helping to develop future medicines. The compensation for my time was fair and paid promptly, which was a nice bonus for helping a good cause.',
			author: 'Marcus Thompson',
			position: 'Healthy Volunteer'
		},
		{
			quote:
				'The level of care I received at Stemax was better than my regular GP surgery. The screening process was so thorough that I actually learned a lot more about my own general health.',
			author: 'Elena Petrova',
			position: 'Phase II Trial Participant'
		},
		{
			quote:
				'Clear communication is everything. From the initial phone call to the final follow-up, the Stemax staff kept me informed about what to expect. There were no surprises and no stress.',
			author: 'Jordan Hayes',
			position: 'Clinical Research Volunteer'
		},
		{
			quote:
				'I’ve participated in two trials here now. The facility is modern, the nurses are friendly, and the whole process is incredibly well-organized. I’d recommend it to anyone curious about research.',
			author: 'Chloe Whitworth',
			position: 'Healthy Volunteer'
		}
	];
</script>

<section id="testimonials" class="py-12 md:py-20" style:background-color={colors.primary}>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 lg:text-center">
			<h2 class="text-base font-semibold tracking-wide text-white uppercase">Testimonials</h2>
			<p class="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl">
				From Some Of Our Volunteers
			</p>
		</div>

		<div class="mt-10 grid gap-8 md:grid-cols-3">
			{#each testimonials as testimonial (testimonial.author)}
				<div
					class="border p-6"
					style="border-color: {colors.primaryLight}; background-color: rgba(255, 255, 255, 0.1);"
				>
					<p class="mb-4 text-white">"{testimonial.quote}"</p>
					<div>
						<p class="font-semibold text-white">{testimonial.author}</p>
						<p class="text-emerald-200">{testimonial.position}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
