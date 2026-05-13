export default function About() {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: "var(--brand-surface)" }}>
      <div className="container-brand">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">

          <div className="lg:col-span-2 space-y-6">
            <div>
              <span className="gold-line mb-4" />
              <p className="font-body text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--brand-gold)" }}>
                О курсе
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight" style={{ color: "var(--brand-text)" }}>
                Системный подход к деньгам, целям и капиталу
              </h2>
            </div>
            <p className="font-body text-base leading-relaxed" style={{ color: "var(--brand-muted)" }}>
              Этот курс создан для тех, кто хочет не просто разобраться в финансах, а собрать понятную личную систему управления деньгами и прийти к устойчивому накоплению капитала.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: "var(--brand-muted)" }}>
              Обучение идет 3 месяца и проходит в формате сочетания теории, практики и сопровождения наставника.
            </p>
          </div>

          <div
            className="p-6 rounded-card border"
            style={{
              backgroundColor: "var(--brand-bg-card)",
              borderColor: "var(--brand-gold-dim)",
              boxShadow: "0 4px 24px 0 rgba(0,0,0,0.4)",
            }}
          >
            <p className="font-body text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "var(--brand-gold)" }}>
              Курс ведут
            </p>
            <div className="space-y-3 mb-4">
              {["Надежда Коргун", "Анастасия Прус"].map((name) => (
                <div key={name} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-display font-semibold text-sm"
                    style={{ backgroundColor: "rgba(201,168,76,0.15)", color: "var(--brand-gold)" }}
                  >
                    {name[0]}
                  </div>
                  <span className="font-body text-sm font-medium" style={{ color: "var(--brand-text)" }}>{name}</span>
                </div>
              ))}
            </div>
            <p className="font-body text-xs" style={{ color: "var(--brand-muted)" }}>
              Финансовые советники и наставники курса
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
