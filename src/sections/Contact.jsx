import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const socialLinks = [
  {
    name: "Email",
    handle: "dhanushkodi847@gmail.com",
    href: "mailto:dhanushkodi847@gmail.com",
    icon: <Mail size={22} />,
    color: "from-red-500 to-orange-500",
    cta: "Send an Email",
  },
  {
    name: "LinkedIn",
    handle: "Dhanush Kodi Selvaraj",
    href: "https://www.linkedin.com/in/dhanush-kodi-selvaraj-893881357",
    icon: <FaLinkedin size={22} />,
    color: "from-blue-500 to-cyan-400",
    cta: "Connect",
  },
  {
    name: "GitHub",
    handle: "dhanushkodi847-star",
    href: "https://github.com/dhanushkodi847-star",
    icon: <FaGithub size={22} />,
    color: "from-gray-400 to-white",
    cta: "View Profile",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            I'm currently open to freelance projects, internship opportunities, and collaborations. 
            If you have an idea you'd like to bring to life — let's connect.
          </p>
        </motion.div>

        {/* CTA Email Banner */}
        <motion.a
          href="mailto:dhanushkodi847@gmail.com"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group block glass-panel p-8 md:p-10 mb-8 border border-accent/20 hover:border-accent/50 transition-all duration-500 relative overflow-hidden"
        >
          {/* Animated gradient background on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-neonPurple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 shrink-0 bg-gradient-to-br from-accent/20 to-neonPurple/20 rounded-2xl flex items-center justify-center border border-accent/30 group-hover:border-accent/60 transition-colors">
                <Sparkles size={24} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1 group-hover:text-accent transition-colors">Preferred Contact</p>
                <p className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors">dhanushkodi847@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-accent font-semibold shrink-0">
              <span className="text-sm uppercase tracking-wider">Send Email</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </motion.a>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-panel p-6 group cursor-pointer border border-white/5 hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${link.color} bg-opacity-20 flex items-center justify-center text-white`}
                  style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))` }}
                >
                  <span className="text-accent">{link.icon}</span>
                </div>
                <ArrowUpRight size={16} className="text-gray-600 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">{link.name}</p>
              <p className="text-white font-medium text-sm truncate mb-3">{link.handle}</p>
              <p className="text-accent text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">{link.cta} →</p>
            </motion.a>
          ))}
        </div>

        {/* Location + Resume Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-panel p-6 flex items-center gap-5"
          >
            <div className="w-11 h-11 shrink-0 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
              <MapPin size={20} className="text-accent" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Location</p>
              <p className="text-white font-medium">Chennai, Tamil Nadu, India</p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-green-400 font-semibold uppercase tracking-wider">Available</span>
            </div>
          </motion.div>

          {/* Resume Download */}
          <motion.a
            href="/Dhanushkodi_Resume.pdf"
            download="Dhanushkodi_Resume.pdf"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass-panel p-6 flex items-center gap-5 group border border-white/5 hover:border-accent/30 transition-all duration-300 cursor-pointer"
          >
            <div className="w-11 h-11 shrink-0 bg-gradient-to-br from-accent/20 to-neonPurple/20 rounded-xl flex items-center justify-center border border-accent/30">
              <HiDownload size={20} className="text-accent" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold group-hover:text-accent transition-colors">Resume</p>
              <p className="text-white font-medium">Download my CV</p>
            </div>
            <div className="ml-auto">
              <span className="text-accent text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">PDF ↓</span>
            </div>
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
