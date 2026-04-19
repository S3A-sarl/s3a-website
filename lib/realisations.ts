export type Realisation = {
  id: string;
  titre: string;
  categorie:
    | "structures-metalliques"
    | "tuyauterie-gros-diametre"
    | "pose-et-raccordement-de-conduite"
    | "pieces-speciales-inox"
    | "piece-de-regard";
  description: string;
  image: string;
};

export const realisations: Realisation[] = [
  {
    id: "passerelle-metallique-01",
    titre: "Passerelle métallique",
    categorie: "structures-metalliques",
    description:
      "Passerelle de franchissement en charpente métallique montée sur site.",
    image: "/images/realisations/passerelle-01.jpg",
  },
  {
    id: "passerelle-jaune-01",
    titre: "Passerelle industrielle",
    categorie: "structures-metalliques",
    description:
      "Passerelle industrielle de franchissement, finition peinture jaune sécurité.",
    image: "/images/realisations/passerelle-02.jpg",
  },
  {
    id: "charpente-metallique-01",
    titre: "Charpente métallique",
    categorie: "structures-metalliques",
    description:
      "Charpente métallique d'un bâtiment industriel, montage sur chantier.",
    image: "/images/realisations/charpente-01.jpg",
  },
  {
    id: "collecteur-gros-diametre-01",
    titre: "Collecteur gros diamètre",
    categorie: "tuyauterie-gros-diametre",
    description:
      "Collecteur gros diamètre fabriqué en atelier, prêt à l'expédition.",
    image: "/images/realisations/collecteur-01.jpg",
  },
  {
    id: "conduite-gros-diametre-01",
    titre: "Conduite gros diamètre posée",
    categorie: "tuyauterie-gros-diametre",
    description:
      "Tronçon de conduite gros diamètre posé sur supports en extérieur.",
    image: "/images/realisations/conduite-01.jpg",
  },
  {
    id: "pose-conduite-01",
    titre: "Pose de conduite",
    categorie: "pose-et-raccordement-de-conduite",
    description:
      "Intervention sur chantier pour pose et raccordement de conduite en fouille.",
    image: "/images/realisations/pose-01.jpg",
  },
  {
    id: "raccordement-vanne-01",
    titre: "Raccordement avec vanne",
    categorie: "pose-et-raccordement-de-conduite",
    description:
      "Raccordement d'une conduite avec installation de vanne de sectionnement.",
    image: "/images/realisations/pose-02.jpg",
  },
  {
    id: "escalier-inox-01",
    titre: "Escalier inox",
    categorie: "pieces-speciales-inox",
    description:
      "Escalier en inox brossé réalisé sur mesure pour un bâtiment tertiaire.",
    image: "/images/realisations/inox-escalier-01.jpg",
  },
  {
    id: "porte-inox-01",
    titre: "Porte inox",
    categorie: "pieces-speciales-inox",
    description: "Porte en inox sur mesure, fabrication et pose S3A.",
    image: "/images/realisations/inox-porte-01.jpg",
  },
  {
    id: "echelon-regard-01",
    titre: "Échelon de regard",
    categorie: "piece-de-regard",
    description:
      "Ensemble d'échelons de regard galvanisés prêts à être installés.",
    image: "/images/realisations/regard-01.jpg",
  },
];

export const realisationCategories = [
  { slug: "all", label: "Toutes" },
  { slug: "structures-metalliques", label: "Structures métalliques" },
  { slug: "tuyauterie-gros-diametre", label: "Tuyauterie gros diamètre" },
  {
    slug: "pose-et-raccordement-de-conduite",
    label: "Pose et raccordement",
  },
  { slug: "pieces-speciales-inox", label: "Pièces inox" },
  { slug: "piece-de-regard", label: "Pièces de regard" },
] as const;
