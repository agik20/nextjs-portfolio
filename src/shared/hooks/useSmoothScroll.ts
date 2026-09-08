"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export function useSmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      syncTouch: false,
      orientation: "vertical",
      gestureOrientation: "vertical",
      lerp: 0.08,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}
