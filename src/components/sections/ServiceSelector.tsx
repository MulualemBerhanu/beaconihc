"use client";

import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { services, type Service } from "@/content/services";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type ServiceSelectorProps = {
  items?: Service[];
  activeId: string;
  onSelect: (id: string) => void;
};

export function ServiceSelector({
  items = services,
  activeId,
  onSelect,
}: ServiceSelectorProps) {
  const reduceMotion = useReducedMotion();
  const active = items.find((service) => service.id === activeId) ?? items[0];

  return (
    <div>
      <ul className="space-y-0" role="tablist" aria-label="Services">
        {items.map((service) => {
          const isActive = service.id === activeId;
          return (
            <li key={service.id} role="presentation">
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="service-panel"
                className={cn(
                  "group flex w-full items-center justify-between gap-4 border-b border-border px-1 py-5 text-left transition-colors",
                  isActive ? "border-primary/35" : "hover:border-border-strong",
                )}
                onMouseEnter={() => {
                  onSelect(service.id);
                  trackEvent("service_engagement", {
                    service: service.id,
                    interaction: "hover",
                  });
                }}
                onFocus={() => onSelect(service.id)}
                onClick={() => {
                  onSelect(service.id);
                  trackEvent("service_engagement", {
                    service: service.id,
                    interaction: "click",
                  });
                }}
              >
                <span className="flex min-w-0 items-baseline gap-4">
                  <span className="font-serif text-sm text-secondary/80">
                    {service.number}
                  </span>
                  <span
                    className={cn(
                      "font-serif text-2xl transition-colors",
                      isActive
                        ? "text-primary"
                        : "text-text-muted group-hover:text-primary",
                    )}
                  >
                    {service.name}
                  </span>
                </span>
                <ArrowRight
                  className={cn(
                    "size-5 shrink-0 transition-all",
                    isActive
                      ? "translate-x-0 text-secondary opacity-100"
                      : "-translate-x-1 text-muted opacity-0 group-hover:translate-x-0 group-hover:opacity-60",
                  )}
                  aria-hidden
                />
              </button>
            </li>
          );
        })}
      </ul>

      <div id="service-panel" role="tabpanel" className="mt-8 min-h-[7.5rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-base leading-relaxed text-text-muted sm:text-[1.0625rem]">
              {active.summary}
            </p>
            <ul className="mt-4 space-y-2.5">
              {(active.details.length > 0
                ? active.details.slice(0, 3)
                : (active.infoRows ?? []).slice(0, 3).map((row) => row.title)
              ).map((detail) => (
                <li
                  key={detail}
                  className="flex gap-3 text-[0.9375rem] leading-relaxed text-text-muted sm:text-[1rem]"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />
                  {detail}
                </li>
              ))}
            </ul>
            <a
              href={active.href}
              className="group mt-6 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-primary transition-colors hover:text-secondary"
            >
              Learn more
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
