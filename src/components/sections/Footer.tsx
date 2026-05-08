const links = [
  { label: "О курсе", href: "#about" },
  { label: "Программа", href: "#program" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Преподаватели", href: "#mentors" },
  { label: "Контакты", href: "#form" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-text py-12">
      <div className="container-brand">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          <div>
            <p className="font-display text-white font-semibold text-base mb-1">
              Программа создания капитала
            </p>
            <p className="font-body text-sm text-white/40">
              Финансовая грамотность и создание капитала за 3 месяца
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-sm text-white/50 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/30">
            © 2026 Программа создания капитала. Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://t.me/anastasiya_prus"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-white/40 hover:text-white transition-colors"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
