import { Component, Inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';

type ExperienceId = 'yieldwerx' | 'netsol' | 'gicoh' | 'techverx' | 'intern';
type AiProjectId = 'yield-ai-agent' | 'fintech-agent' | 'ml-portfolio' | 'chat-api-layer';

interface Experience {
  id: ExperienceId;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

interface AiProject {
  id: AiProjectId;
  name: string;
  domain: string;
  summary: string;
  impact: string;
  tech: string[];
  agenticAngle: string;
}

interface SkillCategory {
  name: string;
  keywords: string[];
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly title = signal('Syed Usama Naveed');
  readonly headline =
    'Full Stack .NET & Angular Engineer | Agentic AI & Machine Learning';
  readonly location = 'Lahore, Pakistan · Remote Friendly';
  readonly currentYear = new Date().getFullYear();

readonly summary =
  'Senior Full Stack .NET engineer with 5+ years delivering enterprise systems across FinTech, semiconductor analytics, and retail platforms. I design AI layers that sit on top of traditional APIs, enabling chat-driven workflows, intelligent automation, and decision support without replacing core backend systems. My work combines ASP.NET Core, Angular, SQL Server, and Python-based AI tooling (LangChain, ML pipelines) to transform rigid UI flows into conversational, context-aware experiences that integrate seamlessly with production architectures.';

  readonly experiences: Experience[] = [
    {
      id: 'yieldwerx',
      company: 'YieldWerx Semiconductor',
      role: 'Senior Software Engineer',
      period: 'Dec 2024 – Present',
      location: 'Lahore, Pakistan',
      summary:
        'Leading .NET-based semiconductor yield analysis systems with ML-driven analytics and interactive dashboards for high-volume manufacturing.',
           highlights: [
        'Designed complex yield dashboards with MS Chart Controls, defect maps, and trend analytics for wafer fabrication engineers.',
        'Optimized large-scale SQL queries and multi-threaded data processing for near real-time yield calculations.',
        'Integrated predictive yield models built in Python / ML frameworks into production .NET workflows.',
        'Built an AI middleware layer that converts engineer queries into structured API calls, enabling conversational access to yield datasets.',
        'Implemented chat-driven anomaly exploration where users request insights in natural language instead of navigating multi-step UI filters.',
        'Automated PDF/Excel reporting pipelines, cutting manual analysis time by ~30%.',
      ],

      stack: [
        '.NET Core',
        'C#',
        'WPF / WinForms',
        'MS Chart Controls',
        'SQL Server',
        'Entity Framework',
        'Python',
        'Machine Learning',
        'Agile / Scrum',
      ],
    },
    {
      id: 'netsol',
      company: 'Netsol Technologies',
      role: 'Software Engineer',
      period: 'Aug 2022 – Nov 2024',
      location: 'Lahore, Pakistan',
      summary:
        'Developed financial applications (including CMS and WPF-based modules) from scratch for global banking clients such as IKANO Bank.',
      highlights: [
        'Built a high-performance WPF application for financial workflows with rich, interactive UI/UX.',
        'Implemented robust data access using Entity Framework and optimized queries for financial datasets.',
        'Integrated external services and APIs to support end-to-end lending and CMS processes.',
      ],
      stack: [
        '.NET',
        'WPF',
        'C#',
        'Entity Framework',
        'SQL Server',
        'Microservices',
        'Python',
      ],
    },
    {
      id: 'gicoh',
      company: 'Gicoh',
      role: 'Software Engineer',
      period: 'Apr 2024 – Jan 2025',
      location: 'Lahore, Pakistan',
      summary:
        'Delivered an enterprise-grade accounting & inventory platform from scratch with deep data and reporting requirements.',
      highlights: [
        'Implemented accounting (ledger, reconciliations, automated tax) and inventory modules (real-time stock, procurement, barcodes).',
        'Built custom PDF/Excel reporting for audits, compliance, and leadership dashboards.',
        'Recovered 4+ years of missing ledger data by reverse-engineering SQL Server transactions.',
        'Designed RESTful .NET Core APIs consumed by Angular dashboards, improving data responsiveness by ~30%.',
      ],
      stack: [
        '.NET Core',
        'REST APIs',
        'Angular',
        'SQL Server',
        'Entity Framework',
        'Azure / AWS',
      ],
    },
    {
      id: 'techverx',
      company: 'Techverx',
      role: 'Associate Software Engineer',
      period: 'Nov 2021 – Aug 2022',
      location: 'Lahore, Pakistan',
      summary:
        'Focused on Django-based web applications and data-driven APIs, combining backend engineering with data analysis.',
      highlights: [
        'Built and maintained Django web apps with REST APIs.',
        'Used Python data libraries and ML models to drive data-informed features.',
        'Delivered NLP-based solutions including sentiment analysis and chatbots (Scikit-Learn, TensorFlow).',
      ],
      stack: ['Django', 'Python', 'REST APIs', 'NLP', 'TensorFlow', 'Scikit-Learn'],
    },
    {
      id: 'intern',
      company: 'Data Science Intern',
      role: 'Data Science Intern',
      period: 'Aug 2021 – Nov 2021',
      location: 'Pakistan',
      summary:
        'Hands-on work in web automation, scraping, and recommendation systems.',
      highlights: [
        'Automated LinkedIn workflows with Selenium bots and session management.',
        'Built HR automation and recommendation systems using SpaCy and NLP.',
        'Implemented machine learning-based recommendation engines.',
      ],
      stack: ['Python', 'Selenium', 'SpaCy', 'NLP', 'Recommendation Systems'],
    },
  ];

  readonly aiProjects: AiProject[] = [
    {
      id: 'yield-ai-agent',
      name: 'Semiconductor Yield Intelligence Agent',
      domain: 'Semiconductor Manufacturing · Agentic AI',
      summary:
        'An agentic AI system that assists process engineers by monitoring wafer test data, surfacing anomalies, and proposing probable root causes.',
      impact:
        'Reduced time-to-diagnose yield drops by guiding engineers to the most relevant defect patterns and process steps.',
      tech: [
        '.NET Core',
        'C#',
        'Python',
        'LangChain',
        'SQL Server',
        'ML models (classification / anomaly detection)',
      ],
      agenticAngle:
        'Orchestrated multiple specialized tools (data retrieval, feature generation, pattern search, and report drafting) into a single agent workflow that autonomously prepares a yield investigation brief.',
    },
    {
      id: 'fintech-agent',
      name: 'Financial Insights Co-Pilot',
      domain: 'FinTech · Lending & RMS',
      summary:
        'An AI co-pilot for financial analysts that explains portfolio movements, flags risky accounts, and drafts customer communication.',
      impact:
        'Helped stakeholders answer “why did this metric move?” by combining transactional data, CMS events, and ML scores into natural-language explanations.',
      tech: [
        'ASP.NET Core Web API',
        'Angular',
        'Python',
        'LangChain',
        'Vector DB',
        'SQL Server',
      ],
      agenticAngle:
        'Uses an agent to choose between tools (KPI explorer, anomaly detector, customer timeline fetcher, email template generator) and stitch them into an end-to-end analysis for each question.',
    },
    {
      id: 'ml-portfolio',
      name: 'ML Models Portfolio',
      domain: 'Machine Learning · Prediction & NLP',
      summary:
        'End-to-end ML implementations for laptop pricing, car pricing, stock prediction, and text classification use cases.',
      impact:
        'Delivered high-accuracy models (up to ~89%+) using the right algorithm for each problem and production-ready data pipelines.',
      tech: [
        'Python',
        'Pandas',
        'Scikit-Learn',
        'TensorFlow',
        'NLP',
        'Regression & Classification',
      ],
      agenticAngle:
        'Provides a library of ready-to-use tools that can be wrapped by higher-level agents for pricing, forecasting, and spam / resume classification.',
    },
    {
  id: 'chat-api-layer',
  name: 'Conversational API Orchestration Layer',
  domain: 'Enterprise Systems · AI Middleware',
  summary:
    'A production-minded AI layer that sits between Angular UI and .NET APIs, allowing users to interact through chat instead of traditional forms.',
  impact:
    'Reduced navigation complexity and enabled faster access to analytics by converting natural language queries into validated API workflows.',
  tech: [
    'Python',
    'LangChain',
    'FastAPI',
    'ASP.NET Core',
    'Angular',
    'SQL Server',
  ],
  agenticAngle:
    'An orchestrator agent selects tools such as API callers, data validators, and summarizers to execute multi-step workflows from a single user message.',
},

  ];

  readonly skillCategories: SkillCategory[] = [
    {
      name: '.NET & Backend',
      keywords: [
        'C#',
        '.NET Core',
        'ASP.NET Web API',
        'Microservices',
        'Entity Framework',
        'Windows Services',
        'SignalR',
        'WCF',
      ],
    },
    {
      name: 'Frontend & UX',
      keywords: [
        'Angular',
        'TypeScript',
        'Responsive UI',
        'WPF',
        'Interactive Dashboards',
      ],
    },
    {
      name: 'Data & Databases',
      keywords: [
        'SQL Server',
        'Query Optimization',
        'Stored Procedures',
        'ElasticSearch',
        'MySQL',
        'CockroachDB',
      ],
    },
   {
  name: 'AI, ML & Agentic Systems',
  keywords: [
    'Python',
    'LangChain',
    'LangGraph',
    'FastAPI',
    'Conversational AI',
    'AI Middleware',
    'Tool Orchestration',
    'Machine Learning',
    'NLP',
    'Production ML Integration',
    'Generative AI'
  ],
},

    {
      name: 'Cloud & DevOps',
      keywords: ['Azure', 'AWS', 'CI/CD', 'Git', 'Agile / Scrum'],
    },
  ];

  constructor(@Inject(DOCUMENT) private readonly documentRef: Document) {}

  readonly selectedExperienceId = signal<ExperienceId>('yieldwerx');
  readonly selectedAiProjectId = signal<AiProjectId>('yield-ai-agent');

  setExperience(id: ExperienceId): void {
    this.selectedExperienceId.set(id);
  }

  setAiProject(id: AiProjectId): void {
    this.selectedAiProjectId.set(id);
  }

  scrollTo(sectionId: string): void {
    const el = this.documentRef.getElementById(sectionId);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
