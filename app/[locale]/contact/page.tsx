import { content, type Locale } from "../../../lib/content";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = content[(locale as Locale) || "en"] ?? content.en;
  return (
    <div className="container">
      <section className="page-hero"><h1>{t.contactTitle}</h1><p>{t.contactLead}</p></section>
      <section className="section">
        <div className="contact-grid">
          <div className="contact-panel">
            <h3>{t.contactHow}</h3>
            <ul className="contact-list">{t.contactList.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="contact-panel">
            <h3>{t.contactReach}</h3>
            <p><strong>Email:</strong> contacto@primemetric.com</p>
            <p><strong>Location:</strong> {t.location}</p>
            <p><strong>Languages:</strong> {t.languages}</p>
            <p><strong>Focus:</strong> {t.focus}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
