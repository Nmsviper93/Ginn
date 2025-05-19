import React, { useState, useEffect } from 'react';

// Define the structure for individual slides
interface Slide {
  id: number;
  image: string;
  caption?: string;
}

interface SlideshowProps {
  slides: Slide[];
}

const Slideshow: React.FC<SlideshowProps> = ({ slides }) => {
  // Track current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Manual slide navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full">
      {/* Slideshow container */}
      <div className="relative aspect-video overflow-hidden rounded-2xl">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-opacity duration-500 
              ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all
              ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;