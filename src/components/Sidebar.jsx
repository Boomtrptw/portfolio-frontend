"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Briefcase, Cpu, ChevronLeft, ChevronRight, User } from "lucide-react";

export default function Sidebar({ isCollapsed, setIsCollapsed }) {
    const pathname = usePathname();

    const menuItems = [
        { name: "Overview", href: "/", icon: LayoutDashboard },
        { name: "Projects", href: "/projects", icon: Briefcase },
        { name: "Tech Stack", href: "/tech", icon: Cpu },
        { name: "About", href: "/about", icon: User },
    ];

    return (
        <aside className={`fixed left-0 top-0 h-full border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black transition-all duration-300 z-50 hidden sm:flex flex-col ${isCollapsed ? "w-20 px-3 py-6" : "w-64 p-6"
            }`}>

            {/* Toggle Button - ปรับตำแหน่งให้กึ่งกลางเส้นขอบพอดี */}
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="absolute -right-3 top-24 bg-blue-600 text-white rounded-full p-1 border border-white dark:border-zinc-900 hover:scale-110 transition-all shadow-lg z-50"
            >
                {isCollapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
            </button>

            {/* --- Logo / Name --- */}
            <div className={`flex items-center gap-3 mb-10 transition-all ${isCollapsed ? "justify-center" : "px-2"}`}>
                <div className="h-9 w-9 shrink-0 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">
                    B
                </div>
                {!isCollapsed && (
                    <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white italic uppercase animate-in fade-in slide-in-from-left-2 duration-300">
                        Boomtrptw
                    </span>
                )}
            </div>

            {/* --- Navigation Menu --- */}
            <nav className="flex-1 space-y-3">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`group flex items-center transition-all duration-300 ${isCollapsed ? "justify-center px-0 py-3" : "gap-3 px-4 py-3"
                                } text-sm font-bold rounded-xl ${isActive
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                                    : "text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                                }`}
                        >
                            <item.icon size={20} className="shrink-0 transition-transform group-hover:scale-110" />
                            {!isCollapsed && (
                                <span className="uppercase italic tracking-tight animate-in fade-in slide-in-from-left-2 duration-300">
                                    {item.name}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* --- Footer --- */}
            <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
                <div className={`text-[10px] text-zinc-400 uppercase font-black tabular-nums text-center ${isCollapsed ? "animate-in fade-in duration-300" : ""
                    }`}>
                    {isCollapsed ? (
                        // ตอนหุบ: ขึ้นบรรทัดใหม่ระหว่างปีกับเครื่องหมาย © เพื่อความสมดุล
                        <>
                            ©<br />2026
                        </>
                    ) : (
                        // ตอนกาง: ขึ้นบรรทัดใหม่ All rights reserved. ตามที่คุณบูมต้องการ
                        <>
                            © 2026 Boomtrptw.<br />
                            <span className="text-[9px] font-bold text-zinc-500 mt-1 block">
                                All rights reserved.
                            </span>
                        </>
                    )}
                </div>
            </div>
        </aside>
    );
}