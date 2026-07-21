'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setIsSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message. Please try again.');
      }

      setIsSuccess(true);
      setSubmitMessage(data.message || 'Thank you! Your message was sent successfully.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSuccess(false);
      setSubmitMessage(error.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6 bg-[#050507] overflow-hidden">
      {/* Background radial ambient light */}
      <div className="glow-sphere glow-violet w-[400px] h-[400px] top-[-5%] right-[-10%] opacity-10 animate-pulse-soft"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#a78bfa] font-bold">CONTACT</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Get In Touch</h2>
          <p className="text-base text-gray-400">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
        </div>

        {/* Contact info grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Location & Email */}
          <div className="p-6 rounded-2xl bg-[#0f0f11]/40 border border-white/5 backdrop-blur-md hover:border-white/10 transition-all duration-300 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[#a78bfa] mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="font-bold text-white text-base mb-1">Email</h3>
            <a
              href="mailto:webiikoo@gmail.com"
              className="text-xs text-gray-400 hover:text-[#a78bfa] transition break-all"
            >
              webiikoo@gmail.com
            </a>
            <span className="text-[10px] text-gray-500 mt-2">Addis Ababa, Ethiopia</span>
          </div>

          {/* Phone Numbers */}
          <div className="p-6 rounded-2xl bg-[#0f0f11]/40 border border-white/5 backdrop-blur-md hover:border-white/10 transition-all duration-300 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[#a78bfa] mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <h3 className="font-bold text-white text-base mb-1">Phone</h3>
            <a href="tel:+251991570477" className="text-xs text-gray-400 hover:text-[#a78bfa] transition">
              +251 991 570 477
            </a>
            <a href="tel:+251940043177" className="text-xs text-gray-400 hover:text-[#a78bfa] transition">
              +251 940 043 177
            </a>
          </div>

          {/* LinkedIn */}
          <div className="p-6 rounded-2xl bg-[#0f0f11]/40 border border-white/5 backdrop-blur-md hover:border-white/10 transition-all duration-300 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[#a78bfa] mb-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </div>
            <h3 className="font-bold text-white text-base mb-1">LinkedIn</h3>
            <a
              href="https://linkedin.com/in/welebe-kebede"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-[#a78bfa] transition truncate max-w-full"
            >
              linkedin.com/in/welebe-kebede
            </a>
          </div>

          {/* GitHub */}
          <div className="p-6 rounded-2xl bg-[#0f0f11]/40 border border-white/5 backdrop-blur-md hover:border-white/10 transition-all duration-300 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[#a78bfa] mb-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
            </div>
            <h3 className="font-bold text-white text-base mb-1">GitHub</h3>
            <a
              href="https://github.com/wabii-koo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-[#a78bfa] transition break-all"
            >
              github.com/wabii-koo
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-[#0f0f11]/40 border border-white/5 backdrop-blur-md max-w-2xl mx-auto shadow-2xl space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-4 py-3 bg-[#050507] border border-white/5 hover:border-white/10 focus:border-[#a78bfa] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#a78bfa]/20 transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="w-full px-4 py-3 bg-[#050507] border border-white/5 hover:border-white/10 focus:border-[#a78bfa] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#a78bfa]/20 transition-all duration-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows="5"
              required
              className="w-full px-4 py-3 bg-[#050507] border border-white/5 hover:border-white/10 focus:border-[#a78bfa] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#a78bfa]/20 transition-all duration-300 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#a78bfa] hover:bg-[#8b5cf6] disabled:bg-[#a78bfa]/50 text-[#050507] font-semibold py-3.5 rounded-xl transition duration-300 hover:scale-[1.01] shadow-md shadow-[#a78bfa]/5 cursor-pointer disabled:cursor-not-allowed text-sm"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </button>

          {submitMessage && (
            <div className={`p-4 rounded-xl border text-center text-xs font-medium ${
              isSuccess 
                ? 'bg-green-500/10 border-green-500/20 text-green-400' 
                : 'bg-red-500/10 border-red-500/20 text-red-400'
            }`}>
              {submitMessage}
            </div>
          )}
        </form>

      </div>
    </section>
  );
}
