import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";

const experienceDetails: Record<string, {
  title: string;
  role: string;
  period: string;
  location: string;
  image: string;
  description: string;
  responsibilities: string[];
  links?: { label: string; url: string }[];
}> = {
  "ams-fund": {
    title: "AMS FUND",
    role: "Chief Investment Officer",
    period: "August 2025 - Present",
    location: "Thailand",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2670&auto=format&fit=crop",
    description: "AMS Fund is a private investment fund operated by our family office.",
    responsibilities: [
      "Oversee strategic fund management operations, delivering consistent and risk adjusted performance in decentralized finance markets.",
      "Lead capital allocation across yield stablecoin farming, liquidity provisioning, and protocol revenue share models to maximize capital efficiency.",
      "Establish robust risk management governance and systematic hedging mechanisms to safeguard principal and ensure operational resilience.",
      "Committed to driving innovation, transparency, and institutional standards within the evolving global DeFi and digital asset ecosystem."
    ],
    links: [
      { label: "AMS Fund Deck", url: "https://www.canva.com/design/DAG3iZln6OE/9YPMKWfTUHgAYFYr0GMYfQ/edit?utm_content=DAG3iZln6OE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" }
    ]
  },
  "spectre-labs": {
    title: "Spectre Labs",
    role: "Co-Founder",
    period: "August 2025 - Present",
    location: "Thailand",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2532&auto=format&fit=crop",
    description: "Spectre Labs is a Thai growth agency for Blockchain projects. We provide both front-end and back-end solutions. We've already delivered results for multiple projects, connecting them with over 50% of Thailand's Crypto KOLs and building communities, content, and tools that drive meaningful growth.",
    responsibilities: [
      "Launched the GRVT Thailand Trading Competition, achieving 300+ registered traders and $1.84 Billions trading volume.",
      "Hosted GRVT IRL meetup with 30 KOLs and collaborated with 5 of them to generate 30,000+ impressions across both crypto-newbie and crypto-native audiences.",
      "Supported Paradex \"Pass Tap\" Affiliate Program covering 50 KOLs and 1st Thailand representative. Organized face-to-face meetings with 20 KOLs and helped maintain $100 Millions committed trading volume per month.",
      "For Bio Protocol, led Thailand narrative and social momentum during TGE and optimized paid KOL targeting across crypto natives, newbies, and airdrop hunters. Delivered 30,000+ impressions and 300+ engagements with a balanced mix of audience segments."
    ],
    links: [
      { label: "Spectre Labs Deck", url: "https://www.canva.com/design/DAG44P2Vf7g/38DlVjhhgOLMKVW9UQvkjg/edit?utm_content=DAG44P2Vf7g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" }
    ]
  },
  "grvt-exchange": {
    title: "GRVT",
    role: "Consultant",
    period: "July 2025 - Present",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=2532&auto=format&fit=crop",
    description: "GRVT is the world's first compliant peer-to-peer onchain investment marketplace.",
    responsibilities: [
      "Regional leader of GRVT Thailand Community",
      "Increase GRVT's Thailand trading volume to $1.84 Billions through Trading Campaign.",
      "Boost brand visibility with the first ever GRVT E-Sport Trading Competition.",
      "Expand the platform's user base in Thailand."
    ]
  },
  "talus-labs": {
    title: "Talus Labs, Inc.",
    role: "Regional Lead",
    period: "April 2025 - Present",
    location: "United States",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
    description: "Talus Labs is the premier AI infra network powering AI Agents that compete and earn.",
    responsibilities: [
      "Lead Talus Thailand community",
      "Organized and executed the Talus Thailand IRL event"
    ]
  },
  "d1ckdao": {
    title: "D1ckDAO",
    role: "AI Researcher",
    period: "August 2025 - Present",
    location: "Thailand",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2670&auto=format&fit=crop",
    description: "D1ckDAO is a DeSci community fixing men's sexual health — focusing on D1ck problems; ED, low testosterone, male infertility, and foreskin restoration and more.",
    responsibilities: [
      "Conduct AI research for health-related data analysis",
      "Develop machine learning models for health insights",
      "Contribute to decentralized science (DeSci) initiatives"
    ]
  },
  "aiat": {
    title: "Artificial Intelligence Association of Thailand",
    role: "AI Researcher",
    period: "September 2020 - December 2024",
    location: "Thailand",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2670&auto=format&fit=crop",
    description: "Working as a Super AI Engineer (AIAT), tackling challenges across various industries and business sectors.",
    responsibilities: [
      "Artificial Intelligence (AI) research and development",
      "Data Science projects across multiple industries",
      "Document OCR implementation and optimization",
      "Time Series forecast modeling",
      "Object detection systems development",
      "Point cloud data processing",
      "NLP (Text classification) applications"
    ]
  },
  "mahidol-university": {
    title: "Mahidol University",
    role: "Lead Researcher & Data Analyst",
    period: "August 2016 - August 2020",
    location: "Thailand",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop",
    description: "Led research initiatives and data analysis at one of Thailand's premier research universities, contributing to botanical science publications.",
    responsibilities: [
      "Lead research projects in plant biology and genetics",
      "Conduct cytogenetic analysis and pollen identification studies",
      "Published study on cytogenetics and pollen identification of the genus Gagnepainia (Zingiberaceae) in Thailand",
      "Data analysis and statistical modeling for research findings",
      "Collaborate with international research communities"
    ]
  },
  "tec": {
    title: "Thailand e-Business Centre (TeC)",
    role: "Digital Marketing Analyst",
    period: "August 2020 - September 2020",
    location: "Thailand",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2670&auto=format&fit=crop",
    description: "Digital Marketing Analytics and Optimization program at Thailand e-Business Centre.",
    responsibilities: [
      "Analyze digital marketing performance metrics",
      "Optimize marketing campaigns based on data insights",
      "Develop marketing analytics frameworks",
      "Create data-driven marketing strategies"
    ]
  },
  "forest-restoration": {
    title: "Forest Restoration Unit",
    role: "Volunteer",
    period: "January 2019 - January 2020",
    location: "Doi-Suthep, Thailand",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2670&auto=format&fit=crop",
    description: "Volunteer staff at Forest Restoration Unit in Doi-Suthep: Seedling Nursery, contributing to environmental conservation efforts.",
    responsibilities: [
      "Support seedling nursery operations",
      "Participate in forest restoration activities",
      "Assist with environmental conservation programs",
      "Contribute to sustainable reforestation initiatives"
    ]
  },
  "srichand": {
    title: "Srichand United Dispensary Co.,Ltd.",
    role: "Data Scientist",
    period: "March 2021 - August 2021",
    location: "Thailand",
    image: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?q=80&w=2670&auto=format&fit=crop",
    description: "Contract position focusing on building recommendation systems for e-commerce platforms in the beauty industry.",
    responsibilities: [
      "Research and implement the recommendation systems on 1948Beauty.com",
      "Apply Artificial Intelligence (AI) and Data Science techniques",
      "Develop recommender systems for E-Commerce platform",
      "Conduct research to optimize product recommendations"
    ]
  }
};

export default function ExperienceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const experience = slug ? experienceDetails[slug] : null;

  if (!experience) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Experience not found</h1>
          <Link to="/" className="text-primary hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/#experience"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </Link>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        className="relative h-[50vh] md:h-[60vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={experience.image}
          alt={experience.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 -mt-32 relative z-10 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-primary font-mono text-sm">{experience.period}</span>
              <span className="text-muted-foreground text-sm">•</span>
              <span className="text-muted-foreground text-sm">{experience.location}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tighter mb-4">
              {experience.title}
            </h1>
            <p className="text-2xl text-muted-foreground">{experience.role}</p>
          </div>

          {/* Description */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {experience.description}
            </p>
          </div>

          {/* Responsibilities */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-6">Key Responsibilities & Achievements</h2>
            <ul className="space-y-4">
              {experience.responsibilities.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-4 text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                >
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Links */}
          {experience.links && experience.links.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <h2 className="text-xl font-semibold text-foreground mb-6">Resources</h2>
              <div className="flex flex-wrap gap-4">
                {experience.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-6 py-4 bg-muted/50 hover:bg-primary/10 border border-border hover:border-primary/50 rounded-xl transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5 text-primary" />
                    <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
