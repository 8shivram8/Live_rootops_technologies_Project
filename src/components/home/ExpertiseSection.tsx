import { Code, Database, Server } from "lucide-react";

const expertiseCards = [
  {
    icon: Code,
    title: "Frontend Excellence",
    description: "Modern, responsive interfaces built with React, Next.js, and cutting-edge technologies.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Server,
    title: "Backend Mastery",
    description: "Robust APIs, microservices, and serverless architectures that scale effortlessly.",
    color: "from-primary to-purple-500",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "End-to-end data pipelines, analytics, and ML infrastructure for data-driven decisions.",
    color: "from-orange-500 to-red-500",
  },
];

const ExpertiseSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground">
            We bring deep technical expertise across the full stack, delivering solutions that are both powerful and elegant.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseCards.map((card, index) => (
            <div
              key={card.title}
              className="group relative bg-card border border-border rounded-2xl p-8 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect on Hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-6`}>
                  <card.icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
