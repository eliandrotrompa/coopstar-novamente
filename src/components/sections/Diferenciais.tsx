import { differentiators, testimonials } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Reveal } from "@/components/motion/Reveal";
import { Star, Quote } from "lucide-react";

export function Diferenciais() {
  return (
    <section id="diferenciais" className="section-space relative overflow-hidden bg-navy-950">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-700/10 blur-[120px]"
        aria-hidden
      />
      <Container className="relative space-y-14">
        <div>
          <SectionHeading
            tone="dark"
            eyebrow="Por que a Coopstar"
            title="Feitos para entregar com confiança"
            description="A combinação exata de disponibilidade, experiência e comprometimento para cuidar das suas entregas como se fossem nossas."
          />

          <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item) => (
              <StaggerItem
                key={item.title}
                className="group relative rounded-2xl border border-navy-800/80 bg-navy-900/60 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/50 hover:bg-navy-900/90"
              >
                <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-brand-700/20 text-brand-400 border border-brand-500/30 group-hover:bg-brand-700 group-hover:text-white transition-colors duration-300">
                  <item.icon className="size-6" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {item.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Depoimentos de Clientes */}
        <div className="border-t border-navy-800/80 pt-12">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-block rounded-full bg-brand-600/20 border border-brand-500/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-400 mb-3">
                Depoimentos Reais
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                O que nossos clientes dizem sobre nós
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Quem confia na Coopstar Express garante entregas sem dor de cabeça.
              </p>
            </div>
          </Reveal>

          <Stagger className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testi) => (
              <StaggerItem
                key={testi.name}
                className="flex flex-col justify-between rounded-2xl border border-navy-800/80 bg-navy-900/50 p-6 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-brand-500/40 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1 text-amber-400">
                      {Array.from({ length: testi.rating }).map((_, i) => (
                        <Star key={i} className="size-4 fill-amber-400" aria-hidden />
                      ))}
                    </div>
                    <Quote className="size-6 text-navy-700" aria-hidden />
                  </div>
                  <p className="text-xs leading-relaxed text-slate-300 sm:text-sm italic">
                    &ldquo;{testi.content}&rdquo;
                  </p>
                </div>

                <div className="mt-6 border-t border-navy-800/60 pt-4">
                  <p className="text-sm font-bold text-white">{testi.name}</p>
                  <p className="text-xs text-brand-400">{testi.role}</p>
                  <p className="text-xs text-slate-400">{testi.company}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}