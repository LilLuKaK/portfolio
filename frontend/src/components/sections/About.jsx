import { motion } from 'framer-motion';
import GlassCard from '../GlassCard';
import { personalInfo } from '../../data/mockData';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Professional Profile
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  {personalInfo.profile}
                </p>
                <p className="text-white/70 text-base leading-relaxed">
                  I'm interested in building well-designed, efficient products with impact. 
                  I'm looking for projects where I can continue to grow and contribute from the front lines.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <GlassCard>
              <h3 className="text-xl font-bold text-white mb-4">Languages</h3>
              <div className="space-y-3">
                {personalInfo.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-white/90">{lang.name}</span>
                    <span className="text-white/60 text-sm">{lang.level}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="text-xl font-bold text-white mb-4">Additional Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-white/90">📍</span>
                  <span className="text-white/80">{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-white/90">📧</span>
                  <span className="text-white/80">{personalInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-white/90">🚗</span>
                  <span className="text-white/80">{personalInfo.license}</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;