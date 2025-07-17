import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { musicPlaylist } from '../data/mockData';

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const track = musicPlaylist[currentTrack];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', nextTrack);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', nextTrack);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % musicPlaylist.length);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + musicPlaylist.length) % musicPlaylist.length);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <audio
        ref={audioRef}
        src={track.src}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        loop={currentTrack === musicPlaylist.length - 1}
      />
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="relative"
      >
        {/* Expanded Player */}
        <motion.div
          initial={false}
          animate={isExpanded ? {
            width: 320,
            height: 'auto',
            borderRadius: '1rem',
            opacity: 1,
            scale: 1
          } : {
            width: 64,
            height: 64,
            borderRadius: '50%',
            opacity: 1,
            scale: 1
          }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 25,
            duration: 0.3
          }}
          className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl overflow-hidden cursor-pointer"
        >
          {isExpanded ? (
            // Full expanded player
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="p-4"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                  <img 
                    src={track.cover} 
                    alt={track.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm truncate">{track.title}</h3>
                  <p className="text-white/70 text-xs truncate">{track.artist}</p>
                  <p className="text-white/50 text-xs truncate">{track.album}</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-4">
                <div className="w-full bg-white/20 rounded-full h-1">
                  <div 
                    className="bg-white h-1 rounded-full transition-all duration-300"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-white/70 mt-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between">
                <button
                  onClick={prevTrack}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <SkipBack className="w-4 h-4 text-white" />
                </button>
                
                <button
                  onClick={togglePlay}
                  className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-white" />
                  ) : (
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  )}
                </button>
                
                <button
                  onClick={nextTrack}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <SkipForward className="w-4 h-4 text-white" />
                </button>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1 rounded-full hover:bg-white/20 transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-white" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-white" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="w-16 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, white 0%, white ${volume * 100}%, rgba(255,255,255,0.2) ${volume * 100}%, rgba(255,255,255,0.2) 100%)`
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ) : (
            // Minimized album cover
            <div className="w-full h-full relative group">
              <img 
                src={track.cover} 
                alt={track.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Quick play button overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 text-white" />
                  ) : (
                    <Play className="w-4 h-4 text-white ml-0.5" />
                  )}
                </button>
              </div>
              
              {/* Playing indicator */}
              {isPlaying && (
                <motion.div
                  className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
              
              {/* Sound waves animation when playing */}
              {isPlaying && (
                <div className="absolute bottom-2 left-2 flex items-end space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-white/80 rounded-full"
                      animate={{
                        height: [4, 12, 4],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              )}
              
              {/* Progress ring */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="28"
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="50%"
                    cy="50%"
                    r="28"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${2 * Math.PI * 28 * (1 - (currentTime / duration || 0))}`}
                    className="transition-all duration-300"
                  />
                </svg>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MusicPlayer;