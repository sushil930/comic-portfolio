
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Sparkles, Zap } from 'lucide-react';

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const floatingElements = [
    { icon: Code, delay: 0, x: -20, y: -30 },
    { icon: Sparkles, delay: 0.5, x: 40, y: -20 },
    { icon: Zap, delay: 1, x: -30, y: 20 },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(139, 92, 246, 0.15) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20"
        />
        
        {/* Floating geometric shapes */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
              rotate: 360
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
            className="absolute"
            style={{
              top: `${20 + index * 25}%`,
              left: `${10 + index * 30}%`,
              transform: `translate(${element.x}px, ${element.y}px)`
            }}
          >
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-xl shadow-2xl backdrop-blur-sm">
              <element.icon className="w-6 h-6 text-white" />
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
          {/* Enhanced title with better typography */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div className="relative">
              <motion.h1 
                className="text-6xl md:text-8xl font-black leading-tight tracking-tight"
                initial={{ opacity: 0, scale: 0.8, rotateX: 90 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="block text-gray-900 relative">
                  Frontend
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </span>
                <span className="block text-gradient relative">
                  Developer
                  <motion.div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                  />
                </span>
              </motion.h1>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium"
            >
              Crafting <span className="text-gradient font-semibold">exceptional digital experiences</span> with modern web technologies. 
              <br />Passionate about clean code, user-centric design, and cutting-edge solutions.
            </motion.p>
          </motion.div>

          {/* Enhanced buttons with better styling */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px rgba(139, 92, 246, 0.4)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                View My Work
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-gray-900 text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/80"
            >
              <span className="flex items-center gap-2">
                Download CV
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="group-hover:text-white"
                >
                  ↓
                </motion.div>
              </span>
            </motion.button>
          </motion.div>

          {/* Enhanced tech stack with better animations */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center flex-wrap gap-4 pt-8"
          >
            {['React', 'TypeScript', 'Next.js', 'Tailwind', 'Node.js', 'GraphQL'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 30, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  delay: 1.5 + index * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)"
                }}
                className="glass-effect px-6 py-3 rounded-2xl text-sm font-semibold text-gray-800 hover:text-purple-700 transition-all duration-300 cursor-pointer border border-white/50 shadow-lg"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Stats section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8"
          >
            {[
              { number: '50+', label: 'Projects Built' },
              { number: '2+', label: 'Years Experience' },
              { number: '100%', label: 'Passion Level' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 + index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="text-center glass-effect p-4 rounded-xl border border-white/30"
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer group"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs font-medium text-gray-500 group-hover:text-purple-600 transition-colors">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center group-hover:border-purple-600 transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
