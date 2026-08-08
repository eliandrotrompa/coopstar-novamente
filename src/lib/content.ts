import {
  Award,
  Bike,
  CalendarClock,
  Clock,
  FileCheck2,
  Handshake,
  MapPin,
  PackageCheck,
  PhoneCall,
  Route,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface Service {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

export interface Differentiator {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const navItems: NavItem[] = [
  { label: "Início", href: "#inicio", id: "inicio" },
  { label: "Quem Somos", href: "#sobre", id: "sobre" },
  { label: "Serviços", href: "#servicos", id: "servicos" },
  { label: "Como Funciona", href: "#processo", id: "processo" },
  { label: "FAQ", href: "#faq", id: "faq" },
  { label: "Contato", href: "#contato", id: "contato" },
];

export const services: Service[] = [
  {
    title: "Moto Frete",
    description:
      "Entregas rápidas de documentos e pequenos volumes de um ponto a outro da cidade. O combo perfeito para quem precisa de agilidade.",
    features: [
      "Serviços bancários, cartórios e despachos",
      "Retiradas e entregas em aeroportos",
      "Acompanhamento e compromisso com horários",
    ],
    icon: Bike,
  },
  {
    title: "Delivery Contínuo",
    description:
      "Se sua empresa tem grande volume de documentos ou encomendas leves, implantamos um serviço de delivery com o melhor custo-benefício.",
    features: [
      "Farmácias, pizzarias, restaurantes e autopeças",
      "Rotas planejadas para reduzir custos",
      "Frota dedicada ao seu negócio",
    ],
    icon: PackageCheck,
  },
  {
    title: "Fora da Capital",
    description:
      "Levamos suas entregas além da capital com orçamento sob medida. Atendemos São Paulo (capital) e Grande São Paulo com agilidade.",
    features: [
      "Entregas na Grande São Paulo",
      "Orçamentos sob medida",
      "Suporte para combinar coleta e destino",
    ],
    icon: Route,
  },
];

export const differentiators: Differentiator[] = [
  {
    title: "Atendimento 24h",
    description:
      "Funcionamos 24 horas, de segunda a segunda-feira, para nunca deixar sua empresa na mão.",
    icon: Clock,
  },
  {
    title: "Agendamento com hora marcada",
    description:
      "Combine a coleta no horário que for melhor para você. Previsibilidade do início ao fim.",
    icon: CalendarClock,
  },
  {
    title: "Equipe especializada",
    description:
      "Profissionais treinados para transportar documentos e pequenos volumes com cuidado e pontualidade.",
    icon: ShieldCheck,
  },
  {
    title: "Mais de 9 anos de mercado",
    description:
      "Experiência consolidada que transforma a Coopstar Express em referência no seguimento.",
    icon: Award,
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Solicite um orçamento",
    description:
      "Ligue, envie um e-mail ou preencha o formulário. Retornamos rapidamente com o melhor preço.",
    icon: PhoneCall,
  },
  {
    step: "02",
    title: "Agende a coleta",
    description:
      "Escolha o dia e a hora. Nosso atendimento funciona 24 horas, de segunda a segunda.",
    icon: CalendarClock,
  },
  {
    step: "03",
    title: "Coletamos e entregamos",
    description:
      "Um motofretista especializado coleta no ponto de partida e entrega no destino com agilidade.",
    icon: Bike,
  },
  {
    step: "04",
    title: "Finalize com segurança",
    description:
      "Conferência da entrega e confirmação para você. Simples, rápido e sem burocracia.",
    icon: FileCheck2,
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Quais áreas vocês atendem?",
    answer:
      "Atendemos São Paulo (capital) e Grande São Paulo. Para serviços fora da capital, basta solicitar um orçamento e nossa equipe confirma a viabilidade e o valor.",
  },
  {
    question: "O atendimento é realmente 24 horas?",
    answer:
      "Sim. Funcionamos 24 horas por dia, de segunda a segunda-feira, inclusive com agendamento por hora marcada para melhorar a previsibilidade da sua rotina.",
  },
  {
    question: "Como faço para agendar uma coleta?",
    answer:
      "Você pode ligar para (11) 5052-3563, enviar um e-mail ou preencher o formulário de contato. Informamos o orçamento e agendamos a coleta no melhor horário para você.",
  },
  {
    question: "Quais tipos de volumes podem ser transportados?",
    answer:
      "Somos especializados em documentos e pequenos volumes, incluindo serviços bancários, cartórios, despachos, retiradas em aeroportos e encomendas leves.",
  },
  {
    question: "Como solicito um orçamento para entregas fora da capital?",
    answer:
      "Entre em contato pelo telefone ou formulário informando origem, destino e tipo de mercadoria. Retornamos com um orçamento sob medida para o seu caso.",
  },
];

export const sectionIds = navItems.map((item) => item.id);

export const aboutParagraphs = [
  "A Coopstar Express é uma empresa especializada em entregas e coletas e já atua há mais de nove anos no mercado. Oferecemos ótimos serviços e desempenhamos uma função importante para nossos clientes: agilizar os mais diversos processos, tornando-nos uma empresa de destaque neste seguimento.",
  "Atendemos em São Paulo (capital) e Grande São Paulo, com uma equipe especializada para suprir a necessidade e garantir o sucesso da sua empresa. Funcionamos 24 horas de segunda a segunda-feira, com agendamento por hora marcada.",
];

export const heroStats = [
  { value: "9+", label: "anos de experiência" },
  { value: "24h", label: "de atendimento" },
  { value: "SP", label: "capital e Grande SP" },
];

export const aboutHighlights = [
  "Mais de 9 anos de mercado",
  "Atendimento 24h com hora marcada",
  "Equipe especializada em Moto Frete",
  "São Paulo capital e Grande São Paulo",
];

export const contactChannels = [
  {
    label: "Telefone",
    value: "(11) 5052-3563 · 5051-4442",
    href: "tel:+551150523563",
    icon: PhoneCall,
  },
  {
    label: "E-mail",
    value: "coopstar_express@hotmail.com",
    href: "mailto:coopstar_express@hotmail.com",
    icon: Handshake,
  },
  {
    label: "Endereço",
    value: "Av. Jurucê, 898 – Moema, São Paulo – SP",
    href: "https://maps.google.com/?q=Av.+Juruc%C3%AA,+898+-+Moema+-+S%C3%A3o+Paulo+-+SP",
    icon: MapPin,
  },
];
