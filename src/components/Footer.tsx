import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white border-t border-mesh-orange/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/00e90c25-b8e2-4cc6-9abc-170fcd36c6fb.png" 
                alt="MeshTattoo Logo" 
                className="h-16"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Bringing your tattoo visions to life with creativity and precision.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/meshtattoo_bcn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-mesh-orange/10 p-2 rounded-full hover:bg-mesh-orange/20 transition-colors"
              >
                <Instagram size={18} className="text-mesh-orange" />
              </a>
              <a 
                href="https://www.tiktok.com/@meshtattoo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-mesh-orange/10 p-2 rounded-full hover:bg-mesh-orange/20 transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-mesh-orange"
                >
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                  <path d="M15 8h.01"></path>
                  <path d="M11 16c-3 0-6.5-2.5-6.5-6.5C4.5 6 8 4 8 4h8c0 4-3 6-3 6"></path>
                </svg>
              </a>
              <a 
                href="mailto:info@meshtattoo.com"
                className="bg-mesh-orange/10 p-2 rounded-full hover:bg-mesh-orange/20 transition-colors"
              >
                <Mail size={18} className="text-mesh-orange" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-mesh-orange transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-mesh-orange transition-colors">About</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-mesh-orange transition-colors">Gallery</a></li>
              <li><a href="#booking" className="text-gray-400 hover:text-mesh-orange transition-colors">Book Now</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-mesh-orange transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Studio Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-400">Monday - Friday</span>
                <span>10:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Saturday</span>
                <span>10:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-800">
              <p className="text-gray-400">
                Barcelona, Spain
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} MeshTattoo. All rights reserved.
          </p>
          <div className="mt-2">
            <a href="https://beacons.ai/meshtattoo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-mesh-orange transition-colors text-sm">
              beacons.ai/meshtattoo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
