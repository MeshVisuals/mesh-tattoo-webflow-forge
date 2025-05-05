
import React, { useState, useEffect } from 'react';
import { Instagram, Tiktok } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {isScrolled && (
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/00e90c25-b8e2-4cc6-9abc-170fcd36c6fb.png" 
              alt="MeshTattoo Logo" 
              className="h-10 w-auto"
            />
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-mesh-orange transition-colors">Home</a>
          <a href="#about" className="text-white hover:text-mesh-orange transition-colors">About</a>
          <a href="#gallery" className="text-white hover:text-mesh-orange transition-colors">Gallery</a>
          <a href="#booking" className="text-white hover:text-mesh-orange transition-colors">Book</a>
          <a href="#contact" className="text-white hover:text-mesh-orange transition-colors">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://www.instagram.com/meshtattoo_bcn/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-mesh-orange transition-colors">
            <Instagram size={20} />
          </a>
          <a href="https://www.tiktok.com/@meshtattoo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-mesh-orange transition-colors">
            <Tiktok size={20} />
          </a>
          <a href="https://beacons.ai/meshtattoo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-mesh-orange transition-colors">
            <span className="font-bold">B</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-mesh-orange/20 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#home" className="text-white hover:text-mesh-orange transition-colors py-2" onClick={toggleMenu}>Home</a>
            <a href="#about" className="text-white hover:text-mesh-orange transition-colors py-2" onClick={toggleMenu}>About</a>
            <a href="#gallery" className="text-white hover:text-mesh-orange transition-colors py-2" onClick={toggleMenu}>Gallery</a>
            <a href="#booking" className="text-white hover:text-mesh-orange transition-colors py-2" onClick={toggleMenu}>Book</a>
            <a href="#contact" className="text-white hover:text-mesh-orange transition-colors py-2" onClick={toggleMenu}>Contact</a>
            
            <div className="flex items-center space-x-4 py-2">
              <a href="https://www.instagram.com/meshtattoo_bcn/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-mesh-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@meshtattoo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-mesh-orange transition-colors">
                <Tiktok size={20} />
              </a>
              <a href="https://beacons.ai/meshtattoo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-mesh-orange transition-colors">
                <span className="font-bold">B</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
