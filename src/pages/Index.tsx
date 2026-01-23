import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ProcessSection from "@/components/home/ProcessSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ExpertiseSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ProcessSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
