'use client';

import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('education');

  const educationData = [
    {
      title: 'BSc in Computer Science',
      institution: 'Addis Ababa University (AAU)',
      period: '2022 – 2026',
      details: 'Focus on software engineering, algorithms, database architectures, REST APIs, and full-stack web development.'
    }
  ];

  const certificatesData = [
    {
      title: 'Artificial Intelligence Fundamentals Nanodegree',
      institution: 'Udacity (Accenture / 5 Million Ethiopian Coders Initiative)',
      period: 'Nov 2024',
      details: 'Verified Nanodegree Certificate in AI fundamentals, machine learning principles, and workflow automation.'
    },
    {
      title: 'ALX AI Career Essentials',
      institution: 'ALX Africa',
      period: 'Certified',
      details: 'Professional training in AI tools, career essential strategies, and modern development workflows.'
    },
    {
      title: 'Fundamental Programming & Web Development',
      institution: 'Udemy & Professional Training',
      period: 'Certified',
      details: 'Certificates in Full-Stack Web Development, JavaScript ES6+, and React.js training.'
    },
    {
      title: 'Oromia Education Bureau Academic Award',
      institution: 'Oromia Education Bureau',
      period: 'Award',
      details: 'Honored for outstanding academic performance and high educational achievements.'
    }
  ];

  const experienceData = [
    {
      title: 'Web Developer Intern',
      institution: 'Tech Hive • Addis Ababa, Ethiopia',
      period: 'Oct 2025 – Jan 2026',
      details: 'Built full-stack web platforms using Next.js, React, Prisma, and MySQL. Implemented offline-first functionality using Service Workers and IndexedDB.'
    },
    {
      title: 'Web Developer Intern',
      institution: 'Efuye Gela / Zemenay Tech Company • Addis Ababa',
      period: 'Jun 2025 – Sep 2025',
      details: 'Developed responsive UIs with React.js & Next.js, integrated REST APIs with Node.js & Laravel, and managed team Git workflows.'
    },
    {
      title: 'Frontend Developer Intern',
      institution: 'CodSoft • Remote',
      period: 'Nov 2024 – Dec 2024',
      details: 'Created interactive web and desktop applications applying Java OOP principles and responsive UI design.'
    }
  ];

  const renderContent = () => {
    let list = [];
    if (activeTab === 'education') list = educationData;
    else if (activeTab === 'certificates') list = certificatesData;
    else if (activeTab === 'experience') list = experienceData;

    return (
      <div className="space-y-4">
        {list.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#0f0f11]/80 border border-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/10"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
              <h4 className="text-lg font-bold text-[#a78bfa]">{item.title}</h4>
              <span className="text-xs text-gray-500 font-mono self-start">{item.period}</span>
            </div>
            <p className="text-sm font-semibold text-white mb-2">{item.institution}</p>
            <p className="text-xs text-gray-400 leading-relaxed">{item.details}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="about" className="relative py-28 px-6 bg-[#050507] overflow-hidden">
      {/* Background glow */}
      <div className="glow-sphere glow-violet w-[400px] h-[400px] top-[20%] left-[-10%] opacity-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Clean Rounded Photo Frame & Download CV */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-[#0f0f11] group">
              <img
                src="/welebe.png"
                alt="Welebe Kebede"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050507]/40 via-transparent to-transparent"></div>
            </div>
            
            <a
              href="/welebe-cv.pdf"
              download="Welebe_Kebede_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 bg-white/5 border border-white/10 hover:border-[#a78bfa]/30 hover:bg-[#a78bfa]/5 text-white hover:text-[#a78bfa] rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-[#a78bfa]/5 group"
            >
              <svg className="w-4 h-4 text-gray-400 group-hover:text-[#a78bfa] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Full CV
            </a>
          </div>

          {/* Right Column: Heading + Tabs + Content Card */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Title & Underline */}
            <div>
              <span className="text-xs uppercase tracking-widest text-[#a78bfa] font-bold block mb-2">ABOUT ME</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3 leading-tight">
                Building Scalable Web Systems &amp; Modern Digital Experiences
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#a78bfa] to-transparent rounded-full mb-6"></div>
              
              <p className="text-base text-gray-300 leading-relaxed max-w-2xl font-normal">
                Addis Ababa University CS graduate and Full-Stack Engineer focused on craft, clean user interfaces, reliable backends, and products that deliver real value.
              </p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setActiveTab('education')}
                className={`px-6 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeTab === 'education'
                    ? 'bg-[#a78bfa] text-[#050507] shadow-md shadow-[#a78bfa]/20'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
                }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTab('certificates')}
                className={`px-6 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeTab === 'certificates'
                    ? 'bg-[#a78bfa] text-[#050507] shadow-md shadow-[#a78bfa]/20'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
                }`}
              >
                Certificates
              </button>
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-6 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeTab === 'experience'
                    ? 'bg-[#a78bfa] text-[#050507] shadow-md shadow-[#a78bfa]/20'
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
                }`}
              >
                Experience
              </button>
            </div>

            {/* Active Content Box */}
            <div className="pt-2">
              {renderContent()}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
