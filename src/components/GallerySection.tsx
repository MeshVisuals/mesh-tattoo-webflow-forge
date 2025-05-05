
import React, { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const galleryItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1611501156491-16389b0fa3d4?w=800&auto=format&fit=crop",
    title: "Geometric Snake",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1562962230-16e4623d36e7?w=800&auto=format&fit=crop",
    title: "Blackwork Design",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1595229497217-24d68aacc1ff?w=800&auto=format&fit=crop",
    title: "Ornamental Pattern",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1593462544646-006076b31f41?w=800&auto=format&fit=crop",
    title: "Minimalist Lines",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1607700761058-3a803649bd81?w=800&auto=format&fit=crop",
    title: "Abstract Art",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1547226706-af7e2c9a4389?w=800&auto=format&fit=crop",
    title: "Neo-Traditional",
  }
];

const GallerySection: React.FC = () => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const openImage = (imageUrl: string) => {
    setExpandedImage(imageUrl);
  };

  const closeImage = () => {
    setExpandedImage(null);
  };

  return (
    <section id="gallery" className="section-container bg-black">
      <div className="container mx-auto">
        <h2 className="section-title">Gallery</h2>
        
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryItems.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3 pl-0">
                  <div className="p-1">
                    <div 
                      className="overflow-hidden rounded-lg cursor-pointer relative group"
                      onClick={() => openImage(item.image)}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full aspect-square object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white text-lg font-semibold">{item.title}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white border-mesh-orange hover:bg-mesh-orange" />
            <CarouselNext className="text-white border-mesh-orange hover:bg-mesh-orange" />
          </Carousel>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <div className="relative max-w-4xl max-h-full">
            <button 
              className="absolute top-4 right-4 text-white bg-mesh-orange p-2 rounded-full"
              onClick={closeImage}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={expandedImage} 
              alt="Expanded gallery image" 
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
