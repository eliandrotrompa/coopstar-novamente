import Image from "next/image";
import { Check, ShieldCheck, Zap, Clock3, MapPin } from "lucide-react";
import { services } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const serviceBadges = [
  { icon: Zap, text: "Coleta Rápida em SP" },
  { icon: ShieldCheck, text: "Segurança de Ponta a Ponta" },
  { icon: Clock3, text: "Atendimento 24 Horas" },
  { icon: MapPin, text: "Capital e Grande SP" },
];

export function Servicos() {
  return (
    <section id="servicos" className="section-space relative overflow-hidden bg-slate-50/90">
      <Container className="relative">
        <SectionHeading
          eyebrow="Nossos Serviços"
          title="Do documento ao pacote, a gente resolve"
          description="Soluções de moto frete e delivery desenhadas para acelerar a rotina de empresas de todos os tamanhos."
        />

        <Reveal delay={0.1} className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {serviceBadges.map((badge) => (
            <div
              key={badge.text}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-sm"
            >
              <badge.icon className="size-3.5 text-brand-600" aria-hidden />
              <span>{badge.text}</span>
            </div>
          ))}
        </Reveal>

        <Stagger className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem
              key={service.title}
              className="group flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/40 hover:shadow-2xl"
            >
              <div className="mb-5 relative h-44 w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-100">
                <Image
                  src="/imagens/servicos-card.png"
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded-lg bg-navy-950/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-white shadow-md">
                  {service.badge}
                </div>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                {service.subtitle}
              </span>
              <h3 className="mt-1 text-xl font-extrabold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                {service.description}
              </p>

              <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-xs font-medium text-slate-700 sm:text-sm"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <Button
                  href="#contato"
                  variant="ghost"
                  className="w-full justify-center border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-800 transition-colors hover:border-brand-600 hover:bg-brand-50 hover:text-brand-700"
                >
                  Solicitar orçamento
                </Button>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2} className="mt-10">
          <div className="relative overflow-hidden rounded-3xl border border-navy-800 bg-gradient-to-r from-navy-950 via-navy-900 to-brand-950 p-8 shadow-2xl text-white sm:p-10">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <span className="inline-block rounded-full bg-brand-600/30 border border-brand-500/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-300">
                  Orçamento Imediato
                </span>
                <h4 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                  Precisa de uma entrega expressa para agora?
                </h4>
                <p className="mt-2 text-sm text-slate-300">
                  Fale com a nossa equipe em tempo real. Respondemos imediatamente e enviamos o motofretista mais próximo do seu local em minutos.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Button href="#contato" withArrow className="bg-brand-600 hover:bg-brand-700 text-white shadow-xl shadow-brand-700/40 w-full sm:w-auto justify-center">
                  Fazer pedido agora
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}