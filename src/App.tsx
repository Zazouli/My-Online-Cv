import React from 'react';
import { motion } from "motion/react";
import { 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Code2, 
  Briefcase, 
  GraduationCap,
  Layers,
  Sun,
  Moon,
  Terminal,
  Zap,
  Globe
} from "lucide-react";

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  isDark: boolean;
  key?: React.Key;
}

const Section = ({ title, icon: Icon, children, id, isDark }: { title: string, icon: React.ElementType, children: React.ReactNode, id?: string, isDark: boolean }) => (
  <section id={id} className={`py-20 md:py-32 border-b transition-colors duration-500 ${isDark ? 'border-white/[0.04]' : 'border-zinc-100'}`}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center gap-4 mb-16">
        <div className={`w-10 h-10 flex items-center justify-center rounded-xl border transition-all ${isDark ? 'bg-white/[0.02] border-white/[0.08]' : 'bg-zinc-50 border-zinc-200'}`}>
          <Icon className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
        </div>
        <h2 className={`text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>{title}</h2>
      </div>
      {children}
    </motion.div>
  </section>
);

const ExperienceCard = ({ role, company, period, highlights, isDark }: ExperienceCardProps) => (
  <div className="group relative pl-10 pb-16 last:pb-0">
    <div className={`absolute left-0 top-0 bottom-0 w-px transition-colors ${isDark ? 'bg-white/[0.08]' : 'bg-zinc-200'} group-last:bg-transparent`}>
      <div className={`absolute top-2 -left-[6px] w-3 h-3 rounded-full border-2 transition-all duration-500 shadow-[0_0_15px_rgba(59,130,246,0)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] ${isDark ? 'bg-zinc-900 border-white/20 group-hover:border-blue-400 group-hover:bg-blue-400' : 'bg-white border-zinc-300 group-hover:border-blue-500 group-hover:bg-blue-500'}`} />
    </div>
    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
      <div>
        <h3 className={`text-2xl font-bold tracking-tight mb-1 transition-colors ${isDark ? 'text-white group-hover:text-blue-400' : 'text-zinc-900 group-hover:text-blue-600'}`}>{role}</h3>
        <p className={`font-semibold text-lg ${isDark ? 'text-white/40' : 'text-zinc-500'}`}>{company}</p>
      </div>
      <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border transition-all ${isDark ? 'text-white/40 bg-white/[0.02] border-white/[0.05] group-hover:border-blue-500/30' : 'text-zinc-500 bg-zinc-50 border-zinc-200 group-hover:border-blue-500/30'}`}>
        {period}
      </span>
    </div>
    <ul className="space-y-4">
      {highlights.map((item, idx) => (
        <li key={idx} className={`flex gap-4 leading-relaxed transition-colors ${isDark ? 'text-white/50 group-hover:text-white/80' : 'text-zinc-500 group-hover:text-zinc-800'}`}>
          <div className={`mt-2.5 w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${isDark ? 'bg-white/10 group-hover:bg-blue-400/40' : 'bg-zinc-200 group-hover:bg-blue-500/30'}`} />
          <span className="text-base font-medium">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SkillBadge = ({ name, isDark }: { name: string, isDark: boolean, key?: React.Key }) => (
  <div className={`px-5 py-2.5 border-2 rounded-2xl text-sm font-bold tracking-wide transition-all duration-300 hover:-translate-y-1 ${isDark ? 'bg-white/[0.02] border-white/[0.05] text-white/50 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/5' : 'bg-white border-zinc-100 text-zinc-500 hover:text-blue-600 hover:border-blue-500/30 hover:shadow-xl shadow-sm'}`}>
    {name}
  </div>
);

export default function App() {
  const [isDark, setIsDark] = React.useState(true);

  const skills = [
    "C#", ".NET 8", "ASP.NET Core", "TypeScript", "Angular", 
    "React (Active Learning)", "REST APIs", "Azure Cloud Services", 
    "GitHub Actions", "Docker", "ARM Templates", "CI/CD (Azure DevOps)", 
    "RabbitMQ", "SQL & Google BigQuery", "Unit & Integration Testing", 
    "System Observability", "Clean Architecture", "Linux Automation"
  ];

  const coreExpertise = [
    {
      title: "Event-Driven & Async Backend",
      description: "Significant experience architecting RabbitMQ message brokers and asynchronous communication strategies to build fault-tolerant, high-load backend systems."
    },
    {
      title: "Infrastructure & Deployment",
      description: "Deep proficiency in Azure environments, optimizing CI/CD pipelines, and writing ARM templates for scalable cloud infrastructure."
    },
    {
      title: "Full-Cycle Product Engineering",
      description: "Full-cycle ownership of software features from design through implementation and production support, with a strict focus on maintainability."
    }
  ];

  const experience = [
    {
      role: "Software Engineer",
      company: "Visma-Plandisc",
      period: "2021 — PRESENT",
      highlights: [
        "Core member of the engineering team responsible for a large-scale SaaS planning platform used daily by enterprise customers.",
        "Improved Azure-based CI/CD pipelines, reducing production release friction and ensuring high deployment reliability.",
        "Refactored critical legacy components and strengthened system observability through improved logging and monitoring.",
        "Designed and implemented secure service integrations with major 3rd-party platforms and internal enterprise APIs.",
        "Contributed to AI adoption initiatives and exploratory proof-of-concepts for internal workflow improvement."
      ]
    },
    {
      role: "Freelance Software Engineer",
      company: "Plandisc",
      period: "2020 — 2021",
      highlights: [
        "Built custom ETL pipelines consolidating API data from Facebook and Zendesk into unified Google BigQuery warehouses.",
        "Automated deployment and monitoring workflows for analytics solutions, improving long-term maintenance cycles.",
        "Led project feasibility studies and independent delivery of full-stack reporting modules."
      ]
    }
  ];

  const languages = [
    { name: "English", level: "Fluent / Professional" },
    { name: "French", level: "Professional" }
  ];

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-all duration-700 ${isDark ? 'bg-[#0a0a0a] text-white' : 'bg-[#fcfcfc] text-zinc-900'} selection:bg-blue-500 selection:text-white font-sans antialiased overflow-x-hidden`}>
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className={`absolute top-0 right-0 w-[60%] h-[60%] blur-[160px] rounded-full transition-colors duration-1000 ${isDark ? 'bg-blue-600/5' : 'bg-blue-600/10'}`} />
        <div className={`absolute bottom-0 left-0 w-[60%] h-[60%] blur-[160px] rounded-full transition-colors duration-1000 ${isDark ? 'bg-indigo-600/5' : 'bg-indigo-600/10'}`} />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      <nav className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b transition-all duration-500 ${isDark ? 'bg-black/60 border-white/[0.05]' : 'bg-white/60 border-zinc-200'}`}>
        <div className="max-w-5xl mx-auto px-8 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`font-bold text-lg tracking-tighter transition-colors ${isDark ? 'text-white' : 'text-black'}`}
          >
            OUSSAMA<span className="text-blue-500">.</span>ZAZOULI
          </motion.div>
          
          <div className="flex items-center gap-10">
            <div className={`hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.25em] ${isDark ? 'text-white/40' : 'text-zinc-400'}`}>
              <a href="#about" className="hover:text-blue-500 transition-colors">Summary</a>
              <a href="#expertise" className="hover:text-blue-500 transition-colors">Focus</a>
              <a href="#experience" className="hover:text-blue-500 transition-colors">History</a>
              <a href="#skills" className="hover:text-blue-500 transition-colors">Stack</a>
            </div>
            <button 
              onClick={() => setIsDark(!isDark)}
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all hover:scale-110 active:scale-95 ${isDark ? 'border-white/10 bg-white/5 text-yellow-400' : 'border-zinc-200 bg-white text-blue-600 shadow-sm'}`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-8 pt-40 pb-40">
        <section id="about" className="mb-48">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className={`text-[11px] font-bold tracking-[0.3em] uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>Aarhus, Denmark</span>
              </div>
              
              <h1 className={`text-6xl md:text-9xl font-bold tracking-tighter mb-12 leading-[0.85] ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                Oussama <br className="hidden md:block" /> 
                <span className={`transition-colors ${isDark ? 'text-blue-500' : 'text-blue-600'}`}>Zazouli</span>
              </h1>
              
              <p className={`text-xl md:text-3xl font-medium mb-16 leading-tight transition-colors ${isDark ? 'text-white/60' : 'text-zinc-500'}`}>
                Full-stack engineer with deep expertise in .NET, Angular, and Azure Cloud infrastructure. Currently expanding my front-end capabilities with React.
              </p>
              
              <div className="flex flex-wrap gap-6 items-center">
                <a href="mailto:oussamazazouli@gmail.com" className={`px-10 py-5 rounded-2xl font-bold text-base tracking-tight transition-all hover:-translate-y-1 active:translate-y-0 shadow-2xl ${isDark ? 'bg-white text-black hover:bg-zinc-200' : 'bg-zinc-900 text-white hover:bg-black'}`}>
                  Get in touch
                </a>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/oussama-zazouli-ab9371104" target="_blank" rel="noopener noreferrer" className={`w-14 h-14 flex items-center justify-center rounded-2xl border-2 transition-all hover:-translate-y-1 ${isDark ? 'border-white/10 bg-white/5 hover:bg-white/10 text-white' : 'border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900'}`}>
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="tel:+4536666512" className={`w-14 h-14 flex items-center justify-center rounded-2xl border-2 transition-all hover:-translate-y-1 ${isDark ? 'border-white/10 bg-white/5 hover:bg-white/10 text-white' : 'border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900'}`}>
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Section title="Professional Focus" icon={Terminal} id="expertise" isDark={isDark}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreExpertise.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`p-10 rounded-[2.5rem] border-2 transition-all group ${isDark ? 'bg-white/[0.02] border-white/[0.05] hover:border-blue-500/20' : 'bg-white border-zinc-100 hover:border-blue-500/30'}`}
              >
                <div className="flex flex-col gap-8">
                  <div className="flex justify-between items-start">
                    <Zap className={`w-8 h-8 ${isDark ? 'text-blue-500/40' : 'text-blue-600/40'}`} />
                  </div>
                  <div className="space-y-4">
                    <h3 className={`text-xl font-bold leading-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>{item.title}</h3>
                    <p className={`text-base font-medium leading-relaxed transition-colors ${isDark ? 'text-white/40 group-hover:text-white/60' : 'text-zinc-500 group-hover:text-zinc-700'}`}>{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section title="Professional Experience" icon={Briefcase} id="experience" isDark={isDark}>
          <div className="max-w-3xl">
            {experience.map((exp, idx) => (
              <ExperienceCard key={idx} {...exp} isDark={isDark} />
            ))}
          </div>
        </Section>

        <Section title="Technical Proficiency" icon={Code2} id="skills" isDark={isDark}>
          <div className="flex flex-wrap gap-4 max-w-4xl">
            {skills.map((skill, idx) => (
              <SkillBadge key={idx} name={skill} isDark={isDark} />
            ))}
          </div>
        </Section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Section title="Academic Foundation" icon={GraduationCap} isDark={isDark}>
            <div className="space-y-12">
              <div className="group">
                <h3 className={`text-2xl font-bold mb-3 transition-colors ${isDark ? 'text-white group-hover:text-blue-400' : 'text-zinc-900 group-hover:text-blue-600'}`}>Supmir</h3>
                <p className={`text-sm font-bold uppercase tracking-[0.2em] mb-2 ${isDark ? 'text-blue-500' : 'text-blue-600'}`}>Web Dev, Full Stack & DevOps</p>
                <span className="text-xs font-mono opacity-30 tracking-widest leading-none">CLASS OF 2024</span>
              </div>
              <div className="group">
                <h3 className={`text-2xl font-bold mb-3 transition-colors ${isDark ? 'text-white group-hover:text-blue-400' : 'text-zinc-900 group-hover:text-blue-600'}`}>University of Science & Tech</h3>
                <p className={`text-sm font-bold uppercase tracking-[0.2em] mb-2 ${isDark ? 'text-blue-500' : 'text-blue-600'}`}>Electronics & Telecom</p>
                <span className="text-xs font-mono opacity-30 tracking-widest leading-none">CLASS OF 2015</span>
              </div>
            </div>
          </Section>
          <Section title="Communication" icon={Globe} isDark={isDark}>
            <div className="space-y-8">
              {languages.map((lang, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>{lang.name}</span>
                  <div className="flex gap-1.5">
                    {[1,2,3,4,5].map(i => (
                      <div key={i} className={`w-8 h-1.5 rounded-full transition-colors ${i <= 4 ? 'bg-blue-500' : isDark ? 'bg-white/10' : 'bg-zinc-200'}`} />
                    ))}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-white/30' : 'text-zinc-400'}`}>{lang.level}</span>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <footer className={`mt-64 pt-24 border-t transition-colors ${isDark ? 'border-white/[0.05]' : 'border-zinc-100'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className={`font-bold tracking-tighter ${isDark ? 'text-white' : 'text-black'}`}>
              OUSSAMA ZAZOULI <span className="text-blue-500">2026</span>
            </div>
            <p className={`text-[10px] font-bold uppercase tracking-[0.4em] ${isDark ? 'text-white/20' : 'text-zinc-400'}`}>
              Online Curriculum Vitae &middot; Aarhus, DK
            </p>
            <div className="flex gap-8">
              <a href="https://linkedin.com/in/oussama-zazouli-ab9371104" target="_blank" rel="noopener noreferrer" className={`text-[11px] font-bold uppercase tracking-widest hover:text-blue-500 transition-colors ${isDark ? 'text-white/40' : 'text-zinc-400'}`}>LinkedIn</a>
              <a href="mailto:oussamazazouli@gmail.com" className={`text-[11px] font-bold uppercase tracking-widest hover:text-blue-500 transition-colors ${isDark ? 'text-white/40' : 'text-zinc-400'}`}>Email</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
