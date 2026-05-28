/**
 * ALT-RH & Carrière – Landing Page Bilan Distanciel
 * URL: /bilan-competences-distance
 * SEO optimisé pour "bilan de compétences à distance"
 * Design: Swiss Corporate Modernism × Editorial Warmth
 */
import { Link } from "wouter";
import { CheckCircle, ChevronRight, Monitor, Clock, Video, Wifi, Shield, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const DISTANCIEL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/JCBFQieMDDWiuPXVQraPH5/bilan-distanciel-RMQYGnTrj6a7AFdLun2QTt.webp";

const avantages = [
  { icon: Wifi, title: "100 % en visioconférence", desc: "Séances sur Zoom depuis votre domicile ou bureau" },
  { icon: Clock, title: "Flexibilité totale", desc: "Séances programmées selon votre agenda, soirs inclus" },
  { icon: Monitor, title: "Plateforme 24h/24", desc: "Accès à vos ressources et exercices à tout moment" },
  { icon: Video, title: "Qualité identique", desc: "Même accompagnement que le présentiel, même résultats" },
];

export default function LandingDistanciel() {
  return (
    <div className="min-h-screen pt-24">
      {/* Meta SEO */}
      <title>Bilan de compétences 100 % à distance | ALT-RH & Carrière | Finançable CPF</title>

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={DISTANCIEL_IMG} alt="Bilan de compétences à distance" className="w-full h-full object-cover" />
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
              <Monitor size={12} />
              Format 100 % Distanciel
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Bilan de compétences
              <span className="block italic mt-1" style={{ color: "oklch(0.82 0.10 75)" }}>
                100 % à distance
              </span>
            </h1>
            <div className="flex flex-wrap gap-3 mb-6">
              {["Finançable CPF", "20 heures", "Visio Zoom", "Plateforme 24h/24"].map((tag) => (
                <span key={tag} className="text-sm font-semibold px-3 py-1" style={{ backgroundColor: "oklch(0.72 0.12 75)", color: "oklch(0.20 0.02 255)" }}>
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-lg leading-relaxed mb-8 text-white/90" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
              Faites votre bilan de compétences depuis chez vous, sans contrainte géographique. Idéal pour les salariés en télétravail, les parents et les personnes éloignées des grandes villes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider py-4 px-8 transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "oklch(0.72 0.12 75)", color: "oklch(0.20 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Je choisis le distanciel
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
              <span className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}>1 800 € TTC</span>
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

      {/* Avantages */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}>
              Pourquoi choisir le format distanciel ?
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {avantages.map((av, i) => {
              const AvIcon = av.icon;
              return (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="p-6 text-center card-hover" style={{ backgroundColor: "oklch(0.98 0.01 85)" }}>
                    <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "oklch(0.28 0.08 255 / 0.10)" }}>
                      <AvIcon size={22} style={{ color: "oklch(0.28 0.08 255)" }} />
                    </div>
                    <h3 className="text-base font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}>{av.title}</h3>
                    <p className="text-sm" style={{ color: "oklch(0.50 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}>{av.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.98 0.01 85)" }}>
        <div className="container">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}>
                Ce format est fait pour vous si...
              </h2>
              <ul className="text-left space-y-3">
                {[
                  "Vous travaillez en télétravail et votre agenda est chargé",
                  "Vous habitez en dehors de Paris ou d'une grande ville",
                  "Vous êtes parent et avez des contraintes de déplacement",
                  "Vous souhaitez faire votre bilan en toute discrétion",
                  "Vous êtes à l'aise avec les outils numériques",
                  "Vous souhaitez la solution la plus flexible et la moins chère",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "oklch(0.35 0.03 255)", fontFamily: "'Source Sans 3', sans-serif" }}>
                    <CheckCircle size={16} style={{ color: "oklch(0.72 0.12 75)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.28 0.08 255)" }}>
        <div className="container text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield size={18} style={{ color: "oklch(0.72 0.12 75)" }} />
              <span className="text-sm font-semibold text-white" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                Votre projet reste strictement confidentiel
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Prêt à commencer votre bilan à distance ?
            </h2>
            <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: "oklch(0.75 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}>
              Réservez votre appel découverte gratuit. Votre conseiller vous recontacte sous 48 h.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider py-4 px-10 transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: "oklch(0.72 0.12 75)", color: "oklch(0.20 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Je choisis le distanciel – Appel gratuit
              <ChevronRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
