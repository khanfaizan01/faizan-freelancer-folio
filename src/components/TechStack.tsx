import { LucideIcon } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Tech {
  name: string;
  level: number;
}

interface TechCategory {
  title: string;
  icon: string;
  technologies: Tech[];
}

const techCategories: TechCategory[] = [
  {
    title: 'Frontend',
    icon: 'UI',
    technologies: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Next.js', level: 88 },
      { name: 'Vue.js', level: 80 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'HTML/CSS', level: 98 },
    ],
  },
  {
    title: 'Backend',
    icon: 'BE',
    technologies: [
      { name: 'Node.js', level: 94 },
      { name: 'Python', level: 88 },
      { name: 'Go', level: 75 },
      { name: 'Java', level: 70 },
      { name: 'Express', level: 92 },
      { name: 'FastAPI', level: 82 },
    ],
  },
  {
    title: 'Databases',
    icon: 'DB',
    technologies: [
      { name: 'PostgreSQL', level: 92 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 88 },
      { name: 'MySQL', level: 90 },
      { name: 'SQLite', level: 95 },
      { name: 'Elasticsearch', level: 70 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'CL',
    technologies: [
      { name: 'AWS', level: 88 },
      { name: 'Docker', level: 90 },
      { name: 'Kubernetes', level: 78 },
      { name: 'CI/CD', level: 92 },
      { name: 'GCP', level: 75 },
      { name: 'Linux', level: 88 },
    ],
  },
  {
    title: 'Tools & More',
    icon: 'TL',
    technologies: [
      { name: 'Git', level: 96 },
      { name: 'REST APIs', level: 95 },
      { name: 'GraphQL', level: 85 },
      { name: 'WebSocket', level: 88 },
      { name: 'Postman', level: 90 },
      { name: 'Figma', level: 72 },
    ],
  },
];

export function TechStack() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const getLevelColor = (level: number) => {
    if (level >= 90) return 'from-primary-500 to-cyan-500';
    if (level >= 80) return 'from-cyan-500 to-teal-500';
    if (level >= 70) return 'from-teal-500 to-accent-500';
    return 'from-slate-400 to-slate-500';
  };

  return (
    <section id="tech" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(34,197,94,0.08)_0%,transparent_50%)]" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-900/50 text-primary-300 text-sm font-medium mb-4 border border-primary-700/50">
            Technical Arsenal
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Technologies I work with to build robust, scalable solutions.
            Proficiency levels reflect hands-on production experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm transition-all duration-500 hover:border-primary-500/30 hover:bg-slate-800/70 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.technologies.map((tech) => (
                  <div key={tech.name} className="group">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                        {tech.name}
                      </span>
                      <span className="text-xs text-slate-500">{tech.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${getLevelColor(
                          tech.level
                        )} transition-all duration-1000 ease-out`}
                        style={{
                          width: isInView ? `${tech.level}%` : '0%',
                          transitionDelay: `${catIndex * 100 + 300}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 delay-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-slate-500 text-sm">
            Proficiency levels based on production experience: Expert (90%+), Advanced (80-89%), Intermediate (70-79%)
          </p>
        </div>
      </div>
    </section>
  );
}
