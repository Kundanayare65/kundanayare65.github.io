import { CheckCircle2, Cloud, Code2, GraduationCap } from "lucide-react";
import Reveal from "../components/Reveal";

const items = [
  ["Software Engineer", "Building modern applications", Code2],
  ["Cloud & Systems", "Infrastructure and automation", Cloud],
  ["B.Tech CSE", "SRM Institute of Science & Technology", GraduationCap],
  ["Open to Opportunities", "Available for meaningful work", CheckCircle2],
];

export default function Highlights() {
  return (
    <Reveal>
      <section className="mx-auto max-w-[1180px] px-5 py-5 lg:px-8">
        <div className="grid overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_8px_30px_rgba(15,23,42,.05)] sm:grid-cols-2 lg:grid-cols-4">
          {items.map(([title, sub, Icon], i) => {
            const I = Icon as typeof Code2;
            return (
              <div key={title as string} className={`flex min-h-[90px] items-center gap-4 px-6 py-4 ${i > 0 ? "border-t sm:border-l sm:border-t-0" : ""} border-slate-100`}>
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-500"><I size={21} /></div>
                <div><p className="text-[11px] font-semibold uppercase">{title as string}</p><p className="mt-1 text-[11px] leading-4 text-slate-500">{sub as string}</p></div>
              </div>
            );
          })}
        </div>
      </section>
    </Reveal>
  );
}