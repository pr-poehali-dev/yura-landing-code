import Icon from "@/components/ui/icon";

const items = [
  "Хотите начать управлять личными финансами без хаоса",
  "Не понимаете, с чего начать путь к капиталу",
  "Уже копите, но не видите системы",
  "Хотите научиться ставить финансовые цели и достигать их",
  "Выбираете между банковскими, инвестиционными и страховыми инструментами",
  "Хотите получать поддержку наставника в процессе",
];

export default function Audience() {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--brand-bg)" }}>
      <div className="container-brand">
        <div className="text-center mb-12">
          <span className="gold-line mx-auto mb-4" />
          <p className="font-body text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--brand-gold)" }}>
            Для кого курс
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight max-w-2xl mx-auto" style={{ color: "var(--brand-text)" }}>
            Подойдет тем, кто хочет перестать действовать наугад
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 p-5 rounded-card border"
              style={{
                backgroundColor: "var(--brand-bg-card)",
                borderColor: "var(--brand-border)",
                boxShadow: "0 2px 16px 0 rgba(0,0,0,0.25)",
              }}
            >
              <span
                className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(201,168,76,0.15)" }}
              >
                <Icon name="Check" size={13} style={{ color: "var(--brand-gold)" }} />
              </span>
              <p className="font-body text-sm leading-relaxed" style={{ color: "var(--brand-text)" }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
