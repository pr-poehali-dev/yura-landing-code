const links = [
  { label: "О курсе", href: "#about" },
  { label: "Программа", href: "#program" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Преподаватели", href: "#mentors" },
  { label: "Контакты", href: "#form" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--brand-black)" }} className="py-12">
      <div className="container-brand">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          <div>
            <p className="font-display font-semibold text-base mb-1" style={{ color: "var(--brand-gold)" }}>
              Программа создания капитала
            </p>
            <p className="font-body text-sm" style={{ color: "rgba(138,170,154,0.5)" }}>
              Финансовая грамотность и создание капитала за 3 месяца
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-sm transition-colors"
                style={{ color: "rgba(138,170,154,0.5)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--brand-gold)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(138,170,154,0.5)")}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div
          className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(31,53,48,0.8)" }}
        >
          <p className="font-body text-xs" style={{ color: "rgba(138,170,154,0.3)" }}>
            © 2026 Программа создания капитала. Все права защищены.
          </p>
          <a
            href="https://t.me/anastasiya_prus"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs transition-colors"
            style={{ color: "rgba(138,170,154,0.4)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--brand-gold)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(138,170,154,0.4)")}
          >
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}
