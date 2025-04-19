
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left animate-fade-in">
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Grow Your Business with Expert <span className="text-gradient">Meta Ads & Digital Marketing</span>
            </h1>
            
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 animate-slide-up animate-delay-200">
              Unlock your business potential with data-driven Meta & Google ads strategies. I help businesses generate high-quality leads and increase their ROI.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animate-delay-400">
              <Button className="bg-marketing-blue hover:bg-marketing-darkblue text-white font-medium px-6 py-6 rounded-full flex items-center gap-2">
                <Calendar size={18} />
                Book Free Consultation
              </Button>
              
              <Button variant="outline" className="border-marketing-purple text-marketing-purple hover:bg-marketing-purple/10 font-medium px-6 py-6 rounded-full flex items-center gap-2">
                See My Work
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="hidden lg:flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute -z-10 top-8 -left-8 w-full h-full bg-marketing-purple/20 rounded-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
                alt="Digital Marketing Expert" 
                className="rounded-xl shadow-lg w-full max-w-lg object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up animate-delay-600">
          <StatCard number="100+" label="Campaigns Managed" />
          <StatCard number="20x" label="Average ROAS" />
          <StatCard number="50+" label="Happy Clients" />
          <StatCard number="1M+" label="Ad Spend Managed" />
        </div>
        
        {/* Client Logos */}
        <div className="mt-20 animate-slide-up animate-delay-600">
          <p className="text-center text-gray-500 mb-6">Trusted by businesses of all sizes</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-60">
            <img src="https://placehold.co/120x40/png?text=Client+Logo" alt="Client Logo" className="h-8 object-contain" />
            <img src="https://placehold.co/120x40/png?text=Client+Logo" alt="Client Logo" className="h-8 object-contain" />
            <img src="https://placehold.co/120x40/png?text=Client+Logo" alt="Client Logo" className="h-8 object-contain" />
            <img src="https://placehold.co/120x40/png?text=Client+Logo" alt="Client Logo" className="h-8 object-contain" />
            <img src="https://placehold.co/120x40/png?text=Client+Logo" alt="Client Logo" className="h-8 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard = ({ number, label }: StatCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
      <p className="font-poppins font-bold text-3xl text-marketing-blue">{number}</p>
      <p className="text-gray-600 mt-1">{label}</p>
    </div>
  );
};

export default HeroSection;
