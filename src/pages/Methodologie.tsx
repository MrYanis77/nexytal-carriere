/**
 * ALT-RH & Carrière – Page Méthodologie
 * H1 SEO : La méthode en 3 phases officielles
 * Design: Swiss Corporate Modernism × Editorial Warmth
 */
import { Link } from "wouter";
import { ChevronRight, CheckCircle, FileText, Target, Compass } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const METHODO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/JCBFQieMDDWiuPXVQraPH5/methodologie-phases-BtFKeu39W9tMiVbcLeFV9W.webp";
const PRESENTIEL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/JCBFQieMDDWiuPXVQraPH5/bilan-presentiel-8qbfQmABDXsfevM7YS75mQ.webp";

const phases = [
  {
    num: "01",
    icon: Compass,
    title: "Phase Préliminaire",
    subtitle: "Poser les bases de votre démarche",
    duration: "2 heures",
    color: "oklch(0.72 0.12 75)",
    objectifs: [
      "Analyse de votre demande et de votre situation actuelle",
      "Confirmation de votre engagement dans la démarche",
      "Rappel des conditions de déroulement du bilan",
      "Présentation des méthodes et des outils utilisés",
    ],
    livrable: "Contrat de prestation signé et planning des séances établi",
  },
  {
    num: "02",
    icon: Target,
    title: "Phase d'Investigation",
    subtitle: "Explorer vos compétences et aspirations",
    duration: "14 heures",
    color: "oklch(0.28 0.08 255)",
    objectifs: [
      "Analyse approfondie de votre parcours professionnel",
      "Identification de vos compétences, aptitudes et connaissances",
      "Exploration de vos motivations, valeurs et aspirations",
      "Élaboration de pistes professionnelles réalistes",
      "Étude de faisabilité de votre projet",
    ],
    livrable: "Cartographie complète de vos compétences et 2-3 pistes professionnelles validées",
  },
  {
    num: "03",
    icon: FileText,
    title: "Phase de Conclusion",
    subtitle: "Formaliser votre projet et votre plan d'action",
    duration: "4 heures",
    color: "oklch(0.20 0.09 255)",
    objectifs: [
      "Formalisation de votre projet professionnel principal",
      "Analyse de vos points forts et de vos points de vigilance",
      "Mise en place d'un plan d'action réaliste et daté",
      "Finalisation et remise du document de synthèse détaillé",
    ],
    livrable: "Dossier de synthèse 30-40 pages + plan d'action personnalisé",
  },
];

const outils = [
  "Tests de personnalité (MBTI, Big Five)",
  "Tests d'aptitudes cognitives",
  "Inventaires d'intérêts professionnels (RIASEC)",
  "Questionnaires de valeurs professionnelles",
  "Exercices de projection professionnelle",
  "Entretiens semi-directifs",
  "Analyse du marché de l'emploi",
  "Enquêtes métiers auprès de professionnels",
];

