"use client";

import { useRef, useState, type FormEvent } from "react";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import { Section } from "./Section";

const initialForm = { name: "", email: "", message: "" };

export function FormContact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const update = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (sent) setSent(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current?.checkValidity()) return;

    // Intégration back-end à brancher ici (route handler / service d'envoi).
    console.log("Message envoyé :", form);

    setForm(initialForm);
    setSent(true);
  };

  const fieldClass =
    "mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/70 transition-colors duration-150 focus:border-accent focus:outline-none";

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Travaillons ensemble"
      description="Un projet, une question ou simplement l'envie d'échanger ? Écrivez-moi, je vous réponds rapidement."
    >
      <div className="max-w-2xl">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Nom
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Votre nom"
                value={form.name}
                onChange={(event) => update("name", event.target.value)}
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="vous@exemple.com"
                value={form.email}
                onChange={(event) => update("email", event.target.value)}
                className={fieldClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Dites-moi tout…"
              value={form.message}
              onChange={(event) => update("message", event.target.value)}
              className={`${fieldClass} resize-y`}
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-accent-hover dark:text-neutral-900"
            >
              Envoyer le message
            </button>

            <p role="status" aria-live="polite" className="min-h-5 text-sm">
              {sent ? (
                <span className="inline-flex items-center gap-1.5 text-accent">
                  <HiOutlineCheckCircle aria-hidden="true" className="h-4 w-4" />
                  Merci ! Votre message a bien été envoyé.
                </span>
              ) : null}
            </p>
          </div>
        </form>
      </div>
    </Section>
  );
}
