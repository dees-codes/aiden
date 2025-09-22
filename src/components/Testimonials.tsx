import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder",
      company: "TechStart Co",
      content: "Aiden transformed our lead generation process. We're now converting 3x more prospects with half the manual effort. The AI insights are incredibly accurate.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez", 
      role: "Operations Manager",
      company: "Growth Dynamics",
      content: "The automation workflows saved us 20 hours per week. Our team can now focus on strategy instead of repetitive tasks. Game-changing platform.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Jennifer Park",
      role: "CEO",
      company: "Innovate Solutions",
      content: "Customer support automation with Aiden increased our satisfaction scores to 95%. The AI learns and improves responses over time. Absolutely brilliant.",
      rating: 5,
      avatar: "JP"
    }
  ];

  return (
    <section className="py-16 bg-primary-lighter/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Horizontal Divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-full max-w-md"></div>
          </div>
          
          {/* Section Header */}
          <div className="text-center space-y-6 mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold">
              What Our <span className="text-gradient">Customers Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how small businesses are achieving remarkable growth 
              with Aiden's AI automation solutions.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="card-elevated p-8 relative group"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                  <Quote className="h-8 w-8 text-primary" />
                </div>

                <div className="space-y-6">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-foreground font-medium leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-primary text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;