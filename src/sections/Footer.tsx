import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-3.5 lg:px-8">
        <p className="text-[9px] text-slate-500">© 2026 Kundan Ayare. All rights reserved.</p>
        <div className="flex items-center gap-4 text-slate-600">
          <a href="https://github.com/Kundanayare65" aria-label="GitHub" className="transition hover:text-indigo-500"><Github size={13} /></a>
          <a href="https://linkedin.com/in/kundan-ayare-77a024212/" aria-label="LinkedIn" className="transition hover:text-indigo-500"><Linkedin size={13} /></a>
          <a href="mailto:kundanayare65@gmail.com" aria-label="Email" className="transition hover:text-indigo-500"><Mail size={13} /></a>
        </div>
      </div>
    </footer>
  );
}