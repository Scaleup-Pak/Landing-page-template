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
import image13 from '../assets/Featur-section/13.png';

const IMAGES = [
  { src: image1, stacked: false },
  { src: [image2, image13], stacked: true },
  { src: image3, stacked: false },
  { src: image4, stacked: false },
  { src: image5, stacked: false },
  { src: image6, stacked: false },
  { src: image7, stacked: false },
  { src: image8, stacked: false },
  { src: image9, stacked: false },
  { src: image10, stacked: false },
  { src: image11, stacked: false },
  { src: image12, stacked: false },
];

const ImageGrid: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
      <div className="max-w-[1440px] mx-auto">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 640: 2, 900: 3, 1200: 4 }}
        >
          <Masonry gutter="20px">
            {IMAGES.map((item, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg">
                {item.stacked ? (
                  <div className="flex flex-col gap-2">
                    {(item.src as string[]).map((imgSrc, imgIdx) => (
                      <div key={imgIdx} className="overflow-hidden rounded-lg">
                        <img
                          src={imgSrc}
                          alt={`Feature ${idx + 1}-${imgIdx + 1}`}
                          className={`w-full block rounded-lg ${
                            imgIdx === 1 ? 'h-[280px] object-fill' : 'h-auto'
                          }`}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <img
                    src={item.src as string}
                    alt={`Feature ${idx + 1}`}
                    className="w-full h-auto block rounded-lg"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default ImageGrid;