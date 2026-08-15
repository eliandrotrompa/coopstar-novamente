"use client";

import { useEffect, useState } from "react";

function byIdAsc(a: { offsetTop: number; id: string }, b: { offsetTop: number; id: string }) {
  return a.offsetTop - b.offsetTop;
}

export function useActiveSection(ids: string[], defaultId?: string) {
  const [active, setActive] = useState<string>(defaultId ?? ids[0]);

  useEffect(() => {
    const sections = ids
      .map((id) => ({ id, element: document.getElementById(id) }))
      .filter((entry) => entry.element !== null)
      .map((entry) => ({
        id: entry.id,
        offsetTop: entry.element!.offsetTop,
      }))
      .sort(byIdAsc);

    const onScroll = () => {
      const threshold = 140;
      const scrollTop = window.scrollY + threshold;
      const docHeight = document.documentElement.scrollHeight;
      let current = ids[0];
      for (const section of sections) {
        if (section.offsetTop <= scrollTop) current = section.id;
      }

      if (window.innerHeight + window.scrollY >= docHeight - 48 && sections.length > 0) {
        current = sections[sections.length - 1].id;
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);

  return active;
}
