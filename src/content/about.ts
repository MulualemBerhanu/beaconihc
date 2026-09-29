/**
 * About page content.
 * Verified: founded by two healthcare professionals; 30 years combined nursing experience;
 * mission/vision/values from beaconihc.com.
 * Banned: invented credentials, fabricated client counters, unsupported certifications.
 */

import { media } from "@/content/media";

export const aboutContent = {
  hero: {
    label: "About Beacon",
    title: "Care centered around people.\nGuided by compassion.",
    description:
      "Beacon In-Home Care provides compassionate, respectful, individualized support that helps people maintain dignity, independence, comfort, and connection in their everyday lives.",
    supportingStatement: "Compassionate care centered around each individual.",
    image: {
      src: media.companionshipPuzzle.src,
      alt: media.companionshipPuzzle.alt,
    },
  },
  story: {
    label: "Our Story",
    title: "A belief that care should always feel personal.",
    paragraphs: [
      "Beacon In-Home Care was founded in Oregon by two dedicated healthcare professionals who share a simple belief: every individual deserves compassionate, reliable, and dignified care in the place they feel safest, their home. With more than 30 years of combined nursing experience, our founders bring a deep understanding of what quality care truly means.",
      "Their backgrounds span the full spectrum of healthcare, from hands-on direct caregiving to advanced clinical practice across multiple settings. This breadth of experience shapes Beacon’s approach: clinically informed, person-centered, culturally responsive, and grounded in respect for each individual’s story.",
      "At Beacon In-Home Care, support goes beyond tasks. We focus on building trust, promoting independence, and ensuring each person receives care tailored to their unique needs. Whether assisting with daily living, coordinating health needs, or offering companionship and stability, our team is committed to care that uplifts and empowers.",
    ],
    image: {
      src: media.mealSupport.src,
      alt: media.mealSupport.alt,
    },
  },
  meaning: {
    title: "A steady presence when support matters most.",
    paragraphs: [
      "A beacon is a steady light: guidance when the path feels uncertain, reassurance when families are seeking clarity, and a reliable presence when support is needed most.",
      "That idea shapes how Beacon approaches care: with calm direction, human connection, and a commitment to being dependable for the people and families we serve.",
    ],
  },
  philosophy: {
    title: "The person comes before the process.",
    items: [
      {
        title: "Listen",
        description:
          "Understand the person’s routines, preferences, concerns, and what matters most to them.",
      },
      {
        title: "Respect",
        description:
          "Support privacy, dignity, culture, autonomy, and individual choice.",
      },
      {
        title: "Support",
        description:
          "Provide appropriate assistance while encouraging independence wherever possible.",
      },
      {
        title: "Connect",
        description:
          "Recognize the importance of families, relationships, routines, and community.",
      },
    ],
  },
  mission: {
    label: "Our Mission",
    text: "To illuminate the caregiving journey by delivering compassionate, trauma-informed in-home care that honors each individual’s dignity, culture, and story. Care is clinically thoughtful, emotionally attuned, and grounded in respect.",
  },
  vision: {
    label: "Our Vision",
    text: "A care experience where homes radiate trust, resilience, and belonging, where support is delivered with integrity, clarity, and heart, and where care teams thrive in environments built on transparency, respect, and shared purpose.",
  },
  values: [
    {
      number: "01",
      title: "Dignity & Respect",
      description:
        "We honor each person’s story, culture, and autonomy across all stages of life.",
    },
    {
      number: "02",
      title: "Trauma-Informed Care",
      description:
        "We foster emotional safety and trust in every interaction.",
    },
    {
      number: "03",
      title: "Responsibility & Accountability",
      description:
        "We use thoughtful, structured approaches to support consistent and transparent care.",
    },
    {
      number: "04",
      title: "Team Safety & Cohesion",
      description:
        "We build an environment where caregivers can do their best work with clarity and support.",
    },
    {
      number: "05",
      title: "Continuous Growth",
      description:
        "We refine our tools and routines through reflection and experience.",
    },
  ],
  dignity: {
    statement:
      "Support should add to someone’s life, not take control of it.",
    image: {
      src: media.homeArrival.src,
      alt: media.homeArrival.alt,
    },
  },
  valuesImage: {
    src: media.careTeam.src,
    alt: media.careTeam.alt,
  },
  cta: {
    title: "Care begins with understanding the person.",
    description:
      "Whether you are exploring support for yourself or someone you love, Beacon welcomes your questions. Reach out to talk through the kind of help that may be a good fit.",
    primary: { label: "Speak With Our Team", href: "/contact" },
    secondary: { label: "Explore Our Services", href: "/services" },
  },
} as const;
