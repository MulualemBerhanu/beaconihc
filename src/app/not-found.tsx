import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-cream px-6 py-28">
      <div className="mx-auto max-w-xl text-center">
        <p className="section-label mx-auto justify-center">Page not found</p>
        <h1 className="mt-4 font-serif text-4xl text-primary sm:text-5xl">
          We couldn&apos;t find that page.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-text-muted">
          The page may have moved or the address may be incorrect.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/">Return Home</Button>
          <Button href="/contact" variant="outline">
            Contact Beacon
          </Button>
        </div>
        <p className="mt-8 text-sm text-text-subtle">
          Or explore{" "}
          <Link
            href="/about"
            className="text-primary underline underline-offset-2"
          >
            About Us
          </Link>{" "}
          and{" "}
          <Link
            href="/services"
            className="text-primary underline underline-offset-2"
          >
            our services
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
