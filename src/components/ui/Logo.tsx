import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  compact = false,
  onDark = false,
}: {
  className?: string;
  compact?: boolean;
  /** Places the logo on a light plate so navy text stays readable on dark backgrounds */
  onDark?: boolean;
}) {
  const imageHeight = onDark
    ? compact
      ? "h-11 sm:h-12"
      : "h-12 sm:h-14"
    : compact
      ? "h-12 sm:h-[3.35rem]"
      : "h-14 sm:h-16";

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex shrink-0 items-center justify-center transition-opacity hover:opacity-90",
        onDark &&
          "rounded-[var(--radius-md)] bg-warm-white p-2 shadow-[var(--shadow-subtle)] sm:p-2.5",
        className,
      )}
      aria-label="Beacon In-Home Care home"
    >
      <Image
        src="/beacon-logo.png"
        alt="Beacon In-Home Care"
        width={1536}
        height={1024}
        priority
        sizes={onDark ? "180px" : "260px"}
        className={cn("w-auto object-contain", imageHeight)}
      />
    </Link>
  );
}
