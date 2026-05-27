const links = [
  { label: "О курсе", href: "#about" },
  { label: "Программа", href: "#program" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Преподаватели", href: "#mentors" },
  { label: "Контакты", href: "#form" },
];

const docLinks = [
  { label: "Договор оферты", href: "/оферта" },
  { label: "Политика персональных данных", href: "/политика-персональных-данных" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--brand-black)" }} className="py-12">
      <div className="container-brand">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          <div>
            <p className="font-display font-semibold text-lg mb-1" style={{ color: "var(--brand-gold)" }}>
              Программа создания капитала
            </p>
            <p className="font-body text-base" style={{ color: "rgba(138,170,154,0.5)" }}>
              Финансовая грамотность и пошаговая система создания капитала
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-base transition-colors"
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
          className="border-t pt-6 mb-6"
          style={{ borderColor: "rgba(31,53,48,0.8)" }}
        >
          <p className="font-body text-xs leading-relaxed mb-3" style={{ color: "rgba(138,170,154,0.3)" }}>
            <strong style={{ color: "rgba(138,170,154,0.45)" }}>Отказ от финансовых рекомендаций:</strong> Все материалы программы носят исключительно образовательный и информационный характер. Ничто из представленного не является индивидуальной инвестиционной рекомендацией, советом по управлению активами или финансовым консультированием в соответствии с законодательством Российской Федерации. Перед принятием инвестиционных решений рекомендуется обратиться к лицензированному финансовому советнику.
          </p>
          <p className="font-body text-xs leading-relaxed mb-3" style={{ color: "rgba(138,170,154,0.3)" }}>
            <strong style={{ color: "rgba(138,170,154,0.45)" }}>Отсутствие гарантий дохода:</strong> Результаты участников программы зависят от индивидуальных усилий, финансового положения, рыночной конъюнктуры и иных факторов, не зависящих от организаторов. Любые упоминания доходов или финансовых результатов являются иллюстративными и не гарантируют аналогичного результата для каждого участника.
          </p>
          <p className="font-body text-xs leading-relaxed mb-6" style={{ color: "rgba(138,170,154,0.3)" }}>
            <strong style={{ color: "rgba(138,170,154,0.45)" }}>Законодательный дисклеймер:</strong> Программа реализуется в соответствии с законодательством Российской Федерации. Деятельность по организации обучения осуществляется ИП Коргун Надежда Сергеевна на основании ОГРНИП 322253600076170. Услуги не являются деятельностью, подлежащей лицензированию в соответствии с Федеральным законом «Об образовании в Российской Федерации» (ст. 91), поскольку реализуются в форме разовых занятий и наставничества без итоговой аттестации и выдачи документов об образовании.
          </p>
        </div>

        <div
          className="border-t pt-6 mb-6"
          style={{ borderColor: "rgba(31,53,48,0.8)" }}
        >
          <p className="font-body text-sm font-medium mb-3" style={{ color: "rgba(138,170,154,0.5)" }}>
            ИП Коргун Надежда Сергеевна
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 font-body text-xs" style={{ color: "rgba(138,170,154,0.35)" }}>
            <span>ИНН: 253610352292</span>
            <span>ОГРНИП: 322253600076170</span>
            <span>Приморский край, г. Владивосток, ул. Нерчинская, д. 38, кв. 5</span>
            <a href="mailto:finprosto.school@yandex.ru" style={{ color: "rgba(138,170,154,0.35)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--brand-gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(138,170,154,0.35)")}
            >
              finprosto.school@yandex.ru
            </a>
            <a href="tel:+79147903386" style={{ color: "rgba(138,170,154,0.35)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--brand-gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(138,170,154,0.35)")}
            >
              +7 914 790-33-86
            </a>
          </div>
        </div>

        <div
          className="border-t pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ borderColor: "rgba(31,53,48,0.8)" }}
        >
          <div className="flex flex-col gap-2">
            <p className="font-body text-sm" style={{ color: "rgba(138,170,154,0.3)" }}>
              © 2026 Программа создания капитала. Все права защищены.
            </p>
            <div className="flex flex-wrap gap-4">
              {docLinks.map((d) => (
                <a
                  key={d.href}
                  href={d.href}
                  className="font-body text-xs transition-colors"
                  style={{ color: "rgba(138,170,154,0.4)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--brand-gold)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(138,170,154,0.4)")}
                >
                  {d.label}
                </a>
              ))}
            </div>
          </div>
          <a
            href="https://t.me/anastasiya_prus"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm transition-colors"
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