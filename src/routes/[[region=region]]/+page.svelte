<script>
	import AboutSection from '$lib/components/AboutSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import CtaSection from '$lib/components/CtaSection.svelte';
	import FeatureSection from '$lib/components/FeatureSection.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ServiceSection from '$lib/components/ServiceSection.svelte';
	import StatsSection from '$lib/components/StatsSection.svelte';
	import TestimonialSection from '$lib/components/TestimonialSection.svelte';
	import StudiesSection from '$lib/components/StudiesSection.svelte';
	import PVFSection from '$lib/components/PVFSection.svelte';
	import Location from '$lib/components/Location.svelte';
	import FAQSection from '$lib/components/FAQSection.svelte';
	import VolunteerExp from '$lib/components/VolunteerExp.svelte';
	import SponsorBanner from '$lib/components/SponsorBanner.svelte';
	import { partnerLogos } from '$lib/data';
</script>

<Hero />
<SponsorBanner logos={partnerLogos} />
<ServiceSection />
<PVFSection />
<Location />

<VolunteerExp />
<StudiesSection />
<TestimonialSection />
<FAQSection />
<Location />
