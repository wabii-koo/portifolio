import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-400 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-4 text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Welebe Kebede
            </h3>
            <p className="text-sm md:text-base">
              Full Stack Developer crafting modern, responsive, and user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="bg-slate-800 rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition hover:scale-105">Home</Link></li>
              <li><Link href="#about" className="hover:text-blue-400 transition hover:scale-105">About</Link></li>
              <li><Link href="#skills" className="hover:text-blue-400 transition hover:scale-105">Skills</Link></li>
              <li><Link href="#projects" className="hover:text-blue-400 transition hover:scale-105">Projects</Link></li>
              <li><Link href="#contact" className="hover:text-blue-400 transition hover:scale-105">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="bg-slate-800 rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 transition hover:scale-105">Web Development</li>
              <li className="hover:text-blue-400 transition hover:scale-105">UI/UX Design</li>
              <li className="hover:text-blue-400 transition hover:scale-105">Consulting</li>
              <li className="hover:text-blue-400 transition hover:scale-105">Maintenance</li>
            </ul>
          </div>

          {/* Follow Me */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Me</h4>
            <div className="flex space-x-4 text-2xl">
              <a
                href="https://github.com/wabii-koo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition transform hover:scale-125"
                aria-label="GitHub"
              >🐙</a>
              <a
                href="https://www.linkedin.com/in/welebe-kebede-2a195630b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition transform hover:scale-125"
                aria-label="LinkedIn"
              >💼</a>
              <a
                href="https://twitter.com/welebe_kebede"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition transform hover:scale-125"
                aria-label="X / Twitter"
              >𝕏</a>
              <a
                href="mailto:webiikoo@gmail.com"
                className="hover:text-blue-400 transition transform hover:scale-125"
                aria-label="Email"
              >📧</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm md:text-base">
          <p className="text-gray-500">&copy; {currentYear} Welebe Kebede. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-blue-400 transition hover:underline">Privacy Policy</Link>
            <a href="#" className="hover:text-blue-400 transition hover:underline">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition hover:underline">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}