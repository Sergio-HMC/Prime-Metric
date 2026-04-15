
import { content, type Locale } from "../../../lib/content";
export default async function SolutionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = content[(locale as Locale) || "en"] ?? content.en;
  return (
    <div className="container">
      <section className="page-hero"><h1>{t.solutionsTitle}</h1><p>{t.solutionsLead}</p></section>
      <section className="section">
        <div className="grid-3">
          {t.solutions.map(([title,text]) => (
            <div className="card" key={title}><span className="card-kicker">Use case</span><h3>{title}</h3><p>{text}</p></div>
          ))}
        </div>
      </section>
    </div>
  );
}
