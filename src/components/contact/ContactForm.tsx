"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/contact/actions";
import { contactHelpOptions, contactPage } from "@/content/contact";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );
  const started = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [formStartedAt, setFormStartedAt] = useState(() => String(Date.now()));
  const [composeAgain, setComposeAgain] = useState(false);

  useEffect(() => {
    if (state.status === "success") {
      trackEvent("contact_form_success");
      trackEvent("contact_form_submit", { status: "success" });
    } else if (state.status === "error") {
      trackEvent("contact_form_error", {
        has_field_errors: Boolean(state.fieldErrors),
      });
      trackEvent("contact_form_submit", { status: "error" });
    }
  }, [state]);

  const markStarted = () => {
    if (started.current) return;
    started.current = true;
    trackEvent("contact_form_start");
  };

  const submitAction = (formData: FormData) => {
    setComposeAgain(false);
    formAction(formData);
  };

  if (state.status === "success" && !composeAgain) {
    return (
      <div
        className="rounded-[var(--radius-lg)] border border-border bg-cream/60 p-8 sm:p-10"
        role="status"
      >
        <p className="font-serif text-2xl text-primary">Message received</p>
        <p className="mt-4 text-[1.0625rem] leading-relaxed text-text-muted">
          {state.message || contactPage.successMessage}
        </p>
        <button
          type="button"
          className="mt-8 text-[0.9375rem] font-semibold text-primary underline-offset-4 hover:underline"
          onClick={() => {
            started.current = false;
            setFormStartedAt(String(Date.now()));
            setComposeAgain(true);
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  const values = state.values;

  return (
    <form
      key={
        composeAgain
          ? `compose-${formStartedAt}`
          : state.status === "error" && state.values
            ? `retry-${state.message}-${state.values.email}`
            : "contact-form"
      }
      ref={formRef}
      action={submitAction}
      className="space-y-5"
      noValidate
      onFocusCapture={markStarted}
    >
      <input type="hidden" name="formStartedAt" value={formStartedAt} />

      {/* Honeypot */}
      <div
        className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
        aria-hidden
      >
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="firstName"
          name="firstName"
          label="First Name"
          required
          error={state.fieldErrors?.firstName}
          autoComplete="given-name"
          defaultValue={values?.firstName}
          maxLength={80}
        />
        <Field
          id="lastName"
          name="lastName"
          label="Last Name"
          required
          error={state.fieldErrors?.lastName}
          autoComplete="family-name"
          defaultValue={values?.lastName}
          maxLength={80}
        />
      </div>

      <Field
        id="email"
        name="email"
        label="Email"
        type="email"
        required
        error={state.fieldErrors?.email}
        autoComplete="email"
        defaultValue={values?.email}
        maxLength={254}
      />

      <Field
        id="phone"
        name="phone"
        label="Phone"
        type="tel"
        error={state.fieldErrors?.phone}
        autoComplete="tel"
        defaultValue={values?.phone}
        maxLength={40}
      />

      <div>
        <label
          htmlFor="helpType"
          className="block text-sm font-medium text-primary"
        >
          How can we help? <span className="text-secondary">*</span>
        </label>
        <select
          id="helpType"
          name="helpType"
          required
          defaultValue={values?.helpType || ""}
          className={fieldClass(Boolean(state.fieldErrors?.helpType))}
          aria-invalid={Boolean(state.fieldErrors?.helpType)}
          aria-describedby={
            state.fieldErrors?.helpType ? "helpType-error" : undefined
          }
        >
          <option value="" disabled>
            Select an option
          </option>
          {contactHelpOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {state.fieldErrors?.helpType ? (
          <p
            id="helpType-error"
            className="mt-1.5 text-sm text-error"
            role="alert"
          >
            {state.fieldErrors.helpType}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-primary"
        >
          Message <span className="text-secondary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={4000}
          defaultValue={values?.message}
          className={cn(
            fieldClass(Boolean(state.fieldErrors?.message)),
            "resize-y",
          )}
          aria-invalid={Boolean(state.fieldErrors?.message)}
          aria-describedby={
            state.fieldErrors?.message ? "message-error" : undefined
          }
        />
        {state.fieldErrors?.message ? (
          <p
            id="message-error"
            className="mt-1.5 text-sm text-error"
            role="alert"
          >
            {state.fieldErrors.message}
          </p>
        ) : null}
      </div>

      <div>
        <label className="flex gap-3 text-[0.9375rem] leading-relaxed text-text-muted">
          <input
            type="checkbox"
            name="consent"
            className="mt-1 size-4 shrink-0 rounded border-border-strong text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            aria-invalid={Boolean(state.fieldErrors?.consent)}
            aria-describedby={
              state.fieldErrors?.consent ? "consent-error" : undefined
            }
          />
          <span>
            I understand this form should not be used for medical emergencies or
            to submit sensitive medical information.{" "}
            <span className="text-secondary">*</span>
          </span>
        </label>
        {state.fieldErrors?.consent ? (
          <p
            id="consent-error"
            className="mt-1.5 text-sm text-error"
            role="alert"
          >
            {state.fieldErrors.consent}
          </p>
        ) : null}
      </div>

      {state.status === "error" && state.message ? (
        <p
          className="rounded-[var(--radius-md)] border border-error/30 bg-error/5 px-4 py-3 text-sm text-error"
          role="alert"
        >
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-[var(--radius-md)] bg-primary px-6 text-base font-medium text-text-inverse transition-colors hover:bg-primary-hover disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

function fieldClass(hasError: boolean) {
  return cn(
    "mt-2 w-full rounded-[var(--radius-md)] border bg-background px-4 py-3 text-[1.0625rem] text-text outline-none transition-colors focus:border-primary",
    hasError ? "border-error" : "border-border-strong",
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required,
  error,
  autoComplete,
  defaultValue,
  maxLength,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
  defaultValue?: string;
  maxLength?: number;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-primary">
        {label}
        {required ? <span className="text-secondary"> *</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        maxLength={maxLength}
        className={fieldClass(Boolean(error))}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
