"use client";

import { useMemo, useState } from "react";
import {
  realisationCategories,
  type Realisation,
} from "@/lib/realisations";

type Props = { items: Realisation[] };

export function Gallery({ items }: Props) {
  const [filter, setFilter] = useState<string>("all");
  const [active, setActive] = useState<Realisation | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? items : items.filter((r) => r.categorie === filter)),
    [filter, items]
  );

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {realisationCategories.map((cat) => {
          const on = cat.slug === filter;
          return (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setFilter(cat.slug)}
              aria-pressed={on}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                on
                  ? "border-s3a-red bg-s3a-red text-white"
                  : "border-black/10 bg-white text-s3a-anthracite hover:border-s3a-red/40 hover:text-s3a-red"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((r) => (
          <li key={r.id}>
            <button
              type="button"
              onClick={() => setActive(r)}
              className="group block w-full overflow-hidden rounded-xl border border-black/5 bg-white text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div
                role="img"
                aria-label={r.titre}
                className="aspect-[4/3] w-full bg-gradient-to-br from-s3a-anthracite/15 via-s3a-sand to-s3a-red/15"
              />
              <div className="p-5">
                <h3 className="text-base font-semibold text-s3a-anthracite group-hover:text-s3a-red">
                  {r.titre}
                </h3>
                <p className="mt-1 text-sm text-s3a-grey">{r.description}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className="mt-10 text-sm text-s3a-grey">
          Aucune réalisation dans cette catégorie pour le moment.
        </p>
      )}

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.titre}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-3xl overflow-hidden rounded-xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              role="img"
              aria-label={active.titre}
              className="aspect-[4/3] w-full bg-gradient-to-br from-s3a-anthracite/20 via-s3a-sand to-s3a-red/20"
            />
            <div className="p-6">
              <h3 className="text-xl font-extrabold text-s3a-anthracite">
                {active.titre}
              </h3>
              <p className="mt-2 text-sm text-s3a-grey">{active.description}</p>
            </div>
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Fermer"
              className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
