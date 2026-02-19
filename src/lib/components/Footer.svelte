<script>
	import { colors } from '$lib/data.js';
	import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, ExternalLink } from 'lucide-svelte';

	const currentYear = new Date().getFullYear();

	// Navigation links derived from the Header
	const siteLinks = [
		{ label: 'Pharmacovigilance', href: '/clinical-research-services#pharmacovigilance-solutions' },
		{ label: 'Research Services', href: '/clinical-research-services#clinical-research-services' },
		{ label: 'Volunteer in a Trial', href: '/volunteer-for-clinical-trials' },
		{ label: 'Locate Clinic', href: '#location' },
		{ label: 'Careers', href: '/' }
	];

	// Legal links from FooterOld
	const legalLinks = [
		{ label: 'Privacy Policy', href: '#' },
		{ label: 'Terms of Service', href: '#' },
		{ label: 'Cookie Policy', href: '#' }
	];
</script>

<footer class="bg-slate-900 pt-16 pb-8 text-slate-300">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
			<div class="space-y-6">
				<a href="/" class="flex items-end gap-3 transition-opacity hover:opacity-90">
					<img src="/favicon.png" alt="STEMAX Logo" class="h-10 w-10 brightness-0 invert" />
					<div class="flex flex-col">
						<span class="font-heading text-2xl leading-none font-bold tracking-tight text-white">
							STEMAX
						</span>
						<span
							class="pt-1 text-xs leading-none font-light tracking-widest uppercase"
							style="color: {colors.primaryLight}"
						>
							Clinical Research
						</span>
					</div>
				</a>
				<p class="text-sm leading-relaxed">
					Accelerating clinical development with integrity, speed, and patient-centric care.
					Providing quality healthcare services across the UK since 2007.
				</p>
				<div class="flex gap-4">
					<a href="#" class="transition-colors hover:text-white"><Twitter class="h-5 w-5" /></a>
					<a href="#" class="transition-colors hover:text-white"><Linkedin class="h-5 w-5" /></a>
					<a href="#" class="transition-colors hover:text-white"><Facebook class="h-5 w-5" /></a>
				</div>
			</div>

			<div>
				<h3 class="mb-6 text-sm font-bold tracking-wider text-white uppercase">Navigation</h3>
				<ul class="space-y-4 text-sm">
					{#each siteLinks as link}
						<li>
							<a
								href={link.href}
								class="flex items-center gap-2 transition-colors hover:text-white"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h3 class="mb-6 text-sm font-bold tracking-wider text-white uppercase">
					Find & Contact Us
				</h3>
				<ul class="space-y-4 text-sm">
					<li class="flex items-start gap-3">
						<MapPin class="h-5 w-5 shrink-0" style="color: {colors.primaryLight}" />
						<span>Milton Keynes, MK19 6FG</span>
					</li>
					<li class="flex items-center gap-3">
						<Phone class="h-5 w-5 shrink-0" style="color: {colors.primaryLight}" />
						<a href="tel:+441908032992" class="hover:text-white">+44 (0) 1908 03 2992 </a>
					</li>
					<li class="flex items-center gap-3">
						<Mail class="h-5 w-5 shrink-0" style="color: {colors.primaryLight}" />
						<a href="mailto:info@stemaxconsult.com" class="hover:text-white"
							>cyprel@stemaxconsult.com</a
						>
					</li>
				</ul>
			</div>

			<div>
				<h3 class="mb-6 text-sm font-bold tracking-wider text-white uppercase">Regulatory</h3>
				<div class="space-y-4">
					<p class="text-xs">Regulated by Care Quality Commission</p>
					<a
						href="https://www.cqc.org.uk/provider/1-7805398732/registration-info"
						target="_blank"
						rel="noopener noreferrer"
						class="group inline-block"
					>
						<img
							src="/cqc.png"
							alt="CQC Regulated"
							class="h-10 w-auto border border-slate-700 bg-white p-1 transition-colors group-hover:border-emerald-500"
						/>
					</a>
					<div class="pt-2 text-xs text-slate-500">
						<p>VAT: GB116 9732 02</p>
						<p>Companies House: 07708197</p>
					</div>
				</div>
			</div>
		</div>

		<div
			class="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 md:flex-row"
		>
			<p class="text-xs text-slate-500">
				&copy; {currentYear} Stemax Clinical Research. All rights reserved.
			</p>
			<ul class="flex gap-6 text-xs">
				{#each legalLinks as link}
					<li><a href={link.href} class="transition-colors hover:text-white">{link.label}</a></li>
				{/each}
			</ul>
		</div>
	</div>
</footer>
