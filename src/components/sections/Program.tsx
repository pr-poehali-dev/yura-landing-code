const blocks = [
  {
    step: "Блок 1",
    title: "Управление личными финансами и мышление",
    description: "Разберете, как устроены личные деньги, где теряются ресурсы и какие поведенческие установки мешают росту капитала.",
    topics: ["Доходы, расходы и денежные привычки", "Финансовая дисциплина", "Мышление, влияющее на деньги", "Ошибки, которые тормозят накопление", "Базовые принципы личной финансовой устойчивости"],
  },
  {
    step: "Блок 2",
    title: "Финансовое планирование и цели",
    description: "Научитесь ставить реалистичные финансовые цели, строить план движения к ним и управлять бюджетом осознанно.",
    topics: ["Постановка финансовых целей", "Личный бюджет и распределение денег", "Подушка безопасности и резервный фонд", "Планирование крупных покупок", "Работа с долгами и кредитами"],
  },
  {
    step: "Блок 3",
    title: "Инструменты и создание капитала",
    description: "Познакомитесь с финансовыми инструментами, поймете, как начать инвестировать и выстроить систему роста капитала.",
    topics: ["Обзор инвестиционных инструментов", "Банковские продукты и вклады", "Ценные бумаги и фондовый рынок", "Страховые и накопительные продукты", "Составление личной инвестиционной стратегии"],
  },
];

export default function Program() {
  return (
    <section id="program" className="section-padding" style={{ backgroundColor: "var(--brand-surface)" }}>
      <div className="container-brand">
        <div className="text-center mb-12">
          <span className="gold-line mx-auto mb-4" />
          <p className="font-body text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--brand-gold)" }}>
            Программа курса
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight max-w-2xl mx-auto" style={{ color: "var(--brand-text)" }}>
            Три блока, которые собирают личную систему капитала
          </h2>
        </div>

        <div className="space-y-5">
          {blocks.map((block, i) => (
            <div
              key={block.step}
              className="grid md:grid-cols-[200px_1fr] gap-6 p-6 md:p-8 rounded-card border"
              style={{
                backgroundColor: "var(--brand-bg-card)",
                borderColor: "var(--brand-border)",
                boxShadow: "0 2px 20px 0 rgba(0,0,0,0.35)",
              }}
            >
              <div className="space-y-2">
                <div
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-body font-medium"
                  style={
                    i === 0
                      ? { background: "var(--brand-gold)", color: "var(--brand-black)" }
                      : { background: "rgba(201,168,76,0.12)", color: "var(--brand-gold)" }
                  }
                >
                  {block.step}
                </div>
                <div
                  className="text-4xl font-display font-bold select-none"
                  style={{ color: "rgba(201,168,76,0.12)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2" style={{ color: "var(--brand-text)" }}>
                    {block.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                    {block.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {block.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1.5 rounded-full text-xs font-body border"
                      style={{
                        borderColor: "var(--brand-border)",
                        color: "var(--brand-muted)",
                        backgroundColor: "var(--brand-surface)",
                      }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
