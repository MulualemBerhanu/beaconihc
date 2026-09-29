"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { images } from "@/content/home";
import { siteConfig } from "@/content/site";
import { trackEvent } from "@/lib/analytics";
import { formatPhoneHref } from "@/lib/utils";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : 48],
  );
  const fadeOut = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);
  const phone = siteConfig.contact.phone;

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden bg-[linear-gradient(155deg,#fbf9f6_0%,#f4f0e8_42%,#e8eee9_100%)] pt-28 pb-16 sm:pt-32 lg:flex lg:min-h-[100svh] lg:items-center lg:pb-20 lg:pt-28"
    >
      <div className="noise-overlay opacity-[0.04]" />
      <div
        className="atmosphere-orb -top-24 -right-20 size-[28rem] bg-[radial-gradient(circle,rgba(106,132,160,0.22),transparent_70%)]"
        aria-hidden
      />
      <div
        className="atmosphere-orb bottom-0 -left-24 size-[22rem] bg-[radial-gradient(circle,rgba(111,130,111,0.18),transparent_70%)]"
        aria-hidden
      />
      <div
        className="atmosphere-orb top-1/3 right-1/4 size-40 bg-[radial-gradient(circle,rgba(196,163,90,0.14),transparent_70%)]"
        aria-hidden
      />

      <Container className="relative grid w-full items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-10 xl:gap-16">
        <motion.div className="relative z-10 max-w-xl" style={{ opacity: fadeOut }}>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3"
          >
            <span className="gold-rule" aria-hidden />
            <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-secondary sm:text-sm">
              Compassionate In-Home Care
            </span>
          </motion.div>

          <motion.div
            className="mt-7"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-serif text-[2.35rem] leading-none tracking-[-0.02em] text-primary sm:text-[2.75rem]">
              <span className="relative inline-block">
                Beacon
                <motion.span
                  className="absolute -bottom-1.5 left-0 h-[2px] origin-left rounded-full bg-[var(--gold)]"
                  initial={reduceMotion ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ width: "100%" }}
                  aria-hidden
                />
              </span>
            </p>
            <p className="mt-3 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-secondary sm:text-[0.75rem]">
              In-Home Care
            </p>
          </motion.div>

          <motion.h1
            className="mt-8 max-w-md font-serif text-[1.85rem] leading-[1.2] tracking-tight text-primary sm:text-[2.15rem] lg:text-[2.35rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block">Care that feels personal.</span>
            <span className="mt-2 block font-serif italic text-navy-soft">
              Support that feels like home.
            </span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-md text-pretty text-[1.125rem] leading-relaxed text-text-muted sm:text-[1.2rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            Professional, compassionate support designed to help individuals live
            safely, confidently, and independently in the comfort of home.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button
              href="/contact"
              size="lg"
              onClick={() => {
                trackEvent("primary_cta_click", { location: "home_hero" });
                trackEvent("contact_cta_click", { location: "home_hero" });
              }}
            >
              Speak With Our Team
            </Button>
            <Button href="/services" variant="outline" size="lg" showArrow>
              Explore Our Services
            </Button>
          </motion.div>

          <motion.div
            className="mt-9 flex items-center gap-4 border-t border-border/80 pt-7"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.42 }}
          >
            {phone ? (
              <a
                href={formatPhoneHref(phone)}
                onClick={() =>
                  trackEvent("phone_click", { location: "home_hero" })
                }
                className="inline-flex items-center gap-2.5 text-[0.9375rem] font-medium text-text-muted transition-colors hover:text-primary"
              >
                <span className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-warm-white text-secondary shadow-[var(--shadow-subtle)]">
                  <Phone className="size-3.5" aria-hidden />
                </span>
                Call {siteConfig.contact.phoneDisplay}
              </a>
            ) : (
              <p className="text-[0.9375rem] text-text-subtle">
                Prefer to talk first?{" "}
                <Link
                  href="/contact"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  Reach our team
                </Link>
                .
              </p>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
          style={{ y: imageY }}
        >
          <motion.div
            className="image-frame relative aspect-[4/5] shadow-[var(--shadow-lift)] sm:aspect-[5/6]"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={images.heroPrimary.src}
              alt={images.heroPrimary.alt}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 48vw"
              className="object-cover object-[50%_28%]"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent"
              aria-hidden
            />
          </motion.div>

          <motion.div
            className="absolute -bottom-3 left-3 w-[46%] overflow-hidden rounded-[1.1rem] border-[3px] border-background shadow-[var(--shadow-lift)] sm:-bottom-5 sm:-left-6 sm:w-[42%]"
            initial={reduceMotion ? false : { opacity: 0, y: 28, x: -12 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{
              duration: 0.95,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={images.heroSecondary.src}
                alt={images.heroSecondary.alt}
                fill
                sizes="(max-width: 768px) 42vw, 20vw"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
