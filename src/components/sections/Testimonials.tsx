import { useState } from "react";
import Icon from "@/components/ui/icon";

const screenshots = [
  { url: "https://cdn.poehali.dev/files/112d14b0-f7bb-40e3-a2bd-a00498a796cb.png" },
  { url: "https://cdn.poehali.dev/files/0e4a8ae4-d783-41a0-ac0d-83e864022fa3.png" },
  { url: "https://cdn.poehali.dev/files/2bc9baf6-79ea-4fa2-9cf0-eaa1c2d8a190.png" },
  { url: "https://cdn.poehali.dev/files/cb3245e0-d53d-42eb-822b-43441672cf4e.jpeg" },
  { url: "https://cdn.poehali.dev/files/b3b91d53-b3df-46d0-8c3a-47bd044427b2.png" },
  { url: "https://cdn.poehali.dev/files/693c85f4-06c6-4b47-91e4-56a3074624a3.png" },
  { url: "https://cdn.poehali.dev/files/15693f48-88f7-4796-b737-e8708363bf59.jpeg" },
  { url: "https://cdn.poehali.dev/files/c47ed3ce-5564-4352-8233-ca91521bfa24.png" },
  { url: "https://cdn.poehali.dev/files/6b63c820-4d2d-4cd9-9007-2d5941e40ca6.png" },
  { url: "https://cdn.poehali.dev/files/82baf34a-a409-4f85-a875-eb21a25c31d5.png" },
  { url: "https://cdn.poehali.dev/files/1f28b024-8473-4387-a9be-9df6a0ada6cf.png" },
  { url: "https://cdn.poehali.dev/files/2eb1b3ad-9134-4f02-b256-8d65f6e159eb.jpeg" },
  { url: "https://cdn.poehali.dev/files/05212de1-228a-4f1a-9b93-c55bfc1db43b.png" },
  { url: "https://cdn.poehali.dev/files/3e1c127f-93cb-49be-aa05-fb73383ac5d1.png" },
  { url: "https://cdn.poehali.dev/files/0ca73da9-e459-4548-b55d-a1dd3915987d.jpeg" },
  { url: "https://cdn.poehali.dev/files/ede1fc97-8116-4996-8f02-186b3758fb8b.png" },
  { url: "https://cdn.poehali.dev/files/68b354ab-8c22-4c37-a182-6e5c2089e88a.png" },
];

const COLS = 3;

export default function Testimonials() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prevLight = () => setLightbox((c) => ((c ?? 0) - 1 + screenshots.length) % screenshots.length);
  const nextLight = () => setLightbox((c) => ((c ?? 0) + 1) % screenshots.length);

  return (
    <section className="section-padding" style={{ backgroundColor: "var(--brand-surface)" }}>
      <div className="container-brand">
        <div className="mb-12">
          <span className="gold-line mb-4" />
          <p className="font-body text-sm font-medium uppercase tracking-widest mb-3" style={{ color: "var(--brand-gold)" }}>
            Отзывы
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight" style={{ color: "var(--brand-text)" }}>
            Что говорят участники
          </h2>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-${COLS} gap-3 md:gap-4`}>
          {screenshots.map((s, idx) => (
            <div
              key={idx}
              className="rounded-card overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
              style={{ border: "1px solid var(--brand-border)" }}
              onClick={() => setLightbox(idx)}
            >
              <img
                src={s.url}
                alt={`Отзыв ${idx + 1}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
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
            src={screenshots[lightbox].url}
            alt={`Отзыв ${lightbox + 1}`}
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
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-body text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            {lightbox + 1} / {screenshots.length}
          </div>
        </div>
      )}
    </section>
  );
}
