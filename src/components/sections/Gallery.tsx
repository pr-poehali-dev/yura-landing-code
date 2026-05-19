import { useState } from "react";
import Icon from "@/components/ui/icon";

const photos = [
  { url: "https://cdn.poehali.dev/files/84f2cc3d-2e42-4ee9-8e0b-33b06ce29203.jpg", alt: "Фото с мероприятия 1" },
  { url: "https://cdn.poehali.dev/files/2f380c70-7bd3-441b-b2f1-f076fa822e8e.jpg", alt: "Фото с мероприятия 2" },
  { url: "https://cdn.poehali.dev/files/b376d509-e3a4-4751-a448-b5f42b332a45.jpg", alt: "Фото с мероприятия 3" },
  { url: "https://cdn.poehali.dev/files/7d3142b3-0c2f-4537-bcc2-5528d24e4ef1.jpg", alt: "Фото с мероприятия 4" },
  { url: "https://cdn.poehali.dev/files/69bd415f-9e0c-481b-93a1-5e689d752906.jpg", alt: "Фото с мероприятия 5" },
  { url: "https://cdn.poehali.dev/files/01a4ad1f-b4af-46c3-b135-4086c1858ae4.jpg", alt: "Фото с мероприятия 6" },
  { url: "https://cdn.poehali.dev/files/ea9d117a-b0f4-441e-aa8c-29d82822c616.jpg", alt: "Фото с мероприятия 7" },
  { url: "https://cdn.poehali.dev/files/a5d71800-1825-46cc-beb6-5bb1e608483f.jpg", alt: "Фото с мероприятия 8" },
  { url: "https://cdn.poehali.dev/files/1cbf7886-9c6d-464c-a4ab-2a2c997ac51e.jpg", alt: "Фото с мероприятия 9" },
  { url: "https://cdn.poehali.dev/files/adb7589f-2a7e-4df7-9b8f-fc762f8214fa.jpg", alt: "Фото с мероприятия 10" },
  { url: "https://cdn.poehali.dev/files/d60d4aad-1a19-4741-ad88-9b0d3f062d78.jpg", alt: "Фото с мероприятия 11" },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);

  const prevLight = () => setLightbox((c) => ((c ?? 0) - 1 + photos.length) % photos.length);
  const nextLight = () => setLightbox((c) => ((c ?? 0) + 1) % photos.length);

  const getVisible = () => {
    const indices = [];
    for (let i = -1; i <= 1; i++) {
      indices.push((current + i + photos.length) % photos.length);
    }
    return indices;
  };

  return (
    <section id="format" className="section-padding" style={{ backgroundColor: "var(--brand-bg-deep)" }}>
      <div className="container-brand">
        <div className="mb-12">
          <span className="gold-line mb-4" />
          <p className="font-body text-sm font-medium uppercase tracking-widest mb-3" style={{ color: "var(--brand-gold)" }}>
            Как проходит обучение
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight" style={{ color: "var(--brand-text)" }}>
            Фотографии с мероприятий
          </h2>
          <p className="font-body text-base mt-3 max-w-lg" style={{ color: "var(--brand-muted)" }}>
            Живые встречи, групповые разборы и индивидуальные сессии с наставниками
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main visible slides */}
          <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
            {getVisible().map((idx, pos) => (
              <div
                key={idx}
                className="relative rounded-card overflow-hidden flex-shrink-0 cursor-pointer transition-all duration-300"
                style={{
                  width: pos === 1 ? "calc(60% - 8px)" : "calc(20% - 8px)",
                  height: pos === 1 ? 420 : 300,
                  opacity: pos === 1 ? 1 : 0.5,
                  filter: pos === 1 ? "none" : "brightness(0.6)",
                }}
                onClick={() => pos === 1 ? setLightbox(idx) : (pos === 0 ? prev() : next())}
              >
                <img
                  src={photos[idx].url}
                  alt={photos[idx].alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Nav buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all"
            style={{ backgroundColor: "var(--brand-gold)", color: "var(--brand-bg-deep)" }}
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all"
            style={{ backgroundColor: "var(--brand-gold)", color: "var(--brand-bg-deep)" }}
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {photos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className="rounded-full transition-all duration-200"
              style={{
                width: idx === current ? 24 : 8,
                height: 8,
                backgroundColor: idx === current ? "var(--brand-gold)" : "var(--brand-gold-dim)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#fff" }}
            onClick={() => setLightbox(null)}
          >
            <Icon name="X" size={20} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#fff" }}
            onClick={(e) => { e.stopPropagation(); prevLight(); }}
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          <img
            src={photos[lightbox].url}
            alt={photos[lightbox].alt}
            className="max-h-[85vh] max-w-full rounded-card object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#fff" }}
            onClick={(e) => { e.stopPropagation(); nextLight(); }}
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>
      )}
    </section>
  );
}
