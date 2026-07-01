import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { quotes } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

export function Quotes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, isInView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (!isInView) return;
    const timer = setInterval(() => {
      setActiveIndex((p) => (p + 1) % quotes.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.04)_0%,transparent_60%)]" />

      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-10">
            <Quote className="w-6 h-6 text-primary-600" />
          </div>

          <div className="relative min-h-[120px] flex items-center justify-center">
            {quotes.map((q, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                  i === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                <blockquote className="text-xl sm:text-2xl font-medium text-slate-700 leading-relaxed mb-6 italic">
                  "{q.text}"
                </blockquote>
                <div className="flex flex-col items-center gap-1">
                  <span className="font-semibold text-slate-900 text-sm">{q.author}</span>
                  <span className="text-slate-400 text-xs">{q.role}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-10">
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-6 h-2 bg-primary-600'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
