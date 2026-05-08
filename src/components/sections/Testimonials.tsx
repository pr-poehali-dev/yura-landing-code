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
    <section className="section-padding bg-white">
      <div className="container-brand">
        <div className="text-center mb-12">
          <p className="font-body text-xs font-medium uppercase tracking-widest text-brand-primary mb-3">
            Отзывы
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-text leading-tight">
            Что говорят участники
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-7 rounded-card bg-brand-surface border border-brand-border"
              style={{ boxShadow: "0 2px 16px 0 rgba(40,37,29,0.06)" }}
            >
              <div className="text-2xl text-brand-accent-soft mb-4 font-display">"</div>
              <p className="font-body text-sm text-brand-text leading-relaxed mb-6 italic">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-accent-soft flex items-center justify-center text-brand-primary font-display font-semibold text-sm">
                  {t.initial}
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-brand-text">
                    {t.name}{t.city ? `, ${t.city}` : ""}
                  </p>
                  <p className="font-body text-xs text-brand-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
