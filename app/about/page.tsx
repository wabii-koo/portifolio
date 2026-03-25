import About from "../../components/About.jsx";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Welebe Kebede",
  description: "Learn more about me, my background, and my journey as a full stack developer.",
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />
      <main className="pt-16">
        <About />
      </main>
      <Footer />
    </div>
  );
}