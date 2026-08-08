import { Clock, ExternalLink, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { LazyMap } from "./LazyMap";

export function Localizacao() {
  const mapsUrl =
    "https://maps.google.com/?q=Av.+Juruc%C3%AA,+898+-+Moema+-+S%C3%A3o+Paulo+-+SP";

  return (
    <section id="localizacao" className="section-space bg-white">
      <Container>
        <SectionHeading
          eyebrow="Localização"
          title="Onde estamos"
          description="Fácil de chegar, central para suas entregas. Confira nosso endereço e horário de atendimento."
        />

        <Reveal className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="grid gap-4 lg:col-span-2">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-7">
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <MapPin className="size-6" aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Endereço</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {site.address.street}
                <br />
                {site.address.district} – {site.address.city}/{site.address.state}
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800 focus-ring"
              >
                Como chegar
                <ExternalLink className="size-4" aria-hidden />
              </a>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-7">
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <Clock className="size-6" aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Horário de atendimento</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                24 horas por dia
                <br />
                De segunda a segunda-feira
              </p>
            </div>
          </div>

          <div className="h-[420px] overflow-hidden rounded-2xl border border-slate-100 shadow-xl lg:col-span-3 lg:h-auto">
            <LazyMap
              title={`Mapa da ${site.name} em ${site.address.district}`}
              className="h-full min-h-[420px]"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}