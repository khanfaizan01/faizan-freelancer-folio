import { useState } from 'react';
import { Clock, ChevronDown, ChevronUp, Lightbulb, ArrowRight } from 'lucide-react';
import { blogs } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

type Blog = typeof blogs[0];

const tagColors: Record<string, string> = {
  'AI Insights': 'bg-violet-100 text-violet-700 border border-violet-200',
  Architecture: 'bg-primary-100 text-primary-700 border border-primary-200',
};

function BlogCard({ blog, index, isInView }: { blog: Blog; index: number; isInView: boolean }) {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div
      className={`card overflow-hidden transition-all duration-500 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${200 + index * 150}ms` }}
    >
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${tagColors[blog.tag] ?? 'bg-slate-100 text-slate-600'}`}
          >
            {blog.tag}
          </span>
          <div className="flex items-center gap-1.5 text-slate-400 text-xs ml-auto">
            <Clock className="w-3.5 h-3.5" />
            <span>{blog.readTime}</span>
            <span className="mx-1">·</span>
            <span>{blog.date}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">{blog.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{blog.subtitle}</p>
      </div>

      <div className="divide-y divide-slate-100">
        {blog.insights.map((insight, i) => (
          <div key={i} className="group">
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="w-full flex items-start gap-3 p-4 hover:bg-slate-50 transition-colors text-left"
            >
              <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-primary-700 text-xs font-bold">{i + 1}</span>
              </div>
              <div className="flex-1">
                <span className="text-sm font-semibold text-slate-800 group-hover:text-primary-700 transition-colors">
                  {insight.heading}
                </span>
              </div>
              <div className="shrink-0 mt-0.5 text-slate-400">
                {expanded === i ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </div>
            </button>

            {expanded === i && (
              <div className="px-4 pb-4 ml-9">
                <p className="text-sm text-slate-600 leading-relaxed">{insight.body}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="p-5 bg-gradient-to-r from-primary-50 to-cyan-50 border-t border-slate-100">
        <div className="flex items-start gap-2">
          <Lightbulb className="w-4 h-4 text-primary-600 mt-0.5 shrink-0" />
          <p className="text-sm text-slate-600 italic">{blog.takeaway}</p>
        </div>
      </div>
    </div>
  );
}

export function Blogs() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="blogs" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.04)_0%,transparent_50%)]" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
            Insights
          </span>
          <h2 className="section-title">
            Engineering <span className="gradient-text">Deep Dives</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Curated insights on AI, system design, and software engineering — the kind of
            knowledge that takes years to stumble upon otherwise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
