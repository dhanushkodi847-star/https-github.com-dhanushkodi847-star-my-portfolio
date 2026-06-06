import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Cpu, Layers, Award, Rocket, Code, Database } from 'lucide-react';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss } from 'react-icons/si';

const stats = [
  { id: 1, value: "5+", label: "Projects Built", icon: <Rocket size={20} className="text-accent" /> },
  { id: 2, value: "8+", label: "Certifications", icon: <Award size={20} className="text-neonPurple" /> },
  { id: 3, value: "2", label: "Internships", icon: <Code size={20} className="text-accentHover" /> },
  { id: 4, value: "8+", label: "Technologies", icon: <Database size={20} className="text-accent" /> },
];

const whatIDo = [
  {
    icon: <Globe size={32} className="text-accent" />,
    title: "MERN Stack Development",
    desc: "End-to-end web applications with MongoDB, Express.js, React, and Node.js — from responsive UIs to scalable REST APIs and database architecture.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    icon: <Cpu size={32} className="text-neonPurple" />,
    title: "AI & Machine Learning",
    desc: "Building intelligent solutions with Python, NLP, and predictive models. Experienced in integrating AI capabilities into real-world applications for case classification and fake news detection.",
    tags: ["Python", "NLP", "Machine Learning", "IBM AI"],
  },
  {
    icon: <Layers size={32} className="text-accentHover" />,
    title: "Backend & API Development",
    desc: "Designing robust server-side architectures with authentication systems, complex database integrations, and RESTful APIs that handle real-world business logic.",
    tags: ["REST APIs", "SQL", "Authentication", "Server Architecture"],
  },
];

const techHighlights = [
  { icon: <FaReact size={20} className="text-[#61DAFB]" />, name: "React" },
  { icon: <FaNodeJs size={20} className="text-[#339933]" />, name: "Node.js" },
  { icon: <SiMongodb size={20} className="text-[#47A248]" />, name: "MongoDB" },
  { icon: <SiExpress size={20} className="text-white" />, name: "Express" },
  { icon: <FaPython size={20} className="text-[#3776AB]" />, name: "Python" },
  { icon: <SiJavascript size={20} className="text-[#F7DF1E]" />, name: "JavaScript" },
  { icon: <SiTailwindcss size={20} className="text-[#38B2AC]" />, name: "Tailwind" },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-2">Introduction</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me.</h2>
        </motion.div>

        {/* Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 md:p-10 border-l-4 border-l-accent mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Who I Am
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            I'm <span className="text-accent font-semibold">Dhanush Kodi</span>, a final-year BCA student at 
            <span className="text-white font-medium"> Dr. M.G.R. Educational and Research Institute</span>, based in 
            <span className="text-white font-medium"> Chennai, Tamil Nadu</span>. I'm a passionate Full Stack Developer 
            specializing in the <span className="text-accent font-semibold">MERN stack</span> and 
            <span className="text-neonPurple font-semibold"> Python</span>, with a strong interest in 
            <span className="text-neonPurple font-semibold"> Artificial Intelligence</span>.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            I've built multiple real-world projects including an <span className="text-white font-medium">AI-based legal case classification & lawyer matching system</span>, a 
            <span className="text-white font-medium"> food donation management platform</span>, and an 
            <span className="text-white font-medium"> AI-powered fake financial news detection system</span> using NLP. 
            My experience spans from building responsive front-end interfaces to designing scalable backend architectures 
            with authentication, database integration, and predictive AI models.
          </p>
          <p className="text-gray-400 leading-relaxed">
            I also bring hands-on industry experience through my internship at <span className="text-white font-medium">SHASAA Groups</span>, 
            where I contributed to web development, front-end UI improvements, SEO optimization, and digital marketing campaigns. 
            I hold <span className="text-accent font-semibold">8+ certifications</span> including Python Programming, IBM Advanced AI, 
            and Web Development — and I'm constantly learning to stay at the cutting edge of technology.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(102, 252, 241, 0.3)" }}
              className="glass-panel p-6 flex flex-col items-center justify-center min-w-[150px] sm:min-w-[180px] cursor-default border border-white/5 hover:border-accent/30 transition-colors"
            >
              <div className="mb-3">{stat.icon}</div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-neonPurple">{stat.value}</h3>
              <p className="text-gray-400 mt-2 font-medium text-sm text-center">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* What I Do Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-2">Specializations</p>
          <h3 className="text-3xl font-bold text-white">What I Do.</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {whatIDo.map((card, index) => (
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
              <p className="text-gray-400 mb-5 text-sm leading-relaxed">{card.desc}</p>
              
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-white/5 text-gray-400 rounded-full border border-white/10 group-hover:border-accent/20 group-hover:text-accent transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Highlights Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          <span className="text-gray-500 text-xs uppercase tracking-widest font-semibold shrink-0">Core Stack</span>
          <div className="h-px sm:h-6 w-full sm:w-px bg-white/10 shrink-0" />
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {techHighlights.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-default"
              >
                {tech.icon}
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
