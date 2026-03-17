"use client"; // จำเป็นต้องใช้เพราะมีการเช็ค Path ปัจจุบัน
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import {
    LayoutDashboard,
    Briefcase,
    Cpu,
    Mail,
} from "lucide-react"; // แนะนำให้ลง npm install lucide-react

export default function Sidebar() {
    const pathname = usePathname();

    const menuItems = [
        { name: "Overview", href: "/", icon: LayoutDashboard },
        { name: "Projects", href: "/projects", icon: Briefcase },
        { name: "Tech Stack", href: "/tech", icon: Cpu },
        { name: "Contact", href: "/contact", icon: Mail },
    ];

    return (
        <aside className="fixed left-0 top-0 hidden h-full w-64 border-r border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-black sm:flex flex-col">

            {/* --- Logo / Name --- */}
            <div className="flex items-center gap-3 mb-10 px-2">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">
                    B
                </div>
                <span className="text-xl font-bold tracking-tight dark:text-white">Boomtrptw</span>
            </div>

            <div className="mb-8 px-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 w-fit">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                        Available for work
                    </span>
                </div>
            </div>

            {/* --- Navigation Menu (ปรับสไตล์ Hover) --- */}
            <nav className="flex-1 space-y-2">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`group relative flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-300 ${isActive
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                                : "text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                                }`}
                        >
                            <item.icon size={18} className={`${isActive ? "text-white" : "group-hover:scale-110 transition-transform"}`} />
                            {item.name}
                            {isActive && (
                                <span className="absolute right-3 w-1.5 h-1.5 rounded-full bg-white/50" />
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* --- Footer / Copyright Only --- */}
            <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 space-y-4">
                <div className="flex flex-col gap-2">
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-2">
                        Appearance
                    </p>
                    <ThemeSwitcher />
                </div>

                <p className="text-[10px] text-center text-zinc-400 uppercase tracking-[0.2em] font-bold">
                    © 2026 Boomtrptw. All rights reserved.
                </p>
            </div>
        </aside>
    );
}