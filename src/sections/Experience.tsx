import { BriefcaseBusiness, GraduationCap, LineChart } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { experience } from "../data/portfolio";

const icons = { briefcase: BriefcaseBusiness, chart: LineChart, graduation: GraduationCap };

export default function Experience() {
  return (
    <section id="experience" className="pt-4">
      <Reveal><SectionHeading eyebrow="Experience" title="My Journey." /></Reveal>
      <div className="relative ml-1">
        <div className="absolute left-[13px] top-4 bottom-4 w-px bg-gradient-to-b from-indigo-400 via-blue-300 to-slate-200" />
        <div className="space-y-6">
          {experience.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <Reveal key={item.title} className="relative flex gap-4">
                <div className="relative z-10 grid h-7 w-7 shrink-0 place-items-center rounded-full border-4 border-white bg-indigo-500 text-white shadow-sm"><span className="h-1.5 w-1.5 rounded-full bg-white" /></div>
                <div className="min-w-0">
                  <p className="text-[9px] text-slate-500">{item.date}</p>
                  <div className="mt-1 flex gap-3">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-slate-100 bg-white text-slate-600 shadow-[0_4px_14px_rgba(15,23,42,.04)]"><Icon size={17} /></div>
                    <div>
                      <h3 className="text-[13px] font-semibold">{item.title}</h3>
                      <p className="mt-0.5 text-[10px] font-medium text-indigo-500">{item.company}</p>
                      <p className="mt-1 max-w-[390px] text-[10px] leading-[1.55] text-slate-500">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}