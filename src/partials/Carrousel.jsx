import React, { useState, useEffect } from 'react';
import ArrowLeft from '../images/arrow-left.svg';
import ArrowRight from '../images/arrow-right.svg';
import Dot from '../images/dot-full.svg';
import DotEmpty from '../images/dot-empty.svg';
import Guadalajara from '../images/guadalajara.png';
import Guadalajara2 from '../images/guadalajara2.png';
import Guadalajara3 from '../images/guadalajara3.png';
import Queretaro from '../images/queretaro.png';
import Queretaro2 from '../images/queretaro2.png';

function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const delay = 3000;
  const slides = [
    {
      url: Queretaro,
    },
    {
      url: Guadalajara,
    },
    {
      url: Guadalajara2,
    },
    {
      url: Queretaro2,
    },
    {
      url: Guadalajara3,
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [currentIndex]);

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-300"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <button onClick={prevSlide}><img className="h-4" src={ArrowLeft}/></button>
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <button onClick={nextSlide}><img className="h-4" src={ArrowRight}/></button>
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="cursor-pointer"
          >
            <img className="h-6" src={currentIndex === slideIndex ? Dot : DotEmpty}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrousel;
