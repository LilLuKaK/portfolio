// src/components/sections/Contact.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { Send, Download } from 'lucide-react';
import { useI18n } from '../../context/i18nContext';
import GlassSurface from './../GlassSurface';
import { personalInfo } from '../../data/mockData';
import { fetchContactStatus } from './../../hooks/fetchContactStatus';

const rotomImages = {
  online: 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Joyous.png',
  ausente: 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Normal.png',
  offline: 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Sigh.png',
};

/** Subcomponente: cabecera fija (Rotom + Status) y carrusel inferior por arrastre (Formulario ↔ Info) */
function StatusAndForm({ t, rotomStatus }) {
  // 0: Formulario (por defecto). 1: Info
  const [page, setPage] = useState(0);
  const viewportRef = useRef(null);
  const [pageWidth, setPageWidth] = useState(0);

  const x = useMotionValue(0);

  useEffect(() => {
    const measure = () => {
      if (!viewportRef.current) return;
      const w = viewportRef.current.clientWidth;
      setPageWidth(w);
      // re-anclar a la página actual tras resize/orientation
      animate(x, -page * w, { type: 'spring', stiffness: 260, damping: 30 });
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    window.addEventListener('orientationchange', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('orientationchange', measure);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const onDragEnd = useCallback(() => {
    const currentX = x.get();
    const threshold = pageWidth * 0.2; // 20% del ancho

    if (page === 0) {
      // estamos en Form → si arrastra a la izquierda suficiente, ir a Info
      if (-currentX > threshold) {
        setPage(1);
        animate(x, -pageWidth, { type: 'spring', stiffness: 260, damping: 30 });
      } else {
        animate(x, 0, { type: 'spring', stiffness: 260, damping: 30 });
      }
    } else {
      // estamos en Info → si arrastra a la derecha suficiente, volver a Form
      if (pageWidth + currentX > threshold) {
        setPage(0);
        animate(x, 0, { type: 'spring', stiffness: 260, damping: 30 });
      } else {
        animate(x, -pageWidth, { type: 'spring', stiffness: 260, damping: 30 });
      }
    }
  }, [page, pageWidth, x]);

  useEffect(() => {
    if (!pageWidth) return;
    animate(x, -page * pageWidth, { type: 'spring', stiffness: 260, damping: 30 });
  }, [page, pageWidth, x]);

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const submitMailto = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio] ${name || 'Nuevo mensaje'}`);
    const body = encodeURIComponent(
      `${msg || ''}\n\n--\nNombre: ${name || '-'}\nEmail: ${email || '-'}`
    );
    window.location.href = `mailto:bravoparralucas@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex flex-col">
      {/* CABECERA FIJA: Rotom + Status (siempre visible) */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={rotomImages[rotomStatus]}
            alt={`Rotom ${rotomStatus}`}
            className="w-16 h-16 rounded-md border-2 border-white object-contain"
            style={{ imageRendering: 'pixelated' }}
          />
          <div>
            <h3 className="text-2xl font-bold text-white">{t('contact_wantto')}</h3>
            <p className="text-sm text-white/70 capitalize">Status: {rotomStatus}</p>
          </div>
        </div>
        {/* Pequeños indicadores de página */}
        <div className="flex items-center gap-2 pr-1">
          <span
            className={`w-2 h-2 rounded-full ${page === 0 ? 'bg-white' : 'bg-white/30'}`}
          />
          <span
            className={`w-2 h-2 rounded-full ${page === 1 ? 'bg-white' : 'bg-white/30'}`}
          />
        </div>
      </div>

      {/* SEPARADOR */}
      <div className="border-t border-white/20 mt-4 mb-4" />

      {/* CONTENIDO DESLIZABLE: SOLO CAMBIA LA PARTE DE ABAJO */}
      <div ref={viewportRef} className="relative overflow-hidden select-none">
        <motion.div
          className="flex w-[200%] cursor-grab active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragElastic={0.08}
          dragMomentum={false}
          dragConstraints={{ left: -pageWidth, right: 0 }}
          onDragEnd={onDragEnd}
        >
          {/* Página 0: FORMULARIO (por defecto) */}
          <div className="w-1/2 pr-4">
            <form onSubmit={submitMailto} className="space-y-4">
              <h4 className="text-xl font-bold text-white">Formulario de contacto</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/50"
                  required
                />
                <input
                  type="email"
                  placeholder="Tu email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/50"
                  required
                />
              </div>
              <textarea
                rows={6}
                placeholder="Cuéntame en qué puedo ayudarte"
                value={msg}
                onChange={e => setMsg(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/50"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-stone-500 to-neutral-400 text-white font-medium hover:from-blue-500 hover:to-purple-700 transition-all"
              >
                <Send className="w-4 h-4" />
                Enviar a bravoparralucas@gmail.com
              </button>

              <div className="mt-2 text-xs text-white/50">
                <span className="opacity-80">Arrastra para ver la información →</span>
              </div>
            </form>
          </div>

          {/* Página 1: INFO (estimado, disponibilidad, tips, cita) */}
          <div className="w-1/2 pl-4">
            <div className="text-white/80 text-sm space-y-4">
              <div className="text-white/60 text-xs">
                <p className="italic">
                  {t('contact_estimated')}
                  <span className="ml-1 font-medium text-white">
                    {rotomStatus === 'online'
                      ? t('contact_response_online')
                      : rotomStatus === 'ausente'
                      ? t('contact_response_away')
                      : t('contact_response_offline')}
                  </span>
                </p>
              </div>

              <div>
                <p className="font-semibold text-white/80 mb-1">🕹 Usual Availability:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Monday–Friday: 7:00 – 23:00 UTC+2</li>
                  <li>Saturday-Sunday: 9:00 – 23:00 UTC+2</li>
                  <li>Usually online: 8:00 - 21:00</li>
                  <li>Usually absent: 21:00 - 23:00 / 6:00 - 8:00</li>
                  <li>Usually offline: 23:00 - 6:00</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white/80 mb-1">{t('contact_tips')}</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>{t('contact_tips1')}</li>
                  <li>{t('contact_tips2')}</li>
                  <li>{t('contact_tips3')}</li>
                </ul>
              </div>

              <div className="border-t border-white/20 pt-4 text-center">
                <p className="italic text-white/60 text-sm">"{t('contact_quote')}"</p>
                <p className="text-white/50 text-xs mt-1">— Rotom 🤖</p>
              </div>

              <div className="text-xs text-white/50">
                <span className="opacity-80">← Arrastra para volver al formulario</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const Contact = () => {
  const { t } = useI18n();
  const [rotomStatus, setRotomStatus] = useState('offline');

  useEffect(() => {
    const getContactStatus = async () => {
      const status = await fetchContactStatus();
      setRotomStatus(status);
    };
    getContactStatus();
  }, []);

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
          {/* COLUMNA IZQUIERDA: Connect / CV / Social */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Connect - Mobile */}
            <div className="glass-effect-mobile p-6 !mt-0">
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

            {/* Contact Connect - Desktop
            <div className="hidden lg:block lg:hidden h-[40%] !mt-0">
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
            */}

            {/* Download Resume - Mobile */}
            <div className="glass-effect-mobile p-6">
              <div className="flex flex-col w-full p-6">
                <h3 className="text-xl font-bold text-white mb-6">{t('contact_download')}</h3>
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

            {/* Download Resume - Desktop
            <div className="hidden lg:block lg:hidden h-[calc(30%-32px)]">
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
                <div className="flex flex-col w-full p-6">
                  <h3 className="text-xl font-bold text-white mb-6">{t('contact_download')}</h3>
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
            */}

            {/* Social Media - Mobile */}
            <div className="glass-effect-mobile p-6">
              <div className="flex flex-col w-full p-6">
                <h3 className="text-xl font-bold text-white mb-6">{t('contact_social')}</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/LilLuKaK"
                    target="blank"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <img src="https://img.icons8.com/liquid-glass/48/github.png" alt="GitHub" className="w-12 h-12" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lucasbravoparralucas/"
                    target="blank"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <img src="https://img.icons8.com/liquid-glass/48/linkedin.png" alt="LinkedIn" className="w-12 h-12" />
                  </a>
                  <a
                    href="mailto:bravoparralucas@gmail.com"
                    target="blank"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <img src="https://img.icons8.com/liquid-glass/48/email-sign.png" alt="Mail" className="w-12 h-12" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media - Desktop
            <div className="hidden lg:block lg:hidden h-[calc(30%-32px)]">
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
                <div className="flex flex-col w-full p-6">
                  <h3 className="text-xl font-bold text-white mb-6">{t('contact_social')}</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/LilLuKaK"
                      target="blank"
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    >
                      <img src="https://img.icons8.com/liquid-glass/48/github.png" alt="GitHub" className="w-12 h-12" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/lucasbravoparralucas/"
                      target="blank"
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    >
                      <img src="https://img.icons8.com/liquid-glass/48/linkedin.png" alt="LinkedIn" className="w-12 h-12" />
                    </a>
                    <a
                      href="mailto:bravoparralucas@gmail.com"
                      target="blank"
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    >
                      <img src="https://img.icons8.com/liquid-glass/48/email-sign.png" alt="Mail" className="w-12 h-12" />
                    </a>
                  </div>
                </div>
              </GlassSurface>
            </div>
            */}
          </motion.div>

          {/* COLUMNA DERECHA: Cabecera fija + carrusel inferior */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Móvil */}
            <div className="lg:hidden glass-effect-mobile p-6">
              <div className="flex flex-col w-full p-6">
                <StatusAndForm t={t} rotomStatus={rotomStatus} />
              </div>
            </div>

            {/* Desktop */}
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
                <div className="flex flex-col w-full p-6">
                  <StatusAndForm t={t} rotomStatus={rotomStatus} />
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
