import { useState } from "react";
import Icon from "@/components/ui/icon";

const goals = ["Снизить долг", "Начать инвестировать", "Купить жильё", "Планировать пенсию", "Другое"];

const inputStyle = {
  backgroundColor: "var(--brand-surface)",
  borderColor: "var(--brand-border)",
  color: "var(--brand-text)",
  outline: "none",
};

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

  const fieldClass = "w-full px-4 py-3 rounded-[12px] border font-body text-base transition-colors focus:ring-1";

  return (
    <section id="form" className="section-padding" style={{ backgroundColor: "var(--brand-bg)" }}>
      <div className="container-brand">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-4xl mx-auto">

          <div className="space-y-6">
            <div>
              <span className="gold-line mb-4" />
              <p className="font-body text-sm font-medium uppercase tracking-widest mb-3" style={{ color: "var(--brand-gold)" }}>
                Записаться
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight" style={{ color: "var(--brand-text)" }}>
                Оставить заявку
              </h2>
            </div>
            <p className="font-body text-lg leading-relaxed" style={{ color: "var(--brand-muted)" }}>
              Укажите вашу ситуацию, и мы подберем формат участия, который подойдет именно вам.
            </p>
            <div className="space-y-4">
              {[
                { icon: "Clock", text: "Ответим в течение 24 часов" },
                { icon: "Shield", text: "Данные в безопасности" },
                { icon: "MessageCircle", text: "Без навязчивых звонков" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(201,168,76,0.12)" }}
                  >
                    <Icon name={item.icon as "Clock"} size={14} style={{ color: "var(--brand-gold)" }} />
                  </div>
                  <span className="font-body text-base" style={{ color: "var(--brand-text)" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="p-7 rounded-card border"
            style={{
              backgroundColor: "var(--brand-bg-card)",
              borderColor: "var(--brand-gold-dim)",
              boxShadow: "0 4px 32px 0 rgba(0,0,0,0.4)",
            }}
          >
            {sent ? (
              <div className="text-center py-8 space-y-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto"
                  style={{ backgroundColor: "rgba(201,168,76,0.15)" }}
                >
                  <Icon name="Check" size={24} style={{ color: "var(--brand-gold)" }} />
                </div>
                <h3 className="font-display text-xl font-semibold" style={{ color: "var(--brand-text)" }}>
                  Заявка отправлена!
                </h3>
                <p className="font-body text-base" style={{ color: "var(--brand-muted)" }}>
                  Свяжемся с вами в ближайшее время и расскажем о следующих шагах.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: "name", label: "Имя *", type: "text", placeholder: "Ваше имя", required: true },
                  { name: "phone", label: "Телефон *", type: "tel", placeholder: "+7 (___) ___-__-__", required: true },
                  { name: "city", label: "Город", type: "text", placeholder: "Москва", required: false },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block font-body text-sm font-medium mb-1.5" style={{ color: "var(--brand-muted)" }}>
                      {field.label}
                    </label>
                    <input
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className={fieldClass}
                      style={inputStyle}
                    />
                  </div>
                ))}

                <div>
                  <label className="block font-body text-sm font-medium mb-1.5" style={{ color: "var(--brand-muted)" }}>
                    Ваша главная цель *
                  </label>
                  <select
                    name="goal"
                    required
                    value={form.goal}
                    onChange={handleChange}
                    className={fieldClass + " appearance-none"}
                    style={inputStyle}
                  >
                    <option value="">Выберите цель</option>
                    {goals.map((g) => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block font-body text-sm font-medium mb-1.5" style={{ color: "var(--brand-muted)" }}>
                    Дополнительно
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Расскажите о вашей ситуации…"
                    className={fieldClass + " resize-none"}
                    style={inputStyle}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-btn text-base font-medium font-body transition-opacity hover:opacity-85"
                  style={{ background: "var(--brand-gold)", color: "var(--brand-black)" }}
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