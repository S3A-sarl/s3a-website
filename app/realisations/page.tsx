import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Gallery } from "@/components/Gallery";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { realisations } from "@/lib/realisations";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Galerie de chantiers et produits fabriqués par S3A : passerelles, charpentes, collecteurs, conduites, ouvrages inox, pièces de regard.",
  alternates: { canonical: "/realisations" },
};

export default function RealisationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Réalisations"
        title="Nos chantiers et fabrications"
        description="Un aperçu des ouvrages conçus, fabriqués et posés par S3A pour ses clients du bâtiment et de l'industrie."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Gallery items={realisations} />
      </section>

      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Réalisations", href: "/realisations" },
        ]}
      />
    </>
  );
}
