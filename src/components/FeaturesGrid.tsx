import { locales } from "../locales";
import type { Language } from "../types";

export function FeaturesGrid({ lang }: { lang: Language }) {
  const t = locales[lang].features;

  const featuresList = [
    {
      id: "f1",
      title: t.f1.title,
      desc: t.f1.desc,
      tag: "DeepSeek 深度优化",
      detailSnippet: "Think Depth: High / Medium / Low · /compact 自动瘦身",
    },
    {
      id: "f2",
      title: t.f2.title,
      desc: t.f2.desc,
      tag: "开放自由",
      detailSnippet: "DeepSeek / OneAPI / Ollama / vLLM / 企业自建私有网关",
    },
    {
      id: "f3",
      title: t.f3.title,
      desc: t.f3.desc,
      tag: "原子级安全",
      detailSnippet: "会话保存在 ~/.tether (0600) · 事务级 /undo 秒级恢复",
    },
    {
      id: "f4",
      title: t.f4.title,
      desc: t.f4.desc,
      tag: "本地视觉",
      detailSnippet: "内置 MinerU 本地 OCR · 免 API Key · 零云端 Token 消耗",
    },
    {
      id: "f5",
      title: t.f5.title,
      desc: t.f5.desc,
      tag: "OS 沙箱隔离",
      detailSnippet: "默认断网沙箱 · 限制写文件于工作区 · 越权需人工审批",
    },
    {
      id: "f6",
      title: t.f6.title,
      desc: t.f6.desc,
      tag: "工程生态",
      detailSnippet: "读取 AGENTS.md / CLAUDE.md · 支持 Agent Skills & MCP",
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
