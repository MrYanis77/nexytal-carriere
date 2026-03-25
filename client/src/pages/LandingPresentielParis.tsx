/**
 * ALT-RH & Carrière – Landing Page Bilan Présentiel Paris
 * URL: /bilan-competences-presentiel-paris
 * SEO local optimisé pour "bilan de compétences Paris"
 * Design: Swiss Corporate Modernism × Editorial Warmth
 */
import { Link } from "wouter";
import { CheckCircle, ChevronRight, Users, MapPin, Award, Shield, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const PRESENTIEL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/JCBFQieMDDWiuPXVQraPH5/bilan-presentiel-8qbfQmABDXsfevM7YS75mQ.webp";

export default function LandingPresentielParis() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={PRESENTIEL_IMG} alt="Bilan de compétences Paris présentiel" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(105deg, oklch(0.20 0.09 255 / 0.93) 0%, oklch(0.20 0.09 255 / 0.75) 100%)" }}
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-semibold uppercase tracking-widest"
              style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.15)", border: "1px solid oklch(0.72 0.12 75 / 0.5)", color: "oklch(0.82 0.10 75)" }}
            >
              <MapPin size={12} />
              Paris 1er – Cabinet en plein cœur de Paris
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Bilan de compétences à Paris
              <span className="block italic mt-1" style={{ color: "oklch(0.82 0.10 75)" }}>
                100 % Présentiel
              </span>
            </h1>
            <div className="flex flex-wrap gap-3 mb-6">
              {["Finançable CPF", "20 heures", "Paris 1er", "Échange humain"].map((tag) => (
                <span key={tag} className="text-sm font-semibold px-3 py-1" style={{ backgroundColor: "oklch(0.72 0.12 75)", color: "oklch(0.20 0.02 255)" }}>
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-lg leading-relaxed mb-8 text-white/90" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Bénéficiez d'un accompagnement en face-à-face dans notre cabinet parisien. Pour ceux qui privilégient l'échange humain profond et la richesse du contact direct avec leur consultant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider py-4 px-8 transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "oklch(0.72 0.12 75)", color: "oklch(0.20 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Je choisis le présentiel Paris
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Prix */}
      <section style={{ backgroundColor: "oklch(0.72 0.12 75)" }}>
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <span className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}>1 950 € TTC</span>
              <span className="ml-3 text-sm font-semibold" style={{ color: "oklch(0.28 0.08 255)", fontFamily: "'Source Sans 3', sans-serif" }}>Finançable à 100 % avec votre CPF</span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider py-3 px-8 transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: "oklch(0.20 0.09 255)", color: "white", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Réserver mon appel découverte gratuit
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Localisation */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}>
                  Notre cabinet à Paris
                </h2>
                <div className="h-0.5 w-16 mb-8" style={{ background: "oklch(0.72 0.12 75)" }} />
                <div className="flex items-start gap-4 mb-6">
                  <MapPin size={20} className="mt-1 shrink-0" style={{ color: "oklch(0.72 0.12 75)" }} />
                  <div>
                    <p className="font-semibold text-base mb-1" style={{ color: "oklch(0.20 0.09 255)", fontFamily: "'Source Sans 3', sans-serif" }}>12 rue de la Paix, 75001 Paris</p>
                    <p className="text-sm" style={{ color: "oklch(0.55 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}>Métro Opéra (lignes 3, 7, 8) – Accès PMR</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Salle de réunion privée et confidentielle",
                    "Supports papier premium et tableau blanc",
                    "Environnement calme et propice à la réflexion",
                    "Accessible en transports en commun",
                    "Café et eau à disposition",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "oklch(0.35 0.03 255)", fontFamily: "'Source Sans 3', sans-serif" }}>
                      <CheckCircle size={16} style={{ color: "oklch(0.72 0.12 75)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative">
                <img src={PRESENTIEL_IMG} alt="Cabinet ALT-RH Paris" className="w-full object-cover" style={{ aspectRatio: "4/3" }} />
                <div className="absolute -bottom-4 -left-4 p-4 shadow-xl" style={{ backgroundColor: "oklch(0.28 0.08 255)" }}>
                  <div className="flex items-center gap-2">
                    <Award size={18} style={{ color: "oklch(0.72 0.12 75)" }} />
                    <span className="text-xs font-bold text-white" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>Certifié Qualiopi</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Témoignages locaux */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.98 0.01 85)" }}>
        <div className="container">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-10 text-center" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}>
              Ils ont fait leur bilan à Paris
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Laurent B.", poste: "Directeur commercial, 47 ans", texte: "Le format présentiel m'a permis d'avoir des échanges vraiment profonds. La qualité de l'écoute était exceptionnelle." },
              { name: "Isabelle M.", poste: "Responsable RH, 41 ans", texte: "Le cabinet est idéalement situé à Paris. L'ambiance est propice à la réflexion. Je recommande vivement." },
              { name: "Pierre D.", poste: "Ingénieur, 38 ans", texte: "Grâce au bilan en présentiel, j'ai pu construire un projet solide. Le plan d'action est très concret." },
            ].map((t, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white p-6 card-hover">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map((j) => (
                      <Star key={j} size={14} fill="oklch(0.72 0.12 75)" style={{ color: "oklch(0.72 0.12 75)" }} />
                    ))}
                  </div>
                  <p className="text-sm italic leading-relaxed mb-4" style={{ color: "oklch(0.45 0.02 255)", fontFamily: "'Playfair Display', serif" }}>
                    « {t.texte} »
                  </p>
                  <div>
                    <p className="text-sm font-bold" style={{ color: "oklch(0.20 0.09 255)", fontFamily: "'Source Sans 3', sans-serif" }}>{t.name}</p>
                    <p className="text-xs" style={{ color: "oklch(0.55 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}>{t.poste}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.28 0.08 255)" }}>
        <div className="container text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield size={18} style={{ color: "oklch(0.72 0.12 75)" }} />
              <span className="text-sm font-semibold text-white" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>Votre projet reste strictement confidentiel</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Rencontrons-nous à Paris
            </h2>
            <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: "oklch(0.75 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}>
              Réservez votre appel découverte gratuit. Votre conseiller vous recontacte sous 48 h.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider py-4 px-10 transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: "oklch(0.72 0.12 75)", color: "oklch(0.20 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Je choisis le présentiel Paris – Appel gratuit
              <ChevronRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
