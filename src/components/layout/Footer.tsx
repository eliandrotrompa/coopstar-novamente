import { Clock, MapPin, Phone } from "lucide-react";
import { navItems } from "@/lib/content";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo dark />
          <p className="text-sm leading-relaxed text-slate-400">
            Serviços de moto frete e delivery para São Paulo capital e Grande
            SP, com agilidade e compromisso com cada entrega.
          </p>
        </div>

        <nav aria-label="Links do rodapé">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Navegação
          </h3>
          <ul className="space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-slate-400 transition-colors hover:text-brand-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Contato
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden />
              <a
                href={site.phoneHref}
                className="text-slate-400 transition-colors hover:text-brand-400"
              >
                {site.phone}
                <br />
                {site.phoneAlt}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden />
              <span className="text-slate-400">
                {site.address.street} – {site.address.district}, {site.address.city} – {site.address.state}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden />
              <span className="text-slate-400">{site.hours}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            E-mail
          </h3>
          <p className="text-sm leading-relaxed text-slate-400">
            <a
              href={`mailto:${site.email}`}
              className="text-slate-400 transition-colors hover:text-brand-400"
            >
              {site.email}
            </a>
          </p>
        </div>
      </Container>

      <div className="border-t border-navy-800">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year} Coopstar Express – Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido por{" "}
            <a
              href="http://www.estudiocriarte.com.br/promohotsite"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-brand-400"
            >
              Estúdio Criarte
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}