
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Blog | MetaMagic - Digital Marketing Expert</title>
        <meta name="description" content="Read our latest articles and insights on digital marketing, Meta Ads, and lead generation strategies." />
      </Helmet>
      <Navbar />
      <div className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-8">
            Our <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Insights, tips, and strategies to help you master digital marketing and grow your business.
          </p>
          
          {/* Blog content would go here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "7 Meta Ad Strategies That Actually Work in 2025", category: "Meta Ads", date: "April 15, 2025", image: "https://placehold.co/800x600/png?text=Blog+Image+1" },
              { title: "How to Generate High-Quality Leads Without Breaking the Bank", category: "Lead Generation", date: "April 10, 2025", image: "https://placehold.co/800x600/png?text=Blog+Image+2" },
              { title: "The Ultimate Guide to Meta's Advantage+ Shopping Campaigns", category: "Meta Ads", date: "April 5, 2025", image: "https://placehold.co/800x600/png?text=Blog+Image+3" },
              { title: "5 Common Mistakes to Avoid in Your Digital Marketing Strategy", category: "Strategy", date: "April 1, 2025", image: "https://placehold.co/800x600/png?text=Blog+Image+4" },
              { title: "How to Analyze Your Competition and Win Market Share", category: "Research", date: "March 28, 2025", image: "https://placehold.co/800x600/png?text=Blog+Image+5" },
              { title: "Understanding Meta Pixel: A Complete Guide for Beginners", category: "Meta Ads", date: "March 25, 2025", image: "https://placehold.co/800x600/png?text=Blog+Image+6" },
            ].map((post, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-marketing-blue px-3 py-1 bg-marketing-blue/10 rounded-full">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-marketing-darkblue hover:text-marketing-blue transition-colors">
                    <Link to="#">{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">A brief excerpt from the article explaining what readers will learn from this post...</p>
                  <Link to="#" className="text-marketing-blue font-medium hover:underline">Read More</Link>
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

export default BlogPage;
