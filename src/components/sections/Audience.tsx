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
    <section className="section-padding bg-brand-bg">
      <div className="container-brand">
        <div className="text-center mb-12">
          <p className="font-body text-xs font-medium uppercase tracking-widest text-brand-primary mb-3">
            Для кого курс
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-text leading-tight max-w-2xl mx-auto">
            Подойдет тем, кто хочет перестать действовать наугад
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 p-5 rounded-card bg-white border border-brand-border"
              style={{ boxShadow: "0 2px 12px 0 rgba(40,37,29,0.05)" }}
            >
              <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-brand-accent-soft flex items-center justify-center">
                <Icon name="Check" size={13} className="text-brand-primary" />
              </span>
              <p className="font-body text-sm text-brand-text leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
