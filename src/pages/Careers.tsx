import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Briefcase, Code, Heart, Shield, Lightbulb, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Code,
    title: "Engineering Excellence",
    description: "We take pride in writing clean, maintainable, and efficient code. Quality is never compromised.",
  },
  {
    icon: Heart,
    title: "Ownership",
    description: "Every team member owns their work end-to-end. We trust you to make the right decisions.",
  },
  {
    icon: Shield,
    title: "Transparency",
    description: "Open communication is at our core. We share knowledge, feedback, and challenges openly.",
  },
  {
    icon: Lightbulb,
    title: "Long-Term Thinking",
    description: "We build for the future, not just for today. Sustainable solutions over quick fixes.",
  },
];

const Careers = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
              <Briefcase className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary">Careers Coming Soon</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Join Us in Building the{" "}
              <span className="gradient-text">Future</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about technology 
              and want to make an impact. While we don't have open positions right now, 
              we'd love to hear from you.
            </p>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-muted-foreground">What drives us every day</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="bg-card border border-border rounded-2xl p-8 card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Interested in Joining?
            </h3>
            <p className="text-muted-foreground mb-8">
              Even if we don't have open positions, we're always interested in connecting 
              with talented people. Share your profile with us, and we'll reach out when 
              the right opportunity comes up.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Share Your Profile
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary">
                <Link to="/contact">Contact HR</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
