import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from './ui/AnimatedButton';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glassmorphism ${
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
              <AnimatedButton
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="bg-white comic-border px-2 py-1 rounded-full comic-text text-xs text-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-200"
              >
                {item.name}
              </AnimatedButton>
            ))}
          </div>
          
          <AnimatedButton
            onClick={() => scrollToSection('#contact')}
            className="hidden md:block bg-red-500 text-white px-3 py-1 comic-border-red rounded-full comic-text text-xs hover:bg-yellow-400 hover:text-black transition-all duration-200"
          >
            💼 Hire Me
          </AnimatedButton>

          {/* Mobile menu button */}
          <AnimatedButton
            className="md:hidden bg-red-500 text-white p-1 comic-border rounded-full"
            aria-label="Toggle mobile menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-4 h-4 flex flex-col justify-center items-center">
              <span className="block w-2 h-0.5 bg-white mb-0.5"></span>
              <span className="block w-2 h-0.5 bg-white mb-0.5"></span>
              <span className="block w-2 h-0.5 bg-white"></span>
            </div>
          </AnimatedButton>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden"
        >
          <div className="px-4 pt-2 pb-4 space-y-2 bg-white/95 backdrop-blur-md">
            {navItems.map((item) => (
              <AnimatedButton
                key={item.name}
                onClick={() => {
                  scrollToSection(item.href);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left bg-transparent comic-border px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </AnimatedButton>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
