import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import image1 from "../assets/content-creator/1.png";
import image2 from "../assets/content-creator/2.png";
import image3 from "../assets/content-creator/3.png";
import image4 from "../assets/content-creator/4.png";
import image5 from "../assets/content-creator/5.png";
// import up to 16 images as needed
import image6 from "../assets/content-creator/6.png";
import image7 from "../assets/content-creator/7.png";
import image8 from "../assets/content-creator/8.png";
import image9 from "../assets/content-creator/9.png";
import image10 from "../assets/content-creator/10.png";
import image12 from "../assets/content-creator/12.png";
import image404 from "../assets/content-creator/404.png";
import image14 from "../assets/content-creator/14.png";
import image15 from "../assets/content-creator/15.png";
import image16 from "../assets/content-creator/16.png";
import './embla-carousel.css';

interface CardData {
  id: number;
  imageUrl: string;
}

const CarouselCard: React.FC<{ card: CardData; isActive: boolean }> = ({ card, isActive }) => {
  return (
    <div 
      className="relative h-[598.417px] flex items-center justify-center"
    >
      <div className={`rounded-3xl overflow-hidden transition-transform duration-500 ease-out will-change-transform ${isActive ? 'w-full h-full scale-100' : 'w-[95%] h-[478.326px] scale-95'}`}>
        <img 
          src={card.imageUrl} 
          alt={`Slide ${card.id}`}
          className="w-full h-full object-cover"
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
      skipSnaps: false,
      dragFree: false,

      slidesToScroll: 1,
      containScroll: 'trimSnaps',
      duration: 25, // Smooth transition duration
    },
    [Autoplay({ 
      delay: 3000, 
      stopOnInteraction: false,
      playOnInit: true,
      stopOnMouseEnter: false,
      stopOnLastSnap: false,
    })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const cards: CardData[] = [
    { id: 1, imageUrl: image1 },
    { id: 2, imageUrl: image2 },
    { id: 3, imageUrl: image3 },
    { id: 4, imageUrl: image4 },
    { id: 5, imageUrl: image5 },
    { id: 6, imageUrl: image6 },
    { id: 7, imageUrl: image7 },
    { id: 8, imageUrl: image8 },
    { id: 9, imageUrl: image9 },
    { id: 10, imageUrl: image10 },
    { id: 11, imageUrl: image12 },
    { id: 12, imageUrl: image14 },
    { id: 13, imageUrl: image15 },
    { id: 14, imageUrl: image16 },
    { id: 15, imageUrl: image404 },
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
      <h4 
        style={{ fontFamily: "Nunito, sans-serif" }} 
        className="block mx-auto w-full text-center text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[48px] leading-tight md:leading-[50px] font-sans font-bold"
      >
        Explore Our Top Creators
      </h4>
      
      <div className="h-[50px]"></div>
      
      <div className="embla w-full flex flex-col items-center justify-center  p-4 md:p-8">
        <div className="embla__viewport   relative w-full overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex items-center">
            {cards.map((card, index) => (
              <div key={`${card.id}-${index}`} className="embla__slide">
                <CarouselCard 
                  card={card} 
                  isActive={selectedIndex === index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[50px]"></div>

      <div className="flex gap-2 justify-center">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`transition-all duration-300 rounded-full ${
              index === selectedIndex ? 'w-8 h-3 bg-blue-600' : 'w-3 h-3 bg-[#FFFFFF]'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;