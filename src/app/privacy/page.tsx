import type { Metadata } from "next";
import Link from "next/link";
import { privacyPage } from "@/content/privacy";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { formatPhoneHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Beacon In-Home Care" },
  description:
    "Information about how Beacon In-Home Care handles information submitted through this website.",
  alternates: { canonical: `${siteConfig.url}/privacy` },
  openGraph: {
    title: "Privacy Policy | Beacon In-Home Care",
    description:
      "Privacy information for the Beacon In-Home Care website.",
    url: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  const {
    title,
    description,
    lastUpdated,
    pendingNotice,
    technologyNotes,
    contactPrompt,
    sections,
  } = privacyPage;
  const { email, emailDisplay, phone, phoneDisplay, address } =
    siteConfig.contact;
  const allPending = sections.every((section) => section.status === "pending");

  return (
    <section className="relative overflow-hidden bg-background pt-28 pb-20 sm:pt-32 lg:pb-28 lg:pt-36">
      <div
        className="atmosphere-orb top-0 right-0 size-[20rem] bg-[radial-gradient(circle,rgba(196,163,90,0.08),transparent_70%)]"
        aria-hidden
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-3">
            <span className="gold-rule" aria-hidden />
            <p className="section-label !gap-0 before:hidden">Legal</p>
          </div>
          <h1 className="mt-5 font-serif text-[2.35rem] tracking-tight text-primary sm:text-4xl lg:text-[2.85rem]">
            {title}
          </h1>
          <p className="mt-5 text-[1.125rem] leading-relaxed text-text-muted">
            {description}
          </p>
          {lastUpdated ? (
            <p className="mt-4 text-sm text-text-subtle">
              Last updated: {lastUpdated}
            </p>
          ) : null}

          {allPending ? (
            <div className="mt-10 rounded-[var(--radius-lg)] border border-border bg-cream/70 px-5 py-4 text-[1.0625rem] leading-relaxed text-text-muted shadow-[var(--shadow-subtle)]">
              {pendingNotice}
            </div>
          ) : null}

          {technologyNotes.length > 0 ? (
            <div className="mt-8 rounded-[var(--radius-lg)] border border-border bg-surface px-5 py-5 shadow-[var(--shadow-subtle)]">
              <h2 className="font-serif text-xl text-primary">
                Website technology notes
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-text-subtle">
                The following notes describe technologies this website is prepared
                to use. They are not a substitute for Beacon-approved Privacy
                Policy language.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[0.9875rem] leading-relaxed text-text-muted">
                {technologyNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <nav
            aria-label="Privacy policy sections"
            className="mt-12 border-y border-border py-6"
          >
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-[0.9375rem] font-medium text-primary underline-offset-4 transition-colors hover:text-secondary hover:underline"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-4 space-y-0">
            {sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-28 border-b border-border py-10"
              >
                <h2 className="font-serif text-2xl text-primary sm:text-[1.75rem]">
                  {section.title}
                </h2>
                {section.status === "approved" && section.paragraphs.length > 0 ? (
                  <div className="mt-4 space-y-4 text-[1.0625rem] leading-relaxed text-text-muted">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ) : (
                  <p className="mt-4 text-[1.0625rem] leading-relaxed text-text-subtle">
                    Approved policy language for this section will appear here
                    once provided by Beacon.
                  </p>
                )}
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[var(--radius-xl)] border border-border bg-cream/50 p-6 shadow-[var(--shadow-subtle)] sm:p-8">
            <div className="mb-3 h-px w-10 bg-[var(--gold)]/70" aria-hidden />
            <h2 className="font-serif text-2xl text-primary">Contact Us</h2>
            <p className="mt-3 text-[1.0625rem] leading-relaxed text-text-muted">
              {contactPrompt}
            </p>
            <ul className="mt-5 space-y-2 text-[1.0625rem] text-primary">
              {email ? (
                <li>
                  <a
                    href={`mailto:${email}`}
                    className="font-medium underline-offset-4 hover:underline"
                  >
                    {emailDisplay}
                  </a>
                </li>
              ) : null}
              {phone ? (
                <li>
                  <a
                    href={formatPhoneHref(phone)}
                    className="font-medium underline-offset-4 hover:underline"
                  >
                    {phoneDisplay}
                  </a>
                </li>
              ) : null}
              {address ? <li>{address}</li> : null}
            </ul>
            <p className="mt-5 text-sm text-text-subtle">
              Or use our{" "}
              <Link
                href="/contact"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
