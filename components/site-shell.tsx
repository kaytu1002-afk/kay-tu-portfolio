import Link from "next/link";
import { copy, type Locale, prefix } from "@/lib/site-data";

export function Header({ locale, counterpart }: { locale: Locale; counterpart: string }) {
  const c = copy[locale];
  const base = prefix(locale);
  return (
    <header className="site-header">
      <Link className="wordmark" href={base || "/"} aria-label="Kay Tu home">
        KT<span className="wordmark-dot">.</span>
      </Link>
      <nav className="nav" aria-label={locale === "zh" ? "主导航" : "Primary navigation"}>
        <Link href={`${base || "/"}#work`}>{c.nav.work}</Link>
        <Link href={`${base}/about`}>{c.nav.about}</Link>
        <Link href="/cv/Kay_Tu_CV.pdf">{c.nav.cv}</Link>
      </nav>
      <div className="language-switch" aria-label="Language">
        {locale === "zh" ? <span aria-current="page">中</span> : <Link href={counterpart}>中</Link>}
        <span className="language-divider">/</span>
        {locale === "en" ? <span aria-current="page">EN</span> : <Link href={counterpart}>EN</Link>}
      </div>
    </header>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return (
    <footer className="footer shell" id="contact">
      <div className="footer-lead">
        <p>{c.contact}</p>
        <a href="mailto:hello@example.com">hello@example.com ↗</a>
      </div>
      <div className="footer-meta">
        <p>{c.footerNote}</p>
        <div><a href="#">LinkedIn</a><a href="#">GitHub</a></div>
        <p>© {new Date().getFullYear()} Kay Tu</p>
      </div>
    </footer>
  );
}
