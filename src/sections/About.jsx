import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Globe, Layers, Cpu } from 'lucide-react';

const stats = [
  { id: 1, value: "3+", label: "Full-Stack Projects" },
  { id: 2, value: "6+", label: "Technologies" },
  { id: 3, value: "8+", label: "Certifications" },
];

const cards = [
  { icon: <Globe size={32} className="text-accent" />, title: "MERN Stack", desc: "Building full-stack applications with MongoDB, Express, React & Node.js" },
  { icon: <Cpu size={32} className="text-neonPurple" />, title: "AI Integration", desc: "Developing AI-powered solutions using Python and machine learning" },
  { icon: <Layers size={32} className="text-accentHover" />, title: "Python & APIs", desc: "Creating robust backend systems and APIs with Python" },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-2">Introduction</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me.</h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            I am a motivated BCA student with hands-on experience in MERN stack and Python development. I've completed multiple full-stack projects including an AI-based case classification system, a food donation management platform, and HRM & CRM systems. I have internship experience in web development and digital marketing, with strong foundation in JavaScript, Python, Java, and SQL. I'm passionate about creating efficient, scalable solutions and eager to contribute to real-world applications.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 flex flex-col items-center justify-center min-w-[180px]"
            >
              <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-neonPurple">{stat.value}</h3>
              <p className="text-gray-400 mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-panel p-8 group cursor-crosshair"
            >
              <div className="bg-white/5 rounded-full w-16 h-16 flex items-center justify-center mb-6 border border-white/10 group-hover:border-accent/50 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-gray-400">{card.desc}</p>
              
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
