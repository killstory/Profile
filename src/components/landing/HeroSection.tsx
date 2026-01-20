import React from "react";
import { motion } from "framer-motion";
import { Navigation } from "./Navigation";

const letterAnim = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } }
};

const containerAnim = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    }
  }
};

export function HeroSection() {
  const title = "Paramet";

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-12 py-20">
        <div className="text-center max-w-6xl mx-auto">
          {/* Massive Typography */}
          <motion.div
            className="overflow-hidden"
            initial="initial"
            animate="animate"
            variants={containerAnim}
          >
            <motion.h1
              className="text-[12vw] md:text-[10vw] lg:text-[9vw] font-bold tracking-tighter leading-[0.85] text-foreground"
            >
              {title.split('').map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  variants={letterAnim}
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                className="inline-block text-primary align-super text-[3vw] font-normal ml-2"
                variants={letterAnim}
              >
                ®
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="mt-8 text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            CIO & AI Researcher based in Bangkok.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
