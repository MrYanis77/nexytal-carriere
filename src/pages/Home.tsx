/**
 * ALT-RH & Carrière – Page Accueil
 * H1 SEO : Bilan de compétences – Distanciel, Présentiel ou Mixte
 * Design: Swiss Corporate Modernism × Editorial Warmth
 */
import { Link } from "wouter";
import { CheckCircle, Star, Shield, Clock, Award, ChevronRight, Monitor, Users, Shuffle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/JCBFQieMDDWiuPXVQraPH5/hero-bilan-competences-jsMax2iPipC63nNPmR7rjc.webp";
const DISTANCIEL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/JCBFQieMDDWiuPXVQraPH5/bilan-distanciel-RMQYGnTrj6a7AFdLun2QTt.webp";
const PRESENTIEL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/JCBFQieMDDWiuPXVQraPH5/bilan-presentiel-8qbfQmABDXsfevM7YS75mQ.webp";

const stats = [
  { value: "180+", label: "Personnes accompagnées par an" },
  { value: "20h", label: "D'accompagnement personnalisé" },
  { value: "100%", label: "Finançable avec votre CPF" },
  { value: "98%", label: "De satisfaction client" },
];

const prestations = [
  {
    icon: Monitor,
    title: "Bilan 100 % Distanciel",
    description: "Idéal pour les salariés en télétravail, parents et personnes en régions éloignées. Séances en visio, plateforme accessible 24h/24.",
    price: "1 800 € TTC",
    tag: "Le plus flexible",
    href: "/bilan-competences-distance",
    cta: "Je choisis le distanciel",
    color: "oklch(0.28 0.08 255)",
  },
  {
    icon: Users,
    title: "Bilan 100 % Présentiel",
    description: "Pour ceux qui privilégient l'échange humain profond. Rencontres en cabinet à Paris, supports premium, tableau blanc.",
    price: "1 950 € TTC",
    tag: "Le plus humain",
    href: "/bilan-competences-presentiel-paris",
    cta: "Je choisis le présentiel",
    color: "oklch(0.20 0.09 255)",
  },
  {
    icon: Shuffle,
    title: "Bilan Format Mixte",
    description: "Le meilleur des deux mondes : séances en présentiel et en visio selon votre agenda. Flexibilité maximale.",
    price: "1 850 € TTC",
    tag: "Le plus adaptatif",
    href: "/prestations",
    cta: "Je veux le format mixte",
    color: "oklch(0.72 0.12 75)",
  },
];

const temoignages = [
  {
    name: "Sophie M.",
    poste: "Responsable marketing, 38 ans",
    texte: "Grâce au bilan de compétences, j'ai enfin osé changer de secteur. Mon conseiller a été d'une écoute exceptionnelle. Le financement CPF a tout simplifié.",
    stars: 5,
  },
  {
    name: "Thomas R.",
    poste: "Ingénieur informatique, 45 ans",
    texte: "J'avais des doutes sur ma reconversion. Le bilan m'a donné une clarté incroyable sur mes compétences et mes aspirations. Je recommande vivement.",
    stars: 5,
  },
  {
    name: "Marie-Claire D.",
    poste: "Cadre RH, 52 ans",
    texte: "Le format distanciel était parfait pour moi. Votre projet reste strictement confidentiel, c'était essentiel pour moi. Résultats concrets et plan d'action solide.",
    stars: 5,
  },
];

const avantages = [
  "Certifié Qualiopi – organisme de formation reconnu",
  "Finançable à 100 % avec votre CPF",
  "Votre projet reste strictement confidentiel",
  "Livrable : dossier 30-40 pages + plan d'action",
  "Accompagnement par un consultant dédié",
  "Disponible en distanciel, présentiel ou mixte",
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMG}
            alt="Bilan de compétences - séance de conseil professionnelle"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(105deg, oklch(0.20 0.09 255 / 0.92) 0%, oklch(0.20 0.09 255 / 0.85) 40%, oklch(0.20 0.09 255 / 0.50) 100%)",
            }}
          />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-semibold uppercase tracking-widest"
              style={{
                backgroundColor: "oklch(0.72 0.12 75 / 0.15)",
                border: "1px solid oklch(0.72 0.12 75 / 0.5)",
                color: "oklch(0.82 0.10 75)",
              }}
            >
              <Award size={12} />
              Cabinet certifié Qualiopi
            </div>

            {/* H1 */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Bilan de compétences
              <span
                className="block italic font-normal mt-1"
                style={{ color: "oklch(0.82 0.10 75)" }}
              >
                Distanciel, Présentiel ou Mixte
              </span>
            </h1>

            {/* Sous-titre */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {["Finançable CPF", "20 heures", "Résultats concrets"].map((tag) => (
                <span
                  key={tag}
                  className="text-sm font-semibold px-3 py-1"
                  style={{
                    backgroundColor: "oklch(0.72 0.12 75)",
                    color: "oklch(0.20 0.02 255)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Texte hero */}
            <p
              className="text-lg leading-relaxed mb-8 opacity-90 text-white"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Faites le point sur votre carrière sans contrainte. Choisissez le format qui vous convient : 100 % en visio, en présentiel à Paris ou mixte. Votre projet reste strictement confidentiel.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider py-4 px-8 transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: "oklch(0.72 0.12 75)",
                  color: "oklch(0.20 0.02 255)",
                  fontFamily: "'Source Sans 3', sans-serif",
                }}
              >
                Réserver mon appel découverte gratuit
                <ChevronRight size={16} />
              </Link>
              <Link
                href="/prestations"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider py-4 px-8 transition-all border-2 border-white/60 text-white hover:bg-white/10"
                style={{ fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Découvrir les prestations
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Shield size={14} style={{ color: "oklch(0.72 0.12 75)" }} />
                Votre projet reste strictement confidentiel
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <CheckCircle size={14} style={{ color: "oklch(0.72 0.12 75)" }} />
                Finançable à 100 % avec votre CPF
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section style={{ backgroundColor: "oklch(0.72 0.12 75)" }}>
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center">
                  <div
                    className="text-4xl font-bold mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: "oklch(0.28 0.08 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRESTATIONS SECTION ===== */}
      <section className="py-24" style={{ backgroundColor: "oklch(0.98 0.01 85)" }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Nos formats d'accompagnement
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
              >
                Choisissez votre format de bilan
              </h2>
              <div className="h-0.5 w-16 mx-auto" style={{ background: "oklch(0.72 0.12 75)" }} />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {prestations.map((p, i) => {
              const Icon = p.icon;
              return (
                <ScrollReveal key={i} delay={i * 150}>
                  <div
                    className="card-hover bg-white rounded-none border-t-4 p-8 flex flex-col h-full"
                    style={{ borderTopColor: p.color }}
                  >
                    <div
                      className="w-12 h-12 flex items-center justify-center mb-5"
                      style={{ backgroundColor: `${p.color}15` }}
                    >
                      <Icon size={22} style={{ color: p.color }} />
                    </div>
                    <span
                      className="text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: p.color, fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      {p.tag}
                    </span>
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-6 flex-grow"
                      style={{ color: "oklch(0.45 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      {p.description}
                    </p>
                    <div className="mb-6">
                      <div
                        className="text-2xl font-bold"
                        style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
                      >
                        {p.price}
                      </div>
                      <div
                        className="text-xs mt-1"
                        style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600 }}
                      >
                        Finançable à 100 % avec votre CPF
                      </div>
                    </div>
                    <Link
                      href={p.href}
                      className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider py-3 px-6 transition-all hover:-translate-y-0.5"
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
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== AVANTAGES SECTION ===== */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  Pourquoi nous choisir
                </p>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
                >
                  Un accompagnement sur mesure,{" "}
                  <span className="italic" style={{ color: "oklch(0.72 0.12 75)" }}>
                    en toute confiance
                  </span>
                </h2>
                <div className="h-0.5 w-16 mb-8" style={{ background: "oklch(0.72 0.12 75)" }} />
                <p
                  className="text-base leading-relaxed mb-8"
                  style={{ color: "oklch(0.45 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  ALT-RH & Carrière accompagne chaque année plus de 180 personnes en reconversion ou évolution professionnelle. Notre approche combine rigueur méthodologique et bienveillance humaine.
                </p>
                <ul className="space-y-4">
                  {avantages.map((avantage, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="mt-0.5 shrink-0"
                        style={{ color: "oklch(0.72 0.12 75)" }}
                      />
                      <span
                        className="text-sm"
                        style={{ color: "oklch(0.35 0.03 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        {avantage}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="/a-propos"
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider py-3 px-6 transition-all hover:-translate-y-0.5"
                    style={{
                      backgroundColor: "oklch(0.28 0.08 255)",
                      color: "white",
                      fontFamily: "'Source Sans 3', sans-serif",
                    }}
                  >
                    En savoir plus sur nous
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <img
                  src={PRESENTIEL_IMG}
                  alt="Séance de bilan de compétences en présentiel à Paris"
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                />
                {/* Floating card */}
                <div
                  className="absolute -bottom-6 -left-6 p-5 shadow-2xl"
                  style={{ backgroundColor: "oklch(0.72 0.12 75)", maxWidth: "220px" }}
                >
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
                  >
                    180+
                  </div>
                  <div
                    className="text-xs font-semibold"
                    style={{ color: "oklch(0.28 0.08 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    Personnes accompagnées chaque année
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== METHODOLOGIE SECTION ===== */}
      <section className="py-24" style={{ backgroundColor: "oklch(0.28 0.08 255)" }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Notre méthode
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                La méthode en 3 phases officielles
              </h2>
              <div className="h-0.5 w-16 mx-auto" style={{ background: "oklch(0.72 0.12 75)" }} />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Phase Préliminaire",
                duration: "2 heures",
                desc: "Analyse de votre demande et de votre situation. Confirmation de votre engagement dans la démarche. Présentation des méthodes et des outils utilisés.",
              },
              {
                num: "02",
                title: "Phase d'Investigation",
                duration: "14 heures",
                desc: "Analyse de votre parcours professionnel. Identification de vos compétences, valeurs et aspirations. Exploration des pistes professionnelles et étude de faisabilité.",
              },
              {
                num: "03",
                title: "Phase de Conclusion",
                duration: "4 heures",
                desc: "Formalisation de votre projet professionnel. Analyse de vos points forts et de vos points de vigilance. Mise en place d'un plan d'action réaliste.",
              },
            ].map((phase, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="relative">
                  <div
                    className="text-7xl font-bold leading-none mb-4 opacity-20"
                    style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.72 0.12 75)" }}
                  >
                    {phase.num}
                  </div>
                  <div className="h-0.5 w-12 mb-4" style={{ background: "oklch(0.72 0.12 75)" }} />
                  <h3
                    className="text-xl font-bold mb-2 text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {phase.title}
                  </h3>
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4 inline-block"
                    style={{
                      backgroundColor: "oklch(0.72 0.12 75)",
                      color: "oklch(0.20 0.02 255)",
                      fontFamily: "'Source Sans 3', sans-serif",
                    }}
                  >
                    {phase.duration}
                  </span>
                  <p
                    className="text-sm leading-relaxed mt-3"
                    style={{ color: "oklch(0.80 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    {phase.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div
              className="mt-12 p-6 border"
              style={{ borderColor: "oklch(0.72 0.12 75 / 0.3)", backgroundColor: "oklch(0.72 0.12 75 / 0.08)" }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <p
                    className="text-sm font-semibold text-white mb-1"
                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    Livrable final : dossier 30-40 pages + plan d'action détaillé
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    20 heures d'accompagnement sur 6 à 8 semaines
                  </p>
                </div>
                <Link
                  href="/methodologie"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider py-3 px-6 shrink-0 transition-all hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "oklch(0.72 0.12 75)",
                    color: "oklch(0.20 0.02 255)",
                    fontFamily: "'Source Sans 3', sans-serif",
                  }}
                >
                  Voir la méthodologie complète
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== TEMOIGNAGES ===== */}
      <section className="py-24" style={{ backgroundColor: "oklch(0.98 0.01 85)" }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Témoignages
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
              >
                Ce qu'ils disent de leur bilan
              </h2>
              <div className="h-0.5 w-16 mx-auto" style={{ background: "oklch(0.72 0.12 75)" }} />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {temoignages.map((t, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="bg-white p-8 card-hover">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={16} fill="oklch(0.72 0.12 75)" style={{ color: "oklch(0.72 0.12 75)" }} />
                    ))}
                  </div>
                  <p
                    className="text-sm leading-relaxed mb-6 italic"
                    style={{ color: "oklch(0.40 0.02 255)", fontFamily: "'Playfair Display', serif" }}
                  >
                    « {t.texte} »
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: "oklch(0.28 0.08 255)", fontFamily: "'Playfair Display', serif" }}
                    >
                      {t.name[0]}
                    </div>
                    <div>
                      <div
                        className="text-sm font-bold"
                        style={{ color: "oklch(0.20 0.09 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        {t.name}
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "oklch(0.55 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        {t.poste}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CPF SECTION ===== */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal delay={200}>
              <div className="relative">
                <img
                  src={DISTANCIEL_IMG}
                  alt="Financement CPF bilan de compétences"
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                />
                <div
                  className="absolute -top-4 -right-4 w-20 h-20 flex items-center justify-center"
                  style={{ backgroundColor: "oklch(0.72 0.12 75)" }}
                >
                  <div className="text-center">
                    <div
                      className="text-lg font-bold"
                      style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
                    >
                      100%
                    </div>
                    <div
                      className="text-xs font-semibold"
                      style={{ color: "oklch(0.28 0.08 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      CPF
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  Financement CPF
                </p>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
                >
                  Votre bilan,{" "}
                  <span className="italic" style={{ color: "oklch(0.72 0.12 75)" }}>
                    finançable à 100 % avec votre CPF
                  </span>
                </h2>
                <div className="h-0.5 w-16 mb-8" style={{ background: "oklch(0.72 0.12 75)" }} />
                <p
                  className="text-base leading-relaxed mb-6"
                  style={{ color: "oklch(0.45 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  Le bilan de compétences est une formation éligible au Compte Personnel de Formation (CPF). Vous pouvez financer l'intégralité de votre bilan sans avancer un seul euro.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Vérifiez votre solde CPF sur moncompteformation.gouv.fr",
                    "Sélectionnez notre formation dans le catalogue",
                    "Validez votre inscription en quelques clics",
                    "Commencez votre bilan sans avancer de frais",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                        style={{
                          backgroundColor: "oklch(0.72 0.12 75)",
                          color: "oklch(0.20 0.02 255)",
                          fontFamily: "'Source Sans 3', sans-serif",
                        }}
                      >
                        {i + 1}
                      </div>
                      <span
                        className="text-sm pt-0.5"
                        style={{ color: "oklch(0.35 0.03 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/financements-cpf"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider py-3 px-6 transition-all hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "oklch(0.28 0.08 255)",
                    color: "white",
                    fontFamily: "'Source Sans 3', sans-serif",
                  }}
                >
                  Guide complet du financement CPF
                  <ChevronRight size={14} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: "oklch(0.20 0.09 255)" }}
      >
        <div className="container relative z-10 text-center">
          <ScrollReveal>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Prêt à franchir le pas ?
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold mb-6 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Commencez votre bilan de compétences
              <span
                className="block italic mt-2"
                style={{ color: "oklch(0.82 0.10 75)" }}
              >
                dès aujourd'hui
              </span>
            </h2>
            <p
              className="text-base mb-10 max-w-xl mx-auto"
              style={{ color: "oklch(0.75 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Réservez votre appel découverte gratuit de 30 minutes. Votre conseiller vous recontacte sous 48 h. Votre projet reste strictement confidentiel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider py-4 px-10 transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: "oklch(0.72 0.12 75)",
                  color: "oklch(0.20 0.02 255)",
                  fontFamily: "'Source Sans 3', sans-serif",
                }}
              >
                Réserver mon appel découverte gratuit
                <ChevronRight size={16} />
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider py-4 px-10 border-2 text-white transition-all hover:bg-white/10"
                style={{ borderColor: "oklch(1 0 0 / 0.3)", fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Consulter la FAQ
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
