import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
  serif?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleAs: Tag = "h2",
  serif = true,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="section-label mb-4">{eyebrow}</p> : null}
      <Tag
        className={cn(
          "text-balance text-3xl leading-[1.15] text-primary sm:text-4xl lg:text-[2.75rem]",
          serif
            ? "font-serif font-medium tracking-tight"
            : "font-sans font-semibold",
          align === "center" && "mx-auto",
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-pretty text-base leading-relaxed text-text-muted sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
