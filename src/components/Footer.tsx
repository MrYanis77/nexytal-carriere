/**
 * ALT-RH & Carrière – Footer Component
 * Design: Swiss Corporate Modernism × Editorial Warmth
 * Dark navy background with gold accents
 */
import { Link } from "wouter";
import { Phone, Mail, MapPin, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "oklch(0.20 0.09 255)", color: "oklch(0.85 0.01 85)" }}>
      {/* Gold top line */}
      <div className="h-1" style={{ background: "linear-gradient(90deg, oklch(0.72 0.12 75), oklch(0.82 0.10 75))" }} />

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3
                className="text-2xl font-bold leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", color: "white" }}
              >
                ALT-RH
              </h3>
              <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "oklch(0.72 0.12 75)" }}>
                & Carrière
              </p>
            </div>
            <div className="h-px w-12 mb-4" style={{ background: "oklch(0.72 0.12 75)" }} />
            <p className="text-sm leading-relaxed opacity-75 mb-6">
              Cabinet certifié Qualiopi spécialisé en bilan de compétences. Accompagnement bienveillant, confidentiel et concret.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: "oklch(0.28 0.08 255 / 0.5)" }}
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: "oklch(0.28 0.08 255 / 0.5)" }}
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Prestations */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Prestations
            </h4>
            <ul className="space-y-3 text-sm opacity-75">
              <li><Link href="/bilan-competences-distance" className="hover:opacity-100 hover:text-white transition-colors">Bilan 100 % Distanciel</Link></li>
              <li><Link href="/bilan-competences-presentiel-paris" className="hover:opacity-100 hover:text-white transition-colors">Bilan Présentiel Paris</Link></li>
              <li><Link href="/prestations" className="hover:opacity-100 hover:text-white transition-colors">Bilan Format Mixte</Link></li>
              <li><Link href="/financements-cpf" className="hover:opacity-100 hover:text-white transition-colors">Financement CPF</Link></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3 text-sm opacity-75">
              <li><Link href="/methodologie" className="hover:opacity-100 hover:text-white transition-colors">Méthodologie</Link></li>
              <li><Link href="/a-propos" className="hover:opacity-100 hover:text-white transition-colors">À propos</Link></li>
              <li><Link href="/blog" className="hover:opacity-100 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:opacity-100 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:opacity-100 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Source Sans 3', sans-serif" }}
            >
              Contact
            </h4>
            <ul className="space-y-4 text-sm opacity-75">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "oklch(0.72 0.12 75)" }} />
                <span>12 rue de la Paix<br />75001 Paris</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0" style={{ color: "oklch(0.72 0.12 75)" }} />
                <a href="tel:+33100000000" className="hover:opacity-100 hover:text-white transition-colors">01 00 00 00 00</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0" style={{ color: "oklch(0.72 0.12 75)" }} />
                <a href="mailto:contact@alt-rh-carriere.fr" className="hover:opacity-100 hover:text-white transition-colors">contact@alt-rh-carriere.fr</a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block text-xs font-bold uppercase tracking-wider py-3 px-5 transition-all"
                style={{
                  backgroundColor: "oklch(0.72 0.12 75)",
                  color: "oklch(0.20 0.02 255)",
                }}
              >
                Appel découverte gratuit
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "oklch(1 0 0 / 0.08)" }}>
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs opacity-50">
          <p>© 2026 ALT-RH & Carrière. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="hover:opacity-100 transition-opacity">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:opacity-100 transition-opacity">Confidentialité</Link>
            <span>Certifié Qualiopi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
