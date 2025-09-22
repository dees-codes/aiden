import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import aidenLogo from "@/assets/aiden_log_no_bg.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAutomationDropdownOpen, setIsAutomationDropdownOpen] = useState(false);

  const handlePricingClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
      // Trigger button animation after scroll
      setTimeout(() => {
        const button = pricingSection.querySelector('.consultation-button');
        if (button) {
          button.classList.add('animate-bounce-once');
          setTimeout(() => {
            button.classList.remove('animate-bounce-once');
          }, 1000);
        }
      }, 800);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/50">
      <nav className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={aidenLogo} 
              alt="Aiden AI" 
              className="h-16 w-16"
            />
            <span className="text-xl font-bold text-foreground">Aiden</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <div className="relative group">
                <button 
                  className="flex items-center gap-1 text-foreground hover:text-primary transition-colors"
                  onMouseEnter={() => setIsAutomationDropdownOpen(true)}
                  onMouseLeave={() => setIsAutomationDropdownOpen(false)}
                >
                  Automation Solutions
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isAutomationDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 pt-2 w-56 z-50"
                    onMouseEnter={() => setIsAutomationDropdownOpen(true)}
                    onMouseLeave={() => setIsAutomationDropdownOpen(false)}
                  >
                    <div className="bg-background/95 backdrop-blur-sm border border-border/50 rounded-lg shadow-lg py-2">
                    <a href="#lead-generation" className="block px-4 py-3 text-sm text-foreground hover:text-primary hover:bg-primary/5 transition-colors">
                      Lead Generation
                    </a>
                    <a href="#email-marketing" className="block px-4 py-3 text-sm text-foreground hover:text-primary hover:bg-primary/5 transition-colors">
                      Email Marketing
                    </a>
                    <a href="#customer-support" className="block px-4 py-3 text-sm text-foreground hover:text-primary hover:bg-primary/5 transition-colors">
                      Customer Support
                    </a>
                    <a href="#sales-automation" className="block px-4 py-3 text-sm text-foreground hover:text-primary hover:bg-primary/5 transition-colors">
                      Sales Automation
                    </a>
                    <a href="#analytics-reporting" className="block px-4 py-3 text-sm text-foreground hover:text-primary hover:bg-primary/5 transition-colors">
                      Analytics & Reporting
                    </a>
                    </div>
                  </div>
                )}
              </div>
              <a href="#features" className="text-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#pricing" onClick={handlePricingClick} className="text-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <div className="relative group">
                <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                  Resources
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>
            
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/50 pt-4">
            <div className="flex flex-col gap-4">
              <a href="#automation" className="text-foreground hover:text-primary transition-colors">
                Automation Solutions
              </a>
              <a href="#features" className="text-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#pricing" onClick={handlePricingClick} className="text-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#resources" className="text-foreground hover:text-primary transition-colors">
                Resources
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;