import type { Metadata } from "next";
import Image from "next/image";
import { services, servicesPage } from "@/content/services";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Button } from "@/components/ui/Button";
import { ServiceNav } from "@/components/sections/ServiceNav";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { PageCTA } from "@/components/sections/PageCTA";

export const metadata: Metadata = {
  title: {
    absolute: "In-Home Care Services | Beacon In-Home Care",
  },
  description:
    "Explore Beacon In-Home Care services including housekeeping and companionship, personal care, transportation, medication support, and professional nursing services.",
  alternates: { canonical: `${siteConfig.url}/services` },
  openGraph: {
    title: "In-Home Care Services | Beacon In-Home Care",
    description:
      "Support designed around the way you live: compassionate in-home services for everyday comfort, dignity, and independence.",
    url: `${siteConfig.url}/services`,
  },
};

export default function ServicesPage() {
  const { hero, intro, unsure, closing } = servicesPage;

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(155deg,#fbf9f6_0%,#f4f0e8_48%,#e8eee9_100%)] pt-28 pb-12 sm:pt-32 lg:pb-16 lg:pt-36">
        <div className="noise-overlay opacity-[0.04]" />
        <div
          className="atmosphere-orb -top-24 right-0 size-[26rem] bg-[radial-gradient(circle,rgba(111,130,111,0.16),transparent_70%)]"
          aria-hidden
        />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <Reveal>
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-3">
                  <span className="gold-rule" aria-hidden />
                  <SectionLabel className="!gap-0 before:hidden">
                    {hero.label}
                  </SectionLabel>
                </div>
                <h1 className="mt-6 font-serif text-[2.25rem] leading-[1.12] tracking-tight text-primary sm:text-[2.85rem] lg:text-[3.1rem]">
                  {hero.title}
                </h1>
                <p className="mt-6 max-w-xl text-[1.125rem] leading-relaxed text-text-muted sm:text-[1.1875rem]">
                  {hero.description}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ImageReveal
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="image-frame relative aspect-[5/4] shadow-[var(--shadow-lift)] lg:aspect-[4/5]"
                imageClassName="object-cover object-[50%_30%]"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <ServiceNav />

      <section className="relative bg-background pb-8 pt-12 lg:pb-10 lg:pt-14">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <SectionLabel>{intro.label}</SectionLabel>
              <h2 className="mt-5 text-balance font-serif text-3xl text-primary sm:text-4xl">
                {intro.title}
              </h2>
              <p className="mt-5 text-[1.125rem] leading-relaxed text-text-muted">
                {intro.description}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {services.map((service, index) => (
        <ServiceDetail
          key={service.id}
          service={service}
          compactTop={index === 0}
        />
      ))}

      <section className="relative overflow-hidden bg-cream">
        <div
          className="atmosphere-orb top-0 left-1/4 size-[22rem] bg-[radial-gradient(circle,rgba(196,163,90,0.1),transparent_70%)]"
          aria-hidden
        />
        <Container className="relative py-16 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <Reveal>
              <div className="max-w-xl">
                <SectionLabel>{unsure.label}</SectionLabel>
                <h2 className="mt-5 text-balance font-serif text-3xl leading-tight text-primary sm:text-4xl lg:text-[2.75rem]">
                  {unsure.title}
                </h2>
                <p className="mt-5 text-[1.125rem] leading-relaxed text-text-muted">
                  {unsure.description}
                </p>
                <Button
                  href={unsure.cta.href}
                  size="lg"
                  className="mt-8"
                  showArrow
                >
                  {unsure.cta.label}
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="image-frame relative mx-auto aspect-[4/5] w-full max-w-md shadow-[var(--shadow-lift)] lg:mx-0 lg:max-w-none">
                <Image
                  src={unsure.image.src}
                  alt={unsure.image.alt}
                  fill
                  sizes="(max-width: 1024px) 80vw, 36vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <div
        className="h-3 bg-[linear-gradient(180deg,var(--cream)_0%,var(--background)_100%)]"
        aria-hidden
      />

      <PageCTA
        title={closing.title}
        primary={closing.primary}
        secondary={closing.secondary}
        location="services_cta"
      />
    </>
  );
}
