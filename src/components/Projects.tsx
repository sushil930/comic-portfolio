
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution built with React and Node.js featuring real-time inventory management, secure payments, and responsive design.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: { views: "2.5k", stars: "45" }
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with drag-and-drop functionality, real-time updates, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["Next.js", "TypeScript", "Prisma", "TailwindCSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: { views: "1.8k", stars: "32" }
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tech: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      stats: { views: "3.2k", stars: "58" }
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website with modern animations, responsive design, and optimized performance.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      tech: ["React", "Framer Motion", "Tailwind", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      stats: { views: "4.1k", stars: "72" }
    }
  ];

  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-white via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-10 w-2 h-2 bg-purple-400 rounded-full opacity-40"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-40"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-black text-gray-900 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8 rounded-full"
          />
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            A showcase of my recent work, demonstrating proficiency in modern web technologies 
            and creative problem-solving abilities.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              className={`group relative ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="glass-effect rounded-3xl overflow-hidden shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-700">
                {/* Project image with overlay */}
                <div className="relative overflow-hidden h-64">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Featured badge */}
                  {project.featured && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1"
                    >
                      <Star className="w-4 h-4" />
                      Featured
                    </motion.div>
                  )}
                  
                  {/* Overlay with stats */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-4 left-4 flex items-center space-x-4 text-white">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm font-medium">{project.stats.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span className="text-sm font-medium">{project.stats.stars}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.liveUrl}
                      className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-700" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubUrl}
                      className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
                    >
                      <Github className="w-5 h-5 text-gray-700" />
                    </motion.a>
                  </div>
                </div>
                
                {/* Project content */}
                <div className="p-8">
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold border border-purple-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Project links */}
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-effect p-8 rounded-3xl border border-white/50 shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">More Projects Coming Soon</h3>
            <p className="text-gray-600 mb-6">
              I'm constantly working on new projects and experimenting with cutting-edge technologies.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg transition-all duration-300"
            >
              View All Projects
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
