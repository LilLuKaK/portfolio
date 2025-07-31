import { motion } from 'framer-motion';
import GlassSurface from './../GlassSurface'
import { personalInfo } from '../../data/mockData';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-6">
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
            className="h-full"
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
            </GlassSurface>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col h-full gap-6"
          >
            <GlassSurface
              width="auto"
              height="calc(40% - 12px)"
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
              className="p-6 transition-transform duration-500 group animate-shrink-on-leave hover:animate-pulse-scale"
            >
              <div className="flex flex-col w-full">
                <h3 className="text-xl font-bold text-white mb-4 w-full">Languages</h3>
                <div className="space-y-3 w-full">
                  {personalInfo.languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-white/90">{lang.name}</span>
                      <span className="text-white/60 text-sm">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassSurface>

            <GlassSurface
              width="auto"
              height="calc(60% - 12px)"
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
              className="p-6 transition-transform duration-500 group animate-shrink-on-leave hover:animate-pulse-scale"
            >
              <div className="flex flex-col w-full">
                <h3 className="text-xl font-bold text-white mb-4 w-full">Additional Info</h3>
                <div className="space-y-3 w-full">
                  <div className="flex items-center space-x-3">
                    <span className="text-white/90"><img src="https://img.icons8.com/liquid-glass/30/worldwide-location.png" alt="Location" /></span>
                    <span className="text-white/80">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-white/90"><img src="https://img.icons8.com/liquid-glass/30/email-sign.png" alt="Email" /></span>
                    <span className="text-white/80">{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-white/90"><img src="https://img.icons8.com/liquid-glass/30/tesla-model-x.png" alt="Car" /></span>
                    <span className="text-white/80">{personalInfo.license}</span>
                  </div>
                </div>
              </div>
            </GlassSurface>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;