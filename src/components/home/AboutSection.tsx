import { Target, Users, Lightbulb, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Every project aligns with your business goals.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We work as an extension of your team.",
  },
  {
    icon: Lightbulb,
    title: "Innovative",
    description: "Cutting-edge solutions for modern challenges.",
  },
  {
    icon: Shield,
    title: "Reliable",
    description: "99.9% uptime and enterprise-grade security.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About <span className="gradient-text">RootOps</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              RootOps Technologies is a next-generation technology company focused on building scalable, reliable, and intelligent digital infrastructure for modern businesses.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We combine deep technical expertise with a product-first mindset to deliver solutions that not only work but excel. From startups to enterprises, we've helped organizations transform their digital capabilities.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-xs text-muted-foreground">Industries</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-xs text-muted-foreground">Reliability</div>
              </div>
            </div>
          </div>

          {/* Right - Values Grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card border border-border rounded-2xl p-6 card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
