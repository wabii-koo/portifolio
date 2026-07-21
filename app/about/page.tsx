import About from "../../components/About.jsx";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Welebe Kebede",
  description: "Learn more about my professional background, education, and development journey.",
};

export default function AboutPage() {
  return (
    <div className="relative bg-[#050507] text-[#f5f5f7]">
      <Navbar />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </div>
  );
}
