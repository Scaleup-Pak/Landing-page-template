export function ImageGrid() {
  // Image data representing the 14 total images (4+3+4+3)
  const imageData = [
    // Row 1: 4 images
    { id: 1, src: "https://images.unsplash.com/photo-1520637836862-4d197d17c86a?w=300&h=200&fit=crop", alt: "Person with VR headset" },
    { id: 2, src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop", alt: "Woman waving" },
    { id: 3, src: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=300&h=200&fit=crop", alt: "Woman with phone" },
    { id: 4, src: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=300&h=200&fit=crop", alt: "Woman with headphones" },
    
    // Row 2: 3 images  
    { id: 5, src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=300&h=200&fit=crop", alt: "Woman with colorful sweater" },
    { id: 6, src: "https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?w=300&h=200&fit=crop", alt: "Woman with healthy food" },
    { id: 7, src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop", alt: "Singer performing" },
    
    // Row 3: 4 images
    { id: 8, src: "https://images.unsplash.com/photo-1520637836862-4d197d17c86a?w=300&h=200&fit=crop", alt: "Person with VR headset" },
    { id: 9, src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop", alt: "Woman waving" },
    { id: 10, src: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=300&h=200&fit=crop", alt: "Woman with phone" },
    { id: 11, src: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=300&h=200&fit=crop", alt: "Woman with headphones" },
    
    // Row 4: 3 images
    { id: 12, src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=300&h=200&fit=crop", alt: "Woman with colorful sweater" },
    { id: 13, src: "https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?w=300&h=200&fit=crop", alt: "Woman with healthy food" },
    { id: 14, src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop", alt: "Singer performing" }
  ];

  // Split images into rows
  const row1 = imageData.slice(0, 4);   // First 4 images
  const row2 = imageData.slice(4, 7);   // Next 3 images  
  const row3 = imageData.slice(7, 11);  // Next 4 images
  const row4 = imageData.slice(11, 14); // Last 3 images

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px] py-8">
      <div className="max-w-[1440px] mx-auto space-y-4">
        
        {/* Row 1: 4 images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {row1.map((image) => (
            <div 
              key={image.id} 
              className="aspect-[3/2] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Row 2: 3 images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {row2.map((image) => (
            <div 
              key={image.id} 
              className="aspect-[3/2] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Row 3: 4 images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {row3.map((image) => (
            <div 
              key={image.id} 
              className="aspect-[3/2] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Row 4: 3 images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {row4.map((image) => (
            <div 
              key={image.id} 
              className="aspect-[3/2] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}