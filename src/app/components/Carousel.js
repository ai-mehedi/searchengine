"use client"
import { useState } from 'react';
import { FiChevronLeft,FiChevronRight  } from "react-icons/fi";

const Carousel = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showPrevious, setShowPrevious] = useState(false);
  const [showNext, setShowNext] = useState(true);

  const scrollLeft = () => {
    const newPosition = scrollPosition - 200; // Adjust the scroll amount as needed
    setScrollPosition(newPosition);
    setShowNext(true);
    if (newPosition <= 0) {
      setShowPrevious(false);
    }
  };

  const scrollRight = () => {
    const newPosition = scrollPosition + 200; // Adjust the scroll amount as needed
    setScrollPosition(newPosition);
    setShowPrevious(true);
    if (newPosition >= 0) {
      setShowNext(false);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex gap-4 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${scrollPosition}px)` }}
      >
        {children}
      </div>
      {showPrevious && (
        <button
          className="absolute  border-[1px] top-1/2 left-4 transform -translate-y-1/2 bg-white p-2  rounded-full shadow-md"
          onClick={scrollLeft}
        >
          <FiChevronLeft className='h-8 w-8'/>
        </button>
      )}
      {showNext && (
        <button
          className="absolute border-[1px]  top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          onClick={scrollRight}
        >
         <FiChevronRight className='h-8 w-8'/>
        </button>
      )}
    </div>
  );
};

export default Carousel;
