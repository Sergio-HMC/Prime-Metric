import Link from "next/link";
import { content, type Locale } from "../../lib/content";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = content[(locale as Locale) || "en"] ?? content.en;

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">{t.eyebrow}</div>
            <h1>{t.title}</h1>
            <p className="lead">{t.lead}</p>
            <div className="cta-row">
              <Link href={`/${locale}/services`} className="btn btn-primary">{t.cta1}</Link>
              <Link href={`/${locale}/contact`} className="btn btn-secondary">{t.cta2}</Link>
            </div>
            <div className="mini-proof">
              {t.pills.map((pill) => <span key={pill} className="mini-pill">{pill}</span>)}
            </div>
          </div>

          <aside className="hero-panel">
            <div className="panel-top"><span className="dot"></span><span className="dot"></span><span className="dot"></span></div>
            <div className="panel-body">
              <div className="metric-card">
                <div className="metric-label">{t.metric1}</div>
                <div className="metric-value">24/7</div>
                <div className="metric-note">{t.lead}</div>
              </div>
              <div className="metric-card">
                <div className="metric-label">{t.metric2}</div>
                <div className="bars">
                  <div className="bar-row"><span>Automation</span><div className="bar"><span style={{width:"89%"}}></span></div><strong>89</strong></div>
                  <div className="bar-row"><span>Visibility</span><div className="bar"><span style={{width:"83%"}}></span></div><strong>83</strong></div>
                  <div className="bar-row"><span>Clarity</span><div className="bar"><span style={{width:"94%"}}></span></div><strong>94</strong></div>
                </div>
              </div>
              <div className="metric-card">
                <div className="metric-label">{t.metric3}</div>
                <div className="metric-note">{t.metric3text}</div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><h2>{t.sectionTitle}</h2></div>
            <div className="section-sub">{t.sectionSub}</div>
          </div>
          <div className="grid-3">
            {t.capabilities.map(([title,text]) => (
              <div className="card" key={title}>
                <span className="card-kicker">Capability</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><h2>{t.platformTitle}</h2></div>
            <div className="section-sub">{t.platformText}</div>
          </div>
          <div className="grid-3">
            <div className="card"><span className="card-kicker">BI</span><h3>Power BI</h3><p>Dashboards, semantic models, governance and reporting layers for management teams.</p></div>
            <div className="card"><span className="card-kicker">Analytics</span><h3>Tableau</h3><p>Interactive analytics and visual exploration for teams that need flexibility and strong storytelling.</p></div>
            <div className="card"><span className="card-kicker">Data stack</span><h3>Apache</h3><p>Experience with Apache-based ecosystems for pipelines, orchestration and scalable reporting flows.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div className="statement">
            <h3>{t.statementTitle}</h3>
            <p>{t.statementText}</p>
          </div>
          <div className="stack">
            {t.statementCards.map(([title,text]) => (
              <div className="card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
