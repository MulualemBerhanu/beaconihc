import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { whyBeaconContent } from "@/content/why-beacon";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Button } from "@/components/ui/Button";
import { PageCTA } from "@/components/sections/PageCTA";
import { WhyListening } from "@/components/sections/WhyListening";
import { WhyPrinciples } from "@/components/sections/WhyPrinciples";

export const metadata: Metadata = {
  title: { absolute: "Why Beacon | Beacon In-Home Care" },
  description:
    "Learn how Beacon In-Home Care approaches support with listening, dignity, independence, reliable care, family connection, and professionalism.",
  alternates: { canonical: `${siteConfig.url}/why-beacon` },
  openGraph: {
    title: "Why Beacon | Beacon In-Home Care",
    description:
      "Care should fit the person, not the other way around. Discover Beacon’s approach to the care experience.",
    url: `${siteConfig.url}/why-beacon`,
  },
};

export default function WhyBeaconPage() {
  const { hero, dignity, family, beaconIdea, cta } = whyBeaconContent;

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(165deg,#f4f0e8_0%,#fbf9f6_45%,#e8eee9_100%)] pt-28 pb-16 sm:pt-32 lg:pb-0 lg:pt-0">
        <div className="noise-overlay opacity-[0.04]" />
        <div
          className="atmosphere-orb top-20 left-10 size-[22rem] bg-[radial-gradient(circle,rgba(196,163,90,0.12),transparent_70%)]"
          aria-hidden
        />
        <div className="lg:grid lg:min-h-[88vh] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative flex items-center px-4 py-10 sm:px-6 lg:px-10 xl:px-16 lg:py-28">
            <Reveal>
              <div className="mx-auto max-w-xl lg:mx-0">
                <div className="inline-flex items-center gap-3">
                  <span className="gold-rule" aria-hidden />
                  <SectionLabel className="!gap-0 before:hidden">
                    {hero.label}
                  </SectionLabel>
                </div>
                <h1 className="mt-6 font-serif text-[2.2rem] leading-[1.12] tracking-tight text-primary sm:text-[2.75rem] lg:text-[3.05rem]">
                  {hero.title}
                </h1>
                <p className="mt-6 text-[1.125rem] leading-relaxed text-text-muted sm:text-[1.1875rem]">
                  {hero.description}
                </p>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Button href={hero.primary.href} size="lg">
                    {hero.primary.label}
                  </Button>
                  <Link
                    href={hero.secondary.href}
                    className="group inline-flex items-center gap-2 border-b border-primary/20 pb-1 text-[0.9375rem] font-semibold text-primary transition-colors hover:border-secondary hover:text-secondary"
                  >
                    {hero.secondary.label}
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <div className="image-frame relative mx-4 aspect-[4/5] shadow-[var(--shadow-lift)] sm:mx-6 lg:mx-0 lg:aspect-auto lg:h-full lg:min-h-[88vh] lg:rounded-none">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 55vw"
                className="object-cover object-[50%_25%]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent lg:bg-gradient-to-l"
                aria-hidden
              />
            </div>
          </Reveal>
        </div>
      </section>

      <WhyListening />
      <WhyPrinciples />

      <section className="relative overflow-hidden bg-background section-space">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <div className="mb-5 h-px w-14 bg-[var(--gold)]/70" aria-hidden />
              <h2 className="text-balance font-serif text-3xl leading-tight text-primary sm:text-4xl lg:text-[2.85rem]">
                {dignity.title}
              </h2>
              <p className="mt-5 text-[1.125rem] leading-relaxed text-text-muted">
                {dignity.description}
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-2 lg:gap-6">
            {dignity.images.map((image, index) => (
              <Reveal key={image.src} delay={index * 0.06}>
                <div
                  className={`image-frame relative shadow-[var(--shadow-soft)] ${image.className}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 48vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-cream section-space">
        <div
          className="atmosphere-orb bottom-0 -right-20 size-[24rem] bg-[radial-gradient(circle,rgba(106,132,160,0.12),transparent_70%)]"
          aria-hidden
        />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <ImageReveal
                src={family.image.src}
                alt={family.image.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="image-frame relative aspect-[4/5] shadow-[var(--shadow-lift)]"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <div>
                <SectionLabel>{family.label}</SectionLabel>
                <h2 className="mt-5 text-balance font-serif text-3xl leading-tight text-primary sm:text-4xl">
                  {family.title}
                </h2>
                <p className="mt-5 text-[1.125rem] leading-relaxed text-text-muted">
                  {family.description}
                </p>
                <Button href={family.cta.href} className="mt-8" showArrow>
                  {family.cta.label}
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-primary py-24 text-text-inverse lg:py-32">
        <div className="noise-overlay opacity-[0.06]" />
        <div
          className="atmosphere-orb top-1/4 right-[10%] size-56 bg-[radial-gradient(circle,rgba(196,163,90,0.16),transparent_70%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-1/2 right-[8%] size-64 -translate-y-1/2 rounded-full border border-[var(--gold)]/20"
          aria-hidden
        />
        <Container className="relative">
          <Reveal>
            <div className="max-w-3xl">
              <div className="mb-8 flex items-center gap-3" aria-hidden>
                <span className="h-px w-14 bg-[var(--gold)]/80" />
                <span className="size-1.5 rounded-full bg-[var(--gold)]/70" />
              </div>
              {beaconIdea.lines.map((line) => (
                <p
                  key={line}
                  className="font-serif text-3xl leading-tight sm:text-4xl lg:text-[3.05rem]"
                >
                  {line}
                </p>
              ))}
              <p className="mt-8 max-w-2xl text-[1.125rem] leading-relaxed text-sand/95">
                {beaconIdea.description}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <div
        className="h-3 bg-[linear-gradient(180deg,var(--cream)_0%,var(--background)_100%)]"
        aria-hidden
      />

      <PageCTA
        title={cta.title}
        description={cta.description}
        primary={cta.primary}
        secondary={cta.secondary}
        location="why_beacon_cta"
      />
    </>
  );
}
