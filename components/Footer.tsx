import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { services } from "@/lib/services";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="mt-24 bg-s3a-anthracite text-white/85">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center">
            <Logo className="h-14 w-auto" variant="light" />
          </div>
          <p className="mt-4 text-sm leading-6 text-white/70">
            {siteConfig.legalName}. Fabrication et montage de chaudronnerie,
            tuyauterie et charpente métallique depuis {siteConfig.foundedYear}.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="hover:text-white"
                >
                  {s.titreCourt}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h3>
          <address className="mt-4 space-y-2 text-sm not-italic leading-6">
            <p>
              {siteConfig.address.street}
              <br />
              {siteConfig.address.district}
              <br />
              {siteConfig.address.city}, {siteConfig.address.country}
            </p>
            <p>
              Tél&nbsp;:{" "}
              <a
                href={`tel:${siteConfig.contact.phoneE164}`}
                className="hover:text-white"
              >
                {siteConfig.contact.phone}
              </a>
              <br />
              Fax&nbsp;: {siteConfig.contact.fax}
              <br />
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-white"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </p>
          <p>
            Site réalisé pour {siteConfig.legalName}.
          </p>
        </div>
      </div>
    </footer>
  );
}
