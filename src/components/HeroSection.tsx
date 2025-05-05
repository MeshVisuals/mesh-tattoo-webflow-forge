
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import RainAnimation from '@/components/RainAnimation';

const HeroSection: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setVisible(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="flex items-center justify-center min-h-screen bg-black relative overflow-hidden">
      {/* Rain animation background */}
      <div className={cn(
        "absolute inset-0 transition-opacity duration-1000 ease-in-out",
        scrolled ? "opacity-30" : "opacity-0"
      )}>
        <RainAnimation />
      </div>
      
      <div className={cn(
        "transition-opacity duration-2000 ease-in-out z-10",
        visible ? "opacity-100" : "opacity-0"
      )}>
        <div className="flex flex-col items-center">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
            <img 
              src="/lovable-uploads/00e90c25-b8e2-4cc6-9abc-170fcd36c6fb.png" 
              alt="MeshTattoo Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-4 h-6 border-2 border-white rounded-full flex justify-center items-start p-0.5">
          <div className="w-0.5 h-1.5 bg-white rounded-full animate-pulse"></div>
        </div>
        <p className="text-white text-center mt-2 text-xs">Scroll Down</p>
      </div>
    </section>
  );
};

export default HeroSection;
