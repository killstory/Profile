import { motion } from "framer-motion";
import { ArrowUpRight, Play, Sparkles, PenTool } from "lucide-react";
import { Navigation } from "./Navigation";
import { GridPattern } from "./GridPattern";

const partners = ["ACME Corp", "Stark Industries", "Cyberdyne", "Massive Dynamic"];

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
                <Sparkles className="w-3 h-3" />
                <span>AI-POWERED INTERFACE GENERATOR</span>
              </div>

              <h1 className="text-5xl md:text-7xl xl:text-8xl leading-[0.9] font-medium text-foreground tracking-tighter mb-8">
                Design at the <br />
                <span className="relative inline-block text-gradient-lime font-serif-italic pr-4 py-2">
                  Speed
                  <svg
                    className="absolute w-full h-3 bottom-4 left-0 text-primary -z-10 opacity-60"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </span>
                of Thought.
              </h1>

              <p className="text-muted-foreground text-lg md:text-xl font-light max-w-xl leading-relaxed mb-10">
                Superdesign leverages advanced neural networks to generate production-ready UI
                components, design systems, and interactions in milliseconds.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="group px-6 py-3 rounded-full font-medium tracking-wide transition-all duration-300 flex items-center gap-2 bg-primary text-primary-foreground hover:brightness-110 lime-glow">
                  Start Designing
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </button>
                <button className="px-6 py-3 rounded-full font-medium tracking-wide transition-all duration-300 flex items-center gap-2 border border-muted text-foreground hover:bg-muted/50 hover:border-muted-foreground/30">
                  <Play className="w-4 h-4 fill-current" /> Watch Demo
                </button>
              </div>

              <div className="mt-16 flex items-center gap-8 text-muted-foreground">
                <div className="h-[1px] w-12 bg-muted" />
                <div className="flex gap-6 opacity-50 hover:opacity-100 transition-opacity duration-500">
                  {partners.map((logo) => (
                    <span
                      key={logo}
                      className="text-sm font-mono uppercase tracking-widest hover:text-primary cursor-default transition-colors"
                    >
                      {logo}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <div className="col-span-12 lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[4/5] md:aspect-square lg:aspect-[3/4] rounded-3xl overflow-hidden border border-border bg-card shadow-2xl group"
            >
              {/* UI Mockup Container */}
              <div className="absolute inset-0 bg-background p-6 flex flex-col">
                {/* Fake Browser Header */}
                <div className="h-8 flex items-center gap-2 mb-4 opacity-50">
                  <div className="w-3 h-3 rounded-full bg-destructive/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-accent/50" />
                </div>

                {/* Generated UI Preview */}
                <div className="flex-1 bg-secondary rounded-xl border border-border relative overflow-hidden group-hover:border-primary/30 transition-colors duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-700" />

                  {/* Floating Card */}
                  <div className="absolute top-1/4 left-6 right-6 p-6 glass-panel rounded-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent" />
                      <div>
                        <div className="h-2 w-24 bg-foreground/20 rounded mb-2" />
                        <div className="h-2 w-16 bg-foreground/10 rounded" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-20 w-full bg-muted/50 rounded-lg border border-border" />
                      <div className="flex gap-2">
                        <div className="h-8 w-1/3 bg-primary rounded-lg opacity-80" />
                        <div className="h-8 w-2/3 bg-muted rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cursor */}
                <div className="absolute bottom-10 right-10 pointer-events-none transform translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-xs shadow-lg flex items-center gap-2">
                    <PenTool className="w-3 h-3" />
                    Generating...
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
