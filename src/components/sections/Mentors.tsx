import Icon from "@/components/ui/icon";

const mentors = [
  {
    name: "Надежда Коргун",
    role: "Финансовый советник",
    bio: "Помогает клиентам выстраивать системный подход к личным финансам и преодолевать поведенческие барьеры на пути к капиталу.",
    tags: ["Личные финансы", "Финансовое мышление", "Бюджетирование"],
  },
  {
    name: "Анастасия Прус",
    role: "Финансовый советник",
    bio: "Специализируется на инвестиционном планировании, ипотечных стратегиях и создании персональных финансовых планов.",
    tags: ["Инвестиции", "ИИС", "Пенсионные накопления"],
  },
];

export default function Mentors() {
  return (
    <section id="mentors" className="section-padding" style={{ backgroundColor: "var(--brand-bg)" }}>
      <div className="container-brand">
        <div className="text-center mb-12">
          <span className="gold-line mx-auto mb-4" />
          <p className="font-body text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--brand-gold)" }}>
            Преподаватели
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight" style={{ color: "var(--brand-text)" }}>
            Ведут курс практикующие советники
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="rounded-card border overflow-hidden"
              style={{
                backgroundColor: "var(--brand-bg-card)",
                borderColor: "var(--brand-gold-dim)",
                boxShadow: "0 4px 32px 0 rgba(0,0,0,0.4)",
              }}
            >
              {/* Photo placeholder */}
              <div
                className="photo-placeholder w-full"
                style={{ height: 260 }}
              >
                <Icon name="Camera" size={28} style={{ color: "var(--brand-gold-dim)" }} />
                <span>Фото преподавателя</span>
                <span className="text-[10px] opacity-60">Загрузите фото {mentor.name}</span>
              </div>

              {/* Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-display text-xl font-semibold" style={{ color: "var(--brand-text)" }}>
                    {mentor.name}
                  </h3>
                  <p className="font-body text-sm" style={{ color: "var(--brand-gold)" }}>{mentor.role}</p>
                </div>
                <p className="font-body text-sm leading-relaxed" style={{ color: "var(--brand-muted)" }}>
                  {mentor.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {mentor.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-body border"
                      style={{
                        borderColor: "var(--brand-gold-dim)",
                        color: "var(--brand-gold)",
                        backgroundColor: "rgba(201,168,76,0.08)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
