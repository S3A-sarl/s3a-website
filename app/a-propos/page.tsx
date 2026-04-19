import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "S3A, société marocaine de chaudronnerie et tuyauterie créée en 2005 à Kénitra. Fabrication et montage pour le bâtiment et l'industrie.",
  alternates: { canonical: "/a-propos" },
};

const savoirFaire = [
  {
    titre: "Cisaillage",
    description:
      "Découpe précise de tôles à l'épaisseur requise, avec respect des tolérances dimensionnelles.",
  },
  {
    titre: "Pliage",
    description:
      "Mise en forme de tôles sur presse plieuse pour obtenir les angles et profils demandés.",
  },
  {
    titre: "Poinçonnage",
    description:
      "Perçage et découpe par poinçon pour trous de fixation, passages et formes spéciales.",
  },
  {
    titre: "Cintrage",
    description:
      "Mise en courbe de profilés et tôles pour la fabrication de pièces arrondies ou roulées.",
  },
  {
    titre: "Soudage",
    description:
      "Soudure qualifiée sur acier, fonte et inox. Contrôle visuel et dimensionnel systématique.",
  },
  {
    titre: "Montage sur site",
    description:
      "Nos équipes se déplacent sur chantier pour assembler, poser et raccorder les ouvrages.",
  },
];

export default function AProposPage() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title={`${siteConfig.name} — fabrication et montage depuis ${siteConfig.foundedYear}`}
        description="Société marocaine de chaudronnerie et tuyauterie basée à Kénitra, au service du bâtiment et de l'industrie."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-s3a-anthracite">
          Qui sommes-nous ?
        </h2>
        <div className="mt-6 space-y-4 text-base leading-7 text-s3a-grey">
          <p>
            La dénomination sociale de la société est{" "}
            <strong>
              Adduction – Aménagement – Assainissement (S3A SARL d'associé
              unique)
            </strong>
            .
          </p>
          <p>
            S3A a été créée en <strong>{siteConfig.foundedYear}</strong> et a
            développé son activité dans la fabrication de pièces de
            chaudronnerie et des travaux de tôlerie. Ses champs d'actions sont
            le bâtiment et l'industrie. Ses fabrications sont pour la plupart
            réalisées à partir des plans fournis par ses clients.
          </p>
          <p>
            De par son personnel qualifié et son parc de machines récentes, la
            société S3A offre simultanément des moyens et un savoir-faire en{" "}
            <strong>
              cisaillage, pliage, poinçonnage, cintrage et soudage
            </strong>
            .
          </p>
        </div>
      </section>

      <section className="bg-s3a-sand">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-s3a-anthracite">
            Notre savoir-faire
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-s3a-grey">
            Six métiers techniques réunis sous un même toit pour maîtriser
            toute la chaîne de fabrication, de la tôle brute à l'ouvrage posé.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {savoirFaire.map((item) => (
              <li
                key={item.titre}
                className="rounded-xl border border-black/5 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-s3a-anthracite">
                  {item.titre}
                </h3>
                <p className="mt-2 text-sm leading-6 text-s3a-grey">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-s3a-anthracite">
              Nos valeurs
            </h2>
            <ul className="mt-6 space-y-4 text-base leading-7 text-s3a-grey">
              <li>
                <strong className="text-s3a-anthracite">
                  Exigence technique.
                </strong>{" "}
                Chaque pièce est fabriquée selon les plans, les tolérances et
                les spécifications du client.
              </li>
              <li>
                <strong className="text-s3a-anthracite">
                  Personnel qualifié.
                </strong>{" "}
                Soudeurs, chaudronniers et monteurs formés et expérimentés.
              </li>
              <li>
                <strong className="text-s3a-anthracite">Parc récent.</strong>{" "}
                Machines modernes permettant précision, productivité et
                polyvalence.
              </li>
              <li>
                <strong className="text-s3a-anthracite">
                  Respect des délais.
                </strong>{" "}
                Engagement sur le planning pour tenir vos livraisons.
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-s3a-anthracite p-8 text-white">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Nos secteurs d'intervention
            </h2>
            <ul className="mt-6 space-y-3 text-base">
              <li>• Bâtiment et ouvrages industriels</li>
              <li>• Adduction d'eau potable</li>
              <li>• Assainissement</li>
              <li>• Travaux publics</li>
              <li>• Industrie et process</li>
            </ul>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-s3a-red px-5 py-3 text-sm font-semibold text-white hover:bg-s3a-red-dark"
            >
              Voir nos services →
            </Link>
          </div>
        </div>
      </section>

      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "À propos", href: "/a-propos" },
        ]}
      />
    </>
  );
}
