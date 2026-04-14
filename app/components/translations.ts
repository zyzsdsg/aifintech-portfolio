export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      title: "Theo Zhang",
      subtitle: "Finance PhD Candidate @ University of Otago | CFA Charterholder | ML Researcher",
      bio: "Specializing in the intersection of deep finance domain expertise and advanced machine learning. Currently focused on AI-driven financial risk management.",
      cta1: "View Projects",
      cta2: "Contact"
    },
    skills: {
      title: "Skills & Expertise",
      ds: "Data Science",
      ai: "AI Engineering",
      fin: "Finance",
      dsList: ["Python", "XGBoost", "scikit-learn", "Pandas", "Statistical Modeling"],
      aiList: ["LangChain", "RAG", "Claude API", "pgvector", "FastAPI"],
      finList: ["CFA", "VIX Forecasting", "Derivatives", "Risk Modeling", "Econometrics"]
    },
    projects: {
      title: "Selected Work",
      p1: {
        category: "FINTECH SOLUTIONS",
        title: "NZX Risk Dashboard",
        desc: "Real-time risk monitoring for NZX using rolling volatility and VaR models.",
        tech: ["FastAPI", "PostgreSQL", "React"]
      },
      p2: {
        category: "MACHINE LEARNING",
        title: "Volatility Forecasting",
        desc: "HAR + XGBoost models with SHAP analysis and Clark-West validation.",
        tech: ["Python", "XGBoost", "SHAP"]
      },
      p3: {
        category: "AI APPLICATIONS",
        title: "Financial RAG Q&A",
        desc: "Knowledge retrieval system for financial docs using LangChain and Claude.",
        tech: ["LangChain", "pgvector", "Claude API"]
      },
      view: "View on GitHub"
    },
    contact: {
      title: "Get in Touch",
      email: "Email",
      github: "GitHub",
      location: "Dunedin, New Zealand",
      tagline: "Currently open to Data Science and AI Engineering roles in NZ financial sector."
    }
  },
  zh: {
    nav: {
      about: "关于",
      skills: "技能",
      projects: "项目",
      contact: "联系"
    },
    hero: {
      title: "张宇哲",
      subtitle: "奥塔哥大学金融学博士 | CFA持证人 | 机器学习研究员",
      bio: "专注于金融领域深度专业知识与机器学习的交叉应用，致力于开发面向金融风险管理与波动率预测的AI解决方案。",
      cta1: "查看项目",
      cta2: "联系我"
    },
    skills: {
      title: "技能与专业知识",
      ds: "数据科学",
      ai: "AI工程",
      fin: "金融领域",
      dsList: ["Python", "XGBoost", "scikit-learn", "Pandas", "统计建模"],
      aiList: ["LangChain", "RAG", "Claude API", "pgvector", "FastAPI"],
      finList: ["CFA", "VIX预测", "衍生品", "风险建模", "计量经济学"]
    },
    projects: {
      title: "精选项目",
      p1: {
        category: "金融科技方案",
        title: "NZX 风险看板",
        desc: "基于滚动波动率和VaR模型的NZX实时风险监控系统。",
        tech: ["FastAPI", "PostgreSQL", "React"]
      },
      p2: {
        category: "机器学习研究",
        title: "波动率预测",
        desc: "结合HAR与XGBoost模型，应用SHAP分析与Clark-West检验。",
        tech: ["Python", "XGBoost", "SHAP"]
      },
      p3: {
        category: "AI 应用",
        title: "金融 RAG 问答",
        desc: "使用 LangChain 和 Claude API 构建的金融文档知识检索系统。",
        tech: ["LangChain", "pgvector", "Claude API"]
      },
      view: "查看 GitHub"
    },
    contact: {
      title: "联系方式",
      email: "电子邮件",
      github: "GitHub",
      location: "新西兰, 达尼丁",
      tagline: "目前正在寻求新西兰金融机构的数据科学与 AI 工程师职位。"
    }
  }
} as const;

export type Lang = 'en' | 'zh';
export type Translations = typeof translations;