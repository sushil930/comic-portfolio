
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Star, Heart, Coffee, Rocket, BookOpen, Lightbulb } from 'lucide-react';

const About = () => {
  const comicPanels = [
    {
      title: "CHAPTER 1: THE BEGINNING",
      content: "Once upon a time, a curious kid discovered the magic of computers...",
      icon: BookOpen,
      color: "bg-yellow-400",
      rotation: "rotate-2"
    },
    {
      title: "CHAPTER 2: FIRST CODE",
      content: "console.log('Hello World!') - And with that, a hero was born!",
      icon: Code,
      color: "bg-red-500",
      rotation: "-rotate-1"
    },
    {
      title: "CHAPTER 3: FRONTEND DISCOVERY",
      content: "The moment I saw my first website come to life... EUREKA! 💡",
      icon: Lightbulb,
      color: "bg-blue-500",
      rotation: "rotate-1"
    },
    {
      title: "CHAPTER 4: THE MISSION",
      content: "Today: Creating amazing web experiences and seeking internship adventures!",
      icon: Rocket,
      color: "bg-green-500",
      rotation: "-rotate-2"
    }
  ];

  const superpowers = [
    {
      icon: Code,
      title: "Clean Code Master",
      description: "Writing maintainable, scalable code with superhuman precision!",
      color: "bg-green-500",
      level: 90
    },
    {
      icon: Layout,
      title: "Responsive Design Wizard",
      description: "Making websites look amazing on ANY device - from smartwatch to billboard!",
      color: "bg-blue-500",
      level: 95
    },
    {
      icon: Star,
      title: "UX Superhero",
      description: "Creating user experiences so good, they'll think it's magic!",
      color: "bg-purple-500",
      level: 85
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 relative overflow-hidden">
      {/* Comic Background Elements */}
      <div className="absolute inset-0">
        <div className="halftone-bg absolute inset-0"></div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 comic-marker text-8xl text-yellow-400 opacity-20"
        >
          ★
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 comic-marker text-6xl text-red-400 opacity-20"
        >
          ⚡
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Comic Book Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="comic-border-yellow bg-white p-8 rounded-3xl transform -rotate-1 inline-block">
            <h2 className="comic-title text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
              ORIGIN STORY
            </h2>
            <div className="comic-marker text-2xl text-purple-600 mt-2">
              "How I Became a Frontend Hero!"
            </div>
          </div>
        </motion.div>

        {/* Comic Panel Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {comicPanels.map((panel, index) => (
            <motion.div
              key={panel.title}
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              className={`comic-border bg-white p-6 rounded-2xl ${panel.rotation} hover:rotate-0 transition-all duration-300 cursor-pointer`}
            >
              <div className="flex items-start space-x-4">
                <div className={`${panel.color} comic-border p-3 rounded-full`}>
                  <panel.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="comic-text text-xl text-gray-900 mb-3">
                    {panel.title}
                  </h3>
                  <p className="comic-text text-gray-700">{panel.content}</p>
                </div>
              </div>
              
              {/* Comic panel number */}
              <div className="absolute -top-3 -right-3 bg-red-500 comic-border rounded-full w-12 h-12 flex items-center justify-center">
                <span className="comic-text text-white text-lg">{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Superpowers Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="speech-bubble inline-block">
            <h3 className="comic-heading text-4xl text-gray-900">MY SUPERPOWERS</h3>
            <p className="comic-text text-gray-600 mt-2">Check out these amazing abilities!</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {superpowers.map((power, index) => (
            <motion.div
              key={power.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group"
            >
              <div className="comic-border bg-white p-6 rounded-2xl hover:shadow-2xl transition-all duration-300">
                <div className={`${power.color} comic-border p-4 rounded-full w-20 h-20 mx-auto mb-4 group-hover:animate-bounce-custom`}>
                  <power.icon className="w-12 h-12 text-white mx-auto" />
                </div>
                
                <h4 className="comic-text text-xl text-gray-900 mb-3 text-center">
                  {power.title}
                </h4>
                <p className="text-gray-600 mb-4 text-center">{power.description}</p>
                
                {/* Power Level Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="comic-text text-sm">POWER LEVEL</span>
                    <span className="comic-marker text-red-600">{power.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 comic-border">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${power.level}%` }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      className={`${power.color} h-full rounded-full flex items-center justify-end pr-2`}
                    >
                      <span className="comic-marker text-white text-xs">⚡</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Trading Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="comic-border-red bg-yellow-400 p-6 rounded-3xl transform rotate-1 inline-block">
            <h3 className="comic-heading text-3xl text-black">SKILL COLLECTION</h3>
            <p className="comic-text text-black">Gotta code 'em all!</p>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['React ⚛️', 'TypeScript 💪', 'Next.js 🚀', 'Tailwind 🎨', 'Node.js 🟢', 'Git 📝', 'Figma 🎯', 'MongoDB 🍃'].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              className="comic-border bg-white px-6 py-3 rounded-full comic-text text-gray-800 cursor-pointer hover:bg-yellow-100 transition-colors duration-200"
            >
              {skill}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="comic-border-blue bg-white p-8 rounded-3xl max-w-2xl mx-auto transform -rotate-1">
            <h3 className="comic-heading text-3xl text-gray-900 mb-4">READY FOR TEAM-UP?</h3>
            <p className="comic-text text-gray-600 mb-6">
              I'm seeking internship opportunities to join forces with amazing teams!
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -2, 2, 0],
                transition: { rotate: { duration: 0.3 } }
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-red-500 text-white px-8 py-4 comic-border-red rounded-2xl comic-text text-xl hover:bg-red-600 transition-colors duration-200"
            >
              🚀 LET'S CONNECT!
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
