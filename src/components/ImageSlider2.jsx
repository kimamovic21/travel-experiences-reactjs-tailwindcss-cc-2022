import React, { useState } from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';

const ImageSlider2 = () => {
    const slides = [
        {
          url: 'https://images.unsplash.com/photo-1464093515883-ec948246accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2659&q=80',
          title: 'Lobster',
        },
        {
          url: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
          title: 'Sushi',
        },
        {
          url: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
          title: 'Pasta',
        },
        {
          url: 'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
          title: 'Salmon',
        },
    ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    console.log('prev click');
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    console.log('next click');
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className='max-w-[1100px] h-[580px] w-full m-auto py-16 px-4 relative group'>

        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-300' style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>

        {/* Left Side */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 0 text-[#f5f5f5] cursor-pointer group-hover:bg-black/30'>
                <BsChevronCompactLeft onClick={prevSlide} size={30}/>
            </div>
        {/* Right Side */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-[#f5f5f5] cursor-pointer group-hover:bg-black/30'>
                <BsChevronCompactRight onClick={nextSlide} size={30}/>
            </div>

            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div className='text-2xl cursor-pointer' key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                        <RxDotFilled size={30}/>
                    </div>
                ))}
            </div>

    </section>
  );
};

export default ImageSlider2;




// 1. stiliziramo roditelj element
// 2. dodajemo i stiliziramo elemente unutar roditelj elementa
// 3. dodajemo slides niz
// 4. dodajemo useState React hook
// 5. dodajemo funkcije prevSlide, nextSlide i goToSlide
// 6. dodajemo onClick dogadaje
