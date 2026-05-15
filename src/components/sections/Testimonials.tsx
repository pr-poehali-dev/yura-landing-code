const testimonials = [
  {
    name: "Ольга",
    city: "Владивосток",
    role: "Маркетолог",
    text: "После курса смогла снизить долг и запустить регулярные инвестиции в ИИС, хотя до этого просто копила на счету. Впервые появилось ощущение, что я управляю деньгами, а не они мной.",
    initial: "О",
  },
  {
    name: "Игорь",
    city: "",
    role: "ИП, оптовая торговля",
    text: "Помогли разложить прибыль по направлениям: сбережения, налоги и рост капитала. Стало понятно, куда идёт каждый рубль. Теперь веду учет и не тревожусь о будущем.",
    initial: "И",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--brand-surface)" }}>
      <div className="container-brand">
        <div className="mb-12">
          <span className="gold-line mb-4" />
          <p className="font-body text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--brand-gold)" }}>
            Отзывы
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight" style={{ color: "var(--brand-text)" }}>
            Что говорят участники
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-7 rounded-card border"
              style={{
                backgroundColor: "var(--brand-bg-card)",
                borderColor: "var(--brand-border)",
                boxShadow: "0 2px 20px 0 rgba(0,0,0,0.35)",
              }}
            >
              <div
                className="text-3xl mb-4 font-display leading-none"
                style={{ color: "var(--brand-gold-dim)" }}
              >"</div>
              <p className="font-body text-sm leading-relaxed mb-6 italic" style={{ color: "var(--brand-text)" }}>
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-display font-semibold text-sm"
                  style={{ backgroundColor: "rgba(201,168,76,0.15)", color: "var(--brand-gold)" }}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="font-body text-sm font-medium" style={{ color: "var(--brand-text)" }}>
                    {t.name}{t.city ? `, ${t.city}` : ""}
                  </p>
                  <p className="font-body text-xs" style={{ color: "var(--brand-muted)" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}