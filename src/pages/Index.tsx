
import React, { useEffect, useState, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';

// Lazy load components below the fold
const About = lazy(() => import('../components/About'));
const Projects = lazy(() => import('../components/Projects'));
const Skills = lazy(() => import('../components/Skills'));
const Contact = lazy(() => import('../components/Contact'));

// Loading component
const LoadingSection = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-300 via-red-200 to-blue-300">
    <motion.div
      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="comic-border bg-white p-8 rounded-full"
    >
      <div className="comic-text text-2xl text-gray-800">Loading...</div>
    </motion.div>
  </div>
);

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Suspense fallback={<LoadingSection />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default Index;
