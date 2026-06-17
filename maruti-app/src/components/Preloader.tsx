"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // We simulate a robust loading phase (2.5s) to ensure 
    // heavy 3D assets and videos have time to hit the browser cache.
    // This provides a much smoother experience on mobile and desktop without lag.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-zinc-950 flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            <h1 className="font-serif text-3xl md:text-5xl text-rose-500 font-bold uppercase tracking-widest text-center px-4 drop-shadow-[0_0_15px_rgba(244,63,94,0.4)]">
              Maruti Textile Empire
            </h1>
            <p className="text-zinc-400 text-xs md:text-sm tracking-[0.3em] uppercase">
              Crafting your experience...
            </p>
            
            {/* Loading Bar */}
            <div className="w-64 md:w-80 h-1 bg-zinc-900 rounded-full mt-4 overflow-hidden relative">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
                className="absolute top-0 left-0 h-full bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.8)] rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
