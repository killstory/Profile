import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
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
const experiences: Experience[] = [{
  title: "AMS Fund",
  category: "Chief Investment Officer",
  year: "Aug 2025 - Present",
  slug: "ams-fund",
  image: amsFundCover,
  isPresent: true
}, {
  title: "Spectre Labs",
  category: "Co-Founder",
  year: "Aug 2025 - Present",
  slug: "spectre-labs",
  image: spectreLabsCover,
  isPresent: true
}, {
  title: "D1ckDAO",
  category: "AI Researcher",
  year: "Aug 2025 - Present",
  slug: "d1ckdao",
  image: d1ckdaoCover,
  isPresent: true
}, {
  title: "GRVT",
  category: "Consultant",
  year: "Jul 2025 - Present",
  slug: "grvt-exchange",
  image: grvtCover,
  isPresent: true
}, {
  title: "Talus Labs",
  category: "Regional Lead",
  year: "Apr 2025 - Present",
  slug: "talus-labs",
  image: talusThumbnail,
  isLogo: true,
  logoStyle: 'talus',
  isPresent: true
}, {
  title: "AIAT",
  category: "AI Researcher",
  year: "Sep 2020 - Dec 2024",
  slug: "aiat",
  image: aiatCover
}, {
  title: "Srichand United Dispensary",
  category: "Data Scientist",
  year: "Mar 2021 - Aug 2021",
  slug: "srichand",
  image: srichandCover
}, {
  title: "Thailand e-Business Centre",
  category: "Digital Marketing Analyst",
  year: "Aug 2020 - Sep 2020",
  slug: "tec",
  image: tecCover
}, {
  title: "Forest Restoration Research Unit",
  category: "Volunteer",
  year: "Jan 2019 - Jan 2020",
  slug: "forest-restoration",
  image: forruCover,
  isLogo: true,
  logoStyle: 'forru'
}, {
  title: "Mahidol University",
  category: "Lead Researcher & Data Analyst",
  year: "Aug 2016 - Aug 2020",
  slug: "mahidol-university",
  image: mahidolCover,
  isLogo: true,
  logoStyle: 'mahidol'
}];
export function FeaturesSection() {
  return <section id="experience" className="bg-background px-6 md:px-12 py-24 lg:py-32">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.h2 className="text-5xl md:text-7xl font-bold text-foreground tracking-tighter mb-16" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-border" />
          
          {/* Timeline Items */}
          <div className="space-y-6">
            {experiences.map((exp, i) => <motion.div key={exp.title} initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: i * 0.05,
            duration: 0.4
          }} className="relative pl-12 md:pl-28">
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-12 top-6 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${exp.isPresent ? 'bg-primary border-primary shadow-[0_0_16px_rgba(var(--primary),0.6)]' : 'bg-background border-muted-foreground/40'}`} />
                
                {/* Card */}
                <Link to={`/experience/${exp.slug}`} className="group block">
                  <div className="flex items-center gap-5 md:gap-6 p-5 md:p-6 rounded-2xl border border-transparent hover:border-border hover:bg-muted/30 transition-all duration-300">
                    {/* Thumbnail */}
                    <div className={`relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-xl overflow-hidden shadow-md ${exp.logoStyle === 'forru' ? 'bg-gradient-to-br from-emerald-50 to-green-100 p-3' : exp.logoStyle === 'mahidol' ? 'bg-gradient-to-br from-slate-50 to-blue-50 p-3' : exp.logoStyle === 'talus' ? 'bg-gradient-to-br from-orange-50 to-amber-100 p-3' : ''}`}>
                      <img src={exp.image} alt={exp.title} className={`${exp.isLogo ? 'w-full h-full object-contain' : 'w-full h-full object-cover'} grayscale group-hover:grayscale-0 transition-all duration-500`} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-base md:text-lg text-muted-foreground mt-1">{exp.category}</p>
                        </div>
                        
                        {/* Arrow */}
                        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                          <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
                        </div>
                      </div>
                      
                      {/* Date Badge */}
                      <div className="flex items-center gap-2 mt-3">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className={`text-sm font-mono ${exp.isPresent ? 'text-primary' : 'text-muted-foreground'}`}>
                          {exp.year}
                        </span>
                        {exp.isPresent && <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-md">
                            Active
                          </span>}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}