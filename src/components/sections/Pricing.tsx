import Icon from "@/components/ui/icon";

const plans = [
  {
    name: "Базовый",
    price: "39 900 ₽",
    description: "Доступ к материалам курса и групповому формату",
    features: [
      "3 блока обучения",
      "Еженедельные групповые созвоны",
      "Домашние задания с проверкой",
      "Доступ к закрытому сообществу",
    ],
    popular: false,
    cta: "Выбрать тариф",
  },
  {
    name: "С наставником",
    price: "59 900 ₽",
    description: "Полное сопровождение с личными консультациями",
    features: [
      "Всё из Базового",
      "2 индивидуальные консультации × 30 мин",
      "Персональная обратная связь по ДЗ",
      "Личный финансовый план",
      "Поддержка в чате с наставником",
    ],
    popular: true,
    cta: "Выбрать тариф",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding" style={{ backgroundColor: "var(--brand-bg-deep)" }}>
      <div className="container-brand">
        <div className="text-center mb-12">
          <span className="gold-line mx-auto mb-4" />
          <p className="font-body text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--brand-gold)" }}>
            Тарифы
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight" style={{ color: "var(--brand-text)" }}>
            Выберите формат участия
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative p-7 rounded-card border"
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
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-body font-medium"
                  style={{ background: "var(--brand-gold)", color: "var(--brand-black)" }}
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
                  className="font-display text-4xl font-bold"
                  style={{ color: plan.popular ? "var(--brand-gold)" : "var(--brand-text)" }}
                >
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-3 mb-7">
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
              </ul>

              <a
                href="#form"
                className="block text-center px-6 py-3.5 rounded-btn text-sm font-medium font-body transition-opacity hover:opacity-85"
                style={
                  plan.popular
                    ? { background: "var(--brand-gold)", color: "var(--brand-black)" }
                    : { background: "var(--brand-surface)", color: "var(--brand-text)", border: "1px solid var(--brand-border)" }
                }
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center font-body text-xs mt-6" style={{ color: "var(--brand-muted)" }}>
          Возможна оплата в рассрочку. Уточните детали при записи.
        </p>
      </div>
    </section>
  );
}
