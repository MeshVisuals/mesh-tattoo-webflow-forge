
import React, { useRef, useEffect, useState } from 'react';

const galleryItems = [
  {
    id: 1,
    image: "/lovable-uploads/bf94c593-e7ef-43d2-9163-468e71b7e12f.png",
    title: "Traditional Sailor Tattoo",
    row: 1
  },
  {
    id: 2,
    image: "/lovable-uploads/b41d05ab-56ec-4dfb-aea7-e4bdf12eaa07.png",
    title: "Artist Portfolio",
    row: 2
  },
  {
    id: 3,
    image: "/lovable-uploads/10f2ab06-3a37-45b2-ae8a-aab1ba988d35.png",
    title: "Tattoo Inks",
    row: 3
  },
  {
    id: 4,
    image: "/lovable-uploads/a9e43126-35a9-4595-9b3b-492e35ad1177.png",
    title: "Wolf Tattoo",
    row: 1
  },
  {
    id: 5,
    image: "/lovable-uploads/858e3285-cd01-44f5-8881-8e42de8fb17f.png",
    title: "Skull with Flames",
    row: 2
  },
  {
    id: 6,
    image: "/lovable-uploads/bfbcdcbb-5c30-4e58-a02a-66f82c8f02b4.png",
    title: "Viking Skull",
    row: 3
  },
  {
    id: 7,
    image: "/lovable-uploads/14766e28-8b5c-49bf-a3db-aec43b711d21.png",
    title: "Sailor Tattoo Linework",
    row: 1
  },
  {
    id: 8,
    image: "/lovable-uploads/24ef9012-87f2-44f8-8298-cd27f1a61b8c.png",
    title: "Tattoo Station",
    row: 2
  },
  {
    id: 9,
    image: "/lovable-uploads/b2f7eafa-7714-4e17-8d31-2ef02144ce52.png",
    title: "Super Mario Tattoo",
    row: 3
  },
  {
    id: 10,
    image: "/lovable-uploads/dd879841-0bc8-4fdf-9d32-5319f89de8fb.png",
    title: "Japanese Yokai",
    row: 1
  },
  {
    id: 11,
    image: "/lovable-uploads/75c3daa4-0972-4700-b4c1-d380cc68ebb3.png",
    title: "Japanese Yokai B&W",
    row: 2
  },
  {
    id: 12,
    image: "/lovable-uploads/2eb95d6f-238e-4256-a01e-1a012f0ece58.png",
    title: "American Eagle",
    row: 3
  },
  {
    id: 13,
    image: "/lovable-uploads/de032bc9-b66a-46a4-9fd1-9d5391c44b24.png",
    title: "Traditional Girl",
    row: 1
  },
  {
    id: 14,
    image: "/lovable-uploads/d13c83b8-c6f0-471e-91dd-dbd924547cfe.png",
    title: "Peony Flowers",
    row: 2
  },
  {
    id: 15,
    image: "/lovable-uploads/ac650ab7-3ac5-43fa-98b3-155f2f7c1396.png",
    title: "Japanese Geisha",
    row: 3
  },
  // Add uploaded images
  {
    id: 16,
    image: "/lovable-uploads/5661558a-86b4-4378-8f1f-d3684e77fa74.png",
    title: "Orange Sky",
    row: 1
  },
  {
    id: 17,
    image: "/lovable-uploads/d75616e1-d5a7-4bee-8315-7b7ed2dc5f5c.png",
    title: "Orange Water",
    row: 2
  },
  {
    id: 18,
    image: "/lovable-uploads/1a3dfa6a-25a1-4c85-b6f3-5aa3c58b5dba.png",
    title: "Red Glow",
    row: 3
  },
  {
    id: 19,
    image: "/lovable-uploads/69c088be-e629-4737-8011-b235c07e72c5.png",
    title: "Orange Haze",
    row: 1
  },
  {
    id: 20,
    image: "/lovable-uploads/0572c16c-a772-4c83-b7c4-5ad1aabc1483.png",
    title: "Red Horizon",
    row: 2
  },
  {
    id: 21,
    image: "/lovable-uploads/d88b8ebf-e4f6-4597-9d68-401c5479b213.png",
    title: "Orange Waves",
    row: 3
  }
];

const MasonryGallery: React.FC = () => {
  const rowRefs = useRef<HTMLDivElement[]>([]);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Function to animate the rows
    const animateRows = () => {
      const rows = rowRefs.current;
      if (!rows.length) return;

      rows.forEach((row, index) => {
        // Alternate direction for each row
        const direction = index % 2 === 0 ? -1 : 1;
        const speed = (index + 1) * 0.5;
        
        // Initial position to make animation continuous
        if (!row.style.transform) {
          row.style.transform = `translateX(0px)`;
        }
        
        const currentX = parseFloat(row.style.transform.replace(/[^0-9\-\.]/g, '')) || 0;
        let newX = currentX + (direction * speed);
        
        // Reset position when row moves too far
        const rowWidth = row.scrollWidth;
        const viewportWidth = window.innerWidth;
        
        if (direction < 0 && newX < -rowWidth / 2) {
          newX = viewportWidth;
        } else if (direction > 0 && newX > viewportWidth) {
          newX = -rowWidth / 2;
        }
        
        row.style.transform = `translateX(${newX}px)`;
      });
      
      requestAnimationFrame(animateRows);
    };
    
    const animationId = requestAnimationFrame(animateRows);
    return () => cancelAnimationFrame(animationId);
  }, []);
  
  const openImage = (imageUrl: string) => {
    setExpandedImage(imageUrl);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setExpandedImage(null);
    // Re-enable body scrolling
    document.body.style.overflow = '';
  };

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && expandedImage) {
        closeImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedImage]);

  return (
    <section id="gallery" className="section-container bg-black overflow-hidden">
      <div className="container mx-auto mb-12">
        <h2 className="section-title font-sans">Gallery</h2>
      </div>
      
      <div className={`w-full overflow-hidden transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {[1, 2, 3].map((rowNum) => (
          <div
            key={rowNum}
            ref={(el) => {
              if (el) rowRefs.current[rowNum - 1] = el;
            }}
            className="flex py-2 space-x-4 whitespace-nowrap"
            style={{
              transform: 'translateX(0px)',
              willChange: 'transform'
            }}
          >
            {galleryItems
              .filter(item => item.row === rowNum)
              .map((item) => (
                <div
                  key={item.id}
                  className="inline-block w-64 h-64 flex-shrink-0 overflow-hidden rounded-lg cursor-pointer relative group"
                  onClick={() => openImage(item.image)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-semibold">{item.title}</p>
                  </div>
                </div>
              ))}
            {/* Duplicate items for seamless looping */}
            {galleryItems
              .filter(item => item.row === rowNum)
              .map((item) => (
                <div
                  key={`dup-${item.id}`}
                  className="inline-block w-64 h-64 flex-shrink-0 overflow-hidden rounded-lg cursor-pointer relative group"
                  onClick={() => openImage(item.image)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-semibold">{item.title}</p>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>

      {/* Full Screen Image Modal with improved accessibility */}
      {expandedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="relative max-w-4xl max-h-full">
            <button 
              className="absolute top-4 right-4 text-white bg-mesh-orange p-2 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                closeImage();
              }}
              aria-label="Close image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              id="modal-title"
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

export default MasonryGallery;
