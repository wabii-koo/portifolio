import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Metadata } from "next";

// Metadata for SEO and page info
export const metadata: Metadata = {
  title: "Welebe Kebede - Full Stack Developer & Designer",
  description:
    "Explore my portfolio showcasing web development projects, skills, and expertise in creating beautiful, responsive web applications.",
  keywords: [
    "Welebe Kebede",
    "Developer",
    "Web Developer",
    "Full Stack",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Welebe Kebede" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function Home() {
  return (
    <div className="scroll-smooth bg-slate-50 text-slate-900">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}