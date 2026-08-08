"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingCall() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={site.phoneHref}
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-3.5 font-semibold text-white shadow-xl shadow-brand-700/30 transition-colors hover:bg-brand-800 focus-ring"
          aria-label="Ligar para a Coopstar Express"
          suppressHydrationWarning
        >
          <Phone className="size-5" aria-hidden />
          <span className="hidden sm:inline">Fale conosco</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}