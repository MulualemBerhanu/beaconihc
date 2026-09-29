"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type PageCTAProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  className?: string;
  location?: string;
};

export function PageCTA({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  className,
  location = "page_cta",
}: PageCTAProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-primary py-24 text-text-inverse lg:py-28",
        className,
      )}
    >
      <div className="noise-overlay opacity-[0.07]" />
      <div
        className="atmosphere-orb -top-16 -right-16 size-[28rem] bg-[radial-gradient(circle,rgba(106,132,160,0.32),transparent_70%)]"
        aria-hidden
      />
      <div
        className="atmosphere-orb -bottom-20 left-10 size-[22rem] bg-[radial-gradient(circle,rgba(196,163,90,0.14),transparent_70%)]"
        aria-hidden
      />
      <Container className="relative">
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-12 bg-[var(--gold)]/75" aria-hidden />
              {eyebrow ? (
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sand">
                  {eyebrow}
                </p>
              ) : null}
            </div>
            <h2 className="text-balance font-serif text-3xl leading-tight sm:text-4xl lg:text-[2.85rem]">
              {title}
            </h2>
            {description ? (
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sand/95">
                {description}
              </p>
            ) : null}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href={primary.href}
                variant="secondary"
                size="lg"
                onClick={() => {
                  trackEvent("primary_cta_click", { location });
                  trackEvent("contact_cta_click", { location });
                }}
              >
                {primary.label}
              </Button>
              {secondary ? (
                <Button
                  href={secondary.href}
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-text-inverse hover:border-white/55 hover:bg-white/5"
                >
                  {secondary.label}
                </Button>
              ) : null}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
