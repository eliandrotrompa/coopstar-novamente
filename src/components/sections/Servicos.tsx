import Image from "next/image";
import { Check } from "lucide-react";
import { services } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function Servicos() {
  return (
    <section id="servicos" className="section-space bg-slate-50/70">
      <Container>
        <SectionHeading
          eyebrow="Nossos Serviços"
          title="Do documento ao pacote, a gente resolve"
          description="Soluções de moto frete e delivery desenhadas para acelerar a rotina de empresas de todos os tamanhos."
        />

        <Stagger className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem
              key={service.title}
              className="group flex flex-col rounded-2xl border border-slate-200/70 bg-white p-6 shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/40 hover:shadow-2xl"
            >
              <div className="mb-5 relative h-40 w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-100">
                <Image
                  src="/imagens/servicos-card.png"
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded-lg bg-navy-950/80 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white">
                  Coopstar Express
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900">{service.title}</h3>
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
                  className="w-full justify-center border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-800 transition-colors hover:border-brand-600 hover:bg-brand-50 hover:text-brand-700"
                >
                  Solicitar orçamento
                </Button>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}