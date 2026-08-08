import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { aboutHighlights, aboutParagraphs } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function Sobre() {
  return (
    <section id="sobre" className="section-space bg-white">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
              Quem Somos
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Agilidade que faz a diferença na sua operação
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 space-y-5">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="leading-relaxed text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {aboutHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#contato" withArrow>
                Solicitar orçamento
              </Button>
              <Button href="#servicos" variant="ghost">
                Ver serviços
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal className="relative mt-10 lg:mt-0">
          <div className="relative overflow-hidden rounded-2xl shadow-xl" suppressHydrationWarning>
            <div className="relative w-full aspect-[4/3] sm:aspect-[4/5] lg:aspect-square">
              <Image
                src="/imagens/sobre-nova.jpg"
                alt="Equipe Coopstar Express"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 sm:-left-8 rounded-2xl bg-brand-700 px-6 py-5 text-white shadow-lg" suppressHydrationWarning>
            <p className="text-2xl font-extrabold">9+ anos</p>
            <p className="text-sm text-brand-100">de experiência no mercado</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}