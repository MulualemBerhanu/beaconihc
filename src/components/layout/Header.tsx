"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { mainNav, primaryCta } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { trackEvent } from "@/lib/analytics";
import { cn, formatPhoneHref } from "@/lib/utils";

function sectionFromHash(hash: string) {
  return hash.replace(/^#/, "");
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const phone = siteConfig.contact.phone;
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!isHome) return;

    const sectionIds = ["story", "services", "why-beacon", "contact"];

    const updateActive = () => {
      const hash = sectionFromHash(window.location.hash);
      if (hash && sectionIds.includes(hash)) {
        setActiveHash(hash);
        return;
      }

      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= 140) current = id;
      }
      setActiveHash(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("hashchange", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("hashchange", updateActive);
    };
  }, [isHome]);

  const resolvedHash = isHome ? activeHash : "";
  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || !isHome
            ? "border-b border-border/80 bg-background/94 shadow-[var(--shadow-header)] backdrop-blur-[6px]"
            : "bg-transparent",
        )}
      >
        <div
          className={cn(
            "container-beacon flex items-center justify-between overflow-hidden transition-[height] duration-300",
            scrolled ? "h-[4.5rem]" : "h-[5.5rem]",
          )}
        >
          <div className="min-w-0 shrink">
            <Logo compact={scrolled} />
          </div>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {mainNav.map((item) => {
              const isHashLink = item.href.includes("#");
              const hash = isHashLink ? item.href.split("#")[1] : "";
              const active = isHashLink
                ? isHome && resolvedHash === hash
                : item.href === "/"
                  ? isHome && !resolvedHash
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative text-sm font-medium tracking-wide transition-colors",
                    active
                      ? "text-primary"
                      : "text-text-muted hover:text-primary",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px w-full origin-left bg-secondary transition-transform duration-300",
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100",
                    )}
                    aria-hidden
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            {phone ? (
              <a
                href={formatPhoneHref(phone)}
                onClick={() =>
                  trackEvent("phone_click", { location: "header" })
                }
                className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-primary"
              >
                <Phone className="size-4" aria-hidden />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
            ) : null}
            <Button
              href={primaryCta.href}
              size="sm"
              onClick={() => {
                trackEvent("primary_cta_click", { location: "header" });
                trackEvent("contact_cta_click", { location: "header" });
              }}
            >
              {primaryCta.label}
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-border bg-background/80 text-primary lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
