"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/content/site";
import { trackEvent } from "@/lib/analytics";
import { formatPhoneHref } from "@/lib/utils";

export function FinalCTA() {
  const {
    phone,
    phoneDisplay,
    email,
    emailDisplay,
    address,
    serviceArea,
  } = siteConfig.contact;

  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-hidden bg-primary py-24 text-text-inverse lg:py-32"
    >
      <div className="noise-overlay opacity-[0.07]" />
      <div
        className="atmosphere-orb -top-16 -right-20 size-[32rem] bg-[radial-gradient(circle,rgba(106,132,160,0.35),transparent_70%)]"
        aria-hidden
      />
      <div
        className="atmosphere-orb -bottom-24 -left-16 size-[26rem] bg-[radial-gradient(circle,rgba(111,130,111,0.28),transparent_70%)]"
        aria-hidden
      />
      <div
        className="atmosphere-orb top-1/3 left-1/3 size-48 bg-[radial-gradient(circle,rgba(196,163,90,0.16),transparent_70%)]"
        aria-hidden
      />

      <Container className="relative">
        <Reveal>
          <div className="grid gap-14 lg:grid-cols-[1.25fr_0.85fr] lg:items-center lg:gap-16">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-12 bg-[var(--gold)]/75" aria-hidden />
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sand">
                  Next Step
                </p>
              </div>
              <h2 className="text-balance font-serif text-3xl leading-tight sm:text-4xl lg:text-[3rem]">
                Looking for care for yourself or someone you love?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sand/95 sm:text-[1.2rem]">
                You don&apos;t need to have everything figured out before
                reaching out. Our team is here to answer questions and help you
                understand your options.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  onClick={() => {
                    trackEvent("primary_cta_click", { location: "final_cta" });
                    trackEvent("contact_cta_click", { location: "final_cta" });
                  }}
                >
                  Speak With Our Team
                </Button>
                {phone ? (
                  <Button
                    href={formatPhoneHref(phone)}
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-text-inverse hover:border-white/55 hover:bg-white/5"
                    onClick={() =>
                      trackEvent("phone_click", { location: "final_cta" })
                    }
                  >
                    Call {phoneDisplay}
                  </Button>
                ) : (
                  <Button
                    href={email ? `mailto:${email}` : "/contact"}
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-text-inverse hover:border-white/55 hover:bg-white/5"
                  >
                    Contact Us
                  </Button>
                )}
              </div>
            </div>

            <div className="rounded-[var(--radius-xl)] border border-white/15 bg-warm-white/[0.08] p-7 shadow-[var(--shadow-soft)] backdrop-blur-[6px] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sand">
                Reach Beacon
              </p>
              <ul className="mt-6 space-y-5 text-[0.975rem] text-sand/95">
                <li className="flex gap-3">
                  <Phone
                    className="mt-0.5 size-4 shrink-0 text-[var(--gold)]"
                    aria-hidden
                  />
                  <span>{phone ? phoneDisplay : "Call Beacon for support"}</span>
                </li>
                <li className="flex gap-3">
                  <Mail
                    className="mt-0.5 size-4 shrink-0 text-[var(--gold)]"
                    aria-hidden
                  />
                  <span>
                    {email ? emailDisplay : "Email Beacon for support"}
                  </span>
                </li>
                <li className="flex gap-3">
                  <MapPin
                    className="mt-0.5 size-4 shrink-0 text-[var(--gold)]"
                    aria-hidden
                  />
                  <span>{address || serviceArea || "Happy Valley, Oregon"}</span>
                </li>
              </ul>
              {serviceArea && address ? (
                <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-relaxed text-sand/75">
                  {serviceArea}
                </p>
              ) : null}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
