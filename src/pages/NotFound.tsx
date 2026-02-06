import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center py-24">
        <div className="container mx-auto px-4 text-center">

          {/* 404 Number */}
          <h1 className="text-8xl md:text-9xl font-extrabold mb-6 bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
            404
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Sorry — the page you’re looking for doesn’t exist or may have been moved.
            Let’s get you back to where you belong.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Contact Support
              </Link>
            </Button>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
