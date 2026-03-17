"use client";

import Sidebar from "@/components/Sidebar";

export default function TechStack() {
    const techGroups = [
        {
            title: "Frontend Development",
            description: "เชี่ยวชาญการสร้าง User Interface ที่ทันสมัยและรองรับทุกหน้าจอ",
            skills: [
                { name: "NextJS", icon: "nextdotjs" },
                { name: "ReactJS", icon: "react" },
                { name: "Tailwind CSS", icon: "tailwindcss" },
                { name: "JavaScript", icon: "javascript" },
            ]
        },
        {
            title: "Backend & Systems",
            description: "จัดการระบบหลังบ้านและฐานข้อมูลสำหรับงานอุตสาหกรรม",
            skills: [
                { name: "NodeJS", icon: "nodedotjs" },
                { name: "FastAPI", icon: "fastapi" },
                { name: "C#.NET (MVC)", icon: "dotnet" },
                { name: "SQL Server", icon: "microsoftsqlserver" },
                { name: "MySQL", icon: "mysql" },
                { name: "MongoDB", icon: "mongodb" },
            ]
        },
        {
            title: "Development Tools",
            description: "เครื่องมือที่ใช้ในการพัฒนาและทดสอบระบบ",
            skills: [
                { name: "Git", icon: "git" },
                { name: "Postman", icon: "postman" },
            ]
        }
    ];

    return (
        <div className="flex min-h-screen bg-zinc-50 dark:bg-[#09090b] font-sans transition-colors duration-300">
            <Sidebar />

            <main className="flex-1 sm:ml-64 p-6 md:p-12 max-w-6xl text-zinc-900 dark:text-zinc-100">
                <header className="mb-16">
                    <h1 className="text-4xl font-black tracking-tight mb-4 italic uppercase">
                        TECHNICAL <span className="text-blue-600">SKILLS</span>
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl font-medium">
                        รวบรวมทักษะทางเทคนิคที่ใช้งานจริงในการพัฒนาซอฟต์แวร์ ทั้งฝั่ง Frontend และ Backend
                    </p>
                </header>

                <div className="space-y-20">
                    {techGroups.map((group) => (
                        <section key={group.title}>
                            <div className="mb-8 border-l-4 border-blue-600 pl-4">
                                <h2 className="text-2xl font-black uppercase tracking-tight italic dark:text-white">
                                    {group.title}
                                </h2>
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1 font-bold uppercase tracking-widest">
                                    {group.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                                {group.skills.map((skill) => (
                                    <div key={skill.name} className="group p-4 md:p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl md:rounded-3xl transition-all flex flex-col items-center gap-3 md:gap-4">
                                        <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-zinc-50 dark:bg-zinc-800/50 rounded-xl md:rounded-2xl">
                                            <img src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${skill.icon}.svg`} className={`w-8 h-8 md:w-10 md:h-10 ${skill.icon === 'nextdotjs' ? 'dark:invert' : ''}`} />
                                        </div>
                                        <span className="text-[9px] md:text-[10px] font-black text-zinc-500 dark:text-zinc-400 uppercase tracking-widest text-center">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* --- Footer Decoration --- */}
                <div className="mt-24 pt-12 border-t border-zinc-200 dark:border-zinc-800 text-center">
                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.5em] italic">
                        Continuously Learning & Improving
                    </p>
                </div>
            </main>
        </div>
    );
}