"use client";

import { useSmoothScroll } from "@/src/shared/hooks/useSmoothScroll";
import Preloader from "@/app/components/Preloader";
import ScrollProgress from "@/app/components/ScrollProgress";
import MagneticCursor from "@/app/components/MagneticCursor";
import PageTransition from "@/app/components/PageTransition";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  useSmoothScroll();

  return (
    <>
      <Preloader />
      <ScrollProgress />
      <MagneticCursor />
      <PageTransition />
      {children}
    </>
  );
}
