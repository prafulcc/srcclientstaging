<script>
	// Define colors for the component
	import { colors } from '$lib/data.js';

	// Get current year for copyright text
	const currentYear = new Date().getFullYear();
</script>

<footer class="border-t border-gray-200 bg-black py-8 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
			<div>
				<div class="mb-4 text-xl font-bold text-white">
					STEMAX
					<span class="ml-2 text-xs font-normal text-gray-400">Healthcare Consultancy</span>
				</div>
				<p class="mb-4 text-gray-400">
					Providing quality healthcare services to businesses across the UK since 2007.
				</p>
				<p class="text-sm text-gray-400">
					VAT Registration: GB116 9732 02<br />
					Companies House: 07708197
				</p>
				<div class="mt-4">
					<p class="mb-1 text-xs text-gray-400">Regulated by Care Quality Commission</p>
					<a
						href="https://www.cqc.org.uk/provider/1-7805398732/registration-info"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-block"
					>
						<img
							src="cqc.png"
							alt="CQC Regulated"
							class="h-[25px] w-auto border-2 border-gray-400 transition-colors hover:border-white"
						/>
					</a>
				</div>
			</div>

			<div>
				<h3 class="mb-4 font-medium text-white">Services</h3>
				<ul class="space-y-2">
					<li><a href="#" class="text-gray-400 hover:text-white">Vaccinations</a></li>
					<li><a href="#" class="text-gray-400 hover:text-white">Immune Support</a></li>
					<li><a href="#" class="text-gray-400 hover:text-white">Occupational Health</a></li>
					<li><a href="#" class="text-gray-400 hover:text-white">Blood Tests</a></li>
				</ul>
			</div>

			<div>
				<h3 class="mb-4 font-medium text-white">Company</h3>
				<ul class="space-y-2">
					<li><a href="#about" class="text-gray-400 hover:text-white">About Us</a></li>
					<li><a href="#services" class="text-gray-400 hover:text-white">Services</a></li>
					<li><a href="#testimonials" class="text-gray-400 hover:text-white">Testimonials</a></li>
					<li><a href="#contact" class="text-gray-400 hover:text-white">Contact</a></li>
				</ul>
			</div>

			<div>
				<h3 class="mb-4 font-medium text-white">Contact</h3>
				<ul class="space-y-2">
					<li class="flex items-start">
						<!-- Phone icon -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mt-0.5 mr-2 h-5 w-5 text-gray-400"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path
								d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
							></path>
						</svg>
						<a href="tel:+441908032992" class="text-gray-400">+44 (0) 1908 03 2992</a>
					</li>
					<li class="flex items-start">
						<!-- Mail icon -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mt-0.5 mr-2 h-5 w-5 text-gray-400"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
							></path>
							<polyline points="22,6 12,13 2,6"></polyline>
						</svg>
						<a href="mailto:info@stemaxconsult.com" class="text-gray-400">info@stemaxconsult.com</a>
					</li>
					<li class="flex items-start">
						<!-- Map Pin icon -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="mt-0.5 mr-2 h-5 w-5 text-gray-400"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
							<circle cx="12" cy="10" r="3"></circle>
						</svg>
						<a
							href="https://maps.google.com/?q=Ground+Floor+Suite+F,+Old+Stratford+Business+Park,+Falcon+Drive,+Old+Stratford,+Milton+Keynes+MK19+6FG,+UK"
							target="_blank"
							rel="noopener noreferrer"
							class="text-gray-400 transition-colors hover:text-white"
						>
							Milton Keynes MK19 6FG
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="mt-8 border-t border-gray-800 pt-8">
			<p class="text-center text-sm text-gray-400">
				&copy; {currentYear} Stemax Consult Healthcare Services Ltd. All rights reserved.
			</p>
			<p class="text-center text-sm text-gray-400">Made by Praful Munikumar</p>
		</div>
	</div>
</footer>
