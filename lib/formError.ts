import type { ZodError } from "zod";

const FIELD_LABELS: Record<string, string> = {
  nom: "Nom",
  societe: "Société",
  email: "Email",
  tel: "Téléphone",
  service: "Service concerné",
  poste: "Poste souhaité",
  message: "Message",
  website: "Site web",
};

export function formatZodError(error: ZodError): string {
  const issue = error.issues[0];
  const path = issue.path.join(".");
  const label = FIELD_LABELS[path] ?? path ?? "champ";

  switch (issue.code) {
    case "too_small":
      if (issue.type === "string" && issue.minimum === 1) {
        return `Le champ « ${label} » est requis.`;
      }
      return `Le champ « ${label} » est trop court (minimum ${issue.minimum} caractères).`;
    case "too_big":
      return `Le champ « ${label} » est trop long (maximum ${issue.maximum} caractères).`;
    case "invalid_string":
      if (issue.validation === "email") {
        return "Adresse email invalide.";
      }
      return `Le champ « ${label} » est invalide.`;
    case "invalid_type":
      if (issue.received === "undefined" || issue.received === "null") {
        return `Le champ « ${label} » est requis.`;
      }
      return `Le champ « ${label} » est invalide.`;
    case "invalid_enum_value":
      return `Le champ « ${label} » a une valeur non reconnue.`;
    default:
      return `Le champ « ${label} » est invalide.`;
  }
}
