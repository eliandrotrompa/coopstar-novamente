import type { Metadata } from "next";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";
import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { Servicos } from "@/components/sections/Servicos";
import { Processo } from "@/components/sections/Processo";
import { Faq } from "@/components/sections/Faq";
import { Contato } from "@/components/sections/Contato";
import { Localizacao } from "@/components/sections/Localizacao";

export const metadata: Metadata = {
  title: "Entregas e coletas rápidas em São Paulo – Moto Frete 24h",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description:
    "Moto frete e delivery de documentos e pequenos volumes em São Paulo capital e Grande SP, 24 horas.",
  image: `${site.url}/imagens/hero-loira6.jpg`,
  telephone: `+55-11-5052-3563`,
  email: site.email,
  url: site.url,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.cep,
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.611724,
    longitude: -46.658195,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  areaServed: ["São Paulo", "Grande São Paulo"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero />
      <Sobre />
      <Diferenciais />
      <Servicos />
      <Processo />
      <Faq />
      <Contato />
      <Localizacao />
    </>
  );
}