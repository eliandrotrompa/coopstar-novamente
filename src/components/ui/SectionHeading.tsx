import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-sm font-semibold uppercase tracking-[0.2em]",
            tone === "light" ? "text-brand-700" : "text-accent-400"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-extrabold tracking-tight sm:text-4xl",
          tone === "light" ? "text-slate-900" : "text-white"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-slate-600" : "text-slate-300"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}