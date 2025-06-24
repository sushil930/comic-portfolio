import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Skills = () => {
  const skillCategories = [
    {
      title: "FRONTEND POWERS",
      icon: "mdi:palette",
      color: "from-red-500 to-pink-500",
      skills: [
        { name: "React", icon: "logos:react", level: 90, xp: "2,450 XP" },
        { name: "TypeScript", icon: "logos:typescript-icon", level: 85, xp: "2,100 XP" },
        { name: "Next.js", icon: "logos:nextjs-icon", level: 80, xp: "1,850 XP" },
        { name: "Tailwind", icon: "logos:tailwindcss-icon", level: 95, xp: "2,700 XP" }
      ]
    },
    {
      title: "BACKEND ABILITIES",
      icon: "mdi:cog",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Node.js", icon: "logos:nodejs-icon", level: 75, xp: "1,650 XP" },
        { name: "Express", icon: "logos:express", level: 70, xp: "1,500 XP" },
        { name: "MongoDB", icon: "logos:mongodb-icon", level: 65, xp: "1,350 XP" },
        { name: "PostgreSQL", icon: "logos:postgresql", level: 60, xp: "1,200 XP" }
      ]
    },
    {
      title: "HERO TOOLS",
      icon: "mdi:tools",
      color: "from-purple-500 to-indigo-500",
      skills: [
        { name: "Git", icon: "logos:git-icon", level: 85, xp: "2,000 XP" },
        { name: "Figma", icon: "logos:figma", level: 80, xp: "1,800 XP" },
        { name: "Docker", icon: "logos:docker-icon", level: 55, xp: "1,000 XP" },
        { name: "AWS", icon: "logos:aws", level: 50, xp: "900 XP" }
      ]
    }
  ];

  const achievements = [
    { title: "Code Warrior", description: "Wrote 10,000+ lines of code", icon: "mdi:sword", rarity: "LEGENDARY" },
    { title: "Bug Hunter", description: "Squashed 500+ bugs", icon: "mdi:bug", rarity: "EPIC" },
    { title: "Speed Coder", description: "Completed project in record time", icon: "mdi:flash", rarity: "RARE" },
    { title: "Team Player", description: "Collaborated on 20+ projects", icon: "mdi:handshake", rarity: "UNCOMMON" }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'LEGENDARY': return 'bg-gradient-to-r from-yellow-400 to-orange-500';
      case 'EPIC': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'RARE': return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'UNCOMMON': return 'bg-gradient-to-r from-green-500 to-emerald-500';
      default: return 'bg-gray-500';
    }
  };

  const getRarityIconColor = (rarity: string) => {
    switch (rarity) {
      case 'LEGENDARY': return 'text-yellow-500';
      case 'EPIC': return 'text-purple-500';
      case 'RARE': return 'text-blue-500';
      case 'UNCOMMON': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const getPowerLevel = (level: number) => {
    if (level >= 90) return { text: "MASTER", color: "text-red-600" };
    if (level >= 80) return { text: "EXPERT", color: "text-purple-600" };
    if (level >= 70) return { text: "ADVANCED", color: "text-blue-600" };
    if (level >= 60) return { text: "SKILLED", color: "text-green-600" };
    return { text: "LEARNING", color: "text-yellow-600" };
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-orange-200 via-red-200 to-pink-200 relative overflow-hidden">
      {/* Comic Background Elements */}
      <div className="absolute inset-0">
        <div className="halftone-bg absolute inset-0"></div>
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 comic-marker text-8xl text-yellow-400 opacity-20"
        >
          ⭐
        </motion.div>
        <motion.div
          animate={{ rotate: -360, x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-10 comic-marker text-6xl text-blue-400 opacity-20"
        >
          💫
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Comic Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="comic-border-yellow bg-red-500 p-8 rounded-3xl transform -rotate-1 inline-block">
            <h2 className="comic-title text-white">
              POWER LEVELS
            </h2>
            <div className="comic-marker text-2xl text-yellow-300 mt-2">
              "Check out these coding superpowers!"
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
                Every hero needs their powers! Here's my current skill level across different coding domains.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Power Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <div className="comic-border bg-white p-6 rounded-3xl hover:shadow-2xl transition-all duration-300">
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${category.color} comic-border p-4 rounded-2xl mb-6 text-center`}>
                  <div className="text-4xl mb-2"><Icon icon={category.icon} className="inline-block" /></div>
                  <h3 className="comic-heading text-2xl text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills with Power Bars */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const powerLevel = getPowerLevel(skill.level);
                    return (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="comic-text text-gray-800 flex items-center gap-2">
                            <Icon icon={skill.icon} className="w-5 h-5" />
                            {skill.name}
                          </span>
                          <div className="text-right">
                            <span className={`comic-marker text-sm ${powerLevel.color}`}>
                              {powerLevel.text}
                            </span>
                            <div className="text-xs text-gray-500">{skill.xp}</div>
                          </div>
                        </div>
                        
                        {/* Power Bar */}
                        <div className="relative">
                          <div className="w-full bg-gray-200 rounded-full h-6 comic-border">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ 
                                duration: 1.5, 
                                delay: categoryIndex * 0.2 + skillIndex * 0.1,
                                ease: "easeOut"
                              }}
                              viewport={{ once: true }}
                              className={`bg-gradient-to-r ${category.color} h-full rounded-full relative overflow-hidden`}
                            >
                              {/* Lightning Effect */}
                              <motion.div
                                animate={{ x: [-100, 300] }}
                                transition={{ 
                                  duration: 2, 
                                  repeat: Infinity, 
                                  delay: skillIndex * 0.5,
                                  ease: "easeInOut"
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-20"
                              />
                              
                              {/* Power Level Display */}
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="comic-text text-white text-sm font-bold">
                                  {skill.level}%
                                </span>
                              </div>
                            </motion.div>
                          </div>
                          
                          {/* Sparks Effect */}
                          {skill.level >= 80 && (
                            <motion.div
                              animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-yellow-400"
                            >
                              <Icon icon="mdi:flash" className="w-4 h-4" />
                            </motion.div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Badges */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="comic-border-blue bg-yellow-400 p-6 rounded-3xl transform rotate-1 inline-block">
            <h3 className="comic-heading text-3xl text-black">ACHIEVEMENTS UNLOCKED</h3>
            <p className="comic-text text-black">Coding milestones & epic wins!</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
              className="group cursor-pointer"
            >
              <div className="comic-border bg-white p-6 rounded-2xl text-center hover:shadow-2xl transition-all duration-300">
                {/* Rarity Indicator */}
                <div className={`${getRarityColor(achievement.rarity)} comic-border px-3 py-1 rounded-full text-white comic-text text-sm mb-4 inline-block`}>
                  {achievement.rarity}
                </div>
                
                {/* Achievement Icon */}
                <div className="text-6xl mb-4 group-hover:animate-bounce-custom">
                  <Icon icon={achievement.icon} className={`inline-block ${getRarityIconColor(achievement.rarity)}`} />
                </div>
                
                {/* Achievement Info */}
                <h4 className="comic-text text-xl text-gray-900 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="comic-border-red bg-white p-8 rounded-3xl max-w-4xl mx-auto transform -rotate-1">
            <h3 className="comic-heading text-3xl text-gray-900 mb-6">NEXT LEVEL TRAINING</h3>
            <p className="comic-text text-gray-600 mb-6">
              Currently leveling up these skills for even more epic adventures!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'GraphQL', icon: 'logos:graphql' },
                { name: 'React Native', icon: 'logos:react' },
                { name: 'Three.js', icon: 'logos:threejs' },
                { name: 'WebGL', icon: 'mdi:webgl' },
                { name: 'Rust', icon: 'logos:rust' },
                { name: 'Go', icon: 'logos:go' }
              ].map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  className="comic-border bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-4 py-2 rounded-full comic-text cursor-pointer hover:from-purple-200 hover:to-blue-200 transition-all duration-200 flex items-center gap-2"
                >
                  <Icon icon={tech.icon} className="w-5 h-5" />
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
