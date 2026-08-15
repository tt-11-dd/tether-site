import { locales } from "../locales";
import type { Language } from "../types";
import { useLatestDownloads } from "../useLatestDownloads";

export function DownloadSection({ lang }: { lang: Language }) {
  const t = locales[lang].download;
  const downloads = useLatestDownloads();

  return (
    <section id="download" className="download-section">
      <div className="container">
        <div className="section-head text-center">
          <span className="section-tag">{t.tag}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="download-grid two-cols">
          <div className="download-card featured">
            {t.macArm.badge && <span className="card-badge">{t.macArm.badge}</span>}
            <div className="card-os-icon apple">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.62-.75 1.04-1.8 0.92-2.84-.9.04-1.98.6-2.61 1.34-.56.63-1.05 1.71-.92 2.73.99.08 2.01-.48 2.61-1.23z" />
              </svg>
            </div>
            <h3 className="card-title">{t.macArm.title}</h3>
            <p className="card-desc">{t.macArm.desc}</p>
            <div className="card-meta">
              <span className="file-name">{downloads.macArmFile}</span>
              <span className="file-size">{t.macArm.size}</span>
            </div>
            <a
              href={downloads.macArm}
              target="_blank"
              rel="noreferrer"
              className="card-download-btn primary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              <span>{lang === "zh" ? "下载 macOS .DMG 安装包" : "Download macOS .DMG"}</span>
            </a>
            <div className="card-sub-option">
              <span className="sub-opt-hint">{lang === "zh" ? "Intel 架构 Mac：" : "Intel Macs: "}</span>
              <span className="sub-opt-text">{t.macIntel.file}</span>
            </div>
          </div>

          <div className="download-card featured">
            {t.win.badge && <span className="card-badge win">{t.win.badge}</span>}
            <div className="card-os-icon windows">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.951-1.801" />
              </svg>
            </div>
            <h3 className="card-title">{t.win.title}</h3>
            <p className="card-desc">{t.win.desc}</p>
            <div className="card-meta">
              <span className="file-name">{downloads.winFile}</span>
              <span className="file-size">{t.win.size}</span>
            </div>
            <a
              href={downloads.win}
              target="_blank"
              rel="noreferrer"
              className="card-download-btn primary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              <span>{lang === "zh" ? "下载 Windows .EXE 安装包" : "Download Windows .EXE"}</span>
            </a>
            <div className="card-sub-option">
              <span className="sub-opt-hint">{lang === "zh" ? "适配系统：" : "Supported OS: "}</span>
              <span className="sub-opt-text">Windows 10 / 11 64-bit</span>
            </div>
          </div>
        </div>

        <div className="download-notice">
          <p>{t.notice}</p>
        </div>
      </div>
    </section>
  );
}
