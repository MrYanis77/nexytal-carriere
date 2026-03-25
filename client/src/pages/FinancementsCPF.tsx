/**
 * ALT-RH & Carrière – Page Financements & CPF
 * H1 SEO : Financer son bilan de compétences avec le CPF – Mode d'emploi 2026
 * Design: Swiss Corporate Modernism × Editorial Warmth
 */
import { Link } from "wouter";
import { ChevronRight, CheckCircle, AlertCircle, ExternalLink, Euro, Smartphone, CreditCard, Building } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const CPF_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663455782975/JCBFQieMDDWiuPXVQraPH5/cpf-financement-iWneHaJYBXzFaKWtKASvtC.webp";

const etapes = [
  {
    num: "01",
    title: "Vérifiez votre solde CPF",
    desc: "Connectez-vous sur moncompteformation.gouv.fr avec FranceConnect. Votre solde CPF s'affiche en euros. Le bilan de compétences est éligible CPF.",
    icon: Smartphone,
    color: "oklch(0.72 0.12 75)",
  },
  {
    num: "02",
    title: "Trouvez notre formation",
    desc: "Recherchez « ALT-RH & Carrière » ou « bilan de compétences » dans le catalogue Mon Compte Formation. Sélectionnez la formation correspondant à votre format.",
    icon: CreditCard,
    color: "oklch(0.28 0.08 255)",
  },
  {
    num: "03",
    title: "Validez votre inscription",
    desc: "Complétez le dossier en ligne et confirmez votre inscription. Un délai de rétractation de 11 jours ouvrés est prévu par la loi.",
    icon: CheckCircle,
    color: "oklch(0.20 0.09 255)",
  },
  {
    num: "04",
    title: "Commencez votre bilan",
    desc: "Après validation, votre bilan démarre. Vous n'avancez aucun frais. Le paiement est directement géré entre la Caisse des Dépôts et notre cabinet.",
    icon: Building,
    color: "oklch(0.72 0.12 75)",
  },
];

const financements = [
  {
    title: "CPF (Compte Personnel de Formation)",
    desc: "La solution principale. Tout salarié accumule des droits CPF (500 €/an, plafond 5 000 €). Le bilan est éligible à 100 %.",
    badge: "Recommandé",
    color: "oklch(0.72 0.12 75)",
  },
  {
    title: "Plan de développement des compétences",
    desc: "Votre employeur peut financer votre bilan dans le cadre du plan de formation de l'entreprise. À négocier avec votre DRH.",
    badge: "Via l'employeur",
    color: "oklch(0.28 0.08 255)",
  },
  {
    title: "Prise en charge Pôle Emploi",
    desc: "Si vous êtes demandeur d'emploi, France Travail peut financer votre bilan. Renseignez-vous auprès de votre conseiller.",
    badge: "Demandeurs d'emploi",
    color: "oklch(0.20 0.09 255)",
  },
  {
    title: "Autofinancement",
    desc: "Vous pouvez financer votre bilan sur vos fonds propres. Des facilités de paiement en 3 fois sans frais sont disponibles.",
    badge: "Paiement personnel",
    color: "oklch(0.50 0.02 255)",
  },
];

