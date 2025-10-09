import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import laptopWithWorkflow from "@/assets/laptop-with-workflow.png";

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
                  <span className="text-foreground">Built for Small and Medium Businesses</span>
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
                  Trusted by 200+ small and medium businesses
                </div>
              </div>
            </div>

            {/* Right Column - Laptop with n8n Workflow */}
            <div className="relative animate-slide-up">
              <div className="relative">
                {/* Background gradient blur */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl transform rotate-6"></div>
                
                {/* Laptop with workflow */}
                <div className="relative transform hover:scale-105 transition-transform duration-700">
                  <img 
                    src={laptopWithWorkflow}
                    alt="Aiden AI automation workflow on laptop displaying n8n integration with AI agents, Slack, and business tools"
                    className="w-full h-auto drop-shadow-2xl"
                  />
                  
                  {/* Floating badges around laptop */}
                  <div className="absolute -top-4 -left-4 bg-success/90 backdrop-blur-sm text-success-foreground px-3 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                    ✓ Active
                  </div>
                  
                  <div className="absolute top-1/2 -left-6 bg-accent/90 backdrop-blur-sm text-accent-foreground px-3 py-2 rounded-full text-xs font-medium shadow-lg transform -rotate-12">
                    AI Powered
                  </div>
                </div>

                {/* Stats overlay */}
                <div className="absolute -bottom-8 left-4 right-4 bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl p-4 shadow-[var(--shadow-elegant)]">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-success">127%</div>
                      <div className="text-xs text-muted-foreground">Efficiency Gain</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">45</div>
                      <div className="text-xs text-muted-foreground">Tasks/Hour</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-accent">24/7</div>
                      <div className="text-xs text-muted-foreground">Automated</div>
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