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
    <section id="pricing" className="section-padding bg-brand-surface">
      <div className="container-brand">
        <div className="text-center mb-12">
          <p className="font-body text-xs font-medium uppercase tracking-widest text-brand-primary mb-3">
            Тарифы
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-text leading-tight">
            Выберите формат участия
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-7 rounded-card border ${
                plan.popular
                  ? "bg-brand-primary border-brand-primary"
                  : "bg-white border-brand-border"
              }`}
              style={{ boxShadow: "0 4px 24px 0 rgba(40,37,29,0.10)" }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white rounded-full text-xs font-body font-medium text-brand-primary border border-brand-accent-soft">
                  Популярный
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-display text-xl font-semibold mb-1 ${plan.popular ? "text-white" : "text-brand-text"}`}>
                  {plan.name}
                </h3>
                <p className={`font-body text-sm mb-4 ${plan.popular ? "text-white/70" : "text-brand-muted"}`}>
                  {plan.description}
                </p>
                <div className={`font-display text-4xl font-bold ${plan.popular ? "text-white" : "text-brand-text"}`}>
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-3 mb-7">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.popular ? "bg-white/20" : "bg-brand-accent-soft"
                    }`}>
                      <Icon name="Check" size={11} className={plan.popular ? "text-white" : "text-brand-primary"} />
                    </span>
                    <span className={`font-body text-sm ${plan.popular ? "text-white/85" : "text-brand-text"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#form"
                className={`block text-center px-6 py-3.5 rounded-btn text-sm font-medium font-body transition-colors duration-200 ${
                  plan.popular
                    ? "bg-white text-brand-primary hover:bg-brand-accent-soft"
                    : "bg-brand-primary text-white hover:bg-[#015a5f]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center font-body text-xs text-brand-muted mt-6">
          Возможна оплата в рассрочку. Уточните детали при записи.
        </p>
      </div>
    </section>
  );
}
