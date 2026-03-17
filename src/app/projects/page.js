"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import {
  FolderGit2,
  ArrowUpRight,
  Eye,
  ChevronDown,
  ChevronUp,
  Cpu,
  Database,
  CheckCircle2
} from "lucide-react";

export default function ProjectsPage() {
  const [showDetail, setShowDetail] = useState(false);

  const myProjects = [
    {
      title: "Production Control Board (PCB) System",
      company: "VR Intelligence (Teamplas Group)",
      period: "Mar 2024 - Jul 2025 (1 yr 5 mos)",
      description: "ระบบบริหารจัดการและแสดงผลข้อมูลการผลิตแบบ Real-time เพื่อควบคุมประสิทธิภาพการทำงานของไลน์ผลิตและวิเคราะห์คอขวดของกระบวนการผลิตในโรงงาน",
      tech: ["C#.NET (MVC)", "JavaScript", "jQuery", "SQL Server", "MongoDB"],
      pdfUrl: "/docs/PCB-Teamplas.pdf",
      image: "/docs/pcb-preview.png" // ตรวจสอบว่าไฟล์อยู่ใน public/projects/
    }
  ];

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-[#09090b] font-sans transition-colors duration-300">
      <Sidebar />

      <main className="flex-1 sm:ml-64 p-6 md:p-12 text-zinc-900 dark:text-zinc-100">
        {/* --- Header --- */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-600 rounded-lg text-white">
              <FolderGit2 size={24} />
            </div>
            <h1 className="text-3xl font-black tracking-tight uppercase italic">
              Projects <span className="text-blue-600">Archive</span>
            </h1>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-2xl">
            รวบรวมผลงานการพัฒนาซอฟต์แวร์ที่ผมได้สร้างสรรค์ขึ้น ทั้งโปรเจกต์หลักในบริษัท และระบบที่ช่วยเพิ่มประสิทธิภาพการทำงานจริง
          </p>
        </header>

        {/* --- Project Grid --- */}
        <div className="grid grid-cols-1 gap-12">
          {myProjects.filter(p => p.title.includes("PCB")).map((project, index) => (
            <div key={index} className="flex flex-col">

              {/* Main Card */}
              <div className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 border-b-4 hover:border-b-blue-600">
                <div className="grid grid-cols-1 lg:grid-cols-2">

                  {/* ฝั่งรูปภาพ */}
                  <div className="relative h-72 lg:h-auto overflow-hidden bg-zinc-100 dark:bg-zinc-800">
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
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full font-sans">
                        {project.status || "Completed"}
                      </span>
                      <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-sans">
                        {project.company}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-600 transition-colors tracking-tight italic uppercase">
                      {project.title}
                    </h3>

                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-8 font-medium">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.tech?.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-[10px] font-bold rounded-lg uppercase tracking-tight">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={project.pdfUrl}
                        target="_blank"
                        className="flex-1 py-4 bg-zinc-900 dark:bg-blue-600 text-white rounded-2xl text-center text-xs font-black uppercase tracking-widest hover:scale-[1.02] transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2"
                      >
                        <Eye size={16} /> View Documentation (PDF)
                      </a>

                      <button
                        onClick={() => setShowDetail(!showDetail)}
                        className={`flex-1 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 border ${showDetail
                            ? "bg-zinc-100 dark:bg-zinc-800 text-blue-600 border-blue-600"
                            : "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800"
                          }`}
                      >
                        {showDetail ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        Project Details
                      </button>
                    </div>
                  </div>
                </div>

                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="text-blue-600" size={24} />
                </div>
              </div>

              {/* --- Deep Dive Section --- */}
              <div className={`transition-all duration-700 ease-in-out overflow-hidden ${showDetail ? "max-h-[2000px] opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"}`}>
                <div className="p-8 md:p-12 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] shadow-inner">

                  {/* Grid 1: Problem/Solution/Impact */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-16">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-600 font-black italic">01</div>
                      <h4 className="text-blue-600 font-black uppercase text-[10px] tracking-[0.2em] italic">The Challenge</h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                        แก้ปัญหาการจดบันทึกด้วยมือ (Manual Paperwork) ที่ทำให้ข้อมูลการผลิตล่าช้าและเกิดความผิดพลาดสูง โดยเฉพาะการติดตามสถานะเครื่องจักรที่คลาดเคลื่อน
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 font-black italic">02</div>
                      <h4 className="text-blue-600 font-black uppercase text-[10px] tracking-[0.2em] italic">My Solution</h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                        พัฒนาซอฟต์แวร์สื่อสารกับเครื่องจักรเพื่อเก็บข้อมูลอัตโนมัติ (Data Acquisition) ประมวลผลผ่าน SQL Server และแสดงผลแบบ Dynamic Dashboard
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 font-black italic">03</div>
                      <h4 className="text-blue-600 font-black uppercase text-[10px] tracking-[0.2em] italic">Key Impact</h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                        ระบบแสดงผลแบบ Real-time 100% ช่วยลดขั้นตอนการทำงานของ Foreman และทำให้ฝ่ายบริหารเห็นปัญหา Bottleneck ในไลน์ผลิตได้ทันที
                      </p>
                    </div>
                  </div>

                  {/* Grid 2: Specs */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 border-t border-zinc-100 dark:border-zinc-800">
                    <div className="space-y-6 text-left">
                      <h5 className="text-xl font-black italic uppercase tracking-tighter">Machine Intelligence & Tracking</h5>
                      <div className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 text-blue-600 shrink-0" size={16} />
                          <p><span className="text-zinc-900 dark:text-zinc-200 font-bold">Machine Interface:</span> เชื่อมต่อและดึงข้อมูลสถานะเครื่องจักร (Running/Idle/Down) และรอบเวลา (Cycle Time) โดยตรง</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 text-blue-600 shrink-0" size={16} />
                          <p><span className="text-zinc-900 dark:text-zinc-200 font-bold">Job Management:</span> บันทึกรายละเอียดชิ้นงานตามเลข Job Order เพื่อตรวจสอบประวัติย้อนหลัง (Traceability)</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 text-blue-600 shrink-0" size={16} />
                          <p><span className="text-zinc-900 dark:text-zinc-200 font-bold">Quality Control:</span> เก็บสถิติจำนวนชิ้นงานที่ผ่าน (OK) และไม่ผ่าน (NG) เพื่อคำนวณอัตราการเสียของงาน</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-3xl text-left border border-zinc-100 dark:border-zinc-700">
                      <h5 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-4 italic">Efficiency Logic (OEE)</h5>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 font-medium">
                        ระบบมีการคำนวณค่าประสิทธิภาพโดยรวมอัตโนมัติ เพื่อเปรียบเทียบเป้าหมายการผลิต (Target) กับผลผลิตจริง (Actual) แบบนาทีต่อนาที
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="p-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 transition-colors">
                          <p className="text-[10px] font-bold text-zinc-400 uppercase">Data Accuracy</p>
                          <p className="text-xl font-black text-blue-600 italic">100%</p>
                        </div>
                        <div className="p-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 transition-colors">
                          <p className="text-[10px] font-bold text-zinc-400 uppercase">Response Time</p>
                          <p className="text-xl font-black text-blue-600 italic">&lt; 1 Sec</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-12 pt-8 border-t border-zinc-100 dark:border-zinc-800">
                    <p className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em] mb-6 text-left">Engineered With</p>
                    <div className="flex flex-wrap gap-3">
                      {project.tech?.map(t => (
                        <div key={t} className="flex items-center gap-2 px-4 py-2 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[10px] font-bold rounded-xl border border-zinc-100 dark:border-zinc-700 uppercase italic transition-all hover:border-blue-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}