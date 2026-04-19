import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-start px-4 py-24 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-s3a-red">
        Erreur 404
      </p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-s3a-anthracite sm:text-5xl">
        Page introuvable
      </h1>
      <p className="mt-4 text-base text-s3a-grey">
        La page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-md bg-s3a-red px-6 py-3 text-base font-semibold text-white hover:bg-s3a-red-dark"
      >
        Retour à l'accueil
      </Link>
    </section>
  );
}
