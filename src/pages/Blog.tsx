/**
 * ALT-RH & Carrière – Page Blog
 * 20 articles prêts à copier
 * Design: Swiss Corporate Modernism × Editorial Warmth
 */
import { Link } from "wouter";
import { ChevronRight, Clock, Tag } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/JCBFQieMDDWiuPXVQraPH5/hero-bilan-competences-jsMax2iPipC63nNPmR7rjc.webp";
const DISTANCIEL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/JCBFQieMDDWiuPXVQraPH5/bilan-distanciel-RMQYGnTrj6a7AFdLun2QTt.webp";
const PRESENTIEL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/JCBFQieMDDWiuPXVQraPH5/bilan-presentiel-8qbfQmABDXsfevM7YS75mQ.webp";
const CPF_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/JCBFQieMDDWiuPXVQraPH5/cpf-financement-iWneHaJYBXzFaKWtKASvtC.webp";

const articles = [
  {
    id: 1,
    titre: "Reconversion après 40 ans : le bilan de compétences qui change tout",
    motCle: "reconversion professionnelle après 40 ans",
    extrait: "Vous avez 40 ans et vous ressentez le besoin de changer de cap professionnel ? Vous n'êtes pas seul. Le bilan de compétences est l'outil idéal pour transformer ce questionnement en projet concret.",
    categorie: "Reconversion",
    duree: "8 min",
    image: HERO_IMG,
    featured: true,
  },
  {
    id: 2,
    titre: "CPF 2026 : tout ce que vous devez savoir pour financer votre bilan",
    motCle: "CPF bilan de compétences 2026",
    extrait: "Le Compte Personnel de Formation évolue en 2026. Voici un guide complet pour comprendre vos droits et financer intégralement votre bilan de compétences.",
    categorie: "Financement CPF",
    duree: "6 min",
    image: CPF_IMG,
    featured: true,
  },
  {
    id: 3,
    titre: "Bilan de compétences à distance : 5 raisons de choisir le distanciel",
    motCle: "bilan de compétences à distance",
    extrait: "Le bilan de compétences en visioconférence offre une flexibilité incomparable. Découvrez pourquoi de plus en plus de professionnels choisissent le format 100 % distanciel.",
    categorie: "Distanciel",
    duree: "5 min",
    image: DISTANCIEL_IMG,
    featured: true,
  },
  {
    id: 4,
    titre: "Comment savoir si vous avez besoin d'un bilan de compétences ?",
    motCle: "besoin bilan de compétences",
    extrait: "Vous vous posez des questions sur votre avenir professionnel ? Voici 7 signaux qui indiquent qu'un bilan de compétences pourrait vous aider à y voir plus clair.",
    categorie: "Général",
    duree: "5 min",
    image: PRESENTIEL_IMG,
    featured: false,
  },
  {
    id: 5,
    titre: "Les 3 phases du bilan de compétences expliquées simplement",
    motCle: "phases bilan de compétences",
    extrait: "Phase préliminaire, investigation, conclusion : comment se déroulent concrètement les 20 heures de votre bilan de compétences ? Tout ce que vous devez savoir.",
    categorie: "Méthodologie",
    duree: "7 min",
    image: HERO_IMG,
    featured: false,
  },
  {
    id: 6,
    titre: "Bilan de compétences et burn-out : reprendre confiance en soi",
    motCle: "bilan de compétences burn-out",
    extrait: "Après un burn-out, le bilan de compétences peut être un outil précieux pour se reconstruire professionnellement. Témoignages et conseils pratiques.",
    categorie: "Bien-être",
    duree: "6 min",
    image: DISTANCIEL_IMG,
    featured: false,
  },
  {
    id: 7,
    titre: "Financer son bilan sans CPF : les alternatives méconnues",
    motCle: "financement bilan de compétences sans CPF",
    extrait: "Votre solde CPF est insuffisant ? Il existe d'autres solutions pour financer votre bilan : plan de formation, France Travail, OPCO... On vous explique tout.",
    categorie: "Financement CPF",
    duree: "5 min",
    image: CPF_IMG,
    featured: false,
  },
  {
    id: 8,
    titre: "Cadre en reconversion : comment valoriser 15 ans d'expérience",
    motCle: "reconversion cadre expérience",
    extrait: "Vous êtes cadre et vous souhaitez changer de voie ? Votre expérience est un atout considérable. Voici comment le bilan de compétences vous aide à la valoriser.",
    categorie: "Reconversion",
    duree: "7 min",
    image: PRESENTIEL_IMG,
    featured: false,
  },
  {
    id: 9,
    titre: "Bilan de compétences vs coaching : quelle différence ?",
    motCle: "bilan de compétences coaching différence",
    extrait: "Bilan de compétences ou coaching professionnel ? Ces deux démarches sont souvent confondues. Voici les différences essentielles pour faire le bon choix.",
    categorie: "Général",
    duree: "4 min",
    image: HERO_IMG,
    featured: false,
  },
  {
    id: 10,
    titre: "Reconversion professionnelle : les métiers qui recrutent en 2026",
    motCle: "métiers reconversion professionnelle 2026",
    extrait: "Quels secteurs recrutent en 2026 ? Quelles compétences sont recherchées ? Un panorama des opportunités pour guider votre projet de reconversion.",
    categorie: "Reconversion",
    duree: "8 min",
    image: DISTANCIEL_IMG,
    featured: false,
  },
  {
    id: 11,
    titre: "Témoignage : « Mon bilan de compétences m'a sauvé la mise »",
    motCle: "témoignage bilan de compétences",
    extrait: "Marie, 44 ans, nous raconte comment son bilan de compétences l'a aidée à quitter un poste qui l'étouffait pour se lancer dans une nouvelle carrière épanouissante.",
    categorie: "Témoignages",
    duree: "6 min",
    image: PRESENTIEL_IMG,
    featured: false,
  },
  {
    id: 12,
    titre: "Comment préparer son bilan de compétences pour en tirer le maximum",
    motCle: "préparer bilan de compétences",
    extrait: "Un bilan de compétences bien préparé est un bilan réussi. Voici nos conseils pratiques pour aborder cette démarche dans les meilleures conditions.",
    categorie: "Méthodologie",
    duree: "5 min",
    image: HERO_IMG,
    featured: false,
  },
  {
    id: 13,
    titre: "Bilan de compétences en télétravail : le guide complet",
    motCle: "bilan de compétences télétravail",
    extrait: "Vous travaillez à distance et souhaitez faire un bilan de compétences ? Le format distanciel est fait pour vous. Découvrez comment ça se passe concrètement.",
    categorie: "Distanciel",
    duree: "5 min",
    image: DISTANCIEL_IMG,
    featured: false,
  },
  {
    id: 14,
    titre: "Qualiopi : pourquoi choisir un organisme certifié ?",
    motCle: "Qualiopi bilan de compétences",
    extrait: "La certification Qualiopi est un gage de qualité pour votre bilan de compétences. Voici pourquoi elle est importante et comment la vérifier.",
    categorie: "Qualité",
    duree: "4 min",
    image: CPF_IMG,
    featured: false,
  },
  {
    id: 15,
    titre: "Reconversion à 50 ans : il n'est jamais trop tard",
    motCle: "reconversion professionnelle 50 ans",
    extrait: "La reconversion professionnelle après 50 ans est non seulement possible, mais souvent très réussie. Témoignages et conseils pour franchir le pas.",
    categorie: "Reconversion",
    duree: "7 min",
    image: PRESENTIEL_IMG,
    featured: false,
  },
  {
    id: 16,
    titre: "Les tests psychométriques du bilan : à quoi servent-ils ?",
    motCle: "tests psychométriques bilan de compétences",
    extrait: "MBTI, Big Five, RIASEC... Les tests utilisés pendant le bilan de compétences peuvent sembler intimidants. Voici ce qu'ils mesurent vraiment et comment les aborder sereinement.",
    categorie: "Méthodologie",
    duree: "6 min",
    image: HERO_IMG,
    featured: false,
  },
  {
    id: 17,
    titre: "Après le bilan de compétences : comment mettre en œuvre son plan d'action",
    motCle: "après bilan de compétences plan d'action",
    extrait: "Le bilan est terminé, vous avez votre dossier de synthèse. Et maintenant ? Voici comment passer à l'action et concrétiser votre projet professionnel.",
    categorie: "Résultats",
    duree: "6 min",
    image: DISTANCIEL_IMG,
    featured: false,
  },
  {
    id: 18,
    titre: "Parent en reprise d'activité : le bilan de compétences, votre allié",
    motCle: "reprise activité parent bilan compétences",
    extrait: "Vous avez fait une pause professionnelle pour élever vos enfants et souhaitez reprendre le travail ? Le bilan de compétences vous aide à valoriser vos compétences et définir votre nouveau projet.",
    categorie: "Profils",
    duree: "5 min",
    image: PRESENTIEL_IMG,
    featured: false,
  },
  {
    id: 19,
    titre: "Bilan de compétences : les questions à poser à votre consultant",
    motCle: "questions consultant bilan de compétences",
    extrait: "Comment choisir le bon consultant pour votre bilan ? Voici les 10 questions essentielles à poser lors de votre premier entretien pour faire le bon choix.",
    categorie: "Conseils",
    duree: "5 min",
    image: CPF_IMG,
    featured: false,
  },
  {
    id: 20,
    titre: "Bilan de compétences Paris : tout ce qu'il faut savoir",
    motCle: "bilan de compétences Paris",
    extrait: "Vous cherchez un cabinet de bilan de compétences à Paris ? Découvrez notre offre de bilan en présentiel au cœur de Paris, avec toutes les informations pratiques.",
    categorie: "Local",
    duree: "4 min",
    image: HERO_IMG,
    featured: false,
  },
];

