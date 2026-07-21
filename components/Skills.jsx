'use client';

import { useState } from 'react';

const allSkills = [
  // Frontend
  { name: 'React.js',     cat: 'frontend', tag: 'UI Library',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',           glow: 'rgba(97,218,251,0.3)',  color: '#61dafb' },
  { name: 'Next.js',      cat: 'frontend', tag: 'Full-Stack',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',         glow: 'rgba(255,255,255,0.25)', color: '#ffffff' },
  { name: 'TypeScript',   cat: 'frontend', tag: 'Typed JS',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', glow: 'rgba(49,120,198,0.3)',  color: '#3178c6' },
  { name: 'JavaScript',   cat: 'frontend', tag: 'Language',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', glow: 'rgba(247,223,30,0.3)',  color: '#f7df1e' },
  { name: 'HTML5',        cat: 'frontend', tag: 'Markup',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',          glow: 'rgba(227,76,38,0.3)',   color: '#e34c26' },
  { name: 'CSS3',         cat: 'frontend', tag: 'Styling',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',            glow: 'rgba(38,77,228,0.3)',   color: '#264de4' },
  { name: 'Tailwind CSS', cat: 'frontend', tag: 'CSS Framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', glow: 'rgba(56,189,248,0.3)', color: '#38bdf8' },

  // Backend
  { name: 'Node.js',    cat: 'backend', tag: 'Runtime',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',    glow: 'rgba(104,160,99,0.3)',  color: '#68a063' },
  { name: 'Express.js', cat: 'backend', tag: 'API Framework',icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',  glow: 'rgba(255,255,255,0.2)', color: '#ffffff' },
  { name: 'PHP',        cat: 'backend', tag: 'Language',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',         glow: 'rgba(119,123,179,0.3)', color: '#777bb3' },
  { name: 'Laravel',    cat: 'backend', tag: 'MVC Framework',icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',  glow: 'rgba(255,45,32,0.3)',   color: '#ff2d20' },
  { name: 'Prisma ORM', cat: 'backend', tag: 'Database ORM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg',   glow: 'rgba(92,107,192,0.3)',  color: '#5c6bc0' },

  // Database & Cloud
  { name: 'PostgreSQL', cat: 'database', tag: 'Relational DB',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', glow: 'rgba(51,103,145,0.3)',  color: '#336791' },
  { name: 'MySQL',      cat: 'database', tag: 'SQL Database',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',          glow: 'rgba(0,117,143,0.3)',   color: '#00758f' },
  { name: 'MongoDB',    cat: 'database', tag: 'NoSQL Database',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',      glow: 'rgba(71,162,72,0.3)',   color: '#47a248' },
  { name: 'Supabase',   cat: 'database', tag: 'BaaS / Postgres', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',    glow: 'rgba(62,207,142,0.3)',  color: '#3ecf8e' },
  { name: 'Vercel',     cat: 'database', tag: 'Cloud Deploy',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',        glow: 'rgba(255,255,255,0.25)', color: '#ffffff' },

  // Tools & Languages
  { name: 'Git',      cat: 'tools', tag: 'Version Control', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',           glow: 'rgba(240,80,50,0.3)',  color: '#f05032' },
  { name: 'GitHub',   cat: 'tools', tag: 'Repo Hosting',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',     glow: 'rgba(255,255,255,0.25)', color: '#ffffff' },
  { name: 'Figma',    cat: 'tools', tag: 'UI Design',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',       glow: 'rgba(242,78,30,0.3)',  color: '#f24e1e' },
  { name: 'Postman',  cat: 'tools', tag: 'API Testing',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',   glow: 'rgba(255,108,55,0.3)', color: '#ff6c37' },
  { name: 'VS Code',  cat: 'tools', tag: 'IDE',             icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',     glow: 'rgba(0,122,204,0.3)',  color: '#007acc' },
  { name: 'Python',   cat: 'tools', tag: 'Language',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',     glow: 'rgba(55,118,171,0.3)', color: '#3776ab' },
  { name: 'Java',     cat: 'tools', tag: 'OOP Language',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',         glow: 'rgba(234,45,46,0.3)',  color: '#ea2d2e' },
  { name: 'C++',      cat: 'tools', tag: 'Systems Lang',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', glow: 'rgba(0,89,156,0.3)', color: '#00599c' },
];

const categories = [
  { id: 'all',      label: 'All Tech Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend',  label: 'Backend' },
  { id: 'database', label: 'Database & Cloud' },
  { id: 'tools',    label: 'Tools & Languages' },
];

export default function Skills() {
  const [filter, setFilter] = useState('all');

  const filteredSkills = filter === 'all'
    ? allSkills
    : allSkills.filter((item) => item.cat === filter);

  return (
    <section id="skills" className="relative py-28 px-6 bg-[#050507] overflow-hidden">
      {/* Decorative glows */}
      <div className="glow-sphere glow-violet w-[400px] h-[400px] top-[15%] left-[-5%] opacity-10"></div>
      <div className="glow-sphere glow-purple w-[400px] h-[400px] bottom-[15%] right-[-5%] opacity-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#a78bfa] font-bold">TECH STACK</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">Skills &amp; Technologies</h2>
          <p className="text-base text-gray-400">
            A comprehensive breakdown of the frameworks, languages, databases, and tools I use to build production-ready applications.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-[#a78bfa] text-[#050507] shadow-lg shadow-[#a78bfa]/20 scale-105'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Fancy Tech Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative p-5 rounded-2xl bg-[#0f0f15]/70 border border-white/10 backdrop-blur-md flex flex-col items-center justify-between text-center transition-all duration-300 hover:-translate-y-2 hover:border-white/20 cursor-default"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 12px 30px ${skill.glow}`;
                e.currentTarget.style.borderColor = skill.color + '40';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              {/* Accent dot */}
              <div
                className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full opacity-40 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: skill.color }}
              ></div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center p-3 mb-3.5 group-hover:scale-110 transition-transform duration-300">
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
              </div>

              {/* Name */}
              <h4 className="text-sm font-bold text-white mb-1 group-hover:text-[#a78bfa] transition-colors">
                {skill.name}
              </h4>

              {/* Tag */}
              <span className="text-[10px] text-gray-400 font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/5">
                {skill.tag}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
