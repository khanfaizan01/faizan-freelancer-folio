import { useState } from 'react';
import { ChevronRight, TrendingUp, X, Filter } from 'lucide-react';
import { impactStories } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

type Story = typeof impactStories[0];

const categories = ['All', 'Platform Engineering', 'AI Integration', 'Cloud-Native', 'Full-Stack'];

const categoryColors: Record<string, string> = {
  'Platform Engineering': 'bg-primary-100 text-primary-700 border-primary-200',
  'AI Integration': 'bg-violet-100 text-violet-700 border-violet-200',
  'Cloud-Native': 'bg-sky-100 text-sky-700 border-sky-200',
  'Full-Stack': 'bg-accent-100 text-accent-700 border-accent-200',
};

export function ImpactStories() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const filtered =
    activeCategory === 'All'
      ? impactStories
      : impactStories.filter((s) => s.category === activeCategory);

  return (
    <section id="impact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(6,182,212,0.04)_0%,transparent_40%)]" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-sm font-medium mb-4">
            Real Work
          </span>
          <h2 className="section-title">
            Impact <span className="gradient-text">Stories</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Anonymised case studies from actual engagements. Org and product names are
            abstracted to protect confidentiality.
          </p>
        </div>

        <div
          className={`flex flex-wrap items-center justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="flex items-center gap-1.5 text-slate-400 text-sm mr-1">
            <Filter className="w-3.5 h-3.5" /> Filter
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((story, index) => (
            <div
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className={`card p-6 group cursor-pointer transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 80}ms` }}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                    categoryColors[story.category] ?? 'bg-slate-100 text-slate-600 border-slate-200'
                  }`}
                >
                  {story.category}
                </span>
                <span className="text-xs text-slate-400 shrink-0">{story.industry}</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-700 transition-colors">
                {story.alias}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                {story.challenge}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {story.techStack.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
                {story.techStack.length > 4 && (
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-400 text-xs">
                    +{story.techStack.length - 4}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1 text-primary-600 text-sm font-medium group-hover:text-primary-700">
                View case study
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedStory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                    categoryColors[selectedStory.category] ?? 'bg-slate-100 text-slate-600 border-slate-200'
                  }`}
                >
                  {selectedStory.category}
                </span>
                <span className="text-xs text-slate-400">{selectedStory.industry}</span>
              </div>
              <button
                onClick={() => setSelectedStory(null)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">{selectedStory.alias}</h3>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  The Challenge
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">{selectedStory.challenge}</p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  The Solution
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">{selectedStory.solution}</p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Impact Delivered
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedStory.impact.map((m, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-accent-50 border border-accent-100"
                    >
                      <TrendingUp className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-accent-900">{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedStory.techStack.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 text-white text-sm font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
