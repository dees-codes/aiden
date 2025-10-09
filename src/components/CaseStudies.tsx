import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Building2, TrendingUp, Clock, DollarSign } from "lucide-react";

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const caseStudies = [
    {
      id: 1,
      icon: Building2,
      title: "HVAC Company Efficiency Boost",
      company: "ComfortAir Solutions",
      industry: "HVAC Services",
      employees: "15 employees",
      summary: "A local HVAC company transformed their operations by automating appointment booking, scheduling, and payment reminders, resulting in significant growth.",
      keyMetric: "30% increase in booked jobs",
      revenueGrowth: "$180K annual revenue increase",
      fullStory: `ComfortAir Solutions, a 15-employee HVAC repair and installation company serving a mid-sized U.S. city, was struggling with operational inefficiencies that were limiting their growth potential. The company faced significant challenges with missed calls, inefficient scheduling, and delayed invoice payments. Their staff was spending 10-15 hours weekly on administrative tasks like appointment booking, follow-ups, and manually reminding customers about payments, which was slowing growth and leaving revenue opportunities unrealized.

To address these challenges, ComfortAir integrated a comprehensive AI-powered automation suite that revolutionized their operations. The solution included an AI Virtual Receptionist that handled inbound calls and booked appointments directly into Google Calendar, an Automated Job Scheduler that assigned technicians based on location and availability using Google Maps integration, AI Follow-Up & Payment Reminders that sent SMS and email reminders for upcoming appointments and unpaid invoices, and a Customer Support Chatbot that answered frequently asked questions on their website.

After six months of implementation, the results were remarkable. The company experienced a 30% increase in booked jobs as the AI receptionist reduced missed calls by 80%. Payment collection became 20% faster due to automated invoice reminders, and they saved 10 administrative hours per week, freeing staff to focus on service delivery. Most significantly, their annual revenue increased by $180,000, growing from $600K to $780K, attributed to higher booking conversion rates and faster turnaround times. This transformation proved that even small businesses can achieve substantial efficiency gains with automation, turning operational bottlenecks into growth opportunities without requiring additional staff.`
    },
    {
      id: 2,
      icon: Building2,
      title: "Medical Practice Patient Flow",
      company: "Sunrise Family Clinic",
      industry: "Healthcare",
      employees: "7 staff members",
      summary: "A family clinic streamlined patient scheduling, insurance verification, and follow-ups, dramatically reducing no-shows and improving patient satisfaction.",
      keyMetric: "40% reduction in no-shows",
      revenueGrowth: "$30K annual savings",
      fullStory: `Sunrise Family Clinic, a two-doctor practice with five support staff, was facing overwhelming administrative challenges that were impacting both operational efficiency and patient care quality. The staff were struggling with scheduling calls, insurance verification, and patient follow-ups, leading to high wait times and costly no-shows that were costing the clinic approximately $5,000 per month in lost revenue.

The clinic implemented a comprehensive AI automation solution designed specifically for healthcare practices. This included an AI Virtual Assistant that managed patient scheduling and rescheduling via phone and SMS, an Insurance Pre-Check Bot that verified insurance coverage before appointments, automated Follow-Up & Medication Reminders sent via SMS and email, and Voice-to-Notes Transcription technology that helped doctors generate visit summaries more efficiently.

The transformation was significant within just six months of implementation. The clinic achieved a 40% reduction in no-shows, saving approximately $30,000 annually in lost revenue. Staff time was reduced by 15 hours per week, allowing them to focus more on patient care rather than administrative tasks. Patient satisfaction scores increased by 20%, reflecting the improved experience and reduced wait times. Most importantly, doctors were able to dedicate more time to patient care rather than administrative work, improving the overall quality of healthcare delivery. This case demonstrates how AI automation can address critical pain points in healthcare while improving both operational efficiency and patient outcomes.`
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "CPA Firm Tax Season Automation",
      company: "Precision CPAs",
      industry: "Accounting",
      employees: "8 employees",
      summary: "An accounting firm automated their tax season workflows, dramatically reducing client turnaround times and increasing capacity without additional hiring.",
      keyMetric: "25% faster client turnaround",
      revenueGrowth: "$120K additional revenue",
      fullStory: `Precision CPAs, a small accounting firm with 8 employees, was experiencing significant operational strain during tax season. Staff were constantly chasing clients for missing documents and spending countless hours answering repetitive tax questions. These response delays were frustrating clients and leading to extended filing times, ultimately impacting client satisfaction and the firm's ability to take on new business.

The firm implemented a comprehensive AI automation solution tailored for accounting practices. This included a Document Request Bot that sent automatic reminders for missing tax documents, an AI FAQ Assistant that answered common tax questions on their website and via email, a Pre-Filing Data Processor that could read and categorize receipts and invoices directly into QuickBooks, and a Client Follow-Up Agent that sent personalized updates on tax filing status to keep clients informed throughout the process.

Within four months of implementation during tax season, the results were impressive. The firm achieved a 25% faster turnaround on client files, significantly improving client satisfaction and allowing them to process more returns. They saved over 50 staff hours per month that were previously spent on routine communications and data entry. Client satisfaction rose by 35% as measured through post-service surveys, reflecting the improved communication and faster service delivery. Most importantly, the firm was able to handle 15% more clients without hiring additional staff, resulting in $120,000 in additional revenue. This transformation allowed Precision CPAs to scale their operations efficiently while maintaining high service quality during their busiest season.`
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Marketing Agency Client Scaling",
      company: "BrightWave Marketing",
      industry: "Digital Marketing",
      employees: "12 employees",
      summary: "A boutique marketing agency automated report generation, content creation, and client communications to scale their operations and increase revenue.",
      keyMetric: "60% faster report turnaround",
      revenueGrowth: "25% annual revenue growth",
      fullStory: `BrightWave Marketing, a boutique digital marketing agency managing over 20 clients, was facing significant scalability challenges. Account managers were spending countless hours writing reports, drafting social media content, and following up with clients. This manual workload was slowing growth and straining resources, preventing the agency from taking on new clients and limiting their ability to provide strategic value to existing ones.

The agency implemented a comprehensive AI automation suite designed specifically for marketing operations. This included an AI Report Generator that created monthly SEO and PPC performance reports automatically, a Content Assistant that drafted social media posts and ad copy for client approval, a Client Meeting Summarizer that transcribed and summarized meetings into actionable items, and a Proposal Builder Bot that auto-generated pitch decks for new leads, significantly speeding up the sales process.

After six months of implementation, the transformation was remarkable. The agency achieved 60% faster turnaround on monthly client reports, dramatically improving client satisfaction and freeing up valuable time for strategic work. Account managers saved over 20 hours per week that could be redirected toward client strategy and relationship building. The faster proposal delivery enabled them to close 3 new clients per quarter, significantly improving their win rate and sales velocity. Overall, the agency's revenue grew by 25% within the year, demonstrating how automation can enable service businesses to scale efficiently while maintaining high-quality client relationships. This case study shows how even creative industries can benefit from AI automation when applied thoughtfully to operational tasks.`
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
              Real <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how small and medium businesses are achieving remarkable growth 
              with Aiden's AI automation solutions through these detailed case studies.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => {
              const IconComponent = caseStudy.icon;
              return (
                <Card 
                  key={caseStudy.id}
                  className="card-elevated p-8 relative group cursor-pointer hover:scale-[1.02] transition-all duration-300"
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                  onClick={() => setSelectedCase(caseStudy.id)}
                >
                  {/* Icon */}
                  <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>

                  <div className="space-y-6">
                    {/* Company Info */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {caseStudy.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-medium">{caseStudy.company}</span>
                        <span>•</span>
                        <span>{caseStudy.industry}</span>
                        <span>•</span>
                        <span>{caseStudy.employees}</span>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-muted-foreground leading-relaxed">
                      {caseStudy.summary}
                    </p>

                    {/* Key Metrics */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          <span className="text-sm font-medium text-foreground">
                            {caseStudy.keyMetric}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-green-500" />
                          <span className="text-sm font-medium text-foreground">
                            {caseStudy.revenueGrowth}
                          </span>
                        </div>
                      </div>
                      <div className="text-sm text-primary font-medium group-hover:underline">
                        Read Full Case Study →
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Case Study Detail Modal */}
          <Dialog open={selectedCase !== null} onOpenChange={() => setSelectedCase(null)}>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              {selectedCase && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">
                      {caseStudies.find(cs => cs.id === selectedCase)?.title}
                    </DialogTitle>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <span className="font-medium">
                        {caseStudies.find(cs => cs.id === selectedCase)?.company}
                      </span>
                      <span>•</span>
                      <span>{caseStudies.find(cs => cs.id === selectedCase)?.industry}</span>
                      <span>•</span>
                      <span>{caseStudies.find(cs => cs.id === selectedCase)?.employees}</span>
                    </div>
                  </DialogHeader>
                  
                  <div className="space-y-6 mt-6">
                    {/* Key Metrics */}
                    <div className="grid md:grid-cols-2 gap-4 p-4 bg-primary/5 rounded-lg">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-green-500" />
                        <span className="font-medium">
                          {caseStudies.find(cs => cs.id === selectedCase)?.keyMetric}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-green-500" />
                        <span className="font-medium">
                          {caseStudies.find(cs => cs.id === selectedCase)?.revenueGrowth}
                        </span>
                      </div>
                    </div>

                    {/* Full Story */}
                    <div className="prose prose-gray max-w-none">
                      <div className="text-foreground leading-relaxed whitespace-pre-line">
                        {caseStudies.find(cs => cs.id === selectedCase)?.fullStory}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>

        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
