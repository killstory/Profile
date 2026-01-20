import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const experiences = [
  { 
    title: "AMS Fund", 
    category: "Chief Investment Officer", 
    year: "2025",
    slug: "ams-fund",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2670&auto=format&fit=crop"
  },
  { 
    title: "Spectre Labs", 
    category: "Co-Founder", 
    year: "2025",
    slug: "spectre-labs",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2532&auto=format&fit=crop"
  },
  { 
    title: "GRVT Exchange", 
    category: "Consultant & Regional Lead", 
    year: "2025",
    slug: "grvt-exchange",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=2532&auto=format&fit=crop"
  },
  { 
    title: "Talus Labs", 
    category: "Regional Lead", 
    year: "2025",
    slug: "talus-labs",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop"
  }
];

export function FeaturesSection() {
  return (
    <section id="experience" className="bg-background px-6 md:px-12 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-foreground tracking-tighter leading-[0.9]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Latest Experience.
          </motion.h2>
          <span className="text-muted-foreground font-mono text-sm">( _04 )</span>
        </div>

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
