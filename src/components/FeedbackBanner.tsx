import { locales } from "../locales";
import type { Language } from "../types";

export function FeedbackBanner({ lang }: { lang: Language }) {
  const t = locales[lang].feedbackBanner;

  return (
    <section className="feedback-banner-section">
      <div className="container">
        <div className="feedback-banner-card">
          <div className="feedback-info">
            <h3 className="feedback-title">{t.title}</h3>
            <p className="feedback-desc">{t.desc}</p>
          </div>
          <a
            href="https://github.com/tt-11-dd/tether-ai/issues"
            target="_blank"
            rel="noreferrer"
            className="feedback-cta-btn"
          >
            <span>{t.cta}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
