export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-brand">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">

          <div className="lg:col-span-2 space-y-6">
            <div>
              <p className="font-body text-xs font-medium uppercase tracking-widest text-brand-primary mb-3">
                О курсе
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-text leading-tight">
                Системный подход к деньгам, целям и капиталу
              </h2>
            </div>
            <p className="font-body text-base text-brand-muted leading-relaxed">
              Этот курс создан для тех, кто хочет не просто разобраться в финансах, а собрать понятную личную систему управления деньгами и прийти к устойчивому накоплению капитала.
            </p>
            <p className="font-body text-base text-brand-muted leading-relaxed">
              Обучение идет 3 месяца и проходит в формате сочетания теории, практики и сопровождения наставника.
            </p>
          </div>

          <div
            className="p-6 rounded-card border border-brand-border bg-brand-surface"
            style={{ boxShadow: "0 2px 16px 0 rgba(40,37,29,0.06)" }}
          >
            <p className="font-body text-xs font-medium uppercase tracking-widest text-brand-primary mb-4">
              Курс ведут
            </p>
            <div className="space-y-3 mb-4">
              {["Надежда Коргун", "Анастасия Прус"].map((name) => (
                <div key={name} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-accent-soft flex items-center justify-center text-brand-primary font-display font-semibold text-sm">
                    {name[0]}
                  </div>
                  <span className="font-body text-sm font-medium text-brand-text">{name}</span>
                </div>
              ))}
            </div>
            <p className="font-body text-xs text-brand-muted">
              Финансовые советники и наставники курса
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
