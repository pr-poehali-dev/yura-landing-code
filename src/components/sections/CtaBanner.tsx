import { IconCoins, IconBarChart, IconPiggyBank, IconTrendUp, IconCalendar, IconPieChart } from "@/components/ui/finance-icons";

const floatingIcons = [
  { Comp: IconBarChart, size: 96, top: "10%", left: "2%", opacity: 0.07 },
  { Comp: IconPiggyBank, size: 72, top: "60%", left: "5%", opacity: 0.06 },
  { Comp: IconPieChart, size: 64, top: "20%", right: "4%", opacity: 0.07 },
  { Comp: IconCoins, size: 80, bottom: "10%", right: "8%", opacity: 0.06 },
  { Comp: IconTrendUp, size: 56, top: "50%", right: "20%", opacity: 0.05 },
  { Comp: IconCalendar, size: 50, bottom: "15%", left: "22%", opacity: 0.05 },
];

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

      {/* floating decorative icons */}
      {floatingIcons.map(({ Comp, size, opacity, ...pos }, i) => (
        <div
          key={i}
          className="pointer-events-none absolute hidden lg:block"
          style={{ ...pos }}
        >
          <Comp size={size} opacity={opacity} />
        </div>
      ))}

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
