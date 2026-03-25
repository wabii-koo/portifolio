import Contact from "../../components/Contact.jsx";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Welebe Kebede",
  description: "Get in touch with me for collaborations and opportunities.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}