import { IconBarChart, IconPiggyBank, IconPieChart, IconTrendUp } from "@/components/ui/finance-icons";

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden" style={{ backgroundColor: "var(--brand-surface)" }}>
      {/* decorative floating icons */}
      <div className="pointer-events-none absolute right-8 top-8 opacity-10 hidden lg:block">
        <IconBarChart size={120} />
      </div>
      <div className="pointer-events-none absolute right-48 bottom-8 opacity-8 hidden lg:block">
        <IconPieChart size={80} />
      </div>
      <div className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 opacity-6 hidden xl:block">
        <IconTrendUp size={64} />
      </div>

      <div className="container-brand relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
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

          {/* right decorative block */}
          <div className="hidden lg:flex flex-col items-center gap-6">
            <div
              className="p-5 rounded-card border flex items-center justify-center"
              style={{ backgroundColor: "rgba(201,168,76,0.07)", borderColor: "var(--brand-gold-dim)" }}
            >
              <IconPiggyBank size={72} />
            </div>
            <div
              className="p-4 rounded-card border flex items-center justify-center"
              style={{ backgroundColor: "rgba(201,168,76,0.05)", borderColor: "var(--brand-border)" }}
            >
              <IconTrendUp size={52} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
