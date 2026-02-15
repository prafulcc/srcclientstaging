<script>
	// Define colors for the component
	import { colors } from '$lib/data.js';
	import { services, getAllServices } from '$lib/data.js';

	// Define service data

	// Reactive state
	let selectedService = $state('');
	let showPricing = $state(false);

	// Combine all services for the dropdown
	const allServices = getAllServices();

	// Find the selected service details
	let serviceDetails = $derived(
		selectedService ? allServices.find((service) => service.name === selectedService) : null
	);

	// Handle select change
	function handleSelectChange(event) {
		selectedService = event.target.value;
		showPricing = !!event.target.value;
	}
</script>

<section id="book" class="py-12 md:py-20" style:background-color={colors.background}>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="lg:text-center">
			<h2 class="text-base font-semibold tracking-wide uppercase" style:color={colors.primary}>
				Get Started
			</h2>
			<p
				class="mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl"
				style:color={colors.secondary}
			>
				Ready to Book a Service?
			</p>
			<p class="mt-4 max-w-2xl text-xl lg:mx-auto" style:color={colors.textLight}>
				Schedule an appointment with our healthcare professionals today.
			</p>
		</div>

		<div class="mx-auto mt-10 max-w-xl border border-gray-200 bg-white shadow-lg sm:mt-12">
			<div class="p-8">
				<form class="grid grid-cols-1 gap-y-6">
					<div>
						<label for="service" class="block text-sm font-medium" style:color={colors.text}>
							Select a Specific Service
						</label>
						<select
							id="service"
							name="service"
							value={selectedService}
							onchange={handleSelectChange}
							class="mt-1 block w-full border border-gray-300 px-3 py-2 focus:outline-none sm:text-sm"
							style:border-color={colors.primary}
						>
							<option value="">Select a service...</option>

							<optgroup label="Vaccinations">
								{#each services.vaccines as service (service.name)}
									<option value={service.name}>
										{service.name} - {service.price}
									</option>
								{/each}
							</optgroup>

							<optgroup label="Immune Support">
								{#each services.immune as service (service.name)}
									<option value={service.name}>
										{service.name} - {service.price}
									</option>
								{/each}
							</optgroup>

							<optgroup label="Occupational Health">
								{#each services.occupational as service (service.name)}
									<option value={service.name}>
										{service.name} - {service.price}
									</option>
								{/each}
							</optgroup>

							<optgroup label="Blood Tests">
								{#each services.bloodtests as service (service.name)}
									<option value={service.name}>
										{service.name} - {service.price}
									</option>
								{/each}
							</optgroup>
						</select>
					</div>

					{#if showPricing && serviceDetails}
						<div class="my-2 border-t border-b border-gray-200 py-4">
							<h3 class="mb-2 font-medium">Service Details</h3>
							<div class="grid grid-cols-2 gap-2 text-sm">
								<div>
									<span class="block text-gray-500">Service:</span>
									<span class="font-medium">{serviceDetails.name}</span>
								</div>
								<div>
									<span class="block text-gray-500">Price:</span>
									<span class="font-medium" style:color={colors.primary}
										>{serviceDetails.price}</span
									>
								</div>
								<div>
									<span class="block text-gray-500">Duration:</span>
									<span>{serviceDetails.duration}</span>
								</div>
								{#if serviceDetails.doses}
									<div>
										<span class="block text-gray-500">Doses:</span>
										<span>{serviceDetails.doses}</span>
									</div>
								{/if}
							</div>
							{#if serviceDetails.details}
								<div class="mt-2">
									<span class="block text-gray-500">Details:</span>
									<p class="text-sm">{serviceDetails.details}</p>
								</div>
							{/if}
						</div>
					{/if}

					<div>
						<label for="full-name" class="block text-sm font-medium" style:color={colors.text}>
							Full Name
						</label>
						<input
							type="text"
							name="full-name"
							id="full-name"
							class="mt-1 block w-full border border-gray-300 px-3 py-2 focus:outline-none sm:text-sm"
							placeholder="John Smith"
						/>
					</div>
					<div>
						<label for="email" class="block text-sm font-medium" style:color={colors.text}>
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							class="mt-1 block w-full border border-gray-300 px-3 py-2 focus:outline-none sm:text-sm"
							placeholder="john@example.com"
						/>
					</div>
					<div>
						<label for="phone" class="block text-sm font-medium" style:color={colors.text}>
							Phone Number
						</label>
						<input
							type="tel"
							name="phone"
							id="phone"
							class="mt-1 block w-full border border-gray-300 px-3 py-2 focus:outline-none sm:text-sm"
							placeholder="+44 123 456 7890"
						/>
					</div>

					<div class="grid grid-cols-2 gap-4">
						<div>
							<label for="date" class="block text-sm font-medium" style:color={colors.text}>
								Preferred Date
							</label>
							<input
								type="date"
								name="date"
								id="date"
								class="mt-1 block w-full border border-gray-300 px-3 py-2 focus:outline-none sm:text-sm"
							/>
						</div>
						<div>
							<label for="time" class="block text-sm font-medium" style:color={colors.text}>
								Preferred Time
							</label>
							<input
								type="time"
								name="time"
								id="time"
								class="mt-1 block w-full border border-gray-300 px-3 py-2 focus:outline-none sm:text-sm"
							/>
						</div>
					</div>

					<div>
						<label for="message" class="block text-sm font-medium" style:color={colors.text}>
							Additional Notes
						</label>
						<textarea
							id="message"
							name="message"
							rows="4"
							class="mt-1 block w-full border border-gray-300 px-3 py-2 focus:outline-none sm:text-sm"
							placeholder="Any specific requirements or questions"
						></textarea>
					</div>
					<div>
						<button
							type="submit"
							class="inline-flex w-full items-center justify-center border border-transparent px-6 py-3 text-base font-medium text-white"
							style:background-color={colors.primary}
						>
							Book Appointment
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>
