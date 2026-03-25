export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Animated Profile / Icon */}
          <div className="flex justify-center md:justify-start">
            <div className="relative bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl w-64 h-64 md:w-80 md:h-80 flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-500">
              <span className="text-white text-7xl animate-bounce">👨‍💻</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-slate-700">
              Hi, I'm <strong>Welebe Kebede</strong>, a passionate full-stack developer based in <strong>Ethiopia</strong> with over <strong>4+ years of experience</strong> building modern web applications. I love crafting solutions that are functional, visually engaging, and user-friendly.
            </p>
            <p className="text-lg md:text-xl text-slate-700">
              I specialize in technologies like <strong>Next.js, React, Node.js, JavaScript, HTML/CSS, and Tailwind CSS</strong>. I enjoy creating interactive projects such as task management systems, book review platforms, and other web applications that solve real-world problems.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-2">📍</div>
                <h4 className="font-semibold mb-1">Location</h4>
                <p className="text-gray-600">Ethiopia</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-2">💼</div>
                <h4 className="font-semibold mb-1">Experience</h4>
                <p className="text-gray-600">4+ Years</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-2">🎓</div>
                <h4 className="font-semibold mb-1">Education</h4>
                <p className="text-gray-600">B.Sc. in Computer Science</p>
              </div>
            </div>

            {/* Personal Approach */}
            <p className="text-lg md:text-xl text-slate-700 mt-4">
              My approach focuses on clean, maintainable code, seamless user experiences, and creating applications that leave a lasting impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}