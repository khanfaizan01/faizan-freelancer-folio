import { useEffect, useState } from 'react';
import { ArrowDown, MapPin, Mail, ExternalLink } from 'lucide-react';
import { personal } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

const roles = personal.taglines;

function CoderAvatar() {
  return (
    <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-cyan-500/20 animate-pulse-slow" />
      <div className="absolute inset-3 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-primary-500/20 overflow-hidden flex items-end justify-center">
        <svg
          viewBox="0 0 280 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <rect width="280" height="300" fill="#1E293B" />
          <circle cx="140" cy="95" r="52" fill="#334155" />
          <circle cx="140" cy="92" r="44" fill="#475569" />
          <ellipse cx="125" cy="88" rx="6" ry="7" fill="#1E293B" />
          <ellipse cx="155" cy="88" rx="6" ry="7" fill="#1E293B" />
          <circle cx="127" cy="87" r="3" fill="#0891B2" />
          <circle cx="157" cy="87" r="3" fill="#0891B2" />
          <path d="M128 100 Q140 108 152 100" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" fill="none" />
          <rect x="60" y="145" width="160" height="90" rx="12" fill="#1E40AF" />
          <rect x="72" y="157" width="136" height="66" rx="6" fill="#0F172A" />
          <text x="84" y="175" fill="#22C55E" fontSize="9" fontFamily="monospace">&gt; run server</text>
          <text x="84" y="190" fill="#06B6D4" fontSize="9" fontFamily="monospace">✓ listening :8080</text>
          <text x="84" y="205" fill="#F59E0B" fontSize="9" fontFamily="monospace">GET /api/v1/data</text>
          <text x="84" y="220" fill="#94A3B8" fontSize="9" fontFamily="monospace">200 OK — 12ms</text>
          <rect x="98" y="235" width="84" height="18" rx="4" fill="#1E40AF" />
          <text x="140" y="248" fill="white" fontSize="8" fontFamily="monospace" textAnchor="middle">▶ RUNNING</text>
        </svg>
      </div>
      <div className="absolute -top-2 -right-2 bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-mono text-primary-400 shadow-lg animate-float">
        @SpringBoot
      </div>
      <div className="absolute -bottom-2 -left-2 bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-mono text-accent-400 shadow-lg animate-float delay-300">
        7+ yrs exp
      </div>
      <div className="absolute top-1/2 -right-4 bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-mono text-cyan-400 shadow-lg animate-float delay-500">
        Java
      </div>
    </div>
  );
}

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const { ref, isInView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    const role = roles[currentRole];
    const speed = isDeleting ? 30 : 80;

    if (!isDeleting && displayText === role) {
      setTimeout(() => setIsDeleting(true), 2200);
      return;
    }
    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRole((p) => (p + 1) % roles.length);
      return;
    }
    const t = setTimeout(() => {
      setDisplayText((p) => (isDeleting ? p.slice(0, -1) : role.slice(0, p.length + 1)));
    }, speed);
    return () => clearTimeout(t);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen relative flex items-center justify-center overflow-hidden gradient-bg"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl animate-pulse-slow delay-500" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
              </span>
              <span className="text-sm text-slate-300 font-mono">Available for freelance</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight">
              Mohd Faizan
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Khan</span>
            </h1>

            <div className="h-10 flex items-center mb-6">
              <span className="text-lg sm:text-xl text-slate-400 font-light mr-2">I am a</span>
              <span className="text-lg sm:text-xl text-primary-400 font-mono border-r-2 border-primary-400 pr-1">
                {displayText}
              </span>
            </div>

            <p className="text-base text-slate-400 max-w-lg mb-8 leading-relaxed">
              {personal.summary}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                View LinkedIn
              </a>
              <a href={`mailto:${personal.email}`} className="btn-secondary text-sm">
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </div>

            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <MapPin className="w-4 h-4 text-slate-600" />
              <span>{personal.location}</span>
            </div>
          </div>

          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <CoderAvatar />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <button
          onClick={() => document.querySelector('#expertise')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
          <div className="w-5 h-9 rounded-full border-2 border-slate-700 flex items-start justify-center p-1">
            <div className="w-1 h-1.5 rounded-full bg-primary-400 animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}
