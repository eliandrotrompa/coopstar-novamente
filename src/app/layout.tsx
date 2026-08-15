import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCall } from "@/components/layout/FloatingCall";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description:
    "Serviços de moto frete e delivery em São Paulo capital e Grande SP. Entregas rápidas de documentos e pequenos volumes, 24 horas, com agendamento por hora marcada.",
  keywords: [
    "moto frete",
    "motoboy",
    "entregas expressas",
    "delivery em sao paulo",
    "entrega de documentos",
    "coopstar express",
    "motociclista entrega",
  ],
  applicationName: site.name,
  authors: [{ name: "Estúdio Criarte" }],
  creator: "Estúdio Criarte",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} – Entregas e coletas rápidas em São Paulo`,
    description:
      "Moto frete e delivery em São Paulo capital e Grande SP. Atendimento 24 horas com hora marcada.",
    images: [
      {
        url: `${site.url}/imagens/hero-oriental.png`,
        width: 1024,
        height: 1024,
        alt: "Moto frete da Coopstar Express em São Paulo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: "Moto frete e entregas rápidas em São Paulo, 24 horas.",
    images: [`${site.url}/imagens/hero-oriental.png`],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans">
        <a
          href="#conteudo"
          className="sr-only z-[60] rounded-full bg-brand-700 px-5 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <FloatingCall />
      </body>
    </html>
  );
}