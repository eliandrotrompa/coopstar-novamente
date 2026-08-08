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
    <section id="inicio" className="relative isolate overflow-hidden bg-navy-950 py-12 lg:py-20">
      <div
        className="pointer-events-none absolute -left-40 -top-40 size-96 rounded-full bg-brand-700/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-0 size-96 rounded-full bg-accent-500/10 blur-3xl"
        aria-hidden
      />

      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <motion.div {...rise(0)} suppressHydrationWarning>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                <span className="size-2 animate-pulse rounded-full bg-brand-500" aria-hidden />
                Moto Frete · Atendimento 24h
              </p>
            </motion.div>

            <motion.h1
              {...rise(0.1)}
              className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
              suppressHydrationWarning
            >
              Entregas e coletas na velocidade que{" "}
              <span className="bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
                sua empresa precisa
              </span>
            </motion.h1>

            <motion.p
              {...rise(0.2)}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
              suppressHydrationWarning
            >
              Moto frete e delivery em São Paulo capital e Grande SP. Documentos e
              pequenos volumes entregues com agilidade, segurança e horário
              marcado — sem burocracia.
            </motion.p>

            <motion.div {...rise(0.3)} className="mt-8 flex flex-wrap items-center gap-4" suppressHydrationWarning>
              <Button href="#contato" withArrow className="shadow-lg shadow-brand-700/30">
                Solicitar orçamento
              </Button>
              <Button href="#servicos" variant="outline">
                Conhecer serviços
              </Button>
            </motion.div>

            <motion.dl
              {...rise(0.45)}
              className="mt-12 grid grid-cols-3 gap-4 border-t border-navy-800/80 pt-8"
              suppressHydrationWarning
            >
              {heroStats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-brand-500 pl-3">
                  <dd className="text-2xl font-extrabold text-white sm:text-3xl">{stat.value}</dd>
                  <dt className="mt-0.5 text-xs text-slate-400 sm:text-sm">{stat.label}</dt>
                </div>
              ))}
            </motion.dl>
          </div>

          <div className="lg:col-span-5">
            <motion.div {...rise(0.4)} className="relative" suppressHydrationWarning>
              <div className="relative overflow-hidden rounded-3xl border border-navy-700/60 bg-navy-900/40 p-2 shadow-2xl backdrop-blur-sm">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-[4/5]">
                  <Image
                    src="/imagens/hero-loira6.png"
                    alt="Moto frete da Coopstar Express em São Paulo — segurança, rapidez e eficiência"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-navy-900/90 p-4 border border-navy-700/80 backdrop-blur-md shadow-xl">
                    <p className="text-sm font-bold text-white">Prontos para atender sua chamada</p>
                    <p className="text-xs text-slate-300 mt-0.5">Frota própria e rastreamento em São Paulo e Grande SP</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      <p className="sr-only">
        {site.name} – {site.tagline}
      </p>
    </section>
  );
}