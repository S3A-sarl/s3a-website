export type ServiceProduct = {
  nom: string;
  description?: string;
};

export type Service = {
  slug: string;
  numero: number;
  titre: string;
  titreCourt: string;
  accroche: string;
  description: string;
  points: string[];
  produits: ServiceProduct[];
  image: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "structures-metalliques",
    numero: 1,
    titre: "Structures métalliques",
    titreCourt: "Structures métalliques",
    accroche:
      "Charpente, passerelles et bâtiments industriels fabriqués et montés sur mesure.",
    description:
      "S3A conçoit, fabrique et installe des structures métalliques pour le bâtiment et l'industrie : charpentes, passerelles de franchissement, bâtiments et hangars, mezzanines, escaliers industriels. Chaque ouvrage est réalisé à partir des plans fournis par nos clients ou étudié avec eux, avec un contrôle qualité à chaque étape.",
    points: [
      "Charpente métallique lourde et légère",
      "Passerelles de franchissement",
      "Bâtiments et hangars industriels",
      "Fabrication et montage sur site",
    ],
    produits: [
      { nom: "Passerelle métallique" },
      { nom: "Charpente métallique" },
      { nom: "Structure métallique" },
    ],
    image: "/images/services/structures-metalliques.jpg",
    metaDescription:
      "Fabrication et montage de structures métalliques, charpentes et passerelles pour le bâtiment et l'industrie au Maroc. S3A, Kénitra.",
  },
  {
    slug: "tuyauterie-gros-diametre",
    numero: 2,
    titre: "Tuyauterie gros diamètre",
    titreCourt: "Tuyauterie gros diamètre",
    accroche:
      "Collecteurs et tuyauterie gros diamètre pour adduction d'eau et industrie.",
    description:
      "Fabrication de tuyauterie gros diamètre et de collecteurs pour les réseaux d'adduction d'eau, d'assainissement et les process industriels. Nos ateliers assurent la découpe, le cintrage, le roulage et le soudage jusqu'aux plus grands diamètres, selon plans clients.",
    points: [
      "Collecteurs sur mesure",
      "Pièces spéciales gros diamètre",
      "Soudage qualifié",
      "Traitement de surface sur demande",
    ],
    produits: [
      { nom: "Collecteur" },
      { nom: "Collecteur et pièces spécial gros diamètre" },
    ],
    image: "/images/services/tuyauterie-gros-diametre.jpg",
    metaDescription:
      "Tuyauterie gros diamètre et collecteurs fabriqués sur mesure pour adduction, assainissement et industrie. S3A Kénitra, Maroc.",
  },
  {
    slug: "pieces-speciales-et-conduite",
    numero: 3,
    titre: "Pièces spéciales et conduite",
    titreCourt: "Pièces spéciales et conduite",
    accroche:
      "Cônes, coudes, tés, stabilisateurs, crépines : toutes les pièces spéciales pour vos conduites.",
    description:
      "Nous fabriquons la gamme complète de pièces spéciales nécessaires aux réseaux de conduite : cônes de réduction, coudes, tés, stabilisateurs, colliers de prise en charge, éléments en esse, crépines, manchettes. Réalisation à partir de plans ou sur cahier des charges.",
    points: [
      "Cônes de réduction",
      "Coudes et tés",
      "Stabilisateurs et colliers de prise en charge",
      "Crépines, manchettes, éléments en esse",
    ],
    produits: [
      { nom: "Cône de réduction" },
      { nom: "Coude" },
      { nom: "Conduite" },
      { nom: "Stabilisateur" },
      { nom: "Collier de prise en charge" },
      { nom: "Té" },
      { nom: "Élément en esse" },
      { nom: "Crépine" },
      { nom: "Manchette" },
    ],
    image: "/images/services/pieces-speciales-et-conduite.jpg",
    metaDescription:
      "Cônes, coudes, tés, stabilisateurs, crépines : pièces spéciales et conduites sur mesure. Fabrication S3A à Kénitra, Maroc.",
  },
  {
    slug: "raccord",
    numero: 4,
    titre: "Raccord",
    titreCourt: "Raccord",
    accroche:
      "Joints Gebault, brides, adaptateurs : la gamme complète de raccords pour vos réseaux.",
    description:
      "S3A fabrique et fournit les raccords nécessaires à la jonction, au démontage et à la maintenance des conduites : joints Gebault, joints de démontage auto-butée, brides pleines, brides plates à souder, adaptateurs à bride. Différents matériaux et diamètres disponibles sur commande.",
    points: [
      "Joints Gebault",
      "Joints de démontage auto-butée (A.B)",
      "Brides pleines et brides plates à souder",
      "Adaptateurs à bride",
    ],
    produits: [
      { nom: "Joint Gebault" },
      { nom: "Joint de démontage A.B" },
      { nom: "Bride pleine" },
      { nom: "Adaptateur à bride" },
      { nom: "Bride plate à souder" },
    ],
    image: "/images/services/raccord.jpg",
    metaDescription:
      "Raccords pour conduites : joints Gebault, joints de démontage A.B, brides et adaptateurs. Fabrication S3A Kénitra.",
  },
  {
    slug: "piece-de-regard",
    numero: 5,
    titre: "Pièce de regard",
    titreCourt: "Pièce de regard",
    accroche:
      "Échelons, capots, caillebotis et échelles pour regards et ouvrages d'assainissement.",
    description:
      "Fabrication de pièces de regard pour les réseaux d'assainissement et d'adduction : échelons, capots anti-vandale col de cygne, capots bombés, caillebotis, échelles. Produits galvanisés ou traités selon les conditions d'exploitation.",
    points: [
      "Échelons de regard",
      "Capots anti-vandale col de cygne",
      "Caillebotis et capots bombés",
      "Échelles de descente",
    ],
    produits: [
      { nom: "Échelon" },
      { nom: "Capot anti-vandale col de cygne" },
      { nom: "Caillebotis" },
      { nom: "Capot bombé" },
      { nom: "Échelle" },
    ],
    image: "/images/services/piece-de-regard.jpg",
    metaDescription:
      "Échelons, capots anti-vandale, caillebotis et échelles pour regards et assainissement. Fabrication S3A, Kénitra.",
  },
  {
    slug: "pose-et-raccordement-de-conduite",
    numero: 6,
    titre: "Pose et raccordement de conduite",
    titreCourt: "Pose et raccordement",
    accroche:
      "Travaux de pose et de raccordement sur chantiers d'adduction d'eau et d'assainissement.",
    description:
      "Nos équipes interviennent sur chantier pour la pose de conduites, les raccordements sur réseaux existants, les travaux de reprise et les opérations spéciales en fouille. Personnel qualifié, équipements adaptés, respect des délais et des normes de sécurité.",
    points: [
      "Pose de conduites",
      "Raccordements sur réseaux existants",
      "Interventions en fouille",
      "Équipes qualifiées et équipées",
    ],
    produits: [{ nom: "Travaux de pose et raccordement sur chantier" }],
    image: "/images/services/pose-et-raccordement-de-conduite.jpg",
    metaDescription:
      "Pose et raccordement de conduites pour l'adduction d'eau et l'assainissement. Interventions S3A au Maroc.",
  },
  {
    slug: "pieces-speciales-inox",
    numero: 7,
    titre: "Pièces spéciales en inox",
    titreCourt: "Pièces spéciales inox",
    accroche:
      "Fenêtres, portes, escaliers et ouvrages en inox réalisés sur mesure.",
    description:
      "Atelier inox dédié à la fabrication sur mesure : fenêtres, portes, escaliers, garde-corps, ouvrages d'aménagement pour le bâtiment tertiaire et industriel. Soudure TIG, finitions brossées ou polies selon le besoin.",
    points: [
      "Fenêtres et portes inox",
      "Escaliers et garde-corps",
      "Ouvrages d'aménagement sur mesure",
      "Soudure TIG, finitions soignées",
    ],
    produits: [
      { nom: "Fenêtre inox" },
      { nom: "Porte inox" },
      { nom: "Escalier inox" },
    ],
    image: "/images/services/pieces-speciales-inox.jpg",
    metaDescription:
      "Fenêtres, portes et escaliers en inox sur mesure. Atelier S3A, Kénitra — fabrication et pose.",
  },
  {
    slug: "panneaux-balisage",
    numero: 8,
    titre: "Panneaux / Balisage",
    titreCourt: "Panneaux / Balisage",
    accroche:
      "Panneaux de chantier et dispositifs de balisage pour vos travaux.",
    description:
      "Fabrication de panneaux de chantier, dispositifs de balisage et signalétique industrielle. Produits robustes pour l'extérieur, personnalisables aux couleurs et informations de votre chantier.",
    points: [
      "Panneaux de chantier personnalisés",
      "Dispositifs de balisage",
      "Signalétique industrielle",
      "Pose sur site possible",
    ],
    produits: [{ nom: "Balisage" }, { nom: "Panneau de chantier" }],
    image: "/images/services/panneaux-balisage.jpg",
    metaDescription:
      "Panneaux de chantier et dispositifs de balisage sur mesure. Fabrication S3A à Kénitra, Maroc.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
