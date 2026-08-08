import Image from "next/image";
import { processSteps } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Reveal } from "@/components/motion/Reveal";

export function Processo() {
  return (
    <section id="processo" className="section-space bg-navy-950 relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-40 -top-40 size-96 rounded-full bg-navy-700/30 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              tone="dark"
              eyebrow="Como Funciona"
              title="Do pedido à entrega em 4 passos"
              description="Um processo simples e transparente para você ganhar tempo. Sem burocracia, do orçamento à confirmação da entrega."
            />

            <Stagger className="mt-12 grid gap-8 sm:grid-cols-2">
              {processSteps.map((step) => (
                <StaggerItem key={step.step} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-navy-700 bg-navy-900/60 text-white">
                      <step.icon className="size-6 text-accent-400" aria-hidden />
                    </div>
                    <div className="pt-1">
                      <p className="text-sm font-bold text-accent-400">{step.step}</p>
                    </div>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {step.description}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal className="relative mt-10 lg:mt-0">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative w-full aspect-[4/3] lg:aspect-[4/5]">
                <Image
                  src="/imagens/nmax-scooter2.jpg"
                  alt="Nossa frota com scooter Nmax 160 – Coopstar Express"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
            </div>
          </Reveal>
        </div>

        <div className="mt-10 rounded-2xl border border-navy-700/80 bg-navy-900/60 p-6 text-center backdrop-blur-md sm:p-8">
          <p className="text-base font-semibold text-white sm:text-lg">
            Funcionamos 24 horas, de segunda a segunda-feira. Está tudo pronto
            para agendar sua primeira entrega.
          </p>
          <a
            href="#contato"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-brand-700 px-7 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-brand-700/30 transition-all hover:bg-brand-800 focus-ring sm:text-sm"
          >
            Agendar coleta agora
          </a>
        </div>
      </Container>
    </section>
  );
}