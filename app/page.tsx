import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import Skills from "../components/Skills.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Welebe Kebede | Full Stack Developer",
  description: "Explore the portfolio of Welebe Kebede, showcasing expertise in Next.js, full-stack architectures, interactive UI development, and robust backend engineering.",
  keywords: [
    "Welebe Kebede",
    "Developer",
    "Web Developer",
    "Full Stack",
    "React",
    "Next.js",
    "Portfolio",
    "Ethiopia",
    "Safaricom"
  ],
  authors: [{ name: "Welebe Kebede" }],
  robots: "index, follow",
};

export default function Home() {
  return (
    <div className="relative bg-[#050507] text-[#f5f5f7]">
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