export default function Methodologie() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.28 0.08 255)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Notre approche
              </p>
              <h1
                className="text-4xl md:text-5xl font-bold mb-4 text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                La méthode en
                <span className="block italic mt-1" style={{ color: "oklch(0.82 0.10 75)" }}>
                  3 phases officielles
                </span>
              </h1>
              <div className="h-0.5 w-16 mb-6" style={{ background: "oklch(0.72 0.12 75)" }} />
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "oklch(0.80 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Notre méthodologie respecte scrupuleusement le cadre réglementaire du bilan de compétences (Code du Travail, Art. L6313-4). En 20 heures réparties sur 6 à 8 semaines, vous construisez un projet professionnel solide et réaliste.
              </p>
              <div
                className="inline-flex items-center gap-3 px-5 py-3"
                style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.15)", border: "1px solid oklch(0.72 0.12 75 / 0.3)" }}
              >
                <FileText size={18} style={{ color: "oklch(0.72 0.12 75)" }} />
                <span
                  className="text-sm font-semibold text-white"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  Livrable : dossier 30-40 pages + plan d'action
                </span>
              </div>
            </div>
            <div>
              <img
                src={METHODO_IMG}
                alt="Méthodologie bilan de compétences"
                className="w-full object-cover"
                style={{ aspectRatio: "16/9" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="space-y-16">
            {phases.map((phase, i) => {
              const PhaseIcon = phase.icon;
              return (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Number */}
                    <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4">
                      <div
                        className="text-7xl font-bold leading-none"
                        style={{ fontFamily: "'Playfair Display', serif", color: `${phase.color}20` }}
                      >
                        {phase.num}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-10 h-10 flex items-center justify-center"
                          style={{ backgroundColor: `${phase.color}15` }}
                        >
                          <PhaseIcon size={20} style={{ color: phase.color }} />
                        </div>
                        <span
                          className="text-xs font-bold uppercase tracking-widest px-3 py-1"
                          style={{
                            backgroundColor: phase.color,
                            color: i === 2 ? "white" : i === 0 ? "oklch(0.20 0.02 255)" : "white",
                            fontFamily: "'Source Sans 3', sans-serif",
                          }}
                        >
                          {phase.duration}
                        </span>
                      </div>
                      <h2
                        className="text-2xl md:text-3xl font-bold mb-2"
                        style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
                      >
                        {phase.title}
                      </h2>
                      <p
                        className="text-base mb-6 italic"
                        style={{ color: "oklch(0.50 0.02 255)", fontFamily: "'Playfair Display', serif" }}
                      >
                        {phase.subtitle}
                      </p>
                      <ul className="space-y-3">
                        {phase.objectifs.map((obj, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: phase.color }} />
                            <span
                              className="text-sm"
                              style={{ color: "oklch(0.35 0.03 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                            >
                              {obj}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Livrable */}
                    <div className="lg:col-span-3">
                      <div
                        className="p-5"
                        style={{ backgroundColor: `${phase.color}08`, borderLeft: `3px solid ${phase.color}` }}
                      >
                        <p
                          className="text-xs font-bold uppercase tracking-widest mb-2"
                          style={{ color: phase.color, fontFamily: "'Source Sans 3', sans-serif" }}
                        >
                          Livrable
                        </p>
                        <p
                          className="text-sm"
                          style={{ color: "oklch(0.35 0.03 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                        >
                          {phase.livrable}
                        </p>
                      </div>
                    </div>
                  </div>

                  {i < phases.length - 1 && (
                    <div className="flex justify-center mt-8">
                      <div className="w-px h-12" style={{ background: "oklch(0.90 0.01 85)" }} />
                    </div>
                  )}
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Outils */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.98 0.01 85)" }}>
        <div className="container">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  Nos outils d'évaluation
                </p>
                <h2
                  className="text-3xl font-bold mb-6"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
                >
                  Des outils validés scientifiquement
                </h2>
                <div className="h-0.5 w-16 mb-8" style={{ background: "oklch(0.72 0.12 75)" }} />
                <p
                  className="text-base leading-relaxed mb-8"
                  style={{ color: "oklch(0.45 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  Nous utilisons des outils d'évaluation reconnus et validés scientifiquement pour vous offrir une analyse précise et fiable de vos compétences, aptitudes et motivations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {outils.map((outil, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm" style={{ color: "oklch(0.35 0.03 255)", fontFamily: "'Source Sans 3', sans-serif" }}>
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "oklch(0.72 0.12 75)" }} />
                      {outil}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src={PRESENTIEL_IMG}
                  alt="Outils de bilan de compétences"
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Livrable final */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.28 0.08 255)" }}>
        <div className="container">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2
                className="text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Votre livrable final
              </h2>
              <div className="h-0.5 w-16 mx-auto mb-8" style={{ background: "oklch(0.72 0.12 75)" }} />
              <div
                className="p-8 mb-8"
                style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.10)", border: "1px solid oklch(0.72 0.12 75 / 0.3)" }}
              >
                <div
                  className="text-5xl font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.72 0.12 75)" }}
                >
                  30-40
                </div>
                <p
                  className="text-lg font-semibold text-white mb-4"
                  style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  pages de dossier de synthèse personnalisé
                </p>
                <ul className="text-sm space-y-2 text-left max-w-md mx-auto">
                  {[
                    "Synthèse de votre parcours professionnel",
                    "Cartographie de vos compétences",
                    "Analyse de vos motivations et valeurs",
                    "Présentation de votre projet professionnel",
                    "Plan d'action détaillé et daté",
                    "Ressources et contacts utiles",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2" style={{ color: "oklch(0.80 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}>
                      <CheckCircle size={14} style={{ color: "oklch(0.72 0.12 75)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider py-4 px-10 transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: "oklch(0.72 0.12 75)",
                  color: "oklch(0.20 0.02 255)",
                  fontFamily: "'Source Sans 3', sans-serif",
                }}
              >
                Démarrer mon bilan de compétences
                <ChevronRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
