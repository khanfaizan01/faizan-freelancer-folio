import { Code2, Heart } from 'lucide-react';

const navLinks = [
  { href: '#expertise', label: 'Expertise' },
  { href: '#impact', label: 'Impact Stories' },
  { href: '#tech', label: 'Tech Stack' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-2 group mb-4"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-primary-500/30">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Dev<span className="text-primary-400">Folio</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Full-stack developer and solution architect helping businesses solve complex technical challenges.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block text-slate-400 hover:text-primary-400 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Status</h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-500"></span>
              </span>
              <span className="text-accent-400 text-sm font-medium">
                Available for new projects
              </span>
            </div>
            <p className="text-slate-500 text-sm">
              Response time: Within 24-48 hours
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm flex items-center gap-1">
            <span>{currentYear} All rights reserved.</span>
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>using React & Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
