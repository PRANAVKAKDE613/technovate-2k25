import React, { useEffect, useRef } from 'react';
import './Scroll.css';

const ScrollbarCarousel = ({ reference }) => {
  const carouselRef = useRef(null);

  // List of image paths
  const images = Array.from({ length: 7 }, (_, i) => require(`../images/Carousel/${i + 1}Img.jpg`));

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;
    const slideWidth = carousel.querySelector('div').offsetWidth + 16; // Width of one slide + margin

    const autoScroll = setInterval(() => {
      if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0; // Reset to the beginning
      } else {
        scrollAmount += slideWidth;
      }
      carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(autoScroll);
  }, []);

  return (<>
    
    <div className="Glimpse bg-black-900 flex items-center justify-center" id="glimpse" ref={reference}>
      <div id="carouselExample" className="relative w-full max-w-4xl">
      <hr className="border-t-2 border-dashed border-gray-400 my-4"/>
        <h1 className='text-white font-semibold text-center text-4xl pt-6 m-3'>Glimpse</h1>
        <div
          id="carousel"
          ref={carouselRef}
          className="scroll-container flex overflow-x-auto snap-x snap-mandatory space-x-4 p-4 no-scrollbar"
          >
          {images.map((src, index) => (
            <div
            key={index}
            className="flex-shrink-0 w-64 h-80 bg-blue-500 text-white flex items-center justify-center rounded-lg snap-center"
            >
              <img
                className="w-full h-full object-cover rounded-lg"
                src={src}
                alt={`Slide ${index + 1}`}
                />
            </div>
          ))}
        </div>
      </div>
    </div>
          </>
  );
};

export default ScrollbarCarousel;
