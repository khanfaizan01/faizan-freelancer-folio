import { Search, PenTool, Code, Rocket, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface ProcessStep {
  number: string;
  icon: typeof Search;
  title: string;
  description: string;
  details: string[];
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    icon: Search,
    title: 'Understand',
    description: 'Every great solution starts with deep understanding.',
    details: [
      'Comprehensive requirements analysis',
      'Stakeholder interviews',
      'Technical feasibility assessment',
      'Clear scope definition',
    ],
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design',
    description: 'Architecting solutions that scale and perform.',
    details: [
      'System architecture design',
      'Database schema planning',
      'API design & documentation',
      'Security considerations',
    ],
  },
  {
    number: '03',
    icon: Code,
    title: 'Build',
    description: 'Clean, maintainable code with best practices.',
    details: [
      'Iterative development cycles',
      'Continuous integration',
      'Code review & testing',
      'Performance optimization',
    ],
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Deliver',
    description: 'Launch with confidence and ongoing support.',
    details: [
      'Smooth deployment',
      'Documentation & handoff',
      'Monitoring & maintenance',
      'Iterative improvements',
    ],
  },
];

export function Process() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="process" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.03)_0%,transparent_50%)]" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            My Approach
          </span>
          <h2 className="section-title">
            How I <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A proven process refined through years of delivering successful projects.
            Every step is designed to ensure quality, transparency, and results.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary-200 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`relative group transition-all duration-500 ${
                  isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="card p-6 h-full relative z-10 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-shadow">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-4xl font-bold text-slate-100 group-hover:text-primary-100 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-sm mb-4">{step.description}</p>

                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-500"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 z-20 -translate-y-1/2 w-8 h-8 rounded-full bg-primary-600 text-white items-center justify-center shadow-lg">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
