<script>
	// Define colors for the component
	import { colors } from '$lib/data.js';

	// Testimonials data
	const testimonials = [
		{
			quote:
				'Stemax Consultancy provided excellent occupational health services for our company. Their professional approach and attention to detail impressed us greatly.',
			author: 'John Dunningham',
			position: 'HR Director, Global Logistics Ltd'
		},
		{
			quote:
				'The team at Stemax made our corporate health assessment process smooth and efficient. Their mobile vaccination service saved us countless work hours.',
			author: 'Sarah Mitchell',
			position: 'Operations Manager, Tech Innovations Inc'
		},
		{
			quote:
				"We've been using Stemax for all our offshore medical certifications for over 3 years. Their understanding of oil and gas requirements is exceptional.",
			author: 'David Thompson',
			position: 'Safety Officer, North Sea Operations'
		}
	];
</script>

<section id="testimonials" class="py-12 md:py-20" style:background-color={colors.primary}>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 lg:text-center">
			<h2 class="text-base font-semibold tracking-wide text-white uppercase">Testimonials</h2>
			<p class="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl">
				What Our Clients Say
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
