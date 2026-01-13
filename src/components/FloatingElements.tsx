import { motion, useReducedMotion } from 'framer-motion';
import { memo } from 'react';

function FloatingElements() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#9D5060]/20 to-[#376380]/20 blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, 30, 0],
                x: [0, 20, 0],
                scale: [1, 1.1, 1],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />
      <motion.div
        className="absolute top-1/4 right-20 w-48 h-48 rounded-full bg-gradient-to-br from-[#2D1F30]/20 to-[#9D5060]/20 blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -40, 0],
                x: [0, -30, 0],
                scale: [1, 1.2, 1],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }
        }
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-[#376380]/20 to-[#9D5060]/20 blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, 20, 0],
                x: [0, -20, 0],
                scale: [1, 1.15, 1],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }
        }
      />
      <motion.div
        className="absolute bottom-20 right-1/3 w-36 h-36 rounded-full bg-gradient-to-br from-[#9D5060]/20 to-[#2D1F30]/20 blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -25, 0],
                x: [0, 25, 0],
                scale: [1, 1.1, 1],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }
        }
      />
    </div>
  );
}

export default memo(FloatingElements);
