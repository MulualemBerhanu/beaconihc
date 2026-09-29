"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/content/home";

export function ProcessTimeline() {
  return (
    <section className="relative overflow-hidden bg-background section-space">
      <div
        className="atmosphere-orb top-0 right-0 size-[20rem] bg-[radial-gradient(circle,rgba(196,163,90,0.08),transparent_70%)]"
        aria-hidden
      />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Getting Started"
            title="Getting started should feel simple."
            description="You do not need every answer before reaching out. Beacon walks with families through the first conversations with clarity and care."
          />
        </Reveal>

        <div className="relative mt-16">
          <div
            className="absolute top-5 bottom-5 left-[1.35rem] w-px bg-gradient-to-b from-[var(--gold)]/60 via-border-strong to-border md:top-[1.4rem] md:right-0 md:bottom-auto md:left-[1.4rem] md:h-px md:w-[calc(100%-2.8rem)] md:bg-gradient-to-r md:from-[var(--gold)]/70 md:via-border-strong md:to-border"
            aria-hidden
          />

          <ol className="relative grid gap-14 md:grid-cols-3 md:gap-12">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.1}>
                <li className="group relative pl-14 md:pl-0">
                  <span className="absolute top-0 left-0 z-10 flex size-11 items-center justify-center rounded-full border border-[var(--gold)]/40 bg-background font-serif text-sm text-primary shadow-[var(--shadow-subtle)] transition-transform duration-500 group-hover:scale-105 md:relative md:mb-8 md:size-12">
                    {step.number}
                  </span>
                  <h3 className="font-serif text-2xl text-primary sm:text-[1.75rem]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-[1.0625rem] leading-relaxed text-text-muted">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
