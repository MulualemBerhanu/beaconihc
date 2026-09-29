"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Avoid logging sensitive details to the visitor console in production.
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }
  }, [error]);

  return (
    <section className="flex min-h-[60vh] items-center bg-cream px-6 py-28">
      <div className="mx-auto max-w-xl text-center">
        <p className="section-label mx-auto justify-center">Something went wrong</p>
        <h1 className="mt-4 font-serif text-4xl text-primary sm:text-5xl">
          We couldn&apos;t load this page.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-text-muted">
          Please try again. If the problem continues, you can return home or
          contact Beacon directly.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-md)] bg-primary px-6 text-base font-medium text-text-inverse transition-colors hover:bg-primary-hover"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-md)] border border-border-strong px-6 text-base font-medium text-primary transition-colors hover:bg-background"
          >
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}
