
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Contact Us | MetaMagic - Digital Marketing Expert</title>
        <meta name="description" content="Get in touch with our digital marketing team to discuss your project or book a free consultation." />
      </Helmet>
      <Navbar />
      <div className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-8">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Have questions or ready to start your next project? Get in touch with us today for a free consultation.
          </p>
          
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
