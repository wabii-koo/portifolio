'use client';

export default function Projects() {
  const projects = [
    {
      title: 'Task Management System',
      description: 'Full-stack task manager with a Laravel 10 REST API backend and a React + Vite SPA frontend. Features JWT authentication, role-based access control (RBAC), task status filtering, and live deployment on Vercel.',
      tech: ['Laravel 10', 'React + Vite', 'JWT', 'SQLite'],
      link: 'https://task-management-system-three-mocha.vercel.app/',
      github: 'https://github.com/wabii-koo/task-management-system',
      type: 'live',
      image: '/taskmanager.png'
    },
    {
      title: 'Book Review Platform',
      description: 'Full-stack review platform featuring authentication, full CRUD operations, review systems, favorites lists, and real-time database queries via Supabase.',
      tech: ['Next.js', 'Supabase', 'Tailwind CSS', 'PostgreSQL'],
      link: 'https://github.com/wabii-koo/project',
      type: 'github',
      image: '/book-review.png'
    },
    {
      title: 'Round Robin Scheduling GUI',
      description: 'Java CPU scheduling simulator displaying performance metrics. Visualized scheduling processes in an interactive GUI timeline applying OOP design principles.',
      tech: ['Java', 'Java Swing', 'OOP'],
      link: 'https://github.com/wabii-koo',
      type: 'github',
      image: '/round-robin.png'
    },

  ];

  return (
    <section id="projects" className="relative py-28 px-6 bg-[#050507] overflow-hidden">
      {/* Decorative Glow */}
      <div className="glow-sphere glow-[#10b981] w-[400px] h-[400px] top-[10%] right-[-10%] opacity-10"></div>
      <div className="glow-sphere glow-violet w-[350px] h-[350px] bottom-[5%] left-[-5%] opacity-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#a78bfa] font-bold">PORTFOLIO</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Projects & Code Showcase
          </h2>
          <p className="text-base text-gray-400">
            A collection of full-stack applications, REST APIs, database systems, and frontend interfaces I have built.
          </p>
        </div>

        {/* Featured Project Spotlights */}
        <div className="space-y-8 mb-12">
          
          {/* Featured 1: Guardian Communication System */}
          <div className="w-full rounded-3xl overflow-hidden border border-white/5 bg-[#0f0f11]/40 backdrop-blur-md shadow-2xl hover:border-white/10 transition-all duration-500">
            <div className="grid lg:grid-cols-12 gap-0">
              
              {/* Visual Column */}
              <div className="lg:col-span-6 bg-[#061d12] p-4 lg:p-6 flex flex-col justify-between min-h-[300px] relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)] pointer-events-none"></div>
                
                <div className="relative z-10 mb-3 flex justify-between items-center">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#6ee7b7]/90">Featured Architecture</span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">Final Year Capstone</span>
                </div>

                {/* GuardianGate Screenshot Cover */}
                <div className="relative flex-1 rounded-2xl overflow-hidden border border-white/10 my-2 shadow-xl bg-[#071710]">
                  <img 
                    src="/guardiangate.png" 
                    alt="Guardian Communication System" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  />
                </div>

                <div className="relative z-10 mt-3 flex justify-between items-center">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10b981]/10 text-xs font-semibold text-[#6ee7b7] border border-[#10b981]/25">
                    Next.js + PostgreSQL + React
                  </div>
                  <a 
                    href="https://digital-school-eight.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 bg-[#a78bfa] hover:bg-[#8b5cf6] text-[#050507] rounded-full text-xs font-bold transition-all duration-300 hover:scale-105"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#a78bfa]/30 bg-[#a78bfa]/5 text-xs text-[#a78bfa] font-semibold">
                    Featured Full-Stack Application
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white tracking-tight">GuardianGate — Digital School</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'React', 'PostgreSQL', 'JWT Auth', 'Role-Based Access', 'Vercel'].map((t) => (
                      <span key={t} className="text-xs border border-[#a78bfa]/20 bg-[#a78bfa]/5 text-[#a78bfa] px-3 py-1 rounded-full font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-sm text-gray-400 leading-relaxed">
                    GuardianGate is a live, secure parent-school communication platform built for Hawi Dandi Boru School. Features role-controlled portals for guardians, teachers, and administrators — with JWT authentication, instant notifications, homework management, and digital report cards.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex gap-4">
                  <a 
                    href="https://digital-school-eight.vercel.app/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-[#a78bfa] hover:bg-[#8b5cf6] text-[#050507] rounded-full text-xs font-bold transition duration-300 hover:scale-105"
                  >
                    Visit Live Site 🚀
                  </a>
                  <a 
                    href="https://github.com/wabii-koo" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 border border-white/10 text-white hover:border-white/20 rounded-full text-xs font-bold transition duration-300 hover:scale-105"
                  >
                    GitHub →
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Featured 2: Irreecha Cultural Website */}
          <div className="w-full rounded-3xl overflow-hidden border border-white/5 bg-[#0f0f11]/40 backdrop-blur-md shadow-2xl hover:border-white/10 transition-all duration-500">
            <div className="grid lg:grid-cols-12 gap-0">
              
              {/* Content Column */}
              <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#10b981]/30 bg-[#10b981]/5 text-xs text-[#6ee7b7] font-semibold">
                    ★ Featured Cultural Web App
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white tracking-tight">Irreecha Cultural Website</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Vercel'].map((t) => (
                      <span key={t} className="text-xs border border-[#10b981]/30 bg-[#10b981]/5 text-[#6ee7b7] px-3 py-1 rounded-full font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Live cultural heritage platform celebrating the Irreecha thanksgiving festival of the Oromo people. Features multi-page navigation (Home, Map, History, Gallery), animated sections, a newsletter, and festival location maps — all deployed live on Vercel.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex gap-4">
                  <a 
                    href="https://irreacha-site-jces.vercel.app" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-[#10b981] hover:bg-[#059669] text-[#061d12] rounded-full text-xs font-bold transition duration-300 hover:scale-105"
                  >
                    Launch Live Site 🚀
                  </a>
                </div>
              </div>

              {/* Visual Column */}
              <div className="lg:col-span-6 bg-[#042014] p-4 lg:p-6 flex flex-col justify-between min-h-[300px] relative overflow-hidden group order-1 lg:order-2">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.2)_0%,transparent_70%)] pointer-events-none"></div>
                
                <div className="relative z-10 mb-3 flex justify-between items-center">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#6ee7b7]/90">Cultural Heritage Platform</span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">Live on Vercel</span>
                </div>

                {/* Irreecha Screenshot Cover */}
                <div className="relative flex-1 rounded-2xl overflow-hidden border border-white/10 my-2 shadow-xl bg-[#03150d]">
                  <img 
                    src="/irreecha-site.png" 
                    alt="Irreecha Cultural Website" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  />
                </div>

                <div className="relative z-10 mt-3 flex justify-between items-center">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10b981]/10 text-xs font-semibold text-[#6ee7b7] border border-[#10b981]/25">
                    Oromo Heritage & Unity
                  </div>
                  <a 
                    href="https://irreacha-site-jces.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 bg-[#10b981] hover:bg-[#059669] text-[#061d12] rounded-full text-xs font-bold transition-all duration-300 hover:scale-105"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="flex flex-col h-full rounded-2xl overflow-hidden border border-white/5 bg-[#0f0f11]/30 backdrop-blur-md shadow-lg hover:border-white/10 hover:-translate-y-1.5 transition-all duration-300 group"
            >
              {/* Card visual container */}
              <div className="h-44 relative bg-[#0f0f11] flex items-center justify-center overflow-hidden border-b border-white/5">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60" 
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#a78bfa]/10 to-[#818cf8]/10 flex items-center justify-center text-4xl select-none group-hover:scale-105 transition-transform duration-500">
                    {project.icon}
                  </div>
                )}
                {/* Visual Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f11] via-transparent to-transparent"></div>
              </div>

              {/* Card content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-[#a78bfa] transition duration-300">
                    {project.title}
                  </h4>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-[10px] bg-white/5 text-gray-300 px-2 py-0.5 rounded-full border border-white/5 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-4">
                  {project.type === 'live' ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#6ee7b7] hover:text-[#10b981] transition-all flex items-center gap-1.5"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></span>
                      View Live Site →
                    </a>
                  ) : (
                    <a
                      href={project.link}
                      target={project.link !== '#' ? '_blank' : undefined}
                      rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
                      className="text-xs font-semibold text-[#a78bfa] hover:text-[#8b5cf6] transition-all flex items-center gap-1.5"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
                      View on GitHub →
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#a78bfa] hover:text-[#8b5cf6] transition-all flex items-center gap-1.5"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

