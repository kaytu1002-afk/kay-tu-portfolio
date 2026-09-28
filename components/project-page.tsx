import Link from "next/link";
import { Footer, Header } from "@/components/site-shell";
import { getProjectDocument } from "@/lib/markdown";
import { type Locale, type ProjectSlug, prefix, projects } from "@/lib/site-data";

export function ProjectPage({ locale, slug }: { locale: Locale; slug: ProjectSlug }) {
  const { meta, sections } = getProjectDocument(locale, slug);
  const base = prefix(locale);
  const listing = projects[locale];
  const position = listing.findIndex((project) => project.slug === slug);
  const next = listing[(position + 1) % listing.length];
  return (
    <main>
      <Header locale={locale} counterpart={locale === "zh" ? `/en/projects/${slug}` : `/projects/${slug}`} />
      <article className="case-study shell">
        <header className="case-hero">
          <div className="case-kicker"><p>{meta.type}</p><p>{meta.status}</p></div>
          <h1>{meta.title}</h1>
          <p className="case-subtitle">{meta.subtitle}</p>
          <dl className="case-facts">
            <div><dt>{locale === "zh" ? "角色" : "Role"}</dt><dd>{meta.role}</dd></div>
            <div><dt>{locale === "zh" ? "时间" : "Period"}</dt><dd>{meta.period}</dd></div>
            <div><dt>{locale === "zh" ? "工具" : "Tools"}</dt><dd>{meta.tools}</dd></div>
          </dl>
        </header>
        {slug === "ai-infrastructure-intelligence" && (
          <div className="system-map" aria-label="Research framework">
            {(locale === "zh" ? ["电力", "数据中心", "GPU 部署", "客户合同", "部署", "客户验收", "收入", "现金流"] : ["Power", "Data centre", "GPU deployment", "Customer contract", "Deployment", "Acceptance", "Revenue", "Cash flow"]).map((step, index, list) => <div key={step}><span>{step}</span>{index < list.length - 1 && <b>→</b>}</div>)}
          </div>
        )}
        <div className="case-body">
          <aside><p>{locale === "zh" ? "目录" : "Contents"}</p>{sections.map((section, index) => <a key={section.title} href={`#section-${index + 1}`}>{String(index + 1).padStart(2, "0")} {section.title}</a>)}</aside>
          <div className="case-content">
            {sections.map((section, index) => <section id={`section-${index + 1}`} key={section.title}><div className="case-section-index">{String(index + 1).padStart(2, "0")}</div><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets.length > 0 && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}
          </div>
        </div>
        <nav className="next-project"><p>{locale === "zh" ? "下一个项目" : "Next project"}</p><Link href={`${base}/projects/${next.slug}`}>{next.title} <span>↗</span></Link></nav>
      </article>
      <Footer locale={locale} />
    </main>
  );
}
