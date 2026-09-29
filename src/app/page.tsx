import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { StorySection } from "@/components/sections/StorySection";
import { ServicesExperience } from "@/components/sections/ServicesExperience";
import { WhyBeacon } from "@/components/sections/WhyBeacon";
import { CarePhilosophy } from "@/components/sections/CarePhilosophy";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} | Compassionate In-Home Support`,
  },
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: `${siteConfig.name} | Compassionate In-Home Support`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <StorySection />
      <ServicesExperience />
      <WhyBeacon />
      <CarePhilosophy />
      <ProcessTimeline />
      <TestimonialSection />
      <FinalCTA />
    </>
  );
}
