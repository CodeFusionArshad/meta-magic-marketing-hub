
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

const caseStudies = [
  {
    title: "E-commerce Revenue Growth",
    category: "Meta Ads",
    metrics: [
      { label: "ROAS", value: "7.2x" },
      { label: "Ad Spend", value: "$15,000" },
      { label: "Revenue", value: "$108,000" }
    ],
    image: "https://placehold.co/600x400/png?text=E-commerce+Case+Study",
    description: "Implemented a full-funnel Meta Ads strategy for an e-commerce brand, focusing on retargeting and lookalike audiences."
  },
  {
    title: "SaaS Lead Generation",
    category: "Google & Meta Ads",
    metrics: [
      { label: "Cost Per Lead", value: "-64%" },
      { label: "Conversion Rate", value: "+87%" },
      { label: "Leads Generated", value: "430+" }
    ],
    image: "https://placehold.co/600x400/png?text=SaaS+Case+Study",
    description: "Created an integrated campaign across Google and Meta platforms to drive high-quality B2B leads for a SaaS company."
  },
  {
    title: "Local Business Growth",
    category: "Facebook & Instagram Ads",
    metrics: [
      { label: "Store Visits", value: "+152%" },
      { label: "Sales Increase", value: "+83%" },
      { label: "New Customers", value: "300+" }
    ],
    image: "https://placehold.co/600x400/png?text=Local+Business+Case+Study",
    description: "Developed and implemented local awareness campaigns using geotargeting to drive foot traffic and increase sales."
  }
];

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-marketing-lightgray" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">
            Case <span className="text-gradient">Studies</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Real results from real clients. Here's how my digital marketing strategies have transformed businesses.
          </p>
          <div className="w-20 h-1 bg-marketing-purple mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} caseStudy={study} />
          ))}
        </div>
        
        {/* Client Testimonial */}
        <div className="mt-20 bg-white p-8 rounded-lg shadow-sm border border-gray-100 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="https://placehold.co/200x200/png?text=Client" 
                alt="Client" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-gray-600 italic mb-4">
                "Working with this team transformed our online presence. Their Meta ads strategy helped us reach exactly the right audience and dramatically increased our conversion rates. The ROI we've seen has been incredible!"
              </p>
              <p className="font-medium">Sarah Johnson</p>
              <p className="text-sm text-gray-500">Marketing Director, E-commerce Brand</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="flex items-center gap-2 text-marketing-blue hover:text-marketing-darkblue underline justify-center font-medium"
          >
            Want to be the next success story?
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

interface CaseStudyCardProps {
  caseStudy: {
    title: string;
    category: string;
    metrics: { label: string; value: string }[];
    image: string;
    description: string;
  };
}

const CaseStudyCard = ({ caseStudy }: CaseStudyCardProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-md h-full hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={caseStudy.image} 
          alt={caseStudy.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      
      <CardContent className="p-6">
        <div className="bg-marketing-blue/10 text-marketing-blue text-sm font-medium py-1 px-3 rounded-full inline-block mb-3">
          {caseStudy.category}
        </div>
        
        <h3 className="text-xl font-bold mb-4 font-poppins">{caseStudy.title}</h3>
        
        <p className="text-gray-600 mb-6 text-sm">{caseStudy.description}</p>
        
        <div className="grid grid-cols-3 gap-2">
          {caseStudy.metrics.map((metric, index) => (
            <div key={index} className="bg-marketing-lightgray p-3 rounded text-center">
              <p className="flex items-center justify-center gap-1 text-marketing-blue font-bold">
                {metric.value.includes('+') && <TrendingUp size={14} />}
                {metric.value}
              </p>
              <p className="text-xs text-gray-500">{metric.label}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioSection;
