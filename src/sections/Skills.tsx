import { Cloud, Code2, LineChart, Monitor, Wrench } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { skills } from "../data/portfolio";

const icons = { code: Code2, monitor: Monitor, cloud: Cloud, chart: LineChart, tools: Wrench };

export default function Skills() {
  return (
    <section id="skills" className="pt-4">
      <Reveal><SectionHeading eyebrow="Technologies" title="My Toolkit." /></Reveal>
      <div className="space-y-2.5">
        {skills.map((row) => {
          const Icon = icons[row.icon as keyof typeof icons];
          return (
            <Reveal key={row.label}>
              <div className="flex min-h-[46px] flex-wrap items-center gap-3 rounded-lg border border-slate-100 bg-white px-3 shadow-[0_4px_15px_rgba(15,23,42,.03)]">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-50 text-indigo-500"><Icon size={15} /></div>
                <span className="w-[112px] text-[10px] font-medium">{row.label}</span>
                <div className="flex flex-1 flex-wrap gap-2">
                  {row.values.map((v) => <span key={v} className="rounded-full bg-slate-50 px-3 py-1.5 text-[9px] font-medium text-slate-600">{v}</span>)}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}