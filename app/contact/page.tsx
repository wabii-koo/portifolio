import Contact from "../../components/Contact.jsx";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Welebe Kebede",
  description: "Get in touch with Welebe Kebede for projects, contracts, and software engineering opportunities.",
};

export default function ContactPage() {
  return (
    <div className="relative bg-[#050507] text-[#f5f5f7]">
      <Navbar />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
