"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import {
  FolderGit2,
  Eye,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Lock,
  Loader2
} from "lucide-react";

export default function ProjectsPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  // --- ส่วนของ API State ---
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const res = await fetch(`${apiUrl}/projects`);
        const result = await res.json();

        if (result.status === "success") {
          setProjects(result.data);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const toggleDetail = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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

          {loading ? (
            // --- Loading State ---
            <div className="flex flex-col items-center justify-center h-64 gap-4">
              <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Retrieving Data...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-16">
              {projects.map((project, index) => (
                <div key={project._id || index} className="flex flex-col">
                  {/* Main Card */}
                  <div className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl border-b-8 hover:border-b-blue-600">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="relative h-72 lg:h-auto overflow-hidden bg-zinc-100 dark:bg-zinc-800 border-r border-zinc-200 dark:border-zinc-800">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" }} // ป้องกันรูปแตก
                        />
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
                          {project.pdfUrl ? (
                            <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer" className="flex-1 py-4 bg-zinc-900 dark:bg-blue-600 text-white rounded-xl text-center text-xs font-black uppercase tracking-widest hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
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
                        <DetailBlock step="01" label="The Challenge" text={project.details?.challenge} color="red" />
                        <DetailBlock step="02" label="My Solution" text={project.details?.solution} color="blue" />
                        <DetailBlock step="03" label="Impact" text={project.details?.impact} color="green" />
                      </div>

                      <div className="bg-zinc-50 dark:bg-zinc-800/50 p-8 rounded-xl border border-zinc-200 dark:border-zinc-700">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-4">
                            <h5 className="text-xl font-black italic uppercase tracking-tighter">System Specifications</h5>
                            <div className="space-y-3">
                              {project.details?.specs?.map((spec, i) => (
                                <p key={i} className="flex items-start gap-2 text-sm text-zinc-500 font-medium">
                                  <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" /> {spec}
                                </p>
                              ))}
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <StatBox label="Accuracy" value={project.details?.stats?.acc} />
                            <StatBox label="Latency" value={project.details?.stats?.latency} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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
      <p className="text-3xl font-black text-blue-600 italic leading-none">{value || "-"}</p>
    </div>
  );
}