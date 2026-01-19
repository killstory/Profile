import { motion } from "framer-motion";
import { ArrowUpRight, Download, Briefcase, Brain, Coins } from "lucide-react";
import { Navigation } from "./Navigation";
import { GridPattern } from "./GridPattern";
import profileImage from "@/assets/paramet-profile.png";

const roles = ["CIO @ AMS Fund", "Blockchain Consultant", "AI Researcher"];

export function HeroSection() {
  return (
    <div className="relative w-full min-h-screen flex flex-col overflow-hidden">
      <GridPattern />
      
      {/* Ambient Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-primary rounded-full blur-[180px] opacity-[0.08] animate-glow-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-accent rounded-full blur-[150px] opacity-[0.05]" />

      <Navigation />

      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 relative z-10 pt-10 pb-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Typography */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>BANGKOK, THAILAND</span>
              </div>

              <h1 className="text-5xl md:text-7xl xl:text-8xl leading-[0.9] font-medium text-foreground tracking-tighter mb-4">
                Hello, I'm{" "}
                <span className="relative inline-block text-gradient-lime font-serif-italic pr-2">
                  Met
                  <svg
                    className="absolute w-full h-3 bottom-2 left-0 text-primary -z-10 opacity-60"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-light mb-8">
                Paramet Moonkaew
              </h2>

              <p className="text-muted-foreground text-lg md:text-xl font-light max-w-xl leading-relaxed mb-6">
                As Chief Investment Officer at AMS Fund, I manage strategic fund operations, applying extensive expertise in risk management, investment strategies, and yield optimization.
              </p>
              
              <p className="text-muted-foreground text-lg md:text-xl font-light max-w-xl leading-relaxed mb-10">
                I actively contribute to the Web3 ecosystem as a Blockchain Consultant and AI Researcher.
              </p>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="mailto:paramet.moon@gmail.com"
                  className="group px-6 py-3 rounded-full font-medium tracking-wide transition-all duration-300 flex items-center gap-2 bg-primary text-primary-foreground hover:brightness-110 lime-glow"
                >
                  Let's Connect
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/paramet-moonkaew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full font-medium tracking-wide transition-all duration-300 flex items-center gap-2 border border-muted text-foreground hover:bg-muted/50 hover:border-muted-foreground/30"
                >
                  <Download className="w-4 h-4" /> View LinkedIn
                </a>
              </div>

              <div className="mt-16 flex items-center gap-8 text-muted-foreground">
                <div className="h-[1px] w-12 bg-muted" />
                <div className="flex flex-wrap gap-4 opacity-70">
                  {roles.map((role) => (
                    <span
                      key={role}
                      className="text-sm font-mono uppercase tracking-widest hover:text-primary cursor-default transition-colors px-3 py-1 rounded-full border border-border"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Profile Photo */}
          <div className="col-span-12 lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              {/* Profile Image Container */}
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-float" />
                <div className="absolute inset-4 rounded-full border border-primary/10" />
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl opacity-30" />
                
                {/* Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-border shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Paramet Moonkaew"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-panel px-6 py-3 rounded-full"
                >
                  <div className="flex items-center gap-2 text-primary text-sm font-mono">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Open to opportunities
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
