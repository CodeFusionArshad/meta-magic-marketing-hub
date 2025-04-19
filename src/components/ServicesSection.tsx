
import React from 'react';
import { Facebook, Instagram, Search, Users, Briefcase, Youtube, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    icon: Facebook,
    title: "Meta Ads Campaign Setup & Management",
    description: "Strategic campaign creation, audience targeting, and optimization to maximize your ROI on Facebook and Instagram platforms.",
    tier: "paid",
    price: "Starting at $199/month"
  },
  {
    icon: Search,
    title: "Google Ads",
    description: "PPC campaigns that drive targeted traffic to your website from Google Search, Display and YouTube networks.",
    tier: "paid",
    price: "Starting at $299/month"
  },
  {
    icon: Instagram,
    title: "Social Media Consultation",
    description: "Initial 30-minute consultation to discuss your Instagram and Facebook marketing strategy.",
    tier: "free",
    price: "Free"
  },
  {
    icon: Users,
    title: "Basic Lead Generation Guide",
    description: "Access to our foundational guide on lead generation strategies for beginners.",
    tier: "free",
    price: "Free"
  },
  {
    icon: Briefcase,
    title: "Freelancing Starter Kit",
    description: "Essential resources and tips to start your freelancing journey.",
    tier: "free",
    price: "Free"
  },
  {
    icon: Youtube,
    title: "YouTube Automation",
    description: "Streamlined YouTube channel management and content strategy to grow your audience and monetize your channel.",
    tier: "paid",
    price: "Starting at $149/month"
  },
  {
    icon: Globe,
    title: "Web Portfolio Creation",
    description: "Professional website development focused on showcasing your work and converting visitors into clients.",
    tier: "paid",
    price: "Custom quote"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            From free resources to premium solutions, we offer services for every stage of your business journey.
          </p>
          <div className="w-20 h-1 bg-marketing-purple mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              Icon={service.icon} 
              title={service.title} 
              description={service.description}
              tier={service.tier}
              price={service.price}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            Looking for a custom service package tailored to your specific business needs?
          </p>
          <a 
            href="#contact" 
            className="bg-marketing-blue hover:bg-marketing-darkblue text-white font-medium px-8 py-3 rounded-full inline-block transition-colors"
          >
            Get Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
  tier: 'free' | 'paid';
  price: string;
}

const ServiceCard = ({ Icon, title, description, tier, price }: ServiceCardProps) => {
  return (
    <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden h-full group">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div className="bg-marketing-blue/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-marketing-blue/20 transition-colors">
            <Icon className="text-marketing-blue" size={24} />
          </div>
          <Badge variant={tier === 'free' ? 'secondary' : 'default'} className="uppercase">
            {tier}
          </Badge>
        </div>
        <CardTitle className="text-xl mb-3 font-poppins">{title}</CardTitle>
        <CardDescription className="text-gray-600 mb-4">{description}</CardDescription>
        <p className={`text-sm font-medium ${tier === 'free' ? 'text-green-600' : 'text-marketing-purple'}`}>
          {price}
        </p>
      </CardContent>
    </Card>
  );
};

export default ServicesSection;
