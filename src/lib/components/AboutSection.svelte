<script>
	// Define colors as a constant within the component
	import { colors } from '$lib/data.js';

	// Team members data
	const team = [
		{
			name: 'Dr. Sarah Williams',
			role: 'Medical Director',
			bio: 'Dr. Williams has over 15 years of experience in occupational health and is a specialist in corporate wellness programs.',
			color: colors.primaryLight
		},
		{
			name: 'James Thompson',
			role: 'Head of Occupational Health',
			bio: 'James specializes in health surveillance and workplace assessments for high-risk industries including oil and gas.',
			color: colors.primary
		},
		{
			name: 'Dr. Michael Chen',
			role: 'Vaccination Specialist',
			bio: 'Dr. Chen leads our vaccination program and has extensive experience in travel medicine and immunology.',
			color: colors.primaryDark
		},
		{
			name: 'Emma Roberts',
			role: 'Senior Nurse Practitioner',
			bio: 'Emma has specialized in occupational health for 10 years and coordinates our on-site vaccination programs.',
			color: colors.primaryLight
		}
	];
</script>

<section id="about" class="py-12 md:py-20" style:background-color={colors.background}>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 lg:text-center">
			<h2 class="text-base font-semibold tracking-wide uppercase" style:color={colors.primary}>
				About Us
			</h2>
			<p
				class="mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl"
				style:color={colors.secondary}
			>
				Meet Our Team
			</p>
			<p class="mt-4 max-w-2xl text-xl lg:mx-auto" style:color={colors.textLight}>
				Our experienced healthcare professionals have been providing exceptional services to
				businesses across the UK since 2007.
			</p>
		</div>

		<div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each team as member}
				<div class="flex flex-col items-center bg-white p-6 text-center shadow-lg">
					<!-- SVG Headshot -->
					<div class="relative mb-4 h-32 w-32">
						<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
							<!-- Background circle -->
							<circle cx="50" cy="50" r="50" fill={member.color}></circle>

							<!-- Simple initials -->
							<text
								x="50"
								y="58"
								font-family="Arial"
								font-size="24"
								font-weight="bold"
								text-anchor="middle"
								fill="white"
							>
								{member.name
									.split(' ')
									.map((n) => n[0])
									.join('')}
							</text>
						</svg>
					</div>

					<h3 class="mb-1 text-lg font-bold" style:color={colors.secondary}>{member.name}</h3>
					<p class="mb-3 text-sm font-medium" style:color={colors.primary}>{member.role}</p>
					<p class="text-sm" style:color={colors.textLight}>{member.bio}</p>

					<div class="mt-4 w-full border-t border-gray-100 pt-4">
						<a
							href="#contact"
							class="inline-flex items-center text-sm font-medium"
							style:color={colors.primary}
						>
							Contact
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="ml-1 h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								></path>
							</svg>
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!--  -->
