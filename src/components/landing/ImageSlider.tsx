import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

// Use same experiences data as FeaturesSection
const experiences = [
  { 
    title: "AMS Fund", 
    category: "Chief Investment Officer", 
    year: "Aug 2025 - Present",
    slug: "ams-fund",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2670&auto=format&fit=crop"
  },
  { 
    title: "Spectre Labs", 
    category: "Co-Founder", 
    year: "Aug 2025 - Present",
    slug: "spectre-labs",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2532&auto=format&fit=crop"
  },
  { 
    title: "D1ckDAO", 
    category: "AI Researcher", 
    year: "Aug 2025 - Present",
    slug: "d1ckdao",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2670&auto=format&fit=crop"
  },
  { 
    title: "GRVT", 
    category: "Consultant", 
    year: "Jul 2025 - Present",
    slug: "grvt-exchange",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=2532&auto=format&fit=crop"
  },
  { 
    title: "Talus Labs", 
    category: "Regional Lead", 
    year: "Apr 2025 - Present",
    slug: "talus-labs",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop"
  },
  { 
    title: "AIAT", 
    category: "AI Researcher", 
    year: "Sep 2020 - Dec 2024",
    slug: "aiat",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2670&auto=format&fit=crop"
  }
];

export const ImageSlider = () => {
  // Duplicate for seamless loop
  const duplicatedExperiences = [...experiences, ...experiences];

  return (
    <div className="w-full py-16 overflow-hidden bg-background border-y border-border">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .slider-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="slider-container">
        <div className="flex animate-marquee">
          {duplicatedExperiences.map((exp, i) => (
            <Link
              key={`${exp.slug}-${i}`}
              to={`/experience/${exp.slug}`}
              className="flex-shrink-0 w-[320px] md:w-[400px] mx-3 group cursor-scale"
            >
              {/* Card matching FeaturesSection style */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                
                {/* Arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Present badge for current roles */}
                {exp.year.includes('Present') && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                    Active
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors truncate">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground truncate">{exp.category}</p>
                </div>
                <span className="text-muted-foreground font-mono text-xs whitespace-nowrap">
                  {exp.year.split(' - ')[0]}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;