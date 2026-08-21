import { locales } from "../locales";
import type { Language } from "../types";

export function FeaturesGrid({ lang }: { lang: Language }) {
  const t = locales[lang].features;
  const copy = lang === "zh"
    ? [
        ["Pi 基础", "pi-agent-core · pi-ai · pi-coding-agent · pi-tui"],
        ["开放端点", "DeepSeek · OneAPI · Ollama · vLLM · 自定义 Base URL"],
        ["可恢复", "~/.tether 本地状态 · Checkpoint · /undo"],
        ["图片管线", "原生识图优先 · DeepSeek / 自定义视觉 · MinerU 兜底"],
        ["安全边界", "Plan / Ask / Workspace / Full · OS 沙箱"],
        ["开放扩展", "AGENTS.md · CLAUDE.md · Skills · MCP · Hooks"],
      ]
    : [
        ["Pi foundation", "pi-agent-core · pi-ai · pi-coding-agent · pi-tui"],
        ["Open endpoints", "DeepSeek · OneAPI · Ollama · vLLM · Custom Base URL"],
        ["Recoverable", "Local ~/.tether state · Checkpoints · /undo"],
        ["Image pipeline", "Native vision first · DeepSeek / custom · MinerU fallback"],
        ["Safety boundary", "Plan / Ask / Workspace / Full · OS sandbox"],
        ["Open extension", "AGENTS.md · CLAUDE.md · Skills · MCP · Hooks"],
      ];

  const featuresList = [
    {
      id: "f1",
      title: t.f1.title,
      desc: t.f1.desc,
      tag: copy[0][0],
      detailSnippet: copy[0][1],
    },
    {
      id: "f2",
      title: t.f2.title,
      desc: t.f2.desc,
      tag: copy[1][0],
      detailSnippet: copy[1][1],
    },
    {
      id: "f3",
      title: t.f3.title,
      desc: t.f3.desc,
      tag: copy[2][0],
      detailSnippet: copy[2][1],
    },
    {
      id: "f4",
      title: t.f4.title,
      desc: t.f4.desc,
      tag: copy[3][0],
      detailSnippet: copy[3][1],
    },
    {
      id: "f5",
      title: t.f5.title,
      desc: t.f5.desc,
      tag: copy[4][0],
      detailSnippet: copy[4][1],
    },
    {
      id: "f6",
      title: t.f6.title,
      desc: t.f6.desc,
      tag: copy[5][0],
      detailSnippet: copy[5][1],
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-head text-center">
          <span className="section-tag">{t.tag}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="features-grid">
          {featuresList.map((item) => (
            <div key={item.id} className="feature-card">
              <div className="feature-header">
                <span className="feature-tag">{item.tag}</span>
              </div>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-desc">{item.desc}</p>
              <div className="feature-footer">
                <code>{item.detailSnippet}</code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
