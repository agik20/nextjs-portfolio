"use client";

import { motion } from 'framer-motion';

const Marquee = () => {
  const items = [
    "Computer Vision", "Machine Learning", "NLP", "Deep Learning",
    "Data Science", "Python", "PyTorch", "TensorFlow",
    "FastAPI", "Docker", "MLOps", "AI Engineering"
  ];

  return (
    <div className="bg-ink py-6 overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((item, index) => (
          <span
            key={index}
            className="text-paper/60 text-xs tracking-[0.3em] uppercase font-light"
          >
            {item}
            <span className="mx-8 text-gold">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
