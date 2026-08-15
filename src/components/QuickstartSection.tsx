import { locales } from "../locales";
import type { Language } from "../types";

export function QuickstartSection({ lang }: { lang: Language }) {
  const t = locales[lang].quickstart;

  const steps = [
    {
      num: t.step1.num,
      title: t.step1.title,
      desc: t.step1.desc,
      action: t.step1.action,
      fig: "Step 1. Launch",
    },
    {
      num: t.step2.num,
      title: t.step2.title,
      desc: t.step2.desc,
      action: t.step2.action,
      fig: "Step 2. Connect",
    },
    {
      num: t.step3.num,
      title: t.step3.title,
      desc: t.step3.desc,
      action: t.step3.action,
      fig: "Step 3. Code",
    },
  ];

  return (
    <section id="quickstart" className="quickstart-section">
      <div className="container">
        <div className="section-head text-center">
          <span className="section-tag">{t.tag}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="quickstart-steps-grid">
          {steps.map((step) => (
            <div key={step.num} className="step-card">
              <div className="step-card-top">
                <span className="step-badge">{step.num}</span>
                <span className="step-fig">{step.fig}</span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
              <div className="step-action-pill">
                <span className="action-dot" />
                <span>{step.action}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
