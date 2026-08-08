import { differentiators } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function Diferenciais() {
  return (
    <section id="diferenciais" className="section-space relative overflow-hidden bg-navy-950">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-700/10 blur-[120px]"
        aria-hidden
      />
      <Container className="relative">
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
      </Container>
    </section>
  );
}