import React, { useState, useRef, useEffect } from 'react';
import { Music, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showControls, setShowControls] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Setup audio saat component mount
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <>
      {/* Audio Element */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/Malcolm Todd - Sweet Boy (Lyrics).mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Player - Simple & Elegant */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        {/* Container dengan backdrop blur */}
        <div className="relative">
          
          {/* Volume Control - Muncul saat hover */}
          <AnimatePresence>
            {showControls && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-0 right-full mr-2 sm:mr-3 flex items-center gap-2 sm:gap-3 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full px-3 sm:px-4 py-2 sm:py-3 shadow-2xl"
              >
                {/* Volume Icon */}
                <Volume2 size={14} className="text-gold-400 sm:w-4 sm:h-4" />
                
                {/* Volume Slider */}
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-16 sm:w-24 h-1 appearance-none bg-white/10 rounded-full cursor-pointer slider-thumb"
                />
                
                {/* Volume Percentage */}
                <span className="text-xs text-white/60 font-medium min-w-[1.5rem] sm:min-w-[2rem] text-right">
                  {Math.round(volume * 100)}%
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Play Button - Main Control */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={togglePlay}
            className="relative group"
          >
            {/* Glow effect saat playing */}
            {isPlaying && (
              <motion.div
                className="absolute inset-0 bg-gold-500 rounded-full blur-xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}

            {/* Button background */}
            <div className={`relative flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 rounded-full backdrop-blur-xl border shadow-2xl transition-all duration-300 ${
              isPlaying 
                ? 'bg-gradient-to-r from-gold-500/20 to-amber-500/20 border-gold-500/30' 
                : 'bg-black/80 border-white/10 hover:border-white/20'
            }`}>
              
              {/* Music Icon with Animation */}
              <div className="relative">
                <Music size={18} className={`sm:w-5 sm:h-5 transition-colors duration-300 ${
                  isPlaying ? 'text-gold-400' : 'text-white/80'
                }`} />
                
                {/* Equalizer bars saat playing */}
                {isPlaying && (
                  <div className="absolute -right-0.5 sm:-right-1 -top-0.5 sm:-top-1">
                    <div className="flex items-end gap-[1px] sm:gap-[2px] h-2 sm:h-3">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-[1.5px] sm:w-[2px] bg-gold-400 rounded-full"
                          animate={{
                            height: ['40%', '100%', '40%'],
                          }}
                          transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Song Info - Hidden on very small screens */}
              <div className="text-left hidden xs:block">
                <p className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
                  isPlaying ? 'text-gold-300' : 'text-white/90'
                }`}>
                  {isPlaying ? 'Now Playing' : 'Play Music'}
                </p>
                <p className="text-[10px] sm:text-xs text-white/50">
                  Sweet Boy
                </p>
              </div>

              {/* Play/Pause indicator */}
              <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                isPlaying 
                  ? 'bg-gold-400 animate-pulse' 
                  : 'bg-white/20'
              }`} />
            </div>
          </motion.button>

          {/* Initial tooltip - Hidden on mobile */}
          <AnimatePresence>
            {!isPlaying && !showControls && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: 2 }}
                className="hidden sm:block absolute -top-12 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap pointer-events-none"
              >
                <p className="text-xs text-white/70">🎵 Click to play</p>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Custom Styles for Slider */}
      <style>{`
        .slider-thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, #D4AF37, #FFD700);
          cursor: pointer;
          box-shadow: 0 0 8px rgba(212, 175, 55, 0.6);
          transition: all 0.2s ease;
        }

        .slider-thumb::-webkit-slider-thumb:hover {
          width: 14px;
          height: 14px;
          box-shadow: 0 0 12px rgba(212, 175, 55, 0.8);
        }

        .slider-thumb::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, #D4AF37, #FFD700);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 8px rgba(212, 175, 55, 0.6);
          transition: all 0.2s ease;
        }

        .slider-thumb::-moz-range-thumb:hover {
          width: 14px;
          height: 14px;
          box-shadow: 0 0 12px rgba(212, 175, 55, 0.8);
        }

        /* Track styles */
        .slider-thumb::-webkit-slider-runnable-track {
          background: linear-gradient(90deg, 
            rgba(212, 175, 55, 0.4) 0%, 
            rgba(212, 175, 55, 0.1) 100%
          );
          border-radius: 999px;
        }
      `}</style>
    </>
  );
};

export default MusicPlayer;
