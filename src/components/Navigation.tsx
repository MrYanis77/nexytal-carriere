/**
 * ALT-RH & Carrière – Navigation Component
 * Design: Swiss Corporate Modernism × Editorial Warmth
 * Navy Blue header with gold accent underlines
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/prestations", label: "Prestations" },
  { href: "/methodologie", label: "Méthodologie" },
  { href: "/financements-cpf", label: "Financements & CPF" },
  { href: "/a-propos", label: "À propos" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg border-b border-gray-100"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Top bar */}
      <div className="bg-[oklch(0.28_0.08_255)] text-white py-2 px-4">
        <div className="container flex items-center justify-between text-xs font-body">
          <span className="opacity-80">Cabinet certifié Qualiopi · Bilan de compétences finançable CPF</span>
          <a
            href="tel:+33100000000"
            className="flex items-center gap-1.5 hover:text-[oklch(0.82_0.10_75)] transition-colors font-semibold"
          >
            <Phone size={12} />
            01 00 00 00 00
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span
                className="font-display font-bold text-xl leading-tight text-[oklch(0.28_0.08_255)]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                ALT-RH
              </span>
              <span className="text-xs font-body font-semibold text-[oklch(0.72_0.12_75)] tracking-widest uppercase leading-tight">
                & Carrière
              </span>
            </div>
            <div className="w-px h-10 bg-[oklch(0.90_0.01_85)]" />
            <span className="text-xs font-body text-[oklch(0.50_0.02_255)] leading-tight max-w-[120px]">
              Bilan de<br />compétences
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-body font-medium transition-colors pb-1 ${
                  location === link.href
                    ? "text-[oklch(0.28_0.08_255)] active"
                    : "text-[oklch(0.35_0.03_255)] hover:text-[oklch(0.28_0.08_255)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-gold text-xs py-2.5 px-5 rounded-none"
              style={{
                backgroundColor: "oklch(0.72 0.12 75)",
                color: "oklch(0.20 0.02 255)",
                fontFamily: "'Source Sans 3', sans-serif",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "0.6rem 1.25rem",
                display: "inline-block",
                transition: "all 0.25s ease",
              }}
            >
              Appel découverte gratuit
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-[oklch(0.28_0.08_255)]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 px-4 text-sm font-body font-medium rounded transition-colors ${
                  location === link.href
                    ? "bg-[oklch(0.94_0.02_85)] text-[oklch(0.28_0.08_255)]"
                    : "text-[oklch(0.35_0.03_255)] hover:bg-[oklch(0.98_0.01_85)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <Link
                href="/contact"
                className="block text-center py-3 px-4 text-sm font-body font-bold uppercase tracking-wider"
                style={{
                  backgroundColor: "oklch(0.72 0.12 75)",
                  color: "oklch(0.20 0.02 255)",
                }}
              >
                Réserver mon appel découverte gratuit
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
