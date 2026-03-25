/**
 * ALT-RH & Carrière – Page 404
 * Design: Swiss Corporate Modernism × Editorial Warmth
 */
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center pt-24 pb-16"
      style={{ backgroundColor: "oklch(0.98 0.01 85)" }}
    >
      <div className="text-center max-w-lg px-4">
        <div
          className="text-8xl font-bold mb-4 leading-none"
          style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.28 0.08 255)" }}
        >
          404
        </div>
        <div className="h-0.5 w-16 mx-auto mb-6" style={{ background: "oklch(0.72 0.12 75)" }} />
        <h1
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "'Playfair Display', serif", color: "oklch(0.20 0.09 255)" }}
        >
          Page introuvable
        </h1>
        <p
          className="text-base mb-8"
          style={{ color: "oklch(0.50 0.02 255)", fontFamily: "'Source Sans 3', sans-serif" }}
        >
          La page que vous recherchez n'existe pas ou a été déplacée. Retournez à l'accueil pour continuer votre navigation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider py-3 px-8 transition-all hover:-translate-y-0.5"
            style={{
              backgroundColor: "oklch(0.28 0.08 255)",
              color: "white",
              fontFamily: "'Source Sans 3', sans-serif",
            }}
          >
            Retour à l'accueil
            <ChevronRight size={14} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider py-3 px-8 border-2 transition-all"
            style={{
              borderColor: "oklch(0.72 0.12 75)",
              color: "oklch(0.28 0.08 255)",
              fontFamily: "'Source Sans 3', sans-serif",
            }}
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
