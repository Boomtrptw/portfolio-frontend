"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { Briefcase, GraduationCap, Wrench, Terminal } from "lucide-react";

export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-[#09090b] font-sans text-zinc-900 dark:text-zinc-100 transition-all duration-300">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div className={`flex-1 flex flex-col transition-all duration-300 ${isCollapsed ? "sm:ml-20" : "sm:ml-64"}`}>
        <Navbar isCollapsed={isCollapsed} />

        <main className="flex-1 p-6 md:p-12 pt-24 md:pt-28 w-full transition-all duration-300">
          {/* Header Section - ปรับขนาดให้พอดี ไม่ใหญ่เกินไป */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-3 uppercase italic">
              Theerapong <span className="text-blue-600">(Boom)</span>
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-base md:text-lg font-medium max-w-2xl leading-relaxed">
              Full Stack Developer | Specialist in Industrial & Backend Solutions
            </p>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <StatCard label="Experience" value="2+ Years" detail="Full-time & Internship" />
            <StatCard label="Core Tech" value="JS / TS" detail="Modern Web Development" />
            <StatCard label="Education" value="B.Eng" detail="Computer Engineering" />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-black mb-10 flex items-center gap-3 italic uppercase tracking-tight">
                <Briefcase className="text-blue-600" size={24} /> Work & Internship
              </h2>
              <div className="space-y-12 border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 pl-8">
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

            <div className="lg:col-span-5 space-y-12">
              <section>
                <h2 className="text-2xl font-black mb-8 flex items-center gap-3 italic uppercase tracking-tight">
                  <GraduationCap className="text-blue-600" size={24} /> Education
                </h2>
                <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm border-b-4 border-b-blue-600 transition-all hover:scale-[1.02]">
                  <h4 className="font-black text-lg text-zinc-900 dark:text-white uppercase italic leading-tight">Rattanabundit University (RBAC)</h4>
                  <p className="font-black mt-2 text-sm text-blue-600 italic tracking-widest uppercase">B.Eng. Computer Engineering</p>
                  <p className="text-[10px] font-black text-zinc-400 mt-2 uppercase tracking-widest">Class of 2020 - 2023</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-black mb-6 flex items-center gap-3 italic uppercase tracking-tight">
                  <Wrench className="text-blue-600" size={24} /> Technical Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {["NextJS", "ReactJS", "NodeJS", "FastAPI", "C#.NET (MVC)", "SQL Server", "MySQL", "MongoDB", "Git", "Postman"].map((s) => (
                    <span key={s} className="px-3 py-1.5 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded-lg text-[10px] font-black uppercase tracking-tight border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 transition-colors">
                      {s}
                    </span>
                  ))}
                </div>
              </section>

              {/* คืนค่า Soft Skills ที่หายไปกลับมาตรงนี้ครับ */}
              <section>
                <h2 className="text-2xl font-black mb-6 flex items-center gap-3 italic uppercase tracking-tight">
                  <Terminal className="text-blue-600" size={24} /> Soft Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {["Teamwork", "Agile", "Communication"].map((s) => (
                    <span key={s} className="px-3 py-1.5 bg-zinc-900 dark:bg-blue-600 text-white rounded-lg text-[10px] font-black uppercase tracking-widest italic">
                      {s}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function StatCard({ label, value, detail }) {
  return (
    <div className="p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm transition-all hover:border-blue-500/50 group">
      <p className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em] mb-3 group-hover:text-blue-600 transition-colors">
        {label}
      </p>
      <h3 className="text-xl md:text-2xl font-black tracking-tight dark:text-white break-words leading-tight italic uppercase">
        {value}
      </h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 font-medium">
        {detail}
      </p>
    </div>
  );
}

function ExperienceItem({ title, company, date, desc, isIntern }) {
  return (
    <div className="relative group">
      <div className={`absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-4 border-zinc-50 dark:border-[#09090b] transition-all duration-300 ${isIntern
        ? 'bg-zinc-300 dark:bg-zinc-700'
        : 'bg-blue-600 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]'
        }`} />
      <h4 className="text-xl font-black uppercase italic tracking-tight dark:text-white">{title}</h4>
      <p className="text-blue-600 dark:text-blue-400 font-black text-xs uppercase tracking-widest mt-1">{company}</p>
      <p className="text-[10px] text-zinc-400 dark:text-zinc-500 mt-2 font-black uppercase tracking-widest">{date}</p>
      <p className="text-zinc-500 dark:text-zinc-400 mt-4 leading-relaxed text-sm font-medium">{desc}</p>
    </div>
  );
}