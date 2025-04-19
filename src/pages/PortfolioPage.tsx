
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Portfolio | MetaMagic - Digital Marketing Expert</title>
        <meta name="description" content="Explore our portfolio of successful digital marketing campaigns and projects." />
      </Helmet>
      <Navbar />
      <div className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-8">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Take a look at some of our successful campaigns and projects that have delivered measurable results for our clients.
          </p>
          
          {/* Portfolio content would go here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={`https://placehold.co/600x400/png?text=Case+Study+${item}`} 
                  alt={`Case Study ${item}`} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-marketing-darkblue">Client Success Story #{item}</h3>
                  <p className="text-gray-600 mb-4">Brief description of the campaign goals and outcomes for this client.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-marketing-blue font-medium">Meta Ads</span>
                    <span className="text-sm font-bold text-marketing-purple">ROI: 10x</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
