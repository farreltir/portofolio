import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { FaSpotify } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              <span className="text-primary">FARREL</span>
              <span className="text-primary opacity-70">.</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Designing and developing exceptional digital experiences that are
              aesthetically beautiful, functionally intuitive, and technically
              innovative.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.links.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <FaSpotify className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Navigation
            </h3>
            <nav className="flex flex-col space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
              Contact
            </h3>
            <address className="not-italic">
              <p className="text-sm text-muted-foreground">South Tangerang</p>
              <p className="text-sm text-muted-foreground mt-1">Indonesia</p>
              <a className="block text-sm text-primary hover:underline mt-3">
                {SITE_CONFIG.url.replace("https://", "")}
              </a>
            </address>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
