import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import type { Service } from "@/content/services";
import { cn } from "@/lib/utils";

export function ServiceDetail({
  service,
  compactTop = false,
}: {
  service: Service;
  compactTop?: boolean;
}) {
  const isCinematic = service.layout === "cinematic";
  const isInformational = service.layout === "informational";
  const imageRight = service.layout === "image-right";
  const spaceClass = cn(
    "scroll-mt-36 lg:scroll-mt-40",
    compactTop ? "pb-16 pt-6 lg:pb-24 lg:pt-8" : "section-space",
  );

  if (isCinematic) {
    return (
      <section
        id={service.id}
        className={cn(spaceClass, "bg-cream")}
      >
        <Container>
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-xl)] shadow-[var(--shadow-lift)] sm:aspect-[21/9]">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                sizes="100vw"
                className="object-cover object-[50%_40%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12">
                <p className="font-serif text-sm text-sand">{service.number}</p>
                <h2 className="mt-2 max-w-2xl font-serif text-3xl text-text-inverse sm:text-4xl">
                  {service.headline}
                </h2>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <p className="text-[1.125rem] leading-relaxed text-text-muted">
                {service.description}
              </p>
              <ul className="space-y-0">
                {service.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex gap-3 border-t border-border-strong/70 py-3.5 text-[1.0625rem] leading-relaxed text-text-muted first:border-t-0 first:pt-0"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>
    );
  }

  if (isInformational) {
    const rows = service.infoRows ?? [];
    return (
      <section
        id={service.id}
        className={cn(spaceClass, "bg-background")}
      >
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <Reveal>
              <div>
                <SectionLabel>Medication Support</SectionLabel>
                <h2 className="mt-4 font-serif text-3xl leading-tight text-primary sm:text-4xl">
                  {service.headline}
                </h2>
                <p className="mt-5 max-w-lg text-[1.125rem] leading-relaxed text-text-muted">
                  {service.description}
                </p>
                {service.publicNote ? (
                  <p className="mt-6 border-l-2 border-secondary/60 pl-4 text-[0.9375rem] leading-relaxed text-text-subtle">
                    {service.publicNote}
                  </p>
                ) : null}
                <Button href="/contact" className="mt-8" showArrow>
                  Ask About Medication Support
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="border-t border-border-strong/80">
                {rows.map((row) => (
                  <div
                    key={row.title}
                    className="border-b border-border-strong/80 py-6"
                  >
                    <h3 className="font-serif text-xl text-primary sm:text-[1.35rem]">
                      {row.title}
                    </h3>
                    <p className="mt-2 text-[1.0625rem] leading-relaxed text-text-muted">
                      {row.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      id={service.id}
      className={cn(
        spaceClass,
        service.layout === "editorial" ? "bg-cream" : "bg-background",
      )}
    >
      <Container>
        <div
          className={cn(
            "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
            imageRight && "lg:[&>*:first-child]:order-2",
          )}
        >
          <Reveal>
            <ImageReveal
              src={service.image.src}
              alt={service.image.alt}
              fill
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="image-frame relative aspect-[4/5] overflow-hidden shadow-[var(--shadow-soft)]"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <SectionLabel>Service {service.number}</SectionLabel>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-primary sm:text-4xl">
                {service.headline}
              </h2>
              <p className="mt-5 text-[1.125rem] leading-relaxed text-text-muted">
                {service.description}
              </p>
              {service.details.length > 0 ? (
                <ul className="mt-8 space-y-3.5">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-3 text-[1.0625rem] leading-relaxed text-text-muted"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              ) : null}
              <Button href="/contact" className="mt-8" showArrow>
                Speak With Our Team
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
