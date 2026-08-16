import { locales } from "../locales";
import type { Language } from "../types";
import { TetherLogo } from "./TetherLogo";

export function HarnessSection({ lang }: { lang: Language }) {
  const t = locales[lang].harness;

  return (
    <section id="harness" className="harness-section">
      <div className="container">
        <div className="section-head text-center">
          <span className="section-tag">{t.tag}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>
        <aside className="name-origin">
          <TetherLogo width={72} height={42} className="name-origin-logo" />
          <div>
            <span className="section-tag">{t.name.tag}</span>
            <h3 className="name-origin-title">{t.name.title}</h3>
            <p className="name-origin-body">{t.name.body}</p>
          </div>
        </aside>
        <div className="harness-grid">
          {t.items.map((item) => (
            <article key={item.kicker} className="harness-card">
              <span className="harness-kicker">{item.kicker}</span>
              <h3 className="harness-card-title">{item.title}</h3>
              <p className="harness-card-desc">{item.desc}</p>
            </article>
          ))}
        </div>
        <p className="harness-note">{t.note}</p>
        <p className="harness-sources">
          {t.sources.map((source) => (
            <a key={source.href} href={source.href} target="_blank" rel="noreferrer">
              {source.label}
            </a>
          ))}
        </p>
      </div>
    </section>
  );
}
