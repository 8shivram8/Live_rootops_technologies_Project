import { Link } from "react-router-dom";
import { Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">R</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                RootOps<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building scalable, reliable, and intelligent digital infrastructure for modern businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Products", path: "/products" },
                { name: "Pricing", path: "/pricing" },
                { name: "Careers", path: "/careers" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold">Services</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>Cloud Infrastructure</li>
              <li>DevOps & Automation</li>
              <li>Data Engineering</li>
              <li>Backend Development</li>
              <li>Frontend Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@rootops.tech</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>India</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span>Mon - Fri: 9AM - 6PM IST</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} RootOps Technologies. All rights reserved.
            </p>
            <span className="hidden md:inline text-muted-foreground">•</span>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Made with <span className="text-red-500 animate-pulse">❤️</span> in India 🇮🇳
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
