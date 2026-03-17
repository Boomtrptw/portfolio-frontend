import Sidebar from "@/components/Sidebar";
import ProjectCard from "@/components/ProjectCard";
import { Briefcase, GraduationCap, Code2, Wrench, Terminal } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-[#09090b] font-sans text-zinc-900 dark:text-zinc-100">
      <Sidebar />

      <main className="flex-1 sm:ml-64 p-6 md:p-12">
        {/* --- Header Section --- */}
        <header className="mb-12">
          <h1 className="text-4xl font-black tracking-tight mb-2">
            Theerapong <span className="text-blue-600">(Boom)</span>
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">
            Full Stack Developer | Specialist in Industrial & Backend Solutions
          </p>
        </header>

        {/* --- Stats Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <StatCard label="Experience" value="2+ Years" detail="Full-time & Internship" />
          <StatCard label="Core Tech" value="JavaScript/TypeScript" detail="Multi-stack Developer" />
          <StatCard label="Education" value="B.Eng" detail="Computer Engineering" />
        </div>

        {/* --- Experience Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="text-blue-500" /> Work & Internship
            </h2>
            <div className="space-y-10 border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 pl-8">
              <ExperienceItem
                title="Full Stack Developer"
                company="A&P Maintenance Services Thailand"
                date="Aug 2025 - Present (8 months)"
                desc="Building field survey systems and automated reporting tools to optimize maintenance workflows."
              />
              <ExperienceItem
                title="Software Developer"
                company="VR Intelligence"
                date="Mar 2024 - Jul 2025 (1 year 5 months)"
                desc="Developed Production Control Board (PCB) systems for real-time manufacturing data visualization."
              />
              <ExperienceItem
                title="Backend Developer (Internship)"
                company="Going Jess"
                date="Apr 2022 - Jun 2022 (3 months)"
                desc="Focused on server-side logic and database management using FastAPI and optimized SQL queries."
                isIntern
              />
            </div>
          </div>

          {/* --- Education & Skills --- */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="text-blue-500" /> Education
              </h2>
              <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <h4 className="font-bold text-lg text-blue-600 dark:text-blue-400 text-[16px]">Rattanabundit University (RBAC)</h4>
                <p className="font-medium mt-1 text-sm italic">B.Eng. Computer and Information Engineering</p>
                <p className="text-xs text-zinc-500 mt-1">Class of 2020 - 2023</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Wrench className="text-blue-500" /> Technical Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "NextJS", "ReactJS", "NodeJS", "FastAPI", "C#.NET (MVC)",
                  "SQL Server", "MySQL", "MongoDB", "Git", "Postman"
                ].map((s) => (
                  <span key={s} className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg text-xs font-bold border border-blue-100 dark:border-blue-900/30">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Terminal className="text-blue-500" /> Soft Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {["Teamwork", "Agile", "Communication"].map((s) => (
                  <span key={s} className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-xs font-bold">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// --- Sub-components ---
function StatCard({ label, value, detail }) {
  return (
    <div className="p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2rem] shadow-sm">
      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-2">{label}</p>
      <h3 className="text-3xl font-black tracking-tight">{value}</h3>
      <p className="text-sm text-zinc-500 mt-1 font-medium">{detail}</p>
    </div>
  );
}

function ExperienceItem({ title, company, date, desc, isIntern }) {
  return (
    <div className="relative group">
      <div className={`absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-4 border-zinc-50 dark:border-black transition-transform ${isIntern ? 'bg-zinc-400' : 'bg-blue-600 group-hover:scale-125'}`} />
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-tight">{company}</p>
      <p className="text-[10px] text-zinc-400 mt-1 font-mono uppercase">{date}</p>
      <p className="text-zinc-500 dark:text-zinc-400 mt-3 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}