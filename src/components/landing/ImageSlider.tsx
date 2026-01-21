import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Import all gallery images
import d1ckdaoDesciSummit from '@/assets/d1ckdao-desci-summit.jpeg';
import d1ckdaoDesciUncorked from '@/assets/d1ckdao-desci-uncorked.jpeg';

import aiatTeam from '@/assets/aiat-team.jpg';
import grvtIrlMeetup from '@/assets/grvt-irl-meetup.png';
import grvtEsportCompetition from '@/assets/grvt-esport-competition.jpeg';
import talusSuifestTeam from '@/assets/talus-suifest-team.jpeg';
import talusSuiSeasonMeetup from '@/assets/talus-sui-season-meetup.jpeg';

import mahidolPlenaryAward from '@/assets/mahidol-plenary-award.png';
import mahidolTurfpagAward from '@/assets/mahidol-turfpag-award.png';
import mahidolSingaporeAward from '@/assets/mahidol-singapore-award.png';
import forruVolunteer1 from '@/assets/forru-volunteer-1.jpg';
import forruVolunteer2 from '@/assets/forru-volunteer-2.jpg';
import forruVolunteer3 from '@/assets/forru-volunteer-3.jpg';

// All gallery images from experiences (no cover/thumbnails)
const galleryItems = [
  // D1ckDAO
  { image: d1ckdaoDesciSummit, caption: "D1ckDAO Team in DeSci Summit", slug: "d1ckdao" },
  { image: d1ckdaoDesciUncorked, caption: "The DeSci UNCORKED Event", slug: "d1ckdao" },
  // GRVT
  { image: grvtIrlMeetup, caption: "GRVT IRL Meetup Thailand", slug: "grvt-exchange" },
  { image: grvtEsportCompetition, caption: "GRVT E-Sport Trading Competition", slug: "grvt-exchange" },
  // Talus
  { image: talusSuifestTeam, caption: "Talus Thailand Team in Suifest", slug: "talus-labs" },
  { image: talusSuiSeasonMeetup, caption: "Talus Thailand in Sui Season Meetup", slug: "talus-labs" },
  // AIAT
  { image: aiatTeam, caption: "My Super AI Engineer Team", slug: "aiat" },
  // Mahidol
  { image: mahidolPlenaryAward, caption: "Plenary Lecture Award", slug: "mahidol-university" },
  { image: mahidolSingaporeAward, caption: "Singapore Symposium Award", slug: "mahidol-university" },
  { image: mahidolTurfpagAward, caption: "TURFPaG 1st Place Award", slug: "mahidol-university" },
  // FORRU
  { image: forruVolunteer1, caption: "Volunteer staff at FORRU", slug: "forest-restoration" },
  { image: forruVolunteer2, caption: "Volunteer staff at FORRU", slug: "forest-restoration" },
  { image: forruVolunteer3, caption: "Volunteer staff at FORRU", slug: "forest-restoration" },
];

export const ImageSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Triple duplicate for seamless loop
  const duplicatedItems = [...galleryItems, ...galleryItems, ...galleryItems];

  return (
    <div className="w-full py-12 overflow-hidden bg-background border-y border-border">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .slider-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="slider-container">
        <div className="flex animate-marquee" style={{ width: 'fit-content' }}>
          {duplicatedItems.map((item, i) => (
            <Link
              key={`gallery-${i}`}
              to={`/experience/${item.slug}`}
              className="flex-shrink-0 w-[280px] md:w-[350px] h-[180px] md:h-[240px] mx-2 cursor-scale block"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                />
                
                {/* Gradient overlay for caption readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                
                {/* Caption on hover */}
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute bottom-0 left-0 right-0 p-4"
                    >
                      <p className="text-foreground font-medium text-sm md:text-base">
                        {item.caption}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
