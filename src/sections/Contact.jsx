import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("Message successfully sent!");
      setForm({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-12">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 glass-panel p-8 md:p-12 border-l-4 border-l-accent"
        >
          <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Contact.</h2>
          
          <div className="grid gap-6">
            <a href="mailto:dhanushkodi847@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors group">
              <div className="w-12 h-12 shrink-0 bg-white/5 flex items-center justify-center rounded-full border border-white/10 group-hover:border-accent group-hover:bg-accent/10 transition-colors">
                <Mail className="text-accent" />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold group-hover:text-accent transition-colors">Email</p>
                <p className="text-base sm:text-lg font-medium break-all">dhanushkodi847@gmail.com</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/dhanush-kodi-selvaraj-893881357" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors group">
              <div className="w-12 h-12 shrink-0 bg-white/5 flex items-center justify-center rounded-full border border-white/10 group-hover:border-accent group-hover:bg-accent/10 transition-colors">
                <FaLinkedin className="text-accent text-xl" />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold group-hover:text-accent transition-colors">LinkedIn</p>
                <p className="text-base sm:text-lg font-medium truncate">Connect with me</p>
              </div>
            </a>

            <a href="https://github.com/dhanushkodi847-star" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors group">
              <div className="w-12 h-12 shrink-0 bg-white/5 flex items-center justify-center rounded-full border border-white/10 group-hover:border-accent group-hover:bg-accent/10 transition-colors">
                <FaGithub className="text-accent text-xl" />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold group-hover:text-accent transition-colors">GitHub</p>
                <p className="text-base sm:text-lg font-medium truncate">dhanushkodi847-star</p>
              </div>
            </a>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full border border-white/10 hover:border-accent transition-colors">
                <MapPin className="text-accent" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Location</p>
                <p className="text-lg font-medium">Chennai, TamilNadu, India.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 glass-panel p-8 md:p-12 relative"
        >
          {loading && (
            <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm z-50 flex items-center justify-center flex-col rounded-2xl">
              <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-accent font-semibold tracking-wider animate-pulse">Sending Transmission...</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="bg-secondary/50 py-4 px-6 text-white rounded-lg border border-white/10 outline-none focus:border-accent transition-colors font-medium"
                placeholder="What's your name?"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-secondary/50 py-4 px-6 text-white rounded-lg border border-white/10 outline-none focus:border-accent transition-colors font-medium"
                placeholder="What's your web address?"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Message</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="bg-secondary/50 py-4 px-6 text-white rounded-lg border border-white/10 outline-none focus:border-accent transition-colors font-medium resize-none"
                placeholder="What do you want to say?"
              />
            </label>

            <button
              type="submit"
              className="btn-primary flex items-center justify-center gap-2 mt-2"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
