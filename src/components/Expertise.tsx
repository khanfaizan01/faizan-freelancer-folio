import { Server, PenTool, Database, Cloud, Terminal, Layout } from 'lucide-react';
import { expertiseAreas } from '../data/portfolio';
import { useInView } from '../hooks/useInView';
import { LucideIcon } from 'lucide-react';

const icons: LucideIcon[] = [Server, PenTool, Database, Cloud, Terminal, Layout];

export function Expertise() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="expertise" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.04)_0%,transparent_50%)]" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            What I Do
          </span>
          <h2 className="section-title">
            Areas of <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle mx-auto">
            7+ years of focused engineering across backend systems, cloud infrastructure, and
            full-stack delivery in enterprise environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={area.title}
                className={`card p-6 group transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-shadow shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-primary-700 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-3">
                      {area.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {area.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-xs font-medium"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
