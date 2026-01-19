import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = ["Studio", "Intelligence", "System", "Pricing"];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 px-6 md:px-12 py-6 flex justify-between items-center w-full">
      {/* Logo */}
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center relative overflow-hidden lime-glow transition-transform group-hover:rotate-12 duration-300">
          <div className="absolute inset-0 bg-primary-foreground/10 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700" />
          <span className="text-primary-foreground font-bold text-xl font-mono relative z-10">S</span>
        </div>
        <span className="text-foreground font-bold tracking-tight text-lg hidden sm:block">
          Superdesign<span className="text-primary">.</span>
        </span>
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-1 glass-panel p-1.5 rounded-full">
        {navLinks.map((link) => (
          <button
            key={link}
            className="px-5 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all text-sm font-medium"
          >
            {link}
          </button>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center text-muted-foreground text-xs font-mono gap-2 mr-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          SYSTEM V2.4 LIVE
        </div>
        <button className="hidden sm:flex bg-foreground text-background px-5 py-2.5 rounded-full font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
          Get Access
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-full glass-panel text-foreground hover:bg-muted/50 transition-colors lg:hidden"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 glass-panel rounded-2xl p-4 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link}
                  className="px-4 py-3 rounded-xl text-foreground hover:bg-muted/50 transition-all text-left font-medium"
                >
                  {link}
                </button>
              ))}
              <button className="mt-2 bg-primary text-primary-foreground px-4 py-3 rounded-xl font-bold text-sm">
                Get Access
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
