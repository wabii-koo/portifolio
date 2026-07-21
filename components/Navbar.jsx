'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  const navLinks = [
    { name: 'Home', id: 'home', href: '/' },
    { name: 'About', id: 'about', href: '#about' },
    { name: 'Projects', id: 'projects', href: '#projects' },
    { name: 'Skills', id: 'skills', href: '#skills' },
    { name: 'Contact', id: 'contact', href: '#contact' }
  ];

  // Track scrolling to add background color/shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll Spy for active section on home page
      if (pathname === '/') {
        const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section === 'hero' ? 'home' : section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleLinkClick = (e, link) => {
    if (pathname === '/' && link.href.startsWith('#')) {
      e.preventDefault();
      const targetId = link.href.substring(1);
      const targetElement = document.getElementById(targetId === 'home' ? 'hero' : targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth',
        });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#050507]/80 backdrop-blur-md border-b border-white/5 py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition group">
          <div className="w-9 h-9 rounded-full overflow-hidden bg-[#0f0f11] shadow-md transition duration-300">
            <img 
              src="/welebe.png" 
              alt="Welebe Kebede" 
              className="w-full h-full object-cover rounded-full" 
            />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            Welebe<span className="text-[#a78bfa] font-extrabold">.</span>
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isLinkActive = pathname === '/' 
              ? activeSection === link.id
              : (link.href === '/' ? pathname === '/' : pathname.startsWith(link.href));

            return (
              <a
                key={link.name}
                href={pathname === '/' ? link.href : (link.href.startsWith('#') ? `/${link.href}` : link.href)}
                onClick={(e) => handleLinkClick(e, link)}
                className={`text-sm font-medium transition duration-300 relative py-1 ${
                  isLinkActive 
                    ? 'text-[#a78bfa]' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
                {isLinkActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#a78bfa] rounded-full"></span>
                )}
              </a>
            );
          })}
        </div>

        {/* Action buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 hover:border-[#a78bfa]/40 bg-white/5 hover:bg-[#a78bfa]/10 text-gray-400 hover:text-[#a78bfa] transition-all duration-300"
          >
            {theme === 'dark' ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <a
            href="/welebe-cv.pdf"
            download="Welebe_Kebede_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-white/10 hover:border-[#a78bfa]/30 hover:bg-[#a78bfa]/5 text-gray-300 hover:text-[#a78bfa] text-xs font-semibold rounded-full transition-all duration-300"
          >
            Download CV
          </a>
          <a
            href={pathname === '/' ? '#contact' : '/#contact'}
            onClick={(e) => handleLinkClick(e, { href: '#contact' })}
            className="px-5 py-2 bg-[#a78bfa] text-white font-semibold text-xs rounded-full transition-all duration-300 hover:scale-105 hover:bg-[#8b5cf6] shadow-md shadow-[#a78bfa]/10"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none p-1 z-50"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#050507]/95 backdrop-blur-lg z-40 flex flex-col justify-center items-center space-y-8 transition-all duration-500 md:hidden ${
        isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
        {navLinks.map((link) => {
          const isLinkActive = pathname === '/' 
            ? activeSection === link.id
            : (link.href === '/' ? pathname === '/' : pathname.startsWith(link.href));

          return (
            <a
              key={link.name}
              href={pathname === '/' ? link.href : (link.href.startsWith('#') ? `/${link.href}` : link.href)}
              onClick={(e) => handleLinkClick(e, link)}
              className={`text-2xl font-semibold transition duration-300 ${
                isLinkActive 
                  ? 'text-[#a78bfa]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          );
        })}
        <a
          href={pathname === '/' ? '#contact' : '/#contact'}
          onClick={(e) => {
            handleLinkClick(e, { href: '#contact' });
            setIsOpen(false);
          }}
          className="px-8 py-3 bg-[#a78bfa] text-[#050507] font-bold rounded-full text-lg transition duration-300 hover:scale-105"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}

