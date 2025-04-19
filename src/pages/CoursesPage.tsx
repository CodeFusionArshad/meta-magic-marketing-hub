
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CoursesPage = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Courses | MetaMagic - Digital Marketing Expert</title>
        <meta name="description" content="Explore our digital marketing courses and learning resources to master Meta Ads and lead generation." />
      </Helmet>
      <Navbar />
      <div className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-8">
            Our <span className="text-gradient">Courses</span>
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Level up your digital marketing skills with our expert-led courses and resources.
          </p>
          
          {/* Courses content would go here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              { title: "Meta Ads Mastery", level: "Beginner to Advanced", price: "$199", duration: "8 weeks" },
              { title: "Lead Generation Fundamentals", level: "Intermediate", price: "$149", duration: "6 weeks" },
              { title: "Digital Marketing Strategy", level: "Advanced", price: "$249", duration: "10 weeks" },
            ].map((course, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100">
                <div className="bg-marketing-blue h-2"></div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2 text-marketing-darkblue">{course.title}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-marketing-blue/10 text-marketing-blue rounded-full">{course.level}</span>
                    <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">{course.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-6">Comprehensive training on everything you need to know to succeed with this topic.</p>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-marketing-purple">{course.price}</span>
                    <span className="text-sm text-gray-500">One-time payment</span>
                  </div>
                  <Button className="w-full bg-marketing-blue hover:bg-marketing-darkblue" asChild>
                    <Link to="/contact">Learn More</Link>
                  </Button>
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

export default CoursesPage;
