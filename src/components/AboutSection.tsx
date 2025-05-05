
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-container flex items-center bg-black">
      <div className="container mx-auto">
        <h2 className="section-title font-sans">About the Artist</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="overflow-hidden rounded-lg">
            <img 
              src="/lovable-uploads/24ef9012-87f2-44f8-8298-cd27f1a61b8c.png" 
              alt="Tattoo Station" 
              className="w-full h-full object-cover rounded-lg transform transition hover:scale-105 duration-500"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-mesh-orange font-sans">MeshTattoo Style</h3>
            <p className="text-gray-300 mb-6">
              MeshTattoo is a new artist that loves American Traditional, Japanese, Anime, and Blackout tattoo styles.
            </p>
            <p className="text-gray-300 mb-6">
              Currently offering tattoos in American Traditional style and Blackout.
            </p>
            
            <div className="mt-8">
              <a href="#contact" className="px-6 py-3 bg-black text-white border border-mesh-orange rounded-md hover:bg-black/80 transition-all">Get in Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
