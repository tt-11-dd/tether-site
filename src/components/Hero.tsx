import { useState, useEffect } from "react";
import { locales } from "../locales";
import type { Language } from "../types";
import { useLatestDownloads } from "../useLatestDownloads";

export function Hero({ lang }: { lang: Language }) {
  const t = locales[lang].hero;
  const downloads = useLatestDownloads();
  const [detectedOs, setDetectedOs] = useState<"mac" | "win" | "linux">("mac");

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes("win")) {
      setDetectedOs("win");
    } else if (userAgent.includes("mac")) {
      setDetectedOs("mac");
    } else {
      setDetectedOs("linux");
    }
  }, []);

  const getPrimaryDownloadCta = () => {
    if (detectedOs === "mac") return t.primaryCtaMac;
    if (detectedOs === "win") return t.primaryCtaWin;
    return t.primaryCtaGeneric;
  };

  const primaryHref =
    detectedOs === "win" ? downloads.win : detectedOs === "mac" ? downloads.macArm : "#download";

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <h1 className="hero-title">{t.titleLine1}</h1>

        <p className="hero-subtitle">{t.subtitle}</p>

        <div className="hero-actions">
          <a
            href={primaryHref}
            className="btn-primary"
            {...(primaryHref.startsWith("http")
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
          >
            {detectedOs === "mac" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.62-.75 1.04-1.8 0.92-2.84-.9.04-1.98.6-2.61 1.34-.56.63-1.05 1.71-.92 2.73.99.08 2.01-.48 2.61-1.23z" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.951-1.801" />
              </svg>
            )}
            <span>{getPrimaryDownloadCta()}</span>
          </a>

          <a
            href="https://github.com/tt-11-dd/tether-ai"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>{t.secondaryCta}</span>
          </a>
        </div>

        <div className="hero-trust-grid">
          <div className="trust-item">
            <span className="trust-dot" />
            <span>{t.stats.privacy}</span>
          </div>
          <div className="trust-item">
            <span className="trust-dot" />
            <span>{t.stats.models}</span>
          </div>
          <div className="trust-item">
            <span className="trust-dot" />
            <span>{t.stats.undo}</span>
          </div>
          <div className="trust-item">
            <span className="trust-dot" />
            <span>{t.stats.license}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
