"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setLoaded(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!loaded && mounted && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <p className="font-serif text-white/80 text-sm tracking-[0.5em] uppercase mb-8">
              Ardutra Agi Ginting
            </p>
            <div className="w-32 h-px bg-white/20 mx-auto overflow-hidden relative">
              <motion.div
                className="absolute inset-y-0 left-0 bg-[#c9a962]"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
