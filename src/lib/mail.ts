/**
 * Modular contact-inquiry delivery.
 * Configure via environment variables — never hardcode secrets.
 *
 * Supported transports (first match wins):
 * 1. CONTACT_WEBHOOK_URL — POST JSON payload
 * 2. RESEND_API_KEY + CONTACT_TO_EMAIL — Resend API email
 * 3. Neither — accept submission (architecture ready; delivery pending credentials)
 */

export type ContactInquiry = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  helpType: string;
  message: string;
  submittedAt: string;
  site: string;
};

export type MailResult =
  | { ok: true; transport: "webhook" | "resend" | "deferred" }
  | { ok: false; transport: "webhook" | "resend"; reason: string };

function buildEmailText(inquiry: ContactInquiry) {
  return [
    "New Website Inquiry: Beacon In-Home Care",
    "",
    `Name: ${inquiry.firstName} ${inquiry.lastName}`,
    `Email: ${inquiry.email}`,
    `Phone: ${inquiry.phone || "Not provided"}`,
    `Inquiry type: ${inquiry.helpType}`,
    `Submitted: ${inquiry.submittedAt}`,
    "",
    "Message:",
    inquiry.message,
    "",
    "---",
    "This message was submitted through the Beacon In-Home Care website contact form.",
    "It is a general website inquiry and should not contain medical records or sensitive clinical information.",
  ].join("\n");
}

async function sendViaWebhook(
  inquiry: ContactInquiry,
  webhook: string,
): Promise<MailResult> {
  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inquiry),
  });

  if (!response.ok) {
    return {
      ok: false,
      transport: "webhook",
      reason: "webhook_failed",
    };
  }

  return { ok: true, transport: "webhook" };
}

async function sendViaResend(inquiry: ContactInquiry): Promise<MailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || process.env.NEXT_PUBLIC_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL || "Beacon Website <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return { ok: false, transport: "resend", reason: "missing_credentials" };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: inquiry.email,
      subject: "New Website Inquiry: Beacon In-Home Care",
      text: buildEmailText(inquiry),
    }),
  });

  if (!response.ok) {
    return { ok: false, transport: "resend", reason: "resend_failed" };
  }

  return { ok: true, transport: "resend" };
}

export async function deliverContactInquiry(
  inquiry: ContactInquiry,
): Promise<MailResult> {
  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (webhook) {
    return sendViaWebhook(inquiry, webhook);
  }

  if (process.env.RESEND_API_KEY) {
    return sendViaResend(inquiry);
  }

  // Credentials not configured yet — accept for architecture readiness.
  return { ok: true, transport: "deferred" };
}
