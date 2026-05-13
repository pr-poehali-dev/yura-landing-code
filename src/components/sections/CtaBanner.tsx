export default function CtaBanner() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "var(--brand-surface)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)",
        }}
      />
      <div className="container-brand text-center relative z-10">
        <span className="gold-line mx-auto mb-4" />
        <h2
          className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4 max-w-2xl mx-auto"
          style={{ color: "var(--brand-text)" }}
        >
          Начните создавать капитал уже сегодня
        </h2>
        <p className="font-body text-base mb-8 max-w-lg mx-auto" style={{ color: "var(--brand-muted)" }}>
          Оставьте заявку — в течение 24 часов свяжемся с вами и расскажем, как выстроить план под ваш доход и цели.
        </p>
        <a
          href="#form"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-btn text-sm font-medium font-body transition-opacity hover:opacity-85"
          style={{ background: "var(--brand-gold)", color: "var(--brand-black)" }}
        >
          Записаться на курс
        </a>
      </div>
    </section>
  );
}
