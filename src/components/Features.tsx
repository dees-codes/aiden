import { Card } from "@/components/ui/card";
import { 
  Bot, 
  Zap, 
  Clock,
  Workflow
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "Intelligent Automation",
      description: "AI-powered workflows that adapt and learn from your business patterns to optimize performance automatically."
    },
    {
      icon: Zap,
      title: "Lightning Fast Setup",
      description: "Get your first automation running in minutes, not weeks. Our intuitive platform makes complex automation simple."
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Continuous monitoring and automatic optimization ensure your automations run smoothly around the clock."
    },
    {
      icon: Workflow,
      title: "Custom Workflows",
      description: "Build unique automation sequences tailored to your specific business needs and industry requirements."
    }
  ];

  return (
    <section id="features" className="pt-20 pb-12 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-6 mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-gradient">Powerful Features</span> for
              <br />
              Modern Businesses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to automate, optimize, and scale your business operations
              with cutting-edge AI technology designed for small and medium business success.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="card-elevated p-6 group hover:border-primary/30 transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div id="pricing" className="text-center mt-16 animate-scale-in">
            <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto shadow-[var(--shadow-card)]">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-muted-foreground mb-6">
                Start automating your business for as low as $600.
              </p>
              <div className="flex justify-center">
                <button className="btn-hero consultation-button">
                  Schedule a free consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;