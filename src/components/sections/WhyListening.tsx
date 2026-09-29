"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";
import { whyBeaconContent } from "@/content/why-beacon";

const { listening } = whyBeaconContent;

export function WhyListening() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background section-space">
      <div
        className="atmosphere-orb top-10 -left-20 size-[22rem] bg-[radial-gradient(circle,rgba(111,130,111,0.1),transparent_70%)]"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <div className="max-w-xl">
              <SectionLabel>{listening.label}</SectionLabel>
              <h2 className="mt-5 text-balance font-serif text-3xl leading-tight text-primary sm:text-4xl lg:text-[2.75rem]">
                {listening.title}
              </h2>
              <p className="mt-6 text-[1.125rem] leading-relaxed text-text-muted sm:text-[1.1875rem]">
                {listening.intro}
              </p>
            </div>
          </Reveal>

          <div className="lg:pt-4">
            <ul className="space-y-0">
              {listening.phrases.map((phrase, index) => (
                <motion.li
                  key={phrase}
                  initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="border-b border-border py-4 font-serif text-2xl text-primary transition-colors hover:text-navy-soft sm:text-[1.85rem]"
                >
                  {phrase}
                </motion.li>
              ))}
            </ul>
            <Reveal delay={0.2}>
              <p className="mt-8 border-l-2 border-[var(--gold)] pl-5 font-serif text-xl italic leading-snug text-primary sm:text-[1.35rem]">
                {listening.closing}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
