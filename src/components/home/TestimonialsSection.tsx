import { useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "RootOps transformed our infrastructure. Their team delivered a solution that scaled seamlessly with our growth, reducing our operational costs by 40%.",
    author: "Priya Sharma",
    role: "CTO, FinTech Startup",
  },
  {
    quote: "The level of expertise and professionalism is outstanding. They didn't just build what we asked for – they built what we needed.",
    author: "Rahul Verma",
    role: "Director of Engineering, E-commerce Platform",
  },
  {
    quote: "Working with RootOps has been a game-changer. Their DevOps practices and automation saved us countless hours every week.",
    author: "Ananya Gupta",
    role: "VP Technology, Healthcare Tech",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground">
            Trusted by innovative companies across industries.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-2xl p-8 card-hover cursor-pointer transition-all ${
                activeIndex === index ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6">"{testimonial.quote}"</p>
              <div>
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === index ? "w-8 bg-primary" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
