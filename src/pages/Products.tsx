import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Rocket, ArrowRight, Bell } from "lucide-react";

const Products = () => {
  return (
    <Layout>
      <section className="py-24 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
              <Rocket className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary">Coming Soon</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Products Are{" "}
              <span className="gradient-text">On the Way</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              We're building innovative products to help businesses scale faster. 
              Be the first to know when we launch by joining our early access list.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                <Bell className="mr-2 h-5 w-5" />
                Get Early Access
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-border hover:bg-secondary">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Product Preview Card */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">R</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground">RootOps Platform</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                An all-in-one platform for managing your cloud infrastructure, CI/CD pipelines, 
                and development workflows. Built for teams that move fast.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Infrastructure as Code", "CI/CD Automation", "Monitoring", "Team Collaboration"].map((feature) => (
                  <span
                    key={feature}
                    className="px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
