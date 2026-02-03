import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Clock } from "lucide-react";

interface TimeRowProps {
  flagSrc: string;
  country: string;
  timezone: string;
  tzCode: string;
  timeZoneId: string;
}

const TimeRow: React.FC<TimeRowProps> = ({ flagSrc, country, timezone, tzCode, timeZoneId }) => {
  const [time, setTime] = useState<string>("--:--:--");

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: timeZoneId,
      });
      setTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timeZoneId]);

  const gradients = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-orange-500 to-red-500",
    "from-green-500 to-emerald-500",
  ];

  const gradientIndex = [
    "Asia/Kolkata",
    "Europe/London",
    "Asia/Dubai",
    "America/New_York",
  ].indexOf(timeZoneId);

  const gradient = gradients[Math.max(0, gradientIndex)];

  return (
    <div
      className="group flex items-center justify-between gap-3 px-4 py-3 rounded-lg hover:bg-primary/5 transition-colors"
      aria-label={`${country} time: ${time}`}
    >
      <div className="flex items-center gap-2 flex-1">
        <img 
          src={flagSrc} 
          alt={`${country} flag`}
          className="w-8 h-6 rounded object-cover"
        />
        <div className="flex flex-col gap-0.5">
          <span className="text-foreground font-semibold text-xs">{country}</span>
          <span className="text-muted-foreground text-[10px]">{timezone}</span>
        </div>
      </div>
      <div
        className="font-mono text-lg font-bold tracking-wider whitespace-nowrap"
        style={{
          backgroundImage: `linear-gradient(90deg, ${
            gradient === "from-blue-500 to-cyan-500"
              ? "#3b82f6, #a855f7, #06b6d4"
              : gradient === "from-purple-500 to-pink-500"
              ? "#a855f7, #ec4899, #f472b6"
              : gradient === "from-orange-500 to-red-500"
              ? "#f97316, #ef4444, #dc2626"
              : "#10b981, #059669, #047857"
          })`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textShadow: "0 0 15px rgba(59, 130, 246, 0.2)",
          animation: "gradientFlow 6s ease-in-out infinite",
        }}
      >
        {time}
      </div>
    </div>
  );
};

const WorldClock = () => {
  const timezones: TimeRowProps[] = [
    {
      flagSrc: "/flags/india.svg",
      country: "India",
      timezone: "IST",
      tzCode: "IST",
      timeZoneId: "Asia/Kolkata",
    },
    {
      flagSrc: "/flags/gb.svg",
      country: "United Kingdom",
      timezone: "GMT/BST",
      tzCode: "GMT",
      timeZoneId: "Europe/London",
    },
    {
      flagSrc: "/flags/uae.svg",
      country: "UAE",
      timezone: "GST",
      tzCode: "GST",
      timeZoneId: "Asia/Dubai",
    },
    {
      flagSrc: "/flags/us.svg",
      country: "United States",
      timezone: "ET",
      tzCode: "ET",
      timeZoneId: "America/New_York",
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-foreground font-semibold text-sm">Global Time</h4>
      <div className="space-y-1">
        {timezones.map((tz) => (
          <TimeRow key={tz.country} {...tz} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
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

          {/* Global Time Clock */}
          <div className="flex justify-center">
            <WorldClock />
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

      <style>{`
        @keyframes gradientFlow {
          0% {
            backgroundImage: linear-gradient(90deg, #3b82f6, #a855f7, #06b6d4);
          }
          50% {
            backgroundImage: linear-gradient(90deg, #06b6d4, #3b82f6, #a855f7);
          }
          100% {
            backgroundImage: linear-gradient(90deg, #3b82f6, #a855f7, #06b6d4);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          [style*="gradientFlow"] {
            animation: none !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
