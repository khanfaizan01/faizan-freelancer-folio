import { LucideIcon } from 'lucide-react';
import {
  Server,
  Code,
  Database,
  Cloud,
  Zap,
  Lightbulb,
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface ExpertiseArea {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
}

const expertiseAreas: ExpertiseArea[] = [
  {
    icon: Server,
    title: 'Backend Architecture & APIs',
    description:
      'Designing robust, scalable backend systems that power mission-critical applications.',
    highlights: ['RESTful & GraphQL APIs', 'Microservices', 'Event-Driven Architecture'],
  },
  {
    icon: Code,
    title: 'Frontend Development',
    description:
      'Building responsive, performant user interfaces that deliver exceptional experiences.',
    highlights: ['React & Next.js', 'TypeScript', 'Modern CSS/Tailwind'],
  },
  {
    icon: Database,
    title: 'Database Design & Optimization',
    description:
      'Architecting data layers that scale efficiently while maintaining data integrity.',
    highlights: ['PostgreSQL & MySQL', 'NoSQL Solutions', 'Query Optimization'],
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure & DevOps',
    description:
      'Implementing cloud-native solutions with automated deployment pipelines.',
    highlights: ['AWS & GCP', 'Docker & Kubernetes', 'CI/CD Pipelines'],
  },
  {
    icon: Zap,
    title: 'Performance Engineering',
    description:
      'Identifying and eliminating bottlenecks to achieve optimal system performance.',
    highlights: ['Load Testing', 'Caching Strategies', 'Code Profiling'],
  },
  {
    icon: Lightbulb,
    title: 'Technical Consultation',
    description:
      'Providing strategic technical guidance to help businesses make informed decisions.',
    highlights: ['Architecture Reviews', 'Tech Stack Selection', 'Team Mentoring'],
  },
];

export function Expertise() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="expertise" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.03)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.03)_0%,transparent_50%)]" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            What I Bring
          </span>
          <h2 className="section-title">
            Expertise That <span className="gradient-text">Delivers Results</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive skill set built through solving real-world challenges across
            diverse industries and technology stacks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.title}
              className={`card p-6 group transition-all duration-500 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-shadow shrink-0">
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
