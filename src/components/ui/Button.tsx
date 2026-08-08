import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "outline" | "white" | "ghost";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  withArrow?: boolean;
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-700 text-white hover:bg-brand-800 focus-ring shadow-lg shadow-brand-700/25",
  outline:
    "border-2 border-white/70 text-white hover:border-white hover:bg-white/10",
  white:
    "bg-white text-brand-700 hover:bg-brand-50 shadow-lg shadow-black/10",
  ghost: "text-brand-700 hover:bg-brand-50 focus-ring",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  withArrow = false,
  external = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200",
    variants[variant],
    className
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
        {withArrow && <ArrowRight className="size-4" aria-hidden />}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {withArrow && <ArrowRight className="size-4" aria-hidden />}
    </Link>
  );
}