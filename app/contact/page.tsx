import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez S3A à Kénitra pour un devis en chaudronnerie, tuyauterie, charpente ou pièces mécano-soudées. Téléphone, email et formulaire.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(
    `${siteConfig.address.street}, ${siteConfig.address.district}, ${siteConfig.address.city}, ${siteConfig.address.country}`
  );

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre projet"
        description="Envoyez-nous vos plans ou votre cahier des charges. Nos équipes reviennent vers vous rapidement."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-s3a-anthracite">
              Coordonnées
            </h2>
            <address className="mt-6 space-y-5 text-base not-italic leading-7 text-s3a-anthracite">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-s3a-red">
                  Adresse
                </p>
                <p className="mt-1">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.district}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.country}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-s3a-red">
                  Téléphone
                </p>
                <p className="mt-1">
                  <a
                    href={`tel:${siteConfig.contact.phoneE164}`}
                    className="hover:text-s3a-red"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <br />
                  <span className="text-sm text-s3a-grey">
                    Fax : {siteConfig.contact.fax}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-s3a-red">
                  Email
                </p>
                <p className="mt-1">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-s3a-red"
                  >
                    {siteConfig.contact.email}
                  </a>
                </p>
              </div>
            </address>

            <div className="mt-8 overflow-hidden rounded-xl border border-black/5 shadow-sm">
              <iframe
                title="Localisation S3A"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold tracking-tight text-s3a-anthracite">
              Demande de devis
            </h2>
            <p className="mt-2 text-sm text-s3a-grey">
              Champs marqués d'un * obligatoires.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
    </>
  );
}
