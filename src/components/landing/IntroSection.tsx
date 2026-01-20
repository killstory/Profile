import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon, Triangle, Circle, Square } from 'lucide-react';

const roles = [
  { name: 'AMS Fund', icon: Circle },
  { name: 'Spectre Labs', icon: Hexagon },
  { name: 'GRVT', icon: Square },
  { name: 'Talus Labs', icon: Triangle },
];

export const IntroSection = () => {
  return (
    <section className="bg-background px-6 md:px-12 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Statement */}
        <motion.p
          className="text-3xl md:text-5xl lg:text-6xl font-light text-foreground leading-[1.2] tracking-tight max-w-5xl mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          I'm <span className="text-primary font-serif italic">Met</span> — Chief Investment Officer managing strategic fund operations, applying extensive expertise in{" "}
          <span className="text-primary">risk management</span>, investment strategies, and{" "}
          <span className="text-primary">yield optimization</span>.
        </motion.p>

        {/* Roles */}
        <div className="flex flex-wrap gap-6 md:gap-10">
          {roles.map((role, i) => (
            <motion.div
              key={role.name}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors cursor-default group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <role.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
              <span className="text-lg font-medium">{role.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
