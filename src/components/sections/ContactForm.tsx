import { useState } from "react";
import Icon from "@/components/ui/icon";

const goals = [
  "Снизить долг",
  "Начать инвестировать",
  "Купить жильё",
  "Планировать пенсию",
  "Другое",
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", city: "", goal: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="form" className="section-padding bg-brand-bg">
      <div className="container-brand">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-4xl mx-auto">

          <div className="space-y-6">
            <div>
              <p className="font-body text-xs font-medium uppercase tracking-widest text-brand-primary mb-3">
                Записаться
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-text leading-tight">
                Оставить заявку
              </h2>
            </div>
            <p className="font-body text-base text-brand-muted leading-relaxed">
              Укажите вашу ситуацию, и мы подберем формат участия, который подойдет именно вам.
            </p>
            <div className="space-y-4">
              {[
                { icon: "Clock", text: "Ответим в течение 24 часов" },
                { icon: "Shield", text: "Данные в безопасности" },
                { icon: "MessageCircle", text: "Без навязчивых звонков" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-accent-soft flex items-center justify-center">
                    <Icon name={item.icon as "Clock"} size={14} className="text-brand-primary" />
                  </div>
                  <span className="font-body text-sm text-brand-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="p-7 rounded-card bg-white border border-brand-border"
            style={{ boxShadow: "0 4px 24px 0 rgba(40,37,29,0.08)" }}
          >
            {sent ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-brand-accent-soft flex items-center justify-center mx-auto">
                  <Icon name="Check" size={24} className="text-brand-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-brand-text">Заявка отправлена!</h3>
                <p className="font-body text-sm text-brand-muted">
                  Свяжемся с вами в ближайшее время и расскажем о следующих шагах.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-body text-xs font-medium text-brand-text mb-1.5">Имя *</label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-[12px] border border-brand-border bg-brand-surface font-body text-sm text-brand-text placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs font-medium text-brand-text mb-1.5">Телефон *</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-3 rounded-[12px] border border-brand-border bg-brand-surface font-body text-sm text-brand-text placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs font-medium text-brand-text mb-1.5">Город</label>
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Москва"
                    className="w-full px-4 py-3 rounded-[12px] border border-brand-border bg-brand-surface font-body text-sm text-brand-text placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs font-medium text-brand-text mb-1.5">Ваша главная цель *</label>
                  <select
                    name="goal"
                    required
                    value={form.goal}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-[12px] border border-brand-border bg-brand-surface font-body text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-colors appearance-none"
                  >
                    <option value="">Выберите цель</option>
                    {goals.map((g) => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block font-body text-xs font-medium text-brand-text mb-1.5">Дополнительно</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Расскажите о вашей ситуации…"
                    className="w-full px-4 py-3 rounded-[12px] border border-brand-border bg-brand-surface font-body text-sm text-brand-text placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-btn bg-brand-primary text-white text-sm font-medium font-body hover:bg-[#015a5f] transition-colors duration-200"
                >
                  Отправить заявку
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
