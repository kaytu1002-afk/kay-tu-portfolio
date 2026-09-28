export type Locale = "zh" | "en";

export const slugs = [
  "agentready",
  "ai-infrastructure-intelligence",
  "iren-research",
  "last-twelve-weeks",
  "bayesian-influenza-modelling",
] as const;

export type ProjectSlug = (typeof slugs)[number];

export const copy = {
  zh: {
    nav: { work: "项目", about: "关于", cv: "简历" },
    hero: ["AI", "技术", "产品", "研究"],
    intro: "我研究新兴技术如何成为可用的产品、可持续的商业模式与可分析的投资系统。",
    explore: "浏览精选项目",
    selected: "精选项目",
    areas: "研究方向",
    areasIntro: "连接模型能力、物理基础设施、产品体验与商业结果。",
    areaList: ["AI 智能体", "AI 基础设施", "半导体生态", "技术产品", "科技投资"],
    bioTitle: "跨越定量分析、产品与技术叙事。",
    bio: "数学与金融训练塑造了我的系统性分析方法；LLM 产品实践和 AI 基础设施研究让我持续追问：一项技术如何从能力演示，走向真实部署、商业采用与经济回报。",
    aboutLink: "了解我的经历",
    status: "现居曼彻斯特 · 面向 2026–2027 届机会",
    contact: "联系",
    footerNote: "AI · Technology · Product · Research",
  },
  en: {
    nav: { work: "Work", about: "About", cv: "CV" },
    hero: ["AI", "Technology", "Product", "Research"],
    intro: "I study how emerging technologies become usable products, durable businesses and investable systems.",
    explore: "View selected work",
    selected: "Selected work",
    areas: "Areas I explore",
    areasIntro: "Connecting model capability, physical infrastructure, product experience and business outcomes.",
    areaList: ["AI Agents", "AI Infrastructure", "Semiconductor Ecosystems", "Technology Products", "Technology Investing"],
    bioTitle: "Working across quantitative analysis, product and technology narratives.",
    bio: "Mathematics and finance shaped how I reason about systems. Work with LLM products and AI infrastructure research led me to a recurring question: how does a technical capability become a deployed product, commercial adoption and economic value?",
    aboutLink: "More about my background",
    status: "Manchester, UK · Open to 2026–2027 opportunities",
    contact: "Contact",
    footerNote: "AI · Technology · Product · Research",
  },
} as const;

export const projects = {
  zh: [
    { slug: "agentready", title: "AgentReady", type: "AI 产品", status: "开发中", description: "评估企业是否已准备好与自主 AI 智能体交互的诊断框架与产品。" },
    { slug: "ai-infrastructure-intelligence", title: "AI Infrastructure Intelligence", type: "技术研究", status: "进行中", description: "从电力、算力部署到收入确认，研究 AI 基础设施的经济链条。" },
    { slug: "iren-research", title: "IREN Research", type: "投资研究", status: "案例研究", description: "研究 IREN 从比特币挖矿基础设施向 AI / HPC 转型的执行逻辑。" },
    { slug: "last-twelve-weeks", title: "末日基地：最后十二周", type: "LLM 产品实验", status: "原型", description: "围绕记忆、状态与分支叙事设计的多轮 AI 互动故事。" },
    { slug: "bayesian-influenza-modelling", title: "Bayesian Influenza Modelling", type: "定量研究", status: "学术项目", description: "使用 Stan 与 R 分析 1918–1919 年流感大流行前后的死亡动态。" },
  ],
  en: [
    { slug: "agentready", title: "AgentReady", type: "AI Product", status: "In progress", description: "A diagnostic framework for assessing whether businesses are ready to interact with autonomous AI agents." },
    { slug: "ai-infrastructure-intelligence", title: "AI Infrastructure Intelligence", type: "Technology Research", status: "Active", description: "Mapping the economic chain from power and compute deployment to recognised revenue." },
    { slug: "iren-research", title: "IREN Research", type: "Investment Research", status: "Case study", description: "An execution-focused view of IREN’s transition from Bitcoin mining infrastructure to AI / HPC." },
    { slug: "last-twelve-weeks", title: "The Last Twelve Weeks", type: "LLM Product Experiment", status: "Prototype", description: "A multi-turn interactive narrative exploring memory, state and branching story design." },
    { slug: "bayesian-influenza-modelling", title: "Bayesian Influenza Modelling", type: "Quantitative Research", status: "Academic", description: "Modelling influenza mortality dynamics around the 1918–1919 pandemic using Stan and R." },
  ],
} as const;

export function prefix(locale: Locale) {
  return locale === "en" ? "/en" : "";
}
