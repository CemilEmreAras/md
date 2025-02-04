import { useSlider } from '../context/SliderContext';
import { useState, useEffect } from 'react';

function HomeSlider() {
  const { sliderImages } = useSlider();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === sliderImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [sliderImages.length]);

  if (sliderImages.length === 0) {
    return <div className="h-[600px] bg-base-200 flex items-center justify-center">
      <p className="text-2xl">Henüz slider görüntüsü eklenmemiş</p>
    </div>;
  }

  return (
    <div className="relative w-full h-[600px]">
      {sliderImages.map((image, index) => (
        <div
          key={image.id}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={image.url}
            className="w-full h-full object-cover"
            alt={image.title}
          />
          <div className="absolute inset-0 flex flex-col justify-center bg-black/50">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl font-bold mb-4">{image.title}</h1>
              <p className="text-xl mb-6">{image.description}</p>
              <button className="btn btn-primary">Hemen Başla</button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-primary' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeSlider; 