
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Star } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices and modern standards."
    },
    {
      icon: Layout,
      title: "Responsive Design",
      description: "Creating seamless experiences across all devices and screen sizes."
    },
    {
      icon: Star,
      title: "User Experience",
      description: "Focusing on intuitive interfaces that delight and engage users."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate frontend developer with a keen eye for design and a love for creating 
            digital experiences that make a difference. Currently seeking internship opportunities 
            to contribute to innovative projects and grow with a dynamic team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-gray-600">
              <p>
                With over 2 years of self-taught experience in web development, I've honed my skills 
                in modern frontend technologies including React, TypeScript, and Next.js. I'm passionate 
                about writing clean, efficient code and creating user interfaces that are both beautiful 
                and functional.
              </p>
              <p>
                My journey in web development started with curiosity and has evolved into a deep 
                commitment to continuous learning and improvement. I thrive in collaborative 
                environments and am always eager to take on new challenges.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'Git'].map((skill) => (
                <span
                  key={skill}
                  className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-xl">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
