
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Mission",
      value: "hero@frontend.dev",
      description: "Send me a digital message!",
      color: "bg-red-500"
    },
    {
      icon: MapPin,
      title: "Hero Base",
      value: "Remote Worldwide",
      description: "Available for remote adventures!",
      color: "bg-blue-500"
    },
    {
      icon: Phone,
      title: "Direct Line",
      value: "+1 (555) HERO-DEV",
      description: "For urgent coding emergencies!",
      color: "bg-green-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-200 via-pink-200 to-red-200 relative overflow-hidden">
      {/* Comic Background Elements */}
      <div className="absolute inset-0">
        <div className="halftone-bg absolute inset-0"></div>
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 comic-marker text-9xl text-yellow-400 opacity-20"
        >
          📧
        </motion.div>
        <motion.div
          animate={{ rotate: -360, y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 comic-marker text-7xl text-blue-400 opacity-20"
        >
          🚀
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Comic Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="comic-border-blue bg-yellow-400 p-8 rounded-3xl transform rotate-1 inline-block">
            <h2 className="comic-title text-black">
              TEAM UP TIME!
            </h2>
            <div className="comic-marker text-2xl text-red-600 mt-2">
              "Let's create something amazing together!"
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <div className="speech-bubble max-w-2xl mx-auto">
              <p className="comic-text text-gray-800">
                Ready to discuss internship opportunities or collaborate on epic projects? 
                I'm always excited to connect with fellow heroes! 🦸‍♂️
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
                  className="group cursor-pointer"
                >
                  <div className="comic-border bg-white p-6 rounded-2xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className={`${method.color} comic-border p-4 rounded-full group-hover:animate-bounce-custom`}>
                        <method.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="comic-text text-xl text-gray-900 mb-1">
                          {method.title}
                        </h3>
                        <p className="comic-text text-lg text-purple-600 mb-1">
                          {method.value}
                        </p>
                        <p className="text-gray-600 text-sm">{method.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability Notice */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="comic-border-green bg-green-50 p-6 rounded-2xl"
            >
              <div className="flex items-center space-x-3 mb-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-4 h-4 bg-green-500 rounded-full"
                />
                <h4 className="comic-text text-xl text-green-800">
                  AVAILABLE FOR INTERNSHIPS!
                </h4>
              </div>
              <p className="text-green-700 comic-text">
                I'm actively seeking frontend development internship opportunities 
                for 2024. Open to remote work and willing to relocate for the right adventure! 🚀
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h4 className="comic-text text-xl text-gray-900 mb-4">FIND ME IN THE DIGITAL UNIVERSE</h4>
              <div className="flex justify-center space-x-4">
                {[
                  { name: 'GitHub', icon: '🐙', url: '#' },
                  { name: 'LinkedIn', icon: '💼', url: '#' },
                  { name: 'Twitter', icon: '🐦', url: '#' },
                  { name: 'Portfolio', icon: '🌟', url: '#' }
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.url}
                    className="comic-border bg-white p-4 rounded-full text-4xl hover:shadow-lg transition-all duration-200"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="comic-border bg-white p-8 rounded-3xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Form Header */}
              <div className="text-center mb-8">
                <div className="comic-border-red bg-red-500 p-4 rounded-2xl inline-block mb-4">
                  <h3 className="comic-heading text-2xl text-white">SEND A MESSAGE</h3>
                </div>
                <p className="comic-text text-gray-600">
                  Fill out this form and I'll get back to you faster than a speeding bullet! ⚡
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block comic-text text-gray-700 mb-2">
                    👤 HERO NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 comic-border rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 comic-text"
                    placeholder="What should I call you?"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block comic-text text-gray-700 mb-2">
                    📧 COMMUNICATION FREQUENCY
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 comic-border rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 comic-text"
                    placeholder="your.email@awesome.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block comic-text text-gray-700 mb-2">
                    💭 YOUR MISSION BRIEFING
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 comic-border rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 resize-none comic-text"
                    placeholder="Tell me about your project, internship opportunity, or just say hello! 🚀"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px rgba(239, 68, 68, 0.4)",
                    rotate: [0, -1, 1, 0]
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-red-500 text-white py-4 comic-border-red rounded-xl comic-text text-xl hover:bg-red-600 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <Send className="w-6 h-6" />
                  <span>🚀 LAUNCH MESSAGE</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Comic Footer */}
      <footer className="mt-20 border-t-4 border-black pt-8">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="comic-border bg-white p-6 rounded-2xl inline-block">
              <p className="comic-text text-gray-800 mb-2">
                ⚡ CODED WITH SUPERPOWERS BY FRONTEND HERO ⚡
              </p>
              <p className="text-gray-600">
                Built with React ⚛️ • Tailwind 🎨 • Framer Motion 🎬 • TypeScript 💪
              </p>
              <div className="mt-4">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block text-2xl"
                >
                  🦸‍♂️
                </motion.span>
                <span className="comic-marker text-red-600 ml-2">© 2024 - THE END... OR IS IT?</span>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
