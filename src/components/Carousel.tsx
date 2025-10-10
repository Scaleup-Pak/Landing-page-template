import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface CardData {
  id: number;
  imageUrl: string;
}

const CarouselCard: React.FC<{ card: CardData; isActive: boolean }> = ({ card, isActive }) => {
  return (
    <div 
      className={`relative flex-[0_0_280px] md:flex-[0_0_320px] mx-2 transition-all duration-500 ease-out ${
        isActive 
          ? 'h-[620px] opacity-100' 
          : 'h-[540px] opacity-70'
      }`}
    >
      <div className={`w-full h-full rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 ease-out ${
        isActive ? 'scale-100' : 'scale-95'
      }`}>
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
      startIndex: 0,
    },
    [Autoplay({ 
      delay: 3000, 
      stopOnInteraction: false,
      playOnInit: true,
      stopOnMouseEnter: false,
      stopOnLastSnap: false
    })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const cards: CardData[] = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=700&fit=crop',
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1682687221038-404cb8830901?w=400&h=700&fit=crop',
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=400&h=700&fit=crop',
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?w=400&h=700&fit=crop',
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1682687220067-dced9a881b56?w=400&h=700&fit=crop',
    },
     {
      id: 6,
      imageUrl: 'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?w=400&h=700&fit=crop',
    },
    {
      id: 7,
      imageUrl: 'https://images.unsplash.com/photo-1682687220067-dced9a881b56?w=400&h=700&fit=crop',
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
      <div className="w-full flex flex-col items-center justify-center p-4 md:p-8">
        <div className="relative w-full">
          <div className="overflow-hidden py-10" ref={emblaRef}>
            <div className="flex items-center">
              {cards.map((card, index) => (
                <CarouselCard 
                  key={card.id} 
                  card={card} 
                  isActive={index === selectedIndex}
                />
              ))}
            </div>
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