
import React from 'react';
import { Facebook, Instagram, Search, Users, Briefcase, Youtube, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Facebook,
    title: "Meta Ads Campaign Setup & Management",
    description: "Strategic campaign creation, audience targeting, and optimization to maximize your ROI on Facebook and Instagram platforms.",
  },
  {
    icon: Search,
    title: "Google Ads",
    description: "PPC campaigns that drive targeted traffic to your website from Google Search, Display and YouTube networks.",
  },
  {
    icon: Instagram,
    title: "Instagram/Facebook Paid Marketing",
    description: "Engaging visual campaigns specifically designed for Instagram and Facebook to increase brand awareness and drive engagement.",
  },
  {
    icon: Users,
    title: "Lead Generation Strategy",
    description: "Comprehensive lead generation strategies to convert your audience into qualified prospects and customers.",
  },
  {
    icon: Briefcase,
    title: "Freelancing & Online Business Setup",
    description: "Complete guidance on establishing your online business presence and freelancing operations.",
  },
  {
    icon: Youtube,
    title: "YouTube Automation",
    description: "Streamlined YouTube channel management and content strategy to grow your audience and monetize your channel.",
  },
  {
    icon: Globe,
    title: "Web Portfolio Creation",
    description: "Professional website development focused on showcasing your work and converting visitors into clients.",
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
            Comprehensive digital marketing solutions tailored to help your business grow online and generate measurable results.
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
}

const ServiceCard = ({ Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden h-full group">
      <CardContent className="p-6">
        <div className="bg-marketing-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-marketing-blue/20 transition-colors">
          <Icon className="text-marketing-blue" size={24} />
        </div>
        <CardTitle className="text-xl mb-3 font-poppins">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServicesSection;
