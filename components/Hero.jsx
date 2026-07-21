'use client';

import { useState, useEffect } from 'react';

const techOrbit = [
  { name: 'React',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',          color: '#61dafb', glow: 'rgba(97,218,251,0.4)', pos: 'top-[4%] left-[10%]', animDelay: '0s' },
  { name: 'Next.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',        color: '#ffffff', glow: 'rgba(255,255,255,0.3)', pos: 'top-[0%] right-[12%]', animDelay: '0.7s' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',color: '#3178c6', glow: 'rgba(49,120,198,0.4)', pos: 'top-[36%] left-[-4%]', animDelay: '1.4s' },
  { name: 'Node.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',        color: '#68a063', glow: 'rgba(104,160,99,0.4)', pos: 'top-[34%] right-[-4%]', animDelay: '0.4s' },
  { name: 'Laravel',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',      color: '#ff2d20', glow: 'rgba(255,45,32,0.4)', pos: 'bottom-[22%] left-[0%]', animDelay: '1.8s' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',color: '#336791', glow: 'rgba(51,103,145,0.4)', pos: 'bottom-[12%] right-[4%]', animDelay: '0.9s' },
  { name: 'Tailwind',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',color:'#38bdf8', glow: 'rgba(56,189,248,0.4)', pos: 'bottom-[4%] left-[18%]', animDelay: '2.1s' },
  { name: 'Supabase',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',    color: '#3ecf8e', glow: 'rgba(62,207,142,0.4)', pos: 'top-[60%] left-[-2%]', animDelay: '1.2s' },
];

export default function Hero() {
  const [codeLine, setCodeLine] = useState(0);

  const codeSnippets = [
    'const dev = { name: "Welebe Kebede" };',
    'const degree = "B.Sc. CS @ AAU";',
    'const stack = ["React", "Next", "Laravel"];',
    'return <FullStackDeveloper status="Ready" />;'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCodeLine((prev) => (prev + 1) % codeSnippets.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[#050507] overflow-hidden px-6"
    >
      {/* Ambient background glows */}
      <div className="glow-sphere glow-violet w-[500px] h-[500px] top-[-10%] right-[-10%] opacity-20 animate-pulse-soft"></div>
      <div className="glow-sphere glow-purple w-[400px] h-[400px] bottom-[-10%] left-[-10%] opacity-15"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center pt-20 pb-12">

        {/* LEFT: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Available badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 mb-6 backdrop-blur-sm animate-float">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a78bfa] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a78bfa]"></span>
            </span>
            Available for freelance &amp; full-time roles
          </div>

          {/* Greeting */}
          <p className="text-sm font-bold uppercase tracking-widest text-[#a78bfa] mb-3">Hello, I'm</p>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Welebe Kebede
          </h1>

          <p className="text-lg md:text-xl text-gray-300 font-medium mb-4">
            Full-Stack Developer &amp; CS Graduate (AAU)
          </p>

          <p className="text-sm md:text-base text-gray-400 max-w-xl mb-8 leading-relaxed">
            Engineering <strong className="text-white">scalable web architectures, REST APIs, and modern frontends</strong> — from school management systems to cultural heritage web apps.
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center lg:justify-start">
            {['React & Next.js', 'Node.js & Laravel', 'PostgreSQL', 'TypeScript'].map((tag) => (
              <span key={tag} className="text-xs px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 font-medium backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-8 py-3.5 bg-[#a78bfa] hover:bg-[#8b5cf6] text-[#050507] rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-md shadow-[#a78bfa]/20 text-center text-sm"
            >
              Hire Me →
            </a>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-8 py-3.5 border border-white/10 hover:border-white/30 text-white rounded-full font-semibold bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm text-center text-sm"
            >
              View Projects
            </a>
            <a
              href="/welebe-cv.pdf"
              download="Welebe_Kebede_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-white/10 hover:border-[#a78bfa]/30 hover:bg-[#a78bfa]/5 text-gray-300 hover:text-[#a78bfa] rounded-full font-semibold transition-all duration-300 hover:scale-105 text-center text-sm flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT: Custom Fancy Glassmorphic Terminal + Interactive Tech Orbit */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[480px]">

          {/* Multi-layered Glowing Radial Rings */}
          <div className="absolute w-[380px] h-[380px] rounded-full border border-white/5 bg-[radial-gradient(circle_at_center,rgba(234,154,127,0.12)_0%,transparent_70%)] animate-pulse-soft"></div>
          <div className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-[#a78bfa]/20 animate-spin-slow"></div>

          {/* Central Glassmorphic Code IDE Terminal */}
          <div className="relative w-full max-w-[340px] rounded-3xl overflow-hidden border border-white/15 bg-[#0f0f11]/80 backdrop-blur-xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:border-[#a78bfa]/50 transition-all duration-500 hover:scale-[1.03] group z-10">
            {/* Top Bar */}
            <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-4">
              <div className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block shadow-sm"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block shadow-sm"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block shadow-sm"></span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-[#a78bfa]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] animate-ping"></span>
                welebe.config.ts
              </div>
            </div>

            {/* Simulated Dynamic IDE Body */}
            <div className="space-y-3 font-mono text-xs text-gray-300 py-2">
              <div className="flex gap-3 text-gray-600 select-none">
                <span>01</span>
                <span className="text-[#818cf8]">import</span> <span className="text-[#a78bfa]">Developer</span> <span className="text-[#818cf8]">from</span> <span className="text-emerald-400">'@aau/cs'</span>;
              </div>
              <div className="flex gap-3 text-gray-600 select-none">
                <span>02</span>
                <span className="text-gray-400">// AAU CS Graduate</span>
              </div>
              
              {/* Dynamic Code Line */}
              <div className="p-3 rounded-xl bg-[#050507]/90 border border-white/10 font-mono text-xs leading-relaxed min-h-[52px] flex items-center">
                <span className="text-[#a78bfa] font-bold mr-2">&gt;</span>
                <span className="text-emerald-300 font-semibold transition-all duration-500">
                  {codeSnippets[codeLine]}
                </span>
                <span className="w-2 h-4 bg-[#a78bfa] inline-block ml-1 animate-pulse"></span>
              </div>

              {/* Mini Stat Cards */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
                  <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Degree</span>
                  <span className="text-xs font-bold text-white">B.Sc. CS (AAU)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-center">
                  <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Status</span>
                  <span className="text-xs font-bold text-[#a78bfa]">Graduated 2026</span>
                </div>
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="border-t border-white/10 mt-4 pt-3 font-mono text-[10px] text-gray-400 flex justify-between items-center">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                Available for Roles
              </span>
            </div>
          </div>

          {/* FANCY GLASS FLOATING TECH NODES */}
          {techOrbit.map((item) => (
            <div
              key={item.name}
              className={`absolute ${item.pos} z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl border border-white/15 bg-[#0f0f11]/90 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer group`}
              style={{
                animation: `orbitFloat 4.2s ease-in-out infinite alternate`,
                animationDelay: item.animDelay,
                boxShadow: `0 8px 25px ${item.glow}`,
              }}
            >
              <div className="w-5 h-5 rounded-lg flex items-center justify-center p-0.5 bg-white/5 border border-white/10 group-hover:scale-110 transition duration-300">
                <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
              </div>
              <span className="text-xs font-bold text-white whitespace-nowrap tracking-wide">{item.name}</span>
            </div>
          ))}

        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">Scroll Down</span>
        <div className="w-[18px] h-[30px] rounded-full border border-gray-600 flex justify-center p-1">
          <div className="w-[3px] h-[6px] bg-[#a78bfa] rounded-full animate-bounce"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbitFloat {
          0%   { transform: translateY(0px) scale(1); }
          50%  { transform: translateY(-10px) scale(1.03); }
          100% { transform: translateY(6px) scale(0.98); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
