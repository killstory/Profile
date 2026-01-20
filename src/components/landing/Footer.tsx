import { ArrowUpRight } from "lucide-react";
import { FaXTwitter, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa6";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/paramet-moonkaew",
    icon: FaLinkedin
  },
  {
    name: "X",
    href: "https://x.com/killstoryyy",
    icon: FaXTwitter
  },
  {
    name: "GitHub",
    href: "https://github.com/killstory",
    icon: FaGithub
  },
  {
    name: "Telegram",
    href: "http://t.me/killstory789",
    icon: FaTelegram
  }
];

export function Footer() {
  return (
    <footer id="contact" className="bg-background text-foreground px-6 md:px-12 pt-24 lg:pt-32 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section - Hero Style */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.9] tracking-tight mb-8">
            Let's build
            <br />
            <span className="text-primary">something amazing</span>
            <br />
            together.
          </h2>
          <a
            href="mailto:paramet.moon@gmail.com"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold text-xl hover:brightness-110 transition-all cursor-scale"
          >
            Get in Touch
            <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border mb-16" />

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-4">Paramet.</h3>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Strategic capital management and Web3 advisory. Specializing in fund operations, DeFi, and AI research.
            </p>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              Connect
            </h3>
            <ul className="space-y-4">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors flex items-center gap-3 group cursor-scale"
                  >
                    <social.icon className="w-5 h-5" />
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:paramet.moon@gmail.com"
                  className="text-foreground hover:text-primary transition-colors cursor-scale"
                >
                  paramet.moon@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+66819841878"
                  className="text-foreground hover:text-primary transition-colors cursor-scale"
                >
                  +66 81 984 1878
                </a>
              </li>
              <li className="text-muted-foreground">Thailand</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-muted-foreground text-sm pt-8 border-t border-border">
          <p>© 2025 Paramet Moonkaew. All rights reserved.</p>
          <p>Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
}