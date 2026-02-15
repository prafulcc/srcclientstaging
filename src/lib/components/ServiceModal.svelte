<script>
	// Props for the modal component
	import { colors } from '$lib/data.js';
	import { getCategoryLabel } from '$lib/data.js';
	let { service, isOpen, onClose, activeTab } = $props();
</script>

{#if isOpen && service}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
		<div
			class="max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-white shadow-xl"
			style:border-color={colors.primary}
		>
			<!-- Modal Header -->
			<div
				class="flex items-center justify-between border-b px-6 py-4"
				style:border-color={colors.primary}
			>
				<h3 class="text-xl font-bold" style:color={colors.primary}>{service.name}</h3>
				<button aria-label="close" onclick={onClose} class="text-gray-500 hover:text-gray-700">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>

			<!-- Modal Body -->
			<div class="px-6 py-4">
				<div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
					<div>
						<p class="mb-1 text-sm text-gray-500">Category</p>
						{#if service.category}
							<p class="font-medium">{getCategoryLabel(service.category)}</p>
						{:else}
							<p class="font-medium">{getCategoryLabel(activeTab)}</p>
						{/if}
					</div>

					<div>
						<p class="mb-1 text-sm text-gray-500">Price</p>
						<p class="text-xl font-bold" style:color={colors.primary}>{service.price}</p>
					</div>

					<div>
						<p class="mb-1 text-sm text-gray-500">Duration</p>
						<p class="font-medium">{service.duration}</p>
					</div>

					{#if service.doses}
						<div>
							<p class="mb-1 text-sm text-gray-500">Required Doses</p>
							<p class="font-medium">{service.doses} {service.doses === 1 ? 'dose' : 'doses'}</p>
						</div>
					{/if}

					{#if service.booster}
						<div>
							<p class="mb-1 text-sm text-gray-500">Booster</p>
							<p class="font-medium">{service.booster}</p>
						</div>
					{/if}
				</div>

				{#if service.details}
					<div class="mb-6">
						<p class="mb-1 text-sm text-gray-500">Description</p>
						<p>{service.details}</p>
					</div>
				{/if}

				<div>
					<h4 class="mb-4 text-lg font-medium">Book this service</h4>
					<form class="grid grid-cols-1 gap-4 md:grid-cols-2">
						<div class="md:col-span-2">
							<label class="mb-1 block text-sm font-medium text-gray-700" for="name">
								Full Name
							</label>
							<input
								type="text"
								id="name"
								class="w-full border border-gray-300 px-3 py-2"
								placeholder="John Smith"
							/>
						</div>

						<div>
							<label class="mb-1 block text-sm font-medium text-gray-700" for="email">
								Email
							</label>
							<input
								type="email"
								id="email"
								class="w-full border border-gray-300 px-3 py-2"
								placeholder="john@example.com"
							/>
						</div>

						<div>
							<label class="mb-1 block text-sm font-medium text-gray-700" for="phone">
								Phone
							</label>
							<input
								type="tel"
								id="phone"
								class="w-full border border-gray-300 px-3 py-2"
								placeholder="+44 123 456 7890"
							/>
						</div>

						<div>
							<label class="mb-1 block text-sm font-medium text-gray-700" for="date">
								Preferred Date
							</label>
							<input type="date" id="date" class="w-full border border-gray-300 px-3 py-2" />
						</div>

						<div>
							<label class="mb-1 block text-sm font-medium text-gray-700" for="time">
								Preferred Time
							</label>
							<input type="time" id="time" class="w-full border border-gray-300 px-3 py-2" />
						</div>

						<div class="md:col-span-2">
							<label class="mb-1 block text-sm font-medium text-gray-700" for="notes">
								Additional Notes
							</label>
							<textarea
								id="notes"
								rows="3"
								class="w-full border border-gray-300 px-3 py-2"
								placeholder="Any specific requirements or questions"
							></textarea>
						</div>
					</form>
				</div>
			</div>

			<!-- Modal Footer -->
			<div class="flex justify-end gap-3 border-t px-6 py-4" style:border-color={colors.primary}>
				<button
					onclick={onClose}
					class=" border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
				>
					Cancel
				</button>
				<button class=" px-4 py-2 text-white" style:background-color={colors.primary}>
					Confirm Booking
				</button>
			</div>
		</div>
	</div>
{/if}
