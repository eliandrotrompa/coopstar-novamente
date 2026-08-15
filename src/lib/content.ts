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
import { site } from "./site";

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface Service {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  badge: string;
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
    title: "Moto Frete Avulso & Ponto a Ponto",
    subtitle: "Agilidade imediata para urgências",
    description:
      "Serviço de entrega expressa rápida de documentos, contratos e pequenos volumes entre empresas, cartórios, bancos e escritórios na grande São Paulo.",
    features: [
      "Serviços bancários, cartórios e despachos de documentos",
      "Coleta rápida e entregas urgentes ponto a ponto",
      "Retiradas e entregas prioritárias em aeroportos e terminais",
      "Confirmação de protocolo e rastreamento da entrega",
    ],
    icon: Bike,
    badge: "Mais Solicitado",
  },
  {
    title: "Delivery Contínuo & Frota Dedicada",
    subtitle: "Logística contínua sob medida para sua empresa",
    description:
      "Contrate um motofretista ou frota exclusiva para a rotina diária da sua empresa. Reduza custos operacionais com rotas otimizadas e entregas garantidas.",
    features: [
      "Atendimento para farmácias, e-commerce, escritórios e autopeças",
      "Contrato mensal com custo fixo previsível e vantajoso",
      "Motofretistas uniformizados e treinados com frota própria",
      "Substituição imediata em caso de imprevistos na rota",
    ],
    icon: PackageCheck,
    badge: "Melhor Custo-Benefício",
  },
  {
    title: "Entregas Fora da Capital & Grande SP",
    subtitle: "Cobertura regional expandida",
    description:
      "Levamos suas encomendas além dos limites da capital com transporte rápido e seguro para municípios da Grande São Paulo e regiões metropolitanas.",
    features: [
      "Atendimento completo na Grande São Paulo e região",
      "Orçamentos sob medida adaptados ao seu volume",
      "Agendamento flexível com horários marcados",
      "Acompanhamento personalizado de coleta ao destino final",
    ],
    icon: Route,
    badge: "Atendimento Regional",
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

export const testimonials: Testimonial[] = [
  {
    name: "Ricardo Mendonça",
    role: "Gerente de Operações",
    company: "Advocacia Mendonça & Associados",
    content:
      "A Coopstar Express atende nosso escritório diariamente na entrega de prazos e cartórios. O atendimento 24 horas e a pontualidade são impecáveis. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "Camila Silveira",
    role: "Diretora Administrativa",
    company: "PharmaMed Distribuidora",
    content:
      "Implantamos o delivery contínuo com motofretistas dedicados da Coopstar e nossa taxa de satisfação de entregas subiu para 100%. Reduzimos nossos custos logísticos substancialmente.",
    rating: 5,
  },
  {
    name: "Marcos Vinícius",
    role: "Coordenador de Logística",
    company: "TechParts Autopeças SP",
    content:
      "Precisávamos de entregas urgentes na Grande SP e a Coopstar foi a única empresa que atendeu com rapidez, transparência e valor justo. Excelente trabalho da equipe!",
    rating: 5,
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
    value: `${site.phone} · ${site.phoneAlt}`,
    href: site.phoneHref,
    icon: PhoneCall,
  },
  {
    label: "E-mail",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Handshake,
  },
  {
    label: "Endereço",
    value: `${site.address.street} – ${site.address.district}, ${site.address.city} – ${site.address.state}`,
    href: site.mapsUrl,
    icon: MapPin,
  },
];
