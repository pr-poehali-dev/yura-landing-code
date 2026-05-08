import Icon from "@/components/ui/icon";

const stats = [
  { label: "Длительность", value: "3 месяца" },
  { label: "Консультации", value: "2 × 30 мин" },
  { label: "Созвоны", value: "Еженедельно" },
];

const highlights = [
  "3 блока обучения",
  "2 индивидуальные консультации с наставником по 30 минут",
  "Еженедельные групповые созвоны",
  "Практика, домашние задания и сопровождение",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-bg pt-20">
      <div className="container-brand w-full py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-btn bg-brand-accent-soft text-brand-primary text-xs font-medium font-body tracking-wide">
              3 месяца · 3 блока · 2 консультации
            </div>

            <div className="space-y-4">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text leading-[1.1]">
                Программа<br />
                <span className="text-brand-primary">создания</span><br />
                капитала
              </h1>
              <p className="font-body text-lg text-brand-muted leading-relaxed max-w-lg">
                Курс по финансовой грамотности и выстраиванию личной системы капитала за 3 месяца.
              </p>
            </div>

            <p className="font-body text-base text-brand-text/80 leading-relaxed max-w-lg">
              Поймете, как управлять деньгами, выстроить финансовый план, подобрать инструменты и начать создавать капитал осознанно — под вашу цель, образ жизни и уровень дохода.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-sm text-brand-text">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-accent-soft flex items-center justify-center">
                    <Icon name="Check" size={12} className="text-brand-primary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-btn bg-brand-primary text-white text-sm font-medium font-body hover:bg-[#015a5f] transition-colors duration-200"
              >
                Записаться на курс
              </a>
              <a
                href="#program"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-btn border border-brand-border text-brand-text text-sm font-medium font-body hover:border-brand-primary hover:text-brand-primary transition-colors duration-200"
              >
                Смотреть программу
                <Icon name="ArrowDown" size={14} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-6 rounded-card border border-brand-border flex items-center justify-between ${
                    i === 0 ? "bg-brand-primary text-white" : "bg-white"
                  }`}
                  style={{ boxShadow: "0 2px 16px 0 rgba(40,37,29,0.06)" }}
                >
                  <span className={`font-body text-sm ${i === 0 ? "text-white/70" : "text-brand-muted"}`}>
                    {stat.label}
                  </span>
                  <span className={`font-display text-2xl font-semibold ${i === 0 ? "text-white" : "text-brand-text"}`}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="p-6 rounded-card bg-brand-surface border border-brand-border"
              style={{ boxShadow: "0 2px 16px 0 rgba(40,37,29,0.06)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-brand-accent-soft flex items-center justify-center">
                  <Icon name="Star" size={14} className="text-brand-primary" />
                </div>
                <span className="font-body text-sm font-medium text-brand-text">Ведут курс</span>
              </div>
              <p className="font-body text-sm text-brand-muted">
                Надежда Коргун и Анастасия Прус — финансовые советники с практическим опытом сопровождения клиентов.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
    </section>
  );
}
