import { differentiators } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function Diferenciais() {
  return (
    <section id="diferenciais" className="section-space bg-navy-50/60">
      <Container>
        <SectionHeading
          eyebrow="Por que a Coopstar"
          title="Feitos para entregar com confiança"
          description="A combinação exata de disponibilidade, experiência e comprometimento para cuidar das suas entregas como se fossem nossas."
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => (
            <StaggerItem
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-lg"
            >
              <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <item.icon className="size-6" aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}