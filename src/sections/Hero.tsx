import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { resumeUrl } from "../data/portfolio";

function CodeWindow() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[600px]">
      <div className="absolute right-[12%] top-3 w-[82%] overflow-hidden rounded-xl border border-slate-200 bg-white/95 shadow-[0_20px_55px_rgba(71,85,105,.12)]">
        <div className="flex h-10 items-center gap-2 border-b border-slate-100 px-4">
          <span className="h-2 w-2 rounded-full bg-red-400" /><span className="h-2 w-2 rounded-full bg-amber-400" /><span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="ml-auto text-[10px] text-slate-500">system-monitor.rs</span>
        </div>
        <pre className="px-5 py-4 text-[10px] leading-[1.9] text-slate-600 sm:text-[11px]"><code>{`1  use axum::{Router, routing::get};
2  use serde::Serialize;
3
4  #[derive(Serialize)]
5  struct HealthResponse {
6      status: &'static str,
7      uptime: u64,
8  }
9
10 async fn health() -> Json<HealthResponse> {
11     Json(HealthResponse {
12         status: "ok",
13         uptime: 123456,
14     })
15 }
16
17 let app = Router::new().route("/health", get(health));`}</code></pre>
      </div>

      <div className="absolute left-[8%] bottom-[76px] w-[58%] rounded-xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(71,85,105,.10)]">
        <div className="flex items-center gap-2 border-b border-slate-100 px-3 py-2 text-[10px] font-medium"><span className="h-2 w-2 rounded-full bg-emerald-400" /> bash</div>
        <pre className="px-4 py-3 text-[9px] leading-5 text-slate-500">{`$ kubectl get pods
NAME       STATUS    READY
api        Running   1/1
monitor    Running   1/1
worker     Running   1/1`}</pre>
      </div>

      <div className="absolute right-0 top-[135px] w-[43%] rounded-xl border border-slate-200 bg-white p-3 shadow-[0_20px_55px_rgba(71,85,105,.12)]">
        <div className="mb-3 flex items-center justify-between text-[11px] font-semibold">System Overview <span className="font-normal text-slate-400">Last 7 days</span></div>
        <div className="grid grid-cols-2 gap-2">
          {[
            ["CPU Usage", "28%"], ["Memory Usage", "62%"], ["Network In", "1.2 GB/s"], ["Requests", "18.6K"],
          ].map(([a, b]) => (
            <div key={a} className="rounded-lg border border-slate-100 bg-slate-50/60 p-2">
              <div className="text-[8px] text-slate-500">{a}</div>
              <div className="mt-1 text-[13px] font-bold">{b}</div>
              <svg viewBox="0 0 100 28" className="mt-2 h-6 w-full" aria-hidden="true">
                <path d="M0 22 L12 18 L22 20 L32 11 L44 16 L56 7 L67 14 L78 9 L89 16 L100 4" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-indigo-400" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="hero-glow absolute inset-x-0 top-0 -z-10 h-[540px]" />
      <div className="mx-auto grid max-w-[1180px] items-center gap-8 px-5 pb-8 pt-12 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:pt-16">
        <Reveal>
          <div className="max-w-[560px]">
            <p className="mb-5 text-[12px] font-medium uppercase tracking-wide text-purple-800">→ &nbsp; Hello, I'm Kundan</p>
            <h1 className="text-[46px] font-bold leading-[1.03] tracking-[-0.045em] sm:text-[58px] lg:text-[55px] xl:text-[60px]">
              Kundan Ayare<span className="text-indigo-500">.</span>
            </h1>
            <p className="mt-4 text-[21px] font-medium tracking-[-0.02em]">
              <span className="gradient-text">DevOps & ML Engineer</span> building scalable systems.
            </p>
            <p className="mt-5 max-w-[450px] text-[15px] leading-7 text-slate-500">
              I build cloud-native platforms, GitOps delivery pipelines, and data-driven solutions with a focus on reliable engineering.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-5 py-3 text-[13px] font-semibold text-white shadow-lg shadow-indigo-100 transition hover:-translate-y-0.5">
                Explore My Work <ArrowRight size={15} />
              </a>
              <a href={resumeUrl} download="Kundan_resume.pdf" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-[13px] font-semibold text-slate-800 transition hover:border-indigo-300 hover:bg-indigo-50/40">
                Download Resume <Download size={15} />
              </a>
            </div>
            <div className="mt-7 flex w-fit overflow-hidden rounded-xl border border-slate-200 bg-white/80">
              {[
                ["GitHub", Github, "https://github.com/Kundanayare65"],
                ["LinkedIn", Linkedin, "https://linkedin.com/in/kundan-ayare-77a024212/"],
                ["Email", Mail, "mailto:kundanayare65@gmail.com"],
              ].map(([label, Icon, href]) => {
                const I = Icon as typeof Github;
                return <a key={label as string} href={href as string} aria-label={label as string} className="grid h-10 w-14 place-items-center border-r border-slate-200 last:border-0 text-slate-700 transition hover:bg-slate-50 hover:text-indigo-500"><I size={17} /></a>;
              })}
            </div>
          </div>
        </Reveal>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7, ease: "easeOut" }} className="lg:pl-4">
          <CodeWindow />
        </motion.div>
      </div>
    </section>
  );
}