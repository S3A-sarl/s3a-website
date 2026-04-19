import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { getServiceBySlug, services } from "@/lib/services";
import { siteConfig } from "@/lib/siteConfig";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.titre,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.titre} — ${siteConfig.name}`,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.titre,
    description: service.metaDescription,
    provider: { "@id": `${siteConfig.url}/#org` },
    areaServed: siteConfig.address.countryCode,
    url: `${siteConfig.url}/services/${service.slug}`,
  };

  return (
    <>
      <PageHeader
        eyebrow={`Service ${service.numero}/8`}
        title={service.titre}
        description={service.accroche}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-base leading-7 text-s3a-grey">{service.description}</p>

        <h2 className="mt-12 text-2xl font-extrabold tracking-tight text-s3a-anthracite">
          Ce que nous réalisons
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {service.points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 rounded-lg border border-black/5 bg-white p-4 text-sm text-s3a-anthracite shadow-sm"
            >
              <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-s3a-red" />
              {p}
            </li>
          ))}
        </ul>

        {service.produits.length > 0 && (
          <>
            <h2 className="mt-12 text-2xl font-extrabold tracking-tight text-s3a-anthracite">
              Produits associés
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {service.produits.map((p) => (
                <li
                  key={p.nom}
                  className="rounded-full border border-s3a-red/30 bg-s3a-red/5 px-4 py-2 text-sm font-medium text-s3a-red"
                >
                  {p.nom}
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      <section className="bg-s3a-sand">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-s3a-anthracite">
              Autres services
            </h2>
            <Link
              href="/services"
              className="text-sm font-semibold text-s3a-red hover:text-s3a-red-dark"
            >
              Tout voir →
            </Link>
          </div>
          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            {related.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group block h-full rounded-xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-s3a-red/30 hover:shadow-md"
                >
                  <h3 className="text-base font-semibold text-s3a-anthracite group-hover:text-s3a-red">
                    {s.titreCourt}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-s3a-grey">
                    {s.accroche}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-s3a-red text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Un besoin en {service.titreCourt.toLowerCase()} ?
            </h2>
            <p className="mt-2 text-white/85">
              Envoyez-nous vos plans ou votre cahier des charges.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-s3a-red hover:bg-white/90"
          >
            Demander un devis
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.titre, href: `/services/${service.slug}` },
        ]}
      />
    </>
  );
}
