const results = [
  {
    title: "Финансовая точка А",
    description: "Понимание своей текущей финансовой ситуации и реального положения дел.",
    icon: "📍",
  },
  {
    title: "Личный план",
    description: "Пошаговый маршрут движения к капиталу с учетом ваших целей.",
    icon: "🗺️",
  },
  {
    title: "Стратегия денег",
    description: "Понимание, как распределять деньги и на чем строить систему.",
    icon: "⚖️",
  },
  {
    title: "Подходящие инструменты",
    description: "Ясность, какие финансовые инструменты подходят именно вам.",
    icon: "🔧",
  },
  {
    title: "Уверенность в решениях",
    description: "Более спокойное и осознанное отношение к деньгам.",
    icon: "✨",
  },
  {
    title: "База для роста",
    description: "Собранная основа для дальнейшего самостоятельного движения.",
    icon: "🌱",
  },
];

export default function Results() {
  return (
    <section className="section-padding bg-brand-surface">
      <div className="container-brand">
        <div className="text-center mb-12">
          <p className="font-body text-xs font-medium uppercase tracking-widest text-brand-primary mb-3">
            Результат обучения
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-text leading-tight max-w-2xl mx-auto">
            Что будет у участника после курса
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map((item, i) => (
            <div
              key={item.title}
              className={`p-6 rounded-card border border-brand-border ${
                i === 0 ? "bg-brand-primary" : "bg-white"
              }`}
              style={{ boxShadow: "0 2px 16px 0 rgba(40,37,29,0.06)" }}
            >
              <div className="text-2xl mb-4">{item.icon}</div>
              <h3
                className={`font-display text-lg font-semibold mb-2 ${
                  i === 0 ? "text-white" : "text-brand-text"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`font-body text-sm leading-relaxed ${
                  i === 0 ? "text-white/75" : "text-brand-muted"
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
