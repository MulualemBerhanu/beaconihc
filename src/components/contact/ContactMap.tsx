import { siteConfig } from "@/content/site";
import { contactPage } from "@/content/contact";

function embedUrl(address: string) {
  const query = encodeURIComponent(address);
  return `https://maps.google.com/maps?q=${query}&z=15&output=embed`;
}

function directionsUrl(address: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
}

export function ContactMap() {
  const address = siteConfig.contact.address;
  if (!address) return null;

  return (
    <section
      aria-labelledby="contact-map-heading"
      className="relative overflow-hidden border-t border-border bg-[linear-gradient(180deg,#fbf9f6_0%,#f4f0e8_100%)]"
    >
      <div className="noise-overlay opacity-[0.03]" />
      <div className="relative mx-auto w-[min(100%,var(--container-max-wide))] px-0 lg:px-8 lg:py-16 xl:px-10">
        <div className="relative overflow-hidden lg:rounded-[var(--radius-xl)] lg:shadow-[var(--shadow-soft)]">
          <div className="absolute inset-x-0 top-0 z-10 flex flex-col gap-4 bg-gradient-to-b from-background/95 via-background/80 to-transparent px-5 pb-16 pt-6 sm:flex-row sm:items-end sm:justify-between sm:px-8 sm:pt-8 lg:px-10">
            <div className="max-w-lg">
              <p className="section-label !gap-0 before:hidden">Find Us</p>
              <h2
                id="contact-map-heading"
                className="mt-3 font-serif text-2xl tracking-tight text-primary sm:text-[1.85rem]"
              >
                Visit or mail Beacon
              </h2>
              <p className="mt-2 text-[1.0625rem] leading-relaxed text-text-muted">
                {address}
              </p>
            </div>
            <a
              href={directionsUrl(address)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] border border-border-strong bg-background/90 px-5 text-[0.9375rem] font-semibold text-primary backdrop-blur-sm transition-colors hover:border-primary hover:bg-warm-white"
            >
              {contactPage.directionsLabel}
            </a>
          </div>

          <div className="relative aspect-[16/11] w-full sm:aspect-[21/10] lg:aspect-[24/10]">
            <iframe
              title={`Map showing Beacon In-Home Care at ${address}`}
              src={embedUrl(address)}
              className="absolute inset-0 size-full border-0 grayscale-[20%] contrast-[1.02]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
