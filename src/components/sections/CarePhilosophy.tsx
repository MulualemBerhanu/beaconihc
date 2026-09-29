"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Container } from "@/components/ui/Container";
import { images } from "@/content/home";

export function CarePhilosophy() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [reduceMotion ? 0 : -36, reduceMotion ? 0 : 36],
  );

  return (
    <section ref={ref} className="relative isolate overflow-hidden">
      <motion.div className="absolute inset-0 -z-10 scale-110" style={{ y }}>
        <Image
          src={images.philosophy.src}
          alt={images.philosophy.alt}
          fill
          sizes="100vw"
          className="object-cover object-[50%_45%]"
          priority={false}
        />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(26,39,68,0.88)_0%,rgba(26,39,68,0.62)_48%,rgba(26,39,68,0.45)_100%)]" />
      </motion.div>

      <Container className="relative flex min-h-[32rem] items-center py-28 lg:min-h-[40rem] lg:py-36">
        <motion.div
          className="max-w-2xl text-text-inverse"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-[var(--gold)]/80" aria-hidden />
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sand">
              Care Philosophy
            </p>
          </div>
          <h2 className="font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-[3.55rem]">
            Your home.
            <br />
            Your routine.
            <br />
            Your choices.
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-text-inverse/92 sm:text-[1.25rem]">
            Quality care should support a person&apos;s life, independence,
            comfort, and dignity, not take control of it.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
