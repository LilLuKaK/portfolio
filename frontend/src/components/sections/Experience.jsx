import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';
import GlassCard from '../GlassCard';
import GlassSurface from './../GlassSurface'
import { experience, education } from '../../data/mockData';

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <img src='https://img.icons8.com/liquid-glass/48/building.png' className="w-9 h-9 mr-3" />
              Professional Experience
            </h3>
            
            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
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
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold text-white">{job.position}</h4>
                      <p className="text-neutral-400 font-semibold">{job.company}</p>
                      <div className="flex flex-wrap gap-4 mt-2 text-white/60 text-sm">
                        <div className="flex items-center">
                          <img src="https://img.icons8.com/liquid-glass/16/calendar.png" alt="Calendar" className="w-4 h-4 mr-1" />
                          {job.period}
                        </div>
                        <div className="flex items-center">
                          <img src="https://img.icons8.com/liquid-glass/16/worldwide-location.png" alt="MapPin" className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {job.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-white/80 text-sm leading-relaxed flex items-start">
                          <span className="w-2 h-2 bg-gradient-to-r from-stone-600 to-neutral-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassSurface>
              </motion.div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <img src='https://img.icons8.com/liquid-glass/48/graduation-cap.png' className="w-9 h-9 mr-3" />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
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
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                      <p className="text-neutral-400 font-semibold">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 mt-2 text-white/60 text-sm">
                        <div className="flex items-center">
                          <img src="https://img.icons8.com/liquid-glass/16/calendar.png" alt="Calendar" className="w-4 h-4 mr-1" />
                          {edu.period}
                        </div>
                        <div className="flex items-center">
                          <img src="https://img.icons8.com/liquid-glass/16/worldwide-location.png" alt="MapPin" className="w-4 h-4 mr-1" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {edu.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-white/80 text-sm leading-relaxed flex items-start">
                          <span className="w-2 h-2 bg-gradient-to-r from-stone-500 to-neutral-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassSurface>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;