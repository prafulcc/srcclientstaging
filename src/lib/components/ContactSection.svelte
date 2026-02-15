<script>
	// Define colors for the component
	import { colors } from '$lib/data.js';
</script>

<section id="contact" class="py-12 md:py-20" style:background-color={colors.light}>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 lg:text-center">
			<h2 class="text-base font-semibold tracking-wide uppercase" style:color={colors.primary}>
				Contact Us
			</h2>
			<p
				class="mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl"
				style:color={colors.secondary}
			>
				Get In Touch
			</p>
			<p class="mt-4 max-w-2xl text-xl lg:mx-auto" style:color={colors.textLight}>
				Have questions about our services? Contact our team for more information.
			</p>
		</div>

		<div class="mt-10 grid gap-8 md:grid-cols-3">
			<a
				href="tel:+441908032992"
				class="flex flex-col items-center border border-gray-200 p-6 text-center"
			>
				<!-- Phone icon -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="mb-4"
					style:color={colors.primary}
				>
					<path
						d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
					></path>
				</svg>
				<h3 class="mb-2 text-lg font-medium" style:color={colors.text}>Phone</h3>
				<p style:color={colors.textLight}>+44 (0) 1908 03 2992</p>
			</a>

			<a
				href="mailto:info@stemaxconsult.com"
				class="flex flex-col items-center border border-gray-200 p-6 text-center"
			>
				<!-- Mail icon -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="mb-4"
					style:color={colors.primary}
				>
					<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
					></path>
					<polyline points="22,6 12,13 2,6"></polyline>
				</svg>
				<h3 class="mb-2 text-lg font-medium" style:color={colors.text}>Email</h3>
				<p style:color={colors.textLight}>info@stemaxconsult.com</p>
			</a>

			<a
				href="https://maps.google.com/?q=Ground+Floor+Suite+F,+Old+Stratford+Business+Park,+Falcon+Drive,+Old+Stratford,+Milton+Keynes+MK19+6FG,+UK"
				target="_blank"
				rel="noopener noreferrer"
				class="flex flex-col items-center border border-gray-200 p-6 text-center"
			>
				<!-- Map Pin icon -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="mb-4"
					style:color={colors.primary}
				>
					<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
					<circle cx="12" cy="10" r="3"></circle>
				</svg>
				<h3 class="mb-2 text-lg font-medium" style:color={colors.text}>Address</h3>
				<p style:color={colors.textLight}>Ground Floor Suite F</p>
				<p style:color={colors.textLight}>Old Stratford Business Park</p>
				<p style:color={colors.textLight}>Falcon Drive, Old Stratford</p>
				<p style:color={colors.textLight}>Milton Keynes MK19 6FG</p>
			</a>
		</div>
	</div>
</section>
