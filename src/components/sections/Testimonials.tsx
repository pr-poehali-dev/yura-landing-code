import Icon from "@/components/ui/icon";

const slots = [1, 2, 3, 4];

export default function Testimonials() {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--brand-surface)" }}>
      <div className="container-brand">
        <div className="mb-12">
          <span className="gold-line mb-4" />
          <p className="font-body text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--brand-gold)" }}>
            Отзывы
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight" style={{ color: "var(--brand-text)" }}>
            Что говорят участники
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {slots.map((i) => (
            <div
              key={i}
              className="rounded-card border flex flex-col items-center justify-center gap-3 py-16"
              style={{
                backgroundColor: "var(--brand-bg-card)",
                borderColor: "var(--brand-border)",
                borderStyle: "dashed",
                minHeight: 220,
              }}
            >
              <Icon name="Image" size={32} style={{ color: "var(--brand-gold-dim)" }} />
              <p className="font-body text-sm" style={{ color: "var(--brand-muted)" }}>
                Скриншот отзыва {i}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
