export default function CtaBanner() {
  return (
    <section className="section-padding bg-brand-primary">
      <div className="container-brand text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4 max-w-2xl mx-auto">
          Начните создавать капитал уже сегодня
        </h2>
        <p className="font-body text-base text-white/70 mb-8 max-w-lg mx-auto">
          Оставьте заявку — в течение 24 часов свяжемся с вами и расскажем, как под ваш доход и цели построить план без лишнего риска.
        </p>
        <a
          href="#form"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-btn bg-white text-brand-primary text-sm font-medium font-body hover:bg-brand-accent-soft transition-colors duration-200"
        >
          Записаться на курс
        </a>
      </div>
    </section>
  );
}
