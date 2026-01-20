import { useState } from "react";
import { Menu, X, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#intro" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 px-6 md:px-12 py-8 flex justify-between items-center w-full">
      {/* Logo */}
      <a href="#" className="flex items-center gap-2 group cursor-pointer">
        <span className="text-foreground text-2xl font-bold tracking-tighter">
          pm
        </span>
      </a>

      {/* Desktop Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-all duration-300 cursor-scale"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
      </button>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background z-40"
          >
            <div className="h-full flex flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl md:text-7xl font-bold text-foreground hover:text-primary transition-colors cursor-scale"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  {link.label}
                </motion.a>
              ))}
              
              <motion.a
                href="mailto:paramet.moon@gmail.com"
                onClick={() => setIsOpen(false)}
                className="mt-8 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:brightness-110 transition-all cursor-scale"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
