import Icon from "@/components/ui/icon";

const items = [
  "Ваши деньги не работают на вас. Все чаще возникает понимание, что зарабатывать и управлять — разные вещи, но как это осуществить, пока непонятно.",
  "Вы хотите выйти из финансового хаоса и постоянных непредвиденных трат, которые раскачивают бюджет.",
  "Вы готовы создавать капитал, но не понимаете, с чего и как начинать.",
  "У вас уже есть накопления, и вы хотите наращивать их быстрее, чем просто на вкладах.",
  "Вы хотите научиться ставить финансовые цели так, чтобы они действительно достигались.",
  "Вам важно выстроить систему целиком: финансовую безопасность, выгодно растущий капитал и доступные накопления на короткие цели.",
  "Вам нужна персональная поддержка наставника, чтобы не сойти с пути и не совершить дорогих ошибок.",
  "Вы цените время и понимаете, что деньги с каждым годом зарабатываются все дороже, а времени до пенсии становится все меньше.",
];

export default function Audience() {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--brand-bg)" }}>
      <div className="container-brand">
        <div className="mb-12 max-w-3xl">
          <span className="gold-line mb-4" />
          <p className="font-body text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--brand-gold)" }}>
            Для кого программа
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: "var(--brand-text)" }}>
            Для кого эта программа
          </h2>
          <p className="font-body text-base leading-relaxed mb-2" style={{ color: "var(--brand-muted)" }}>
            Подойдет тем, кто готов погрузиться и начать действовать — точно, а не наугад, без конца теряя деньги.
          </p>
          <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(138,170,154,0.6)" }}>
            Программа создана для тех, кто хочет не просто больше зарабатывать, а выстроить понятную систему управления личными финансами и создания капитала.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
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

        <div className="mt-10">
          <a
            href="#form"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-btn text-sm font-medium font-body transition-opacity hover:opacity-85"
            style={{ background: "var(--brand-gold)", color: "var(--brand-black)" }}
          >
            Записаться на консультацию
          </a>
        </div>
      </div>
    </section>
  );
}
