import { IconTarget, IconLineChart, IconScale, IconWallet, IconShield, IconGrowth } from "@/components/ui/finance-icons";

const results = [
  { title: "Финансовая точка А", description: "Понимание своей текущей финансовой ситуации и реального положения дел.", Icon: IconTarget },
  { title: "Личный план", description: "Пошаговый маршрут движения к капиталу с учетом ваших целей.", Icon: IconLineChart },
  { title: "Стратегия денег", description: "Понимание, как распределять деньги и на чем строить систему.", Icon: IconScale },
  { title: "Подходящие инструменты", description: "Ясность, какие финансовые инструменты подходят именно вам.", Icon: IconWallet },
  { title: "Уверенность в решениях", description: "Более спокойное и осознанное отношение к деньгам.", Icon: IconShield },
  { title: "База для роста", description: "Собранная основа для дальнейшего самостоятельного движения.", Icon: IconGrowth },
];

export default function Results() {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--brand-bg-deep)" }}>
      <div className="container-brand">
        <div className="mb-12">
          <span className="gold-line mb-4" />
          <p className="font-body text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--brand-gold)" }}>
            Результат обучения
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight max-w-2xl" style={{ color: "var(--brand-text)" }}>
            Что будет у участника после курса
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map((item, i) => (
            <div
              key={item.title}
              className="flex items-start gap-4 p-6 rounded-card border"
              style={{
                backgroundColor: i === 0 ? "rgba(201,168,76,0.1)" : "var(--brand-bg-card)",
                borderColor: i === 0 ? "var(--brand-gold-dim)" : "var(--brand-border)",
                boxShadow: "0 2px 20px 0 rgba(0,0,0,0.35)",
              }}
            >
              <div className="flex-shrink-0 mt-0.5">
                <item.Icon size={36} opacity={0.85} />
              </div>
              <div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
