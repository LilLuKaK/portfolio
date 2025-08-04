import { motion } from 'framer-motion';
import { useI18n } from '../../context/i18nContext';
import GlassSurface from './../GlassSurface'
import { personalInfo } from '../../data/mockData';

const Hero = () => {
  const { t } = useI18n();
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Content Layer */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-6xl md:text-[160px] font-black text-white mb-6 leading-tight"
            style={{ lineHeight: '1' }}
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {personalInfo.name}
            <br></br>
            {personalInfo.surname}
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-white/80 mb-8 font-light tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            className="text-lg text-white/60 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            {t('hero_location')}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            {/* View My Work Button */}
            <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              <GlassSurface
                borderRadius={50}
                displace={0.5}
                distortionScale={-180}
                redOffset={0}
                greenOffset={10}
                blueOffset={20}
                brightness={50}
                opacity={0.93}
                mixBlendMode="screen"
              >
                <span className="px-8 py-4 text-white">{t('hero_view_work')}</span>
              </GlassSurface>
            </button>

            {/* Get In Touch Button */}
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="transition-all duration-300 transform hover:scale-105"
            >
              <GlassSurface
                borderRadius={50}
                displace={0.5}
                distortionScale={-180}
                redOffset={0}
                greenOffset={10}
                blueOffset={20}
                brightness={50}
                opacity={0.93}
                mixBlendMode="screen"
              >
                <span className="px-8 py-4 text-white">{t('hero_download_cv')}</span>
              </GlassSurface>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;