
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

const HeroSection: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section id="home" className="flex items-center justify-center min-h-screen bg-black relative">
      <div className={cn(
        "transition-opacity duration-1500 ease-in-out",
        visible ? "opacity-100" : "opacity-0"
      )}>
        <div className="flex flex-col items-center">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
            <img 
              src="/lovable-uploads/00e90c25-b8e2-4cc6-9abc-170fcd36c6fb.png" 
              alt="MeshTattoo Logo" 
              className="w-full h-full object-contain animate-snake-move"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
        <p className="text-white text-center mt-2 text-sm">Scroll Down</p>
      </div>
    </section>
  );
};

export default HeroSection;
