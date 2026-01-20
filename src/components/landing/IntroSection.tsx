import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Briefcase, FlaskConical, BarChart3, Users, Brain } from 'lucide-react';

// All current roles (Present) matching experiences
const currentRoles = [
  {
    name: 'AMS Fund',
    role: 'Chief Investment Officer',
    period: 'Aug 2025 - Present',
    slug: 'ams-fund',
    icon: BarChart3
  },
  {
    name: 'Spectre Labs',
    role: 'Co-Founder',
    period: 'Aug 2025 - Present',
    slug: 'spectre-labs',
    icon: FlaskConical
  },
  {
    name: 'D1ckDAO',
    role: 'AI Researcher',
    period: 'Aug 2025 - Present',
    slug: 'd1ckdao',
    icon: Brain
  },
  {
    name: 'GRVT',
    role: 'Consultant',
    period: 'Jul 2025 - Present',
    slug: 'grvt-exchange',
    icon: Briefcase
  },
  {
    name: 'Talus Labs',
    role: 'Regional Lead',
    period: 'Apr 2025 - Present',
    slug: 'talus-labs',
    icon: Users
  }
];

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

        {/* Current Roles */}
        <div>
          <motion.div
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Currently Working With
              </p>
            </div>
            <span className="text-sm text-muted-foreground">
              {currentRoles.length} Active Roles
            </span>
          </motion.div>

          {/* Roles Grid - Responsive Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentRoles.map((role, i) => (
              <motion.div
                key={role.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  to={`/experience/${role.slug}`}
                  className="group flex items-center gap-4 p-4 bg-muted/10 hover:bg-muted/30 border border-border/30 hover:border-primary/50 rounded-xl transition-all cursor-scale"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all shrink-0">
                    <role.icon className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {role.name}
                      </h3>
                      <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all shrink-0" />
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{role.role}</p>
                  </div>

                  {/* Status Badge */}
                  <span className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full shrink-0">
                    Active
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;