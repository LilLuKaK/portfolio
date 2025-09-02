import { motion } from 'framer-motion';
import { useI18n } from '../../context/i18nContext';
import GlassSurface from './../GlassSurface';
import { personalInfo } from '../../data/mockData';

const About = () => {
  const { t } = useI18n();
  
  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* ... (el resto del código permanece igual) ... */}

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-full"
          >
            {/* Versión móvil (efecto glass simple) */}
            <div className="lg:hidden glass-effect-mobile h-full p-6">
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
            </div>
            
            {/* Versión desktop (GlassSurface - oculto en móviles) */}
            <div className="hidden lg:block h-full">
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
                distortionScale={-25}
                mixBlendMode="screen"
                performanceMode="low"
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col h-full gap-6"
          >
            {/* Versión móvil - Languages */}
            <div className="glass-effect-mobile p-6 h-[calc(40%-12px)]">
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
            </div>
            
            {/* Versión desktop - Languages (oculto en móviles)
            <div className="hidden lg:block lg:hidden ">
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
                distortionScale={-25}
                mixBlendMode="screen"
                performanceMode="low"
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
            </div>
            */}

            {/* Versión móvil - Additional Info */}
            <div className="glass-effect-mobile p-6 h-[calc(60%-12px)]">
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
            </div>
            
            {/* Versión desktop - Additional Info (oculto en móviles)
            <div className="hidden lg:block lg:hidden ">
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
                distortionScale={-25}
                mixBlendMode="screen"
                performanceMode="low"
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
            </div>
            */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;