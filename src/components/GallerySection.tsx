
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
    image: "/lovable-uploads/bf94c593-e7ef-43d2-9163-468e71b7e12f.png",
    title: "Traditional Sailor Tattoo",
  },
  {
    id: 2,
    image: "/lovable-uploads/b41d05ab-56ec-4dfb-aea7-e4bdf12eaa07.png",
    title: "Artist Portfolio",
  },
  {
    id: 3,
    image: "/lovable-uploads/10f2ab06-3a37-45b2-ae8a-aab1ba988d35.png",
    title: "Tattoo Inks",
  },
  {
    id: 4,
    image: "/lovable-uploads/a9e43126-35a9-4595-9b3b-492e35ad1177.png",
    title: "Wolf Tattoo",
  },
  {
    id: 5,
    image: "/lovable-uploads/858e3285-cd01-44f5-8881-8e42de8fb17f.png",
    title: "Skull with Flames",
  },
  {
    id: 6,
    image: "/lovable-uploads/bfbcdcbb-5c30-4e58-a02a-66f82c8f02b4.png",
    title: "Viking Skull",
  },
  {
    id: 7,
    image: "/lovable-uploads/14766e28-8b5c-49bf-a3db-aec43b711d21.png",
    title: "Sailor Tattoo Linework",
  },
  {
    id: 8,
    image: "/lovable-uploads/24ef9012-87f2-44f8-8298-cd27f1a61b8c.png",
    title: "Tattoo Station",
  },
  {
    id: 9,
    image: "/lovable-uploads/b2f7eafa-7714-4e17-8d31-2ef02144ce52.png",
    title: "Super Mario Tattoo",
  },
  {
    id: 10,
    image: "/lovable-uploads/dd879841-0bc8-4fdf-9d32-5319f89de8fb.png",
    title: "Japanese Yokai",
  },
  {
    id: 11,
    image: "/lovable-uploads/75c3daa4-0972-4700-b4c1-d380cc68ebb3.png",
    title: "Japanese Yokai B&W",
  },
  {
    id: 12,
    image: "/lovable-uploads/2eb95d6f-238e-4256-a01e-1a012f0ece58.png",
    title: "American Eagle",
  },
  {
    id: 13,
    image: "/lovable-uploads/de032bc9-b66a-46a4-9fd1-9d5391c44b24.png",
    title: "Traditional Girl",
  },
  {
    id: 14,
    image: "/lovable-uploads/d13c83b8-c6f0-471e-91dd-dbd924547cfe.png",
    title: "Peony Flowers",
  },
  {
    id: 15,
    image: "/lovable-uploads/ac650ab7-3ac5-43fa-98b3-155f2f7c1396.png",
    title: "Japanese Geisha",
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
