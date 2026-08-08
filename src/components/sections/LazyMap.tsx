"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface LazyMapProps {
  title: string;
  className?: string;
}

export function LazyMap({ title, className }: LazyMapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "200px" });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (inView) setLoaded(true);
  }, [inView]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      {loaded ? (
        <iframe
          title={title}
          src="https://maps.google.com/maps?q=Av.+Juruc%C3%AA,+898+-+Moema,+S%C3%A3o+Paulo+SP&z=15&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-slate-100 text-sm text-slate-500">
          Carregando mapa…
        </div>
      )}
    </div>
  );
}