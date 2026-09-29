"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { contactPage } from "@/content/contact";
import { siteConfig } from "@/content/site";
import { trackEvent } from "@/lib/analytics";
import { formatPhoneHref } from "@/lib/utils";

function mapsUrl(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function ContactChannels() {
  const {
    phone,
    phoneDisplay,
    phoneSecondary,
    phoneSecondaryDisplay,
    email,
    emailDisplay,
    address,
  } = siteConfig.contact;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-2xl text-primary sm:text-[1.75rem]">
          Reach Beacon directly
        </h2>
        <p className="mt-3 text-[1.0625rem] leading-relaxed text-text-muted">
          Prefer to talk first? Call or email using the details below.
        </p>
      </div>

      <ul className="space-y-6">
        <li>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-secondary">
            Call Us
          </p>
          <div className="mt-2 flex items-start gap-3">
            <Phone className="mt-1 size-4 shrink-0 text-secondary" aria-hidden />
            <div className="space-y-1">
              {phone ? (
                <a
                  href={formatPhoneHref(phone)}
                  onClick={() =>
                    trackEvent("phone_click", { location: "contact_page" })
                  }
                  className="block text-lg font-medium text-primary transition-colors hover:text-secondary"
                >
                  {phoneDisplay}
                </a>
              ) : (
                <span className="text-text-muted">Call Beacon for support</span>
              )}
              {phoneSecondary ? (
                <a
                  href={formatPhoneHref(phoneSecondary)}
                  onClick={() =>
                    trackEvent("phone_click", {
                      location: "contact_page_secondary",
                    })
                  }
                  className="block text-lg font-medium text-primary transition-colors hover:text-secondary"
                >
                  {phoneSecondaryDisplay}
                </a>
              ) : null}
            </div>
          </div>
        </li>

        <li>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-secondary">
            Email Us
          </p>
          <div className="mt-2 flex items-start gap-3">
            <Mail className="mt-1 size-4 shrink-0 text-secondary" aria-hidden />
            {email ? (
              <a
                href={`mailto:${email}`}
                onClick={() =>
                  trackEvent("email_click", { location: "contact_page" })
                }
                className="text-lg font-medium text-primary transition-colors hover:text-secondary"
              >
                {emailDisplay}
              </a>
            ) : (
              <span className="text-text-muted">Email Beacon for support</span>
            )}
          </div>
        </li>

        <li>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-secondary">
            Visit / Mailing Address
          </p>
          <div className="mt-2 flex items-start gap-3">
            <MapPin
              className="mt-1 size-4 shrink-0 text-secondary"
              aria-hidden
            />
            <div>
              <p className="text-lg leading-snug text-primary">
                {address || "Happy Valley, Oregon"}
              </p>
              {address ? (
                <a
                  href={mapsUrl(address)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex text-[0.9375rem] font-semibold text-primary underline-offset-4 hover:underline"
                >
                  {contactPage.directionsLabel} →
                </a>
              ) : null}
            </div>
          </div>
        </li>
      </ul>

      <p className="rounded-[var(--radius-md)] border border-border bg-cream/70 px-4 py-3 text-sm leading-relaxed text-text-subtle">
        {contactPage.emergencyNotice}
      </p>
    </div>
  );
}
