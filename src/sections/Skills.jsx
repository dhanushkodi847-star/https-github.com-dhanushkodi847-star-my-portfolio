import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaFigma, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact size={40} className="text-[#61DAFB]" />, category: 'Frontend' },
  { name: 'Node.js', icon: <FaNodeJs size={40} className="text-[#339933]" />, category: 'Backend' },
  { name: 'MongoDB', icon: <SiMongodb size={40} className="text-[#47A248]" />, category: 'Database' },
  { name: 'Express.js', icon: <FaReact size={40} className="text-white" />, category: 'Backend' },
  { name: 'JavaScript', icon: <FaReact size={40} className="text-[#F7DF1E]" />, category: 'Language' },
  { name: 'Python', icon: <FaPython size={40} className="text-[#3776AB]" />, category: 'Language' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-[#38B2AC]" />, category: 'Frontend' },
  { name: 'SQL', icon: <FaReact size={40} className="text-white" />, category: 'Database' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-2">My Arsenal</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technologies.</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 20px rgba(102, 252, 241, 0.5)",
                borderColor: "rgba(102, 252, 241, 0.8)"
              }}
              className="glass-panel p-6 flex flex-col items-center justify-center gap-4 cursor-pointer border border-white/5 transition-all duration-300"
            >
              <div className="p-4 bg-white/5 rounded-full shadow-[inset_0_0_10px_rgba(255,255,255,0.1)]">
                {skill.icon}
              </div>
              <p className="text-white font-semibold tracking-wide">{skill.name}</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest">{skill.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
