"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import {
  FolderGit2,
  ArrowUpRight,
  Eye,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from "lucide-react";

export default function ProjectsPage() {
  // 1. เพิ่ม State สำหรับควบคุม Sidebar (แชร์กับทุกหน้า)
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const myProjects = [
    {
      title: "Production Control Board (PCB) System",
      company: "VR Intelligence (Teamplas Group)",
      status: "Operational",
      description: "ระบบบริหารจัดการและแสดงผลข้อมูลการผลิตแบบ Real-time เพื่อควบคุมประสิทธิภาพการทำงานของไลน์ผลิตและวิเคราะห์คอขวดของกระบวนการผลิตในโรงงาน",
      tech: ["C#.NET (MVC)", "JavaScript", "jQuery", "SQL Server", "MongoDB"],
      pdfUrl: "/docs/PCB-Teamplas.pdf",
      image: "/docs/pcb-preview.png"
    }
  ];

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-[#09090b] font-sans transition-colors duration-300">

      {/* 2. Sidebar พร้อมส่ง Props */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* 3. Main Wrapper: ปรับ ml ตามสถานะ Sidebar ให้เหมือนหน้าแรก */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isCollapsed ? "sm:ml-20" : "sm:ml-64"}`}>

        {/* 4. Navbar พร้อมส่ง isCollapsed เพื่อขยับตำแหน่งไอคอน */}
        <Navbar isCollapsed={isCollapsed} />

        {/* 5. Main Content: ปรับ padding top และคุมความกว้างให้สมดุล */}
        <main className="flex-1 p-6 md:p-12 pt-28 md:pt-32 w-full max-w-[1600px] mx-auto text-zinc-900 dark:text-zinc-100 transition-all">

          {/* --- Header Section --- */}
          <header className="mb-16 border-b border-zinc-900/10 dark:border-zinc-800 pb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-500/20">
                <FolderGit2 size={28} />
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">
                Projects <span className="text-blue-600">Archive</span>
              </h1>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl font-medium max-w-3xl leading-relaxed italic">
              รวบรวมผลงานการพัฒนาซอฟต์แวร์ที่ผมได้สร้างสรรค์ขึ้น ทั้งโปรเจกต์หลักในบริษัท และระบบที่ช่วยเพิ่มประสิทธิภาพการทำงานจริง
            </p>
          </header>

          {/* --- Project Grid --- */}
          <div className="grid grid-cols-1 gap-16">
            {myProjects.map((project, index) => (
              <div key={index} className="flex flex-col">

                {/* Main Card - ปรับความมนเป็น rounded-xl ให้เหลี่ยมคมตามที่คุณบูมชอบ */}
                <div className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 border-b-8 hover:border-b-blue-600">
                  <div className="grid grid-cols-1 lg:grid-cols-2">

                    {/* ฝั่งรูปภาพ */}
                    <div className="relative h-72 lg:h-auto overflow-hidden bg-zinc-100 dark:bg-zinc-800 border-r border-zinc-200 dark:border-zinc-800">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                    </div>

                    {/* ฝั่งเนื้อหา */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-lg">
                          {project.status}
                        </span>
                        <span className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em]">
                          {project.company}
                        </span>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-black mb-6 group-hover:text-blue-600 transition-colors tracking-tighter italic uppercase leading-none">
                        {project.title}
                      </h3>

                      <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed mb-8 font-medium">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-10">
                        {project.tech?.map((tag) => (
                          <span key={tag} className="px-3 py-1.5 bg-zinc-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-[10px] font-black rounded-lg uppercase border border-zinc-200 dark:border-zinc-800">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href={project.pdfUrl}
                          target="_blank"
                          className="flex-1 py-4 bg-zinc-900 dark:bg-blue-600 text-white rounded-xl text-center text-xs font-black uppercase tracking-widest hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                        >
                          <Eye size={16} /> View Documentation
                        </a>

                        <button
                          onClick={() => setShowDetail(!showDetail)}
                          className={`flex-1 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 border ${showDetail
                            ? "bg-zinc-100 dark:bg-zinc-800 text-blue-600 border-blue-600"
                            : "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border-zinc-200 dark:border-zinc-700 hover:border-blue-600"
                            }`}
                        >
                          {showDetail ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          Project Details
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                    <ArrowUpRight className="text-blue-600" size={28} />
                  </div>
                </div>

                {/* --- Deep Dive Section (ขยายตามความกว้าง Card หลัก) --- */}
                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${showDetail ? "max-h-[2000px] opacity-100 mt-8" : "max-h-0 opacity-0 mt-0"}`}>
                  <div className="p-8 md:p-12 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-inner">

                    {/* Problem/Solution/Impact */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-16">
                      <div className="space-y-4">
                        <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-600 font-black italic">01</div>
                        <h4 className="text-blue-600 font-black uppercase text-[10px] tracking-[0.3em] italic">The Challenge</h4>
                        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium italic">
                          แก้ปัญหาการจดบันทึกด้วยมือ (Manual Paperwork) ที่ทำให้ข้อมูลการผลิตล่าช้าและเกิดความผิดพลาดสูง
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 font-black italic">02</div>
                        <h4 className="text-blue-600 font-black uppercase text-[10px] tracking-[0.3em] italic">My Solution</h4>
                        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium italic">
                          พัฒนาซอฟต์แวร์สื่อสารกับเครื่องจักรเก็บข้อมูลอัตโนมัติ (Data Acquisition) และแสดงผล Dynamic Dashboard
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div className="w-10 h-10 rounded-lg bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 font-black italic">03</div>
                        <h4 className="text-blue-600 font-black uppercase text-[10px] tracking-[0.3em] italic">Impact</h4>
                        <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium italic">
                          Real-time 100% ช่วยลดขั้นตอนการทำงานของ Foreman และทำให้ฝ่ายบริหารเห็นปัญหาได้ทันที
                        </p>
                      </div>
                    </div>

                    {/* Efficiency Widget */}
                    <div className="bg-zinc-50 dark:bg-zinc-800/50 p-8 rounded-xl border border-zinc-200 dark:border-zinc-700">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h5 className="text-xl font-black italic uppercase tracking-tighter">Machine Intelligence</h5>
                          <div className="space-y-2 text-sm text-zinc-500 font-medium">
                            <p className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-600" /> Machine Status (Running/Idle/Down)</p>
                            <p className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-600" /> Real-time Cycle Time & Job Tracking</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 text-center shadow-sm">
                            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Accuracy</p>
                            <p className="text-3xl font-black text-blue-600 italic">100%</p>
                          </div>
                          <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 text-center shadow-sm">
                            <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Latency</p>
                            <p className="text-3xl font-black text-blue-600 italic">&lt; 1s</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}