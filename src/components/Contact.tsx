import { Mail, Linkedin, MapPin, MessageSquare } from 'lucide-react';
import { personal } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

export function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.04)_0%,transparent_60%)]" />

      <div ref={ref} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            Work With Me
          </span>
          <h2 className="section-title">
            Let's Build <span className="gradient-text">Something</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Open to freelance engagements — backend architecture, API design, system design
            consulting, or full-stack delivery. Drop me a message through any channel.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-10">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-4 p-5 card hover:border-primary-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center shadow-md shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-shadow shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400 mb-0.5">Email</p>
                <p className="text-sm font-semibold text-slate-800 group-hover:text-primary-700 transition-colors break-all">
                  {personal.email}
                </p>
              </div>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 card hover:border-primary-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500 to-primary-600 flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-shadow shrink-0">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400 mb-0.5">LinkedIn</p>
                <p className="text-sm font-semibold text-slate-800 group-hover:text-primary-700 transition-colors">
                  faizan~khan
                </p>
              </div>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{personal.location}</span>
            <span className="mx-2">·</span>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
              </span>
              <span>Available for freelance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
