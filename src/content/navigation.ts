/**
 * Site navigation — Phase 3 routes live.
 */

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Beacon", href: "/why-beacon" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Beacon", href: "/why-beacon" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
] as const;

export const primaryCta = {
  label: "Speak With Our Team",
  href: "/contact",
} as const;