export default function FinancementsCPF() {
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
                Financement
              </p>
              <h1
                className="text-4xl md:text-5xl font-bold mb-4 text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Financer son bilan avec le CPF
                <span className="block italic mt-1" style={{ color: "oklch(0.82 0.10 75)" }}>
                  Mode d'emploi 2026
                </span>
              </h1>
              <div className="h-0.5 w-16 mb-6" style={{ background: "oklch(0.72 0.12 75)" }} />
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "oklch(0.80 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Le bilan de compétences est finançable à 100 % avec votre Compte Personnel de Formation (CPF). Vous n'avancez pas un seul euro. Voici comment procéder en 4 étapes simples.
              </p>
              <div
                className="flex items-center gap-3 p-4 mb-6"
                style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.15)", border: "1px solid oklch(0.72 0.12 75 / 0.3)" }}
              >
                <Euro size={20} style={{ color: "oklch(0.72 0.12 75)" }} />
                <div>
                  <p
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    Finançable à 100 % avec votre CPF
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    Aucune avance de frais requise
                  </p>
                </div>
              </div>
              <a
                href="https://www.moncompteformation.gouv.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider py-3 px-6 transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: "oklch(0.72 0.12 75)",
                  color: "oklch(0.20 0.02 255)",
                  fontFamily: "'Source Sans 3', sans-serif",
                }}
              >
                Vérifier mon solde CPF
                <ExternalLink size={14} />
              </a>
            </div>
            <div>
              <img
                src={CPF_IMG}
                alt="Financement CPF bilan de compétences"
                className="w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Étapes CPF */}
      <section className="py-24 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Comment ça marche
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
              >
                Financer votre bilan en 4 étapes
              </h2>
              <div className="h-0.5 w-16 mx-auto" style={{ background: "oklch(0.72 0.12 75)" }} />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {etapes.map((etape, i) => {
              const EtapeIcon = etape.icon;
              return (
                <ScrollReveal key={i} delay={i * 120}>
                  <div className="relative">
                    {i < etapes.length - 1 && (
                      <div
                        className="hidden lg:block absolute top-8 left-full w-full h-px z-0"
                        style={{ background: "oklch(0.90 0.01 85)" }}
                      />
                    )}
                    <div className="relative z-10">
                      <div
                        className="w-16 h-16 flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${etape.color}15` }}
                      >
                        <EtapeIcon size={28} style={{ color: etape.color }} />
                      </div>
                      <div
                        className="text-4xl font-bold mb-3 leading-none"
                        style={{ fontFamily: "'Playfair Display', serif", color: `${etape.color}30` }}
                      >
                        {etape.num}
                      </div>
                      <h3
                        className="text-lg font-bold mb-3"
                        style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
                      >
                        {etape.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "oklch(0.45 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        {etape.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Autres financements */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.98 0.01 85)" }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
              >
                Autres modes de financement
              </h2>
              <div className="h-0.5 w-16 mx-auto" style={{ background: "oklch(0.72 0.12 75)" }} />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {financements.map((f, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div
                  className="bg-white p-6 card-hover"
                  style={{ borderTop: `3px solid ${f.color}` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3
                      className="text-lg font-bold"
                      style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
                    >
                      {f.title}
                    </h3>
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-2 py-1 shrink-0 ml-3"
                      style={{
                        backgroundColor: `${f.color}15`,
                        color: f.color,
                        fontFamily: "'Source Sans 3', sans-serif",
                      }}
                    >
                      {f.badge}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.45 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    {f.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Info importante */}
      <section className="py-12 bg-white">
        <div className="container">
          <ScrollReveal>
            <div
              className="p-6 flex items-start gap-4"
              style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.08)", border: "1px solid oklch(0.72 0.12 75 / 0.3)" }}
            >
              <AlertCircle size={20} className="shrink-0 mt-0.5" style={{ color: "oklch(0.72 0.12 75)" }} />
              <div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "'Source Sans 3', sans-serif", color: "oklch(0.20 0.09 255)" }}
                >
                  Bon à savoir : le délai de rétractation
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.45 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                >
                  Après validation de votre inscription sur Mon Compte Formation, vous bénéficiez d'un délai de rétractation de 11 jours ouvrés. Passé ce délai, votre inscription est définitive et le financement est engagé.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.28 0.08 255)" }}>
        <div className="container text-center">
          <ScrollReveal>
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Des questions sur le financement ?
            </h2>
            <p
              className="text-base mb-8 max-w-lg mx-auto"
              style={{ color: "oklch(0.75 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Notre équipe vous accompagne dans toutes les démarches administratives. Réservez un appel découverte gratuit pour en savoir plus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider py-4 px-10 border-2 text-white transition-all hover:bg-white/10"
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
