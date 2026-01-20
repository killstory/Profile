import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Sparkles } from "lucide-react";

const skills = [
  "AI/ML",
  "Blockchain",
  "Data Science",
  "DeFi",
  "Fund Management",
  "Knowledge Graphs",
  "NLP",
  "Risk Management",
  "Scientific Analysis",
];

const certifications = [
  { name: "Super AI Engineer", org: "AIAT" },
  { name: "Google Data Analytics", org: "Google" },
  { name: "Azure Fundamentals", org: "Microsoft" },
  { name: "Azure Data Fundamentals", org: "Microsoft" },
  { name: "Digital Marketing", org: "Google" },
];

const awards = [
  "Super AI Engineer Award",
  "TURFPaG 4th - Thailand Undergraduate Research Forum",
  "19th Science Project Exhibition",
  "17th Flora of Thailand Conference",
  "8th World International Zingiberales Symposium",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function PhilosophySection() {
  return (
    <section id="skills" className="bg-foreground w-full px-6 md:px-12 py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary text-sm font-mono uppercase tracking-widest">
              Skills & Achievements
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-background tracking-tighter leading-[0.9]">
            Driven by{" "}
            <span className="font-serif italic text-primary">curiosity</span>.
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-background/60 text-sm font-mono uppercase tracking-widest mb-8">
            Core Expertise
          </h3>
          <motion.div 
            className="flex flex-wrap gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-3 rounded-full bg-background/5 border border-background/20 text-background font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default text-lg"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group p-8 rounded-3xl bg-gradient-to-br from-background/10 to-background/5 border border-background/10 hover:border-primary/30 transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <GraduationCap className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-background font-bold text-xl">Education</h3>
            </div>
            <div className="space-y-4">
              <p className="text-background font-semibold text-2xl leading-tight">
                Mahidol University
              </p>
              <p className="text-background/70 text-lg">
                Bachelor's Degree in Botany/Plant Biology
              </p>
              <p className="text-primary font-mono text-sm">2015 - 2018</p>
              <div className="pt-4 border-t border-background/10">
                <p className="text-background/50 text-sm leading-relaxed">
                  Published: Cytogenetic and pollen identification of genus Gagnepainia (Zingiberaceae) in Thailand
                </p>
              </div>
            </div>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group p-8 rounded-3xl bg-gradient-to-br from-background/10 to-background/5 border border-background/10 hover:border-primary/30 transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <BookOpen className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-background font-bold text-xl">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="flex items-center gap-4 group/item"
                >
                  <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center text-primary text-xs font-mono font-bold group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-all duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1">
                    <p className="text-background/90 font-medium text-sm leading-tight">
                      {cert.name}
                    </p>
                    <p className="text-background/40 text-xs">{cert.org}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Awards Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group p-8 rounded-3xl bg-gradient-to-br from-background/10 to-background/5 border border-background/10 hover:border-primary/30 transition-all duration-500 md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <Award className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-background font-bold text-xl">Honors & Awards</h3>
            </div>
            <div className="space-y-4">
              {awards.map((award, i) => (
                <motion.div
                  key={award}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="flex items-start gap-3 group/item"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0 group-hover/item:scale-150 transition-transform duration-300" />
                  <span className="text-background/80 text-sm leading-relaxed group-hover/item:text-background transition-colors">
                    {award}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
