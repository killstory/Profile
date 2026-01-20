import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon, Triangle, Circle, Square } from 'lucide-react';
const roles = [{
  name: 'AMS Fund',
  icon: Circle
}, {
  name: 'Spectre Labs',
  icon: Hexagon
}, {
  name: 'GRVT',
  icon: Square
}, {
  name: 'Talus Labs',
  icon: Triangle
}];
export const IntroSection = () => {
  return (
    <section className="bg-background px-6 md:px-12 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Statement */}
        <motion.div
          className="max-w-5xl mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Name */}
          <motion.p
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tighter mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            I'm <span className="text-primary font-serif italic">Met</span>.
          </motion.p>

          {/* Description with visual hierarchy */}
          <div className="space-y-6 border-l-2 border-primary/30 pl-6 md:pl-8">
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground leading-snug"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Specializing in{" "}
              <span className="text-primary">high level fund management</span> and{" "}
              <span className="text-primary">operational excellence</span>.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I combine rigorous risk assessment with strategic yield optimization,
              while actively shaping the Web3 landscape through{" "}
              <span className="text-foreground font-medium">regional leadership</span> and advanced{" "}
              <span className="text-foreground font-medium">AI research</span>.
            </motion.p>
          </div>
        </motion.div>

        {/* Roles */}
        <div className="flex flex-wrap gap-4 md:gap-6">
          {roles.map((role, i) => (
            <motion.div
              key={role.name}
              className="flex items-center gap-3 px-5 py-3 bg-muted/30 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all cursor-default group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <role.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{role.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;