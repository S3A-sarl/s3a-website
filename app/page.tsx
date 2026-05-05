import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-s3a-anthracite text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-28">
          <div className="lg:col-span-7">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-s3a-red" />
              Depuis {siteConfig.foundedYear}
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Chaudronnerie, tuyauterie et charpente métallique{" "}
              <span className="text-s3a-red">sur mesure</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">
              S3A fabrique et monte pour le bâtiment et l'industrie au Maroc :
              structures métalliques, tuyauterie gros diamètre, pièces
              mécano-soudées, raccords, pièces inox et ouvrages de regard.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-s3a-red px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-s3a-red-dark"
              >
                Demander un devis
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-white/60"
              >
                Découvrir nos services
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <dl className="grid grid-cols-2 gap-4 sm:gap-6">
              <Stat value="20+" label="Années d'expérience" />
              <Stat value="8" label="Domaines d'activité" />
              <Stat value="100%" label="Sur plans client" />
              <Stat value="MA et export" label="Maroc & export" />
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-s3a-red">
              Nos activités
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-s3a-anthracite sm:text-4xl">
              8 métiers, une même exigence.
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold text-s3a-red hover:text-s3a-red-dark"
          >
            Voir tous les services →
          </Link>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-s3a-red/30 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-s3a-sand">
                  <Image
                    src={s.image}
                    alt={s.titre}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-s3a-red text-sm font-bold text-white">
                      {s.numero}
                    </span>
                    <h3 className="text-base font-semibold text-s3a-anthracite group-hover:text-s3a-red">
                      {s.titreCourt}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-s3a-grey">
                    {s.accroche}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-s3a-sand">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-s3a-red">
              Notre savoir-faire
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-s3a-anthracite sm:text-4xl">
              Un atelier complet, des équipes qualifiées.
            </h2>
            <p className="mt-5 text-base leading-7 text-s3a-grey">
              Créée en {siteConfig.foundedYear} à Kénitra, S3A a développé un
              parc de machines récent et une équipe qualifiée couvrant
              l'ensemble des procédés de transformation de l'acier : cisaillage,
              pliage, poinçonnage, cintrage et soudage. Nous travaillons la
              plupart de nos fabrications à partir des plans de nos clients,
              pour le bâtiment comme pour l'industrie.
            </p>
            <Link
              href="/a-propos"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-s3a-red hover:text-s3a-red-dark"
            >
              En savoir plus sur S3A →
            </Link>
          </div>
          <ul className="grid grid-cols-2 gap-4">
            {[
              "Cisaillage",
              "Pliage",
              "Poinçonnage",
              "Cintrage",
              "Soudage",
              "Montage sur site",
            ].map((item) => (
              <li
                key={item}
                className="rounded-lg border border-black/5 bg-white px-5 py-4 text-sm font-semibold text-s3a-anthracite shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden bg-s3a-red text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-16 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Un projet ? Parlons-en.
            </h2>
            <p className="mt-2 max-w-2xl text-white/85">
              Envoyez-nous vos plans ou votre cahier des charges, nous revenons
              vers vous rapidement avec une proposition.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-s3a-anthracite px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-black"
            >
              Demander un devis
            </Link>
            <a
              href={`tel:${siteConfig.contact.phoneE164}`}
              className="inline-flex items-center justify-center rounded-md border border-white/40 px-6 py-3 text-base font-semibold text-white hover:border-white"
            >
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <dt className="text-sm text-white/70">{label}</dt>
      <dd className="mt-1 text-3xl font-extrabold tracking-tight text-white">
        {value}
      </dd>
    </div>
  );
}
