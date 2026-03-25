'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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

    try {
      const serviceId = 'service_vv8u118';
      const templateId = 'your_template_id';
      const publicKey = 'your_public_key';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'webiikoo@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Get In Touch</h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          Have a project in mind? Let's collaborate and create something amazing together.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-800 rounded-lg p-6 text-center hover:bg-slate-700 transition">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-bold mb-2">Email</h3>
            <a
              href="mailto:webiikoo@gmail.com"
              className="text-blue-400 hover:text-blue-300"
            >
              webiikoo@gmail.com
            </a>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 text-center hover:bg-slate-700 transition">
            <div className="text-4xl mb-3">💼</div>
            <h3 className="font-bold mb-2">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/welebe-kebede-2a195630b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              linkedin.com/in/welebe-kebede-2a195630b
            </a>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 text-center hover:bg-slate-700 transition">
            <div className="text-4xl mb-3">🐙</div>
            <h3 className="font-bold mb-2">GitHub</h3>
            <a
              href="https://github.com/wabii-koo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              github.com/wabii-koo
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-slate-800 rounded-lg p-8 max-w-2xl mx-auto">
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full px-4 py-2 bg-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className="w-full px-4 py-2 bg-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows="5"
              required
              className="w-full px-4 py-2 bg-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 font-semibold py-3 rounded-lg transition"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {submitMessage && (
            <p className={`mt-4 text-center ${submitMessage.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}