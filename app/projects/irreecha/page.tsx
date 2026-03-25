import Navbar from "../../../components/Navbar.jsx";
import Footer from "../../../components/Footer.jsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irreecha Oromo Website - Project Details",
  description: "Detailed view of the Irreecha Oromo Website project, celebrating Oromo heritage.",
};

export default function IrreechaProjectPage() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 text-slate-900 min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-24" style={{backgroundImage: 'url(/irreecha.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-6xl font-bold mb-6 animate-fade-in">Irreecha Oromo Website</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              A world-class cultural platform celebrating the Irreecha festival, preserving Oromo heritage through immersive digital experiences.
            </p>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-slate-900">Project Overview</h2>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  The Irreecha Oromo Website stands as a digital monument to the rich cultural heritage of the Oromo people. This comprehensive platform brings the ancient Irreecha festival to life through cutting-edge web technology, offering visitors an immersive journey through history, culture, and tradition.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Featuring virtual reality tours, interactive galleries, and multilingual content, the site serves as both an educational resource and a celebration of Oromo identity, reaching millions worldwide and contributing to the global recognition of intangible cultural heritage.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">🌿</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Cultural Preservation</h3>
                  <p className="text-slate-600">Bridging ancient traditions with modern technology</p>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-8 text-center text-slate-900">Technologies & Tools</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: 'Next.js', icon: '⚛️' },
                  { name: 'Tailwind CSS', icon: '🎨' },
                  { name: 'Vercel', icon: '▲' },
                  { name: 'React', icon: '⚛️' }
                ].map((tech) => (
                  <div key={tech.name} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-3">{tech.icon}</div>
                    <h3 className="font-semibold text-slate-900">{tech.name}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-8 text-center text-slate-900">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Virtual Tours',
                    description: 'Immersive 3D experiences of sacred Irreecha sites',
                    icon: '🏛️'
                  },
                  {
                    title: 'Heritage Gallery',
                    description: 'Curated collection of historical images and stories',
                    icon: '🖼️'
                  },
                  {
                    title: 'Multilingual Support',
                    description: 'Content available in multiple languages including Afaan Oromoo',
                    icon: '🌍'
                  },
                  {
                    title: 'Mobile Optimized',
                    description: 'Responsive design for seamless experience across devices',
                    icon: '📱'
                  },
                  {
                    title: 'Rich Media',
                    description: 'High-quality videos, audio guides, and interactive elements',
                    icon: '🎥'
                  },
                  {
                    title: 'Global Reach',
                    description: 'Connecting Oromo diaspora worldwide',
                    icon: '🌐'
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-slate-900">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-white rounded-2xl shadow-2xl p-12">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Experience the Project</h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Discover the Irreecha festival through this innovative digital platform. Explore the code, interact with the live site, and witness how technology can preserve cultural heritage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://irreacha-site-jces.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  🌐 View Live Site
                </a>
                <a
                  href="https://github.com/wabii-koo/irreacha-site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  💻 View Source Code
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}