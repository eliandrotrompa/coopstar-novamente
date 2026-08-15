export const site = {
  name: "Coopstar Express",
  legalName: "Coopstar Express",
  tagline: "Entregas e coletas na velocidade que sua empresa precisa",
  description:
    "Moto frete e delivery em São Paulo capital e Grande SP. Entregas rápidas de documentos e pequenos volumes, 24 horas, com agendamento por hora marcada.",
  phone: "(11) 5052-3563",
  phoneAlt: "(11) 5051-4442",
  phoneHref: "tel:+551150523563",
  phoneAltHref: "tel:+551150514442",
  email: "coopstar_express@hotmail.com",
  adminEmail: "contato@coopstarexpress.com.br",
  address: {
    street: "Av. Jurucê, 898",
    district: "Moema",
    city: "São Paulo",
    state: "SP",
    cep: "04080-001",
  },
  mapsUrl:
    "https://maps.google.com/?q=Av.+Juruc%C3%AA,+898+-+Moema+-+S%C3%A3o+Paulo+-+SP",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Av.+Juruc%C3%AA,+898+-+Moema,+S%C3%A3o+Paulo+SP&z=15&output=embed",
  hours: "24 horas, de segunda a segunda-feira",
  yearsInMarket: "Mais de 9 anos de mercado",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;