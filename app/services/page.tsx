import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Nos services",
  description:
    "Les 8 activités S3A : structures métalliques, tuyauterie gros diamètre, pièces spéciales, raccords, pièces de regard, pose de conduite, inox, balisage.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Nos 8 domaines d'activité"
        description="Fabrication, montage et pose : S3A couvre la chaîne complète de la chaudronnerie et de la tuyauterie industrielle."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded bg-s3a-red text-base font-bold text-white">
                        {s.numero}
                      </span>
                      <h2 className="text-lg font-semibold text-s3a-anthracite group-hover:text-s3a-red">
                        {s.titre}
                      </h2>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-s3a-grey">
                      {s.accroche}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-s3a-red">
                    En savoir plus →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />
    </>
  );
}
