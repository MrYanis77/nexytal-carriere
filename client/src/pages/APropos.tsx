/**
 * ALT-RH & Carrière – Page À propos
 * Design: Swiss Corporate Modernism × Editorial Warmth
 */
import { Link } from "wouter";
import { ChevronRight, Heart, Lock, Target, Award, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/JCBFQieMDDWiuPXVQraPH5/hero-bilan-competences-jsMax2iPipC63nNPmR7rjc.webp";
const PRESENTIEL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/JCBFQieMDDWiuPXVQraPH5/bilan-presentiel-8qbfQmABDXsfevM7YS75mQ.webp";

const valeurs = [
  {
    icon: Heart,
    title: "Bienveillance",
    desc: "Chaque accompagnement est mené avec écoute, respect et empathie. Votre parcours est unique, notre approche aussi.",
    color: "oklch(0.72 0.12 75)",
  },
  {
    icon: Lock,
    title: "Confidentialité absolue",
    desc: "Votre projet reste strictement confidentiel. Aucune information n'est transmise à votre employeur sans votre accord explicite.",
    color: "oklch(0.28 0.08 255)",
  },
  {
    icon: Target,
    title: "Pragmatisme",
    desc: "Des résultats concrets, un plan d'action réaliste. Nous vous aidons à construire un projet professionnel solide et réalisable.",
    color: "oklch(0.20 0.09 255)",
  },
];

const chiffres = [
  { value: "180+", label: "Personnes accompagnées par an" },
  { value: "12", label: "Années d'expérience" },
  { value: "98%", label: "Taux de satisfaction" },
  { value: "3", label: "Formats disponibles" },
];

const certifications = [
  "Certification Qualiopi (décret n°2019-565)",
  "Référencé Mon Compte Formation (CPF)",
  "Membre de la Fédération des Organismes de Bilan",
  "Respect du Code du Travail Art. L6313-4",
];

export default function APropos() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMG} alt="ALT-RH & Carrière" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(105deg, oklch(0.20 0.09 255 / 0.92) 0%, oklch(0.20 0.09 255 / 0.70) 100%)" }}
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Notre histoire
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              À propos d'ALT-RH & Carrière
            </h1>
            <div className="h-0.5 w-16 mb-6" style={{ background: "oklch(0.72 0.12 75)" }} />
            <p
              className="text-lg leading-relaxed text-white/85"
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Fondé par Sophie Marchand, ALT-RH & Carrière accompagne chaque année plus de 180 personnes en reconversion ou évolution professionnelle. Notre mission : vous aider à révéler votre potentiel et construire un projet professionnel qui vous ressemble.
            </p>
          </div>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  Qui sommes-nous
                </p>
                <h2
                  className="text-3xl font-bold mb-6"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
                >
                  Un cabinet fondé sur la conviction que{" "}
                  <span className="italic" style={{ color: "oklch(0.72 0.12 75)" }}>
                    chaque parcours mérite attention
                  </span>
                </h2>
                <div className="h-0.5 w-16 mb-8" style={{ background: "oklch(0.72 0.12 75)" }} />
                <div className="space-y-4 text-base leading-relaxed" style={{ color: "oklch(0.45 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}>
                  <p>
                    Fondé par Sophie Marchand, consultante RH avec plus de 12 ans d'expérience en accompagnement professionnel, ALT-RH & Carrière est né d'une conviction simple : chaque professionnel mérite un accompagnement sur mesure, bienveillant et concret.
                  </p>
                  <p>
                    Notre cabinet accompagne chaque année plus de 180 personnes en reconversion ou évolution professionnelle, qu'ils soient salariés, cadres, parents en reprise d'activité ou professionnels en quête de sens.
                  </p>
                  <p>
                    Certifié Qualiopi et référencé sur Mon Compte Formation, nous garantissons la qualité de nos prestations et la conformité de nos méthodes avec le cadre réglementaire du bilan de compétences.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <img
                  src={PRESENTIEL_IMG}
                  alt="Sophie Marchand - Fondatrice ALT-RH & Carrière"
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                />
                <div
                  className="absolute -bottom-6 -right-6 p-5 shadow-2xl"
                  style={{ backgroundColor: "oklch(0.28 0.08 255)", maxWidth: "200px" }}
                >
                  <div
                    className="text-2xl font-bold text-white mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Sophie M.
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif", fontWeight: 600 }}
                  >
                    Fondatrice & Consultante principale
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Chiffres */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.72 0.12 75)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {chiffres.map((c, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center">
                  <div
                    className="text-4xl font-bold mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
                  >
                    {c.value}
                  </div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: "oklch(0.28 0.08 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    {c.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24" style={{ backgroundColor: "oklch(0.98 0.01 85)" }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Ce qui nous guide
              </p>
              <h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
              >
                Nos valeurs fondamentales
              </h2>
              <div className="h-0.5 w-16 mx-auto" style={{ background: "oklch(0.72 0.12 75)" }} />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valeurs.map((v, i) => {
              const ValeurIcon = v.icon;
              return (
                <ScrollReveal key={i} delay={i * 150}>
                  <div className="bg-white p-8 card-hover text-center">
                    <div
                      className="w-16 h-16 flex items-center justify-center mx-auto mb-5"
                      style={{ backgroundColor: `${v.color}15` }}
                    >
                      <ValeurIcon size={28} style={{ color: v.color }} />
                    </div>
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
                    >
                      {v.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "oklch(0.45 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      {v.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  Qualité & conformité
                </p>
                <h2
                  className="text-3xl font-bold mb-6"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
                >
                  Un cabinet certifié et reconnu
                </h2>
                <div className="h-0.5 w-16 mb-8" style={{ background: "oklch(0.72 0.12 75)" }} />
                <ul className="space-y-4">
                  {certifications.map((cert, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Award size={18} className="mt-0.5 shrink-0" style={{ color: "oklch(0.72 0.12 75)" }} />
                      <span
                        className="text-sm"
                        style={{ color: "oklch(0.35 0.03 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        {cert}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="p-8"
                style={{ backgroundColor: "oklch(0.28 0.08 255)" }}
              >
                <Users size={40} className="mb-4" style={{ color: "oklch(0.72 0.12 75)" }} />
                <blockquote
                  className="text-xl italic leading-relaxed text-white mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  « Notre mission est de vous accompagner avec la même bienveillance que nous souhaiterions recevoir nous-mêmes dans un moment de questionnement professionnel. »
                </blockquote>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  — Sophie Marchand, Fondatrice
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.98 0.01 85)" }}>
        <div className="container text-center">
          <ScrollReveal>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
            >
              Prêt à nous faire confiance ?
            </h2>
            <p
              className="text-base mb-8 max-w-lg mx-auto"
              style={{ color: "oklch(0.45 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Réservez votre appel découverte gratuit et faites connaissance avec votre futur conseiller.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider py-4 px-10 transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: "oklch(0.28 0.08 255)",
                color: "white",
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
