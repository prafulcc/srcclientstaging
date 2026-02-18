<script>
	import { MapPin, Phone, Mail, Navigation, MessageSquare } from '@lucide/svelte';

	// Define colors object as in the original component
	import { colors } from '$lib/data.js';

	const locationInfo = {
		address:
			'Unit F, Old Stratford Business Park, Falcon Drive, Old Stratford, Milton Keynes, MK19 6FG',
		phone: '(+44) 1908 032992',
		email: 'cyprel@stemaxconsult.com',
		description:
			'Our facility is easily accessible from the A5 and A422, offering dedicated parking for our volunteers and partners.'
	};
</script>

<section id="location" class="py-12 md:py-20" style:background-color={colors.background}>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
			<div class="flex flex-col justify-center">
				<div class="mb-8">
					<h2 class="text-base font-semibold tracking-wide uppercase" style:color={colors.primary}>
						Contact Us
					</h2>
					<p
						class="mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl"
						style:color={colors.secondary}
					>
						Visit Our <span style:color={colors.primary}>Research Center</span>
					</p>
					<p class="mt-6 text-lg leading-7" style:color={colors.textLight}>
						{locationInfo.description}
					</p>
				</div>

				<div class="space-y-6">
					<div class="flex items-start">
						<div
							class="flex h-12 w-12 flex-shrink-0 items-center justify-center text-white"
							style:background-color={colors.primary}
						>
							<MapPin class="h-6 w-6" />
						</div>
						<div class="ml-4">
							<h3 class="text-lg font-medium" style:color={colors.text}>Primary Clinic Address</h3>
							<p class="mt-1 text-sm whitespace-pre-line" style:color={colors.textLight}>
								{locationInfo.address}
							</p>
						</div>
					</div>

					<div class="flex items-start">
						<div
							class="flex h-12 w-12 flex-shrink-0 items-center justify-center text-white"
							style:background-color={colors.primary}
						>
							<Phone class="h-6 w-6" />
						</div>
						<div class="ml-4">
							<h3 class="text-lg font-medium" style:color={colors.text}>Contact Reception</h3>
							<p class="mt-1 text-sm" style:color={colors.textLight}>{locationInfo.phone}</p>
							<p class="text-sm" style:color={colors.textLight}>{locationInfo.email}</p>
						</div>
					</div>
				</div>

				<div class="mt-10 flex flex-wrap gap-4">
					<a
						href="https://www.google.com/maps?q=Old+Stratford+Business+Park+MK19+6FG"
						target="_blank"
						class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
						style:background-color={colors.primary}
					>
						<Navigation class="mr-2 h-4 w-4" />
						Navigate to Site
					</a>
					<a
						href="/contact"
						class="inline-flex items-center justify-center border px-6 py-3 text-sm font-medium transition-colors hover:bg-gray-50"
						style:border-color={colors.primary}
						style:color={colors.primary}
					>
						<MessageSquare class="mr-2 h-4 w-4" />
						Contact Team
					</a>
				</div>
			</div>

			<div class="relative aspect-square w-full overflow-hidden border border-gray-200 shadow-sm">
				<iframe
					title="Research Center Location"
					class="absolute inset-0 h-full w-full"
					frameborder="0"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.624545305144!2d-0.8524456!3d52.0526084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48771bc29497e641%3A0x89e27c1f107f7c00!2sOld%20Stratford%20Business%20Park!5e0!3m2!1sen!2suk!4v1715800000000!5m2!1sen!2suk"
					allowfullscreen
					loading="lazy"
				></iframe>
			</div>
		</div>
	</div>
</section>
