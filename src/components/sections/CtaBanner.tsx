import { IconCoins, IconBarChart, IconPiggyBank, IconTarget } from "@/components/ui/finance-icons";

export default function CtaBanner() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "var(--brand-surface)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)",
        }}
      />
      <div className="container-brand relative z-10">
        <span className="gold-line mb-4" />
        <h2
          className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4 max-w-2xl"
          style={{ color: "var(--brand-text)" }}
        >
          Начните создавать капитал уже сегодня
        </h2>
        <p className="font-body text-base mb-8 max-w-lg" style={{ color: "var(--brand-muted)" }}>
          Оставьте заявку — в течение 24 часов свяжемся с вами и расскажем, как выстроить план под ваш доход и цели.
        </p>

        <div className="flex flex-wrap gap-6 mb-8">
          {[
            { Icon: IconTarget, label: "Личный план" },
            { Icon: IconBarChart, label: "Рост капитала" },
            { Icon: IconPiggyBank, label: "Накопления" },
            { Icon: IconCoins, label: "Инструменты" },
          ].map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon size={32} opacity={0.85} />
              <span className="font-body text-sm" style={{ color: "var(--brand-muted)" }}>{label}</span>
            </div>
          ))}
        </div>

        <a
          href="#form"
          className="gold-shimmer-bg inline-flex items-center justify-center px-8 py-3.5 rounded-btn text-sm font-medium font-body transition-opacity hover:opacity-85"
          style={{ color: "var(--brand-black)" }}
        >
          Записаться на курс
        </a>
      </div>
    </section>
  );
}
