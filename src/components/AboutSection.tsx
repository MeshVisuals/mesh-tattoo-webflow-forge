
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-container flex items-center bg-black">
      <div className="container mx-auto">
        <h2 className="section-title">About the Artist</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" 
              alt="Tattoo Artist" 
              className="w-full h-full object-cover rounded-lg transform transition hover:scale-105 duration-500"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-mesh-orange">Artistic Journey</h3>
            <p className="text-gray-300 mb-6">
              MeshTattoo is a Barcelona-based artist specializing in stunning, detailed black and orange ink designs. With a passion that grew from childhood drawings to professional tattooing, my work blends traditional techniques with contemporary design principles.
            </p>
            <p className="text-gray-300 mb-6">
              Every tattoo I create is a personal journey, designed to capture your vision while adding my signature style. My studio prioritizes hygiene, comfort, and an exceptional experience from consultation to final result.
            </p>
            <p className="text-gray-300">
              Whether it's your first tattoo or an addition to your collection, I'm dedicated to creating meaningful art that you'll proudly wear for a lifetime.
            </p>
            
            <div className="mt-8">
              <a href="#contact" className="px-6 py-3 bg-mesh-orange text-white rounded-md hover:bg-opacity-80 transition-all">Get in Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
