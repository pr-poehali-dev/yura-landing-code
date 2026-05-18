import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "О курсе", href: "#about" },
  { label: "Программа", href: "#program" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Преподаватели", href: "#mentors" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-brand-border" : ""
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(10,23,20,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="container-brand">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="font-display font-semibold text-brand-text text-base md:text-lg leading-tight">
            Программа создания<br className="hidden sm:block" /> капитала
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-body text-brand-muted hover:text-brand-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#pricing"
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-btn text-base font-medium font-body transition-opacity hover:opacity-85"
              style={{ background: "var(--brand-gold)", color: "var(--brand-black)" }}
            >
              Записаться
            </a>
            <button
              className="lg:hidden p-2 text-brand-text"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Меню"
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          className="lg:hidden border-t border-brand-border px-6 py-4 space-y-1"
          style={{ backgroundColor: "var(--brand-bg-deep)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-base font-body text-brand-text border-b border-brand-border last:border-0 hover:text-brand-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="block mt-4 text-center px-5 py-3 rounded-btn text-base font-medium font-body"
            style={{ background: "var(--brand-gold)", color: "var(--brand-black)" }}
          >
            Записаться на курс
          </a>
        </div>
      )}
    </header>
  );
}