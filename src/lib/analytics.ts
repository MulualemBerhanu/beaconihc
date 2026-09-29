type AnalyticsEvent =
  | "phone_click"
  | "email_click"
  | "primary_cta_click"
  | "contact_cta_click"
  | "contact_form_start"
  | "contact_form_submit"
  | "contact_form_success"
  | "contact_form_error"
  | "service_view"
  | "service_engagement";

type EventPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Track anonymized interaction events only.
 * Never send form message content, emails, phone numbers, or other PII.
 */
export function trackEvent(event: AnalyticsEvent, payload: EventPayload = {}) {
  if (typeof window === "undefined") return;

  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!measurementId || !window.gtag) return;

  // Never send contact-form fields or other PII to analytics
  const blocked = /^(email|phone|message|name|first.?name|last.?name|address|content|value|query)$/i;
  const safePayload: EventPayload = {};
  for (const [key, value] of Object.entries(payload)) {
    if (blocked.test(key)) continue;
    if (typeof value === "string" && (value.includes("@") || /^\+?\d[\d\s().-]{6,}$/.test(value))) {
      continue;
    }
    safePayload[key] = value;
  }

  window.gtag("event", event, safePayload);
}
