import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../../data/mockData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black text-white mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-white/60 text-sm">
              {personalInfo.title}
            </p>
            <p className="text-white/50 text-xs mt-1">
              {personalInfo.location}
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:items-center"
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a 
                href="#about" 
                className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
              >
                About
              </a>
              <a 
                href="#skills" 
                className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
              >
                Contact
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col md:items-end"
          >
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/50 text-sm flex items-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by Lucas Bravo Parra
          </p>
          <p className="text-white/40 text-xs mt-2 md:mt-0">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
      >
        <ArrowUp className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors duration-300" />
      </button>
    </footer>
  );
};

export default Footer;