import { content, type Locale } from "../../../lib/content";

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = content[(locale as Locale) || "en"] ?? content.en;
  return (
    <div className="container">
      <section className="page-hero"><h1>{t.servicesTitle}</h1><p>{t.servicesLead}</p></section>
      <section className="section">
        <div className="grid-3">
          {t.services.map(([kicker,title,text]) => (
            <div className="card" key={title}>
              <span className="card-kicker">{kicker}</span><h3>{title}</h3><p>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
