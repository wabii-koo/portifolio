import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welebe Kebede | Full Stack Developer",
  description: "Explore the portfolio of Welebe Kebede, a Computer Science student and full-stack developer focused on clean UI, reliable backends, and high-impact web products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050507] text-[#f5f5f7] min-h-screen relative`}
      >
        {children}
      </body>
    </html>
  );
}

