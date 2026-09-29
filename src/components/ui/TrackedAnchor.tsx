"use client";

import { trackEvent } from "@/lib/analytics";

type TrackedEvent =
  | "phone_click"
  | "email_click"
  | "primary_cta_click"
  | "contact_cta_click";

export function TrackedAnchor({
  href,
  event,
  location,
  className,
  children,
}: {
  href: string;
  event: TrackedEvent;
  location: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => trackEvent(event, { location })}
    >
      {children}
    </a>
  );
}
