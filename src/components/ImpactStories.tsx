import { useState, useEffect } from 'react';
import { ChevronRight, TrendingUp, Filter, X } from 'lucide-react';
import { supabase, ImpactStory } from '../lib/supabase';
import { useInView } from '../hooks/useInView';

const categories = ['All', 'Performance', 'Architecture', 'Full-Stack'];

export function ImpactStories() {
  const [stories, setStories] = useState<ImpactStory[]>([]);
  const [filteredStories, setFilteredStories] = useState<ImpactStory[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [selectedStory, setSelectedStory] = useState<ImpactStory | null>(null);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    fetchStories();
  }, []);

  useEffect(() => {
    if (stories.length > 0) {
      const filtered =
        activeCategory === 'All'
          ? stories
          : stories.filter((s) => s.category === activeCategory);
      setFilteredStories(filtered);
    }
  }, [activeCategory, stories]);

  const fetchStories = async () => {
    try {
      const { data, error } = await supabase
        .from('impact_stories')
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) throw error;

      const typedData = (data || []).map((item) => ({
        ...item,
        impact_metrics:
          typeof item.impact_metrics === 'string'
            ? JSON.parse(item.impact_metrics)
            : item.impact_metrics,
      })) as ImpactStory[];

      setStories(typedData);
      setFilteredStories(typedData);
    } catch (err) {
      console.error('Error fetching stories:', err);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Performance':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Architecture':
        return 'bg-primary-100 text-primary-700 border-primary-200';
      case 'Full-Stack':
        return 'bg-accent-100 text-accent-700 border-accent-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <section id="impact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.05)_0%,transparent_40%)]" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-sm font-medium mb-4">
            Real Results
          </span>
          <h2 className="section-title">
            Impact <span className="gradient-text">Stories</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Anonymized case studies showcasing challenges solved and value delivered.
            Project names are aliases to protect client confidentiality.
          </p>
        </div>

        <div
          className={`flex flex-wrap items-center justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-2 text-slate-500 text-sm mr-2">
            <Filter className="w-4 h-4" />
            <span>Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="card p-6 animate-pulse">
                <div className="h-4 bg-slate-200 rounded w-1/3 mb-4" />
                <div className="h-6 bg-slate-200 rounded w-2/3 mb-4" />
                <div className="h-4 bg-slate-200 rounded w-full mb-2" />
                <div className="h-4 bg-slate-200 rounded w-4/5 mb-6" />
                <div className="flex gap-2">
                  <div className="h-6 bg-slate-200 rounded w-16" />
                  <div className="h-6 bg-slate-200 rounded w-16" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredStories.map((story, index) => (
              <div
                key={story.id}
                className={`card p-6 group cursor-pointer transition-all duration-500 ${
                  isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
                onClick={() => setSelectedStory(story)}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(
                      story.category
                    )}`}
                  >
                    {story.category}
                  </span>
                  {story.is_featured && (
                    <span className="flex items-center gap-1 px-2 py-1 rounded bg-amber-50 text-amber-600 text-xs font-medium">
                      <TrendingUp className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {story.alias}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {story.challenge}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tech_stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {story.tech_stack.length > 4 && (
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-500 text-xs">
                      +{story.tech_stack.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center text-primary-600 text-sm font-medium group-hover:text-primary-700">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredStories.length === 0 && !loading && (
          <div className="text-center py-16">
            <p className="text-slate-500">No stories found in this category.</p>
          </div>
        )}
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
              <div className="flex items-center gap-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(
                    selectedStory.category
                  )}`}
                >
                  {selectedStory.category}
                </span>
                {selectedStory.is_featured && (
                  <span className="flex items-center gap-1 px-2 py-1 rounded bg-amber-50 text-amber-600 text-xs font-medium">
                    <TrendingUp className="w-3 h-3" />
                    Featured
                  </span>
                )}
              </div>
              <button
                onClick={() => setSelectedStory(null)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {selectedStory.alias}
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    The Challenge
                  </h4>
                  <p className="text-slate-700 leading-relaxed">
                    {selectedStory.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    The Solution
                  </h4>
                  <p className="text-slate-700 leading-relaxed">
                    {selectedStory.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Impact Delivered
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedStory.impact_metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-lg bg-accent-50 border border-accent-100"
                      >
                        <TrendingUp className="w-5 h-5 text-accent-600 shrink-0" />
                        <span className="text-sm font-medium text-accent-900">
                          {metric}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedStory.tech_stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 text-white text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
