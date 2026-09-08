"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(outline, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const magnetTargets = document.querySelectorAll<HTMLElement>(
      'a[href], button, [data-magnetic]'
    );

    const onTargetEnter = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      gsap.to(outline, {
        x: cx - 20,
        y: cy - 20,
        scale: 2,
        borderColor: "var(--color-gold)",
        backgroundColor: "rgba(201, 169, 98, 0.08)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onTargetLeave = () => {
      gsap.to(outline, {
        x: mouse.current.x - 20,
        y: mouse.current.y - 20,
        scale: 1,
        borderColor: "var(--color-ink)",
        backgroundColor: "transparent",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    magnetTargets.forEach((t) => {
      t.addEventListener("mouseenter", onTargetEnter);
      t.addEventListener("mouseleave", onTargetLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      magnetTargets.forEach((t) => {
        t.removeEventListener("mouseenter", onTargetEnter);
        t.removeEventListener("mouseleave", onTargetLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-2 h-2 bg-ink rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ left: 0, top: 0 }}
      />
      <div
        ref={outlineRef}
        className="fixed w-10 h-10 border border-ink/40 rounded-full pointer-events-none z-[9998]"
        style={{ left: 0, top: 0, transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
