import { motion } from 'framer-motion';
import { useI18n } from '../../context/i18nContext';
import GlassSurface from './../GlassSurface';
import { experience, education } from '../../data/mockData';

const Experience = () => {
  const { t } = useI18n();
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
            {t('experience_title')}
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
              {t('experience_professional')}
            </h3>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Versión móvil (glass simple) */}
              <div className="md:hidden glass-effect-mobile h-full p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">{t('experience_position1')}</h4>
                    <p className="text-neutral-400 font-semibold">{t('experience_company1')}</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-white/60 text-sm">
                      <div className="flex items-center">
                        <img src="https://img.icons8.com/liquid-glass/16/calendar.png" alt="Calendar" className="w-4 h-4 mr-1" />
                        {t('experience_period1')}
                      </div>
                      <div className="flex items-center">
                        <img src="https://img.icons8.com/liquid-glass/16/worldwide-location.png" alt="MapPin" className="w-4 h-4 mr-1" />
                        {t('experience_location')}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    <li className="text-white/80 text-sm leading-relaxed flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-stone-600 to-neutral-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {t('experience_description1.1')}
                    </li>
                    <li className="text-white/80 text-sm leading-relaxed flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-stone-600 to-neutral-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {t('experience_description1.2')}
                    </li>
                    <li className="text-white/80 text-sm leading-relaxed flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-stone-600 to-neutral-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {t('experience_description1.3')}
                    </li>
                    <li className="text-white/80 text-sm leading-relaxed flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-stone-600 to-neutral-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {t('experience_description1.4')}
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Versión desktop (GlassSurface) */}
              <div className="hidden md:block h-full">
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
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold text-white">{t('experience_position1')}</h4>
                      <p className="text-neutral-400 font-semibold">{t('experience_company1')}</p>
                      <div className="flex flex-wrap gap-4 mt-2 text-white/60 text-sm">
                        <div className="flex items-center">
                          <img src="https://img.icons8.com/liquid-glass/16/calendar.png" alt="Calendar" className="w-4 h-4 mr-1" />
                          {t('experience_period1')}
                        </div>
                        <div className="flex items-center">
                          <img src="https://img.icons8.com/liquid-glass/16/worldwide-location.png" alt="MapPin" className="w-4 h-4 mr-1" />
                          {t('experience_location')}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      <li className="text-white/80 text-sm leading-relaxed flex items-start">
                        <span className="w-2 h-2 bg-gradient-to-r from-stone-600 to-neutral-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {t('experience_description1.1')}
                      </li>
                      <li className="text-white/80 text-sm leading-relaxed flex items-start">
                        <span className="w-2 h-2 bg-gradient-to-r from-stone-600 to-neutral-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {t('experience_description1.2')}
                      </li>
                      <li className="text-white/80 text-sm leading-relaxed flex items-start">
                        <span className="w-2 h-2 bg-gradient-to-r from-stone-600 to-neutral-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {t('experience_description1.3')}
                      </li>
                      <li className="text-white/80 text-sm leading-relaxed flex items-start">
                        <span className="w-2 h-2 bg-gradient-to-r from-stone-600 to-neutral-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {t('experience_description1.4')}
                      </li>
                    </ul>
                  </div>
                </GlassSurface>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Versión móvil (glass simple) */}
              <div className="md:hidden glass-effect-mobile h-full p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">{t('experience_position1')}</h4>
                    <p className="text-neutral-400 font-semibold">{t('experience_company2')}</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-white/60 text-sm">
                      <div className="flex items-center">
                        <img src="https://img.icons8.com/liquid-glass/16/calendar.png" alt="Calendar" className="w-4 h-4 mr-1" />
                        {t('experience_period2')}
                      </div>
                      <div className="flex items-center">
                        <img src="https://img.icons8.com/liquid-glass/16/worldwide-location.png" alt="MapPin" className="w-4 h-4 mr-1" />
                        {t('experience_location')}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    <li className="text-white/80 text-sm leading-relaxed flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-stone-600 to-neutral-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {t('experience_description2.1')}
                    </li>
                    <li className="text-white/80 text-sm leading-relaxed flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-stone-600 to-neutral-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {t('experience_description2.2')}
                    </li>
                    <li className="text-white/80 text-sm leading-relaxed flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-stone-600 to-neutral-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {t('experience_description2.3')}
                    </li>
                    <li className="text-white/80 text-sm leading-relaxed flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-stone-600 to-neutral-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {t('experience_description2.4')}
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Versión desktop (GlassSurface) */}
              <div className="hidden md:block h-full">
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
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold text-white">{t('experience_position1')}</h4>
                      <p className="text-neutral-400 font-semibold">{t('experience_company2')}</p>
                      <div className="flex flex-wrap gap-4 mt-2 text-white/60 text-sm">
                        <div className="flex items-center">
                          <img src="https://img.icons8.com/liquid-glass/16/calendar.png" alt="Calendar" className="w-4 h-4 mr-1" />
                          {t('experience_period2')}
                        </div>
                        <div className="flex items-center">
                          <img src="https://img.icons8.com/liquid-glass/16/worldwide-location.png" alt="MapPin" className="w-4 h-4 mr-1" />
                          {t('experience_location')}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      <li className="text-white/80 text-sm leading-relaxed flex items-start">
                        <span className="w-2 h-2 bg-gradient-to-r from-stone-600 to-neutral-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {t('experience_description2.1')}
                      </li>
                      <li className="text-white/80 text-sm leading-relaxed flex items-start">
                        <span className="w-2 h-2 bg-gradient-to-r from-stone-600 to-neutral-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {t('experience_description2.2')}
                      </li>
                      <li className="text-white/80 text-sm leading-relaxed flex items-start">
                        <span className="w-2 h-2 bg-gradient-to-r from-stone-600 to-neutral-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {t('experience_description2.3')}
                      </li>
                      <li className="text-white/80 text-sm leading-relaxed flex items-start">
                        <span className="w-2 h-2 bg-gradient-to-r from-stone-600 to-neutral-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {t('experience_description2.4')}
                      </li>
                    </ul>
                  </div>
                </GlassSurface>
              </div>
            </motion.div>
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
              {t('experience_education')}
            </h3>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Versión móvil (glass simple) */}
              <div className="md:hidden glass-effect-mobile h-full p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">{t('experience_grade')}</h4>
                    <p className="text-neutral-400 font-semibold">{t('experience_institution')}</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-white/60 text-sm">
                      <div className="flex items-center">
                        <img src="https://img.icons8.com/liquid-glass/16/calendar.png" alt="Calendar" className="w-4 h-4 mr-1" />
                        {t('experience_period3')}
                      </div>
                      <div className="flex items-center">
                        <img src="https://img.icons8.com/liquid-glass/16/worldwide-location.png" alt="MapPin" className="w-4 h-4 mr-1" />
                        {t('experience_location')}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    <li className="text-white/80 text-sm leading-relaxed flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-stone-500 to-neutral-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {t('experience_description3.1')}
                    </li>
                    <li className="text-white/80 text-sm leading-relaxed flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-stone-500 to-neutral-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {t('experience_description3.2')}
                    </li>
                    <li className="text-white/80 text-sm leading-relaxed flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-stone-500 to-neutral-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {t('experience_description3.3')}
                    </li>
                    <li className="text-white/80 text-sm leading-relaxed flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-stone-500 to-neutral-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {t('experience_description3.4')}
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Versión desktop (GlassSurface) */}
              <div className="hidden md:block h-full">
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
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold text-white">{t('experience_grade')}</h4>
                      <p className="text-neutral-400 font-semibold">{t('experience_institution')}</p>
                      <div className="flex flex-wrap gap-4 mt-2 text-white/60 text-sm">
                        <div className="flex items-center">
                          <img src="https://img.icons8.com/liquid-glass/16/calendar.png" alt="Calendar" className="w-4 h-4 mr-1" />
                          {t('experience_period3')}
                        </div>
                        <div className="flex items-center">
                          <img src="https://img.icons8.com/liquid-glass/16/worldwide-location.png" alt="MapPin" className="w-4 h-4 mr-1" />
                          {t('experience_location')}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      <li className="text-white/80 text-sm leading-relaxed flex items-start">
                        <span className="w-2 h-2 bg-gradient-to-r from-stone-500 to-neutral-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {t('experience_description3.1')}
                      </li>
                      <li className="text-white/80 text-sm leading-relaxed flex items-start">
                        <span className="w-2 h-2 bg-gradient-to-r from-stone-500 to-neutral-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {t('experience_description3.2')}
                      </li>
                      <li className="text-white/80 text-sm leading-relaxed flex items-start">
                        <span className="w-2 h-2 bg-gradient-to-r from-stone-500 to-neutral-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {t('experience_description3.3')}
                      </li>
                      <li className="text-white/80 text-sm leading-relaxed flex items-start">
                        <span className="w-2 h-2 bg-gradient-to-r from-stone-500 to-neutral-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {t('experience_description3.4')}
                      </li>
                    </ul>
                  </div>
                </GlassSurface>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;