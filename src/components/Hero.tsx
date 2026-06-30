import { useEffect, useState } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const roles = [
  'Full-Stack Developer',
  'Solution Architect',
  'Problem Solver',
  'Technical Consultant',
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const { ref, isInView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    const role = roles[currentRole];
    const speed = isDeleting ? 30 : 80;

    if (!isDeleting && displayText === role) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, -1) : role.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToWork = () => {
    const element = document.querySelector('#impact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen relative flex items-center justify-center overflow-hidden gradient-bg"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-600/5 to-accent-500/5 rounded-full blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(15,23,42,0.5)_100%)]" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-slate-300">Available for new projects</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            I architect solutions that
            <br />
            <span className="gradient-text">drive real impact</span>
          </h1>

          <div className="h-16 sm:h-20 flex items-center justify-center mb-8">
            <span className="text-xl sm:text-2xl md:text-3xl text-slate-400 font-light">
              I'm a{' '}
            </span>
            <span className="text-xl sm:text-2xl md:text-3xl text-primary-400 font-medium ml-2 border-r-2 border-primary-400 pr-1">
              {displayText}
            </span>
          </div>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            With expertise spanning full-stack development and system architecture,
            I transform complex business challenges into elegant, scalable technical solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={scrollToContact} className="btn-primary text-base">
              Start a Project
              <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
            </button>
            <button
              onClick={scrollToWork}
              className="btn-secondary text-base group"
            >
              View My Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
    </section>
  );
}
