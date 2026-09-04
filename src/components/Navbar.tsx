import { Download } from "lucide-react";
import { useState } from "react";
import { navItems, resumeUrl } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100/90 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between px-5 lg:px-8">
        <a href="#home" className="text-[20px] font-bold tracking-[-0.04em]">
          Kundan<span className="text-indigo-500">.</span>
        </a>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="text-lg">☰</span>
        </button>

        <div className={`${open ? "flex" : "hidden"} absolute left-4 right-4 top-[78px] flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl lg:static lg:flex lg:flex-row lg:items-center lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}>
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="relative px-2 py-2 text-[13px] font-medium text-slate-700 transition hover:text-slate-950"
            >
              {item.label}
              {i === 0 && (
                <span className="absolute bottom-0 left-1/2 hidden h-1 w-1 -translate-x-1/2 rounded-full bg-indigo-500 lg:block" />
              )}
            </a>
          ))}
        </div>

        <a
          href={resumeUrl}
          download="Kundan_resume.pdf"
          className="hidden items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 px-5 py-3 text-[13px] font-semibold text-white shadow-md shadow-indigo-100 transition hover:-translate-y-0.5 hover:shadow-lg md:flex"
        >
          <Download size={15} />
          Resume
        </a>
      </nav>
    </header>
  );
}