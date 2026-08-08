"use client";

import { useState, type FormEvent } from "react";
import { Loader2, MailCheck, PhoneCall, Send } from "lucide-react";
import { contactChannels } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/utils/cn";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30";

export function Contato() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const honeypot = data.get("website");
    if (honeypot) {
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = (await response.json()) as { success: boolean };

      if (!response.ok || !result.success) {
        throw new Error("Não foi possível enviar a mensagem.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Não foi possível enviar a mensagem."
      );
    }
  }

  return (
    <section id="contato" className="section-space bg-white">
      <Container>
        <SectionHeading
          eyebrow="Contato"
          title="Vamos resolver suas entregas hoje"
          description="Preencha o formulário ou fale diretamente com um representante. Respondemos rápido e com orçamento sob medida."
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-5">
          <Reveal className="space-y-4 lg:col-span-2">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-100 hover:shadow-md"
              >
                <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <channel.icon className="size-5" aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                    {channel.label}
                  </p>
                  <p className="mt-1 font-medium text-slate-800 group-hover:text-brand-700">
                    {channel.value}
                  </p>
                </div>
              </a>
            ))}

            <div className="rounded-2xl bg-brand-700 p-6 text-white shadow-lg shadow-brand-700/25">
              <p className="font-semibold">Atendimento 24 horas</p>
              <p className="mt-1 text-sm text-brand-100">
                De segunda a segunda-feira, inclusive feriados.
              </p>
              <a
                href={contactChannels[0].href}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50 focus-ring"
              >
                <PhoneCall className="size-4" aria-hidden />
                Ligar agora
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl sm:p-8"
              noValidate={false}
            >
              <input type="hidden" name="access_key" value="b3da246c-ddd4-49d4-9f70-b52a8d347401" />

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Nome *
                  </label>
                  <input id="nome" name="from_name" type="text" required autoComplete="name" className={inputClasses} placeholder="Seu nome" />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                    E-mail *
                  </label>
                  <input id="email" name="email" type="email" required autoComplete="email" className={inputClasses} placeholder="voce@empresa.com.br" />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="telefone" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Telefone
                  </label>
                  <input id="telefone" name="phone" type="tel" autoComplete="tel" className={inputClasses} placeholder="(11) 99999-9999" />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="assunto" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Assunto *
                  </label>
                  <input id="assunto" name="subject" type="text" required className={inputClasses} placeholder="Ex.: Moto Frete" />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Mensagem *
                  </label>
                  <textarea id="mensagem" name="message" required rows={5} className={cn(inputClasses, "resize-y")} placeholder="Descreva coleta, destino e urgência." />
                </div>
              </div>

              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                className="hidden"
              />

              <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="text-xs text-slate-400">
                  Campos com * são obrigatórios.
                </p>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-800 focus-ring disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" aria-hidden />
                      Enviando…
                    </>
                  ) : (
                    <>
                      <Send className="size-4" aria-hidden />
                      Enviar mensagem
                    </>
                  )}
                </button>
              </div>

              {status === "success" && (
                <p
                  role="status"
                  className="mt-4 flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
                >
                  <MailCheck className="size-4 shrink-0" aria-hidden />
                  Mensagem enviada com sucesso! Agradecemos. Retornaremos em breve.
                </p>
              )}

              {status === "error" && (
                <p
                  role="alert"
                  className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                >
                  {errorMessage}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}