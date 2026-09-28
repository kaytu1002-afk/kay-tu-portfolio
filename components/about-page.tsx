import Link from "next/link";
import { Footer, Header } from "@/components/site-shell";
import { type Locale, prefix } from "@/lib/site-data";

const content = {
  zh: {
    eyebrow: "关于 / About",
    title: "在技术能力、产品采用与经济结果之间建立联系。",
    intro: "我的兴趣并不属于单一学科。它来自一个持续的问题：新技术如何从实验室与算力集群，进入人们真正使用、企业愿意投入、市场能够理解的系统？",
    chapters: [
      ["01", "定量基础", "在曼彻斯特大学的数学与金融本科学习，让我习惯用模型、概率与证据分析复杂系统。Bayesian 建模项目进一步训练了我处理不确定性与解释假设的能力。"],
      ["02", "产品与交互", "从 FastGPT 的对话工作流，到角色系统 Dan 与互动叙事《末日基地：最后十二周》，我开始把 LLM 看作一种需要记忆、状态、边界与信任设计的新型产品材料。"],
      ["03", "基础设施与资本", "研究 AI 基础设施让我看到，模型能力背后是电力、数据中心、GPU、网络、融资与客户合同组成的物理经济链条。技术进步只有通过部署与采用，才会成为收入与现金流。"],
      ["04", "沟通与信任", "科学与健康传播硕士学习提供了另一种视角：技术的重要性不仅在于它存在，更在于人们能否理解、信任并恰当地使用它。"],
    ],
    now: "目前关注",
    nowText: "AI 产品与产品战略、AI 基础设施与半导体生态、技术研究与战略分析。",
    education: "教育",
    degrees: ["MSc Science and Health Communication — University of Manchester, expected 2027", "BSc Mathematics with Finance — University of Manchester"],
    tools: "工具",
    toolList: "Python · R · Stan · MATLAB · LaTeX · Excel · ChatGPT · Claude · Codex · Cursor · Gemini · FastGPT",
    cv: "下载简历",
  },
  en: {
    eyebrow: "About / 关于",
    title: "Connecting technical capability, product adoption and economic outcomes.",
    intro: "My interests do not sit neatly inside one discipline. They grow from a recurring question: how does a new technology move from a lab or compute cluster into a system that people use, businesses fund and markets can understand?",
    chapters: [
      ["01", "Quantitative foundations", "Mathematics and finance at Manchester taught me to approach complex systems through models, probability and evidence. Bayesian modelling further trained me to reason under uncertainty and make assumptions explicit."],
      ["02", "Products and interaction", "From FastGPT conversational workflows to the character system Dan and The Last Twelve Weeks, I began treating LLMs as a new product material—one that needs memory, state, boundaries and trust by design."],
      ["03", "Infrastructure and capital", "AI infrastructure research revealed the physical economic chain beneath model capability: power, data centres, GPUs, networking, financing and customer contracts. Technology becomes valuable only through deployment and adoption."],
      ["04", "Communication and trust", "Science and Health Communication adds another perspective: technology matters not simply because it exists, but because people can understand, trust and use it appropriately."],
    ],
    now: "Current focus",
    nowText: "AI product and product strategy, AI infrastructure and semiconductor ecosystems, technology research and strategic analysis.",
    education: "Education",
    degrees: ["MSc Science and Health Communication — University of Manchester, expected 2027", "BSc Mathematics with Finance — University of Manchester"],
    tools: "Tools",
    toolList: "Python · R · Stan · MATLAB · LaTeX · Excel · ChatGPT · Claude · Codex · Cursor · Gemini · FastGPT",
    cv: "Download CV",
  },
} as const;

export function AboutPage({ locale }: { locale: Locale }) {
  const c = content[locale];
  const base = prefix(locale);
  return (
    <main>
      <Header locale={locale} counterpart={locale === "zh" ? "/en/about" : "/about"} />
      <article className="about-page shell">
        <header className="about-hero"><p>{c.eyebrow}</p><h1>{c.title}</h1><p className="about-intro">{c.intro}</p></header>
        <div className="about-chapters">
          {c.chapters.map(([index, title, body]) => <section key={index}><span>{index}</span><h2>{title}</h2><p>{body}</p></section>)}
        </div>
        <section className="profile-grid">
          <div><p className="small-label">{c.now}</p><p>{c.nowText}</p></div>
          <div><p className="small-label">{c.education}</p>{c.degrees.map((degree) => <p key={degree}>{degree}</p>)}</div>
          <div><p className="small-label">{c.tools}</p><p>{c.toolList}</p></div>
        </section>
        <div className="about-cta"><Link className="button-link" href="/cv/Kay_Tu_CV.pdf">{c.cv} ↗</Link><Link className="text-link" href={base || "/"}>{locale === "zh" ? "返回首页" : "Back home"}</Link></div>
      </article>
      <Footer locale={locale} />
    </main>
  );
}
