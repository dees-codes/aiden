import { Button } from "@/components/ui/button";
import aidenLogoSymbol from "@/assets/aiden-logo-symbol.png";

const Footer = () => {
  return (
    <footer className="bg-primary/5 border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center gap-3">
                <img 
                  src={aidenLogoSymbol} 
                  alt="Aiden AI" 
                  className="h-8 w-8"
                />
                <span className="text-xl font-bold text-foreground">Aiden</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                AI-powered automation solutions designed to help small and medium businesses 
                scale efficiently and compete effectively in today's market.
              </p>
              <div className="text-sm text-muted-foreground">
                © 2024 Aiden AI Automation. All rights reserved.
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Solutions</h3>
              <div className="space-y-3">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Lead Generation
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Email Marketing
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Customer Support
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Sales Automation
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Analytics & Reporting
                </a>
              </div>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Company</h3>
              <div className="space-y-3">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Press
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Partners
                </a>
              </div>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Support</h3>
              <div className="space-y-3">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Documentation
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact Support
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  System Status
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;