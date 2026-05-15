export default function About() {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: "var(--brand-surface)" }}>
      <div className="container-brand">
        <div className="max-w-2xl space-y-6">
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
      </div>
    </section>
  );
}