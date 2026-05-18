import { IconWallet, IconShield, IconTarget, IconBarChart, IconLineChart, IconPieChart, IconCalendar, IconCoins } from "@/components/ui/finance-icons";

const items = [
  { text: "Ваши деньги не работают на вас. Все чаще возникает понимание, что зарабатывать и управлять — разные вещи, но как это осуществить, пока непонятно.", Icon: IconWallet },
  { text: "Вы хотите выйти из финансового хаоса и постоянных непредвиденных трат, которые раскачивают бюджет.", Icon: IconShield },
  { text: "Вы готовы создавать капитал, но не понимаете, с чего и как начинать.", Icon: IconTarget },
  { text: "У вас уже есть накопления, и вы хотите наращивать их быстрее, чем просто на вкладах.", Icon: IconBarChart },
  { text: "Вы хотите научиться ставить финансовые цели так, чтобы они действительно достигались.", Icon: IconLineChart },
  { text: "Вам важно выстроить систему целиком: финансовую безопасность, выгодно растущий капитал и доступные накопления на короткие цели.", Icon: IconPieChart },
  { text: "Вам нужна персональная поддержка наставника, чтобы не сойти с пути и не совершить дорогих ошибок.", Icon: IconCalendar },
  { text: "Вы цените время и понимаете, что деньги с каждым годом зарабатываются все дороже, а времени до пенсии становится все меньше.", Icon: IconCoins },
];

export default function Audience() {
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--brand-bg)" }}>
      <div className="container-brand">
        <div className="mb-12 max-w-3xl">
          <span className="gold-line mb-4" />
          <p className="font-body text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--brand-gold)" }}>
            О программе
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: "var(--brand-text)" }}>
            Для кого подойдёт
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
              key={item.text}
              className="flex items-start gap-4 p-5 rounded-card border"
              style={{
                backgroundColor: "var(--brand-bg-card)",
                borderColor: "var(--brand-border)",
                boxShadow: "0 2px 16px 0 rgba(0,0,0,0.25)",
              }}
            >
              <div className="flex-shrink-0 mt-0.5">
                <item.Icon size={36} opacity={0.85} />
              </div>
              <p className="font-body text-sm leading-relaxed" style={{ color: "var(--brand-text)" }}>{item.text}</p>
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
