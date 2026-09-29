"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { services } from "@/content/services";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function ServiceNav() {
  const [activeId, setActiveId] = useState(services[0]?.id ?? "");
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const trackedViews = useRef(new Set<string>());
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const ids = services.map((service) => service.id);

    const update = () => {
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        // Offset: fixed header (~4.5rem) + sticky nav (~3.5–4rem)
        if (el.getBoundingClientRect().top <= 200) current = id;
      }
      setActiveId(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!activeId || trackedViews.current.has(activeId)) return;
    trackedViews.current.add(activeId);
    trackEvent("service_view", { service_id: activeId });
  }, [activeId]);

  useEffect(() => {
    const item = itemRefs.current[activeId];
    const list = listRef.current;
    if (!item || !list) return;

    const listRect = list.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const overflowLeft = itemRect.left < listRect.left + 16;
    const overflowRight = itemRect.right > listRect.right - 16;

    if (overflowLeft || overflowRight) {
      item.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeId, reduceMotion]);

  return (
    <nav
      aria-label="Service sections"
      className="sticky top-[4.5rem] z-30 border-b border-border bg-background/95 backdrop-blur-[6px]"
    >
      <div className="relative lg:mx-auto lg:w-[min(100%-3rem,var(--container-max))] xl:w-[min(100%-4rem,var(--container-max-wide))]">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-5 bg-gradient-to-r from-background to-transparent sm:w-7 lg:hidden"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-5 bg-gradient-to-l from-background to-transparent sm:w-7 lg:hidden"
          aria-hidden
        />

        <ul
          ref={listRef}
          className="flex gap-1.5 overflow-x-auto overscroll-x-contain px-4 py-2.5 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory scroll-px-4 sm:gap-2 sm:px-6 lg:gap-0 lg:overflow-visible lg:px-0 lg:py-0 lg:snap-none [&::-webkit-scrollbar]:hidden"
        >
          {services.map((service) => {
            const active = activeId === service.id;
            return (
              <li
                key={service.id}
                ref={(node) => {
                  itemRefs.current[service.id] = node;
                }}
                className="shrink-0 snap-start"
              >
                <Link
                  href={`#${service.id}`}
                  aria-current={active ? "true" : undefined}
                  className={cn(
                    "relative inline-flex min-h-11 items-center whitespace-nowrap rounded-[var(--radius-md)] px-3.5 py-2.5 text-[0.875rem] font-medium transition-colors duration-300 sm:px-4 sm:text-[0.9375rem] lg:rounded-none lg:py-4",
                    active
                      ? "bg-primary text-text-inverse shadow-[var(--shadow-subtle)] lg:bg-transparent lg:text-primary lg:shadow-none"
                      : "bg-cream/90 text-text-muted hover:text-primary lg:bg-transparent",
                  )}
                >
                  {service.navLabel}
                  <span
                    className={cn(
                      "pointer-events-none absolute inset-x-3 bottom-0 hidden h-0.5 origin-left bg-[#c4a35a] transition-transform duration-300 lg:block",
                      active ? "scale-x-100" : "scale-x-0",
                    )}
                    aria-hidden
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
