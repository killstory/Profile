import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import spectreLabsCover from "@/assets/spectre-labs-cover.png";
import amsFundCover from "@/assets/ams-fund-cover.png";
import d1ckdaoCover from "@/assets/d1ckdao-cover.jpeg";
import grvtCover from "@/assets/grvt-cover.jpg";
import talusThumbnail from "@/assets/talus-thumbnail.jpg";
import aiatCover from "@/assets/aiat-cover.jpg";
import tecCover from "@/assets/tec-cover.jpg";
import srichandCover from "@/assets/srichand-cover.jpg";
import forruCover from "@/assets/forru-cover.jpg";
import mahidolCover from "@/assets/mahidol-cover.jpg";

interface Experience {
  title: string;
  category: string;
  year: string;
  slug: string;
  image: string;
  isLogo?: boolean;
  logoStyle?: 'forru' | 'mahidol' | 'talus';
  isPresent?: boolean;
}

// Sorted by date: Present first, then by start month (most recent first)
const experiences: Experience[] = [
  { 
    title: "AMS Fund", 
    category: "Chief Investment Officer", 
    year: "Aug 2025 - Present",
    slug: "ams-fund",
    image: amsFundCover,
    isPresent: true
  },
  { 
    title: "Spectre Labs", 
    category: "Co-Founder", 
    year: "Aug 2025 - Present",
    slug: "spectre-labs",
    image: spectreLabsCover,
    isPresent: true
  },
  { 
    title: "D1ckDAO", 
    category: "AI Researcher", 
    year: "Aug 2025 - Present",
    slug: "d1ckdao",
    image: d1ckdaoCover,
    isPresent: true
  },
  { 
    title: "GRVT", 
    category: "Consultant", 
    year: "Jul 2025 - Present",
    slug: "grvt-exchange",
    image: grvtCover,
    isPresent: true
  },
  { 
    title: "Talus Labs", 
    category: "Regional Lead", 
    year: "Apr 2025 - Present",
    slug: "talus-labs",
    image: talusThumbnail,
    isLogo: true,
    logoStyle: 'talus',
    isPresent: true
  },
  { 
    title: "AIAT", 
    category: "AI Researcher", 
    year: "Sep 2020 - Dec 2024",
    slug: "aiat",
    image: aiatCover
  },
  { 
    title: "Srichand United Dispensary", 
    category: "Data Scientist", 
    year: "Mar 2021 - Aug 2021",
    slug: "srichand",
    image: srichandCover
  },
  { 
    title: "Thailand e-Business Centre", 
    category: "Digital Marketing Analyst", 
    year: "Aug 2020 - Sep 2020",
    slug: "tec",
    image: tecCover
  },
  { 
    title: "Forest Restoration Research Unit", 
    category: "Volunteer", 
    year: "Jan 2019 - Jan 2020",
    slug: "forest-restoration",
    image: forruCover,
    isLogo: true,
    logoStyle: 'forru'
  },
  { 
    title: "Mahidol University", 
    category: "Lead Researcher & Data Analyst", 
    year: "Aug 2016 - Aug 2020",
    slug: "mahidol-university",
    image: mahidolCover,
    isLogo: true,
    logoStyle: 'mahidol'
  }
];

export function FeaturesSection() {
  return (
    <section id="experience" className="bg-background px-6 md:px-12 py-24 lg:py-32">
      <div className="max-w-4xl mx-auto">
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

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-border" />
          
          {/* Timeline Items */}
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-0 md:left-8 top-3 -translate-x-1/2 w-3 h-3 rounded-full border-2 ${
                  exp.isPresent 
                    ? 'bg-primary border-primary shadow-[0_0_12px_rgba(var(--primary),0.5)]' 
                    : 'bg-background border-muted-foreground/50'
                }`} />
                
                {/* Card */}
                <Link to={`/experience/${exp.slug}`} className="group block">
                  <div className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-border hover:bg-muted/30 transition-all duration-300">
                    {/* Thumbnail */}
                    <div className={`relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-lg overflow-hidden ${
                      exp.logoStyle === 'forru' 
                        ? 'bg-gradient-to-br from-emerald-50 to-green-100 p-2' 
                        : exp.logoStyle === 'mahidol'
                        ? 'bg-gradient-to-br from-slate-50 to-blue-50 p-2'
                        : exp.logoStyle === 'talus'
                        ? 'bg-gradient-to-br from-orange-50 to-amber-100 p-2'
                        : ''
                    }`}>
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className={`${
                          exp.isLogo 
                            ? 'w-full h-full object-contain' 
                            : 'w-full h-full object-cover'
                        } grayscale group-hover:grayscale-0 transition-all duration-500`}
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                            {exp.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{exp.category}</p>
                        </div>
                        
                        {/* Arrow */}
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4 text-foreground" />
                        </div>
                      </div>
                      
                      {/* Date Badge */}
                      <div className="flex items-center gap-1.5 mt-2">
                        <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className={`text-xs font-mono ${exp.isPresent ? 'text-primary' : 'text-muted-foreground'}`}>
                          {exp.year}
                        </span>
                        {exp.isPresent && (
                          <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-medium bg-primary/10 text-primary rounded">
                            Active
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
