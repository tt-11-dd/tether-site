import { locales } from "../locales";
import type { Language } from "../types";

export function ArchitectureSection({ lang }: { lang: Language }) {
  const t = locales[lang].architecture;
  const pills = lang === "zh"
    ? {
        step1: ["DeepSeek V3 / R1", "High 深度思考", "多步规划拆解"],
        step2: ["AST 上下文注入", "/compact 长对话压缩", "事务级 /undo 快照", "MinerU 本地 OCR", "OS 断网沙箱隔离"],
        step3: ["通过类型检查 & 单测", "可视化 Diff 审查", "零脏代码残留"],
        core: "Phase 02 · 核心引擎",
      }
    : {
        step1: ["DeepSeek V3 / R1", "High-depth reasoning", "Multi-step planning"],
        step2: ["AST context injection", "/compact conversation compression", "Transactional /undo snapshots", "Local MinerU OCR", "Offline OS sandbox"],
        step3: ["Typecheck & tests", "Visual diff review", "No dirty changes"],
        core: "Phase 02 · Core Engine",
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
            <p className="arch-step-desc">{t.step1.desc}</p>
            <div className="arch-pill-list">
              {pills.step1.map((pill) => <span key={pill} className="arch-pill">{pill}</span>)}
            </div>
          </div>

          <div className="arch-connector">
            <span className="connector-line" />
            <span className="connector-symbol">+</span>
          </div>

          {/* Step 2: Tether Harness */}
          <div className="arch-step-card highlight">
            <div className="arch-step-badge active">{pills.core}</div>
            <h3 className="arch-step-title">{t.step2.title}</h3>
            <p className="arch-step-desc">{t.step2.desc}</p>
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
