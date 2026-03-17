import { ExternalLink, Github, Layers } from "lucide-react";

export default function ProjectCard({ title, company, desc, tags, image, githubLink, demoLink }) {
  return (
    <div className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full">

      {/* --- Image Section --- */}
      <div className="relative h-56 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-400">
            <Layers size={48} strokeWidth={1} />
          </div>
        )}
        {/* Overlay ไล่เฉดสีให้ดูหรู */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* --- Content Section --- */}
      <div className="p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
            {company}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
          {desc}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[10px] font-bold uppercase tracking-tighter bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {githubLink && (
            <a href={githubLink} target="_blank" className="flex-1 py-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-center text-xs font-bold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all flex items-center justify-center gap-2">
              <Github size={14} /> Code
            </a>
          )}
          {demoLink && (
            <a href={demoLink} target="_blank" className="flex-1 py-3 rounded-2xl bg-blue-600 text-white text-center text-xs font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2">
              Preview <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}