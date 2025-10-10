import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import image1 from "../assets/content-creator/1.png";
import image2 from "../assets/content-creator/2.png";
import image3 from "../assets/content-creator/3.png";
import image4 from "../assets/content-creator/4.png";
import image5 from "../assets/content-creator/5.png";
import './embla-carousel.css';
interface CardData {
  id: number;
  imageUrl: string;
}

const CarouselCard: React.FC<{ card: CardData; isActive: boolean }> = ({ card, isActive }) => {
  return (
    <div 
      className={`relative flex-[0_0_280px] md:flex-[0_0_320px] mx-2 transition-all duration-500 ease-out ${
        isActive 
          ? 'h-[620px] ' 
          : 'h-[540px] '
      }`}
    >
      <div className={`w-full h-full rounded-3xl overflow-hidden transition-transform duration-500 ease-out ${
        isActive ? 'scale-100' : 'scale-95'
      }`}>
        <img 
          src={card.imageUrl} 
          alt={`Slide ${card.id}`}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

const EmblaCarousel: React.FC = () => {
const [emblaRef, emblaApi] = useEmblaCarousel(
  {
    align: 'center',
    loop: true,
    skipSnaps: false,  // Changed from true to false
    dragFree: false,
    startIndex: 0,
    inViewThreshold: 0.7,  // Added - only show slides 70% in view
    containScroll: 'trimSnaps',  // Added
    watchDrag: true,  // Added
  },
  [Autoplay({ 
    delay: 3000, 
    stopOnInteraction: false,
    playOnInit: true,
    stopOnMouseEnter: false,
    stopOnLastSnap: false  // Changed from true to false (for proper looping)
  })]
);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const cards: CardData[] = [
    {
      id: 1,
      imageUrl: image1,
    },
    {
      id: 2,
      imageUrl: image2,
    },
    {
      id: 3,
      imageUrl: image3,
    },
    {
      id: 4,
      imageUrl: image4,
    },
    {
      id: 5,
      imageUrl: image5,
    },
     {
      id: 6,
      imageUrl: image1,
    },
    {
      id: 7,
      imageUrl: image2,
    },
  ];

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

return (
  <div className="bg-[#D9D9D94D] py-8">
    {/* Heading */}
    <h4
      style={{ fontFamily: "Nunito, sans-serif" }}
      className="block mx-auto w-full text-center text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[48px] leading-tight md:leading-[50px] font-sans font-bold"
    >
     Explore Our Top Content Creators
    </h4>
    
    {/* 50px gap */}
    <div className="h-[50px]"></div>
    
    {/* Carousel Component */}
    <div className="embla w-full flex flex-col items-center justify-center p-4 md:p-8">
      <div className="embla__viewport relative w-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex items-center">
          {cards.map((card, index) => (
            <div key={card.id} className="embla__slide">
              <CarouselCard 
                card={card} 
                isActive={index === selectedIndex}
              />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* 50px gap */}
    <div className="h-[50px]"></div>

    {/* Navigation - Dot Indicators */}
    <div className="flex gap-2 justify-center">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          onClick={() => scrollTo(index)}
          className={`transition-all duration-300 rounded-full ${
            index === selectedIndex
              ? 'w-8 h-3 bg-blue-600'
              : 'w-3 h-3 bg-gray-400 hover:bg-gray-500'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  </div>
);
};

export default EmblaCarousel;