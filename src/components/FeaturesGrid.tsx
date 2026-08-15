import { locales } from "../locales";
import type { Language } from "../types";

export function FeaturesGrid({ lang }: { lang: Language }) {
  const t = locales[lang].features;
  const copy = lang === "zh"
    ? [
        ["深度推理", "Think Depth: High / Medium / Low · /compact 自动瘦身"],
        ["开放自由", "DeepSeek / OneAPI / Ollama / vLLM / 企业自建私有网关"],
        ["原子级安全", "会话保存在 ~/.tether (0600) · 事务级 /undo 秒级恢复"],
        ["本地视觉", "内置 MinerU 本地 OCR · 免 API Key · 零云端 Token 消耗"],
        ["OS 沙箱隔离", "默认断网沙箱 · 限制写文件于工作区 · 越权需人工审批"],
        ["工程生态", "读取 AGENTS.md / CLAUDE.md · 支持 Agent Skills & MCP"],
      ]
    : [
        ["Deep Reasoning", "Think Depth: High / Medium / Low · Automatic /compact"],
        ["Open Ecosystem", "DeepSeek / OneAPI / Ollama / vLLM / private gateways"],
        ["Atomic Safety", "Sessions in ~/.tether (0600) · Instant transactional /undo"],
        ["Local Vision", "Built-in MinerU OCR · No API key · Zero cloud vision tokens"],
        ["OS Sandbox", "Offline by default · Workspace-only writes · Approval for escalation"],
        ["Dev Ecosystem", "Reads AGENTS.md / CLAUDE.md · Agent Skills & MCP support"],
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
