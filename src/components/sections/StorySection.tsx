import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { images } from "@/content/home";

export function StorySection() {
  return (
    <section
      id="story"
      className="relative scroll-mt-28 overflow-hidden bg-background section-space"
    >
      <div
        className="atmosphere-orb top-1/4 -right-32 size-[26rem] bg-[radial-gradient(circle,rgba(196,163,90,0.1),transparent_70%)]"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <div className="relative pb-10 sm:pb-8">
              <div className="absolute -top-4 -left-4 hidden size-28 rounded-full border border-[var(--gold)]/25 lg:block" aria-hidden />
              <ImageReveal
                src={images.story.src}
                alt={images.story.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 44vw"
                className="image-frame relative aspect-[4/5]"
                imageClassName="object-cover object-[40%_30%]"
              />
              <div className="absolute bottom-2 right-3 max-w-[16rem] rounded-[var(--radius-lg)] border border-white/10 bg-primary/95 px-5 py-4 text-text-inverse shadow-[var(--shadow-lift)] backdrop-blur-sm sm:right-6">
                <div className="mb-2 h-px w-8 bg-[var(--gold)]/70" aria-hidden />
                <p className="font-serif text-lg leading-snug">
                  Connected to home, family, and everyday life.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <SectionLabel>Our Approach</SectionLabel>
              <h2 className="mt-5 max-w-lg text-balance font-serif text-3xl leading-[1.12] text-primary sm:text-4xl lg:text-[2.85rem]">
                More than assistance. A relationship built on trust.
              </h2>
              <div className="prose-beacon mt-7 max-w-xl">
                <p>
                  When support is needed, the most meaningful care protects what
                  already matters: familiar routines, personal independence, and
                  the comfort of remaining at home.
                </p>
                <p>
                  Beacon helps individuals stay connected to their homes,
                  families, and communities while receiving the practical support
                  that makes daily life safer and more confident.
                </p>
              </div>
              <Link
                href="/about"
                className="group mt-9 inline-flex items-center gap-2 border-b border-primary/20 pb-1 text-[0.9375rem] font-semibold text-primary transition-colors hover:border-secondary hover:text-secondary"
              >
                Learn more about Beacon
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
