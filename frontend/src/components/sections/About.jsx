import { motion } from 'framer-motion';
import { useI18n } from '../../context/i18nContext';
import GlassSurface from './../GlassSurface'
import { personalInfo } from '../../data/mockData';

const About = () => {
  const { t } = useI18n();
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
            {t('about_title')}
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
              brightness={0}
              blur={0}
              opacity={0}
              redOffset={0}
              greenOffset={0}
              blueOffset={0}
              displace={0}
              distortionScale={0}
              className="h-full p-6 transition-transform duration-500 group animate-shrink-on-leave hover:animate-pulse-scale"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t('about_profile')}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  {t('about_info')}
                </p>
                <p className="text-white/70 text-base leading-relaxed">
                  {t('about_interests')}
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
              brightness={0}
              blur={0}
              opacity={0}
              redOffset={0}
              greenOffset={0}
              blueOffset={0}
              displace={0}
              distortionScale={0}
              mixBlendMode="screen"
              className="p-6 transition-transform duration-500 group animate-shrink-on-leave hover:animate-pulse-scale"
            >
              <div className="flex flex-col w-full">
                <h3 className="text-xl font-bold text-white mb-4 w-full">{t('about_languages')}</h3>
                <div className="space-y-3 w-full">
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">{t('about_spanish')}</span>
                    <span className="text-white/60 text-sm">{t('about_level_native')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">{t('about_english')}</span>
                    <span className="text-white/60 text-sm">{t('about_level_advanced')}</span>
                  </div>
                </div>
              </div>
            </GlassSurface>

            <GlassSurface
              width="auto"
              height="calc(60% - 12px)"
              borderRadius={17}
              brightness={0}
              blur={0}
              opacity={0}
              redOffset={0}
              greenOffset={0}
              blueOffset={0}
              displace={0}
              distortionScale={0}
              mixBlendMode="screen"
              className="p-6 transition-transform duration-500 group animate-shrink-on-leave hover:animate-pulse-scale"
            >
              <div className="flex flex-col w-full">
                <h3 className="text-xl font-bold text-white mb-4 w-full">{t('about_additional_info')}</h3>
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
                    <span className="text-white/80">{t('about_license')}</span>
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