
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Star, Heart, Coffee, Rocket } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices and modern standards.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Layout,
      title: "Responsive Design",
      description: "Creating seamless experiences across all devices and screen sizes.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Star,
      title: "User Experience",
      description: "Focusing on intuitive interfaces that delight and engage users.",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const personalStats = [
    { icon: Coffee, text: "Coffee Cups", number: "∞" },
    { icon: Heart, text: "Passion Level", number: "100%" },
    { icon: Rocket, text: "Projects Launched", number: "50+" }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-2xl opacity-20" />
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
            About <span className="text-gradient">Me</span>
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
            I'm a passionate frontend developer with a keen eye for design and a love for creating 
            digital experiences that make a difference. Currently seeking internship opportunities 
            to contribute to innovative projects and grow with a dynamic team.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect p-8 rounded-3xl border border-white/50 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
              <div className="space-y-6 text-gray-600">
                <p className="leading-relaxed">
                  With over <span className="font-semibold text-purple-600">2 years of self-taught experience</span> in web development, 
                  I've honed my skills in modern frontend technologies including React, TypeScript, and Next.js. 
                  I'm passionate about writing clean, efficient code and creating user interfaces that are both 
                  beautiful and functional.
                </p>
                <p className="leading-relaxed">
                  My journey in web development started with curiosity and has evolved into a deep 
                  commitment to continuous learning and improvement. I thrive in collaborative 
                  environments and am always eager to take on new challenges.
                </p>
              </div>
            </div>
            
            {/* Personal stats */}
            <div className="grid grid-cols-3 gap-4">
              {personalStats.map((stat, index) => (
                <motion.div
                  key={stat.text}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-effect p-4 rounded-2xl text-center border border-white/50 shadow-lg"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                  <div className="text-2xl font-bold text-gradient">{stat.number}</div>
                  <div className="text-xs text-gray-600 font-medium">{stat.text}</div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced skills tags */}
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'Git', 'Figma', 'MongoDB'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="glass-effect px-4 py-2 rounded-full text-sm font-semibold text-gray-700 hover:text-purple-700 transition-all duration-300 cursor-pointer border border-white/50 shadow-md"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -8 }}
                className="group glass-effect p-8 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500"
              >
                <div className="flex items-start space-x-6">
                  <motion.div 
                    className={`bg-gradient-to-r ${feature.color} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
                
                {/* Hover effect line */}
                <motion.div
                  className={`h-1 bg-gradient-to-r ${feature.color} rounded-full mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </motion.div>
            ))}
          </motion.div>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Collaborate?</h3>
            <p className="text-gray-600 mb-6">
              I'm actively seeking internship opportunities where I can contribute my skills and grow as a developer.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg transition-all duration-300"
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
