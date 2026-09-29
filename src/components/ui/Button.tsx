import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "md" | "lg" | "sm";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-text-inverse shadow-[var(--shadow-subtle)] hover:bg-primary-hover hover:shadow-[var(--shadow-soft)]",
  secondary:
    "bg-secondary text-text-inverse shadow-[var(--shadow-subtle)] hover:bg-secondary-hover hover:shadow-[var(--shadow-soft)]",
  outline:
    "border border-border-strong/90 bg-warm-white/40 text-primary backdrop-blur-[2px] hover:border-primary hover:bg-cream",
  ghost: "bg-transparent text-primary hover:bg-cream",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-[0.9375rem]",
  lg: "min-h-12 px-6 text-base",
};

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  "aria-label"?: string;
};

function isInternalHref(href: string) {
  return href.startsWith("/") || href.startsWith("#");
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  showArrow = false,
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-medium tracking-wide transition-all duration-300 ease-out hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {children}
      {showArrow ? (
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden
        />
      ) : null}
    </>
  );

  if ("href" in props && props.href) {
    const { href, onClick, ...rest } = props;

    if (!isInternalHref(href)) {
      return (
        <a href={href} className={classes} onClick={onClick} {...rest}>
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onClick={onClick} {...rest}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
