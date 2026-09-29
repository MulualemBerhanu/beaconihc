import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { TrackedAnchor } from "@/components/ui/TrackedAnchor";
import { brandStatement, siteConfig } from "@/content/site";
import { footerNav } from "@/content/navigation";
import { formatPhoneHref } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();
  const { phone, phoneDisplay, phoneSecondary, phoneSecondaryDisplay, email, emailDisplay, address, serviceArea } =
    siteConfig.contact;

  return (
    <footer className="relative overflow-hidden border-t border-border bg-primary pb-24 text-text-inverse lg:pb-0">
      <div className="noise-overlay opacity-[0.06]" />
      <Container className="relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="max-w-md">
            <Logo onDark />
            <p className="mt-6 text-base leading-relaxed text-sand/90">
              {brandStatement}
            </p>
          </div>

          <div>
            <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-sand">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {footerNav.map((item) => (
                <li key={`${item.label}-${item.href}`}>
                  <Link
                    href={item.href}
                    className="text-text-inverse/85 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-sand">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-text-inverse/85">
              <li className="flex gap-3">
                <Phone
                  className="mt-0.5 size-4 shrink-0 text-sage-soft"
                  aria-hidden
                />
                {phone ? (
                  <div className="space-y-1">
                    <TrackedAnchor
                      href={formatPhoneHref(phone)}
                      event="phone_click"
                      location="footer"
                      className="block transition-colors hover:text-white"
                    >
                      {phoneDisplay}
                    </TrackedAnchor>
                    {phoneSecondary ? (
                      <TrackedAnchor
                        href={formatPhoneHref(phoneSecondary)}
                        event="phone_click"
                        location="footer_secondary"
                        className="block transition-colors hover:text-white"
                      >
                        {phoneSecondaryDisplay}
                      </TrackedAnchor>
                    ) : null}
                  </div>
                ) : (
                  <span>Contact Beacon to reach our team</span>
                )}
              </li>
              <li className="flex gap-3">
                <Mail
                  className="mt-0.5 size-4 shrink-0 text-sage-soft"
                  aria-hidden
                />
                {email ? (
                  <TrackedAnchor
                    href={`mailto:${email}`}
                    event="email_click"
                    location="footer"
                    className="transition-colors hover:text-white"
                  >
                    {emailDisplay}
                  </TrackedAnchor>
                ) : (
                  <span>Contact Beacon to reach our team</span>
                )}
              </li>
              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-sage-soft"
                  aria-hidden
                />
                <span>
                  {address || serviceArea || "Happy Valley, Oregon"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-sand/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            <a
              href={siteConfig.developer.url}
              className="transition-colors hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              {siteConfig.developer.credit}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
