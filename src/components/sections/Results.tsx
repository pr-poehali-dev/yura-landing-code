const results = [
  { title: "Финансовая точка А", description: "Понимание своей текущей финансовой ситуации и реального положения дел.", icon: "📍" },
  { title: "Личный план", description: "Пошаговый маршрут движения к капиталу с учетом ваших целей.", icon: "🗺️" },
  { title: "Стратегия денег", description: "Понимание, как распределять деньги и на чем строить систему.", icon: "⚖️" },
  { title: "Подходящие инструменты", description: "Ясность, какие финансовые инструменты подходят именно вам.", icon: "🔧" },
  { title: "Уверенность в решениях", description: "Более спокойное и осознанное отношение к деньгам.", icon: "✨" },
  { title: "База для роста", description: "Собранная основа для дальнейшего самостоятельного движения.", icon: "🌱" },
];

export default function Results() {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--brand-bg-deep)" }}>
      <div className="container-brand">
        <div className="text-center mb-12">
          <span className="gold-line mx-auto mb-4" />
          <p className="font-body text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--brand-gold)" }}>
            Результат обучения
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight max-w-2xl mx-auto" style={{ color: "var(--brand-text)" }}>
            Что будет у участника после курса
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map((item, i) => (
            <div
              key={item.title}
              className="p-6 rounded-card border"
              style={{
                backgroundColor: i === 0 ? "rgba(201,168,76,0.1)" : "var(--brand-bg-card)",
                borderColor: i === 0 ? "var(--brand-gold-dim)" : "var(--brand-border)",
                boxShadow: "0 2px 20px 0 rgba(0,0,0,0.35)",
              }}
            >
              <div className="text-2xl mb-4">{item.icon}</div>
              <h3
                className="font-display text-lg font-semibold mb-2"
                style={{ color: i === 0 ? "var(--brand-gold)" : "var(--brand-text)" }}
              >
                {item.title}
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
