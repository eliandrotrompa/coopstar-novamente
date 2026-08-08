import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { aboutHighlights, aboutParagraphs } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function Sobre() {
  return (
    <section id="sobre" className="section-space bg-slate-50/80">
      <Container>
        <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-900/5 sm:p-12 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
                  Quem Somos
                </p>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Agilidade que faz a diferença na sua operação
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-5 space-y-4">
                  {aboutParagraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {aboutHighlights.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50 px-3.5 py-2 text-sm font-semibold text-slate-800">
                      <CheckCircle2 className="size-4 shrink-0 text-brand-600" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button href="#contato" withArrow>
                    Solicitar orçamento
                  </Button>
                  <Button href="#servicos" variant="ghost">
                    Ver serviços
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal className="relative">
                <div className="relative overflow-hidden rounded-2xl border border-slate-100 shadow-xl" suppressHydrationWarning>
                  <div className="relative aspect-[4/3] w-full sm:aspect-[4/4]">
                    <Image
                      src="/imagens/sobre-nova.jpg"
                      alt="Equipe Coopstar Express"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 rounded-xl bg-brand-700 px-5 py-3.5 text-white shadow-lg sm:-left-6" suppressHydrationWarning>
                  <p className="text-xl font-extrabold sm:text-2xl">9+ anos</p>
                  <p className="text-xs text-brand-100">de excelência no mercado</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}