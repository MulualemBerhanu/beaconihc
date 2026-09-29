/**
 * Service catalog for homepage preview + Services page.
 * Categories verified against beaconihc.com/our-service/.
 *
 * Verified: housekeeping, companionship, laundry, transportation
 * (shopping, errands, appointments), personal care including
 * medication reminding, medication services, nursing services.
 *
 * Do not invent clinical procedures, mileage, or credentials.
 */

import { media } from "@/content/media";

export type ServiceInfoRow = {
  title: string;
  description: string;
};

export type Service = {
  id: string;
  slug: string;
  number: string;
  name: string;
  shortName: string;
  navLabel: string;
  headline: string;
  summary: string;
  description: string;
  details: string[];
  /** Editorial info rows for informational layouts (e.g. medication) */
  infoRows?: ServiceInfoRow[];
  /** Soft public note — never expose internal confirmation markers */
  publicNote?: string;
  layout: "image-left" | "image-right" | "cinematic" | "informational" | "editorial";
  image: {
    src: string;
    alt: string;
  };
  href: string;
};

export const services: Service[] = [
  {
    id: "housekeeping-companionship",
    slug: "housekeeping-companionship",
    number: "01",
    name: "Housekeeping & Companionship",
    shortName: "Housekeeping & Companionship",
    navLabel: "Housekeeping & Companionship",
    headline: "Helping everyday life feel a little easier.",
    summary:
      "Everyday household help and meaningful presence that make home feel lighter, warmer, and more livable.",
    description:
      "Light housekeeping, laundry, shopping support, and companionship make daily life feel more manageable. Companionship is more than presence. It can mean conversation, engagement, and meaningful human connection.",
    details: [
      "Light housekeeping and everyday household routines",
      "Laundry support",
      "Companionship and conversation",
      "Shopping support and errands",
    ],
    layout: "image-left",
    image: {
      src: media.housekeepingKitchen.src,
      alt: media.housekeepingKitchen.alt,
    },
    href: "/services#housekeeping-companionship",
  },
  {
    id: "personal-care",
    slug: "personal-care",
    number: "02",
    name: "Personal Care Support",
    shortName: "Personal Care Support",
    navLabel: "Personal Care Support",
    headline: "Personal support delivered with dignity and respect.",
    summary:
      "Respectful assistance designed to support dignity, comfort, safety, and independence.",
    description:
      "Everyday personal-care routines are supported with privacy, patience, and regard for individual choice. The goal is assistance that protects dignity while encouraging independence wherever possible.",
    details: [
      "Assistance shaped around everyday personal-care routines",
      "Support that protects privacy and dignity",
      "Medication reminding as part of personal care",
      "Care centered on comfort, choice, and independence",
    ],
    layout: "image-right",
    image: {
      src: media.mobilitySupport.src,
      alt: media.mobilitySupport.alt,
    },
    href: "/services#personal-care",
  },
  {
    id: "transportation",
    slug: "transportation",
    number: "03",
    name: "Transportation Services",
    shortName: "Transportation Services",
    navLabel: "Transportation Services",
    headline: "Helping people stay connected beyond home.",
    summary:
      "Support that helps people stay connected to shopping, errands, appointments, and community life.",
    description:
      "Transportation support can make it easier to manage everyday responsibilities such as shopping, errands, and appointments, and remain connected to community life beyond the front door.",
    details: [
      "Transportation for shopping",
      "Support with everyday errands",
      "Rides to appointments",
      "Help remaining connected beyond the front door",
    ],
    layout: "cinematic",
    image: {
      src: media.transportationAssist.src,
      alt: media.transportationAssist.alt,
    },
    href: "/services#transportation",
  },
  {
    id: "medication-support",
    slug: "medication-support",
    number: "04",
    name: "Medication Support",
    shortName: "Medication Support",
    navLabel: "Medication Support",
    headline: "Medication support with clarity and care.",
    summary:
      "Support related to medication reminding and medication services, offered with care and clarity.",
    description:
      "Beacon’s services include medication reminding as part of personal care, as well as medication services as a distinct offering. Families can talk with our team about what support may be appropriate for their situation.",
    details: [],
    infoRows: [
      {
        title: "Medication Reminders",
        description:
          "Support with medication reminders as part of an individual’s everyday routine.",
      },
      {
        title: "Clear Communication",
        description:
          "Thoughtful communication regarding the support Beacon provides.",
      },
      {
        title: "Individualized Support",
        description:
          "Medication-related support can be discussed with Beacon based on the individual’s needs and available services.",
      },
    ],
    publicNote:
      "Specific medication-service details can be discussed with our team.",
    layout: "informational",
    image: {
      src: media.companionshipAlbum.src,
      alt: media.companionshipAlbum.alt,
    },
    href: "/services#medication-support",
  },
  {
    id: "nursing",
    slug: "nursing",
    number: "05",
    name: "Professional Nursing Services",
    shortName: "Professional Nursing Services",
    navLabel: "Professional Nursing Services",
    headline: "Professional support in the comfort of home.",
    summary:
      "Professional nursing support delivered with calm reassurance in the comfort of home.",
    description:
      "Beacon offers professional nursing support in the home. Because each person’s situation and care needs are different, our team can discuss available nursing services and help determine what support may be appropriate.",
    details: [
      "Professional nursing support in the home",
      "Care discussed with individuals and families",
      "Support that respects comfort, dignity, and home routines",
    ],
    layout: "editorial",
    image: {
      src: media.careTeam.src,
      alt: media.careTeam.alt,
    },
    href: "/services#nursing",
  },
];

export const servicesPage = {
  hero: {
    label: "Our Services",
    title: "Support designed around the way you live.",
    description:
      "Beacon provides in-home support intended to help individuals maintain comfort, dignity, independence, safety, and connection in everyday life.",
    image: {
      src: media.companionshipPuzzle.src,
      alt: media.companionshipPuzzle.alt,
    },
  },
  intro: {
    label: "Person-Centered Support",
    title: "The right support looks different for everyone.",
    description:
      "Individual needs, routines, preferences, and circumstances differ. Beacon focuses on understanding the person and providing appropriate support, rather than presenting care as one-size-fits-all.",
  },
  unsure: {
    label: "Finding the Right Support",
    title: "Not sure what kind of support you need?",
    description:
      "You don’t need to determine the exact service before reaching out. Tell us a little about your situation, ask questions, and our team can help you understand which available services may fit your needs.",
    image: {
      src: media.mealSupport.src,
      alt: media.mealSupport.alt,
    },
    cta: { label: "Talk With Our Team", href: "/contact" },
  },
  closing: {
    title: "Let’s talk about the support that fits your life.",
    primary: { label: "Speak With Our Team", href: "/contact" },
    secondary: { label: "Contact Us", href: "/contact" },
  },
} as const;
