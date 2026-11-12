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

/** Trim and strip wrapping quotes that hosting dashboards often include. */
function cleanEnv(value: string | undefined) {
  if (!value) return "";
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).trim();
  }
  return trimmed;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailText(inquiry: ContactInquiry) {
  return [
    "New website inquiry for Beacon In-Home Care",
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
    "Submitted through the Beacon In-Home Care website contact form.",
    "This is a general website inquiry and should not contain medical records or sensitive clinical information.",
  ].join("\n");
}

function buildEmailHtml(inquiry: ContactInquiry) {
  const rows = [
    ["Name", `${inquiry.firstName} ${inquiry.lastName}`],
    ["Email", inquiry.email],
    ["Phone", inquiry.phone || "Not provided"],
    ["Inquiry type", inquiry.helpType],
    ["Submitted", inquiry.submittedAt],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #1a2744; line-height: 1.5;">
      <h2 style="margin: 0 0 16px; font-size: 20px;">New website inquiry</h2>
      <p style="margin: 0 0 16px;">A visitor submitted the Beacon In-Home Care contact form.</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding: 8px 12px 8px 0; font-weight: 600; vertical-align: top;">${escapeHtml(label)}</td>
            <td style="padding: 8px 0; vertical-align: top;">${escapeHtml(value)}</td>
          </tr>`,
          )
          .join("")}
      </table>
      <p style="margin: 20px 0 8px; font-weight: 600;">Message</p>
      <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(inquiry.message)}</p>
      <p style="margin: 24px 0 0; font-size: 12px; color: #5a544c;">
        Submitted through the Beacon In-Home Care website contact form.
      </p>
    </div>
  `;
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
  const apiKey = cleanEnv(process.env.RESEND_API_KEY);
  const to =
    cleanEnv(process.env.CONTACT_TO_EMAIL) ||
    cleanEnv(process.env.NEXT_PUBLIC_EMAIL) ||
    "info@beaconihc.com";
  const from =
    cleanEnv(process.env.CONTACT_FROM_EMAIL) ||
    "Beacon In-Home Care <noreply@beaconihc.com>";

  if (!apiKey || !to) {
    console.error("[contact-mail] Missing Resend credentials");
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
      subject: "New website inquiry for Beacon In-Home Care",
      text: buildEmailText(inquiry),
      html: buildEmailHtml(inquiry),
    }),
  });

  const bodyText = await response.text();
  let parsed: { id?: string; message?: string; name?: string } = {};
  try {
    parsed = JSON.parse(bodyText) as typeof parsed;
  } catch {
    // non-JSON response
  }

  if (!response.ok) {
    // Safe server log for hosting dashboards (no message body / visitor PII beyond addresses already configured)
    console.error("[contact-mail] Resend failed", {
      status: response.status,
      message: parsed.message || bodyText.slice(0, 300),
      from,
      to,
    });
    return {
      ok: false,
      transport: "resend",
      reason: parsed.message || "resend_failed",
    };
  }

  console.info("[contact-mail] Resend accepted", {
    id: parsed.id,
    to,
    from,
  });

  return { ok: true, transport: "resend" };
}

export async function deliverContactInquiry(
  inquiry: ContactInquiry,
): Promise<MailResult> {
  const webhook = cleanEnv(process.env.CONTACT_WEBHOOK_URL);

  if (webhook) {
    return sendViaWebhook(inquiry, webhook);
  }

  if (cleanEnv(process.env.RESEND_API_KEY)) {
    return sendViaResend(inquiry);
  }

  // Credentials not configured yet — accept for architecture readiness.
  return { ok: true, transport: "deferred" };
}
