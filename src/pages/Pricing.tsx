import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "₹4,999",
    period: "/month",
    description: "Perfect for small projects and startups",
    features: [
      "Up to 2 projects",
      "Basic cloud setup",
      "Email support",
      "5 hours consultation",
      "Basic monitoring",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "₹14,999",
    period: "/month",
    description: "Best for growing businesses",
    features: [
      "Up to 10 projects",
      "Advanced cloud infrastructure",
      "Priority support",
      "20 hours consultation",
      "Advanced monitoring & alerts",
      "CI/CD pipeline setup",
    ],
    popular: true,
    cta: "Get Started",
  },
  {
    name: "Custom",
    price: "Custom",
    period: "",
    description: "For enterprise-scale requirements",
    features: [
      "Unlimited projects",
      "Dedicated infrastructure",
      "24/7 dedicated support",
      "Unlimited consultation",
      "Custom monitoring solutions",
      "Full DevOps team access",
    ],
    popular: false,
    cta: "Request a Quote",
  },
];

const Pricing = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your needs. All plans include our core features.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-card border rounded-2xl p-8 card-hover ${
                  plan.popular ? "border-primary" : "border-border"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-sm font-medium text-primary-foreground">
                      <Star className="h-4 w-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  asChild
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-secondary hover:bg-secondary/80 text-foreground"
                  }`}
                >
                  <Link to="/contact">
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-2">Not sure which plan?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss your requirements and find the perfect solution for your business.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/contact">Schedule a Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
