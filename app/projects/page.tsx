import Projects from "../../components/Projects.jsx";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Welebe Kebede",
  description: "Browse featured projects and applications created by Welebe Kebede.",
};

export default function ProjectsPage() {
  return (
    <div className="relative bg-[#050507] text-[#f5f5f7]">
      <Navbar />
      <main className="pt-20">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
