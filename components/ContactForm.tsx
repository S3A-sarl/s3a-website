"use client";

import { useState } from "react";
import { services } from "@/lib/services";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Échec de l'envoi.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Échec de l'envoi.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nom *" name="nom" required autoComplete="name" />
        <Field label="Société" name="societe" autoComplete="organization" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Email *"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
        <Field label="Téléphone" name="tel" type="tel" autoComplete="tel" />
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-s3a-anthracite"
        >
          Service concerné
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2.5 text-sm text-s3a-anthracite shadow-sm focus:border-s3a-red focus:outline-none"
        >
          <option value="">— Sélectionner —</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.titre}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-s3a-anthracite"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={6}
          className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2.5 text-sm text-s3a-anthracite shadow-sm focus:border-s3a-red focus:outline-none"
        />
      </div>

      <div aria-hidden className="hidden">
        <label>
          Site web
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-md bg-s3a-red px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-s3a-red-dark disabled:opacity-60"
        >
          {status === "sending" ? "Envoi…" : "Envoyer la demande"}
        </button>
        {status === "success" && (
          <p className="text-sm font-medium text-green-700" role="status">
            Merci, votre demande a bien été envoyée. Nous revenons vers vous.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm font-medium text-s3a-red" role="alert">
            {error}
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-s3a-anthracite"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2.5 text-sm text-s3a-anthracite shadow-sm focus:border-s3a-red focus:outline-none"
      />
    </div>
  );
}
