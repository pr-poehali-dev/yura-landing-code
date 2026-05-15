import Icon from "@/components/ui/icon";

const slots = [
  { label: "Групповой созвон", size: "large" },
  { label: "Мероприятие", size: "small" },
  { label: "Мероприятие", size: "small" },
  { label: "Мероприятие", size: "small" },
  { label: "Мероприятие", size: "small" },
  { label: "Мероприятие", size: "small" },
];

export default function Gallery() {
  return (
    <section id="format" className="section-padding" style={{ backgroundColor: "var(--brand-bg-deep)" }}>
      <div className="container-brand">
        <div className="mb-12">
          <span className="gold-line mb-4" />
          <p className="font-body text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "var(--brand-gold)" }}>
            Как проходит обучение
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight" style={{ color: "var(--brand-text)" }}>
            Фотографии с мероприятий
          </h2>
          <p className="font-body text-sm mt-3 max-w-lg" style={{ color: "var(--brand-muted)" }}>
            Живые встречи, групповые разборы и индивидуальные сессии с наставниками
          </p>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {/* large tile — spans 2 cols on md */}
          <div
            className="photo-placeholder rounded-card col-span-2 md:col-span-2"
            style={{ height: 320 }}
          >
            <Icon name="Image" size={36} style={{ color: "var(--brand-gold-dim)" }} />
            <span className="text-sm">Фото мероприятия</span>
            <span className="text-[11px] opacity-55">Главное фото — рекомендуется 1200×640</span>
          </div>

          {/* tall tile right */}
          <div
            className="photo-placeholder rounded-card row-span-2 hidden md:flex"
            style={{ height: "100%", minHeight: 320 }}
          >
            <Icon name="Image" size={28} style={{ color: "var(--brand-gold-dim)" }} />
            <span>Фото мероприятия</span>
            <span className="text-[10px] opacity-55">600×640</span>
          </div>

          {/* bottom row small tiles */}
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="photo-placeholder rounded-card"
              style={{ height: 180 }}
            >
              <Icon name="Image" size={22} style={{ color: "var(--brand-gold-dim)" }} />
              <span>Фото</span>
              <span className="text-[10px] opacity-55">400×320</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}