import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, LAWYER_NAME, WHATSAPP_LINK } from '../constants';
import { Button } from './Button';
import { smoothScrollTo } from '../utils/scrollUtils';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Always close mobile menu upon selection
    setIsMobileMenuOpen(false);
    
    // Check if it's an anchor link (internal navigation)
    if (href.startsWith('#')) {
      e.preventDefault();
      
      const targetElement = document.querySelector(href);
      
      if (targetElement) {
        // If the element exists on the current page, scroll to it smoothly
        smoothScrollTo(href, 1000);
      } else {
        // If the element doesn't exist (e.g., we are on the Blog page), navigate to the home page with the anchor
        window.location.href = `/${href}`;
      }
    } 
    // If it's not an anchor (e.g. external link), allow default behavior
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-dark-900/80 backdrop-blur-sm py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="/#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="font-serif text-2xl md:text-3xl text-gold-100 hover:text-gold-400 transition-colors duration-300"
        >
          {LAWYER_NAME}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-gray-300 hover:text-gold-400 text-sm font-medium tracking-wide transition-colors uppercase relative group cursor-pointer"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
             <Button className="!px-6 !py-2 !text-xs">Consultar</Button>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gold-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-900 border-t border-gray-800 shadow-2xl py-6 px-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-5">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-gray-300 hover:text-gold-400 text-lg font-medium cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="pt-2">
            <Button fullWidth>Agendar Consultoria</Button>
          </a>
        </div>
      )}
    </header>
  );
};