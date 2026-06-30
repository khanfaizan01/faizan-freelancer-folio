import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#impact', label: 'Impact Stories' },
  { href: '#tech', label: 'Tech Stack' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-xl shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-shadow">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              Dev<span className="text-primary-400">Folio</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-slate-300 hover:text-white transition-colors text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="btn-primary text-sm"
            >
              Let's Talk
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-slate-700/50 animate-fade-in-down">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-slate-300 hover:text-white hover:bg-slate-800/50 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="btn-primary text-sm justify-center mt-2"
              >
                Let's Talk
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
