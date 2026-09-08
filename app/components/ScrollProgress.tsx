"use client";

import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-px z-[9998] pointer-events-none">
      <div
        className="h-full bg-[#c9a962]"
        style={{ width: `${progress}%`, transition: "width 0.05s linear" }}
      />
    </div>
  );
};

export default ScrollProgress;
