const mentors = [
  {
    name: "Надежда Коргун",
    role: "Финансовый советник",
    bio: "Помогает клиентам выстраивать системный подход к личным финансам и преодолевать поведенческие барьеры на пути к капиталу.",
    tags: ["Личные финансы", "Финансовое мышление", "Бюджетирование"],
    initial: "Н",
  },
  {
    name: "Анастасия Прус",
    role: "Финансовый советник",
    bio: "Специализируется на инвестиционном планировании, ипотечных стратегиях и создании персональных финансовых планов.",
    tags: ["Инвестиции", "ИИС", "Пенсионные накопления"],
    initial: "А",
  },
];

export default function Mentors() {
  return (
    <section id="mentors" className="section-padding bg-brand-bg">
      <div className="container-brand">
        <div className="text-center mb-12">
          <p className="font-body text-xs font-medium uppercase tracking-widest text-brand-primary mb-3">
            Преподаватели
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-text leading-tight">
            Ведут курс практикующие советники
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="p-7 rounded-card bg-white border border-brand-border"
              style={{ boxShadow: "0 2px 16px 0 rgba(40,37,29,0.06)" }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-brand-accent-soft flex items-center justify-center text-brand-primary font-display font-bold text-xl">
                  {mentor.initial}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-text">{mentor.name}</h3>
                  <p className="font-body text-sm text-brand-muted">{mentor.role}</p>
                </div>
              </div>

              <p className="font-body text-sm text-brand-muted leading-relaxed mb-5">{mentor.bio}</p>

              <div className="flex flex-wrap gap-2">
                {mentor.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-brand-accent-soft text-brand-primary text-xs font-body"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