const categories = ["Tous", ...Array.from(new Set(articles.map((a) => a.categorie)))];

export default function Blog() {
  const featuredArticles = articles.filter((a) => a.featured);
  const regularArticles = articles.filter((a) => !a.featured);

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.28 0.08 255)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Ressources & conseils
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Blog ALT-RH & Carrière
              <span className="block italic mt-1" style={{ color: "oklch(0.82 0.10 75)" }}>
                Conseils, guides et témoignages
              </span>
            </h1>
            <div className="h-0.5 w-16 mb-6" style={{ background: "oklch(0.72 0.12 75)" }} />
            <p
              className="text-base"
              style={{ color: "oklch(0.80 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Retrouvez nos articles sur la reconversion professionnelle, le financement CPF, la méthodologie du bilan de compétences et les témoignages de nos bénéficiaires.
            </p>
          </div>
        </div>
      </section>

      {/* Articles à la une */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2
            className="text-2xl font-bold mb-8"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
          >
            Articles à la une
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredArticles.map((article, i) => (
              <ScrollReveal key={article.id} delay={i * 100}>
                <article className="card-hover bg-white border border-[oklch(0.90_0.01_85)] overflow-hidden h-full flex flex-col">
                  <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                    <img
                      src={article.image}
                      alt={article.titre}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div
                      className="absolute top-3 left-3 px-2 py-1 text-xs font-bold uppercase tracking-widest"
                      style={{
                        backgroundColor: "oklch(0.72 0.12 75)",
                        color: "oklch(0.20 0.02 255)",
                        fontFamily: "'Source Sans 3', sans-serif",
                      }}
                    >
                      À la une
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5"
                        style={{
                          backgroundColor: "oklch(0.28 0.08 255 / 0.08)",
                          color: "oklch(0.28 0.08 255)",
                          fontFamily: "'Source Sans 3', sans-serif",
                        }}
                      >
                        {article.categorie}
                      </span>
                      <span
                        className="text-xs flex items-center gap-1"
                        style={{ color: "oklch(0.60 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        <Clock size={12} />
                        {article.duree}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-bold mb-3 flex-grow"
                      style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
                    >
                      {article.titre}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "oklch(0.50 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      {article.extrait}
                    </p>
                    <div
                      className="text-xs font-semibold uppercase tracking-wider flex items-center gap-1"
                      style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      <Tag size={11} />
                      {article.motCle}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* Tous les articles */}
          <h2
            className="text-2xl font-bold mb-8"
            style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
          >
            Tous nos articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article, i) => (
              <ScrollReveal key={article.id} delay={i * 60}>
                <article className="card-hover bg-white border border-[oklch(0.90_0.01_85)] overflow-hidden flex flex-col">
                  <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                    <img
                      src={article.image}
                      alt={article.titre}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5"
                        style={{
                          backgroundColor: "oklch(0.28 0.08 255 / 0.08)",
                          color: "oklch(0.28 0.08 255)",
                          fontFamily: "'Source Sans 3', sans-serif",
                        }}
                      >
                        {article.categorie}
                      </span>
                      <span
                        className="text-xs flex items-center gap-1"
                        style={{ color: "oklch(0.60 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        <Clock size={11} />
                        {article.duree}
                      </span>
                    </div>
                    <h3
                      className="text-base font-bold mb-2 flex-grow"
                      style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
                    >
                      {article.titre}
                    </h3>
                    <p
                      className="text-xs leading-relaxed mb-3"
                      style={{ color: "oklch(0.55 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      {article.extrait.substring(0, 100)}...
                    </p>
                    <div
                      className="text-xs font-semibold flex items-center gap-1"
                      style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      Lire l'article <ChevronRight size={12} />
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.28 0.08 255)" }}>
        <div className="container text-center">
          <ScrollReveal>
            <h2
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Prêt à passer à l'action ?
            </h2>
            <p
              className="text-base mb-8 max-w-lg mx-auto"
              style={{ color: "oklch(0.75 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Ces articles vous ont donné envie d'en savoir plus ? Réservez votre appel découverte gratuit dès aujourd'hui.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider py-4 px-10 transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: "oklch(0.72 0.12 75)",
                color: "oklch(0.20 0.02 255)",
                fontFamily: "'Source Sans 3', sans-serif",
              }}
            >
              Réserver mon appel découverte gratuit
              <ChevronRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
