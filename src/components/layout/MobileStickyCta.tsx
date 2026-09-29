"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/content/site";
import { trackEvent } from "@/lib/analytics";
import { formatPhoneHref } from "@/lib/utils";

export function MobileStickyCta() {
  const phone = siteConfig.contact.phone;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-md lg:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        {phone ? (
          <a
            href={formatPhoneHref(phone)}
            onClick={() =>
              trackEvent("phone_click", { location: "mobile_sticky" })
            }
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] border border-border-strong text-sm font-medium text-primary"
          >
            <Phone className="size-4" aria-hidden />
            Call
          </a>
        ) : (
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-md)] border border-border-strong text-sm font-medium text-primary"
          >
            Contact
          </Link>
        )}
        <Link
          href="/contact"
          onClick={() => {
            trackEvent("primary_cta_click", { location: "mobile_sticky" });
            trackEvent("contact_cta_click", { location: "mobile_sticky" });
          }}
          className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-md)] bg-primary text-sm font-medium text-text-inverse"
        >
          Speak With Us
        </Link>
      </div>
    </div>
  );
}
