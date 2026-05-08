"use client";

import { motion } from "motion/react";

export function RotatingSquare() {
  return (
    <motion.div
      className="h-[100px] w-[100px] rounded-2xl bg-blue-500"
      animate={{ rotate: 360 }}
      transition={{
        duration: 2,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      }}
    />
  );
}
