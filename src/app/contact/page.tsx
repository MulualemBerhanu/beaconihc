import type { Metadata } from "next";
import { contactPage } from "@/content/contact";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { ContactMap } from "@/components/contact/ContactMap";

export const metadata: Metadata = {
  title: { absolute: "Contact Beacon In-Home Care" },
  description:
    "Contact Beacon In-Home Care to ask questions, explore available support, or start a conversation about care for yourself or someone you love.",
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: "Contact Beacon In-Home Care",
    description:
      "Let’s start with a conversation. Reach Beacon by phone, email, or the website contact form.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  const { hero } = contactPage;

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(155deg,#fbf9f6_0%,#f4f0e8_55%,#e8eee9_100%)] pt-28 pb-14 sm:pt-32 lg:pb-16 lg:pt-36">
        <div className="noise-overlay opacity-[0.04]" />
        <div
          className="atmosphere-orb -top-16 right-10 size-[22rem] bg-[radial-gradient(circle,rgba(106,132,160,0.18),transparent_70%)]"
          aria-hidden
        />
        <Container className="relative">
          <Reveal>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3">
                <span className="gold-rule" aria-hidden />
                <SectionLabel className="!gap-0 before:hidden">
                  {hero.label}
                </SectionLabel>
              </div>
              <h1 className="mt-6 font-serif text-[2.25rem] leading-[1.12] tracking-tight text-primary sm:text-[2.85rem] lg:text-[3.1rem]">
                {hero.title}
              </h1>
              <p className="mt-6 text-[1.125rem] leading-relaxed text-text-muted sm:text-[1.1875rem]">
                {hero.description}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-background pb-20 pt-6 lg:pb-28 lg:pt-10">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <ContactChannels />
            </Reveal>

            <Reveal delay={0.06}>
              <div className="rounded-[var(--radius-xl)] border border-border bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-8 lg:p-10">
                <div className="mb-2 h-px w-10 bg-[var(--gold)]/70" aria-hidden />
                <h2 className="mt-4 font-serif text-2xl text-primary sm:text-[1.75rem]">
                  Send a message
                </h2>
                <p className="mt-2 text-[1.0625rem] text-text-muted">
                  Share a few details and Beacon will follow up. Please do not
                  include sensitive medical information.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <ContactMap />
    </>
  );
}
