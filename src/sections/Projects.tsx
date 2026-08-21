import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { projects } from "../data/portfolio";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[1180px] px-5 py-7 lg:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Selected Work"
          title="Things I've Built."
          action={<a href="https://github.com/" className="hidden items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-[11px] font-medium md:flex">View More on GitHub <ArrowRight size={14} /></a>}
        />
      </Reveal>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, i) => <Reveal key={project.title} className={`delay-${i * 100}`}><ProjectCard project={project} /></Reveal>)}
      </div>
    </section>
  );
}