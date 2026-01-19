import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const principles = [
  {
    title: "Subtract until it breaks",
    desc: "We remove everything that isn't essential to the user's intent.",
  },
  {
    title: "Motion adds meaning",
    desc: "Animation should explain relationships, not just decorate.",
  },
  {
    title: "Content is interface",
    desc: "The best UI is no UI. Let the content speak for itself.",
  },
];

export function PhilosophySection() {
  return (
    <section className="bg-foreground w-full px-6 md:px-12 py-24 rounded-t-4xl relative z-30">
      <div className="max-w-7xl mx-auto">
        <SectionLabel variant="dark">Methodology</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-medium text-background tracking-tighter leading-[0.95] mb-12">
              Simplicity is the ultimate{" "}
              <span className="text-accent font-serif-italic">sophistication</span>.
            </h2>

            <div className="space-y-8">
              {principles.map((item, i) => (
                <div key={i} className="flex gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center shrink-0 group-hover:bg-background group-hover:text-primary transition-colors duration-300 text-lg font-mono text-background">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-background mb-2">{item.title}</h3>
                    <p className="text-background/60 leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-full bg-background overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent" />

              {/* Abstract visualization instead of image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full border border-primary/20 flex items-center justify-center animate-float">
                  <div className="w-2/3 h-2/3 rounded-full border border-primary/30 flex items-center justify-center">
                    <div className="w-1/2 h-1/2 rounded-full bg-primary/20" />
                  </div>
                </div>
              </div>

              {/* Floating Quote */}
              <div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-2xl">
                <p className="text-foreground text-base font-medium italic mb-4">
                  "Superdesign completely changed how we approach product development. It's not just
                  a tool, it's a co-founder."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full" />
                  <span className="text-muted-foreground text-sm font-mono uppercase">
                    Sarah Jenkins, CTO
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
