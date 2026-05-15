import Icon from "@/components/ui/icon";

const items = [
  {
    id: "module-1",
    icon: "BookOpen",
    title: "Три модуля",
    description: "1. Личные финансы.\n2. Финансовое планирование и построение личной стратегии.\n3. Подбор и внедрение финансовых инструментов.",
  },
  {
    id: "weekly-calls",
    icon: "Users",
    title: "Еженедельные созвоны",
    description: "Группа ограничена по количеству участников, чтобы мы могли уделить внимание каждому и разбирать ваши ситуации глубже.",
  },
  {
    id: "personal-consulting",
    icon: "MessageCircle",
    title: "Персональные консультации",
    description: "Индивидуальные встречи направлены на достижение максимального результата именно в вашей финансовой ситуации.",
  },
  {
    id: "recorded-lessons",
    icon: "Play",
    title: "Уроки в записи и рабочая тетрадь",
    description: "Теория будет доступна в формате видеоуроков. Дополнительно вы получите электронную рабочую тетрадь для прохождения обучения и применения всех инструментов в жизни.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--brand-bg-deep)" }}>
      <div className="container-brand">
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <span className="gold-line mx-auto mb-4" />
          <p className="font-body text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--brand-gold)" }}>
            Формат
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: "var(--brand-text)" }}>
            Как будет проходить обучение
          </h2>
          <p className="font-body text-base leading-relaxed" style={{ color: "var(--brand-muted)" }}>
            Пошаговый формат, в котором вы не просто получаете знания, а внедряете систему управления деньгами и создания капитала в свою жизнь.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {items.map((item, i) => (
            <div
              key={item.id}
              className="relative p-6 rounded-card border"
              style={{
                backgroundColor: "var(--brand-bg-card)",
                borderColor: "var(--brand-border)",
                boxShadow: "0 2px 20px 0 rgba(0,0,0,0.35)",
              }}
            >
              {/* number */}
              <div
                className="absolute top-5 right-5 font-display text-5xl font-bold select-none leading-none"
                style={{ color: "rgba(201,168,76,0.07)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(201,168,76,0.12)" }}
              >
                <Icon name={item.icon as "BookOpen"} size={18} style={{ color: "var(--brand-gold)" }} />
              </div>

              <h3 className="font-display text-lg font-semibold mb-2" style={{ color: "var(--brand-text)" }}>
                {item.title}
              </h3>
              <p className="font-body text-sm leading-relaxed whitespace-pre-line" style={{ color: "var(--brand-muted)" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#form"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-btn text-sm font-medium font-body transition-opacity hover:opacity-85"
          style={{ background: "var(--brand-gold)", color: "var(--brand-black)" }}
        >
          Записаться на консультацию
        </a>
      </div>
    </section>
  );
}