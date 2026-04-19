import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { RecrutementForm } from "@/components/RecrutementForm";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Recrutement",
  description:
    "Rejoignez S3A : soudeurs, chaudronniers, tuyauteurs, monteurs, techniciens. Envoyez votre candidature spontanée avec votre CV.",
  alternates: { canonical: "/recrutement" },
};

const profils = [
  "Soudeur qualifié",
  "Chaudronnier",
  "Tuyauteur industriel",
  "Monteur sur site",
  "Dessinateur / Projeteur",
  "Technicien de fabrication",
];

export default function RecrutementPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recrutement"
        title="Rejoignez les équipes S3A"
        description="Nous recrutons régulièrement des profils techniques pour accompagner notre croissance, en atelier comme sur chantier."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-s3a-anthracite">
              Profils recherchés
            </h2>
            <p className="mt-3 text-base leading-7 text-s3a-grey">
              S3A est une société à taille humaine qui mise sur la compétence
              technique, la rigueur et l'engagement sur les chantiers. Nous
              accueillons les candidatures spontanées sur les profils suivants
              (liste non exhaustive).
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {profils.map((p) => (
                <li
                  key={p}
                  className="rounded-lg border border-black/5 bg-white px-4 py-3 text-sm font-medium text-s3a-anthracite shadow-sm"
                >
                  {p}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-lg font-extrabold tracking-tight text-s3a-anthracite">
              Pourquoi nous rejoindre ?
            </h3>
            <ul className="mt-4 space-y-3 text-base leading-7 text-s3a-grey">
              <li>• Un atelier équipé d'un parc machines moderne.</li>
              <li>• Des projets variés, du bâtiment à l'industrie.</li>
              <li>• Une équipe soudée et un savoir-faire reconnu.</li>
              <li>• Des chantiers au Maroc et à l'étranger.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold tracking-tight text-s3a-anthracite">
              Candidature spontanée
            </h2>
            <p className="mt-2 text-sm text-s3a-grey">
              Champs marqués d'un * obligatoires. CV au format PDF, 5 Mo max.
            </p>
            <div className="mt-6">
              <RecrutementForm />
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Recrutement", href: "/recrutement" },
        ]}
      />
    </>
  );
}
