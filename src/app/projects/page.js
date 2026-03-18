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
  CheckCircle2,
  Lock
} from "lucide-react";

export default function ProjectsPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  // เปลี่ยนเป็นเก็บสถานะ index ของโปรเจกต์ที่ต้องการเปิดดู Detail
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetail = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const myProjects = [
    {
      title: "Production Planning & Tracking System",
      company: "Teamplas Chemical",
      status: "Implemented",
      description: "ระบบวางแผนการผลิตอัจฉริยะสำหรับจัดคิวงานให้เครื่องจักร พร้อมระบบออกรายงานวิเคราะห์สถานะแผนงานและติดตามสถานะชิ้นงาน (Part Tracking) แบบครบวงจร",
      tech: ["C#.NET (MVC)", "JavaScript", "jQuery", "SQL Server", "MongoDB"],
      pdfUrl: "/docs/TAG_TEAMPLAS.pdf", // ล็อกไว้ก่อนเพราะเป็นระบบภายใน
      image: "/images/planning-preview.png",
      details: {
        challenge: "การวางแผนเดิมทำใน Excel ทำให้ยากต่อการกระจายแผนงานไปยังไลน์ผลิต และไม่สามารถติดตามสถานะคิวงานของแต่ละเครื่องจักรได้แบบทันท่วงที",
        solution: "พัฒนาโมดูล Scheduler สำหรับจัดคิวงานรายเครื่องจักร (Machine Scheduling) และระบบ Generate Report อัตโนมัติเพื่อดูภาพรวมแผนงาน",
        impact: "ลดเวลาในการวางแผนงานได้ 50% และทำให้ฝ่ายผลิตเห็นแผนงานล่วงหน้าได้อย่างชัดเจนผ่านระบบ Dashboard",
        specs: [
          "Machine Load Balancing: ระบบวิเคราะห์และกระจายงานให้เครื่องจักรตามกำลังการผลิต",
          "Part Tracking Viewer: ดูสถานะการผลิตรายชิ้นส่วน (Tracking) ว่าอยู่ในขั้นตอนใด",
          "Comprehensive Reporting: ออกรายงานสรุปผลแผนงาน รายงานสถานะเครื่องจักร และรายงานผลผลิตประจำวัน"
        ],
        stats: { acc: "98.5%", latency: "~ 1.5s" }
      }
    },
    {
      title: "Production Control Board (PCB)",
      company: "Teamplas Chemical",
      status: "Implemented",
      description: "ระบบบริหารจัดการและแสดงผลข้อมูลการผลิตแบบ Real-time เพื่อควบคุมประสิทธิภาพการทำงานของไลน์ผลิตและวิเคราะห์คอขวดของกระบวนการผลิตในโรงงาน",
      tech: ["C#.NET (MVC)", "JavaScript", "jQuery", "SQL Server", "MongoDB"],
      pdfUrl: "/docs/PCB-Teamplas.pdf",
      image: "/images/pcb-preview.png",
      details: {
        challenge: "แก้ปัญหาการจดบันทึกด้วยมือ (Manual Paperwork) ที่ทำให้ข้อมูลล่าช้าและเกิดความคลาดเคลื่อนสูง",
        solution: "พัฒนา Data Acquisition เชื่อมต่อเครื่องจักรโดยตรงเพื่อเก็บสถานะ Running/Idle/Down แบบอัตโนมัติ",
        impact: "ฝ่ายบริหารเห็น Bottleneck ได้ทันที และลดภาระงานเอกสารของ Foreman ได้ 100%",
        specs: [
          "Machine Interface: ดึง Cycle Time และสถานะเครื่องจักรโดยตรง",
          "Job Management: ระบบบันทึกเลข Job Order เพื่อทำ Traceability",
          "QC Tracking: เก็บสถิติงาน OK/NG เพื่อคำนวณ Yield"
        ],
        stats: { acc: "100%", latency: "< 1s" }
      }
    },
    {
      title: "Supply Chain Information Management (SCIM)",
      company: "Toyota Boshuku Asia",
      status: "Implemented",
      description: "ระบบบริหารจัดการข้อมูลโซ่อุปทานและการสำรวจโครงสร้างผลิตภัณฑ์ (Survey BOM) สำหรับการผลิตเม็ดพลาสติก เพื่อวิเคราะห์ต้นทุนและจัดการวัตถุดิบอย่างเป็นระบบ",
      tech: ["ReactJS", "FastAPI", "SQL Server", "MongoDB"],
      pdfUrl: null, // ไม่มี PDF
      image: "/images/scim-preview.png",
      details: {
        challenge: "ความซับซ้อนในการคำนวณสัดส่วนผสมเม็ดพลาสติก (Mixing Ratio) และการติดตามราคาจากหลาย Supplier",
        solution: "สร้างแพลตฟอร์มกลางในการทำ Survey BOM และระบบคำนวณต้นทุนการผลิตอัตโนมัติ",
        impact: "เพิ่มความแม่นยำในการวิเคราะห์ต้นทุน (Cost Analysis) และจัดการข้อมูล Supply Chain ได้เสถียรขึ้น",
        specs: [
          "Survey BOM Tool: ระบบสำรวจโครงสร้างวัตถุดิบดิจิทัล",
          "Cost Calculation: อัลกอริทึมคำนวณต้นทุนตาม Mixing Ratio",
          "Excel Integration: ระบบ Import/Export ข้อมูลมาตรฐาน Toyota"
        ],
        stats: { acc: "99.9%", latency: "~ 1s" }
      }
    },
    {
      title: "Field Service & Safety Inspection System",
      company: "Shinaracha Protector",
      status: "In Development", // เปลี่ยนจาก Implemented เป็นกำลังพัฒนา
      description: "(กำลังพัฒนา) แพลตฟอร์มบริหารจัดการงานสำรวจและซ่อมบำรุงระบบความปลอดภัยอัจฉริยะ เพื่อเชื่อมต่อการทำงานระหว่างการสำรวจหน้างานและทีมช่างซ่อมบำรุง",
      tech: ["NextJS", "n8n", "MySQL"],
      pdfUrl: null,
      image: "/images/shinaracha-preview.png",
      details: {
        challenge: "ความล่าช้าในการส่งต่อข้อมูลจากหน้างานสู่ทีมช่าง ทำให้การแก้ไขปัญหาด้านความปลอดภัยทำได้ไม่ทันท่วงที",
        solution: "ออกแบบระบบ Mobile-first เพื่อใช้ในการบันทึก Defect และระบบ Auto-assignment ที่จะช่วยกระจายงานให้ช่างได้ทันทีหลังตรวจพบปัญหา",
        // ปรับ Impact เป็น "Expected Impact" หรือเป้าหมายที่เราตั้งไว้
        impact: "เป้าหมายคือการลดขั้นตอนงานเอกสารลง 80% และทำให้การติดตามสถานะความปลอดภัยในโครงการใหญ่เป็นไปได้แบบ 1:1",
        specs: [
          "Digital Inspection: แบบฟอร์มสำรวจอัจฉริยะรองรับระบบ Fire Alarm และ Fire Pump",
          "Live Task Tracking: (Feature หลัก) ติดตามความคืบหน้าของช่างแบบนาทีต่อนาที",
          "Defect Lifecycle: ระบบจัดการสถานะของจุดที่ต้องแก้ไขตั้งแต่เริ่มจนถึงส่งมอบงาน",
          "Automated Reporting: ระบบร่างรายงานอัตโนมัติเพื่อลดภาระงาน Admin"
        ],
        // ระบุเป็นเป้าหมายความเสถียร (Target Metrics)
        stats: { acc: "Target 100%", latency: "Target < 1s" }
      }
    },
    {
      title: "Engineering Faculty Management App",
      company: "Senior Project (มหาวิทยาลัย)", // ใช้บอกว่าเป็นโปรเจกต์จบ
      status: "Academic Project", // เปลี่ยนสถานะให้รู้ว่าเป็นงานเรียน
      description: "แอปพลิเคชันบนมือถือสำหรับบริหารจัดการและอำนวยความสะดวกภายในคณะวิศวกรรมศาสตร์ ครอบคลุมระบบฝึกงาน สั่งซื้อสินค้า เช็คชื่อกิจกรรม และการสื่อสาร",
      tech: ["Flutter", "FastAPI", "MongoDB", "Figma", "Draw.io"],
      pdfUrl: "https://www.figma.com/design/OjIS1WgOocBbWp4LuywDC7/Project?node-id=0-1&p=f", // ถ้ามีไฟล์ Slide นำเสนอโปรเจกต์จบ เอามาใส่ตรงนี้ได้ครับ
      image: "/images/senior-project-preview.png", // รูป Mockup แอปใน Figma
      details: {
        challenge: "การจัดการข้อมูลกิจกรรม ข้อมูลบุคลากร และการสื่อสารภายในคณะกระจัดกระจาย ขาดศูนย์กลาง (Centralized) ในการเข้าถึงข้อมูลและบริการต่างๆ สำหรับนักศึกษา",
        solution: "พัฒนาแอปพลิเคชันมือถือที่รวบรวมระบบ E-commerce, ระบบเช็คชื่อกิจกรรม, Directory คณะ และระบบแชทกลุ่ม ไว้ในแพลตฟอร์มเดียว",
        impact: "ได้ลงมือทำ Full-Stack Development เต็มรูปแบบ (End-to-End) ตั้งแต่ออกแบบ UI/UX, System Architecture ไปจนถึงเขียนโค้ด Mobile App และ Backend ครบวงจร",
        specs: [
          "Internship & Directory: ระบบแนะนำสถานที่ฝึกงาน สถานที่ในมหาวิทยาลัย และบุคลากรสำคัญ",
          "Activity Tracking: ระบบสแกนเช็คชื่อเข้าร่วมกิจกรรม และประเมินผลการผ่านกิจกรรม",
          "E-Commerce Module: ระบบสั่งซื้อสินค้าและของที่ระลึกภายในคณะ",
          "Real-time Chat: ระบบแชทกลุ่ม (Group Chat) สำหรับสื่อสารและติดตามข่าวสาร"
        ],
        stats: { acc: "-", latency: "-" } // ใส่ Dash ไว้เพราะไม่ได้วัดผลบน Production จริง
      }
    }
  ];

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-[#09090b] font-sans transition-colors duration-300">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div className={`flex-1 flex flex-col transition-all duration-300 ${isCollapsed ? "sm:ml-20" : "sm:ml-64"}`}>
        <Navbar isCollapsed={isCollapsed} />

        <main className="flex-1 p-6 md:p-12 pt-28 md:pt-32 w-full max-w-[1600px] mx-auto text-zinc-900 dark:text-zinc-100 transition-all">
          <header className="mb-16 border-b border-zinc-900/10 dark:border-zinc-800 pb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-600 rounded-xl text-white shadow-lg">
                <FolderGit2 size={28} />
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">
                Projects <span className="text-blue-600">Archive</span>
              </h1>
            </div>
          </header>

          <div className="grid grid-cols-1 gap-16">
            {myProjects.map((project, index) => (
              <div key={index} className="flex flex-col">
                {/* Main Card */}
                <div className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl border-b-8 hover:border-b-blue-600">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-72 lg:h-auto overflow-hidden bg-zinc-100 dark:bg-zinc-800 border-r border-zinc-200 dark:border-zinc-800">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    </div>

                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-lg">{project.status}</span>
                        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">{project.company}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black mb-6 italic uppercase leading-none">{project.title}</h3>
                      <p className="text-zinc-500 dark:text-zinc-400 text-base mb-8 font-medium">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-10">
                        {project.tech.map((tag) => (
                          <span key={tag} className="px-3 py-1.5 bg-zinc-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-[10px] font-black rounded-lg uppercase border border-zinc-200 dark:border-zinc-800">{tag}</span>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* เช็ค PDF ถ้าไม่มีให้ Disable */}
                        {project.pdfUrl ? (
                          <a href={project.pdfUrl} target="_blank" className="flex-1 py-4 bg-zinc-900 dark:bg-blue-600 text-white rounded-xl text-center text-xs font-black uppercase tracking-widest hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                            <Eye size={16} /> View Documentation
                          </a>
                        ) : (
                          <button disabled className="flex-1 py-4 bg-zinc-200 dark:bg-zinc-800/50 text-zinc-400 dark:text-zinc-600 rounded-xl text-center text-xs font-black uppercase tracking-widest cursor-not-allowed flex items-center justify-center gap-2 border border-transparent">
                            <Lock size={16} /> Docs Private
                          </button>
                        )}

                        <button
                          onClick={() => toggleDetail(index)}
                          className={`flex-1 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 border ${expandedIndex === index ? "bg-zinc-100 dark:bg-zinc-800 text-blue-600 border-blue-600" : "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border-zinc-200 dark:border-zinc-700 hover:border-blue-600"}`}
                        >
                          {expandedIndex === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          Project Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deep Dive Section */}
                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${expandedIndex === index ? "max-h-[2000px] opacity-100 mt-8" : "max-h-0 opacity-0 mt-0"}`}>
                  <div className="p-8 md:p-12 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-16">
                      <DetailBlock step="01" label="The Challenge" text={project.details.challenge} color="red" />
                      <DetailBlock step="02" label="My Solution" text={project.details.solution} color="blue" />
                      <DetailBlock step="03" label="Impact" text={project.details.impact} color="green" />
                    </div>

                    <div className="bg-zinc-50 dark:bg-zinc-800/50 p-8 rounded-xl border border-zinc-200 dark:border-zinc-700">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h5 className="text-xl font-black italic uppercase tracking-tighter">System Specifications</h5>
                          <div className="space-y-3">
                            {project.details.specs.map((spec, i) => (
                              <p key={i} className="flex items-start gap-2 text-sm text-zinc-500 font-medium">
                                <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" /> {spec}
                              </p>
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <StatBox label="Accuracy" value={project.details.stats.acc} />
                          <StatBox label="Latency" value={project.details.stats.latency} />
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

// --- Helper Components ---
function DetailBlock({ step, label, text, color }) {
  const colors = {
    red: "bg-red-50 dark:bg-red-900/20 text-red-600",
    blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-600",
    green: "bg-green-50 dark:bg-green-900/20 text-green-600"
  };
  return (
    <div className="space-y-4">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-black italic ${colors[color]}`}>{step}</div>
      <h4 className="text-blue-600 font-black uppercase text-[10px] tracking-[0.3em] italic">{label}</h4>
      <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium italic">{text}</p>
    </div>
  );
}

function StatBox({ label, value }) {
  return (
    <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 text-center">
      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-3xl font-black text-blue-600 italic leading-none">{value}</p>
    </div>
  );
}