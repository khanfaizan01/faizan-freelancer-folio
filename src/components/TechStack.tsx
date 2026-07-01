import { useState, useEffect, useRef } from 'react';
import { techCategories } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

interface TechItem {
  name: string;
  icon: string;
  color: string;
}

function TechCard({ tech, delay, visible }: { tech: TechItem; delay: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group flex flex-col items-center justify-center gap-3 p-4 rounded-xl border transition-all duration-500 cursor-default ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${
        hovered
          ? 'bg-slate-800 border-primary-500/50 shadow-lg shadow-primary-500/10 -translate-y-1'
          : 'bg-slate-800/40 border-slate-700/50 hover:border-slate-600'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <i
        className={`${tech.icon} text-3xl transition-all duration-300`}
        style={{ color: hovered ? tech.color : '#94a3b8' }}
      />
      <span className="text-xs font-medium text-slate-400 group-hover:text-slate-200 transition-colors text-center leading-tight">
        {tech.name}
      </span>
    </div>
  );
}

export function TechStack() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const handleTabChange = (idx: number) => {
    setActiveTab(idx);
    setAnimKey((k) => k + 1);
  };

  return (
    <section id="tech" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(6,182,212,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(34,197,94,0.05)_0%,transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-900/50 text-primary-300 text-sm font-medium mb-4 border border-primary-700/50">
            Tools of the Trade
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Technologies I work with in production — hover to see the brand colours.
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {techCategories.map((cat, idx) => (
            <button
              key={cat.label}
              onClick={() => handleTabChange(idx)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === idx
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20'
                  : 'bg-slate-800/60 text-slate-400 border border-slate-700/50 hover:text-white hover:border-slate-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div
          key={animKey}
          className={`transition-all duration-700 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {techCategories[activeTab].techs.map((tech, i) => (
              <TechCard
                key={`${activeTab}-${tech.name}`}
                tech={tech}
                delay={i * 60}
                visible={isInView}
              />
            ))}
          </div>
        </div>

        <div
          className={`mt-16 transition-all duration-700 delay-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-center text-slate-600 text-xs uppercase tracking-widest mb-6">
            All technologies at a glance
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {techCategories.flatMap((cat) =>
              cat.techs.map((tech) => (
                <span
                  key={`all-${tech.name}`}
                  className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/40 text-slate-400 text-xs font-medium hover:border-primary-500/40 hover:text-slate-200 transition-all duration-200 cursor-default"
                >
                  {tech.name}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
