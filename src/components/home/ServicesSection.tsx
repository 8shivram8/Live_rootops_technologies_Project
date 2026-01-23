import { Cloud, Cog, Database, Globe, Lock, Zap } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "AWS, GCP, Azure deployment and management with Infrastructure as Code.",
  },
  {
    icon: Cog,
    title: "DevOps & Automation",
    description: "CI/CD pipelines, containerization, and automated workflows.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "ETL pipelines, data warehousing, and real-time analytics.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Full-stack applications with modern frameworks and best practices.",
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description: "Security audits, compliance implementation, and monitoring.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed optimization, caching strategies, and scalability solutions.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="text-muted-foreground">
            Comprehensive services to power your digital transformation journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-2xl p-6 card-hover"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
