/**
 * ALT-RH & Carrière – Page Contact
 * Formulaire de contact avec 20 CTA textes
 * Design: Swiss Corporate Modernism × Editorial Warmth
 */
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Shield, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    format: "",
    situation: "",
    message: "",
    rgpd: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

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
              Prenons contact
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Réservez votre appel
              <span className="block italic mt-1" style={{ color: "oklch(0.82 0.10 75)" }}>
                découverte gratuit
              </span>
            </h1>
            <div className="h-0.5 w-16 mb-6" style={{ background: "oklch(0.72 0.12 75)" }} />
            <p
              className="text-base"
              style={{ color: "oklch(0.80 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Un entretien de 30 minutes, sans engagement, pour faire connaissance et évaluer si le bilan de compétences est adapté à votre situation. Votre projet reste strictement confidentiel.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Informations de contact */}
            <ScrollReveal>
              <div className="lg:col-span-1">
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
                >
                  Nos coordonnées
                </h2>
                <div className="h-0.5 w-12 mb-8" style={{ background: "oklch(0.72 0.12 75)" }} />

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.15)" }}
                    >
                      <Phone size={18} style={{ color: "oklch(0.72 0.12 75)" }} />
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-wider mb-1"
                        style={{ color: "oklch(0.60 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        Téléphone
                      </p>
                      <a
                        href="tel:+33100000000"
                        className="text-base font-semibold transition-colors hover:text-[oklch(0.72_0.12_75)]"
                        style={{ color: "oklch(0.20 0.09 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        01 00 00 00 00
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.15)" }}
                    >
                      <Mail size={18} style={{ color: "oklch(0.72 0.12 75)" }} />
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-wider mb-1"
                        style={{ color: "oklch(0.60 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        Email
                      </p>
                      <a
                        href="mailto:contact@alt-rh-carriere.fr"
                        className="text-base font-semibold transition-colors hover:text-[oklch(0.72_0.12_75)]"
                        style={{ color: "oklch(0.20 0.09 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        contact@alt-rh-carriere.fr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.15)" }}
                    >
                      <MapPin size={18} style={{ color: "oklch(0.72 0.12 75)" }} />
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-wider mb-1"
                        style={{ color: "oklch(0.60 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        Adresse
                      </p>
                      <p
                        className="text-base font-semibold"
                        style={{ color: "oklch(0.20 0.09 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        12 rue de la Paix<br />75001 Paris
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.15)" }}
                    >
                      <Clock size={18} style={{ color: "oklch(0.72 0.12 75)" }} />
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-wider mb-1"
                        style={{ color: "oklch(0.60 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        Horaires
                      </p>
                      <p
                        className="text-base font-semibold"
                        style={{ color: "oklch(0.20 0.09 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        Lun–Ven : 9h–18h<br />
                        <span className="text-sm font-normal" style={{ color: "oklch(0.55 0.02 255)" }}>
                          Séances possibles en soirée
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Confidentialité */}
                <div
                  className="p-5"
                  style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.08)", borderLeft: "3px solid oklch(0.72 0.12 75)" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Shield size={16} style={{ color: "oklch(0.72 0.12 75)" }} />
                    <span
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      Confidentialité garantie
                    </span>
                  </div>
                  <p
                    className="text-sm"
                    style={{ color: "oklch(0.45 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                  >
                    Votre projet reste strictement confidentiel. Aucune information ne sera transmise à votre employeur.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Formulaire */}
            <ScrollReveal delay={200}>
              <div className="lg:col-span-2">
                {submitted ? (
                  <div
                    className="p-10 text-center"
                    style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.08)", border: "2px solid oklch(0.72 0.12 75)" }}
                  >
                    <CheckCircle size={48} className="mx-auto mb-4" style={{ color: "oklch(0.72 0.12 75)" }} />
                    <h3
                      className="text-2xl font-bold mb-3"
                      style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
                    >
                      Merci pour votre message !
                    </h3>
                    <p
                      className="text-base"
                      style={{ color: "oklch(0.45 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      Votre conseiller vous recontacte sous 48 h. Votre projet reste strictement confidentiel.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2
                      className="text-2xl font-bold mb-6"
                      style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
                    >
                      Votre demande d'appel découverte
                    </h2>
                    <div className="h-0.5 w-12 mb-8" style={{ background: "oklch(0.72 0.12 75)" }} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-xs font-semibold uppercase tracking-wider mb-2"
                          style={{ color: "oklch(0.45 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                        >
                          Prénom *
                        </label>
                        <input
                          type="text"
                          name="prenom"
                          value={formData.prenom}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border text-sm outline-none transition-all"
                          style={{
                            borderColor: "oklch(0.90 0.01 85)",
                            fontFamily: "'Source Sans 3', sans-serif",
                            color: "oklch(0.20 0.09 255)",
                          }}
                          placeholder="Votre prénom"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-xs font-semibold uppercase tracking-wider mb-2"
                          style={{ color: "oklch(0.45 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                        >
                          Nom *
                        </label>
                        <input
                          type="text"
                          name="nom"
                          value={formData.nom}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border text-sm outline-none transition-all"
                          style={{
                            borderColor: "oklch(0.90 0.01 85)",
                            fontFamily: "'Source Sans 3', sans-serif",
                            color: "oklch(0.20 0.09 255)",
                          }}
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-xs font-semibold uppercase tracking-wider mb-2"
                          style={{ color: "oklch(0.45 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border text-sm outline-none transition-all"
                          style={{
                            borderColor: "oklch(0.90 0.01 85)",
                            fontFamily: "'Source Sans 3', sans-serif",
                            color: "oklch(0.20 0.09 255)",
                          }}
                          placeholder="votre@email.fr"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-xs font-semibold uppercase tracking-wider mb-2"
                          style={{ color: "oklch(0.45 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                        >
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          name="telephone"
                          value={formData.telephone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border text-sm outline-none transition-all"
                          style={{
                            borderColor: "oklch(0.90 0.01 85)",
                            fontFamily: "'Source Sans 3', sans-serif",
                            color: "oklch(0.20 0.09 255)",
                          }}
                          placeholder="06 00 00 00 00"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          className="block text-xs font-semibold uppercase tracking-wider mb-2"
                          style={{ color: "oklch(0.45 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                        >
                          Format souhaité
                        </label>
                        <select
                          name="format"
                          value={formData.format}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border text-sm outline-none transition-all bg-white"
                          style={{
                            borderColor: "oklch(0.90 0.01 85)",
                            fontFamily: "'Source Sans 3', sans-serif",
                            color: formData.format ? "oklch(0.20 0.09 255)" : "oklch(0.60 0.02 255)",
                          }}
                        >
                          <option value="">Choisissez un format</option>
                          <option value="distanciel">100 % Distanciel</option>
                          <option value="presentiel">100 % Présentiel (Paris)</option>
                          <option value="mixte">Format Mixte</option>
                          <option value="indecis">Je ne sais pas encore</option>
                        </select>
                      </div>
                      <div>
                        <label
                          className="block text-xs font-semibold uppercase tracking-wider mb-2"
                          style={{ color: "oklch(0.45 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                        >
                          Votre situation
                        </label>
                        <select
                          name="situation"
                          value={formData.situation}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border text-sm outline-none transition-all bg-white"
                          style={{
                            borderColor: "oklch(0.90 0.01 85)",
                            fontFamily: "'Source Sans 3', sans-serif",
                            color: formData.situation ? "oklch(0.20 0.09 255)" : "oklch(0.60 0.02 255)",
                          }}
                        >
                          <option value="">Votre situation actuelle</option>
                          <option value="salarie">Salarié(e) en poste</option>
                          <option value="demandeur">Demandeur(se) d'emploi</option>
                          <option value="independant">Indépendant(e) / Freelance</option>
                          <option value="cadre">Cadre en reconversion</option>
                          <option value="parent">Parent en reprise d'activité</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-xs font-semibold uppercase tracking-wider mb-2"
                        style={{ color: "oklch(0.45 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        Votre message (facultatif)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border text-sm outline-none transition-all resize-none"
                        style={{
                          borderColor: "oklch(0.90 0.01 85)",
                          fontFamily: "'Source Sans 3', sans-serif",
                          color: "oklch(0.20 0.09 255)",
                        }}
                        placeholder="Décrivez brièvement votre situation et vos questions..."
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="rgpd"
                        id="rgpd"
                        checked={formData.rgpd}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        style={{ accentColor: "oklch(0.72 0.12 75)" }}
                      />
                      <label
                        htmlFor="rgpd"
                        className="text-xs leading-relaxed"
                        style={{ color: "oklch(0.55 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                      >
                        J'accepte que mes données soient utilisées pour traiter ma demande de contact. Vos données sont traitées de manière confidentielle et ne sont jamais transmises à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 text-sm font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5"
                      style={{
                        backgroundColor: "oklch(0.72 0.12 75)",
                        color: "oklch(0.20 0.02 255)",
                        fontFamily: "'Source Sans 3', sans-serif",
                      }}
                    >
                      Réserver mon appel découverte gratuit
                    </button>

                    <p
                      className="text-xs text-center"
                      style={{ color: "oklch(0.60 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
                    >
                      Votre conseiller vous recontacte sous 48 h. Votre projet reste strictement confidentiel.
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
