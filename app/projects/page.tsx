import Projects from "../../components/Projects.jsx";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Welebe Kebede",
  description: "Explore my web development projects and portfolio.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />
      <main className="pt-16">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}