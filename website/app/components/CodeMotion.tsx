"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode[];
};

export function CodeMotion({ children }: Props) {
  const [sample, setSample] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSample((sample) => (sample + 1) % children.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [children]);
  return (
      <AnimatePresence mode="wait">
        <motion.div
          key={sample}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{ opacity: 0 }}
        >
          {children[sample]}
        </motion.div>
      </AnimatePresence>
  );
}
