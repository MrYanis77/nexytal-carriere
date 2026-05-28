/**
 * ALT-RH & Carrière – Page Prestations
 * Design: Swiss Corporate Modernism × Editorial Warmth
 */
import { Link } from "wouter";
import { CheckCircle, ChevronRight, Monitor, Users, Shuffle, Clock, Video, FileText, PenTool } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const DISTANCIEL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/JCBFQieMDDWiuPXVQraPH5/bilan-distanciel-RMQYGnTrj6a7AFdLun2QTt.webp";
const PRESENTIEL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/JCBFQieMDDWiuPXVQraPH5/bilan-presentiel-8qbfQmABDXsfevM7YS75mQ.webp";

const prestations = [
  {
    id: "distanciel",
    icon: Monitor,
    tag: "Le plus flexible",
    title: "Bilan 100 % Distanciel",
    subtitle: "Faites votre bilan depuis chez vous, en toute sérénité",
    price: "1 800 € TTC",
    cpf: "Finançable à 100 % avec votre CPF",
    image: DISTANCIEL_IMG,
    publicVise: "Salariés en télétravail, parents, personnes en régions éloignées",
    objectifs: "Faire le point sereinement sur votre parcours et définir un projet professionnel concret",
    duree: "20 h sur 6 à 8 semaines",
    deroulé: "6 à 8 séances visio + plateforme accessible 24h/24 et 7j/7",
    outils: ["Zoom (séances visio)", "Tests psychométriques en ligne", "Signature électronique", "Plateforme e-learning dédiée"],
    avantages: [
      "Aucun déplacement nécessaire",
      "Flexibilité totale des horaires",
      "Accessible depuis toute la France",
      "Plateforme disponible 24h/24",
      "Idéal pour les parents et personnes actives",
    ],
    cta: "Je choisis le distanciel",
    href: "/bilan-competences-distance",
    color: "oklch(0.28 0.08 255)",
  },
  {
    id: "presentiel",
    icon: Users,
    tag: "Le plus humain",
    title: "Bilan 100 % Présentiel",
    subtitle: "Bénéficiez d'un échange humain profond en cabinet",
    price: "1 950 € TTC",
    cpf: "Finançable à 100 % avec votre CPF",
    image: PRESENTIEL_IMG,
    publicVise: "Personnes qui privilégient le contact humain et les échanges en face-à-face",
    objectifs: "Approfondir la réflexion grâce à un accompagnement en présentiel intensif",
    duree: "20 h sur 6 à 8 semaines",
    deroulé: "Séances en cabinet à Paris + supports premium",
    outils: ["Supports papier premium", "Tableau blanc interactif", "Tests psychométriques", "Dossier de synthèse personnalisé"],
    avantages: [
      "Échange humain profond et authentique",
      "Cabinet situé en plein cœur de Paris",
      "Supports premium de qualité",
      "Environnement propice à la réflexion",
      "Relation de confiance renforcée",
    ],
    cta: "Je choisis le présentiel",
    href: "/bilan-competences-presentiel-paris",
    color: "oklch(0.20 0.09 255)",
  },
  {
    id: "mixte",
    icon: Shuffle,
    tag: "Le plus adaptatif",
    title: "Bilan Format Mixte",
    subtitle: "La flexibilité du distanciel et la profondeur du présentiel",
    price: "1 850 € TTC",
    cpf: "Finançable à 100 % avec votre CPF",
    image: DISTANCIEL_IMG,
    publicVise: "Personnes souhaitant combiner les avantages du distanciel et du présentiel",
    objectifs: "Bénéficier d'un accompagnement flexible adapté à votre agenda et vos préférences",
    duree: "20 h sur 6 à 8 semaines",
    deroulé: "Mix de séances en présentiel et en visio selon votre agenda",
    outils: ["Zoom (séances distanciel)", "Cabinet Paris (séances présentiel)", "Tests en ligne", "Plateforme 24h/24"],
    avantages: [
      "Flexibilité maximale",
      "Combinaison des deux formats",
      "Adaptation à votre agenda",
      "Meilleur rapport qualité/flexibilité",
      "Idéal pour les professionnels mobiles",
    ],
    cta: "Je veux le format mixte",
    href: "/contact",
    color: "oklch(0.72 0.12 75)",
  },
];

