import { motion } from "motion/react";

export function RotatingSquare(): JSX.Element {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <motion.div
        className="h-[100px] w-[100px] rounded-xl bg-blue-500"
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </div>
  );
}
