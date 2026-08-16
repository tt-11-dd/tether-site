import { locales } from "../locales";
import type { Language } from "../types";

export function ArchitectureSection({ lang }: { lang: Language }) {
  const t = locales[lang].architecture;
  const pills = lang === "zh"
    ? {
        step1: ["pi-agent-core", "pi-ai", "pi-coding-agent", "pi-tui"],
        step2: ["四级权限", "OS 沙箱", "工作区补丁", "Checkpoint", "MCP · Hooks · Skills"],
        step3: ["Electron + React", "独立 Agent 进程", "实时轨迹", "可视化 Diff"],
        core: "Phase 02 · Agent 内核",
      }
    : {
        step1: ["pi-agent-core", "pi-ai", "pi-coding-agent", "pi-tui"],
        step2: ["Four permissions", "OS sandbox", "Workspace patches", "Checkpoints", "MCP · Hooks · Skills"],
        step3: ["Electron + React", "Separate agent process", "Live activity", "Visual diff"],
        core: "Phase 02 · Agent Core",
      };

  return (
    <section id="architecture" className="architecture-section">
      <div className="container">
        <div className="section-head text-center">
          <span className="section-tag">{t.tag}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="architecture-flow">
          {/* Step 1: Model Reasoning */}
          <div className="arch-step-card">
            <div className="arch-step-badge">Phase 01</div>
            <h3 className="arch-step-title">{t.step1.title}</h3>
            <p className="arch-step-desc">
              {t.step1.desc}{" "}
              <a className="arch-step-src" href="https://github.com/earendil-works/pi" target="_blank" rel="noreferrer">
                github.com/earendil-works/pi
              </a>
            </p>
            <div className="arch-pill-list">
              {pills.step1.map((pill) => <span key={pill} className="arch-pill">{pill}</span>)}
            </div>
          </div>

          <div className="arch-connector">
            <span className="connector-line" />
            <span className="connector-symbol">+</span>
          </div>

          {/* Step 2: tether-agent-core */}
          <div className="arch-step-card highlight">
            <div className="arch-step-badge active">{pills.core}</div>
            <h3 className="arch-step-title">{t.step2.title}</h3>
            <p className="arch-step-desc">
              {t.step2.desc}{" "}
              <a className="arch-step-src" href="https://www.npmjs.com/package/tether-agent-core" target="_blank" rel="noreferrer">
                npmjs.com/package/tether-agent-core
              </a>
            </p>
            <div className="arch-pill-list">
              {pills.step2.map((pill) => <span key={pill} className="arch-pill active">{pill}</span>)}
            </div>
          </div>

          <div className="arch-connector">
            <span className="connector-line" />
            <span className="connector-symbol">=</span>
          </div>

          {/* Step 3: Verified Patch */}
          <div className="arch-step-card">
            <div className="arch-step-badge">Phase 03</div>
            <h3 className="arch-step-title">{t.step3.title}</h3>
            <p className="arch-step-desc">{t.step3.desc}</p>
            <div className="arch-pill-list">
              {pills.step3.map((pill) => <span key={pill} className="arch-pill">{pill}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
