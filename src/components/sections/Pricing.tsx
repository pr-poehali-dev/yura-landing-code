import Icon from "@/components/ui/icon";

const plans = [
  {
    name: "Базовый",
    price: "12 500 ₽",
    description: "Доступ к материалам курса и групповому формату",
    spots: "20 мест",
    popular: false,
    features: [
      "3 блока обучения",
      "Еженедельные групповые созвоны",
      "Доступ к сообществу",
    ],
    cta: "Выбрать тариф",
  },
  {
    name: "Оптимальный",
    price: "28 500 ₽",
    description: "Полное сопровождение с личными консультациями",
    spots: "10 мест",
    popular: true,
    features: [
      "Всё из Базового",
      "2 индивидуальные консультации в начале и в конце обучения",
      "Персональная обратная связь по ДЗ",
      "Личный финансовый план",
      "Поддержка в чате с наставником",
    ],
    cta: "Выбрать тариф",
  },
  {
    name: "Премиум",
    price: "98 500 ₽",
    description: "Индивидуальное сопровождение и доступ к закрытым эфирам",
    spots: "2 места",
    popular: false,
    features: [
      "Каждую неделю индивидуальная консультация",
      "Личный куратор всё время обучения",
    ],
    pending: "Здесь будут ещё пункты, думаем над наполнением",
    cta: "Выбрать тариф",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding" style={{ backgroundColor: "var(--brand-bg-deep)" }}>
      <div className="container-brand">
        <div className="mb-12">
          <span className="gold-line mb-4" />
          <p className="font-body text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--brand-gold)" }}>
            Тарифы
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight" style={{ color: "var(--brand-text)" }}>
            Выберите формат участия
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative p-7 rounded-card border flex flex-col"
              style={{
                backgroundColor: plan.popular ? "rgba(201,168,76,0.07)" : "var(--brand-bg-card)",
                borderColor: plan.popular ? "var(--brand-gold)" : "var(--brand-border)",
                boxShadow: plan.popular
                  ? "0 0 40px 0 rgba(201,168,76,0.15), 0 4px 24px 0 rgba(0,0,0,0.4)"
                  : "0 4px 24px 0 rgba(0,0,0,0.35)",
              }}
            >
              {plan.popular && (
                <div
                  className="gold-shimmer-bg absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-body font-medium whitespace-nowrap"
                  style={{ color: "var(--brand-black)" }}
                >
                  Популярный
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-xl font-semibold mb-1" style={{ color: "var(--brand-text)" }}>
                  {plan.name}
                </h3>
                <p className="font-body text-sm mb-4" style={{ color: "var(--brand-muted)" }}>
                  {plan.description}
                </p>
                <div
                  className={`font-display text-4xl font-bold mb-2${plan.popular ? " gold-shimmer" : ""}`}
                  style={plan.popular ? {} : { color: "var(--brand-text)" }}
                >
                  {plan.price}
                </div>
                <span
                  className="inline-block font-body text-xs px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: "rgba(201,168,76,0.1)", color: "var(--brand-gold)" }}
                >
                  {plan.spots}
                </span>
              </div>

              <ul className="space-y-3 mb-7 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "rgba(201,168,76,0.15)" }}
                    >
                      <Icon name="Check" size={11} style={{ color: "var(--brand-gold)" }} />
                    </span>
                    <span className="font-body text-sm" style={{ color: "var(--brand-text)" }}>{f}</span>
                  </li>
                ))}
                {plan.pending && (
                  <li className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "rgba(201,168,76,0.07)" }}
                    >
                      <Icon name="Clock" size={11} style={{ color: "var(--brand-gold-dim)" }} />
                    </span>
                    <span className="font-body text-sm italic" style={{ color: "var(--brand-muted)" }}>{plan.pending}</span>
                  </li>
                )}
              </ul>

              <a
                href="#form"
                className={`block text-center px-6 py-3.5 rounded-btn text-sm font-medium font-body transition-opacity hover:opacity-85${plan.popular ? " gold-shimmer-bg" : ""}`}
                style={
                  plan.popular
                    ? { color: "var(--brand-black)" }
                    : { background: "var(--brand-surface)", color: "var(--brand-text)", border: "1px solid var(--brand-border)" }
                }
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="font-body text-xs mt-6" style={{ color: "var(--brand-muted)" }}>
          Возможна оплата в рассрочку. Уточните детали при записи.
        </p>
      </div>
    </section>
  );
}