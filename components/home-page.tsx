import Link from "next/link";
import { Footer, Header } from "@/components/site-shell";
import { copy, projects, type Locale, prefix } from "@/lib/site-data";

export function HomePage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const base = prefix(locale);
  const isZh = locale === "zh";
  return (
    <main>
      <Header locale={locale} counterpart={locale === "zh" ? "/en" : "/"} />
      <section className="hero shell">
        <div className="hero-kicker"><span>Kay Tu</span><span>Manchester · 2026</span></div>
        <h1 className={isZh ? "" : "hero-en"}>
          {c.hero[0]} <span>×</span> {c.hero[1]} <span>×</span><br />{c.hero[2]} <span>×</span> {c.hero[3]}
        </h1>
        <div className="hero-footer">
          <p>{c.intro}</p>
          <a className="text-link" href="#work">{c.explore} <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="work-section shell" id="work">
        <div className="section-heading"><p>{c.selected}</p><p>01 — 05</p></div>
        <div className="project-list">
          {projects[locale].map((project, index) => (
            <Link className="project-row" href={`${base}/projects/${project.slug}`} key={project.slug}>
              <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="project-title-block"><h2>{project.title}</h2><p>{project.type} · {project.status}</p></div>
              <p className="project-description">{project.description}</p>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="areas-section shell">
        <div className="section-heading"><p>{c.areas}</p><p>Focus / 2026</p></div>
        <div className="areas-layout">
          <p className="areas-intro">{c.areasIntro}</p>
          <ol className="areas-list">
            {c.areaList.map((area, index) => <li key={area}><span>{String(index + 1).padStart(2, "0")}</span>{area}</li>)}
          </ol>
        </div>
      </section>

      <section className="bio-section" id="about">
        <div className="shell bio-layout">
          <p className="bio-label">{isZh ? "关于" : "About"}</p>
          <div><h2>{c.bioTitle}</h2><p>{c.bio}</p><Link className="text-link" href={`${base}/about`}>{c.aboutLink} ↗</Link></div>
          <p className="bio-status">{c.status}</p>
        </div>
      </section>
      <Footer locale={locale} />
    </main>
  );
}
