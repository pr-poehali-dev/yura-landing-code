const meta = [
  { value: "3 месяца", label: "Формат" },
  { value: "3 блока", label: "Блоков" },
  { value: "12 созвонов", label: "Созвонов" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20"
      style={{ backgroundColor: "var(--brand-bg)" }}
    >
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
              className="inline-flex items-center px-4 py-1.5 rounded-btn text-xs font-medium font-body tracking-wide border"
              style={{
                borderColor: "var(--brand-gold-dim)",
                color: "var(--brand-gold)",
                backgroundColor: "rgba(201,168,76,0.08)",
              }}
            >
              Программа создания капитала
            </div>

            <div className="space-y-4">
              <h1
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]"
                style={{ color: "var(--brand-text)" }}
              >
                3 месяца{" "}
                <span style={{ color: "var(--brand-gold)" }}>3 блока</span>{" "}
                12 созвонов
              </h1>
              <p
                className="font-body text-lg leading-relaxed max-w-lg"
                style={{ color: "var(--brand-muted)" }}
              >
                Наставничество по управлению личными финансами и инвестированию
              </p>
              <p
                className="font-body text-sm leading-relaxed max-w-lg"
                style={{ color: "rgba(138,170,154,0.65)" }}
              >
                3-месячная программа для пошагового построения системы создания капитала.
              </p>
            </div>

            {/* meta pills */}
            <div className="flex flex-wrap gap-3">
              {meta.map((m) => (
                <div
                  key={m.value}
                  className="px-4 py-2.5 rounded-card border text-center"
                  style={{
                    backgroundColor: "var(--brand-bg-card)",
                    borderColor: "var(--brand-border)",
                  }}
                >
                  <div className="font-display text-base font-semibold" style={{ color: "var(--brand-gold)" }}>
                    {m.value}
                  </div>
                  <div className="font-body text-[10px] mt-0.5" style={{ color: "var(--brand-muted)" }}>
                    {m.label}
                  </div>
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

          {/* right — growth chart card */}
          <div
            className="p-7 rounded-card border"
            style={{
              backgroundColor: "var(--brand-bg-card)",
              borderColor: "var(--brand-gold-dim)",
              boxShadow: "0 8px 48px 0 rgba(0,0,0,0.45)",
            }}
          >
            {/* chart */}
            <div className="mb-6">
              <svg viewBox="0 0 280 120" className="w-full" fill="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* grid lines */}
                {[30, 60, 90].map((y) => (
                  <line key={y} x1="0" y1={y} x2="280" y2={y} stroke="rgba(201,168,76,0.1)" strokeWidth="1" />
                ))}
                {/* area */}
                <path
                  d="M0 110 C40 100 60 90 90 75 C120 60 130 50 160 35 C190 20 220 12 280 5 L280 120 L0 120 Z"
                  fill="url(#chartGrad)"
                />
                {/* line */}
                <path
                  d="M0 110 C40 100 60 90 90 75 C120 60 130 50 160 35 C190 20 220 12 280 5"
                  stroke="#c9a84c"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* dots */}
                {[
                  [0, 110], [90, 75], [160, 35], [280, 5],
                ].map(([cx, cy]) => (
                  <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" fill="#c9a84c" />
                ))}
              </svg>
            </div>

            {/* text */}
            <div
              className="pt-5 border-t space-y-2"
              style={{ borderColor: "var(--brand-border)" }}
            >
              <p
                className="font-display text-base font-semibold leading-snug"
                style={{ color: "var(--brand-text)" }}
              >
                Для создания капитала нужна цепочка небольших, но постоянных действий.
              </p>
              <p className="font-body text-sm leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                Ее легче встроить вместе с опытным специалистом.
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
