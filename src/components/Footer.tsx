import { TetherLogo } from "./TetherLogo";
import { locales } from "../locales";
import type { Language } from "../types";
import { useLatestDownloads } from "../useLatestDownloads";

export function Footer({ lang }: { lang: Language }) {
  const t = locales[lang].footer;
  const downloads = useLatestDownloads();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-brand-col">
          <div className="footer-logo-row">
            <TetherLogo className="footer-logo" width={32} height={18} />
            <span className="footer-brand-name">Tether</span>
          </div>
          <p className="footer-tagline">{t.tagline}</p>
          <p className="footer-built-with">{t.builtWith}</p>
        </div>

        <div className="footer-links-grid">
          <div className="footer-col">
            <h4 className="footer-col-title">{t.colProduct}</h4>
            <ul className="footer-link-list">
              <li><a href="#download">{t.links.desktop}</a></li>
              <li><a href="#features">{t.links.features}</a></li>
              <li>
                <a href={downloads.page} target="_blank" rel="noreferrer">
                  {t.links.changelog} ↗
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">{t.colResources}</h4>
            <ul className="footer-link-list">
              <li>
                <a href="https://github.com/tt-11-dd/tether-ai#readme" target="_blank" rel="noreferrer">
                  {t.links.docs} ↗
                </a>
              </li>
              <li><a href="#harness">{t.links.harness}</a></li>
              <li><a href="#comparison">{locales[lang].nav.comparison}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">{t.colCommunity}</h4>
            <ul className="footer-link-list">
              <li>
                <a href="https://github.com/tt-11-dd/tether-ai" target="_blank" rel="noreferrer">
                  {t.links.github} ↗
                </a>
              </li>
              <li>
                <a href="https://github.com/tt-11-dd/tether-ai/issues" target="_blank" rel="noreferrer">
                  {t.links.issues} ↗
                </a>
              </li>
              <li>
                <a href="https://github.com/tt-11-dd/tether-ai/blob/main/LICENSE" target="_blank" rel="noreferrer">
                  {t.links.license}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p className="copyright">{t.copyright}</p>
        <p className="open-source-note">Open Source under MIT License · Built on Pi</p>
      </div>
    </footer>
  );
}
