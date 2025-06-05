
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md comic-border-yellow shadow-xl' 
          : 'bg-yellow-300/90 backdrop-blur-sm comic-border'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-1">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
            className="comic-title text-lg md:text-xl text-red-600 transform -rotate-1"
          >
            Portfolio
          </motion.div>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  rotate: [0, -1, 1, 0],
                  transition: { duration: 0.2 }
                }}
                onClick={() => scrollToSection(item.href)}
                className="bg-white comic-border px-2 py-1 rounded-full comic-text text-xs text-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-200"
              >
                {item.name}
              </motion.button>
            ))}
          </div>
          
          <motion.button
            whileHover={{ 
              scale: 1.02,
              rotate: [0, -1, 1, 0],
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('#contact')}
            className="hidden md:block bg-red-500 text-white px-3 py-1 comic-border-red rounded-full comic-text text-xs hover:bg-yellow-400 hover:text-black transition-all duration-200"
          >
            💼 Hire Me
          </motion.button>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden bg-red-500 text-white p-1 comic-border rounded-full"
            aria-label="Toggle mobile menu"
          >
            <div className="w-4 h-4 flex flex-col justify-center items-center">
              <span className="block w-2 h-0.5 bg-white mb-0.5"></span>
              <span className="block w-2 h-0.5 bg-white mb-0.5"></span>
              <span className="block w-2 h-0.5 bg-white"></span>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
