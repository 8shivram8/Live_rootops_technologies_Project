import { Cloud, Cog, Database, Globe, Lock, Zap, Check } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    overview: "Cloud architecture, deployment, and scalability solutions",
    features: ["Infrastructure as Code (IaC)", "Multi-cloud support", "Cost optimization", "Disaster recovery"],
    tools: ["AWS", "Azure", "GCP", "Terraform"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cog,
    title: "DevOps & Automation",
    overview: "CI/CD and automated delivery pipelines",
    features: ["CI/CD pipelines", "Containerization", "Monitoring & alerts", "Workflow automation"],
    tools: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Database,
    title: "Data Engineering",
    overview: "Reliable data pipelines and real-time analytics",
    features: ["ETL pipelines", "Data warehousing", "Real-time processing", "Analytics"],
    tools: ["Airflow", "Spark", "Snowflake", "Kafka"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Web Development",
    overview: "Full-stack, scalable web applications",
    features: ["RESTful APIs", "Responsive UI", "Authentication", "Database design"],
    tools: ["React", "Next.js", "Node.js", "PostgreSQL"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    overview: "Secure systems and compliance readiness",
    features: ["Security audits", "IAM implementation", "Monitoring", "Compliance standards"],
    tools: ["WAF", "IAM", "SIEM", "Vault"],
    gradient: "from-red-500 to-rose-500",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    overview: "Speed, scalability, and efficiency",
    features: ["Caching strategies", "Load testing", "Auto-scaling", "CDN optimization"],
    tools: ["Redis", "CDN", "APM tools", "Lighthouse"],
    gradient: "from-yellow-500 to-amber-500",
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
              className="group relative bg-card border border-border rounded-2xl p-6 card-hover overflow-hidden"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s backwards`,
              }}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon with Gradient */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}
                  style={{
                    animation: `hoverBounce 0.6s ease-out ${index * 0.1}s backwards`,
                  }}
                >
                  <service.icon className="h-7 w-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Overview */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed font-medium">
                  {service.overview}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{
                        animation: `slideInLeft 0.4s ease-out ${0.2 + idx * 0.08}s backwards`,
                      }}
                    >
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tools/Technologies */}
                <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      className={`inline-block text-xs px-2.5 py-1 rounded-lg bg-gradient-to-r ${service.gradient} text-white font-medium`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hoverBounce {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
