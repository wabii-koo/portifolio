import Skills from "../../components/Skills.jsx";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills - Welebe Kebede",
  description: "Explore my technical skills and expertise in web development technologies.",
};

export default function SkillsPage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />
      <main className="pt-16">
        <Skills />
      </main>
      <Footer />
    </div>
  );
}