import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { projects } from "../data/portfolio";

type Project = (typeof projects)[number];

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article whileHover={{ y: -4 }} transition={{ duration: .2 }} className="group overflow-hidden rounded-[10px] border border-slate-200 bg-white shadow-[0_3px_14px_rgba(15,23,42,.035)]">
      <div className="aspect-[1.86] overflow-hidden border-b border-slate-100 bg-slate-50">
        <img src={project.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.01]" />
      </div>
      <div className="px-3.5 pb-3.5 pt-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-[13px] font-semibold tracking-[-0.015em]">{project.title}</h3>
            <p className="mt-1 text-[10px] text-slate-500">{project.category}</p>
          </div>
          <ArrowUpRight size={15} className="text-slate-300 transition group-hover:text-indigo-500" />
        </div>
        <p className="mt-3 min-h-[44px] text-[10.5px] leading-[1.55] text-slate-600">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => <span key={tag} className="rounded-md bg-[#f7f7fb] px-2.5 py-1.5 text-[8.5px] font-medium text-slate-600">{tag}</span>)}
        </div>
      </div>
    </motion.article>
  );
}