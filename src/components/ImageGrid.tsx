import image1 from '../assets/Featur-section/1.jpg';
import image2 from '../assets/Featur-section/2.jpg';
import image3 from '../assets/Featur-section/3.jpg';
import image4 from '../assets/Featur-section/4.jpg';
import image5 from '../assets/Featur-section/5.jpg';
import image6 from '../assets/Featur-section/6.jpg';
import image7 from '../assets/Featur-section/7.jpg';

export function ImageGrid() {
  // Image data representing the 14 total images (4+3+4+3)
  const imageData = [
    // Row 1: 4 images
    { id: 1, src: image1, alt: "Person with VR headset" },
    { id: 2, src: image2, alt: "Woman waving" },
    { id: 3, src: image3, alt: "Woman with phone" },
    { id: 4, src: image4, alt: "Woman with headphones" },

    // Row 2: 3 images
    { id: 5, src: image5, alt: "Woman with colorful sweater" },
    { id: 6, src: image6, alt: "Woman with healthy food" },
    { id: 7, src: image7, alt: "Singer performing" },

    // // Row 3: 4 images
    // { id: 8, src: image1, alt: "Person with VR headset" },
    // { id: 9, src: image2, alt: "Woman waving" },
    // { id: 10, src: image3, alt: "Woman with phone" },
    // { id: 11, src: image4, alt: "Woman with headphones" },

    // // Row 2: 3 images
    // { id: 5, src: image5, alt: "Woman with colorful sweater" },
    // { id: 6, src: image6, alt: "Woman with healthy food" },
    // { id: 7, src: image7, alt: "Singer performing" },
  ]
  // Split images into rows
  const row1 = imageData.slice(0, 4);   // First 4 images
  const row2 = imageData.slice(4, 7);   // Next 3 images  
  const row3 = imageData.slice(7, 11);  // Next 4 images
  const row4 = imageData.slice(11, 14); // Last 3 images

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px] ">
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