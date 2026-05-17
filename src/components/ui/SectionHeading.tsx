import { cn } from "@/lib/utils";
import { FadeIn } from "./FadeIn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

function OrnamentDivider({ align }: { align: "left" | "center" }) {
  if (align === "center") {
    return (
      <div className="my-7 flex items-center justify-center gap-3">
        <div className="h-px w-12 bg-gold/40" />
        <div className="h-[5px] w-[5px] rotate-45 bg-gold/70" />
        <div className="h-px w-4 bg-gold/40" />
        <div className="h-[5px] w-[5px] rotate-45 bg-gold/70" />
        <div className="h-px w-12 bg-gold/40" />
      </div>
    );
  }
  return (
    <div className="my-7 flex items-center gap-3">
      <div className="h-px w-12 bg-gold" />
      <div className="h-[5px] w-[5px] rotate-45 bg-gold/80" />
      <div className="h-px w-4 bg-gold/50" />
    </div>
  );
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
        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.4em] text-gold/80">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl font-light leading-[1.1] text-white md:text-5xl lg:text-6xl">
        {title}
      </h2>
      <OrnamentDivider align={align} />
      {description && (
        <p className="text-base leading-relaxed text-white/65 md:text-lg">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
