import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const DynamicIslandMusicPlayer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [visualizerHeights, setVisualizerHeights] = useState([4, 6, 8, 6, 4]);
  
  const audioRef = useRef(null);
  const visualizerInterval = useRef(null);

  const musicPlaylist = [
    {
      title: "The Color Violet",
      artist: "Tory Lanez",
      cover: "https://i.scdn.co/image/ab67616d0000b2730c5f23cbf0b1ab7e37d0dc67",
      src: "https://dn720302.ca.archive.org/0/items/the-color-violet/The%20Color%20Violet.mp3",
    },
    {
      title: "Passionfruit",
      artist: "Drake",
      cover: "https://i.scdn.co/image/ab67616d0000b273d6b3fc9c671a20c6e85b1f76",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      title: "After Dark",
      artist: "Mr. Kitty",
      cover: "https://i.scdn.co/image/ab67616d0000b2732a0ff76f81dd8d5b3d5d78a8",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
  ];

  const track = musicPlaylist[currentTrack];

  // Toggle play/pause
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Toggle mute
  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  // Change track
  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % musicPlaylist.length);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + musicPlaylist.length) % musicPlaylist.length);
  };

  // Handle volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Handle track changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      nextTrack();
    };

    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
  }, []);

  // Auto-play when track changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    audio.load();
    if (isPlaying) {
      audio.play().catch(err => {
        console.warn("Autoplay blocked", err);
      });
    }
  }, [track]);

  // Visualizer animation
  useEffect(() => {
    if (isMuted || !isPlaying) {
      setVisualizerHeights([4, 4, 4, 4, 4]);
      if (visualizerInterval.current) {
        clearInterval(visualizerInterval.current);
      }
      return;
    }

    visualizerInterval.current = setInterval(() => {
      setVisualizerHeights(prev => {
        return prev.map(() => {
          const minHeight = 4;
          const maxHeight = 20;
          const randomHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
          return minHeight + Math.round(randomHeight * volume);
        });
      });
    }, 100);

    return () => {
      if (visualizerInterval.current) {
        clearInterval(visualizerInterval.current);
      }
    };
  }, [isMuted, volume, isPlaying]);

  return (
    <div 
      className="fixed bottom-6 left-6 z-50"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <audio
        ref={audioRef}
        src={track.src}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      
      <motion.div
        className={`bg-black/80 backdrop-blur-md border border-white/20 shadow-xl overflow-hidden 
          ${isExpanded ? 'rounded-2xl w-[400px] h-[250px]' : 'rounded-full w-[220px] h-[40px]'}
          transition-all duration-300 ease-in-out`}
      >
        <div className="w-full h-full flex flex-col px-4 py-3">
          {/* Minimized state */}
          {!isExpanded && (
            <div className="flex items-center justify-between h-full">
              <div className="flex items-center space-x-3">
                <img 
                  src={track.cover} 
                  alt="Album cover" 
                  className="w-7 h-7 rounded-lg object-cover"
                />
              </div>
              
              <div className="flex items-end gap-[3px] h-6 ml-auto">
                {visualizerHeights.map((h, i) => (
                  <motion.div
                    key={i}
                    className="w-[3px] bg-white rounded-sm"
                    initial={{ height: 4 }}
                    animate={{ height: h }}
                    transition={{ duration: 0.2 }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Expanded state */}
          {isExpanded && (
            <div className="flex flex-col flex-1">
              <div className="flex items-center mb-4">
                <img 
                  src={track.cover} 
                  alt="Album cover" 
                  className="w-14 h-14 rounded-lg object-cover"
                />
                <div className="ml-3">
                  <p className="text-sm font-semibold text-white">{track.title}</p>
                  <p className="text-xs text-white/60">{track.artist}</p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-6 mb-6">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    prevTrack();
                  }}
                  className="p-2 text-white hover:bg-white/10 rounded-full"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M6 6v12M17 12l-7 6V6l7 6z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  className="p-3 bg-white/20 hover:bg-white/30 rounded-full"
                >
                  {isPlaying ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M6 6h4v12H6V6zm8 0h4v12h-4V6z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M6 4v16l14-8L6 4z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  )}
                </button>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    nextTrack();
                  }}
                  className="p-2 text-white hover:bg-white/10 rounded-full"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M6 6v12m11-6l-7 6V6l7 6z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </button>
                
                <div className="flex items-center gap-2 ml-auto">
                  <button 
                    onClick={toggleMute}
                    className="p-1 text-white hover:bg-white/10 rounded-full"
                  >
                    {isMuted ? <VolumeX size={16}/> : <Volume2 size={16}/>}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    onClick={(e) => e.stopPropagation()}
                    className="w-20 h-1 bg-white/20 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, white 0%, white ${volume * 100}%, rgba(255,255,255,0.2) ${volume * 100}%, rgba(255,255,255,0.2) 100%)`
                    }}
                  />
                </div>
              </div>

              {/* Queue */}
              <div className="flex-1 overflow-y-auto max-h-[120px] text-xs text-white/70 scrollbar-thin scrollbar-thumb-white/30 pr-1">
                <p className="mb-1 font-semibold text-white text-[11px]">Up next:</p>
                {musicPlaylist.slice(currentTrack + 1).map((song, idx) => (
                  <div key={idx} className="flex items-center py-1 border-t border-white/10">
                    <img src={song.cover} alt="Album cover" className="w-6 h-6 rounded object-cover mr-2" />
                    <div className="truncate">
                      <p className="truncate">{song.title}</p>
                      <p className="text-white/50 truncate">{song.artist}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default DynamicIslandMusicPlayer;