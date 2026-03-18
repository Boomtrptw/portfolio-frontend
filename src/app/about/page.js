"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import {
    Code2,
    Cpu,
    Target,
    Zap,
    ShieldCheck,
    Workflow,
    GraduationCap,
    Mail,
    Phone,
    MapPin,
    Calendar,
    Facebook,
    Instagram,
    MessageCircle,
    Loader2
} from "lucide-react";

export default function AboutPage() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    // --- API States ---
    const [profile, setProfile] = useState(null);
    const [experiences, setExperiences] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL;
                // ดึงข้อมูลพร้อมกันทั้ง Profile และ Experience
                const [profileRes, expRes] = await Promise.all([
                    fetch(`${apiUrl}/about/profile`),
                    fetch(`${apiUrl}/about/experiences`)
                ]);

                const profileJson = await profileRes.json();
                const expJson = await expRes.json();

                if (profileJson.status === "success") setProfile(profileJson.data);
                if (expJson.status === "success") setExperiences(expJson.data);
            } catch (error) {
                console.error("Error fetching about data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAboutData();
    }, []);

    return (
        <div className="flex min-h-screen bg-zinc-50 dark:bg-[#09090b] font-sans transition-colors duration-300">
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

            <div className={`flex-1 flex flex-col transition-all duration-300 ${isCollapsed ? "sm:ml-20" : "sm:ml-64"}`}>
                <Navbar isCollapsed={isCollapsed} />

                <main className="flex-1 p-6 md:p-12 pt-28 md:pt-32 w-full max-w-[1600px] mx-auto text-zinc-900 dark:text-zinc-100 transition-all">

                    {/* --- Hero Section --- */}
                    <section className="mb-20">
                        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                            <div className="relative shrink-0">
                                <div className="w-48 h-48 md:w-64 md:h-64 rounded-xl bg-zinc-200 dark:bg-zinc-900 border-b-8 border-r-8 border-blue-600 overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] flex items-center justify-center">
                                    <img src="/images/profile.jpg" alt={profile?.fullName} className="w-full h-full object-cover transition-all" />
                                </div>
                                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 rounded-xl shadow-lg">
                                    <Zap size={24} fill="currentColor" />
                                </div>
                            </div>

                            <div className="flex-1 space-y-6 text-center md:text-left">
                                <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">
                                    {profile?.fullName} <span className="text-blue-600">({profile?.nickname})</span>
                                </h1>
                                <h2 className="text-xl md:text-2xl font-bold text-zinc-500 uppercase italic tracking-widest">
                                    {profile?.role}
                                </h2>
                                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl font-medium">
                                    {profile?.bio}
                                </p>

                                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                                    <Badge icon={<Target size={14} />} text="Industrial Solutions" />
                                    <Badge icon={<Cpu size={14} />} text="Process Automation" />
                                    <Badge icon={<Code2 size={14} />} text="Full-Stack Mastery" />
                                </div>

                                {/* --- Personal Info --- */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                                    <ContactItem icon={<Calendar size={16} />} label="Birthday" value={profile?.birthday} />
                                    <ContactItem icon={<Phone size={16} />} label="Phone" value={profile?.phone} />
                                    <ContactItem icon={<Mail size={16} />} label="Email" value={profile?.email} />
                                    <ContactItem icon={<MapPin size={16} />} label="Location" value={profile?.location} />
                                </div>

                                <div className="flex justify-center md:justify-start gap-3 pt-2">
                                    <SocialLink icon={<MessageCircle size={18} />} text={profile?.socials?.line} />
                                    <SocialLink icon={<Facebook size={18} />} text={profile?.socials?.facebook} />
                                    <SocialLink icon={<Instagram size={18} />} text={profile?.socials?.instagram} />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* --- Core Expertise (Hardcoded as UI Design) --- */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        <InfoCard
                            title="Industrial Mindset"
                            desc="เน้นความแม่นยำของข้อมูล 100% เพราะในงานวิศวกรรมและความปลอดภัย ความคลาดเคลื่อนเพียงเล็กน้อยคือความเสี่ยงที่ยอมรับไม่ได้"
                            icon={<ShieldCheck className="text-blue-600" size={32} />}
                        />
                        <InfoCard
                            title="Workflow Digitization"
                            desc="เปลี่ยนงานกระดาษและระบบ Manual ให้เป็น Real-time Dashboard ช่วยลด Bottleneck และเพิ่มประสิทธิภาพการทำงานอย่างยั่งยืน"
                            icon={<Zap className="text-blue-600" size={32} />}
                        />
                        <InfoCard
                            title="System Integration"
                            desc="เชี่ยวชาญการเชื่อมโยงข้อมูลจากหน้างาน (Field Survey) เข้าสู่ฐานข้อมูลกลาง เพื่อการวิเคราะห์และออกรายงานที่แม่นยำ"
                            icon={<Workflow className="text-blue-600" size={32} />}
                        />
                    </div>

                    {/* --- Bottom Sections --- */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
                        {/* Work Experience Timeline */}
                        <section className="space-y-8">
                            <h3 className="text-3xl font-black uppercase italic tracking-tighter flex items-center gap-3">
                                <Zap className="text-blue-600" size={32} /> Experience
                            </h3>
                            <div className="space-y-6 border-l-2 border-zinc-200 dark:border-zinc-800 ml-4">
                                {experiences.map((exp) => (
                                    <div key={exp._id} className="relative pl-8 group">
                                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-zinc-200 dark:bg-zinc-800 border-2 border-white dark:border-[#09090b] group-hover:bg-blue-600 transition-colors" />
                                        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-blue-500/50 transition-all border-b-4">
                                            <span className="text-[10px] font-black text-blue-600 uppercase">{exp.period}</span>
                                            <h4 className="text-lg font-black uppercase italic mt-1 dark:text-white leading-none">{exp.company}</h4>
                                            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1">{exp.role}</p>
                                            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-3 italic font-medium">{exp.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <div className="space-y-12">
                            {/* Education */}
                            <section className="space-y-8">
                                <h3 className="text-3xl font-black uppercase italic tracking-tighter flex items-center gap-3">
                                    <GraduationCap className="text-blue-600" size={32} /> Education
                                </h3>
                                <div className="p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl border-b-8 border-b-blue-600 shadow-sm">
                                    <h4 className="text-xl font-black uppercase italic dark:text-white leading-none">{profile?.education?.university}</h4>
                                    <p className="text-blue-600 font-black text-sm uppercase tracking-widest mt-2">{profile?.education?.major}</p>
                                    <div className="mt-4 text-zinc-500 dark:text-zinc-400 text-sm font-medium italic">
                                        {profile?.education?.desc}
                                    </div>
                                </div>
                            </section>

                            {/* Philosophy */}
                            <section className="space-y-8">
                                <h3 className="text-3xl font-black uppercase italic tracking-tighter flex items-center gap-3">
                                    <Target className="text-blue-600" size={32} /> Philosophy
                                </h3>
                                <div className="p-8 bg-zinc-900 text-white rounded-xl shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform">
                                        <Code2 size={120} />
                                    </div>
                                    <p className="text-2xl font-black italic leading-tight uppercase relative z-10 whitespace-pre-line">
                                        "{profile?.philosophy}"
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className="py-12 border-t border-zinc-200 dark:border-zinc-800 text-center">
                        <p className="text-[10px] md:text-[12px] font-black text-zinc-400 uppercase tracking-[0.5em] italic">
                            {profile?.fullName} • Systematically Designed
                        </p>
                    </div>
                </main>
            </div>
        </div>
    );
}

// --- Helper Components ---
function ContactItem({ icon, label, value }) {
    return (
        <div className="flex items-center gap-3 text-left">
            <div className="text-blue-600 bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg">{icon}</div>
            <div>
                <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest leading-none mb-1">{label}</p>
                <p className="text-sm font-bold dark:text-zinc-200">{value || "-"}</p>
            </div>
        </div>
    );
}

function SocialLink({ icon, text }) {
    return (
        <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800/50 rounded-lg border border-zinc-200 dark:border-zinc-700 transition-colors hover:border-blue-500">
            <span className="text-zinc-500 dark:text-zinc-400">{icon}</span>
            <span className="text-[10px] font-bold dark:text-zinc-300">{text || "-"}</span>
        </div>
    );
}

function Badge({ icon, text }) {
    return (
        <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm">
            <span className="text-blue-600">{icon}</span>
            <span className="text-[11px] font-black uppercase tracking-widest dark:text-zinc-300">{text}</span>
        </div>
    );
}

function InfoCard({ title, desc, icon }) {
    return (
        <div className="p-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm transition-all hover:border-blue-500/50 group">
            <div className="mb-6 group-hover:scale-110 transition-transform">{icon}</div>
            <h4 className="text-xl font-black uppercase italic tracking-tighter mb-4 dark:text-white">{title}</h4>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed italic">
                {desc}
            </p>
        </div>
    );
}