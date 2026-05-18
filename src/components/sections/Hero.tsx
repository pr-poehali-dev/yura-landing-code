const meta = [
  { value: "3 месяца", label: "Формат" },
  { value: "3 блока", label: "Блоков" },
  { value: "12 созвонов", label: "Сопровождение" },
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
                <span className="gold-shimmer">3 блока</span>{" "}
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
              className="gold-shimmer-bg inline-flex items-center justify-center px-8 py-3.5 rounded-btn text-sm font-medium font-body transition-opacity hover:opacity-85"
              style={{ color: "var(--brand-black)" }}
            >
              Записаться на консультацию
            </a>
          </div>

          {/* right — mentors photo */}
          <div className="relative flex items-end justify-center">
            {/* glow behind photo */}
            <div
              className="pointer-events-none absolute inset-0 rounded-card"
              style={{
                background: "radial-gradient(ellipse 80% 60% at 50% 80%, rgba(201,168,76,0.18) 0%, transparent 70%)",
              }}
            />
            <img
              src="https://cdn.poehali.dev/projects/57473d5e-c74f-44c7-a62d-78a64b94709e/bucket/4d28c53e-a2af-430a-8f2a-7b0be4e9679c.jpg"
              alt="Наставники программы"
              className="relative w-full rounded-card object-cover"
              style={{
                maxHeight: "480px",
                border: "1px solid var(--brand-gold-dim)",
                boxShadow: "0 8px 56px 0 rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.15)",
              }}
            />
            {/* gold bottom line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-card"
              style={{ background: "var(--gold-gradient)", backgroundSize: "var(--gold-gradient-size)" }}
            />
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