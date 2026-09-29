"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { trustIndicators } from "@/content/home";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function TrustStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="trust-heading"
      className="relative overflow-hidden border-y border-border-strong/50 bg-[linear-gradient(180deg,#fbf9f6_0%,#f4f0e8_55%,#eef2ef_100%)]"
    >
      <div className="noise-overlay opacity-[0.03]" />
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-px origin-center bg-gradient-to-r from-transparent via-[var(--gold)]/55 to-transparent"
        aria-hidden
        initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-8% 0px" }}
        transition={{ duration: 1.1, ease }}
      />
      <div
        className="atmosphere-orb -top-24 left-1/2 size-[28rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(196,163,90,0.12),transparent_70%)]"
        aria-hidden
      />
      <div
        className="atmosphere-orb -bottom-28 -right-16 size-[22rem] bg-[radial-gradient(circle,rgba(106,132,160,0.1),transparent_70%)]"
        aria-hidden
      />

      <Container className="relative py-16 lg:py-20">
        <motion.div
          className="mb-12 flex flex-col gap-4 sm:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-10"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.75, ease }}
        >
          <div className="max-w-xl">
            <SectionLabel>What Beacon stands for</SectionLabel>
            <h2
              id="trust-heading"
              className="mt-4 text-balance font-serif text-[1.85rem] leading-[1.15] tracking-tight text-primary sm:text-[2.15rem] lg:text-[2.35rem]"
            >
              Principles that shape every conversation and every visit.
            </h2>
          </div>
          <motion.p
            className="max-w-sm text-[0.9875rem] leading-relaxed text-text-muted lg:pb-1 lg:text-right"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
          >
            A calm foundation for care that feels personal, dependable, and
            respectful at home.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 sm:gap-x-0 sm:gap-y-10 lg:grid-cols-4 lg:gap-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-12% 0px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.12,
                delayChildren: reduceMotion ? 0 : 0.08,
              },
            },
          }}
        >
          {trustIndicators.map((item, index) => (
            <motion.article
              key={item.title}
              className={cn(
                "group relative h-full pt-1 sm:px-6 lg:px-8",
                index > 0 && "lg:border-l lg:border-border-strong/55",
                index % 2 === 1 &&
                  "sm:border-l sm:border-border-strong/55 lg:border-l",
              )}
              variants={{
                hidden: reduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 28 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.75, ease },
                },
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -4, transition: { duration: 0.35, ease } }
              }
            >
              <div className="flex items-center gap-3">
                <motion.span
                  className="font-serif text-[1.75rem] leading-none tracking-tight text-[var(--gold)] sm:text-[1.95rem]"
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.86 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: reduceMotion ? 0 : 0.15 + index * 0.1,
                    ease,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.span>
                <motion.span
                  className="h-px flex-1 origin-left bg-gradient-to-r from-[var(--gold)]/55 to-transparent"
                  aria-hidden
                  initial={reduceMotion ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.85,
                    delay: reduceMotion ? 0 : 0.28 + index * 0.1,
                    ease,
                  }}
                />
              </div>

              <h3 className="mt-5 font-serif text-[1.45rem] leading-snug tracking-tight text-primary transition-colors duration-300 group-hover:text-navy-soft sm:text-[1.55rem]">
                {item.title}
              </h3>
              <p className="mt-3 max-w-[16.5rem] text-[0.9875rem] leading-relaxed text-text-muted sm:text-[1.02rem]">
                {item.description}
              </p>

              <motion.span
                className="mt-6 block h-px w-8 origin-left bg-[var(--gold)]/60 transition-[width,background-color] duration-500 group-hover:w-14 group-hover:bg-[var(--gold)]"
                aria-hidden
                initial={reduceMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: reduceMotion ? 0 : 0.4 + index * 0.1,
                  ease,
                }}
              />
            </motion.article>
          ))}
        </motion.div>
      </Container>

      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-center bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent"
        aria-hidden
        initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay: 0.2, ease }}
      />
    </section>
  );
}
