import { createContext, useContext, useState } from 'react';

const SliderContext = createContext();

export function SliderProvider({ children }) {
  const [sliderImages, setSliderImages] = useState([
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070',
      title: 'Eğitimde Mükemmellik',
      description: 'Geleceğinizi şekillendirmek için doğru yerdesiniz.'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071',
      title: 'Profesyonel Eğitim',
      description: 'Uzman kadromuzla yanınızdayız.'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070',
      title: 'Modern Eğitim',
      description: 'En son teknolojilerle eğitim.'
    }
  ]);

  const addSliderImage = (newImage) => {
    setSliderImages([...sliderImages, { ...newImage, id: Date.now() }]);
  };

  const updateSliderImage = (id, updatedImage) => {
    setSliderImages(sliderImages.map(img => 
      img.id === id ? { ...img, ...updatedImage } : img
    ));
  };

  const deleteSliderImage = (id) => {
    setSliderImages(sliderImages.filter(img => img.id !== id));
  };

  return (
    <SliderContext.Provider value={{ 
      sliderImages, 
      addSliderImage,
      updateSliderImage,
      deleteSliderImage
    }}>
      {children}
    </SliderContext.Provider>
  );
}

export function useSlider() {
  return useContext(SliderContext);
} 