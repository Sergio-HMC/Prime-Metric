import Link from "next/link";
import Image from "next/image";
import { content, type Locale } from "../../lib/content";

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = content[(locale as Locale) || "en"] ?? content.en;

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link href={`/${locale}`}>
            <Image src="/brand/prime-metric-logo-horizontal.png" alt="Prime-Metric logo" width={300} height={75} className="brand-logo" priority />
          </Link>
          <nav className="main-nav">
            <Link href={`/${locale}`}>{t.nav.home}</Link>
            <Link href={`/${locale}/services`}>{t.nav.services}</Link>
            <Link href={`/${locale}/solutions`}>{t.nav.solutions}</Link>
            <Link href={`/${locale}/contact`}>{t.nav.contact}</Link>
          </nav>
          <nav className="lang-nav">
            {["es","en","fr"].map((lang) => (
              <Link key={lang} href={`/${lang}`} className={`lang-pill ${locale === lang ? "active" : ""}`}>{lang.toUpperCase()}</Link>
            ))}
          </nav>
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Image src="/brand/prime-metric-logo-horizontal.png" alt="Prime-Metric logo" width={260} height={65} className="footer-brand-logo" />
            <p className="footer-copy">{t.lead}</p>
          </div>
          <div>
            <div className="footer-title">{t.nav.services}</div>
            <ul className="footer-list">
              <li>Power BI</li>
              <li>Tableau</li>
              <li>Apache ecosystem</li>
              <li>Data automation</li>
            </ul>
          </div>
          <div>
            <div className="footer-title">{t.contactReach}</div>
            <ul className="footer-list">
              <li>contacto@primemetric.com</li>
              <li>{t.location}</li>
              <li>{t.languages}</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
