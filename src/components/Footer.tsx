
import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-10 border-t border-mesh-orange/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/lovable-uploads/00e90c25-b8e2-4cc6-9abc-170fcd36c6fb.png" 
              alt="MeshTattoo Logo" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm">
              Professional tattoo artist specializing in American Traditional and Blackout styles.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4 font-sans">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Gallery", "Book", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-mesh-orange transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4 font-sans">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:steph@meshtattoo.com" 
                  className="flex items-center text-gray-400 hover:text-mesh-orange transition-colors text-sm"
                >
                  <Mail size={18} className="mr-2" />
                  steph@meshtattoo.com
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/meshtattoo_bcn/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-gray-400 hover:text-mesh-orange transition-colors text-sm"
                >
                  <Instagram size={18} className="mr-2" />
                  @meshtattoo_bcn
                </a>
              </li>
              <li>
                <a 
                  href="https://www.tiktok.com/@meshtattoo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-gray-400 hover:text-mesh-orange transition-colors text-sm"
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
                    className="mr-2"
                  >
                    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                    <path d="M15 8h.01"></path>
                    <path d="M11 16c-3 0-6.5-2.5-6.5-6.5C4.5 6 8 4 8 4h8c0 4-3 6-3 6"></path>
                  </svg>
                  @meshtattoo
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} MeshTattoo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
