import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { Award, BookOpen, GraduationCap } from "lucide-react";

const skills = [
  "Knowledge Graphs",
  "Scientific Analysis", 
  "Data Science",
  "AI/ML",
  "DeFi",
  "Blockchain",
  "Risk Management",
  "NLP",
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
    <section className="bg-foreground w-full px-6 md:px-12 py-24 rounded-t-4xl relative z-30">
      <div className="max-w-7xl mx-auto">
        <SectionLabel variant="dark">Skills & Achievements</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-medium text-background tracking-tighter leading-[0.95] mb-12">
              Driven by <span className="text-accent font-serif-italic">curiosity</span>.
            </h2>

            {/* Skills */}
            <div className="mb-12">
              <h3 className="text-background/60 text-sm font-mono uppercase tracking-widest mb-4">
                Core Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-background/10 border border-background/20 text-background text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="p-6 rounded-2xl bg-background/5 border border-background/10">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-accent" />
                <h3 className="text-background font-semibold">Education</h3>
              </div>
              <p className="text-background font-medium">Mahidol University</p>
              <p className="text-background/60 text-sm">Bachelor's Degree in Botany/Plant Biology (2015-2018)</p>
              <p className="text-background/50 text-xs mt-2">
                Published: Cytogenetic and pollen identification of genus Gagnepainia (Zingiberaceae) in Thailand
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Certifications */}
            <div className="p-6 rounded-2xl bg-background/5 border border-background/10">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-accent" />
                <h3 className="text-background font-semibold">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div key={cert} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-full border border-background/20 flex items-center justify-center text-background/60 text-sm font-mono group-hover:bg-accent group-hover:text-background group-hover:border-accent transition-colors">
                      {i + 1}
                    </div>
                    <span className="text-background/80 group-hover:text-background transition-colors">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="p-6 rounded-2xl bg-background/5 border border-background/10">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-accent" />
                <h3 className="text-background font-semibold">Honors & Awards</h3>
              </div>
              <div className="space-y-3">
                {awards.map((award) => (
                  <div key={award} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-background/80 text-sm">{award}</span>
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
