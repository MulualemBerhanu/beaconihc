import { media } from "@/content/media";

export const trustIndicators = [
  {
    title: "Compassionate Support",
    description: "Care centered around each individual.",
  },
  {
    title: "Professional Care",
    description: "Dependable support from people who care.",
  },
  {
    title: "Independence",
    description: "Supporting dignity, confidence, and choice.",
  },
  {
    title: "Family Connection",
    description: "Supporting clients and the people who love them.",
  },
] as const;

export const whyBeaconThemes = [
  {
    title: "Individualized support",
    description:
      "Care begins with listening to routines, preferences, concerns, and what home means to each person.",
  },
  {
    title: "Respect and dignity",
    description:
      "Every interaction is guided by respect for privacy, autonomy, and the lived experience of the individual.",
  },
  {
    title: "Independence",
    description:
      "The goal is not to take over. It is to help people continue living with confidence and choice.",
  },
  {
    title: "Reliable care",
    description:
      "Families need consistency they can count on. Dependable support creates room to breathe.",
  },
  {
    title: "Family connection",
    description:
      "When families are part of the journey, clear and thoughtful communication helps everyone stay aligned.",
  },
  {
    title: "Professionalism",
    description:
      "Warmth and professionalism work together as calm, capable care that feels both human and trustworthy.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Talk With Us",
    description:
      "Tell Beacon about your situation, questions, and support needs.",
  },
  {
    number: "02",
    title: "Understand Your Needs",
    description:
      "Beacon learns more about the individual and the type of support that may be appropriate.",
  },
  {
    number: "03",
    title: "Begin Your Care Journey",
    description:
      "Move forward with a care approach centered around the individual.",
  },
] as const;

/**
 * TESTIMONIAL CONTENT REQUIRED
 * Do not invent testimonials. Keep this empty until client-approved quotes exist.
 * The public UI will hide the section until `items` contains approved content.
 */
export const testimonials = {
  status: "pending" as const,
  // TESTIMONIAL CONTENT REQUIRED
  items: [] as Array<{
    id: string;
    quote: string;
    attribution: string;
  }>,
};

/**
 * Care-specific photography only.
 * Prefer local media from /public (see media.ts).
 */
export const images = {
  heroPrimary: {
    src: media.companionshipAlbum.src,
    alt: media.companionshipAlbum.alt,
  },
  heroSecondary: {
    src: media.companionshipPuzzle.src,
    alt: media.companionshipPuzzle.alt,
  },
  story: {
    src: media.mealSupport.src,
    alt: media.mealSupport.alt,
  },
  philosophy: {
    src: media.homeArrival.src,
    alt: media.homeArrival.alt,
  },
  whyBeacon: {
    src: media.mobilitySupport.src,
    alt: media.mobilitySupport.alt,
  },
} as const;
