import React from "react";
import { motion } from "framer-motion";

const meteors = new Array(20).fill(true);

export default function Meteors() {
  return (
    <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
      {meteors.map((_, i) => {
        const delay = Math.random() * 5;
        const duration = 2 + Math.random() * 3;
        const left = Math.random() * 100;

        return (
          <motion.span
            key={i}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{
              x: 600,
              y: 600,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0"
            style={{
              left: `${left}%`,
            }}
          >
            <div className="meteor" />
          </motion.span>
        );
      })}
    </div>
  );
}