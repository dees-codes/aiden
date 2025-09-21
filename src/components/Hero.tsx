import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-background via-primary-lighter/10 to-primary-lighter/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gradient-hero">AI-Powered Automation</span>
                  <br />
                  <span className="text-foreground">Built for Small Business</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Transform your business operations with intelligent automation. 
                  Streamline workflows, reduce manual tasks, and scale efficiently 
                  with Aiden's comprehensive AI solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" className="group">
                  Start Automating Today
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline-hero" size="xl" className="group">
                  <Play className="h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="text-sm text-muted-foreground">
                  Trusted by 2,000+ small businesses
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative animate-slide-up">
              <div className="relative">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
                
                {/* Main dashboard mockup */}
                <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-[var(--shadow-elegant)]">
                  <div className="space-y-4">
                    {/* Dashboard header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-destructive rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-success rounded-full"></div>
                      </div>
                      <div className="text-sm text-muted-foreground">Aiden Dashboard</div>
                    </div>
                    
                    {/* Automation cards */}
                    <div className="space-y-3">
                      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-primary">Email Marketing</div>
                            <div className="text-sm text-muted-foreground">+127% conversion rate</div>
                          </div>
                          <div className="text-2xl font-bold text-success">↗</div>
                        </div>
                      </div>
                      
                      <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-accent">Lead Generation</div>
                            <div className="text-sm text-muted-foreground">45 new leads today</div>
                          </div>
                          <div className="text-2xl font-bold text-success">↗</div>
                        </div>
                      </div>
                      
                      <div className="bg-primary-light/10 border border-primary-light/20 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-primary-light">Customer Support</div>
                            <div className="text-sm text-muted-foreground">92% satisfaction rate</div>
                          </div>
                          <div className="text-2xl font-bold text-success">↗</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;