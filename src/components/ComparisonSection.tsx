import { locales } from "../locales";
import type { Language } from "../types";

export function ComparisonSection({ lang }: { lang: Language }) {
  const t = locales[lang].comparison;
  const table = t.table;

  const rows = [
    { name: table.d1.name, tether: table.d1.tether, closed: table.d1.closed, chat: table.d1.chat },
    { name: table.d2.name, tether: table.d2.tether, closed: table.d2.closed, chat: table.d2.chat },
    { name: table.d3.name, tether: table.d3.tether, closed: table.d3.closed, chat: table.d3.chat },
    { name: table.d4.name, tether: table.d4.tether, closed: table.d4.closed, chat: table.d4.chat },
    { name: table.d5.name, tether: table.d5.tether, closed: table.d5.closed, chat: table.d5.chat },
    { name: table.d6.name, tether: table.d6.tether, closed: table.d6.closed, chat: table.d6.chat },
  ];

  return (
    <section id="comparison" className="comparison-section">
      <div className="container">
        <div className="section-head text-center">
          <span className="section-tag">{t.tag}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="comparison-table-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="col-dim">{table.dimension}</th>
                <th className="col-tether highlight">
                  <div className="th-badge">Recommended</div>
                  <div className="th-name">{table.tether}</div>
                </th>
                <th className="col-closed">{table.closedSource}</th>
                <th className="col-chat">{table.chatbots}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx}>
                  <td className="col-dim">
                    <strong>{row.name}</strong>
                  </td>
                  <td className="col-tether highlight">
                    <span className="check-icon">✓</span>
                    <span>{row.tether}</span>
                  </td>
                  <td className="col-closed">
                    <span className="cross-icon">✗</span>
                    <span>{row.closed}</span>
                  </td>
                  <td className="col-chat">
                    <span className="cross-icon">✗</span>
                    <span>{row.chat}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
