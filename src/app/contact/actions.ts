"use server";

import { contactHelpOptions } from "@/content/contact";
import { siteConfig } from "@/content/site";
import { deliverContactInquiry } from "@/lib/mail";

export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  helpType: string;
  message: string;
};

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<
    Record<
      | "firstName"
      | "lastName"
      | "email"
      | "phone"
      | "helpType"
      | "message"
      | "consent"
      | "timing",
      string
    >
  >;
  /** Preserve user input after validation/server errors (never on honeypot success) */
  values?: ContactFormValues;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const MIN_FORM_MS = 2500;
const MAX_NAME = 80;
const MAX_PHONE = 40;
const MAX_MESSAGE = 4000;

function getClientKey(headersList: Headers) {
  return (
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headersList.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(key: string) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const max = 5;
  const entry = rateLimit.get(key);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  entry.count += 1;
  return entry.count > max;
}

function clean(value: FormDataEntryValue | null) {
  if (typeof value !== "string") return "";
  // Strip tags / control characters; plain text only
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .trim();
}

function tooFast(formStartedAt: string) {
  const started = Number(formStartedAt);
  if (!Number.isFinite(started) || started <= 0) return true;
  return Date.now() - started < MIN_FORM_MS;
}

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const { headers } = await import("next/headers");
  const headersList = await headers();
  const clientKey = getClientKey(headersList);

  if (isRateLimited(clientKey)) {
    return {
      status: "error",
      message:
        "Too many messages were sent recently. Please try again a little later.",
    };
  }

  // Honeypot — bots often fill hidden fields
  const company = clean(formData.get("company"));
  if (company) {
    return {
      status: "success",
      message:
        "Thank you for reaching out. Your message has been received.",
    };
  }

  const firstName = clean(formData.get("firstName")).slice(0, MAX_NAME);
  const lastName = clean(formData.get("lastName")).slice(0, MAX_NAME);
  const email = clean(formData.get("email")).slice(0, 254);
  const phone = clean(formData.get("phone")).slice(0, MAX_PHONE);
  const helpType = clean(formData.get("helpType"));
  const message = clean(formData.get("message")).slice(0, MAX_MESSAGE);
  const consent = formData.get("consent") === "on";
  const formStartedAt = clean(formData.get("formStartedAt"));

  const values: ContactFormValues = {
    firstName,
    lastName,
    email,
    phone,
    helpType,
    message,
  };

  if (tooFast(formStartedAt)) {
    return {
      status: "error",
      message: "Please take a moment and try submitting again.",
      fieldErrors: { timing: "Please wait a moment before sending." },
      values,
    };
  }

  const fieldErrors: ContactFormState["fieldErrors"] = {};

  if (!firstName || firstName.length < 2) {
    fieldErrors.firstName = "Please enter your first name.";
  }
  if (!lastName || lastName.length < 2) {
    fieldErrors.lastName = "Please enter your last name.";
  }
  if (!email || !emailPattern.test(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (phone && phone.replace(/\D/g, "").length < 7) {
    fieldErrors.phone = "Please enter a valid phone number.";
  }
  if (
    !helpType ||
    !contactHelpOptions.some((option) => option.value === helpType)
  ) {
    fieldErrors.helpType = "Please select how we can help.";
  }
  if (!message || message.length < 10) {
    fieldErrors.message = "Please share a short message (at least a few words).";
  }
  if (!consent) {
    fieldErrors.consent =
      "Please confirm you understand this form is not for emergencies or sensitive medical information.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please review the highlighted fields and try again.",
      fieldErrors,
      values,
    };
  }

  const helpLabel =
    contactHelpOptions.find((option) => option.value === helpType)?.label ??
    helpType;

  const inquiry = {
    firstName,
    lastName,
    email,
    phone: phone || undefined,
    helpType: helpLabel,
    message,
    submittedAt: new Date().toISOString(),
    site: siteConfig.name,
  };

  try {
    const result = await deliverContactInquiry(inquiry);
    if (!result.ok) {
      return {
        status: "error",
        message:
          "We couldn’t send your message right now. Please try again or call Beacon directly.",
        values,
      };
    }
  } catch {
    return {
      status: "error",
      message:
        "We couldn’t send your message right now. Please try again or call Beacon directly.",
      values,
    };
  }

  return {
    status: "success",
    message:
      "Thank you for reaching out. Your message has been received.",
  };
}
