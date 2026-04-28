export const siteConfig = {
  name: "S3A",
  legalName: "Adduction Aménagement Assainissement SARL AU",
  tagline: "Chaudronnerie · Tuyauterie · Charpente · Pièces Mécano-Soudées",
  description:
    "S3A — Fabrication et montage de structures métalliques, tuyauterie gros diamètre, pièces mécano-soudées et raccords à Kénitra, Maroc. Depuis 2005.",
  foundedYear: 2005,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://s3a.ma",
  address: {
    street: "Lot n°56 A, Zone Industrielle",
    district: "Bir Rami",
    city: "Kénitra",
    country: "Maroc",
    countryCode: "MA",
  },
  contact: {
    phone: "05 37 36 30 41",
    phoneE164: "+212537363041",
    fax: "05 37 36 32 48",
    email: "s3a-sarl@hotmail.fr",
  },
  nav: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/a-propos" },
    { label: "Services", href: "/services" },
    { label: "Réalisations", href: "/realisations" },
    { label: "Recrutement", href: "/recrutement" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
