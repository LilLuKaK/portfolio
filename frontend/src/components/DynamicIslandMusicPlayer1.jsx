import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const DynamicIslandMusicPlayer = ({ songs = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef(null);

  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, 100], [1, 0.8]);

  const sizePresets = {
    compact: {
      width: 280,
      height: 56,
      borderRadius: 28,
    },
    expanded: {
      width: 300,
      height: 400,
      borderRadius: 20,
    }
  };

  // Iniciar según hora del día real
  useEffect(() => {
    if (!audioRef.current || songs.length === 0) return;

    const now = new Date();
    const secondsToday = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

    const totalDuration = songs.reduce((sum, song) => sum + song.duration, 0);
    const timeInLoop = secondsToday % totalDuration;

    let cumulative = 0;
    let selectedIndex = 0;
    let seekTime = 0;

    for (let i = 0; i < songs.length; i++) {
      if (cumulative + songs[i].duration > timeInLoop) {
        selectedIndex = i;
        seekTime = timeInLoop - cumulative;
        break;
      }
      cumulative += songs[i].duration;
    }

    setCurrentIndex(selectedIndex);

    const audio = audioRef.current;
    audio.src = songs[selectedIndex].audioUrl;
    audio.volume = 0.5;
    audio.muted = true;

    audio.onloadedmetadata = () => {
      audio.currentTime = seekTime;
      audio.play().catch(() => {}); // silenciosamente ignora autoplay policy
    };
  }, [songs]);

  // Reactivar mute o desmute
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Actualizar audio al cambiar manualmente de canción
  useEffect(() => {
    if (!audioRef.current || !songs[currentIndex]) return;

    const audio = audioRef.current;
    audio.src = songs[currentIndex].audioUrl;
    audio.volume = 0.5;

    audio.onloadedmetadata = () => {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };
  }, [currentIndex]);

  useEffect(() => {
    const handleScroll = () => {
      y.set(window.scrollY);
      setIsVisible(window.scrollY < 50 || window.scrollY < y.getPrevious());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [y]);

  const handleSongChange = (index) => setCurrentIndex(index);
  const nextSong = () => setCurrentIndex((prev) => (prev + 1) % songs.length);
  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <>
      <audio ref={audioRef} onEnded={nextSong} />

      <motion.div
        className="fixed left-4 bottom-4 z-50 origin-bottom"
        style={{ opacity }}
        animate={{
          x: isVisible ? 0 : -sizePresets.compact.width - 20,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <motion.div
          className="bg-black bg-opacity-90 backdrop-blur-md shadow-xl text-white cursor-pointer overflow-hidden"
          animate={{
            width: isExpanded ? sizePresets.expanded.width : sizePresets.compact.width,
            height: isExpanded ? sizePresets.expanded.height : sizePresets.compact.height,
            borderRadius: isExpanded
              ? `${sizePresets.expanded.borderRadius}px ${sizePresets.expanded.borderRadius}px 0 0`
              : sizePresets.compact.borderRadius,
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="h-full flex flex-col">
            {!isExpanded && (
              <div className="flex items-center h-full px-3 gap-3">
                <div className="w-10 h-10 rounded-md overflow-hidden">
                  {songs[currentIndex]?.albumArt ? (
                    <img
                      src={songs[currentIndex].albumArt}
                      alt="Album cover"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="bg-gray-700 w-full h-full" />
                  )}
                </div>

                <div className="flex items-end gap-1 h-8 flex-1 justify-end pr-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-green-400 rounded"
                      animate={{
                        height: ["20%", "90%", "40%", "70%", "30%"],
                      }}
                      transition={{
                        duration: 1 + Math.random(),
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {isExpanded && (
              <div className="flex flex-col h-full">
                <div className="flex-1 overflow-y-auto px-4 pb-4">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-xl overflow-hidden mr-4">
                      {songs[currentIndex]?.albumArt ? (
                        <img
                          src={songs[currentIndex].albumArt}
                          alt="Album cover"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="bg-gray-700 w-full h-full" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold truncate text-lg">
                        {songs[currentIndex]?.title || 'No song'}
                      </h3>
                      <p className="text-gray-400 truncate text-sm">
                        {songs[currentIndex]?.artist || 'Unknown artist'}
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMute();
                      }}
                      className="ml-4 text-xl"
                    >
                      {isMuted ? '🔇' : '🔊'}
                    </button>
                  </div>

                  <h4 className="text-gray-500 text-sm mb-3">Playlist</h4>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {songs.map((song, index) => (
                      <div
                        key={index}
                        className={`flex items-center p-2 rounded-lg transition-colors ${
                          index === currentIndex ? 'bg-gray-800' : 'hover:bg-gray-700'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSongChange(index);
                        }}
                      >
                        <div className="w-10 h-10 rounded-md overflow-hidden mr-3">
                          {song.albumArt ? (
                            <img
                              src={song.albumArt}
                              alt="Album cover"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="bg-gray-700 w-full h-full" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="truncate">{song.title}</p>
                          <p className="text-gray-400 text-xs truncate">{song.artist}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </> 
  );
};

export default DynamicIslandMusicPlayer;
