
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

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
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: [-2, 2, -2, 0] }}
            className="comic-title text-xl md:text-2xl text-red-600 transform -rotate-2"
          >
            Portfolio
          </motion.div>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -3, 3, 0],
                  transition: { duration: 0.3 }
                }}
                className="bg-white comic-border px-3 py-1 rounded-full comic-text text-sm text-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
          
          <motion.button
            whileHover={{ 
              scale: 1.05,
              rotate: [0, -3, 3, 0],
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
            className="hidden md:block bg-red-500 text-white px-4 py-2 comic-border-red rounded-full comic-text text-sm hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            💼 Hire Me
          </motion.button>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden bg-red-500 text-white p-2 comic-border rounded-full"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              <span className="block w-3 h-0.5 bg-white mb-1"></span>
              <span className="block w-3 h-0.5 bg-white mb-1"></span>
              <span className="block w-3 h-0.5 bg-white"></span>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
