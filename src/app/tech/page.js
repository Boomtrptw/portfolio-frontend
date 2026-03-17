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
        <div className="flex min-h-screen bg-zinc-50 dark:bg-[#09090b] font-sans">
            <Sidebar />

            <main className="flex-1 sm:ml-64 p-6 md:p-12 max-w-6xl">
                <header className="mb-16">
                    <h1 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-white mb-4 italic">
                        TECHNICAL <span className="text-blue-600">SKILLS</span>
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl">
                        รวบรวมทักษะทางเทคนิคที่ใช้งานจริงในการพัฒนาซอฟต์แวร์ ทั้งฝั่ง Frontend และ Backend
                    </p>
                </header>

                <div className="space-y-16">
                    {techGroups.map((group) => (
                        <section key={group.title}>
                            <div className="mb-8 border-l-4 border-blue-600 pl-4">
                                <h2 className="text-2xl font-bold dark:text-white uppercase tracking-tight">{group.title}</h2>
                                <p className="text-zinc-500 text-sm mt-1">{group.description}</p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {group.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="group p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/5 flex flex-col items-center gap-4"
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center">
                                            <img
                                                src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${skill.icon}.svg`}
                                                alt={skill.name}
                                                className={`w-10 h-10 ${skill.icon === 'nextdotjs' ? 'dark:invert' : ''}`}
                                            />
                                        </div>
                                        <span className="text-xs font-black text-zinc-600 dark:text-zinc-400 group-hover:text-blue-600 transition-colors uppercase tracking-wider text-center">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    );
}