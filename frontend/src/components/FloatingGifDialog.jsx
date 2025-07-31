import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const FloatingGifDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messages = [
    {
      text: "Hello! I'm Rotom. What do you want to do?",
      sprite: "https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Normal.png",
      options: [
        { label: 'Hablar', next: 1 },
        { label: 'Salir', next: 0, action: 'close' }
      ]
    },
    {
      text: "Great! What do you want to talk about?",
      sprite: "https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Happy.png",
      options: [
        { label: 'Quién eres?', next: 4 },
        { label: 'Quiero ver los proyectos', next: 3, action: 'scrollToProjects' },
        { label: 'Quiero contactar con Lucas', next: 14, action: 'scrollToContact' },
        { label: 'Ayuda', next: 8 },
      ]
    },
    {
      text: "See you later!",
      sprite: "https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Inspired.png",
      next: 0, action: 'close'
    },
    {
      action: 'scrollToProjects',
      text: "Tenemos varios proyectos web por aquí, ¡te los enseño!",
      sprite: "https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Joyous.png",
      next: 6
    },
    {
      text: "Soy una asistente que te ayudará a entender cómo se ha hecho esta web.",
      sprite: "https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Joyous.png",
      next: 5
    },
    {
      text: "Aunque yo no sería necesario si mi creador hubiera hecho más intuitiva y simple su web. De todas formas estoy aqui para enseñarte todo el potencial que esconde este portfolio.",
      sprite: "https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Sigh.png",
      next: 1
    },
    {
      text: "...",
      sprite: "https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Normal.png",
      options: [
        { label: 'Porque no hay proyectos?', next: 7},
        { label: 'Salir', next: 0, action: 'close' }
      ]
    },
    {
      text: "Oh... ya... bueno veras que no es que no haya, mi creador queria que este portfolio estuviera listo lo antes posible por lo que tuvo que hacer varios sacrificios. Su idea original era hostear el mismo todos sus proyectos junto con su portfolio en un servidor propio pero eso ha llevado mas tiempo de lo esperado.",
      sprite: "https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Stunned.png",
      next: 1
    },
    {
      text: "Seguro que puedo ayudarte, de que se trata?",
      sprite: "https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Surprised.png",
      options: [
        { label: 'No veo correctamente la web', next: 9},
        { label: 'Para que es el music player?', next: 12},
      ]
    },
    {
      text: "Comprendo, antes de ayudarte, que navegador usas?",
      sprite: "https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Determined.png",
      options: [
        { label: 'Firefox', next: 10},
        { label: 'Chrome, Edge, Opera, Brave... etc. (Chromium)', next: 11},
      ]
    },
    {
      text: "Bueno realmente si estas usando Firefox debido a su motor no soporta ciertos estilos que usa la web por lo que no se vera tal y como se concebio como si se veria en navegadores que usan Chromium. Igualmente te recomiendo activar la aceleracion por hardware en las opciones de tu navegador.",
      sprite: "https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Happy.png",
      next: 1
    },
    {
      text: "Si ves mal la web usando Chromium seguramente el problema sea por culpa de la aceleracion por hardware que seguramente no la tengas habilitada en tu navegador. Por favor habilitala y vuelve a cargar la pagina",
      sprite: "https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Happy.png",
      next: 1
    },
    {
      text: "Bueno a mi creador le encanta la musica y como este es su portfolio queria hacerlo mas suyo y personal compartiendo todo lo que le gusta, hasta su musica y funciona de una manera curiosa.",
      sprite: "https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Inspired.png",
      next: 13
    },
    {
      text: "Cada hora la cancion sonando cambia por otra y no solo eso cambia, la pagina cambia por completo en armonia con la cancion. Tambien, mi creador al final no es un robot como yo, cuando duerme cambia tambien por completo la musica. Deberias echarle un ojo a eso porque es algo que le costo mucho.",
      sprite: "https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Inspired.png",
      next: 1
    },
    {
      action: 'scrollToContact',
      text: "Por supuesto, permiteme explicarte todo aqui.",
      sprite: "https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Joyous.png",
      next: 15
    },
    {
      text: "Como ves aqui tienes muchas opciones de contacto, el prefiere linkedIn aunque escribirle un correo siempre es bienvenido.",
      sprite: "https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Joyous.png",
      options: [
        { label: 'Que es la seccion grande?', next: 16},
      ]
    },
    {
      text: "Oh cierto, mi creador ha implementado un sistema para que el usuario sepa cuando mi creador esta online o no, Si lo esta, respondera de inmediato, si aparece ausente tal vez tardara unos cuantos minutos y si esta offline pues si que tardara un buen rato. Pero no os preocupeis! Siempre responde.",
      sprite: "https://raw.githubusercontent.com/PMDCollab/SpriteCollab/master/portrait/0479/Inspired.png",
      next: 1
    },
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
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[999]"
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
                doble click para avanzar
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
