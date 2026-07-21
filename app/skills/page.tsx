import Skills from "../../components/Skills.jsx";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills - Welebe Kebede",
  description: "View the technical toolkit and software expertise of Welebe Kebede.",
};

export default function SkillsPage() {
  return (
    <div className="relative bg-[#050507] text-[#f5f5f7]">
      <Navbar />
      <main className="pt-20">
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
