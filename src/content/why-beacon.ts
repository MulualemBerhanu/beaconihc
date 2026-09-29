/**
 * Why Beacon page content.
 * No statistics, credentials, or unverified claims.
 */

import { media } from "@/content/media";

export const whyBeaconContent = {
  hero: {
    label: "Why Beacon",
    title: "Care should fit the person, not the other way around.",
    description:
      "Every person has their own routines, preferences, relationships, and way of living. Beacon approaches support by first understanding what matters to the individual and the people around them.",
    primary: { label: "Speak With Our Team", href: "/contact" },
    secondary: { label: "Explore Our Services", href: "/services" },
    image: {
      src: media.homeArrival.src,
      alt: media.homeArrival.alt,
    },
  },
  listening: {
    label: "Our Approach",
    title: "Good care starts by listening.",
    intro:
      "Support should begin with understanding the person, not with a checklist of tasks. That means paying attention to daily routines, preferences, comfort, individual choices, relationships, and what independence means to them.",
    phrases: [
      "Your routine.",
      "Your preferences.",
      "Your comfort.",
      "Your choices.",
      "Your relationships.",
      "Your life.",
    ],
    closing: "Care begins by understanding all of it.",
  },
  principles: {
    label: "What Guides Us",
    stickyTitle: "A care experience shaped around the person.",
    stickyDescription:
      "These principles describe how Beacon approaches the relationship of care: steadily, respectfully, and with attention to what matters at home.",
    items: [
      {
        number: "01",
        title: "Individualized Support",
        description:
          "Support begins by understanding the individual’s routines, preferences, concerns, and what matters to them.",
        image: {
          src: media.companionshipAlbum.src,
          alt: media.companionshipAlbum.alt,
        },
      },
      {
        number: "02",
        title: "Respect & Dignity",
        description:
          "Every interaction should respect privacy, autonomy, culture, and individual choice.",
        image: {
          src: media.mealSupport.src,
          alt: media.mealSupport.alt,
        },
      },
      {
        number: "03",
        title: "Independence",
        description:
          "Support should help people continue participating in their lives with confidence and choice.",
        image: {
          src: media.mobilitySupport.src,
          alt: media.mobilitySupport.alt,
        },
      },
      {
        number: "04",
        title: "Reliable Care",
        description:
          "Individuals and families should know what to expect from the people supporting them.",
        image: {
          src: media.companionshipPuzzle.src,
          alt: media.companionshipPuzzle.alt,
        },
      },
      {
        number: "05",
        title: "Family Connection",
        description:
          "Thoughtful communication can help families remain connected and informed.",
        image: {
          src: media.transportationAssist.src,
          alt: media.transportationAssist.alt,
        },
      },
      {
        number: "06",
        title: "Professionalism",
        description:
          "Care should feel warm and human while also being responsible, respectful, and professional.",
        image: {
          src: media.careTeam.src,
          alt: media.careTeam.alt,
        },
      },
    ],
  },
  dignity: {
    title: "Dignity lives in the everyday moments.",
    description:
      "Care is often found in ordinary parts of the day: a conversation, preparing for an appointment, completing a familiar routine, getting outside, or simply having someone nearby.",
    images: [
      {
        src: media.housekeepingKitchen.src,
        alt: media.housekeepingKitchen.alt,
        className: "aspect-[4/5] lg:col-span-1",
      },
      {
        src: media.mobilitySupport.src,
        alt: media.mobilitySupport.alt,
        className: "aspect-[5/4] lg:col-span-1 lg:mt-16",
      },
      {
        src: media.transportationAssist.src,
        alt: media.transportationAssist.alt,
        className: "aspect-[16/10] lg:col-span-2",
      },
    ],
  },
  family: {
    label: "For Families",
    title: "Support for someone you love should feel understandable.",
    description:
      "Families often have questions when exploring care. You should feel comfortable asking about available services, everyday support, individual needs, routines, preferences, communication, and how to get started.",
    cta: { label: "Talk With Our Team", href: "/contact" },
    image: {
      src: media.companionshipAlbum.src,
      alt: media.companionshipAlbum.alt,
    },
  },
  beaconIdea: {
    lines: ["A steady presence.", "A clearer way forward."],
    description:
      "A beacon offers guidance when the path feels uncertain, and reassurance that someone is there. That idea shapes how Beacon approaches care: with calm direction, human connection, and dependable support.",
  },
  cta: {
    title: "The right care begins with the right conversation.",
    description:
      "Tell us what you’re looking for, what matters to you, and what questions you have.",
    primary: { label: "Speak With Our Team", href: "/contact" },
    secondary: { label: "View Our Services", href: "/services" },
  },
} as const;
