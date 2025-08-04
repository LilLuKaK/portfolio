// ✅ DynamicIslandMusicPlayer.jsx (actualizado)
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const DynamicIslandMusicPlayer = ({ songs = [], onColorChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Obtener canción según hora UTC+2
  const getCurrentSongIndex = () => {
    const now = new Date();
    const utc2Hour = (now.getUTCHours() + 2) % 24;
    return songs.findIndex(song => song.startHour === utc2Hour);
  };

  useEffect(() => {
    const index = getCurrentSongIndex();
    setCurrentIndex(index);
  }, [songs]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !songs[currentIndex]) return;

    const wasPlaying = !audio.paused;
    const currentTime = audio.currentTime;

    audio.src = songs[currentIndex].audioUrl;
    audio.loop = true;
    audio.volume = 0.5;

    audio.onloadedmetadata = () => {
      audio.currentTime = currentTime || 0;
      audio.volume = 0.5;
      if (isPlaying || wasPlaying) audio.play();
    };

    if (onColorChange) onColorChange(songs[currentIndex].color);
  }, [currentIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.2;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = getCurrentSongIndex();
      setCurrentIndex(newIndex);
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, [songs]);

  return (
    <>
      <audio ref={audioRef} />
      <motion.div
        className="fixed left-4 bottom-4 z-50 origin-bottom"
        animate={{}}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <motion.div
          className="bg-black bg-opacity-90 backdrop-blur-md shadow-xl text-white cursor-pointer overflow-hidden"
          animate={{
            width: isExpanded ? 350 : 250,
            height: isExpanded ? 400 : 46,
            borderRadius: isExpanded ? 28 : 28,
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="h-full flex flex-col p-1">
            {!isExpanded && (
              <div className="flex items-center h-full px-3 gap-3">
                <div className="w-10 h-10 rounded-md overflow-hidden">
                  <img
                    src={songs[currentIndex]?.albumArt}
                    alt="Album cover"
                    className="w-full h-full object-cover rounded-lg p-[3px]"
                  />
                </div>
                <div className="flex items-end gap-[3px] h-8 flex-1 justify-end pr-2 p-[3px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-[3px] rounded bg-white bg-opacity-10 backdrop-blur-sm shadow-sm"
                      animate={{ height: ["20%", "90%", "40%", "70%", "30%"] }}
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
                      <img
                        src={songs[currentIndex]?.albumArt}
                        alt="Album cover"
                        className="w-full h-full object-cover p-[3px] rounded-xl"
                      />
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
                        setIsPlaying(!isPlaying);
                      }}
                      className="ml-4 text-xl"
                    >
                      <img
                        src={isPlaying 
                          ? "https://img.icons8.com/liquid-glass/48/pause.png" 
                          : "https://img.icons8.com/liquid-glass/48/play.png"}
                        alt={isPlaying ? "Pause" : "Play"}
                        className="w-6 h-6"
                      />
                    </button>
                  </div>

                  <h4 className="text-gray-500 text-sm mb-3">Lista por hora (UTC+2)</h4>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {songs.map((song, index) => (
                      <div
                        key={index}
                        className={`flex items-center p-2 rounded-lg transition-colors ${
                          index === currentIndex ? 'bg-gray-800' : 'bg-gray-700'
                        }`}
                      >
                        <div className="w-10 h-10 rounded-md overflow-hidden mr-3">
                          <img
                            src={song.albumArt}
                            alt="Album cover"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="truncate">{song.title}</p>
                          <p className="text-gray-400 text-xs truncate">
                            {song.artist} - {song.startHour}:00
                          </p>
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
