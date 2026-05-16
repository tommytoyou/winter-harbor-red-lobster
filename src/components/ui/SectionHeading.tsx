import { cn } from "@/lib/utils";
import { FadeIn } from "./FadeIn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={cn(
        "mb-16 md:mb-20",
        align === "center" && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-light leading-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className={cn("gold-line my-6", align === "center" && "mx-auto")} />
      {description && (
        <p className="text-base leading-relaxed text-white/70 md:text-lg">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
