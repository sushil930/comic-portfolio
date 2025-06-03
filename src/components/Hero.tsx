
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Sparkles, Zap, Star } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const floatingElements = [
    { icon: Code, delay: 0, x: -20, y: -30, color: "bg-yellow-400" },
    { icon: Sparkles, delay: 0.5, x: 40, y: -20, color: "bg-red-500" },
    { icon: Zap, delay: 1, x: -30, y: 20, color: "bg-blue-500" },
    { icon: Star, delay: 1.5, x: 50, y: 30, color: "bg-green-500" },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-yellow-300 via-red-200 to-blue-300">
      {/* Comic Background Elements */}
      <div className="absolute inset-0">
        {/* Halftone Pattern */}
        <div className="absolute inset-0 halftone-bg"></div>
        
        {/* Comic Burst Background */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-64 h-64 comic-burst rounded-full opacity-60"
        />
        
        {/* Action Words */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute top-20 left-20 comic-marker text-6xl text-red-600 rotate-12"
        >
          POW!
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-32 right-32 comic-marker text-5xl text-blue-600 -rotate-12"
        >
          ZAP!
        </motion.div>
        
        {/* Floating Comic Elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ 
              opacity: [0.7, 1, 0.7],
              scale: [1, 1.2, 1],
              rotate: [0, 360],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
            className="absolute"
            style={{
              top: `${20 + index * 20}%`,
              left: `${10 + index * 25}%`,
              transform: `translate(${element.x}px, ${element.y}px)`
            }}
          >
            <div className={`${element.color} p-4 rounded-full comic-border animate-bounce-custom`}>
              <element.icon className="w-8 h-8 text-white" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Comic Title */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "back.out(1.7)" }}
              className="relative"
            >
              <div className="comic-border-yellow bg-white p-8 rounded-3xl transform rotate-1">
                <h1 className="comic-title text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-blue-600 to-green-600">
                  THE AMAZING
                </h1>
                <h2 className="comic-title text-4xl md:text-6xl text-purple-800 mt-2">
                  FRONTEND HERO
                </h2>
              </div>
              
              {/* Action Lines */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16"
              >
                <div className="w-full h-full bg-yellow-400 rounded-full comic-border flex items-center justify-center">
                  <span className="comic-marker text-2xl">⚡</span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Speech Bubble */}
            <motion.div
              variants={itemVariants}
              className="speech-bubble max-w-2xl mx-auto"
            >
              <p className="comic-text text-2xl text-gray-800">
                "A Frontend Web Hero in the Making! 🦸‍♂️"
              </p>
              <p className="comic-text text-lg text-gray-600 mt-2">
                Crafting digital experiences with code superpowers!
              </p>
            </motion.div>
          </motion.div>

          {/* Comic Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ 
                scale: 1.1, 
                rotate: [-2, 2, -2, 0],
                transition: { rotate: { duration: 0.3 } }
              }}
              whileTap={{ scale: 0.9 }}
              className="group relative bg-red-500 text-white px-8 py-4 comic-border-red rounded-2xl comic-text text-xl transform -rotate-1 hover:rotate-0 transition-transform duration-300"
            >
              <span className="relative z-10">🚀 EXPLORE MY SUPERPOWERS</span>
              <motion.div
                className="absolute inset-0 bg-yellow-400 comic-border-red rounded-2xl"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.1,
                rotate: [2, -2, 2, 0],
                transition: { rotate: { duration: 0.3 } }
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-500 text-white px-8 py-4 comic-border-blue rounded-2xl comic-text text-xl transform rotate-1 hover:rotate-0 transition-transform duration-300"
            >
              📜 DOWNLOAD ORIGIN STORY
            </motion.button>
          </motion.div>

          {/* Tech Stack Badges */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center flex-wrap gap-4 pt-8"
          >
            {['React ⚛️', 'TypeScript 💪', 'Next.js 🚀', 'Tailwind 🎨', 'Node.js 🟢'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 30, rotate: -90 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ 
                  delay: 2 + index * 0.1,
                  duration: 0.6,
                  ease: "back.out(1.7)"
                }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                className="bg-white comic-border px-4 py-2 rounded-full comic-text text-gray-800 cursor-pointer transform hover:scale-110 transition-all duration-200"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>

          {/* Power Level Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8"
          >
            {[
              { label: 'Projects Built', value: '50+', color: 'bg-red-500' },
              { label: 'Years Experience', value: '2+', color: 'bg-blue-500' },
              { label: 'Coffee Consumed', value: '∞', color: 'bg-yellow-500' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5 + index * 0.2, duration: 0.6, ease: "back.out(1.7)" }}
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                className="text-center"
              >
                <div className={`${stat.color} comic-border rounded-xl p-4 mx-auto`}>
                  <div className="comic-heading text-3xl md:text-4xl text-white">{stat.value}</div>
                  <div className="comic-text text-sm text-white mt-1">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Comic Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer group"
        >
          <div className="speech-bubble">
            <p className="comic-text text-sm text-gray-800 mb-2">SCROLL FOR MORE!</p>
            <ArrowDown className="w-6 h-6 text-red-600 mx-auto animate-bounce" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
