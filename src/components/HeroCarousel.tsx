import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import type { CarouselApi } from '@/components/ui/carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ArrowRight } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  const slides = [
    {
      title: "Your building, your neighbourhood, one smart mobile app.",
      subtitle: "Everything that matters, right where you live.",
      image: "/assets/Slide1.jpg",
      alt: "Happy community using mobile technology",
      overlayText: "Live chat, bottom right!24/7",
    },
    {
      title: "Connect with your neighbors instantly.",
      subtitle: "Join thousands of residents who use Conexa to stay informed and engaged with their community.",
      image: "/assets/Slide2.jpg",
      alt: "People connecting and communicating",
      overlayText: "Community matters",
    },
    {
      title: "Need help? We're here for you!",
      subtitle: "In the right bottom corner you can ask us live whatever you want to know more about Conexa, because we have a live chat!",
      image: "/assets/Slide1.jpg",
      alt: "Happy people in a community setting",
      overlayText: "Live chat 24/7",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    if (!api) return;
    api.scrollTo(currentSlide);
  }, [api, currentSlide]);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrentSlide(api.selectedScrollSnap());
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="font-poppins font-semibold text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                  {slide.title.includes('mobile app') ? (
                    slide.title.split('mobile app').map((part, i) =>
                      i === 0 ? (
                        <span key={i}>
                          {part}
                          <span className="text-conexa-primary">mobile app</span>
                        </span>
                      ) : part
                    )
                  ) : (
                    slide.title
                  )}
                </h1>
                <p className="font-inter text-xl text-gray-600 mb-8">{slide.subtitle}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-conexa-primary hover:bg-blue-700 text-lg px-8 py-6 transition-all hover:scale-105">
                    Get Conexa
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                {slide.overlayText && (
                  <div className="absolute inset-0 flex items-center justify-center px-4">
                    <span className="text-white text-3xl sm:text-4xl lg:text-6xl font-extrabold text-center bg-black/40 px-6 py-4 rounded-xl drop-shadow-lg">
                      {slide.overlayText}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />

      <div className="flex justify-center mt-8 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-conexa-primary' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </Carousel>
  );
};

export default HeroCarousel;
