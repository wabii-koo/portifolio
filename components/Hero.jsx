import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 text-white"
    >
      <div className="text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Hello, I'm Welebe Kebede</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4">Full Stack Developer & Designer</p>
        <p className="text-lg text-gray-400 mb-8">
          I create beautiful, responsive web applications that solve real problems.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-blue-600 hover:bg-blue-600 rounded-lg font-semibold transition"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}