/**
 * ALT-RH & Carrière – Page FAQ
 * 15 questions en format accordéon
 * Données structurées FAQ Schema.org
 * Design: Swiss Corporate Modernism × Editorial Warmth
 */
import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown, ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    question: "Le bilan de compétences est-il confidentiel ?",
    answer: "Oui, à 100 %. Votre projet reste strictement confidentiel. Aucune information concernant votre bilan ne peut être transmise à votre employeur sans votre accord écrit et explicite. Le secret professionnel s'applique à l'ensemble de la démarche, conformément au Code du Travail (Art. L6313-4).",
    category: "Confidentialité",
  },
  {
    question: "Qu'est-ce qu'un bilan de compétences ?",
    answer: "Le bilan de compétences est un dispositif légal (Code du Travail, Art. L6313-4) qui permet d'analyser vos compétences professionnelles et personnelles, vos aptitudes et vos motivations, en vue de définir un projet professionnel ou de formation. Il se déroule en 3 phases officielles sur 20 heures maximum.",
    category: "Général",
  },
  {
    question: "Comment financer son bilan avec le CPF ?",
    answer: "Le bilan de compétences est finançable à 100 % avec votre Compte Personnel de Formation (CPF). Connectez-vous sur moncompteformation.gouv.fr, vérifiez votre solde, recherchez notre formation et validez votre inscription. Vous n'avancez aucun frais. Si votre solde est insuffisant, d'autres financements complémentaires existent (employeur, France Travail).",
    category: "Financement",
  },
  {
    question: "Combien de temps dure un bilan de compétences ?",
    answer: "Un bilan de compétences dure 20 heures maximum, réparties sur 6 à 8 semaines. Ces 20 heures se décomposent en 3 phases : Phase Préliminaire (2h), Phase d'Investigation (14h) et Phase de Conclusion (4h). Le rythme est adapté à votre agenda, avec généralement 1 à 2 séances par semaine.",
    category: "Déroulement",
  },
  {
    question: "Quelle est la différence entre le format distanciel et présentiel ?",
    answer: "Le format distanciel se déroule entièrement en visioconférence (Zoom), avec une plateforme accessible 24h/24. Il est idéal pour les personnes en télétravail, les parents ou celles éloignées géographiquement. Le format présentiel se déroule en cabinet à Paris, offrant un échange humain plus profond. Le format mixte combine les deux selon votre agenda.",
    category: "Formats",
  },
  {
    question: "Puis-je faire un bilan de compétences si je suis en poste ?",
    answer: "Oui, absolument. La grande majorité de nos bénéficiaires sont des salariés en poste. Le bilan peut se dérouler sur votre temps personnel (soirs, week-ends) ou sur votre temps de travail avec l'accord de votre employeur. Dans ce dernier cas, votre employeur n'a accès qu'au document de synthèse que vous choisissez de lui communiquer.",
    category: "Général",
  },
  {
    question: "Quel est le livrable à la fin du bilan ?",
    answer: "À l'issue du bilan, vous recevez un dossier de synthèse personnalisé de 30 à 40 pages, comprenant : la synthèse de votre parcours, la cartographie de vos compétences, l'analyse de vos motivations et valeurs, la présentation de votre projet professionnel, et un plan d'action détaillé et daté. Ce document vous appartient exclusivement.",
    category: "Résultats",
  },
  {
    question: "Mon employeur peut-il être informé de mon bilan ?",
    answer: "Non, sauf si vous en décidez autrement. Si vous faites votre bilan sur votre temps personnel et avec votre CPF, votre employeur n'a aucun droit à l'information. Si votre bilan est financé par votre employeur dans le cadre du plan de formation, seul le document de synthèse peut lui être communiqué, et uniquement avec votre accord.",
    category: "Confidentialité",
  },
  {
    question: "Quels outils sont utilisés pendant le bilan ?",
    answer: "Nous utilisons des outils validés scientifiquement : tests de personnalité (MBTI, Big Five), tests d'aptitudes cognitives, inventaires d'intérêts professionnels (RIASEC), questionnaires de valeurs professionnelles. Ces outils sont complétés par des entretiens approfondis et des exercices de projection professionnelle.",
    category: "Méthodologie",
  },
  {
    question: "Que se passe-t-il si mon solde CPF est insuffisant ?",
    answer: "Si votre solde CPF ne couvre pas l'intégralité du bilan, plusieurs solutions existent : votre employeur peut compléter le financement via le plan de développement des compétences, France Travail peut intervenir si vous êtes demandeur d'emploi, ou vous pouvez compléter sur vos fonds propres. Nous vous accompagnons dans le montage financier.",
    category: "Financement",
  },
  {
    question: "Combien coûte un bilan de compétences ?",
    answer: "Nos tarifs sont : Bilan 100 % Distanciel à 1 800 € TTC, Bilan Format Mixte à 1 850 € TTC, Bilan 100 % Présentiel à 1 950 € TTC. Ces tarifs sont intégralement couverts par le CPF dans la plupart des cas. Des facilités de paiement en 3 fois sans frais sont disponibles pour l'autofinancement.",
    category: "Tarifs",
  },
  {
    question: "Reconversion après 40 ans : est-ce trop tard ?",
    answer: "Absolument pas ! Bien au contraire. Les personnes de plus de 40 ans représentent une grande partie de nos bénéficiaires. Avec 15 à 20 ans d'expérience professionnelle, vous disposez d'un capital de compétences considérable. Le bilan de compétences vous aide à valoriser ce capital et à construire un projet réaliste et motivant pour la seconde partie de votre carrière.",
    category: "Reconversion",
  },
  {
    question: "Puis-je faire un bilan de compétences si je suis demandeur d'emploi ?",
    answer: "Oui. Si vous êtes demandeur d'emploi, France Travail (ex-Pôle Emploi) peut financer votre bilan dans le cadre de votre projet de retour à l'emploi. Vous pouvez également utiliser votre CPF. Renseignez-vous auprès de votre conseiller France Travail pour connaître les modalités de prise en charge.",
    category: "Financement",
  },
  {
    question: "Comment se déroule le premier entretien ?",
    answer: "Le premier entretien (appel découverte gratuit de 30 minutes) est un échange informel et sans engagement. Votre conseiller vous présente la démarche, répond à vos questions et évalue si le bilan de compétences est adapté à votre situation. Cet entretien est confidentiel et ne vous engage à rien. Votre conseiller vous recontacte sous 48h après votre demande.",
    category: "Déroulement",
  },
  {
    question: "Quelle est la différence entre un bilan de compétences et un coaching ?",
    answer: "Le bilan de compétences est un dispositif légal encadré par le Code du Travail, avec un cahier des charges précis (3 phases, 20h maximum, document de synthèse obligatoire). Il est finançable CPF. Le coaching est une démarche plus libre, sans cadre légal spécifique, généralement non finançable CPF. Le bilan est plus structuré et orienté vers un projet professionnel concret.",
    category: "Général",
  },
];

