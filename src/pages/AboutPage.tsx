
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About Us | MetaMagic - Digital Marketing Expert</title>
        <meta name="description" content="Learn more about MetaMagic and our expertise in digital marketing, Meta Ads, and lead generation." />
      </Helmet>
      <Navbar />
      <div className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-8">
            About <span className="text-gradient">Us</span>
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            We're a team of passionate digital marketers dedicated to helping businesses grow through strategic online marketing.
          </p>
          
          {/* About content would go here */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-marketing-darkblue">Our Story</h2>
              <p className="text-gray-600 mb-4">
                MetaMagic was founded with a simple mission: to help businesses navigate the complex world of digital marketing and achieve tangible results through data-driven strategies.
              </p>
              <p className="text-gray-600 mb-4">
                With years of experience in managing successful advertising campaigns across Meta platforms and Google, we've developed a deep understanding of what works and what doesn't in the ever-evolving digital landscape.
              </p>
              <p className="text-gray-600">
                Our approach combines creativity with analytics, ensuring that every marketing dollar you spend is optimized for maximum return on investment.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -z-10 top-8 -left-8 w-full h-full bg-marketing-purple/20 rounded-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
                alt="Our Team" 
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
