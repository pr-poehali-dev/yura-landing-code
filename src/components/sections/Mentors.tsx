import Icon from "@/components/ui/icon";

const mentors = [
  {
    name: "Надежда Коргун",
    photo: "https://cdn.poehali.dev/projects/57473d5e-c74f-44c7-a62d-78a64b94709e/bucket/60df1a05-2b96-46dd-9c93-aa6d87a9ea35.jpg",
    role: "Финансовый советник",
    tags: [
      "Основатель консалтинговой компании",
      "Инвестор",
      "Финансовый советник с опытом более 20 лет",
      "Преподаватель",
      "Автор курсов и тренингов",
    ],
  },
  {
    name: "Анастасия Прус",
    photo: "https://cdn.poehali.dev/projects/57473d5e-c74f-44c7-a62d-78a64b94709e/bucket/f18c94c5-9064-4779-a77d-31df03c081da.JPG",
    role: "Финансовый советник",
    tags: [
      "Экономист",
      "Предприниматель",
      "Финансовый аналитик",
      "Консультант по личным финансам",
      "Автор и разработчик финансовой игры",
    ],
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
              className="rounded-card border overflow-hidden relative flex flex-col"
              style={{
                borderColor: "var(--brand-gold-dim)",
                boxShadow: "0 4px 32px 0 rgba(0,0,0,0.4)",
                minHeight: 480,
              }}
            >
              {/* Photo or placeholder as background */}
              {mentor.photo ? (
                <>
                  <div
                    className="absolute inset-0 bg-cover"
                    style={{ backgroundImage: `url(${mentor.photo})`, backgroundPosition: "10% 5%", backgroundSize: "cover" }}
                  />
                </>
              ) : (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                  style={{ backgroundColor: "var(--brand-bg-card)" }}
                >
                  <Icon name="Camera" size={28} style={{ color: "var(--brand-gold-dim)" }} />
                  <span className="text-xs" style={{ color: "var(--brand-gold-dim)" }}>Загрузите фото {mentor.name}</span>
                </div>
              )}

              {/* Gradient overlay + Info at bottom */}
              <div className="relative mt-auto p-6 space-y-4" style={{
                background: "linear-gradient(to top, rgba(10,10,10,0.97) 60%, rgba(10,10,10,0.7) 85%, transparent 100%)",
              }}>
                <div>
                  <h3 className="font-display text-xl font-semibold" style={{ color: "var(--brand-text)" }}>
                    {mentor.name}
                  </h3>
                  <p className="font-body text-sm" style={{ color: "var(--brand-gold)" }}>{mentor.role}</p>
                </div>
                <ul className="space-y-2">
                  {mentor.tags.map((tag) => (
                    <li key={tag} className="flex items-center gap-2.5">
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "rgba(201,168,76,0.12)" }}
                      >
                        <Icon name="Check" size={11} style={{ color: "var(--brand-gold)" }} />
                      </span>
                      <span className="font-body text-sm" style={{ color: "var(--brand-text)" }}>{tag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}