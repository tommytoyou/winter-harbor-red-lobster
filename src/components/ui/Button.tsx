import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  showArrow?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-burgundy text-white hover:bg-burgundy-light border border-burgundy hover:border-burgundy-light",
  secondary:
    "bg-gold text-harbor-dark hover:bg-gold-warm border border-gold hover:border-gold-warm font-medium",
  outline:
    "bg-transparent text-white border border-white/30 hover:border-gold hover:text-gold",
  ghost:
    "bg-transparent text-gold hover:text-gold-light border border-transparent",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  type = "button",
  showArrow = false,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase transition-all duration-400",
    variants[variant],
    className
  );

  const inner = (
    <>
      {children}
      {showArrow && (
        <span className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {inner}
    </button>
  );
}
