import type { Metadata } from "next";
import Image from "next/image";
import { aboutContent } from "@/content/about";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { PageCTA } from "@/components/sections/PageCTA";

export const metadata: Metadata = {
  title: {
    absolute: "About Beacon In-Home Care",
  },
  description:
    "Learn about Beacon In-Home Care, an Oregon in-home care organization focused on compassionate, respectful, individualized support that honors dignity and independence at home.",
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: "About Beacon In-Home Care",
    description:
      "Care centered around people. Guided by compassion. Discover Beacon’s story, philosophy, mission, and values.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  const {
    hero,
    story,
    meaning,
    philosophy,
    mission,
    vision,
    values,
    valuesImage,
    dignity,
    cta,
  } = aboutContent;

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(155deg,#fbf9f6_0%,#f4f0e8_50%,#e8eee9_100%)] pt-28 pb-16 sm:pt-32 lg:pb-28 lg:pt-36">
        <div className="noise-overlay opacity-[0.04]" />
        <div
          className="atmosphere-orb -top-20 -right-16 size-[26rem] bg-[radial-gradient(circle,rgba(106,132,160,0.2),transparent_70%)]"
          aria-hidden
        />
        <div
          className="atmosphere-orb bottom-10 -left-20 size-[20rem] bg-[radial-gradient(circle,rgba(196,163,90,0.12),transparent_70%)]"
          aria-hidden
        />
        <Container className="relative">
          <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Reveal>
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-3">
                  <span className="gold-rule" aria-hidden />
                  <SectionLabel className="!gap-0 before:hidden">
                    {hero.label}
                  </SectionLabel>
                </div>
                <h1 className="mt-6 whitespace-pre-line font-serif text-[2.25rem] leading-[1.12] tracking-tight text-primary sm:text-[2.85rem] lg:text-[3.15rem]">
                  {hero.title}
                </h1>
                <p className="mt-6 max-w-xl text-[1.125rem] leading-relaxed text-text-muted sm:text-[1.1875rem]">
                  {hero.description}
                </p>
                <p className="mt-8 border-l-2 border-[var(--gold)] pl-5 font-serif text-xl italic leading-snug text-primary sm:text-[1.3rem]">
                  {hero.supportingStatement}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative">
                <div
                  className="absolute -top-5 -left-5 hidden size-24 rounded-full border border-[var(--gold)]/25 lg:block"
                  aria-hidden
                />
                <ImageReveal
                  src={hero.image.src}
                  alt={hero.image.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  className="image-frame relative aspect-[4/5] shadow-[var(--shadow-lift)] sm:aspect-[5/6]"
                  imageClassName="object-cover object-[50%_25%]"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-background section-space">
        <div
          className="atmosphere-orb top-1/3 -right-28 size-[24rem] bg-[radial-gradient(circle,rgba(111,130,111,0.1),transparent_70%)]"
          aria-hidden
        />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <Reveal>
              <div>
                <SectionLabel>{story.label}</SectionLabel>
                <h2 className="mt-5 max-w-xl text-balance font-serif text-3xl leading-[1.12] text-primary sm:text-4xl lg:text-[2.75rem]">
                  {story.title}
                </h2>
                <div className="prose-beacon mt-7 max-w-xl">
                  {story.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="lg:order-first">
              <ImageReveal
                src={story.image.src}
                alt={story.image.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="image-frame relative aspect-[4/5] shadow-[var(--shadow-soft)]"
                imageClassName="object-cover object-[40%_30%]"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-primary py-24 text-text-inverse lg:py-32">
        <div className="noise-overlay opacity-[0.06]" />
        <div
          className="atmosphere-orb top-0 right-0 size-[28rem] bg-[radial-gradient(circle,rgba(196,163,90,0.14),transparent_70%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-1/2 right-[6%] hidden h-72 w-40 -translate-y-1/2 opacity-[0.08] lg:block"
          aria-hidden
        >
          <svg viewBox="0 0 80 160" fill="none" className="h-full w-full">
            <path d="M40 8 L52 36 H28 L40 8Z" stroke="#c4a35a" strokeWidth="1.25" />
            <rect x="34" y="36" width="12" height="88" stroke="#c4a35a" strokeWidth="1.25" />
            <path d="M22 124 H58 L64 148 H16 L22 124Z" stroke="#c4a35a" strokeWidth="1.25" />
          </svg>
        </div>
        <div
          className="pointer-events-none absolute top-1/2 right-[4%] size-64 -translate-y-1/2 rounded-full border border-[var(--gold)]/20"
          aria-hidden
        />
        <Container className="relative">
          <Reveal>
            <div className="max-w-3xl">
              <div className="mb-7 flex items-center gap-3" aria-hidden>
                <span className="h-px w-14 bg-[var(--gold)]/80" />
                <span className="size-1.5 rounded-full bg-[var(--gold)]/70" />
              </div>
              <h2 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-[2.95rem]">
                {meaning.title}
              </h2>
              <div className="mt-7 max-w-2xl space-y-4 text-[1.125rem] leading-relaxed text-sand/95 sm:text-[1.2rem]">
                {meaning.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-cream section-space">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <SectionLabel>Care Philosophy</SectionLabel>
              <h2 className="mt-5 text-balance font-serif text-3xl text-primary sm:text-4xl lg:text-[2.75rem]">
                {philosophy.title}
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 space-y-0 md:mt-14">
            {philosophy.items.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="group grid gap-3 border-t border-border-strong/80 py-8 transition-colors duration-300 md:grid-cols-[11rem_1fr] md:gap-12 md:py-9 hover:bg-warm-white/70">
                  <p className="font-serif text-2xl text-[var(--gold)] transition-colors group-hover:text-primary md:text-[1.65rem]">
                    {item.title}
                  </p>
                  <p className="max-w-2xl text-[1.125rem] leading-relaxed text-text-muted md:pt-1.5">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
            <div className="border-t border-border-strong/80" />
          </div>
        </Container>
      </section>

      <section className="bg-background section-space">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-0">
            <Reveal>
              <article className="max-w-lg lg:pr-14 xl:pr-20">
                <SectionLabel>{mission.label}</SectionLabel>
                <p className="mt-7 font-serif text-[1.35rem] leading-snug text-primary sm:text-[1.55rem]">
                  {mission.text}
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="max-w-lg border-t border-border-strong/80 pt-12 lg:border-t-0 lg:border-l-2 lg:border-[var(--gold)]/40 lg:pt-0 lg:pl-14 xl:pl-20">
                <SectionLabel>{vision.label}</SectionLabel>
                <p className="mt-7 font-serif text-[1.35rem] leading-snug text-primary sm:text-[1.55rem]">
                  {vision.text}
                </p>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-cream section-space">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <SectionLabel>Core Values</SectionLabel>
                <h2 className="mt-5 font-serif text-3xl text-primary sm:text-4xl">
                  What guides every visit
                </h2>
                <p className="mt-5 max-w-md text-[1.125rem] leading-relaxed text-text-muted">
                  These values shape how Beacon approaches individuals,
                  families, and the everyday work of care.
                </p>
                <div className="image-frame relative mt-10 hidden aspect-[4/5] shadow-[var(--shadow-lift)] lg:block">
                  <Image
                    src={valuesImage.src}
                    alt={valuesImage.alt}
                    fill
                    sizes="36vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <div>
              {values.map((value, index) => (
                <Reveal key={value.title} delay={index * 0.04}>
                  <article
                    className={`group grid gap-3 border-t border-border-strong/80 py-8 transition-colors duration-300 sm:grid-cols-[5.5rem_1fr] sm:gap-6 hover:bg-warm-white/60 ${
                      index === values.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <p className="font-serif text-4xl leading-none text-[var(--gold)]/75 transition-colors group-hover:text-[var(--gold)] sm:text-[2.75rem]">
                      {value.number}
                    </p>
                    <div>
                      <h3 className="font-serif text-[1.65rem] text-primary sm:text-[1.85rem]">
                        {value.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-[1.0625rem] leading-relaxed text-text-muted sm:text-[1.125rem]">
                        {value.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={dignity.image.src}
            alt={dignity.image.alt}
            fill
            sizes="100vw"
            className="object-cover object-[50%_35%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(26,39,68,0.84)_0%,rgba(26,39,68,0.55)_55%,rgba(26,39,68,0.4)_100%)]" />
        </div>
        <Container className="relative flex min-h-[28rem] items-center py-28 lg:min-h-[34rem]">
          <Reveal>
            <div className="mb-5 h-px w-14 bg-[var(--gold)]/75" aria-hidden />
            <h2 className="max-w-3xl font-serif text-3xl leading-tight text-text-inverse sm:text-4xl lg:text-[3.1rem]">
              {dignity.statement}
            </h2>
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
        location="about_cta"
      />
    </>
  );
}
