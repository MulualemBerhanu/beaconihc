"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";
import { whyBeaconContent } from "@/content/why-beacon";
import { cn } from "@/lib/utils";

const { principles } = whyBeaconContent;

export function WhyPrinciples() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const nodes = principles.items.map((_, index) =>
      document.getElementById(`principle-${index}`),
    );

    const update = () => {
      let current = 0;
      nodes.forEach((el, index) => {
        if (!el) return;
        if (el.getBoundingClientRect().top <= 280) current = index;
      });
      setActiveIndex(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const activeImage = principles.items[activeIndex]?.image;

  return (
    <section className="bg-cream section-space">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionLabel>{principles.label}</SectionLabel>
              <h2 className="mt-4 max-w-md font-serif text-3xl leading-tight text-primary sm:text-4xl">
                {principles.stickyTitle}
              </h2>
              <p className="mt-5 max-w-md text-[1.125rem] leading-relaxed text-text-muted">
                {principles.stickyDescription}
              </p>
            </Reveal>
            {activeImage ? (
              <div className="image-frame relative mt-10 hidden aspect-[4/5] shadow-[var(--shadow-lift)] lg:block">
                  <Image
                    key={activeImage.src}
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    sizes="36vw"
                    className="object-cover transition-opacity duration-500"
                  />
                </div>
            ) : null}
          </div>

          <div className="relative">
            <div
              className="absolute top-3 bottom-3 left-[1.15rem] hidden w-px bg-border-strong sm:block"
              aria-hidden
            />
            <ol className="space-y-0">
              {principles.items.map((item, index) => (
                <li
                  key={item.number}
                  id={`principle-${index}`}
                  className="scroll-mt-36"
                >
                  <Reveal delay={index * 0.03}>
                    <article
                      className={cn(
                        "relative grid gap-3 border-t border-border-strong/80 py-8 sm:grid-cols-[4.5rem_1fr] sm:gap-6 sm:pl-2",
                        index === principles.items.length - 1 && "border-b",
                        activeIndex === index && "bg-warm-white/50",
                      )}
                    >
                      <div className="relative">
                        <span
                          className={cn(
                            "absolute top-2 left-[0.85rem] hidden size-2.5 -translate-x-1/2 rounded-full border-2 border-cream sm:block",
                            activeIndex === index
                              ? "bg-secondary"
                              : "bg-border-strong",
                          )}
                          aria-hidden
                        />
                    <p className="font-serif text-3xl text-[var(--gold)]/80 sm:text-[2.35rem]">
                      {item.number}
                    </p>
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl text-primary sm:text-[1.75rem]">
                          {item.title}
                        </h3>
                        <p className="mt-3 max-w-xl text-[1.0625rem] leading-relaxed text-text-muted sm:text-[1.125rem]">
                          {item.description}
                        </p>
                        <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-[var(--radius-lg)] lg:hidden">
                          <Image
                            src={item.image.src}
                            alt={item.image.alt}
                            fill
                            sizes="90vw"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
