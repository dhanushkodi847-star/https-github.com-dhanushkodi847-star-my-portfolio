import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/80 backdrop-blur-md shadow-lg shadow-accent/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-white flex items-center gap-2 z-50">
          Dhanush<span className="text-accent animate-pulse">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-accent transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Dhanushkodi_Resume.pdf"
              download="Dhanushkodi_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent to-neonPurple text-primary font-bold rounded-full text-xs tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
            >
              <HiDownload className="text-sm" />
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-accent z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu Backdrop */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-0 right-0 w-2/3 h-screen bg-secondary/95 backdrop-blur-lg flex flex-col justify-center items-center gap-8 md:hidden shadow-2xl"
          >
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-bold hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="/Dhanushkodi_Resume.pdf"
              download="Dhanushkodi_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-neonPurple text-primary font-bold rounded-full text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105"
            >
              <HiDownload className="text-base" />
              Download Resume
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
