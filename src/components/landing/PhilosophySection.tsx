import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap } from "lucide-react";

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
  "Super AI Engineer",
  "Google Data Analytics",
  "Azure Fundamentals",
  "Azure Data Fundamentals",
  "Digital Marketing",
];

const awards = [
  "Super AI Engineer Award",
  "TURFPaG 4th - Thailand Undergraduate Research Forum",
  "19th Science Project Exhibition",
  "17th Flora of Thailand Conference",
  "8th World International Zingiberales Symposium",
];

export function PhilosophySection() {
  return (
    <section id="skills" className="bg-foreground w-full px-6 md:px-12 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-background/40 text-sm font-mono uppercase tracking-widest mb-4 block">
            Skills & Achievements
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-background tracking-tighter leading-[0.9]">
            Driven by{" "}
            <span className="font-serif italic text-primary">curiosity</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Skills */}
            <div className="mb-12">
              <h3 className="text-background/60 text-sm font-mono uppercase tracking-widest mb-6">
                Core Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2.5 rounded-full bg-background/10 border border-background/20 text-background text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="p-8 rounded-2xl bg-background/5 border border-background/10">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="text-background font-semibold text-lg">Education</h3>
              </div>
              <p className="text-background font-medium text-xl mb-1">Mahidol University</p>
              <p className="text-background/60">Bachelor's Degree in Botany/Plant Biology (2015-2018)</p>
              <p className="text-background/40 text-sm mt-3">
                Published: Cytogenetic and pollen identification of genus Gagnepainia (Zingiberaceae) in Thailand
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Certifications */}
            <div className="p-8 rounded-2xl bg-background/5 border border-background/10">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-primary" />
                <h3 className="text-background font-semibold text-lg">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <div key={cert} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background/60 text-sm font-mono group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <span className="text-background/80 group-hover:text-background transition-colors">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="p-8 rounded-2xl bg-background/5 border border-background/10">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-primary" />
                <h3 className="text-background font-semibold text-lg">Honors & Awards</h3>
              </div>
              <div className="space-y-3">
                {awards.map((award) => (
                  <div key={award} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-background/80">{award}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
