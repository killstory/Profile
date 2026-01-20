import React from "react";
import { motion } from "framer-motion";
import { Navigation } from "./Navigation";
import profileImage from "@/assets/paramet-profile.png";

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
      <div className="flex-1 flex items-center justify-center px-6 md:px-12 py-12 md:py-20">
        <div className="text-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <motion.div
            className="inline-block mb-6 md:mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl ring-4 ring-background">
              <img
                src={profileImage}
                alt="Paramet Moonkaew"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Massive Typography */}
          <motion.div
            className="overflow-hidden mb-6 md:mb-8"
            initial="initial"
            animate="animate"
            variants={containerAnim}
          >
            <motion.h1
              className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-bold tracking-tighter leading-[0.85] text-foreground"
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
                className="inline-block text-primary align-super text-[4vw] md:text-[3vw] font-normal ml-1 md:ml-2"
                variants={letterAnim}
              >
                ®
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtitle - Responsive Stack */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <span className="text-sm md:text-base lg:text-lg text-foreground font-medium tracking-wide">
              Strategic Capital Management
            </span>
            <span className="hidden md:inline mx-4 text-primary text-lg">•</span>
            <span className="text-sm md:text-base lg:text-lg text-foreground font-medium tracking-wide">
              Web3 Advisory
            </span>
            <span className="hidden md:inline mx-4 text-primary text-lg">•</span>
            <span className="text-sm md:text-base lg:text-lg text-foreground font-medium tracking-wide">
              AI Researcher
            </span>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mt-10 md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-base hover:brightness-110 transition-all cursor-scale"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
