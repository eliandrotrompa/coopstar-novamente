import { NextResponse } from "next/server";
import { isMailConfigured, sendContactMail, type ContactPayload } from "@/lib/mail";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function sanitize(value: unknown, maxLength = 500): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, maxLength);
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Dados inválidos." }, { status: 400 });
  }

  const { nome, email, assunto, mensagem, telefone } = (body ?? {}) as Record<
    string,
    unknown
  >;

  const nomeClean = sanitize(nome, 120);
  const emailClean = sanitize(email, 180);
  const assuntoClean = sanitize(assunto, 180);
  const mensagemClean = sanitize(mensagem, 3000);
  const telefoneClean = sanitize(telefone, 60);

  if (!nomeClean || !emailClean || !assuntoClean || !mensagemClean) {
    return NextResponse.json(
      { ok: false, error: "Preencha nome, e-mail, assunto e mensagem." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(emailClean)) {
    return NextResponse.json(
      { ok: false, error: "Informe um e-mail válido." },
      { status: 400 }
    );
  }

  const payload: ContactPayload = {
    nome: nomeClean,
    email: emailClean,
    telefone: telefoneClean || undefined,
    assunto: assuntoClean,
    mensagem: mensagemClean,
  };

  if (!isMailConfigured()) {
    console.warn(
      "[api/contato] SMTP não configurado. Simulando envio em ambiente de desenvolvimento:",
      payload
    );
    return NextResponse.json({
      ok: true,
      simulated: true,
      message: "Mensagem recebida (envio simulado – configure SMTP_HOST).",
    });
  }

  try {
    await sendContactMail(payload);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[api/contato] Falha ao enviar e-mail:", error);
    return NextResponse.json(
      { ok: false, error: "Não foi possível enviar o e-mail. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}