import { locales } from "../locales";
import type { Language } from "../types";

export function ArchitectureSection({ lang }: { lang: Language }) {
  const t = locales[lang].architecture;

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
              <span className="arch-pill">DeepSeek V3 / R1</span>
              <span className="arch-pill">High 深度思考</span>
              <span className="arch-pill">多步规划拆解</span>
            </div>
          </div>

          <div className="arch-connector">
            <span className="connector-line" />
            <span className="connector-symbol">+</span>
          </div>

          {/* Step 2: Tether Harness */}
          <div className="arch-step-card highlight">
            <div className="arch-step-badge active">Phase 02 · 核心引擎</div>
            <h3 className="arch-step-title">{t.step2.title}</h3>
            <p className="arch-step-desc">{t.step2.desc}</p>
            <div className="arch-pill-list">
              <span className="arch-pill active">AST 上下文注入</span>
              <span className="arch-pill active">/compact 长对话压缩</span>
              <span className="arch-pill active">事务级 /undo 快照</span>
              <span className="arch-pill active">MinerU 本地 OCR</span>
              <span className="arch-pill active">OS 断网沙箱隔离</span>
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
              <span className="arch-pill">通过类型检查 & 单测</span>
              <span className="arch-pill">可视化 Diff 审查</span>
              <span className="arch-pill">零脏代码残留</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
