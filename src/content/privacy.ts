/**
 * Privacy Policy content architecture.
 *
 * LEGAL / CLIENT APPROVAL REQUIRED:
 * Do not invent legally binding policy language.
 * Replace `status: "pending"` sections with client-approved text before treating
 * this as Beacon’s published privacy policy.
 *
 * Public page renders architecture + a clear pending notice — not fabricated legal copy.
 */

export type PrivacySection = {
  id: string;
  title: string;
  /** Approved body paragraphs. Empty while pending client approval. */
  paragraphs: string[];
  status: "approved" | "pending";
};

export const privacyPage = {
  title: "Privacy Policy",
  description:
    "Information about how Beacon In-Home Care handles information submitted through this website.",
  /**
   * Do not invent a date. Leave empty until Beacon provides an approved last-updated date.
   */
  lastUpdated: "" as string,
  pendingNotice:
    "Beacon is preparing the full Privacy Policy language for this website. The section outline below shows what the completed policy will cover. Approved policy text will replace this notice once provided by Beacon.",
  /**
   * Factual technology notes for reviewers — not legal policy language.
   * These describe what the site is built to support once Beacon approves final wording.
   */
  technologyNotes: [
    "Website contact form submissions are processed on the server. Delivery uses configured environment credentials (for example a webhook or email provider) and is not handled in the browser.",
    "Optional website analytics may be enabled via environment configuration. Analytics events are limited to page and interaction signals and are not intended to include contact-form field values.",
    "Spam-resistance measures for the contact form may include server-side validation, rate limiting, a honeypot field, and submission timing checks.",
  ],
  contactPrompt:
    "Questions about privacy on this website can be directed to Beacon using the contact details below.",
  sections: [
    {
      id: "information-we-collect",
      title: "Information We Collect",
      paragraphs: [] as string[],
      status: "pending" as PrivacySection["status"],
    },
    {
      id: "how-information-is-used",
      title: "How Information Is Used",
      paragraphs: [] as string[],
      status: "pending" as PrivacySection["status"],
    },
    {
      id: "website-contact-forms",
      title: "Website Contact Forms",
      paragraphs: [] as string[],
      status: "pending" as PrivacySection["status"],
    },
    {
      id: "cookies-and-analytics",
      title: "Cookies and Analytics",
      paragraphs: [] as string[],
      status: "pending" as PrivacySection["status"],
    },
    {
      id: "third-party-services",
      title: "Third-Party Services",
      paragraphs: [] as string[],
      status: "pending" as PrivacySection["status"],
    },
    {
      id: "information-security",
      title: "Information Security",
      paragraphs: [] as string[],
      status: "pending" as PrivacySection["status"],
    },
    {
      id: "links-to-other-websites",
      title: "Links to Other Websites",
      paragraphs: [] as string[],
      status: "pending" as PrivacySection["status"],
    },
    {
      id: "childrens-privacy",
      title: "Children’s Privacy",
      paragraphs: [] as string[],
      status: "pending" as PrivacySection["status"],
    },
    {
      id: "changes-to-this-policy",
      title: "Changes to This Policy",
      paragraphs: [] as string[],
      status: "pending" as PrivacySection["status"],
    },
    {
      id: "contact-us",
      title: "Contact Us",
      paragraphs: [] as string[],
      status: "pending" as PrivacySection["status"],
    },
  ] satisfies PrivacySection[],
};
