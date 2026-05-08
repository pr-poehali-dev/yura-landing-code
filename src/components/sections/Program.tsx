const blocks = [
  {
    step: "Блок 1",
    title: "Управление личными финансами и мышление",
    description:
      "Разберете, как устроены личные деньги, где теряются ресурсы и какие поведенческие установки мешают росту капитала.",
    topics: [
      "Доходы, расходы и денежные привычки",
      "Финансовая дисциплина",
      "Мышление, влияющее на деньги",
      "Ошибки, которые тормозят накопление",
      "Базовые принципы личной финансовой устойчивости",
    ],
  },
  {
    step: "Блок 2",
    title: "Финансовое планирование и цели",
    description:
      "Научитесь ставить реалистичные финансовые цели, строить план движения к ним и управлять бюджетом осознанно.",
    topics: [
      "Постановка финансовых целей",
      "Личный бюджет и распределение денег",
      "Подушка безопасности и резервный фонд",
      "Планирование крупных покупок",
      "Работа с долгами и кредитами",
    ],
  },
  {
    step: "Блок 3",
    title: "Инструменты и создание капитала",
    description:
      "Познакомитесь с финансовыми инструментами, поймете, как начать инвестировать и выстроить систему роста капитала.",
    topics: [
      "Обзор инвестиционных инструментов",
      "Банковские продукты и вклады",
      "Ценные бумаги и фондовый рынок",
      "Страховые и накопительные продукты",
      "Составление личной инвестиционной стратегии",
    ],
  },
];

export default function Program() {
  return (
    <section id="program" className="section-padding bg-white">
      <div className="container-brand">
        <div className="text-center mb-12">
          <p className="font-body text-xs font-medium uppercase tracking-widest text-brand-primary mb-3">
            Программа курса
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-text leading-tight max-w-2xl mx-auto">
            Три блока, которые собирают личную систему капитала
          </h2>
        </div>

        <div className="space-y-5">
          {blocks.map((block, i) => (
            <div
              key={block.step}
              className="grid md:grid-cols-[200px_1fr] gap-6 p-6 md:p-8 rounded-card border border-brand-border bg-brand-surface"
              style={{ boxShadow: "0 2px 16px 0 rgba(40,37,29,0.05)" }}
            >
              <div className="space-y-2">
                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-body font-medium ${
                    i === 0
                      ? "bg-brand-primary text-white"
                      : "bg-brand-accent-soft text-brand-primary"
                  }`}
                >
                  {block.step}
                </div>
                <div className="text-3xl font-display font-bold text-brand-border select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-xl font-semibold text-brand-text mb-2">
                    {block.title}
                  </h3>
                  <p className="font-body text-sm text-brand-muted leading-relaxed">
                    {block.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {block.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1.5 rounded-full bg-white border border-brand-border text-xs font-body text-brand-text"
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
