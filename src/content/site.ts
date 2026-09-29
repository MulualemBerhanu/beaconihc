/**
 * Central site configuration.
 * Contact details sourced from the currently published beaconihc.com contact page.
 * Do not invent licenses, certifications, stats, or unverified credentials.
 */

export const siteConfig = {
  name: "Beacon In-Home Care",
  legalName: "Beacon Care LLC",
  shortName: "Beacon",
  tagline: "Care that feels personal. Support that feels like home.",
  description:
    "Professional, compassionate in-home care designed to help individuals live safely, confidently, and independently in the comfort of home.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://beaconihc.com",
  logoPath: "/beacon-logo.png",
  location: {
    city: "Happy Valley",
    state: "Oregon",
    stateAbbr: "OR",
    postalCode: "97086",
    streetAddress: "9844 SE Kela Ct",
    country: "US",
  },
  developer: {
    name: "AdiTeke Software Solutions",
    credit: "Designed & Developed by AdiTeke Software Solutions",
    url: "https://aditeke.com",
  },
  contact: {
    /** Published on beaconihc.com/contact-us/ */
    phone: process.env.NEXT_PUBLIC_PHONE || "5034771571",
    phoneDisplay:
      process.env.NEXT_PUBLIC_PHONE_DISPLAY || "(503) 477-1571",
    phoneSecondary: process.env.NEXT_PUBLIC_PHONE_SECONDARY || "9712359248",
    phoneSecondaryDisplay:
      process.env.NEXT_PUBLIC_PHONE_SECONDARY_DISPLAY || "(971) 235-9248",
    email: process.env.NEXT_PUBLIC_EMAIL || "info@beaconihc.com",
    emailDisplay:
      process.env.NEXT_PUBLIC_EMAIL || "info@beaconihc.com",
    address:
      process.env.NEXT_PUBLIC_ADDRESS ||
      "9844 SE Kela Ct, Happy Valley, OR 97086",
    serviceArea:
      process.env.NEXT_PUBLIC_SERVICE_AREA ||
      "Serving individuals and families in Oregon",
    hours: process.env.NEXT_PUBLIC_HOURS || "",
  },
} as const;

export const brandStatement =
  "Compassionate support designed around the people, families, and communities we serve.";
