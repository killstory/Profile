import { ArrowUpRight } from "lucide-react";
import { FaXTwitter, FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa6";
const socials = [{
  name: "LinkedIn",
  href: "https://www.linkedin.com/in/paramet-moonkaew",
  icon: FaLinkedin
}, {
  name: "X",
  href: "https://x.com/killstoryyy",
  icon: FaXTwitter
}, {
  name: "Telegram",
  href: "http://t.me/killstory789",
  icon: FaTelegram
}, {
  name: "WhatsApp",
  href: "https://wa.link/eo3n58",
  icon: FaWhatsapp
}, {
  name: "GitHub",
  href: "https://github.com/killstory",
  icon: FaGithub
}];
export function Footer() {
  return <footer id="contact" className="bg-background text-foreground px-6 md:px-12 pt-24 lg:pt-32 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Combined CTA + Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left: CTA */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[0.95] tracking-tight mb-8">
              Let's build
              <br />
              <span className="text-primary">something amazing</span>
              <br />
              together.
            </h2>
            <a href="mailto:paramet.moon@gmail.com" className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:brightness-110 transition-all cursor-scale">
              Get in Touch
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </a>
          </div>

          {/* Right: Connect + Contact */}
          <div className="flex flex-col justify-center">
            {/* Contact Info */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">
                Contact
              </h3>
              <div className="space-y-4">
                <a href="mailto:paramet.moon@gmail.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors cursor-scale group text-lg">
                  <span className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                  <span>paramet.moon@gmail.com</span>
                </a>
                <a href="tel:+66819841878" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors cursor-scale group text-lg">
                  <span className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                  <span>+66 81 984 1878</span>
                </a>
                <div className="flex items-center gap-4 text-muted-foreground text-lg">
                  <span className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center">
                    <span className="text-sm">📍</span>
                  </span>
                  <span>Thailand</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">
                Connect
              </h3>
              <div className="flex flex-wrap gap-3">
                {socials.map(social => <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-5 py-3 bg-muted/50 hover:bg-primary hover:text-primary-foreground rounded-full transition-all cursor-scale">
                    <social.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>)}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Paramet.</h3>
            <p className="text-muted-foreground text-sm max-w-md">
              Strategic capital management and Web3 advisory.
            </p>
          </div>
          <p className="text-muted-foreground text-sm">© 2025 Paramet Moonkaew. All rights reserved.</p>
        </div>
      </div>
    </footer>;
}