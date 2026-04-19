"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function RecrutementForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/recrutement", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Échec de l'envoi.");
      }
      setStatus("success");
      form.reset();
      setFileName("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Échec de l'envoi.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nom *" name="nom" required autoComplete="name" />
        <Field
          label="Email *"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Téléphone" name="tel" type="tel" autoComplete="tel" />
        <Field label="Poste souhaité" name="poste" />
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
          rows={5}
          className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2.5 text-sm text-s3a-anthracite shadow-sm focus:border-s3a-red focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="cv"
          className="block text-sm font-medium text-s3a-anthracite"
        >
          CV (PDF, max 5 Mo)
        </label>
        <input
          id="cv"
          name="cv"
          type="file"
          accept="application/pdf"
          onChange={(e) => setFileName(e.currentTarget.files?.[0]?.name ?? "")}
          className="mt-1 block w-full text-sm text-s3a-anthracite file:mr-4 file:rounded-md file:border-0 file:bg-s3a-anthracite file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-s3a-red"
        />
        {fileName && (
          <p className="mt-2 text-xs text-s3a-grey">Fichier : {fileName}</p>
        )}
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
          {status === "sending" ? "Envoi…" : "Envoyer ma candidature"}
        </button>
        {status === "success" && (
          <p className="text-sm font-medium text-green-700" role="status">
            Merci, votre candidature a bien été reçue.
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
