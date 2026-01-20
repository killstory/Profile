import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const experienceDetails: Record<string, {
  title: string;
  role: string;
  year: string;
  image: string;
  description: string;
  responsibilities: string[];
}> = {
  "ams-fund": {
    title: "AMS Fund",
    role: "Chief Investment Officer",
    year: "2025",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2670&auto=format&fit=crop",
    description: "Leading investment strategies and portfolio management for a multi-asset fund focused on emerging technologies and digital assets.",
    responsibilities: [
      "Develop and execute investment strategies across multiple asset classes",
      "Lead due diligence processes for potential investments",
      "Manage portfolio risk and optimize asset allocation",
      "Build relationships with institutional investors and stakeholders",
      "Oversee fund performance and reporting"
    ]
  },
  "spectre-labs": {
    title: "Spectre Labs",
    role: "Co-Founder",
    year: "2025",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2532&auto=format&fit=crop",
    description: "Co-founded a cutting-edge research lab focusing on AI and blockchain technology integration.",
    responsibilities: [
      "Define company vision and strategic direction",
      "Lead research initiatives in AI and decentralized systems",
      "Build and manage a team of researchers and engineers",
      "Secure partnerships and funding for research projects",
      "Publish research findings and represent the lab at conferences"
    ]
  },
  "grvt-exchange": {
    title: "GRVT Exchange",
    role: "Consultant & Regional Lead",
    year: "2025",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=2532&auto=format&fit=crop",
    description: "Providing strategic consulting and leading regional expansion for a next-generation derivatives exchange.",
    responsibilities: [
      "Develop go-to-market strategies for the Southeast Asian region",
      "Build and nurture relationships with key stakeholders and partners",
      "Advise on product development and market positioning",
      "Lead regional team and coordinate with global headquarters",
      "Drive user acquisition and community growth initiatives"
    ]
  },
  "talus-labs": {
    title: "Talus Labs",
    role: "Regional Lead",
    year: "2025",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
    description: "Leading regional operations for an AI infrastructure company building decentralized AI solutions.",
    responsibilities: [
      "Manage regional partnerships and business development",
      "Coordinate with research teams on AI model development",
      "Represent the company at industry events and conferences",
      "Build developer communities and ecosystem partnerships",
      "Drive adoption of decentralized AI solutions in the region"
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
            <span className="text-primary font-mono text-sm mb-4 block">{experience.year}</span>
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
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-6">Key Responsibilities</h2>
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
        </motion.div>
      </div>
    </div>
  );
}
