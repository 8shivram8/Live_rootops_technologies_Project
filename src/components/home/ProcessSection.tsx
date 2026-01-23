import { Search, Palette, Code, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "We understand your goals, challenges, and requirements.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "We architect solutions tailored to your needs.",
  },
  {
    icon: Code,
    title: "Build",
    description: "We develop with best practices and clean code.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "We launch with zero-downtime deployments.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description: "We optimize and scale as you grow.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground">
            A proven process that delivers results, every time.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                {/* Step Number */}
                <div className="relative z-10 w-16 h-16 mx-auto rounded-full bg-card border-2 border-primary flex items-center justify-center mb-4 glow-effect">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
