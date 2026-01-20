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
  return <section className="bg-background px-6 md:px-12 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Statement */}
        <motion.div
          className="max-w-5xl mb-20 space-y-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tighter">
            I'm <span className="text-primary font-serif italic">Met</span>.
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground leading-relaxed">
            Specializing in{" "}
            <span className="text-primary font-medium">high level fund management</span> and{" "}
            <span className="text-primary font-medium">operational excellence</span>.{" "}
            I combine rigorous risk assessment with strategic yield optimization, while actively shaping the Web3 landscape through{" "}
            <span className="text-primary font-medium">regional leadership</span> and advanced{" "}
            <span className="text-primary font-medium">AI research</span>.
          </p>
        </motion.div>

        {/* Roles */}
        <div className="flex flex-wrap gap-6 md:gap-10">
          {roles.map((role, i) => <motion.div key={role.name} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors cursor-default group" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: i * 0.1,
          duration: 0.5
        }}>
              
              
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default IntroSection;