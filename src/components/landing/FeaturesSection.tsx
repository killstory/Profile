import { motion } from "framer-motion";
import { Cpu, Hexagon, Globe, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { cn } from "@/lib/utils";

const tokens = ["primary-500", "accent-lime", "surface-dark", "text-main"];

export function FeaturesSection() {
  return (
    <section className="bg-card px-6 md:px-12 py-24 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-2xl">
          <SectionLabel>System Architecture</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-medium text-foreground tracking-tighter mb-6">
            Built for the <span className="text-primary font-serif-italic">unconventional</span>.
          </h2>
          <p className="text-muted-foreground text-xl font-light">
            A modular ecosystem of tools designed to accelerate your workflow from concept to code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
          {/* Feature 1: Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2 md:row-span-2 bg-secondary rounded-4xl border border-border p-8 md:p-12 relative overflow-hidden group hover:border-primary/50 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 border border-primary/20">
                  <Cpu className="w-7 h-7" />
                </div>
                <h3 className="text-3xl text-foreground font-medium mb-4">Neural Engine 3.0</h3>
                <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                  Our proprietary model understands design context, accessibility standards, and
                  brand guidelines to generate perfect UI components.
                </p>
              </div>

              {/* Visualization */}
              <div className="mt-12 w-full h-48 bg-background/50 rounded-xl border border-border overflow-hidden relative">
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-1 p-1">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-muted rounded-sm animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                  <div className="h-1 flex-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-primary" />
                  </div>
                  <span className="text-xs font-mono text-primary">PROCESSING</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 2: Tall Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1 md:row-span-2 bg-muted rounded-4xl border border-border p-8 relative overflow-hidden group hover:bg-secondary transition-colors"
          >
            <div className="absolute top-0 right-0 p-8">
              <ArrowUpRight className="text-muted-foreground w-6 h-6 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
            <div className="h-full flex flex-col">
              <div className="mt-auto mb-8">
                <Hexagon className="w-12 h-12 text-primary mb-6 stroke-1" />
                <h3 className="text-2xl text-foreground font-medium mb-2">Atomic Tokens</h3>
                <p className="text-muted-foreground text-sm">
                  Sync design tokens directly to your codebase. Colors, typography, spacing—all
                  automated.
                </p>
              </div>
              <div className="space-y-3">
                {tokens.map((token, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border text-xs font-mono text-muted-foreground"
                  >
                    <span>{token}</span>
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: i === 1 ? "hsl(var(--primary))" : "hsl(var(--muted))" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Feature 3: Stat Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1 bg-secondary rounded-4xl border border-border p-8 flex flex-col justify-center items-center text-center group relative overflow-hidden"
          >
            <div className="absolute inset-0 noise-overlay" />
            <div className="relative z-10">
              <div className="text-5xl font-bold text-foreground mb-2 group-hover:scale-110 transition-transform duration-300">
                10x
              </div>
              <p className="text-primary text-sm font-mono uppercase tracking-widest">
                Faster Deployment
              </p>
            </div>
          </motion.div>

          {/* Feature 4: Standard Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-1 bg-background rounded-4xl border border-border p-8 flex flex-col justify-between group hover:border-muted-foreground/30 transition-colors"
          >
            <Globe className="w-10 h-10 text-foreground/80 mb-4" />
            <div>
              <h3 className="text-xl text-foreground font-medium mb-2">Global CDN</h3>
              <p className="text-muted-foreground text-sm">
                Edge cached assets delivered in milliseconds.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
