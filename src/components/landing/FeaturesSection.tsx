import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import spectreLabsCover from "@/assets/spectre-labs-cover.png";
import amsFundCover from "@/assets/ams-fund-cover.png";
import d1ckdaoCover from "@/assets/d1ckdao-cover.jpeg";
import grvtCover from "@/assets/grvt-cover.jpg";
import talusCover from "@/assets/talus-cover.jpeg";

// Sorted by date: Present first, then by start month (most recent first)
const experiences = [
  { 
    title: "AMS Fund", 
    category: "Chief Investment Officer", 
    year: "Aug 2025 - Present",
    slug: "ams-fund",
    image: amsFundCover
  },
  { 
    title: "Spectre Labs", 
    category: "Co-Founder", 
    year: "Aug 2025 - Present",
    slug: "spectre-labs",
    image: spectreLabsCover
  },
  { 
    title: "D1ckDAO", 
    category: "AI Researcher", 
    year: "Aug 2025 - Present",
    slug: "d1ckdao",
    image: d1ckdaoCover
  },
  { 
    title: "GRVT", 
    category: "Consultant", 
    year: "Jul 2025 - Present",
    slug: "grvt-exchange",
    image: grvtCover
  },
  { 
    title: "Talus Labs", 
    category: "Regional Lead", 
    year: "Apr 2025 - Present",
    slug: "talus-labs",
    image: talusCover
  },
  { 
    title: "AIAT", 
    category: "AI Researcher", 
    year: "Sep 2020 - Dec 2024",
    slug: "aiat",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2670&auto=format&fit=crop"
  },
  { 
    title: "Srichand United Dispensary", 
    category: "Data Scientist", 
    year: "Mar 2021 - Aug 2021",
    slug: "srichand",
    image: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?q=80&w=2670&auto=format&fit=crop"
  },
  { 
    title: "Thailand e-Business Centre", 
    category: "Digital Marketing Analyst", 
    year: "Aug 2020 - Sep 2020",
    slug: "tec",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2670&auto=format&fit=crop"
  },
  { 
    title: "Forest Restoration Unit", 
    category: "Volunteer", 
    year: "Jan 2019 - Jan 2020",
    slug: "forest-restoration",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2670&auto=format&fit=crop"
  },
  { 
    title: "Mahidol University", 
    category: "Lead Researcher & Data Analyst", 
    year: "Aug 2016 - Aug 2020",
    slug: "mahidol-university",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop"
  }
];

export function FeaturesSection() {
  return (
    <section id="experience" className="bg-background px-6 md:px-12 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-foreground tracking-tighter mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience<span className="text-primary">.</span>
        </motion.h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group cursor-scale"
            >
              {/* Image - Clickable */}
              <Link to={`/experience/${exp.slug}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                  
                  {/* Arrow */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>

              {/* Info */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground">{exp.category}</p>
                </div>
                <span className="text-muted-foreground font-mono text-sm">{exp.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
