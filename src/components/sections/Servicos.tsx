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
    <section id="servicos" className="section-space bg-white">
      <Container>
        <SectionHeading
          eyebrow="Nossos Serviços"
          title="Do documento ao pacote, a gente resolve"
          description="Soluções de moto frete e delivery desenhadas para acelerar a rotina de empresas de todos os tamanhos."
        />


        <Stagger className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem
              key={service.title}
              className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-100 hover:shadow-xl"
            >
              <div className="mb-6 relative h-48 w-full overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src="/imagens/servicos-card.png"
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-slate-600"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-7">
                <Button
                  href="#contato"
                  variant="ghost"
                  className="w-full justify-center border border-slate-200 px-4 py-2.5 text-sm"
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