import Icon from "@/components/ui/icon";

const stats = [
  { label: "Длительность", value: "3 месяца" },
  { label: "Консультации", value: "2 × 30 мин" },
  { label: "Созвоны", value: "Еженедельно" },
];

const highlights = [
  "3 блока обучения",
  "2 индивидуальные консультации с наставником",
  "Еженедельные групповые созвоны",
  "Практика, домашние задания и сопровождение",
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20"
      style={{ backgroundColor: "var(--brand-bg)" }}
    >
      {/* subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 70% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="container-brand w-full py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* left */}
          <div className="space-y-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-btn text-xs font-medium font-body tracking-wide border"
              style={{
                borderColor: "var(--brand-gold-dim)",
                color: "var(--brand-gold)",
                backgroundColor: "rgba(201,168,76,0.08)",
              }}
            >
              3 месяца · 3 блока · 2 консультации
            </div>

            <div className="space-y-4">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]" style={{ color: "var(--brand-text)" }}>
                Программа<br />
                <span style={{ color: "var(--brand-gold)" }}>создания</span><br />
                капитала
              </h1>
              <p className="font-body text-lg leading-relaxed max-w-lg" style={{ color: "var(--brand-muted)" }}>
                Курс по финансовой грамотности и выстраиванию личной системы капитала за 3 месяца.
              </p>
            </div>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-sm" style={{ color: "var(--brand-text)" }}>
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(201,168,76,0.15)" }}
                  >
                    <Icon name="Check" size={11} style={{ color: "var(--brand-gold)" }} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-btn text-sm font-medium font-body transition-opacity hover:opacity-85"
                style={{ background: "var(--brand-gold)", color: "var(--brand-black)" }}
              >
                Записаться на курс
              </a>
              <a
                href="#program"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-btn border text-sm font-medium font-body transition-colors duration-200"
                style={{
                  borderColor: "var(--brand-border)",
                  color: "var(--brand-text)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--brand-gold)";
                  (e.currentTarget as HTMLElement).style.color = "var(--brand-gold)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--brand-border)";
                  (e.currentTarget as HTMLElement).style.color = "var(--brand-text)";
                }}
              >
                Смотреть программу
                <Icon name="ArrowDown" size={14} />
              </a>
            </div>
          </div>

          {/* right — stat cards */}
          <div className="space-y-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="p-6 rounded-card border flex items-center justify-between"
                style={{
                  backgroundColor: i === 0 ? "rgba(201,168,76,0.12)" : "var(--brand-bg-card)",
                  borderColor: i === 0 ? "var(--brand-gold-dim)" : "var(--brand-border)",
                  boxShadow: "0 2px 20px 0 rgba(0,0,0,0.3)",
                }}
              >
                <span className="font-body text-sm" style={{ color: "var(--brand-muted)" }}>{stat.label}</span>
                <span
                  className="font-display text-2xl font-semibold"
                  style={{ color: i === 0 ? "var(--brand-gold)" : "var(--brand-text)" }}
                >
                  {stat.value}
                </span>
              </div>
            ))}

            <div
              className="p-6 rounded-card border"
              style={{
                backgroundColor: "var(--brand-surface)",
                borderColor: "var(--brand-border)",
                boxShadow: "0 2px 20px 0 rgba(0,0,0,0.3)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(201,168,76,0.15)" }}
                >
                  <Icon name="Star" size={14} style={{ color: "var(--brand-gold)" }} />
                </div>
                <span className="font-body text-sm font-medium" style={{ color: "var(--brand-text)" }}>Ведут курс</span>
              </div>
              <p className="font-body text-sm" style={{ color: "var(--brand-muted)" }}>
                Надежда Коргун и Анастасия Прус — финансовые советники с практическим опытом сопровождения клиентов.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--brand-border), transparent)" }}
      />
    </section>
  );
}
