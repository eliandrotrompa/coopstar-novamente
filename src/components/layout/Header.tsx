"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { navItems, sectionIds } from "@/lib/content";
import { site } from "@/lib/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/utils/cn";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || menuOpen
          ? "border-b border-slate-200/70 bg-white/85 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav
        className="container-page flex h-16 items-center justify-between gap-4 sm:h-20"
        aria-label="Navegação principal"
      >
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors focus-ring",
                  active === item.id
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                )}
                aria-current={active === item.id ? "true" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700 focus-ring md:inline-flex"
          >
            <Phone className="size-4" aria-hidden />
            {site.phone}
          </a>
          <a
            href="#contato"
            className="hidden rounded-full bg-brand-700 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-800 focus-ring sm:inline-flex"
          >
            Solicitar orçamento
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 focus-ring lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? (
              <X className="size-5" aria-hidden />
            ) : (
              <Menu className="size-5" aria-hidden />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur-md lg:hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-base font-medium transition-colors focus-ring",
                      active === item.id
                        ? "bg-brand-50 text-brand-700"
                        : "text-slate-700 hover:bg-slate-100"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#contato"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl bg-brand-700 px-4 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-brand-800 focus-ring"
                >
                  Solicitar orçamento
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}