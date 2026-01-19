import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { name: "Twitter", href: "https://x.com/killstoryyy", icon: FaTwitter },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/paramet-moonkaew", icon: FaLinkedin },
  { name: "GitHub", href: "https://github.com/killstory", icon: FaGithub },
];

export function Footer() {
  return (
    <footer className="bg-background text-foreground px-6 md:px-12 pt-24 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-[15vw] lg:text-[10rem] font-bold tracking-tighter leading-none text-muted/30 select-none">
              MET
            </h2>
          </div>
          <div className="flex flex-col justify-end items-start lg:items-end">
            <h3 className="text-4xl md:text-5xl font-medium mb-8 max-w-lg text-left lg:text-right">
              Let's build something amazing together.
            </h3>
            <a
              href="mailto:paramet.moon@gmail.com"
              className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg overflow-hidden lime-glow"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-foreground transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 pb-16 border-b border-border">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Email</p>
              <a href="mailto:paramet.moon@gmail.com" className="text-foreground hover:text-primary transition-colors">
                paramet.moon@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Phone</p>
              <a href="tel:+66819841878" className="text-foreground hover:text-primary transition-colors">
                +66 81 984 1878
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Location</p>
              <p className="text-foreground">Bangkok, Thailand</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary-foreground hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <span className="sr-only">{social.name}</span>
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="text-muted-foreground text-sm font-mono">
            © 2025 Paramet Moonkaew
            <br />
            <span className="text-xs">CIO • Blockchain Consultant • AI Researcher</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
