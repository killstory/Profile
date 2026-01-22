import React from "react";
import { motion } from "framer-motion";
import { Navigation } from "./Navigation";
import { FaXTwitter, FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import profileImage from "@/assets/paramet-profile.png";

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/paramet-moonkaew", icon: FaLinkedin },
  { name: "X", href: "https://x.com/killstoryyy", icon: FaXTwitter },
  { name: "Telegram", href: "http://t.me/killstory789", icon: FaTelegram },
  { name: "WhatsApp", href: "https://wa.link/eo3n58", icon: FaWhatsapp },
  { name: "GitHub", href: "https://github.com/killstory", icon: FaGithub },
];

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
  const firstName = "Paramet";
  const lastName = "Moonkaew";

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-12 py-12 md:py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Profile Image */}
          <motion.div
            className="inline-block mb-8 md:mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl ring-4 ring-background">
              <img
                src={profileImage}
                alt="Paramet Moonkaew"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Full Name Typography */}
          <motion.div
            className="overflow-hidden mb-6 md:mb-8"
            initial="initial"
            animate="animate"
            variants={containerAnim}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
            >
              {firstName.split('').map((char, i) => (
                <motion.span
                  key={`first-${i}`}
                  className="inline-block text-primary"
                  variants={letterAnim}
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                className="inline-block"
                variants={letterAnim}
              >
                &nbsp;
              </motion.span>
              {lastName.split('').map((char, i) => (
                <motion.span
                  key={`last-${i}`}
                  className="inline-block text-primary"
                  variants={letterAnim}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          {/* Subtitle Tags */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <span className="px-4 py-1.5 bg-muted/50 rounded-full text-sm md:text-base text-foreground font-medium">
              Strategic Capital Management
            </span>
            <span className="px-4 py-1.5 bg-muted/50 rounded-full text-sm md:text-base text-foreground font-medium">
              Web3 Advisory
            </span>
            <span className="px-4 py-1.5 bg-muted/50 rounded-full text-sm md:text-base text-foreground font-medium">
              AI Researcher
            </span>
          </motion.div>

          {/* CTA Button */}
          <motion.div
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

          {/* Divider */}
          <motion.div
            className="mt-8 mb-6 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <div className="h-px w-12 bg-border" />
            <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Connect</span>
            <div className="h-px w-12 bg-border" />
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 md:gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 md:w-11 md:h-11 bg-muted/50 hover:bg-primary hover:text-primary-foreground rounded-full transition-all cursor-scale"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title={social.name}
              >
                <social.icon className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
