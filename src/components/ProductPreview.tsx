import { useState, useEffect, useCallback } from "react";
import { locales } from "../locales";
import type { Language } from "../types";

// 自动加载 assets 目录下的所有 png 截图，并按数字文件名 (0.png, 1.png, 2.png, 3.png...) 自然排序
const imageModules = import.meta.glob<{ default: string }>("../assets/*.png", {
  eager: true,
});

const screenshots = Object.entries(imageModules)
  .map(([filePath, mod]) => {
    const match = filePath.match(/(\d+)\.png$/);
    const order = match ? parseInt(match[1], 10) : 999;
    return {
      order,
      src: mod.default,
      name: filePath.split("/").pop() ?? "",
    };
  })
  .sort((a, b) => a.order - b.order);

export function ProductPreview({ lang }: { lang: Language }) {
  const t = locales[lang].productPreview;
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = screenshots.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  // 支持键盘左右键快速切换
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
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
          {/* 左切换按钮 */}
          {total > 1 && (
            <button
              type="button"
              className="carousel-nav-btn prev"
              onClick={handlePrev}
              aria-label="Previous image"
              title="上一张 (←)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {/* 截图主展示区：所有图片同时驻留 DOM，采用纯 CSS Grid 叠层 + 平滑渐变交叉淡入淡出，杜绝白屏闪烁 */}
          <div className="product-screenshot-card">
            {screenshots.map((item, idx) => (
              <img
                key={item.src}
                src={item.src}
                alt={`Tether Preview ${idx + 1}`}
                className={`product-screenshot-img ${idx === currentIndex ? "active" : ""}`}
                loading={idx <= 2 ? "eager" : "lazy"}
                decoding="async"
              />
            ))}
          </div>

          {/* 右切换按钮 */}
          {total > 1 && (
            <button
              type="button"
              className="carousel-nav-btn next"
              onClick={handleNext}
              aria-label="Next image"
              title="下一张 (→)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>

        {/* 底部极简圆点指示器 */}
        {total > 1 && (
          <div className="carousel-indicators">
            {screenshots.map((item, idx) => (
              <button
                key={item.order}
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
