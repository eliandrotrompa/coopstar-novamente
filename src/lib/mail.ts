import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

export interface ContactPayload {
  nome: string;
  email: string;
  telefone?: string;
  assunto: string;
  mensagem: string;
}

export function isMailConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS
  );
}

let transporter: Transporter | null = null;

function getTransport(): Transporter {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return transporter;
}

export async function sendContactMail(payload: ContactPayload): Promise<void> {
  const { nome, email, telefone, assunto, mensagem } = payload;
  const data = new Date().toLocaleDateString("pt-BR");
  const hora = new Date().toLocaleTimeString("pt-BR");

  const recipients = [
    process.env.MAIL_TO,
    process.env.MAIL_TO_ALT,
  ].filter((value): value is string => Boolean(value));

  const text = [
    `Nome: ${nome}`,
    `E-mail: ${email}`,
    telefone ? `Telefone: ${telefone}` : null,
    `Assunto: ${assunto}`,
    `Mensagem:\n${mensagem}`,
    `Enviado em: ${data} às ${hora}`,
  ]
    .filter(Boolean)
    .join("\n");

  await getTransport().sendMail({
    from: process.env.MAIL_FROM ?? process.env.SMTP_USER,
    to: recipients.length > 0 ? recipients : (process.env.SMTP_USER as string),
    replyTo: email,
    subject: `[Site Coopstar] ${assunto}`,
    text,
  });
}