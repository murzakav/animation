"use client";

import { motion } from "motion/react";

const CIRCLE_ANGLES = [0, 120, 240];

export function ThreeCirclesOrbit() {
  const orbitRadius = 64;
  const circleSize = 24;
  const orbitSize = orbitRadius * 2 + circleSize;

  return (
    <div
      className="relative"
      style={{ width: orbitSize, height: orbitSize }}
      aria-label="Three yellow circles orbit"
    >
      <motion.div
        className="relative h-full w-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 5,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        {CIRCLE_ANGLES.map((angle) => (
          <div
            key={angle}
            className="absolute top-1/2 left-1/2 rounded-full bg-yellow-400"
            style={{
              width: circleSize,
              height: circleSize,
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${orbitRadius}px)`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
