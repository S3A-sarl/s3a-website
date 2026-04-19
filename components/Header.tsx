"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { Logo } from "@/components/Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Accueil S3A">
          <Logo className="h-11 w-11" />
          <div className="leading-tight">
            <div className="text-lg font-extrabold tracking-tight text-s3a-anthracite">
              S3A
            </div>
            <div className="hidden text-[11px] uppercase tracking-widest text-s3a-grey sm:block">
              Adduction · Aménagement · Assainissement
            </div>
          </div>
        </Link>

        <nav className="hidden lg:block" aria-label="Navigation principale">
          <ul className="flex items-center gap-1">
            {siteConfig.nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "text-s3a-red"
                        : "text-s3a-anthracite hover:text-s3a-red"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.contact.phoneE164}`}
            className="text-sm font-semibold text-s3a-anthracite hover:text-s3a-red"
          >
            {siteConfig.contact.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-md bg-s3a-red px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-s3a-red-dark"
          >
            Devis
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-s3a-anthracite lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-black/5 bg-white lg:hidden"
          aria-label="Navigation mobile"
        >
          <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base font-medium text-s3a-anthracite hover:bg-s3a-sand hover:text-s3a-red"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 border-t border-black/5 pt-3">
              <a
                href={`tel:${siteConfig.contact.phoneE164}`}
                className="block rounded-md px-2 py-2 text-base font-semibold text-s3a-red"
              >
                {siteConfig.contact.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
