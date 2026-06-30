import { useState } from 'react';
import { Send, Mail, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useInView } from '../hooks/useInView';

const projectTypes = [
  'MVP Development',
  'Technical Consultation',
  'Code Review & Audit',
  'Performance Optimization',
  'System Architecture',
  'Ongoing Support',
  'Other',
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project_type: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          email: formData.email,
          project_type: formData.project_type || null,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', project_type: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.05)_0%,transparent_50%)]" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Get in Touch
            </span>
            <h2 className="section-title mb-6">
              Let's Build <span className="gradient-text">Something Great</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Have a project in mind? I'm always open to discussing new opportunities,
              technical challenges, or how I can help bring your ideas to life.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email me at</p>
                  <a
                    href="mailto:hello@example.com"
                    className="text-slate-900 font-medium hover:text-primary-600 transition-colors"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-4">Connect with me</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 hover:bg-primary-600 hover:text-white flex items-center justify-center transition-all"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 hover:bg-primary-600 hover:text-white flex items-center justify-center transition-all"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="card p-8 bg-slate-50 border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="project_type"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Project Type
                </label>
                <select
                  id="project_type"
                  name="project_type"
                  value={formData.project_type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Tell me about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Describe your project, goals, and timeline..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 rounded-lg bg-accent-50 border border-accent-200">
                  <CheckCircle className="w-5 h-5 text-accent-600 shrink-0" />
                  <p className="text-sm text-accent-700">
                    Message sent successfully! I'll get back to you within 24-48 hours.
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                  <p className="text-sm text-red-700">
                    Something went wrong. Please try again or email me directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
