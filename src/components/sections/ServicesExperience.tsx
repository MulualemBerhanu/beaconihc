"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServiceSelector } from "@/components/sections/ServiceSelector";
import { services } from "@/content/services";

export function ServicesExperience() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active =
    services.find((service) => service.id === activeId) ?? services[0];
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="relative scroll-mt-28 overflow-hidden bg-cream section-space"
    >
      <div
        className="atmosphere-orb -top-20 left-1/4 size-[30rem] bg-[radial-gradient(circle,rgba(111,130,111,0.14),transparent_70%)]"
        aria-hidden
      />
      <Container className="relative">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <SectionLabel>Services</SectionLabel>
              <h2 className="mt-5 text-balance font-serif text-3xl leading-[1.12] text-primary sm:text-4xl lg:text-[2.85rem]">
                Support shaped around everyday life at home.
              </h2>
              <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-text-muted sm:text-lg">
                From companionship to professional nursing support, each service
                is designed to strengthen independence, comfort, and connection.
              </p>
            </div>
            <Button
              href="/services"
              variant="outline"
              showArrow
              className="self-start lg:self-auto"
            >
              View All Services
            </Button>
          </div>
        </Reveal>

        <div className="mt-16 hidden lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <Reveal>
            <div className="image-frame relative aspect-[4/5] bg-cream-deep shadow-[var(--shadow-lift)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  className="absolute inset-0"
                  initial={
                    reduceMotion ? false : { opacity: 0, scale: 1.04 }
                  }
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={active.image.src}
                    alt={active.image.alt}
                    fill
                    sizes="44vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"
                    aria-hidden
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 z-10 p-7">
                <p className="font-serif text-sm text-sand">{active.number}</p>
                <p className="mt-1 font-serif text-2xl text-text-inverse">
                  {active.name}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col justify-center">
            <ServiceSelector activeId={activeId} onSelect={setActiveId} />
          </div>
        </div>

        <div className="mt-12 space-y-14 lg:hidden">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.05}>
              <article>
                <div className="image-frame relative aspect-[16/11]">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="90vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-5 font-serif text-sm text-[var(--gold)]">
                  {service.number}
                </p>
                <h3 className="mt-1 font-serif text-2xl text-primary">
                  {service.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-text-muted">
                  {service.summary}
                </p>
                <a
                  href={service.href}
                  className="mt-4 inline-flex text-[0.9375rem] font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Learn more
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