export default function Prestations() {
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
              Nos prestations
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Bilan de compétences :
              <span className="block italic mt-1" style={{ color: "oklch(0.82 0.10 75)" }}>
                3 formats adaptés à votre vie
              </span>
            </h1>
            <div className="h-0.5 w-16 mb-6" style={{ background: "oklch(0.72 0.12 75)" }} />
            <p
              className="text-base leading-relaxed"
              style={{ color: "oklch(0.80 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Que vous soyez en télétravail, à Paris ou en déplacement, nous avons le format qui vous convient. Chaque prestation est finançable à 100 % avec votre CPF.
            </p>
          </div>
        </div>
      </section>

      {/* Prestations détaillées */}
      {prestations.map((p, i) => {
        const Icon = p.icon;
        const isEven = i % 2 === 0;
        return (
          <section
            key={p.id}
            className="py-20"
            style={{ backgroundColor: isEven ? "white" : "oklch(0.98 0.01 85)" }}
          >
            <div className="container">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}>
                {/* Image */}
                <ScrollReveal delay={isEven ? 200 : 0}>
                  <div className={`relative ${!isEven ? "lg:col-start-2" : ""}`}>
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full object-cover"
                      style={{ aspectRatio: "4/3" }}
                    />
                    <div
                      className="absolute top-4 left-4 px-3 py-1.5 text-xs font-bold uppercase tracking-widest"
                      style={{
                        backgroundColor: p.color,
                        color: i === 2 ? "oklch(0.20 0.02 255)" : "white",
                        fontFamily: "'Source Sans 3', sans-serif",
                      }}
                    >
                      {p.tag}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Content */}
                <ScrollReveal delay={isEven ? 0 : 200}>
                  <div className={!isEven ? "lg:col-start-1" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 flex items-center justify-center"
                        style={{ backgroundColor: `${p.color}15` }}
                      >
                        <Icon size={20} style={{ color: p.color }} />
                      </div>
                      <span
                        className="text-xs font-semibold uppercase tracking-widest"
                        style={{ color: p.color, fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        {p.tag}
                      </span>
                    </div>

                    <h2
                      className="text-3xl font-bold mb-2"
                      style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
                    >
                      {p.title}
                    </h2>
                    <p
                      className="text-base mb-6"
                      style={{ color: "oklch(0.50 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      {p.subtitle}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4" style={{ backgroundColor: "oklch(0.96 0.01 85)" }}>
                        <div className="flex items-center gap-2 mb-1">
                          <Clock size={14} style={{ color: p.color }} />
                          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: p.color, fontFamily: "'Source Sans 3', sans-serif" }}>Durée</span>
                        </div>
                        <p className="text-sm font-semibold" style={{ color: "oklch(0.20 0.09 255)", fontFamily: "'Source Sans 3', sans-serif" }}>{p.duree}</p>
                      </div>
                      <div className="p-4" style={{ backgroundColor: "oklch(0.96 0.01 85)" }}>
                        <div className="flex items-center gap-2 mb-1">
                          <Video size={14} style={{ color: p.color }} />
                          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: p.color, fontFamily: "'Source Sans 3', sans-serif" }}>Format</span>
                        </div>
                        <p className="text-sm font-semibold" style={{ color: "oklch(0.20 0.09 255)", fontFamily: "'Source Sans 3', sans-serif" }}>{p.deroulé}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4
                        className="text-xs font-semibold uppercase tracking-widest mb-3"
                        style={{ color: "oklch(0.55 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        Avantages clés
                      </h4>
                      <ul className="space-y-2">
                        {p.avantages.map((av, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm" style={{ color: "oklch(0.35 0.03 255)", fontFamily: "'Source Sans 3', sans-serif" }}>
                            <CheckCircle size={14} style={{ color: p.color }} />
                            {av}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between p-4 mb-6" style={{ backgroundColor: `${p.color}10`, borderLeft: `3px solid ${p.color}` }}>
                      <div>
                        <div
                          className="text-2xl font-bold"
                          style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
                        >
                          {p.price}
                        </div>
                        <div
                          className="text-xs font-semibold mt-0.5"
                          style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
                        >
                          {p.cpf}
                        </div>
                      </div>
                    </div>

                    <Link
                      href={p.href}
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider py-3 px-6 transition-all hover:-translate-y-0.5"
                      style={{
                        backgroundColor: p.color,
                        color: i === 2 ? "oklch(0.20 0.02 255)" : "white",
                        fontFamily: "'Source Sans 3', sans-serif",
                      }}
                    >
                      {p.cta}
                      <ChevronRight size={14} />
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* Outils section */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.28 0.08 255)" }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Outils et ressources inclus
              </h2>
              <div className="h-0.5 w-16 mx-auto" style={{ background: "oklch(0.72 0.12 75)" }} />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Video, label: "Séances Zoom HD" },
              { icon: FileText, label: "Tests psychométriques" },
              { icon: PenTool, label: "Signature électronique" },
              { icon: Monitor, label: "Plateforme 24h/24" },
            ].map((tool, i) => {
              const ToolIcon = tool.icon;
              return (
                <ScrollReveal key={i} delay={i * 100}>
                  <div
                    className="text-center p-6"
                    style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.08)", border: "1px solid oklch(0.72 0.12 75 / 0.2)" }}
                  >
                    <ToolIcon size={28} className="mx-auto mb-3" style={{ color: "oklch(0.72 0.12 75)" }} />
                    <p
                      className="text-sm font-semibold text-white"
                      style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      {tool.label}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container text-center">
          <ScrollReveal>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
            >
              Vous ne savez pas quel format choisir ?
            </h2>
            <p
              className="text-base mb-8 max-w-lg mx-auto"
              style={{ color: "oklch(0.45 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Réservez un appel découverte gratuit de 30 minutes. Votre conseiller vous guidera vers le format le plus adapté à votre situation.
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
