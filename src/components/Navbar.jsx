"use client";
import { useState, useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import {
    Mail, Github, Clock, Calendar, Facebook,
    Instagram, Phone, MessageCircle
} from "lucide-react";

// เพิ่ม { isCollapsed } เข้าไปใน Props
export default function Navbar({ isCollapsed }) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    };
    const formatDate = (date) => {
        return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    };

    return (
        <nav className={`fixed top-0 right-0 h-16 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 z-40 px-6 flex items-center justify-between transition-all duration-300 ${isCollapsed ? "left-20" : "left-64"
            }`}>

            {/* ฝั่งซ้าย: Date & Real-time Clock */}
            <div className="flex items-center gap-6">
                <div className="hidden lg:flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
                    <Calendar size={18} className="text-blue-600" />
                    <span className="text-[12px] font-black uppercase tracking-widest italic leading-none">
                        {formatDate(time)}
                    </span>
                </div>

                <div className="flex items-center gap-3 bg-zinc-100 dark:bg-zinc-800/50 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800">
                    <Clock size={18} className="text-blue-600" />
                    <span className="text-sm md:text-base font-black tracking-[0.1em] text-zinc-900 dark:text-white tabular-nums leading-none">
                        {formatTime(time)}
                    </span>
                </div>
            </div>

            {/* ฝั่งขวา: Contact Icons & ThemeSwitcher */}
            <div className="flex items-center gap-1">
                <a href="https://www.facebook.com/boom.sky017/" target="_blank" className="p-2 text-zinc-500 hover:text-[#1877F2] transition-colors"><Facebook size={18} /></a>
                <a href="https://www.instagram.com/Boomtrptw" target="_blank" className="p-2 text-zinc-500 hover:text-[#E4405F] transition-colors"><Instagram size={18} /></a>
                <a href="https://github.com/Boomtrptw" target="_blank" className="p-2 text-zinc-500 hover:text-white transition-colors"><Github size={18} /></a>
                <div className="h-4 w-[1px] bg-zinc-800 mx-2" />
                <a href="tel:0984439885" className="p-2 text-zinc-500 hover:text-white transition-colors"><Phone size={18} /></a>
                <a href="mailto:boom_theerapong@hotmail.com" className="p-2 text-zinc-500 hover:text-blue-600 transition-colors"><Mail size={18} /></a>
                <a href="https://line.me/ti/p/~boom.sky" target="_blank" className="p-2 text-zinc-500 hover:text-green-600 transition-colors"><MessageCircle size={18} /></a>
                <div className="h-6 w-[1px] bg-zinc-800 mx-2 hidden sm:block" />
                <ThemeSwitcher />
            </div>
        </nav>
    );
}