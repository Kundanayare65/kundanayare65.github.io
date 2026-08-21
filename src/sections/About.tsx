import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import Reveal from "../components/Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1180px] px-5 pb-10 pt-12 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
        <Reveal>
          <p className="mb-1 text-[10px] font-medium uppercase tracking-wide text-indigo-500">About</p>
          <h2 className="text-[23px] font-semibold tracking-[-0.035em]">A little about me.</h2>
          <div className="mt-4 max-w-[420px] space-y-2.5 text-[11px] leading-[1.65] text-slate-600">
            <p>I'm a Computer Science graduate and Software Engineer who enjoys building efficient, reliable, and meaningful software.</p>
            <p>I'm interested in backend systems, cloud technologies, automation, and solving practical engineering problems. Outside of work, I enjoy exploring new technology and continuously improving my skills.</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[9px] text-slate-600"><MapPin size={11} className="text-indigo-500" /> Based in India</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[9px] text-slate-600"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Open to opportunities</span>
          </div>
        </Reveal>

        <Reveal>
          <div id="contact" className="relative overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-purple-100 via-white to-indigo-50 px-7 py-7 shadow-[0_12px_40px_rgba(99,102,241,.08)]">
            <div className="absolute inset-0 opacity-30 dot-pattern" />
            <div className="relative">
              <h3 className="text-[19px] font-semibold tracking-[-0.025em]">Let's build something meaningful.</h3>
              <p className="mt-2 max-w-[480px] text-[11px] leading-5 text-slate-600">I'm always interested in discussing technology, software, and meaningful opportunities.</p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-4 py-2.5 text-[10px] font-medium transition hover:border-indigo-200 hover:text-indigo-500"><Mail size={13} /> Email Me</a>
                <a href="https://www.linkedin.com/" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-4 py-2.5 text-[10px] font-medium transition hover:border-indigo-200 hover:text-indigo-500"><Linkedin size={13} /> LinkedIn</a>
                <a href="https://github.com/" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-4 py-2.5 text-[10px] font-medium transition hover:border-indigo-200 hover:text-indigo-500"><Github size={13} /> GitHub</a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}