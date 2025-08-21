// src/components/DynamicIslandMusicPlayer.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const BAR_COUNT = 5;

const DynamicIslandMusicPlayer = ({ songs = [], onColorChange }) => {
  const normalizeAudioUrl = (url) => {
    try {
      // convierte .../0/items/<id>/<file> -> https://archive.org/download/<id>/<file>
      return url.replace(/https?:\/\/[^/]+\/0\/items\//, 'https://archive.org/download/');
    } catch { return url; }
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  // Web Audio refs
  const audioCtxRef = useRef(null);
  const analyserRef = useRef(null);
  const srcNodeRef = useRef(null);
  const dataArrayRef = useRef(null);
  const rafIdRef = useRef(null);
  const barsRef = useRef([]);
  const energyEMA = useRef(0);

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
  }, [currentIndex]); // canciones cambian por hora. 

  // PLAY/PAUSE
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.2;
    if (isPlaying) {
      audio.play();
      startVisualizer();
    } else {
      audio.pause();
      stopVisualizer();
    }
  }, [isPlaying]);

  // Recalcular por minuto (cambio de hora)
  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = getCurrentSongIndex();
      setCurrentIndex(newIndex);
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, [songs]);

  // ---- Visualizer (Web Audio) ----
  const setupAudioGraph = () => {
    if (audioCtxRef.current) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioCtx();
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 2048; // buena resolución + bajo coste
    const src = ctx.createMediaElementSource(audioRef.current);
    src.connect(analyser);
    analyser.connect(ctx.destination);

    audioCtxRef.current = ctx;
    analyserRef.current = analyser;
    srcNodeRef.current = src;
    dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount);
  };

  const startVisualizer = async () => {
    setupAudioGraph();
    try { await audioCtxRef.current.resume(); } catch {}
    cancelAnimationFrame(rafIdRef.current);
    loop();
  };

  const stopVisualizer = () => {
    cancelAnimationFrame(rafIdRef.current);
  };

  const loop = () => {
    const analyser = analyserRef.current;
    const data = dataArrayRef.current;
    if (!analyser || !data) return;

    analyser.getByteFrequencyData(data);

    const step = Math.floor(data.length / BAR_COUNT) || 1;
    let energyAccum = 0;

    for (let i = 0; i < BAR_COUNT; i++) {
      const start = i * step;
      const end = Math.min(start + step, data.length);
      let sum = 0;
      for (let j = start; j < end; j++) sum += data[j];
      const avg = sum / (end - start);

      energyAccum += avg;
      const h = Math.max(8, Math.min(100, (avg / 255) * 100));
      const el = barsRef.current[i];
      if (el) {
        el.style.height = `${h}%`;
        el.style.transform = `translateZ(0)`; // hint perf
      }
    }

    const normalized = energyAccum / (BAR_COUNT * 255);
    energyEMA.current = energyEMA.current * 0.9 + normalized * 0.1;
    // enviar energía al resto (Silk)
    window.dispatchEvent(
      new CustomEvent('audio-energy', { detail: { energy: energyEMA.current } })
    );

    rafIdRef.current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    return () => {
      stopVisualizer();
      try { srcNodeRef.current?.disconnect(); } catch {}
      try { analyserRef.current?.disconnect(); } catch {}
      try { audioCtxRef.current?.close(); } catch {}
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} crossOrigin="anonymous" />
      <motion.div
        className="fixed left-4 bottom-4 z-50 origin-bottom"
        animate={{}}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <motion.div
          className="bg-black bg-opacity-90 backdrop-blur-md shadow-xl text-white cursor-pointer overflow-hidden"
          animate={{
            width: isExpanded ? 350 : 250,
            height: isExpanded ? 420 : 46,
            borderRadius: 28,
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

                {/* Visualizer real (24 barras) */}
                <div className="flex items-end gap-[3px] h-8 flex-1 justify-end pr-2 p-[3px]">
                  {Array.from({ length: BAR_COUNT }).map((_, i) => (
                    <div
                      key={i}
                      ref={el => (barsRef.current[i] = el)}
                      className="w-[3px] rounded bg-white/70 bg-opacity-90"
                      style={{ height: '8%' }}
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
                        src={
                          isPlaying
                            ? 'https://img.icons8.com/liquid-glass/48/pause.png'
                            : 'https://img.icons8.com/liquid-glass/48/play.png'
                        }
                        alt={isPlaying ? 'Pause' : 'Play'}
                        className="w-6 h-6"
                      />
                    </button>
                  </div>

                  <h4 className="text-gray-500 text-sm mb-2">
                    Lista por hora (UTC+2) — auto-selección
                  </h4>
                  <p className="text-xs text-white/40 mb-3">
                    * Informativa: no se puede seleccionar manualmente.
                  </p>

                  {/* Lista “no interactiva” y más limpia */}
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {songs.map((song, index) => (
                      <div
                        key={index}
                        className={`flex items-center p-2 rounded-lg border ${
                          index === currentIndex
                            ? 'bg-white/15 border-white/20'
                            : 'bg-white/[0.06] border-white/10'
                        } cursor-default select-none`}
                      >
                        <div className="w-10 h-10 rounded-md overflow-hidden mr-3 opacity-90">
                          <img
                            src={song.albumArt}
                            alt="Album cover"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="truncate text-white/90">{song.title}</p>
                          <p className="text-white/50 text-xs truncate">
                            {song.artist} · {song.startHour}:00
                          </p>
                        </div>
                        <div className="text-[10px] text-white/40 ml-2">
                          {index === currentIndex ? 'Now' : ''}
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
