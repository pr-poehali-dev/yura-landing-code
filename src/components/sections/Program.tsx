import Icon from "@/components/ui/icon";

const modules = [
  {
    step: "Модуль 1",
    title: "Управление личными финансами и мышление",
    description: "Разберете, как устроены личные деньги, где теряются ресурсы и какие поведенческие установки мешают росту капитала.",
    items: [
      "Знакомимся со своим бюджетом",
      "Создаем правильный учет",
      "Убираем утечки денег",
      "Распределяем по фондам",
      "Находим дельту",
      "Оптимизируем категории",
      "Работаем с мышлением и тем, как видим свои деньги",
    ],
  },
  {
    step: "Модуль 2",
    title: "Финансовое планирование и цели",
    description: "Научитесь ставить реалистичные финансовые цели, строить план движения к ним и управлять бюджетом осознанно.",
    items: [
      "Ставим реалистичные финансовые цели и рассчитываем их точно",
      "Создаем карту целей",
      "Строим личный финансовый план под каждую цель",
      "Снижаем кредитную нагрузку",
    ],
  },
  {
    step: "Модуль 3",
    title: "Инструменты и создание капитала",
    description: "Познакомитесь с финансовыми инструментами, поймете, как начать инвестировать и выстроить систему роста капитала.",
    items: [
      "Принципы работы финансовых инструментов",
      "Изучаем рынок инструментов",
      "Банковская система: кредиты, депозиты, карты",
      "Пенсионные программы",
      "Программы по защите жизни и здоровья, поиск выгодных вариантов",
      "Рынок ценных бумаг: от готовых решений до самостоятельного инвестирования",
    ],
  },
];

export default function Program() {
  return (
    <section id="program" className="section-padding" style={{ backgroundColor: "var(--brand-surface)" }}>
      <div className="container-brand">
        <div className="mb-12 max-w-3xl">
          <span className="gold-line mb-4" />
          <p className="font-body text-sm font-medium uppercase tracking-widest mb-3" style={{ color: "var(--brand-gold)" }}>
            Формат
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: "var(--brand-text)" }}>
            Программа курса
          </h2>
          <p className="font-body text-lg leading-relaxed" style={{ color: "var(--brand-muted)" }}>
            Три модуля, которые помогают перейти от финансового хаоса к понятной системе управления деньгами и созданию капитала.
          </p>
        </div>

        <div className="space-y-5">
          {modules.map((mod, i) => (
            <div
              key={mod.step}
              className="p-6 md:p-8 rounded-card border"
              style={{
                backgroundColor: "var(--brand-bg-card)",
                borderColor: i === 0 ? "var(--brand-gold-dim)" : "var(--brand-border)",
                boxShadow: "0 2px 20px 0 rgba(0,0,0,0.35)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-body font-medium"
                  style={
                    i === 0
                      ? { background: "var(--brand-gold)", color: "var(--brand-black)" }
                      : { background: "rgba(201,168,76,0.12)", color: "var(--brand-gold)" }
                  }
                >
                  {mod.step}
                </div>
              </div>

              <div className="grid md:grid-cols-[1fr_1fr] gap-6 md:gap-10">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2" style={{ color: "var(--brand-text)" }}>
                    {mod.title}
                  </h3>
                  <p className="font-body text-base leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                    {mod.description}
                  </p>
                </div>

                <ul className="space-y-2">
                  {mod.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "rgba(201,168,76,0.12)" }}
                      >
                        <Icon name="Check" size={11} style={{ color: "var(--brand-gold)" }} />
                      </span>
                      <span className="font-body text-base leading-relaxed" style={{ color: "var(--brand-text)" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="#form"
            className="inline-flex items-center justify-center px-9 py-4 rounded-btn text-base font-medium font-body transition-opacity hover:opacity-85"
            style={{ background: "var(--brand-gold)", color: "var(--brand-black)" }}
          >
            Записаться на консультацию
          </a>
        </div>
      </div>
    </section>
  );
}