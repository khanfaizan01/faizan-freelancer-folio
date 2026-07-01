import { Code2, Mail, Linkedin } from 'lucide-react';
import { personal } from '../data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-cyan-400 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-bold font-mono text-sm">
              {personal.name}
            </span>
          </div>

          <p className="text-slate-500 text-sm">{year} — All rights reserved</p>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="w-9 h-9 rounded-lg bg-slate-800 text-slate-400 hover:bg-primary-600 hover:text-white flex items-center justify-center transition-all"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-800 text-slate-400 hover:bg-primary-600 hover:text-white flex items-center justify-center transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
