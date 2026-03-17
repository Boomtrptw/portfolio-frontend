"use client";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // ป้องกันเรื่อง Hydration error
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className="flex bg-zinc-100 dark:bg-zinc-900 p-1 rounded-xl gap-1">
            {[
                { name: 'light', icon: Sun },
                { name: 'dark', icon: Moon },
                { name: 'system', icon: Monitor },
            ].map((t) => (
                <button
                    key={t.name}
                    onClick={() => setTheme(t.name)}
                    className={`p-2 rounded-lg transition-all ${theme === t.name
                            ? "bg-white dark:bg-zinc-800 text-blue-600 shadow-sm"
                            : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                        }`}
                >
                    <t.icon size={16} />
                </button>
            ))}
        </div>
    );
}