import Sidebar from "@/components/Sidebar";
import { Mail, Phone, MapPin, Send, Github, Facebook, Instagram, MessageCircle } from "lucide-react";

export default function ContactPage() {
    const socialLinks = [
        { name: "GitHub", icon: <Github size={20} />, href: "https://github.com/Boomtrptw", color: "hover:text-zinc-900" },
        { name: "Facebook", icon: <Facebook size={20} />, href: "https://www.facebook.com/boom.sky017/", color: "hover:text-blue-600" },
        { name: "Instagram", icon: <Instagram size={20} />, href: "https://www.instagram.com/Boomtrptw", color: "hover:text-pink-600" },
    ];

    return (
        <div className="flex min-h-screen bg-zinc-50 dark:bg-[#09090b] font-sans">
            <Sidebar />

            <main className="flex-1 sm:ml-64 p-4 md:p-12 max-w-5xl">
                <header className="mb-12">
                    <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">Let's Connect</h1>
                    <p className="text-zinc-500 dark:text-zinc-400 mt-3 text-lg">
                        สนใจร่วมงานหรือสอบถามข้อมูลเพิ่มเติม ติดต่อได้ทุกช่องทางครับ
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* --- ด้านซ้าย: ข้อมูลติดต่อ (40%) --- */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-6">
                            <ContactItem
                                icon={<Mail className="text-blue-500" />}
                                title="Email"
                                value="boom_theerapong@hotmail.com"
                                link="mailto:boom_theerapong@hotmail.com"
                            />
                            <ContactItem
                                icon={<Phone className="text-green-500" />}
                                title="Phone"
                                value="098-443-9885"
                                link="tel:0984439885"
                            />
                            <ContactItem
                                icon={<MessageCircle className="text-emerald-500" />}
                                title="Line ID"
                                value="boom.sky"
                                link="https://line.me/ti/p/~boom.sky"
                            />
                            <ContactItem
                                icon={<MapPin className="text-red-500" />}
                                title="Location"
                                value="กรุงเทพฯ, ประเทศไทย"
                            />
                        </div>

                        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
                            <p className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-4">Social Media</p>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        className={`p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm transition-all duration-300 ${social.color}`}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* --- ด้านขวา: ฟอร์มติดต่อ (60%) --- */}
                    <div className="lg:col-span-7">
                        <form className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold ml-1 dark:text-zinc-300">Name</label>
                                    <input type="text" placeholder="ชื่อของคุณ" className="w-full p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-black focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold ml-1 dark:text-zinc-300">Email</label>
                                    <input type="email" placeholder="email@example.com" className="w-full p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-black focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2 mb-8">
                                <label className="text-sm font-semibold ml-1 dark:text-zinc-300">Message</label>
                                <textarea rows="5" placeholder="พิมพ์ข้อความที่นี่..." className="w-full p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-black focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-blue-500/30 transition-all active:scale-[0.98]">
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </div>

                </div>
            </main>
        </div>
    );
}

function ContactItem({ icon, title, value, link }) {
    return (
        <a
            href={link}
            target="_blank"
            className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
        >
            <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-inner">
                {icon}
            </div>
            <div className="flex flex-col">
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-tighter">{title}</span>
                <span className="text-sm font-bold dark:text-zinc-200">{value}</span>
            </div>
        </a>
    );
}