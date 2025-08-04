import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useI18n } from '../context/i18nContext';

const FloatingGifDialog = () => {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messages = [
    {
      text: t('rotom_welcome'),
      sprite: 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Normal.png',
      options: [
        { label: t('rotom_option.talk'), next: 1 },
        { label: t('rotom_option.exit'), next: 0, action: 'close' }
      ]
    },
    {
      text: t('rotom_talk'),
      sprite: 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Happy.png',
      options: [
        { label: t('rotom_option.who'), next: 4 },
        { label: t('rotom_option.projects'), next: 3, action: 'scrollToProjects' },
        { label: t('rotom_option.contact'), next: 14, action: 'scrollToContact' },
        { label: t('rotom_option.help'), next: 8 }
      ]
    },
    {
      text: t('rotom_bye'),
      sprite: 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Inspired.png',
      next: 0,
      action: 'close'
    },
    {
      action: 'scrollToProjects',
      text: t('rotom_projects_intro'),
      sprite: 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Joyous.png',
      next: 6
    },
    {
      text: t('rotom_who_i_am'),
      sprite: 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Joyous.png',
      next: 5
    },
    {
      text: t('rotom_not_needed'),
      sprite: 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Sigh.png',
      next: 1
    },
    {
      text: t('rotom_projects_empty'),
      sprite: 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Normal.png',
      options: [
        { label: t('rotom_option.why_no_projects'), next: 7 },
        { label: t('rotom_option.exit'), next: 0, action: 'close' }
      ]
    },
    {
      text: t('rotom_why_no_projects'),
      sprite: 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Stunned.png',
      next: 1
    },
    {
      text: t('rotom_help'),
      sprite: 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Surprised.png',
      options: [
        { label: t('rotom_option.cant_see'), next: 9 },
        { label: t('rotom_option.music'), next: 12 }
      ]
    },
    {
      text: t('rotom_browser_question'),
      sprite: 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Determined.png',
      options: [
        { label: 'Firefox', next: 10 },
        { label: 'Chrome, Edge, Opera, Brave... etc. (Chromium)', next: 11 }
      ]
    },
    {
      text: t('rotom_firefox_explanation'),
      sprite: 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Happy.png',
      next: 1
    },
    {
      text: t('rotom_chromium_explanation'),
      sprite: 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Happy.png',
      next: 1
    },
    {
      text: t('rotom_music_reason'),
      sprite: 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Inspired.png',
      next: 13
    },
    {
      text: t('rotom_music_behavior'),
      sprite: 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Inspired.png',
      next: 1
    },
    {
      action: 'scrollToContact',
      text: t('rotom_contact_intro'),
      sprite: 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Joyous.png',
      next: 15
    },
    {
      text: t('rotom_contact_details'),
      sprite: 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Joyous.png',
      options: [
        { label: t('rotom_option.contact_big_section'), next: 16 }
      ]
    },
    {
      text: t('rotom_contact_big_section'),
      sprite: 'https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Inspired.png',
      next: 1
    }
  ];

  const handleOptionClick = (option) => {
    if (option.action === 'close') {
      setIsOpen(false);
      setCurrentMessageIndex(0);
      return;
    }

    if (option.action === 'scrollToProjects') {
      const target = document.getElementById('projects');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (option.action === 'scrollToContact') {
      const target = document.getElementById('contact');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }

    setCurrentMessageIndex(option.next);
  };

  const handleAdvance = () => {
    const current = messages[currentMessageIndex];
    if (!current.options && current.next !== undefined) {
      setCurrentMessageIndex(current.next);
    }
  };

  return (
    <>
      {/* Rotom GIF pixelado */}
      <motion.div
        className="fixed top-4 left-4 z-50 cursor-pointer"
        style={{ width: '40px', height: '80px' }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => setIsOpen(true)}
      >
        <img
          src="https://i.imgur.com/NSzKqDO.gif"
          alt="Rotom"
          className="w-full h-full"
          style={{ imageRendering: 'pixelated' }}
        />
      </motion.div>

      {/* Diálogo estilo Pokémon */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-4 left-4 -translate-x-1/2 z-[999]"
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 300, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div
              className="relative w-[90vw] max-w-[600px] bg-[#d4d3d2] border-4 border-black rounded-xl px-4 pt-8 pb-4 font-mono text-black text-sm shadow-lg min-h-[150px]"
              onClick={handleAdvance}
            >
              {/* Sprite encima del cuadro */}
              <div className="absolute -top-16 left-4 w-20 h-20 border-4 border-black bg-white rounded-md overflow-hidden">
                <img
                  src={messages[currentMessageIndex].sprite}
                  alt="Sprite"
                  className="w-full h-full object-contain"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>

              {/* Botón cerrar */}
              <button
                className="absolute top-2 right-2 p-1 bg-black text-white text-xs rounded z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                  setCurrentMessageIndex(0);
                }}
              >
                <X className="w-4 h-4" />
              </button>

              {/* Texto de diálogo */}
              <p className="mb-4 leading-tight mt-2 pr-8">
                {messages[currentMessageIndex].text}
              </p>

              <span className="absolute -bottom-1 right-3 text-[10px] text-black/50 pointer-events-none select-none">
                click para avanzar
              </span>

              {/* Opciones */}
              {messages[currentMessageIndex].options && (
                <div className="flex flex-col gap-2">
                  {messages[currentMessageIndex].options.map((option, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOptionClick(option);
                      }}
                      className="bg-[#fff] border-2 border-black px-3 py-1 hover:bg-gray-200 transition-colors text-left"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingGifDialog;
