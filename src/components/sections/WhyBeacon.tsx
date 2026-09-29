import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { images, whyBeaconThemes } from "@/content/home";

export function WhyBeacon() {
  return (
    <section
      id="why-beacon"
      className="relative scroll-mt-28 overflow-hidden bg-background section-space"
    >
      <div
        className="atmosphere-orb bottom-0 -left-24 size-[24rem] bg-[radial-gradient(circle,rgba(106,132,160,0.12),transparent_70%)]"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionLabel>Why Beacon</SectionLabel>
              <h2 className="mt-5 text-balance font-serif text-3xl leading-[1.12] text-primary sm:text-4xl lg:text-[2.85rem]">
                Care built around the person, not the process.
              </h2>
              <p className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-text-muted sm:text-lg">
                Families look for more than a list of tasks. They look for people
                who will treat someone they love with steadiness, respect, and
                genuine care.
              </p>
              <Link
                href="/why-beacon"
                className="group mt-7 inline-flex items-center gap-2 border-b border-primary/20 pb-1 text-[0.9375rem] font-semibold text-primary transition-colors hover:border-secondary hover:text-secondary"
              >
                Explore why families choose Beacon
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
              <div className="image-frame relative mt-10 aspect-[4/5] shadow-[var(--shadow-lift)]">
                <Image
                  src={images.whyBeacon.src}
                  alt={images.whyBeacon.alt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 36vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div>
            {whyBeaconThemes.map((theme, index) => (
              <Reveal key={theme.title} delay={index * 0.04}>
                <article
                  className={`group grid gap-4 border-t border-border-strong/80 py-8 transition-colors duration-300 sm:grid-cols-[5rem_1fr] hover:bg-cream/40 ${
                    index === whyBeaconThemes.length - 1 ? "border-b" : ""
                  }`}
                >
                  <p className="font-serif text-3xl text-[var(--gold)]/80 transition-colors group-hover:text-[var(--gold)] sm:text-[2.5rem]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="font-serif text-2xl text-primary sm:text-[1.75rem]">
                      {theme.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-[1.0625rem] leading-relaxed text-text-muted">
                      {theme.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
