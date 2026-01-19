import { ArrowRight, Share2 } from "lucide-react";

const links = ["Privacy Policy", "Terms of Service", "Cookie Settings"];
const socials = ["Twitter", "GitHub", "LinkedIn", "Dribbble"];

export function Footer() {
  return (
    <footer className="bg-background text-foreground px-6 md:px-12 pt-24 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-[15vw] lg:text-[10rem] font-bold tracking-tighter leading-none text-muted/30 select-none">
              SUPER
            </h2>
          </div>
          <div className="flex flex-col justify-end items-start lg:items-end">
            <h3 className="text-4xl md:text-5xl font-medium mb-8 max-w-lg text-left lg:text-right">
              Ready to start your next project?
            </h3>
            <button className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg overflow-hidden lime-glow">
              <span className="relative z-10 flex items-center gap-2">
                Create Free Account
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-foreground transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </div>

        <div className="border-t border-border pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
            {links.map((link) => (
              <a key={link} href="#" className="hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary-foreground hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <span className="sr-only">{social}</span>
                <Share2 className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="text-muted-foreground text-xs font-mono">
            © 2024 SUPERDESIGN INC.
            <br />
            SAN FRANCISCO, CA
          </div>
        </div>
      </div>
    </footer>
  );
}
