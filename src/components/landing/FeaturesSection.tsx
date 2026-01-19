import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const experiences = [
  {
    company: "AMS Fund",
    role: "Chief Investment Officer",
    period: "Aug 2025 - Present",
    location: "Thailand",
    description: "Private investment fund operated by family office. Oversee strategic fund management, lead capital allocation across DeFi markets, and establish robust risk management governance.",
    highlights: ["Yield Stablecoin Farming", "Liquidity Provisioning", "Risk Management"],
    featured: true,
  },
  {
    company: "Spectre Labs",
    role: "Co-Founder",
    period: "Aug 2025 - Present",
    location: "Thailand",
    description: "Thai growth agency for Blockchain projects. Delivered results for multiple projects including GRVT ($1.84B trading volume), Paradex, and Bio Protocol.",
    highlights: ["KOL Network", "Community Building", "Growth Strategy"],
    featured: true,
  },
  {
    company: "GRVT",
    role: "Consultant & Regional Lead",
    period: "Jul 2025 - Present",
    location: "Singapore",
    description: "World's first compliant peer-to-peer onchain investment marketplace. Led Thailand community and increased trading volume to $1.84B.",
    highlights: ["Trading Campaign", "E-Sport Competition", "User Expansion"],
  },
  {
    company: "Talus Labs",
    role: "Regional Lead",
    period: "Apr 2025 - Present",
    location: "United States",
    description: "Premier AI infra network powering AI Agents. Lead Talus Thailand community and organized IRL events.",
    highlights: ["Community Leadership", "Event Organization"],
  },
  {
    company: "D1ckDAO",
    role: "AI Researcher",
    period: "Aug 2025 - Present",
    location: "Thailand (Remote)",
    description: "DeSci community focused on men's health. Supported research and product development of D1ckGPT, an AI terminal for science-aligned health information. Collaborated cross-functionally to improve UX, safety boundaries, and information quality.",
    highlights: ["AI Research", "Knowledge Graphs", "Healthcare", "DeSci"],
  },
  {
    company: "AIAT",
    role: "AI Researcher",
    period: "Sep 2020 - Dec 2024",
    location: "Thailand",
    description: "Super AI Engineer tackling challenges across industries. Worked on AI, Data Science, OCR, Time Series, Object Detection, and NLP.",
    highlights: ["Machine Learning", "Data Science", "NLP"],
  },
  {
    company: "Mahidol University",
    role: "Lead Researcher",
    period: "Aug 2016 - Aug 2020",
    location: "Thailand",
    description: "Lead Researcher & Data Analyst. Published study on cytogenetics and pollen identification of the genus Gagnepainia (Zingiberaceae) in Thailand.",
    highlights: ["Botany", "Scientific Analysis", "Data Analysis", "Scientific Writing"],
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-card px-6 md:px-12 py-24 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-medium text-foreground tracking-tighter mb-6">
            Building the <span className="text-primary font-serif-italic">future</span>.
          </h2>
          <p className="text-muted-foreground text-xl font-light">
            From DeFi fund management to AI research, driving innovation across Web3 and emerging technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`bg-secondary rounded-3xl border border-border p-8 relative overflow-hidden group hover:border-primary/50 transition-colors duration-500 ${
                exp.featured ? "lg:col-span-1" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20">
                    <Briefcase className="w-7 h-7" />
                  </div>
                  <ArrowUpRight className="text-muted-foreground w-5 h-5 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                
                <h3 className="text-2xl text-foreground font-semibold mb-1">{exp.role}</h3>
                <p className="text-primary font-medium mb-4">{exp.company}</p>
                
                <div className="flex flex-wrap gap-4 text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-background/50 border border-border text-xs font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
