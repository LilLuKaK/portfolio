import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Download, Github, Linkedin } from 'lucide-react';
import GlassCard from '../GlassCard';
import GlassSurface from './../GlassSurface'
import { personalInfo } from '../../data/mockData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Clear status after 3 seconds
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const handleDownloadResume = () => {
    // Mock download functionality
    alert('Resume download functionality will be implemented with backend integration');
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto"></div>
          <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together to create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <GlassSurface
              width="auto"
              height="40%"
              borderRadius={17}
              brightness={50}
              blur={10}
              opacity={0.93}
              redOffset={0}
              greenOffset={10}
              blueOffset={20}
              displace={0.5}
              distortionScale={-100}
              mixBlendMode="screen"
              className="p-6 transition-transform duration-500 group animate-shrink-on-leave hover:animate-pulse-scale" // Añade flex-col aquí
            >
              <div className="flex flex-col w-full p-6">
                {/* Título (ocupa todo el ancho superior) */}
                <h3 className="text-2xl font-bold text-white mb-6 w-full">
                  Let's Connect
                </h3>
                
                {/* Contenedor de contactos (ocupa todo el ancho restante) */}
                <div className="space-y-6 w-full">
                  {/* Email */}
                  <div className="flex items-center space-x-4 w-full">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <img src="https://img.icons8.com/liquid-glass/48/email-sign.png" alt="Email" className="w-12 h-12" />
                    </div>
                    <div className="flex-1 min-w-0"> {/* Asegura que el texto no desborde */}
                      <p className="text-white/90 font-medium">Email</p>
                      <p className="text-white/70 truncate">{personalInfo.email}</p> {/* truncate para emails largos */}
                    </div>
                  </div>
                  
                  {/* Ubicación */}
                  <div className="flex items-center space-x-4 w-full">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <img src="https://img.icons8.com/liquid-glass/48/worldwide-location.png" alt="Location" className="w-12 h-12" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/90 font-medium">Location</p>
                      <p className="text-white/70">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassSurface>

            <GlassSurface
              width="auto"
              height="calc(30% - 32px)"
              borderRadius={17}
              brightness={50}
              blur={10}
              opacity={0.93}
              redOffset={0}
              greenOffset={10}
              blueOffset={20}
              displace={0.5}
              distortionScale={-100}
              mixBlendMode="screen"
              className="h-full p-6 transition-transform duration-500 group animate-shrink-on-leave hover:animate-pulse-scale"
            >
              <div className="flex flex-col w-full p-6">
                <h3 className="text-xl font-bold text-white mb-6">
                  Download Resume
                </h3>
                <button
                  onClick={handleDownloadResume}
                  className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-stone-500 to-neutral-400 rounded-2xl text-white font-medium hover:from-blue-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  <span>Download CV</span>
                </button>
              </div>
            </GlassSurface>

            <GlassSurface
              width="auto"
              height="calc(30% - 32px)"
              borderRadius={17}
              brightness={50}
              blur={10}
              opacity={0.93}
              redOffset={0}
              greenOffset={10}
              blueOffset={20}
              displace={0.5}
              distortionScale={-100}
              mixBlendMode="screen"
              className="h-full p-6 transition-transform duration-500 group animate-shrink-on-leave hover:animate-pulse-scale"
            >
              <div className="flex flex-col w-full p-6">
                <h3 className="text-xl font-bold text-white mb-6">
                  Social Links
                </h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/LilLuKaK"
                    target='blank' 
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <img src="https://img.icons8.com/liquid-glass/48/github.png" alt="GitHub" className="w-12 h-12" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/lucasbravoparra/"
                    target='blank' 
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <img src="https://img.icons8.com/liquid-glass/48/linkedin.png" alt="LinkedIn" className="w-12 h-12" />
                  </a>
                  <a 
                    href="mailto:bravoparralucas@gmail.com"
                    target='blank' 
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <img src="https://img.icons8.com/liquid-glass/48/email-sign.png" alt="Mail" className="w-12 h-12" />
                  </a>
                </div>
              </div>
            </GlassSurface>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <GlassSurface
              width="auto"
              height="100%"
              borderRadius={17}
              brightness={50}
              blur={10}
              opacity={0.93}
              redOffset={0}
              greenOffset={10}
              blueOffset={20}
              displace={0.5}
              distortionScale={-100}
              mixBlendMode="screen"
              className="h-full p-6 transition-transform duration-500 group animate-shrink-on-leave hover:animate-pulse-scale"
            >
              <div className="flex flex-col w-full p-6">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Want to contact me?
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                      placeholder="Project Discussion"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl text-white font-medium hover:from-blue-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-400 text-center"
                    >
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}
                </form>
              </div>
            </GlassSurface>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;