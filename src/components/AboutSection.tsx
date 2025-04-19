
import React from 'react';
import { Award, Check } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-marketing-lightgray" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-marketing-purple mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -z-10 -top-8 -right-8 w-full h-full bg-marketing-blue/20 rounded-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Digital Marketing Expert Profile" 
                className="rounded-xl shadow-lg w-full max-w-md h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Right Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-6">
              Digital Marketing Expert with a Passion for Results
            </h3>
            
            <p className="text-gray-600 mb-6">
              Hello! I'm a seasoned digital marketing specialist focused on Meta and Google advertising platforms. With over 5 years of experience, I've helped businesses of all sizes grow their online presence, generate qualified leads, and increase their return on ad spend.
            </p>
            
            <p className="text-gray-600 mb-8">
              My journey started with a passion for digital marketing, which led me to complete specialized training programs and certifications to master the art and science of online advertising.
            </p>
            
            {/* Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              <SkillItem text="Facebook & Instagram Ads" />
              <SkillItem text="Google Ads" />
              <SkillItem text="Audience Targeting" />
              <SkillItem text="Conversion Optimization" />
              <SkillItem text="Lead Generation" />
              <SkillItem text="Performance Analysis" />
            </div>
            
            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              <CertificateBadge name="Meta Blueprint Certified" />
              <CertificateBadge name="Google Ads Certified" />
              <CertificateBadge name="Saylani Digital Marketing" />
              <CertificateBadge name="Bano Qabil Certified" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-2">
      <Check className="text-marketing-blue flex-shrink-0" size={18} />
      <span className="text-gray-700">{text}</span>
    </div>
  );
};

const CertificateBadge = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center gap-2 bg-white py-2 px-4 rounded-full border border-gray-200 shadow-sm">
      <Award className="text-marketing-purple" size={16} />
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

export default AboutSection;
