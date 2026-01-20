import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { name: "Instagram", href: "https://instagram.com", icon: FaTwitter },
  { name: "Twitter", href: "https://x.com/killstoryyy", icon: FaTwitter },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/paramet-moonkaew", icon: FaLinkedin },
  { name: "GitHub", href: "https://github.com/killstory", icon: FaGithub },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-background text-foreground px-6 md:px-12 pt-24 lg:pt-32 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Brand */}
          <div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground mb-6">
              Paramet<span className="text-primary">®</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              CIO & AI Researcher specializing in DeFi, blockchain technology, and machine learning. 
              Based in Bangkok, working globally.
            </p>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Socials</h3>
            <ul className="space-y-3">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group cursor-scale"
                  >
                    {social.name}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:paramet.moon@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-scale"
                >
                  paramet.moon@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+66819841878"
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-scale"
                >
                  +66 81 984 1878
                </a>
              </li>
              <li className="text-muted-foreground">
                Bangkok, Thailand
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-border pt-12 mb-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground max-w-lg">
              Let's build something amazing together.
            </h3>
            <a
              href="mailto:paramet.moon@gmail.com"
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:brightness-110 transition-all flex items-center gap-2 cursor-scale"
            >
              Get in Touch
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-muted-foreground text-sm">
          <p>© 2025 Paramet Moonkaew. All rights reserved.</p>
          <p>Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
