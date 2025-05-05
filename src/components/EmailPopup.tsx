
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
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
          <h3 className="text-xl font-bold text-mesh-orange mb-2">Want a FREE Tattoo?</h3>
          <p className="text-gray-300 mb-4">
            Join our exclusive list to receive information about free tattoo opportunities and special offers.
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
                className="w-full bg-mesh-orange hover:bg-opacity-80 transition-colors py-2 rounded-md font-medium text-white"
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
