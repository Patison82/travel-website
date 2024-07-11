"use client";

import React, { useRef } from "react";

const Carousel = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300, // Adjust this value as needed to control how much the carousel scrolls
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300, // Adjust this value as needed to control how much the carousel scrolls
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-[85%] mx-auto my-0">
      <div
        className="carousel w-full rounded-box h-[100%] overflow-x-scroll"
        ref={carouselRef}
      >
        <div className="carousel-item h-full inline-block">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            alt="Bild 1"
          />
        </div>
        <div className="carousel-item h-full inline-block">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            alt="Bild 2"
          />
        </div>
        <div className="carousel-item h-full inline-block">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            alt="Bild 3"
          />
        </div>
        <div className="carousel-item h-full inline-block">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            alt="Bild 4"
          />
        </div>
        <div className="carousel-item h-full inline-block">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            alt="Bild 5"
          />
        </div>
        <div className="carousel-item h-full inline-block">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            alt="Bild 6"
          />
        </div>
        <div className="carousel-item h-full inline-block">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            alt="Bild 7"
          />
        </div>
      </div>
      <div className=" flex justify-between  ">
        <button
          onClick={scrollLeft}
          className="btn btn-circle relative bottom-56 right-6 hover:bg-primary"
        >
          ❮
        </button>
        <button
          onClick={scrollRight}
          className="
       relative bottom-56 left-6 btn btn-circle hover:bg-primary"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
