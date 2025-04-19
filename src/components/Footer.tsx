
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="font-poppins font-bold text-xl text-white">
                Meta<span className="text-marketing-purple">Magic</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Expert Meta & Google ads management to help your business grow online and generate measurable results.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/portfolio">Portfolio</FooterLink>
              <FooterLink to="/courses">Courses</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white font-medium text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <FooterLink to="/services">Meta Ads Management</FooterLink>
              <FooterLink to="/services">Google Ads</FooterLink>
              <FooterLink to="/services">Lead Generation</FooterLink>
              <FooterLink to="/services">Web Development</FooterLink>
              <FooterLink to="/services">YouTube Automation</FooterLink>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-medium text-lg mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">hello@metamagic.com</p>
            <p className="text-gray-400 mb-2">+92 300 1234567</p>
            <p className="text-gray-400">Karachi, Pakistan</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} MetaMagic. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <button 
              onClick={scrollToTop}
              className="bg-marketing-blue/20 hover:bg-marketing-blue p-2 rounded-full text-marketing-blue hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink = ({ to, children }: FooterLinkProps) => {
  return (
    <li>
      <Link to={to} className="text-gray-400 hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  );
};

export default Footer;
