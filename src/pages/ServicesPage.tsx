
import React from 'react';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Services | MetaMagic - Digital Marketing Expert</title>
        <meta name="description" content="Explore our comprehensive digital marketing services including Meta Ads, Google Ads, lead generation, and more." />
      </Helmet>
      <Navbar />
      <div className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-8">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Comprehensive digital marketing solutions tailored to help your business grow online and generate measurable results.
          </p>
        </div>
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
