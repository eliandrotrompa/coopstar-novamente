import Link from "next/link";
import { Bike } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/utils/cn";

interface LogoProps {
  dark?: boolean;
  className?: string;
}

export function Logo({ dark = false, className }: LogoProps) {
  return (
    <Link
      href="#inicio"
      className={cn(
        "group inline-flex items-center gap-2.5 focus-ring rounded-xl",
        className
      )}
      aria-label={`${site.name} – início`}
    >
      <span className="flex size-10 items-center justify-center rounded-xl bg-brand-700 text-white transition-colors group-hover:bg-brand-800">
        <Bike className="size-5" aria-hidden />
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block text-lg font-extrabold tracking-tight",
            dark ? "text-white" : "text-slate-900"
          )}
        >
          Coopstar
        </span>
        <span className="block text-xs font-semibold uppercase tracking-[0.28em] text-brand-600">
          Express
        </span>
      </span>
    </Link>
  );
}