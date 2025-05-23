
import React, { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > window.innerHeight * 0.1); // Only show after scrolling past 10% of hero section
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // If not scrolled yet, don't render the navbar
  if (!isScrolled) return null;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-black/70 backdrop-blur-md border-b border-mesh-orange py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/00e90c25-b8e2-4cc6-9abc-170fcd36c6fb.png" 
            alt="MeshTattoo Logo" 
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Menu - More futuristic */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "About", "Gallery", "Book", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-white hover:text-mesh-orange transition-all relative group font-sans tracking-wide text-sm"
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-mesh-orange via-red-500 to-mesh-orange transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://www.instagram.com/meshtattoo_bcn/" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-mesh-orange via-red-500 to-mesh-orange opacity-0 group-hover:opacity-50 blur-sm transition-opacity"></div>
            <div className="relative z-10 p-2 text-white">
              <Instagram size={20} />
            </div>
          </a>
          <a href="https://www.tiktok.com/@meshtattoo" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-mesh-orange via-red-500 to-mesh-orange opacity-0 group-hover:opacity-50 blur-sm transition-opacity"></div>
            <div className="relative z-10 p-2 text-white">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                <path d="M15 8h.01"></path>
                <path d="M11 16c-3 0-6.5-2.5-6.5-6.5C4.5 6 8 4 8 4h8c0 4-3 6-3 6"></path>
              </svg>
            </div>
          </a>
        </div>

        {/* Mobile Menu Button - More futuristic */}
        <button className="md:hidden relative overflow-hidden group" onClick={toggleMenu}>
          <div className="absolute inset-0 bg-gradient-to-r from-mesh-orange to-red-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
          <div className="relative z-10 w-8 h-8 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1.5'}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1.5'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu - With futuristic styling */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-mesh-orange/20 py-4 overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {["Home", "About", "Gallery", "Book", "Contact"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-white hover:text-mesh-orange transition-all py-2 font-sans tracking-wide relative group overflow-hidden" 
              onClick={toggleMenu}
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-mesh-orange/10 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          ))}
          
          <div className="flex items-center space-x-4 py-2">
            <a href="https://www.instagram.com/meshtattoo_bcn/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-mesh-orange transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.tiktok.com/@meshtattoo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-mesh-orange transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                <path d="M15 8h.01"></path>
                <path d="M11 16c-3 0-6.5-2.5-6.5-6.5C4.5 6 8 4 8 4h8c0 4-3 6-3 6"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
