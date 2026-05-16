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
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-burgundy text-white hover:bg-burgundy/90 border border-burgundy",
  secondary:
    "bg-gold text-harbor-dark hover:bg-gold/90 border border-gold font-medium",
  outline:
    "bg-transparent text-white border border-white/30 hover:border-gold hover:text-gold",
  ghost: "bg-transparent text-gold hover:text-gold/80 border border-transparent",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center px-8 py-3.5 text-sm tracking-[0.15em] uppercase transition-all duration-300",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
