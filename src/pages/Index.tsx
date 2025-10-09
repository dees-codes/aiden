import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "Aiden AI Automation - Transform Your Small and Medium Business with AI";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'AI-powered automation solutions for small and medium businesses. Streamline workflows, boost productivity, and scale efficiently with Aiden\'s intelligent business automation platform.');
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Aiden AI Automation",
      "description": "AI-powered automation platform for small and medium businesses",
      "url": "https://aiden.ai",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free trial available"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "200"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <CaseStudies />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
