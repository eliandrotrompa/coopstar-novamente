"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { heroStats } from "@/lib/content";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section id="inicio" className="relative isolate bg-navy-950">
      <Container className="flex min-h-[92vh] flex-col justify-center py-28">
        <motion.div {...rise(0)} className="max-w-2xl" suppressHydrationWarning>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
            <span className="size-2 rounded-full bg-brand-500" aria-hidden />
            Moto Frete · 24 horas
          </p>
        </motion.div>

        <motion.h1
          {...rise(0.1)}
          className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          suppressHydrationWarning
        >
          Entregas e coletas na velocidade que{" "}
          <span className="text-brand-400">sua empresa precisa</span>
        </motion.h1>

        <motion.p
          {...rise(0.2)}
          className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300"
          suppressHydrationWarning
        >
          Moto frete e delivery em São Paulo capital e Grande SP. Documentos e
          pequenos volumes entregues com agilidade, segurança e horário
          marcado — sem burocracia.
        </motion.p>

        <motion.div {...rise(0.3)} className="mt-10 flex flex-wrap items-center gap-4" suppressHydrationWarning>
          <Button href="#contato" withArrow>
            Solicitar orçamento
          </Button>
          <Button href="#servicos" variant="outline">
            Conhecer serviços
          </Button>
        </motion.div>

        <motion.dl
          {...rise(0.45)}
          className="mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3"
          suppressHydrationWarning
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-brand-600 pl-4">
              <dd className="text-3xl font-extrabold text-white">{stat.value}</dd>
              <dt className="mt-1 text-sm text-slate-400">{stat.label}</dt>
            </div>
          ))}
        </motion.dl>
      </Container>

      <Container className="pb-0">
        <motion.div {...rise(0.55)} className="relative w-full overflow-hidden rounded-2xl" suppressHydrationWarning>
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/imagens/hero-loira6.jpg"
              alt="Moto frete da Coopstar Express em São Paulo — segurança, rapidez e eficiência"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
              className="object-cover object-top sm:object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-950/40" />
        </motion.div>
      </Container>

      <p className="sr-only">
        {site.name} – {site.tagline}
      </p>
    </section>
  );
}