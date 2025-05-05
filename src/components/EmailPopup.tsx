
import React, { useState, useEffect } from 'react';
import { Instagram, X } from 'lucide-react';
import { toast } from "sonner";

const EmailPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show popup after scrolling 30% of viewport height
      if (!isDismissed && window.scrollY > window.innerHeight * 0.3) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    
    // Success notification
    toast.success("Thanks! We'll send you details about free tattoo opportunities soon!");
    
    // Hide popup and mark as dismissed
    setIsVisible(false);
    setIsDismissed(true);
    setEmail('');
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-40 animate-fade-in">
      <div className="bg-black border border-mesh-orange p-6 rounded-lg shadow-lg shadow-mesh-orange/20 max-w-md">
        <button 
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
          onClick={handleDismiss}
        >
          <X size={20} />
        </button>
        
        <div className="text-center">
          <h3 className="text-xl font-bold text-mesh-orange mb-4 font-sans">Want a FREE Tattoo?</h3>
          
          <div className="flex justify-center space-x-4 mb-5">
            <a 
              href="https://www.instagram.com/meshtattoo_bcn/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black border border-mesh-orange text-white p-3 rounded-md hover:bg-mesh-orange/10 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://www.tiktok.com/@meshtattoo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black border border-mesh-orange text-white p-3 rounded-md hover:bg-mesh-orange/10 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
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
          
          <p className="text-gray-300 mb-4">
            Follow us on social media and enter your email below to be eligible for free tattoo opportunities!
          </p>
          
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                required
              />
              <button 
                type="submit" 
                className="bg-black text-white border border-mesh-orange py-3 rounded-md hover:bg-black/80 transition-colors font-sans tracking-wide"
              >
                Get Free Tattoo Info
              </button>
            </div>
          </form>
          
          <p className="text-xs text-gray-400 mt-4">
            By submitting, you agree to receive emails about special promotions and events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailPopup;
