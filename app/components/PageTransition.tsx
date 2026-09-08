"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition() {
  const [fade, setFade] = useState(false);
  const [lastPath, setLastPath] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== lastPath && lastPath !== "") {
      setFade(true);
      const t = setTimeout(() => setFade(false), 350);
      return () => clearTimeout(t);
    }
    setLastPath(pathname);
  }, [pathname, lastPath]);

  return (
    <AnimatePresence>
      {fade && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-cream pointer-events-none"
        />
      )}
    </AnimatePresence>
  );
}
