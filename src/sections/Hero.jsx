import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["MERN Stack Developer", "Python Developer", "AI Enthusiast", "Full Stack Developer"];

  useEffect(() => {
    let ticker = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, typingSpeed, loopNum]);

  const handleTyping = () => {
    const i = loopNum % roles.length;
    const fullText = roles[i];
    const isDeleting_local = isDeleting;
    const text_local = text;
    const loopNum_local = loopNum;

    if (!isDeleting_local && text_local === fullText) {
      setTimeout(() => setIsDeleting(true), 1500);
      setTypingSpeed(50);
    } else if (isDeleting_local && text_local === '') {
      setIsDeleting(false);
      setLoopNum(loopNum_local + 1);
      setTypingSpeed(150);
    } else {
      setText(isDeleting_local ? fullText.substring(0, text_local.length - 1) : fullText.substring(0, text_local.length + 1));
    }
  };

  return (
    <section id="home" className="relative w-full h-screen mx-auto flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse md:flex-row items-center justify-between w-full z-10 gap-10">
        
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
          >
            Hi, I'm <br />
            <span className="text-gradient">Dhanush Kodi</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300 h-[40px]"
          >
            I am a <span className="text-accent">{text}</span>
            <span className="animate-pulse">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 text-gray-400 max-w-lg mb-8"
          >
            BCA student passionate about building full-stack applications with MERN stack and Python. I create scalable, AI-integrated solutions and love solving real-world problems through innovative web technologies.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex gap-4"
          >
            <a href="#projects" className="btn-primary">View Work</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex gap-6 mt-8"
          >
            <a href="https://github.com/dhanushkodi847-star" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/dhanush-kodi-selvaraj-893881357" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
              <FaLinkedin size={28} />
            </a>
            <a href="https://wa.me/916380843225" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
              <FaWhatsapp size={28} />
            </a>
          </motion.div>
        </div>

        {/* 3D Canvas / Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 w-full flex justify-center items-center relative"
        >
          <div className="relative w-full max-w-md h-[400px] md:h-[500px]">
            {/* Floating background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-neonPurple/20 rounded-3xl blur-3xl"></div>
            
            {/* Photo container */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full h-full rounded-3xl overflow-hidden border-4 border-accent/30 shadow-2xl shadow-accent/20"
            >
              <img 
                src="/Dhanush photo.jpeg" 
                alt="Dhanush Kodi" 
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-30"></div>
            </motion.div>
            
            {/* Decorative ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-3xl border border-accent/20 border-dashed"
            ></motion.div>
          </div>
        </motion.div>

      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <p className="text-sm text-gray-400 mb-2 uppercase tracking-widest font-semibold text-[10px]">Scroll Down</p>
        <div className="w-[30px] h-[50px] rounded-3xl border-2 border-gray-400 flex justify-center items-start p-2 hover:border-accent transition-colors">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-2 rounded-full bg-accent mb-1 shadow-[0_0_10px_#66FCF1]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
