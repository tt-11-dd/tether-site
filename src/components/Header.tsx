import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { RELEASE_TAG } from "../downloads";
import { locales } from "../locales";
import type { Language } from "../types";

export function Header({
  lang,
  onToggleLang,
}: {
  lang: Language;
  onToggleLang: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = locales[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#download", label: t.downloads },
    { href: "#features", label: t.features },
    { href: "#architecture", label: t.architecture },
    { href: "#quickstart", label: t.quickstart },
    { href: "#comparison", label: t.comparison },
    { href: "#faq", label: t.faq },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""} ${mobileMenuOpen ? "menu-open" : ""}`}>
      <div className="header-inner container">
        <a href="#" className="brand-link" onClick={() => setMobileMenuOpen(false)}>
          <img src={logo} alt="Tether Logo" className="brand-logo" width="34" height="20" />
          <span className="brand-name">Tether</span>
          <span className="brand-badge">{RELEASE_TAG}</span>
        </a>

        {/* 桌面端主导航 */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-item">
              {link.label}
            </a>
          ))}
        </nav>

        {/* 顶部操作区 */}
        <div className="header-actions">
          {/* 语言切换：全平台始终保留 */}
          <button
            type="button"
            className="lang-toggle-btn"
            onClick={onToggleLang}
            title={lang === "zh" ? "Switch to English" : "切换为中文"}
            aria-label="Toggle Language"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className="lang-label">{lang === "zh" ? "EN" : "中文"}</span>
          </button>

          {/* GitHub 按钮（桌面端展示，移动端收纳在折叠菜单中） */}
          <a
            href="https://github.com/tt-11-dd/tether-ai"
            target="_blank"
            rel="noreferrer"
            className="github-nav-btn desktop-only"
            title="GitHub Repository"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>

          {/* 快速下载按钮（桌面端展示，移动端收纳在折叠菜单中） */}
          <a href="#download" className="header-download-btn desktop-only">
            {t.downloadCta}
          </a>

          {/* 移动端汉堡菜单触发按钮 */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={mobileMenuOpen}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 移动端全功能抽屉式下拉菜单 */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-list">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={handleNavClick}
                >
                  <span>{link.label}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              ))}
            </div>

            <div className="mobile-menu-footer">
              <a
                href="#download"
                className="mobile-menu-cta-btn"
                onClick={handleNavClick}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>{t.downloadCta}</span>
              </a>

              <div className="mobile-menu-sublinks">
                <a
                  href="https://github.com/tt-11-dd/tether-ai"
                  target="_blank"
                  rel="noreferrer"
                  className="mobile-sublink"
                  onClick={handleNavClick}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>{lang === "zh" ? "GitHub 仓库" : "GitHub Repository"}</span>
                </a>

                <span className="sublink-divider">·</span>

                <a
                  href="https://github.com/tt-11-dd/tether-ai/issues"
                  target="_blank"
                  rel="noreferrer"
                  className="mobile-sublink highlight"
                  onClick={handleNavClick}
                >
                  <span>{t.feedback} ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
