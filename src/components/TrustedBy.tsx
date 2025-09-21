const TrustedBy = () => {
  const companies = [
    "TechStart Inc",
    "Growth Labs",
    "Innovate Co",
    "Scale Solutions", 
    "Future Ventures",
    "Smart Biz",
    "Rapid Growth",
    "Success Partners"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <p className="text-lg text-muted-foreground font-medium">
              Trusted by small businesses from diverse industries
            </p>
            
            {/* Company logos/names grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {companies.map((company, index) => (
                <div 
                  key={index}
                  className="text-center py-4 px-6 hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="font-semibold text-muted-foreground">
                    {company}
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-gradient">2,000+</div>
                <div className="text-muted-foreground">Active Businesses</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-gradient">50M+</div>
                <div className="text-muted-foreground">Tasks Automated</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-gradient">99.9%</div>
                <div className="text-muted-foreground">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;