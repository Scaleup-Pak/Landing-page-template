import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import image1 from '../assets/Featur-section/1.png';
import image2 from '../assets/Featur-section/2.png';
import image3 from '../assets/Featur-section/3.png';
import image4 from '../assets/Featur-section/4.png';
import image5 from '../assets/Featur-section/5.png';
import image6 from '../assets/Featur-section/6.png';
import image7 from '../assets/Featur-section/7.png';
import image8 from '../assets/Featur-section/8.png';
import image9 from '../assets/Featur-section/9.png';
import image10 from '../assets/Featur-section/10.png';
import image11 from '../assets/Featur-section/11.png';
import image12 from '../assets/Featur-section/12.png';
const IMAGES = [
  image1, image2, image3, image4,
  image5, image6, image7, image8,
  image9, image10, image11, image12,
];

const ImageGrid: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
      <div className="max-w-[1440px] mx-auto">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 640: 2, 900: 3, 1200: 4 }}
          gutterBreakPoints={{ 350: '8px', 640: '12px', 900: '16px', 1200: '20px' }}
        >
          <Masonry gutter="20px">
            {IMAGES.map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg mb-5">
                <img
                  src={src}
                  alt={`Feature ${idx + 1}`}
                  className="w-full h-auto block rounded-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default ImageGrid;