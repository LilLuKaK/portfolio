import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Download, Github, Linkedin } from 'lucide-react';
import { useI18n } from '../../context/i18nContext';
import GlassSurface from './../GlassSurface';
import { personalInfo } from '../../data/mockData';
import { fetchContactStatus } from './../../hooks/fetchContactStatus';

const Contact = () => {
  const { t } = useI18n();
  const [rotomStatus, setRotomStatus] = useState('offline');
  
  const rotomImages = {
    online: 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Joyous.png',
    ausente: 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Normal.png',
    offline: 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Sigh.png',
  };

  useEffect(() => {
    const getContactStatus = async () => {
      const status = await fetchContactStatus();
      setRotomStatus(status);
    };
    
    getContactStatus();
  }, []);

  const handleDownloadResume = () => {
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
            {t('contact_title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto"></div>
          <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
            {t('contact_subtitle')}
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
            {/* Contact Connect - Mobile */}
            <div className="md:hidden glass-effect-mobile p-6 !mt-0">
              <div className="flex flex-col w-full p-6">
                <h3 className="text-2xl font-bold text-white mb-6 w-full">
                  {t('contact_connect')}
                </h3>
                
                <div className="space-y-6 w-full">
                  <div className="flex items-center space-x-4 w-full">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <img src="https://img.icons8.com/liquid-glass/48/email-sign.png" alt="Email" className="w-12 h-12" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/90 font-medium">{t('contact_email')}</p>
                      <p className="text-white/70 truncate">{personalInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 w-full">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <img src="https://img.icons8.com/liquid-glass/48/worldwide-location.png" alt="Location" className="w-12 h-12" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white/90 font-medium">Location</p>
                      <p className="text-white/70">{t('experience_location')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Connect - Desktop */}
            <div className="hidden md:block h-[40%] !mt-0">
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
                distortionScale={-10}
                mixBlendMode="screen"
                className="p-6 transition-transform duration-500 group animate-shrink-on-leave hover:animate-pulse-scale"
              >
                <div className="flex flex-col w-full p-6">
                  <h3 className="text-2xl font-bold text-white mb-6 w-full">
                    {t('contact_connect')}
                  </h3>
                  
                  <div className="space-y-6 w-full">
                    <div className="flex items-center space-x-4 w-full">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center">
                        <img src="https://img.icons8.com/liquid-glass/48/email-sign.png" alt="Email" className="w-12 h-12" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/90 font-medium">{t('contact_email')}</p>
                        <p className="text-white/70 truncate">{personalInfo.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 w-full">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center">
                        <img src="https://img.icons8.com/liquid-glass/48/worldwide-location.png" alt="Location" className="w-12 h-12" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/90 font-medium">Location</p>
                        <p className="text-white/70">{t('experience_location')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassSurface>
            </div>

            {/* Download Resume - Mobile */}
            <div className="md:hidden glass-effect-mobile p-6">
              <div className="flex flex-col w-full p-6">
                <h3 className="text-xl font-bold text-white mb-6">
                  {t('contact_download')}
                </h3>
                <a
                  href="../../assets/CV_LucasBravoParra_FEDev.pdf"
                  download="CV_LucasBravoParra_FEDev.pdf"
                  className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-stone-500 to-neutral-400 rounded-2xl text-white font-medium hover:from-blue-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  <span>{t('contact_download')}</span>
                </a>
              </div>
            </div>
            
            {/* Download Resume - Desktop */}
            <div className="hidden md:block h-[calc(30%-32px)]">
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
                distortionScale={-10}
                mixBlendMode="screen"
                className="h-full p-6 transition-transform duration-500 group animate-shrink-on-leave hover:animate-pulse-scale"
              >
                <div className="flex flex-col w-full p-6">
                  <h3 className="text-xl font-bold text-white mb-6">
                    {t('contact_download')}
                  </h3>
                  <a
                    href="../../assets/CV_LucasBravoParra_FEDev.pdf"
                    download="CV_LucasBravoParra_FEDev.pdf"
                    className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-stone-500 to-neutral-400 rounded-2xl text-white font-medium hover:from-blue-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <Download className="w-5 h-5" />
                    <span>{t('contact_download')}</span>
                  </a>
                </div>
              </GlassSurface>
            </div>

            {/* Social Media - Mobile */}
            <div className="md:hidden glass-effect-mobile p-6">
              <div className="flex flex-col w-full p-6">
                <h3 className="text-xl font-bold text-white mb-6">
                  {t('contact_social')}
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
            </div>
            
            {/* Social Media - Desktop */}
            <div className="hidden md:block h-[calc(30%-32px)]">
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
                distortionScale={-10}
                mixBlendMode="screen"
                className="h-full p-6 transition-transform duration-500 group animate-shrink-on-leave hover:animate-pulse-scale"
              >
                <div className="flex flex-col w-full p-6">
                  <h3 className="text-xl font-bold text-white mb-6">
                    {t('contact_social')}
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
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Status Panel - Mobile */}
            <div className="md:hidden glass-effect-mobile p-6">
              <div className="flex flex-col w-full p-6">
                <div className="flex flex-col w-full p-6 space-y-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={rotomImages[rotomStatus]}
                      alt={`Rotom ${rotomStatus}`}
                      className="w-16 h-16 rounded-md border-2 border-white object-contain"
                      style={{ imageRendering: 'pixelated' }}
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {t('contact_wantto')}
                      </h3>
                      <p className="text-sm text-white/70 capitalize">
                        Status: {rotomStatus}
                      </p>
                    </div>
                  </div>

                  <div className="text-white/80 text-sm space-y-3">
                    {rotomStatus === 'online' && (
                      <p>{t('contact_online')}</p>
                    )}
                    {rotomStatus === 'ausente' && (
                      <p>{t('contact_away')}</p>
                    )}
                    {rotomStatus === 'offline' && (
                      <p>{t('contact_offline')}</p>
                    )}
                  </div>

                  <div className="text-white/60 text-xs">
                    <p className="italic">{t('contact_estimated')}
                      <span className="ml-1 font-medium text-white">
                        {rotomStatus === 'online' ? t('contact_response_online') : rotomStatus === 'ausente' ? t('contact_response_away') : t('contact_response_offline')}
                      </span>
                    </p>
                  </div>

                  <div className="text-white/70 text-sm">
                    <p className="font-semibold mb-1">🕹 Usual Availability:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Monday–Friday: 7:00 – 23:00 UTC+2</li>
                      <li>Saturday-Sunday: 9:00 – 23:00 UTC+2</li>
                      <li>Usually online: 8:00 - 21:00</li>
                      <li>Usually absent: 21:00 - 23:00 / 6:00 - 8:00</li>
                      <li>Usually offline: 23:00 - 6:00</li>
                    </ul>
                  </div>

                  <div className="text-white/70 text-sm">
                    <p className="font-semibold mb-1">{t('contact_tips')}</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>{t('contact_tips1')}</li>
                      <li>{t('contact_tips2')}</li>
                      <li>{t('contact_tips3')}</li>
                    </ul>
                  </div>

                  <div className="border-t border-white/20 pt-4 mt-2 text-center">
                    <p className="italic text-white/60 text-sm">
                      "{t('contact_quote')}"
                    </p>
                    <p className="text-white/50 text-xs mt-1">— Rotom 🤖</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Status Panel - Desktop */}
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
                distortionScale={-10}
                mixBlendMode="screen"
                className="h-full p-6 transition-transform duration-500 group animate-shrink-on-leave hover:animate-pulse-scale"
              >
                <div className="flex flex-col w-full p-6">
                  <div className="flex flex-col w-full p-6 space-y-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={rotomImages[rotomStatus]}
                        alt={`Rotom ${rotomStatus}`}
                        className="w-16 h-16 rounded-md border-2 border-white object-contain"
                        style={{ imageRendering: 'pixelated' }}
                      />
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {t('contact_wantto')}
                        </h3>
                        <p className="text-sm text-white/70 capitalize">
                          Status: {rotomStatus}
                        </p>
                      </div>
                    </div>

                    <div className="text-white/80 text-sm space-y-3">
                      {rotomStatus === 'online' && (
                        <p>{t('contact_online')}</p>
                      )}
                      {rotomStatus === 'ausente' && (
                        <p>{t('contact_away')}</p>
                      )}
                      {rotomStatus === 'offline' && (
                        <p>{t('contact_offline')}</p>
                      )}
                    </div>

                    <div className="text-white/60 text-xs">
                      <p className="italic">{t('contact_estimated')}
                        <span className="ml-1 font-medium text-white">
                          {rotomStatus === 'online' ? t('contact_response_online') : rotomStatus === 'ausente' ? t('contact_response_away') : t('contact_response_offline')}
                        </span>
                      </p>
                    </div>

                    <div className="text-white/70 text-sm">
                      <p className="font-semibold mb-1">🕹 Usual Availability:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Monday–Friday: 7:00 – 23:00 UTC+2</li>
                        <li>Saturday-Sunday: 9:00 – 23:00 UTC+2</li>
                        <li>Usually online: 8:00 - 21:00</li>
                        <li>Usually absent: 21:00 - 23:00 / 6:00 - 8:00</li>
                        <li>Usually offline: 23:00 - 6:00</li>
                      </ul>
                    </div>

                    <div className="text-white/70 text-sm">
                      <p className="font-semibold mb-1">{t('contact_tips')}</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>{t('contact_tips1')}</li>
                        <li>{t('contact_tips2')}</li>
                        <li>{t('contact_tips3')}</li>
                      </ul>
                    </div>

                    <div className="border-t border-white/20 pt-4 mt-2 text-center">
                      <p className="italic text-white/60 text-sm">
                        "{t('contact_quote')}"
                      </p>
                      <p className="text-white/50 text-xs mt-1">— Rotom 🤖</p>
                    </div>
                  </div>
                </div>
              </GlassSurface>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;