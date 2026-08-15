import { useState, useEffect, useCallback, useMemo } from "react";
import { locales } from "../locales";
import type { Language } from "../types";

const imageModules = import.meta.glob<{ default: string }>("../assets/*.png", {
  eager: true,
});

type Shot = { order: number; src: string; name: string };

function loadShots(prefix: "zh" | "en"): Shot[] {
  return Object.entries(imageModules)
    .map(([filePath, mod]) => {
      const name = filePath.split("/").pop() ?? "";
      const match = name.match(prefix === "en" ? /^e(\d+)\.png$/i : /^(\d+)\.png$/);
      if (!match) return null;
      return { order: parseInt(match[1], 10), src: mod.default, name };
    })
    .filter((item): item is Shot => item !== null)
    .sort((a, b) => a.order - b.order);
}

const shotsByLang: Record<Language, Shot[]> = {
  zh: loadShots("zh"),
  en: loadShots("en"),
};

export function ProductPreview({ lang }: { lang: Language }) {
  const t = locales[lang].productPreview;
  const screenshots = useMemo(() => {
    const preferred = shotsByLang[lang];
    return preferred.length > 0 ? preferred : shotsByLang.zh;
  }, [lang]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = screenshots.length;

  useEffect(() => {
    setCurrentIndex(0);
  }, [lang]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  if (total === 0) return null;

  return (
    <section className="product-preview-section">
      <div className="container">
        <div className="section-head text-center">
          <span className="section-tag">{t.tag}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="product-carousel-wrapper">
          {total > 1 && (
            <button
              type="button"
              className="carousel-nav-btn prev"
              onClick={handlePrev}
              aria-label="Previous image"
              title={lang === "zh" ? "上一张 (←)" : "Previous (←)"}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          <div className="product-screenshot-card">
            {screenshots.map((item, idx) => (
              <img
                key={`${lang}-${item.name}`}
                src={item.src}
                alt={`Tether Preview ${idx + 1}`}
                className={`product-screenshot-img ${idx === currentIndex ? "active" : ""}`}
                loading={idx <= 2 ? "eager" : "lazy"}
                decoding="async"
              />
            ))}
          </div>

          {total > 1 && (
            <button
              type="button"
              className="carousel-nav-btn next"
              onClick={handleNext}
              aria-label="Next image"
              title={lang === "zh" ? "下一张 (→)" : "Next (→)"}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>

        {total > 1 && (
          <div className="carousel-indicators">
            {screenshots.map((item, idx) => (
              <button
                key={`${lang}-${item.order}`}
                type="button"
                className={`carousel-dot ${idx === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
