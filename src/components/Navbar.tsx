
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-poppins font-bold text-xl md:text-2xl text-marketing-darkblue">
            Meta<span className="text-marketing-purple">Magic</span>
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks currentPath={location.pathname} />
          <Button className="bg-marketing-blue hover:bg-marketing-darkblue transition-colors">
            <Link to="/contact">Book Consultation</Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-marketing-darkblue"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md absolute w-full animate-fade-in">
          <div className="flex flex-col gap-4">
            <NavLinks mobile onClick={() => setIsMenuOpen(false)} currentPath={location.pathname} />
            <Button className="bg-marketing-blue hover:bg-marketing-darkblue transition-colors w-full">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Book Consultation</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
  currentPath: string;
}

const NavLinks = ({ mobile, onClick, currentPath }: NavLinksProps) => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Courses', path: '/courses' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={`font-medium transition-colors ${
            currentPath === link.path 
              ? 'text-marketing-blue' 
              : 'text-marketing-darkgray hover:text-marketing-blue'
          } ${
            mobile ? 'py-2 border-b border-gray-100' : ''
          }`}
          onClick={onClick}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
