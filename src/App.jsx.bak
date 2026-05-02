import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import StarsCanvas from './canvas/Stars';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

const LoadingScreen = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[999] bg-primary flex flex-col items-center justify-center h-screen w-screen"
    >
      <div className="relative flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 border-t-2 border-r-2 border-accent rounded-full absolute"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-b-2 border-l-2 border-neonPurple rounded-full absolute"
        />
        <h1 className="text-3xl font-bold text-white z-10">D<span className="text-accent animate-pulse">.</span></h1>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-accent font-semibold tracking-[0.2em] uppercase text-sm"
      >
        Initiating Sequence...
      </motion.p>
    </motion.div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <AnimatePresence>
        {loading && <LoadingScreen setLoading={setLoading} />}
      </AnimatePresence>
      
      {!loading && (
        <div className="relative z-0 bg-primary font-sans text-white overflow-hidden selection:bg-accent selection:text-primary">
          <CustomCursor />
          <StarsCanvas />
          
          <Navbar />
          
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            
            <div className="relative z-0">
              <Contact />
            </div>
          </main>

          <footer className="text-center py-6 text-gray-500 text-sm border-t border-white/5 relative z-10 bg-primary/50 backdrop-blur-sm">
            <p>© {new Date().getFullYear()} Dhanush. All rights reserved.</p>
          </footer>
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
