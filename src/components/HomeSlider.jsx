import { useState, useEffect } from 'react';

function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionEffect, setTransitionEffect] = useState('slide'); // slide, fade, zoom
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&h=600&fit=crop",
      mobileImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=800&fit=crop",
      title: "Eğitimde Yeni Nesil Teknoloji",
      description: "Online eğitim platformumuz ile her yerde, her zaman öğrenin.",
      buttonText: "Hemen Başla",
      buttonLink: "#courses"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=600&fit=crop",
      mobileImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=800&fit=crop",
      title: "Uzman Eğitmenler",
      description: "Alanında uzman eğitmenlerle profesyonel gelişiminizi destekleyin.",
      buttonText: "Eğitmenleri Gör",
      buttonLink: "#instructors"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&h=600&fit=crop",
      mobileImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=800&fit=crop",
      title: "Sertifikalı Eğitimler",
      description: "Tamamladığınız eğitimler için sertifika alın.",
      buttonText: "Sertifikalar",
      buttonLink: "#certificates"
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        changeSlide('next');
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [currentSlide, isPaused]);

  const getTransitionClass = () => {
    switch (transitionEffect) {
      case 'fade':
        return 'transition-opacity duration-500';
      case 'zoom':
        return 'transition-transform duration-500 scale-105';
      default:
        return 'transition-transform duration-500';
    }
  };

  const changeSlide = (direction) => {
    setIsTransitioning(true);
    // Rastgele bir efekt seç
    setTransitionEffect(['slide', 'fade', 'zoom'][Math.floor(Math.random() * 3)]);

    setTimeout(() => {
      if (direction === 'next') {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div 
      className="relative w-full h-[400px] md:h-[600px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          } ${getTransitionClass()}`}
        >
          {/* Responsive Image */}
          <picture>
            <source media="(min-width: 768px)" srcSet={slide.image} />
            <source media="(max-width: 767px)" srcSet={slide.mobileImage} />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </picture>

          {/* Content Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 flex items-center justify-center">
            <div className="text-center text-white p-4 max-w-4xl mx-auto transform transition-all duration-500 scale-90 hover:scale-100">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeIn">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 animate-fadeIn delay-200">
                {slide.description}
              </p>
              <a
                href={slide.buttonLink}
                className="btn btn-primary btn-lg animate-fadeIn delay-400 hover:scale-110 transition-transform"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Interactive Controls */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Navigation Buttons */}
          <button
            className="btn btn-circle btn-ghost text-white hover:bg-white/20"
            onClick={() => changeSlide('prev')}
            disabled={isTransitioning}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Progress Dots */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white w-6' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          <button
            className="btn btn-circle btn-ghost text-white hover:bg-white/20"
            onClick={() => changeSlide('next')}
            disabled={isTransitioning}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Swipe Indicator */}
      <div className="md:hidden absolute bottom-20 left-1/2 -translate-x-1/2 text-white/75 text-sm">
        <span className="animate-pulse">← Kaydırın →</span>
      </div>
    </div>
  );
}

export default HomeSlider; 