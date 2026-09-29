"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { mainNav, primaryCta } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { trackEvent } from "@/lib/analytics";
import { cn, formatPhoneHref } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const phone = siteConfig.contact.phone;

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="mobile-navigation"
          className="fixed inset-0 z-40 lg:hidden"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-primary/40"
            aria-label="Close menu overlay"
            onClick={onClose}
          />
          <motion.nav
            aria-label="Mobile"
            className="absolute inset-y-0 right-0 flex w-[min(100%,22rem)] flex-col bg-background shadow-[var(--shadow-soft)]"
            initial={reduceMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={reduceMotion ? undefined : { x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
          >
            <div className="flex h-20 items-center justify-between border-b border-border px-5">
              <Logo compact />
              <button
                type="button"
                className="inline-flex size-11 items-center justify-center rounded-[var(--radius-md)] text-primary"
                aria-label="Close menu"
                onClick={onClose}
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-1 px-3 py-6">
              {mainNav.map((item, index) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : !item.href.includes("#") &&
                      (pathname === item.href ||
                        pathname.startsWith(`${item.href}/`));
                return (
                  <motion.div
                    key={item.href}
                    initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "block rounded-[var(--radius-md)] px-4 py-3.5 text-lg font-medium transition-colors",
                        active
                          ? "bg-accent-soft text-primary"
                          : "text-text-muted hover:bg-cream hover:text-primary",
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="space-y-3 border-t border-border p-5">
              {phone ? (
                <a
                  href={formatPhoneHref(phone)}
                  onClick={() => {
                    trackEvent("phone_click", { location: "mobile_nav" });
                    onClose();
                  }}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] border border-border text-sm font-medium text-primary"
                >
                  <Phone className="size-4" aria-hidden />
                  Call {siteConfig.contact.phoneDisplay}
                </a>
              ) : null}
              <Button
                href={primaryCta.href}
                className="w-full"
                onClick={() => {
                  trackEvent("primary_cta_click", { location: "mobile_nav" });
                  trackEvent("contact_cta_click", { location: "mobile_nav" });
                  onClose();
                }}
              >
                {primaryCta.label}
              </Button>
            </div>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
