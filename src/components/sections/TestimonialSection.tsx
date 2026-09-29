import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/home";

/**
 * Testimonial section architecture for Phase 1.
 * Public UI stays hidden until approved testimonials exist.
 * Do NOT invent testimonials.
 */
export function TestimonialSection() {
  const hasTestimonials = testimonials.items.length > 0;

  if (!hasTestimonials) {
    // Architecture ready — no fake quotes in the public UI.
    // TESTIMONIAL CONTENT REQUIRED
    return null;
  }

  return (
    <section className="bg-cream section-space">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Voices of Care"
            title="Stories from families and clients"
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {testimonials.items.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <figure className="h-full border-l-2 border-secondary/50 py-2 pl-6">
                <blockquote className="font-serif text-2xl leading-snug text-primary">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm text-text-subtle">
                  {item.attribution}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
