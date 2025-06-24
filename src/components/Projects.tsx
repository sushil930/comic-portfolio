import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import AnimatedButton from './ui/AnimatedButton';

const Projects = () => {
  const projects = [
    {
      title: "SUPER E-COMMERCE",
      subtitle: "The Shopping Hero's Platform",
      description: "Built a powerful e-commerce platform that can handle any shopping mission! Features real-time inventory, secure payments, and responsive design that works faster than a speeding bullet!",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: [
        { name: "React", icon: "logos:react" },
        { name: "Node.js", icon: "logos:nodejs-icon" },
        { name: "MongoDB", icon: "logos:mongodb-icon" },
        { name: "Stripe", icon: "logos:stripe" }
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      episode: "EP. 001",
      difficulty: "EPIC",
      stats: { views: "2.5k", stars: "45" }
    },
    {
      title: "TASK FORCE MANAGER",
      subtitle: "The Ultimate Team Coordinator",
      description: "Assembled a collaborative task management tool with drag-and-drop powers! Real-time updates keep the team synchronized better than any superhero squad!",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: [
        { name: "Next.js", icon: "logos:nextjs-icon" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "Prisma", icon: "logos:prisma" },
        { name: "TailwindCSS", icon: "logos:tailwindcss-icon" }
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      episode: "EP. 002",
      difficulty: "LEGENDARY",
      stats: { views: "1.8k", stars: "32" }
    },
    {
      title: "WEATHER COMMAND CENTER",
      subtitle: "The Climate Control Dashboard",
      description: "Created a beautiful weather application with location-based forecasts and interactive maps! More accurate than any weather wizard's crystal ball!",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tech: [
        { name: "React", icon: "logos:react" },
        { name: "Chart.js", icon: "mdi:chart-bar" },
        { name: "Weather API", icon: "mdi:weather-partly-cloudy" },
        { name: "CSS3", icon: "logos:css-3" }
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      episode: "EP. 003",
      difficulty: "RARE",
      stats: { views: "3.2k", stars: "58" }
    },
    {
      title: "PORTFOLIO UNIVERSE",
      subtitle: "The Ultimate Showcase",
      description: "This very portfolio website! Built with modern animations, responsive design, and optimized performance. A true masterpiece of digital craftsmanship!",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      tech: [
        { name: "React", icon: "logos:react" },
        { name: "Framer Motion", icon: "icon-park:framer" },
        { name: "Tailwind", icon: "logos:tailwindcss-icon" },
        { name: "Vite", icon: "logos:vitejs" }
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      episode: "EP. 004",
      difficulty: "ULTIMATE",
      stats: { views: "4.1k", stars: "72" }
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'RARE': return 'bg-blue-500';
      case 'EPIC': return 'bg-purple-500';
      case 'LEGENDARY': return 'bg-orange-500';
      case 'ULTIMATE': return 'bg-red-500';
      default: return 'bg-green-500';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 relative overflow-hidden">
      {/* Comic Background Elements */}
      <div className="absolute inset-0">
        <div className="halftone-bg absolute inset-0"></div>
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 comic-marker text-9xl text-yellow-400 opacity-20"
        >
          💥
        </motion.div>
        <motion.div
          animate={{ rotate: -360, y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 comic-marker text-7xl text-red-400 opacity-20"
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
          className="text-center mb-20"
        >
          <div className="comic-border-red bg-yellow-400 p-8 rounded-3xl transform rotate-1 inline-block">
            <h2 className="comic-title text-black">
              CODING ADVENTURES
            </h2>
            <div className="comic-marker text-2xl text-red-600 mt-2">
              "Epic Projects & Heroic Solutions!"
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
                Each project is an epic adventure showcasing different coding superpowers and creative solutions!
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Project Episodes */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10, rotate: 0 }}
              className="group relative"
            >
              <div className="comic-border bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                {/* Episode Header */}
                <div className="bg-gradient-to-r from-red-500 to-blue-500 p-4 relative">
                  <div className="flex justify-between items-center">
                    <div className="comic-border bg-white px-4 py-2 rounded-full">
                      <span className="comic-text text-black">{project.episode}</span>
                    </div>
                    <div className={`${getDifficultyColor(project.difficulty)} comic-border px-4 py-2 rounded-full`}>
                      <span className="comic-text text-white">{project.difficulty}</span>
                    </div>
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="absolute -top-2 -right-2 bg-yellow-400 comic-border rounded-full p-3"
                    >
                      <Icon icon="mdi:star" className="w-6 h-6 text-red-600" />
                    </motion.div>
                  )}
                </div>

                {/* Project Image */}
                <div className="relative overflow-hidden h-64">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-4 left-4 flex items-center space-x-4 text-white">
                      <div className="flex items-center gap-2 comic-border bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Icon icon="mdi:eye" className="w-4 h-4" />
                        <span className="comic-text text-sm">{project.stats.views}</span>
                      </div>
                      <div className="flex items-center gap-2 comic-border bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Icon icon="mdi:star" className="w-4 h-4" />
                        <span className="comic-text text-sm">{project.stats.stars}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      href={project.liveUrl}
                      className="bg-green-500 comic-border p-3 rounded-full shadow-lg hover:bg-green-600"
                    >
                      <Icon icon="mdi:external-link" className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: -360 }}
                      href={project.githubUrl}
                      className="bg-purple-500 comic-border p-3 rounded-full shadow-lg hover:bg-purple-600"
                    >
                      <Icon icon="mdi:github" className="w-5 h-5 text-white" />
                    </motion.a>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="comic-heading text-2xl text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="comic-text text-purple-600 mb-3">{project.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                        className="comic-border bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full comic-text text-sm cursor-pointer flex items-center gap-1"
                      >
                        <Icon icon={tech.icon} className="w-4 h-4" />
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <AnimatedButton
                      as="a"
                      href={project.liveUrl}
                      className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 comic-border rounded-xl comic-text hover:bg-blue-600 transition-colors duration-200"
                    >
                      <Icon icon="mdi:flash" className="w-4 h-4" />
                      LIVE DEMO
                    </AnimatedButton>
                    <AnimatedButton
                      as="a"
                      href={project.githubUrl}
                      className="flex items-center gap-2 comic-border bg-white text-gray-700 px-4 py-2 rounded-xl comic-text hover:bg-gray-50 transition-colors duration-200"
                    >
                      <Icon icon="mdi:github" className="w-4 h-4" />
                      SOURCE
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="comic-border-blue bg-white p-8 rounded-3xl max-w-2xl mx-auto transform -rotate-1">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <h3 className="comic-heading text-3xl text-gray-900 mb-4">MORE ADVENTURES COMING!</h3>
            </motion.div>
            <p className="comic-text text-gray-600 mb-6">
              I'm constantly working on new epic projects and experimenting with cutting-edge technologies!
            </p>
            <AnimatedButton
              className="bg-red-500 text-white px-8 py-4 comic-border-red rounded-2xl comic-text text-xl hover:bg-red-600 transition-colors duration-200"
            >
              🚀 VIEW ALL ADVENTURES
            </AnimatedButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
