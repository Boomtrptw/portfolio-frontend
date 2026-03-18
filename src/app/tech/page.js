"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function TechStack() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    // เปลี่ยนจาก Mock Data เป็น State ว่างๆ
    const [techGroups, setTechGroups] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTechStack = async () => {
            try {
                // ดึงค่า URL จาก env
                const apiUrl = process.env.NEXT_PUBLIC_API_URL;
                const res = await fetch(`${apiUrl}/tech-stack`);
                const result = await res.json();

                if (result.status === "success") {
                    setTechGroups(result.data);
                }
            } catch (error) {
                console.error("Failed to fetch tech stack:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTechStack();
    }, []);

    return (
        <div className="flex min-h-screen bg-zinc-50 dark:bg-[#09090b] font-sans transition-colors duration-300 overflow-x-hidden">
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

            <div className={`flex-1 flex flex-col transition-all duration-300 ${isCollapsed ? "sm:ml-20" : "sm:ml-64"}`}>
                <Navbar isCollapsed={isCollapsed} />

                <main className="flex-1 p-6 md:p-12 pt-28 md:pt-32 w-full max-w-[1600px] mx-auto text-zinc-900 dark:text-zinc-100 transition-all">
                    <header className="mb-16 border-b border-zinc-900/10 dark:border-zinc-800 pb-10">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 italic uppercase leading-none">
                            TECHNICAL <span className="text-blue-600">SKILLS</span>
                        </h1>
                        <p className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl font-medium max-w-3xl leading-relaxed italic">
                            รวบรวมทักษะทางเทคนิคที่ใช้งานจริงในการพัฒนาซอฟต์แวร์ ทั้งฝั่ง Frontend และ Backend (Fetched from MongoDB)
                        </p>
                    </header>

                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                        </div>
                    ) : (
                        <div className="space-y-24">
                            {techGroups.map((group) => (
                                <section key={group._id}>
                                    <div className="mb-10 border-l-8 border-blue-600 pl-6">
                                        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic dark:text-white leading-none">
                                            {group.title}
                                        </h2>
                                        <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base mt-2 font-black uppercase tracking-widest opacity-70">
                                            {group.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                                        {group.skills.map((skill, index) => (
                                            <div
                                                key={index}
                                                className="group p-6 md:p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl transition-all duration-500 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col items-center gap-4 md:gap-6"
                                            >
                                                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-zinc-50 dark:bg-zinc-800/50 rounded-xl transition-transform group-hover:scale-110">
                                                    <img
                                                        src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${skill.icon}.svg`}
                                                        className={`w-10 h-10 md:w-12 md:h-12 ${skill.icon === 'nextdotjs' ? 'dark:invert' : ''}`}
                                                        alt={skill.name}
                                                        onError={(e) => { e.target.src = "https://www.svgrepo.com/show/452184/code.svg" }} // กรณีไอคอนโหลดไม่ติด
                                                    />
                                                </div>
                                                <span className="text-[10px] md:text-[12px] font-black text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.2em] text-center group-hover:text-blue-600 transition-colors">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </div>
                    )}

                    <div className="mt-24 pt-12 border-t border-zinc-200 dark:border-zinc-800 text-center">
                        <p className="text-[10px] md:text-[12px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.5em] italic">
                            Continuously Learning & Improving
                        </p>
                    </div>
                </main>
            </div>
        </div>
    );
}