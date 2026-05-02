import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Code } from 'lucide-react';

const projects = [
  {
    title: "AI-Based Case Label & Lawyer System",
    description: "AI-integrated web app for legal case categorization and lawyer matching. Built with React.js UI and Node.js & Express.js backend APIs for case and lawyer data management.",
    tags: ["React", "Node.js", "MongoDB", "AI/ML"],
    image: "/AI-Based Case Label & Lawyer System.png",
    sourceCode: "https://github.com/dhanushkodi847-star/AI-Based-Case-Posting-and-Lawyer-Engaged-System",
  },
  {
    title: "Food Donation Management System",
    description: "Full-stack MERN platform for managing food donation requests with responsive UI and backend APIs. Improved performance and handled data using MongoDB for a seamless donation experience.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    image: "/Food Donation Management System.png",
    sourceCode: "https://github.com/dhanushkodi847-star/food-donation-system",
  },
  {
    title: "AI- Fake Financial News Detection",
    description: "A machine learning system to detect fake financial news and market manipulation attempts using Natural Language Processing. Analyzes text data to classify authenticity.",
    tags: ["Python", "Machine Learning", "NLP", "AI"],
    image: "/AI Fake News Detection System.png",
    sourceCode: "https://github.com/dhanushkodi847-star/ai-fake-financial-news-detection",
  }
];

// Project Card with Custom 3D Tilt Effect using Framer Motion
const ProjectCard = ({ project, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 15;
    const y = -(clientY - top - height / 2) / 15;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{
        rotateX: useMotionTemplate`${mouseY}deg`,
        rotateY: useMotionTemplate`${mouseX}deg`,
        transformStyle: "preserve-3d",
      }}
      className="glass-panel group overflow-hidden relative cursor-pointer"
    >
      <div className="h-64 overflow-hidden relative">
        <div className="absolute inset-0 bg-secondary/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6 relative z-20 bg-secondary/80 backdrop-blur-md border-t border-white/10">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-semibold px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 py-2 text-sm justify-center">
            <Code size={16} className="mr-2" /> View Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10 perspective-1000">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-2">My Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Selected Projects.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
