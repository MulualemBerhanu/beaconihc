/**
 * Contact page copy and form configuration.
 * Contact details come from siteConfig — never hardcode here.
 */

export const contactPage = {
  hero: {
    label: "Contact Beacon",
    title: "Let’s start with a conversation.",
    description:
      "Whether you’re exploring support for yourself or someone you love, we’re here to hear your questions and help you understand the available options.",
  },
  emergencyNotice:
    "This contact form is not intended for medical emergencies. If you are experiencing an emergency, call 911.",
  successMessage:
    "Thank you for reaching out. Your message has been received.",
  directionsLabel: "Get Directions",
} as const;

export const contactHelpOptions = [
  { value: "looking-for-care", label: "I'm looking for care" },
  {
    value: "looking-for-someone-else",
    label: "I'm looking for care for someone else",
  },
  {
    value: "question-about-services",
    label: "I have a question about services",
  },
  { value: "general-question", label: "I have a general question" },
  { value: "other", label: "Other" },
] as const;

export type ContactHelpValue = (typeof contactHelpOptions)[number]["value"];