const categories = ["Tous", ...Array.from(new Set(faqs.map((f) => f.category)))];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredFaqs = activeCategory === "Tous"
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  return (
    <div className="min-h-screen pt-24">
      {/* Données structurées FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.28 0.08 255)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Questions fréquentes
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Foire aux questions
              <span className="block italic mt-1" style={{ color: "oklch(0.82 0.10 75)" }}>
                Toutes vos réponses ici
              </span>
            </h1>
            <div className="h-0.5 w-16 mb-6" style={{ background: "oklch(0.72 0.12 75)" }} />
            <p
              className="text-base"
              style={{ color: "oklch(0.80 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Vous avez des questions sur le bilan de compétences, le financement CPF ou notre méthode ? Retrouvez ci-dessous les réponses aux 15 questions les plus fréquentes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="container">
          {/* Filtres par catégorie */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all"
                style={{
                  backgroundColor: activeCategory === cat ? "oklch(0.28 0.08 255)" : "oklch(0.96 0.01 85)",
                  color: activeCategory === cat ? "white" : "oklch(0.45 0.02 255)",
                  fontFamily: "'Source Sans 3', sans-serif",
                  border: "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordéon */}
          <div className="max-w-3xl">
            {filteredFaqs.map((faq, i) => {
              const globalIndex = faqs.indexOf(faq);
              const isOpen = openIndex === globalIndex;
              return (
                <ScrollReveal key={globalIndex} delay={i * 50}>
                  <div className="faq-item">
                    <button
                      className="w-full flex items-center justify-between py-5 text-left gap-4"
                      onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 shrink-0 mt-0.5"
                          style={{
                            backgroundColor: "oklch(0.72 0.12 75 / 0.15)",
                            color: "oklch(0.72 0.12 75)",
                            fontFamily: "'Source Sans 3', sans-serif",
                          }}
                        >
                          {faq.category}
                        </span>
                        <span
                          className="text-base font-semibold"
                          style={{ color: "oklch(0.20 0.09 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                        >
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown
                        size={18}
                        className="shrink-0 transition-transform duration-300"
                        style={{
                          color: "oklch(0.72 0.12 75)",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      />
                    </button>
                    {isOpen && (
                      <div className="pb-5 pl-4">
                        <div
                          className="pl-4 border-l-2"
                          style={{ borderColor: "oklch(0.72 0.12 75)" }}
                        >
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: "oklch(0.45 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.98 0.01 85)" }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center">
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
              >
                Vous n'avez pas trouvé votre réponse ?
              </h2>
              <p
                className="text-base mb-8 max-w-lg mx-auto"
                style={{ color: "oklch(0.45 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
              >
                Contactez-nous directement. Notre équipe vous répond sous 48h et votre projet reste strictement confidentiel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider py-3 px-8 transition-all hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "oklch(0.72 0.12 75)",
                    color: "oklch(0.20 0.02 255)",
                    fontFamily: "'Source Sans 3', sans-serif",
                  }}
                >
                  Poser ma question
                  <ChevronRight size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider py-3 px-8 border-2 transition-all"
                  style={{
                    borderColor: "oklch(0.28 0.08 255)",
                    color: "oklch(0.28 0.08 255)",
                    fontFamily: "'Source Sans 3', sans-serif",
                  }}
                >
                  Réserver mon appel découverte gratuit
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
