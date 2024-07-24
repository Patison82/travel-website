"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from 'next/link';

const Carousel = () => {
  const carouselRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(300);
  const [itemsToShow, setItemsToShow] = useState(6);

  useEffect(() => {
    const updateCarousel = () => {
      const containerWidth = carouselRef.current?.clientWidth || 0;
      const margin = 32;
      let newItemsToShow;

      if (containerWidth >= 1200) {
        newItemsToShow = 6;
      } else if (containerWidth >= 992) {
        newItemsToShow = 4;
      } else if (containerWidth >= 768) {
        newItemsToShow = 3;
      } else {
        newItemsToShow = 2;
      }

      const newItemWidth = (containerWidth - (newItemsToShow - 1) * margin) / newItemsToShow;

      setItemsToShow(newItemsToShow);
      setItemWidth(newItemWidth);
    };

    updateCarousel();
    window.addEventListener('resize', updateCarousel);
    return () => window.removeEventListener('resize', updateCarousel);
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -itemWidth * itemsToShow,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: itemWidth * itemsToShow,
        behavior: "smooth",
      });
    }
  };

  const cities = [
    { 
      name: "Maldives", 
      image: "https://i.pinimg.com/564x/a0/54/a6/a054a66db6eb6b3e88371bf1642efed2.jpg",
      description: "Maldives vacation",
      price: "Only 599 € per week",
      linkHotels: "/hotels",
      linkFlights: "/flights",
      bgPosition: "50% 32%",
      bgSize: "cover"
    },
    { 
      name: "Chicago", 
      image: "https://i.pinimg.com/736x/42/c3/1e/42c31e128f2968ede1c91882c7cbd741.jpg",
      description: "Weekend in Chicago",
      price: "From 699 € per week",
      linkHotels: "/hotels",
      linkFlights: "/flights",
      bgPosition: "50% 40%",
      bgSize: "cover"
    },
    { 
      name: "Dublin", 
      image: "https://i.pinimg.com/564x/9b/95/a2/9b95a244321bec4c2cd31cc0b842ee1a.jpg",
      description: "Best hotels in Dublin",
      price: "From 38 € per night",
      linkHotels: "/hotels",
      linkFlights: "/flights",
      bgPosition: "100% 30%",
      bgSize: "cover"
    },
    { 
      name: "New York", 
      image: "https://i.pinimg.com/736x/1e/c9/91/1ec991612a5ab81b6ff9df8723214afa.jpg",
      description: "Shopping in New York",
      price: "Only 799 € per week",
      linkHotels: "/hotels",
      linkFlights: "/flights",
      bgPosition: "100% 20%",
      bgSize: "cover"
    },
    { 
      name: "Saloniki", 
      image: "https://i.pinimg.com/564x/7c/d8/5a/7cd85a2dfd8333dbaba666498a217d88.jpg",
      description: "Car hire in Saloniki",
      price: "From 36 €",
      linkHotels: "/hotels",
      linkFlights: "/flights",
      bgPosition: "100% 110%",
      bgSize: "cover"
    },
    { 
      name: "Lake Como", 
      image: "https://i.pinimg.com/564x/79/f1/91/79f1914397888b1e25c2583c2b556ade.jpg",
      description: "Weekend in Lake Como",
      price: "From 70 €",
      linkHotels: "/hotels",
      linkFlights: "/flights",
      bgPosition: "center center",
      bgSize: "cover"
    },
    { 
      name: "London", 
      image: "https://i.pinimg.com/564x/98/5b/5e/985b5e746c61040af9d268eaa53eb078.jpg",
      description: "Best hotels in London",
      price: "From 40 €",
      linkHotels: "/hotels",
      linkFlights: "/flights",
      bgPosition: "100% 70%",
      bgSize: "cover"
    },
    { 
      name: "Berlin", 
      image: "https://i.pinimg.com/564x/6f/89/04/6f890475c93d2e41529a903379552d07.jpg",
      description: "Best weekend in Berlin",
      price: "From 20 €",
      linkHotels: "/hotels",
      linkFlights: "/flights",
      bgPosition: "center center",
      bgSize: "cover"
    },
    { 
      name: "Paris", 
      image: "https://i.pinimg.com/564x/30/87/b5/3087b548130f018881ea7030cfbf352d.jpg",
      description: "Car hire in Paris",
      price: "From 25 €",
      linkHotels: "/hotels",
      linkFlights: "/flights",
      bgPosition: "100% 80%",
      bgSize: "cover"
    },
    { 
      name: "Oslo", 
      image: "https://i.pinimg.com/564x/fa/cb/46/facb46fc366aa8df3bbe81ee1fd20014.jpg",
      description: "Trip in Oslo",
      price: "Only 90 €",
      linkHotels: "/hotels",
      linkFlights: "/flights",
      bgPosition: "center center",
      bgSize: "cover"
    },
  ];

  return (
    <div className="relative w-full">
      <div className="w-[95%] mx-auto my-8 relative">
        <div
          className="carousel w-full rounded-box h-full overflow-x-scroll flex space-x-8 p-4 scrollbar-hide"
          ref={carouselRef}
        >
          {cities.map((city, index) => (
            <div
              key={index}
              className="carousel-item flex-none relative"
              style={{ width: itemWidth }}
            >
              <div className="w-full relative">
                <div
                  className="w-full h-80 bg-cover bg-no-repeat bg-center rounded-t-lg relative"
                  style={{
                    backgroundImage: `url(${city.image})`,
                    backgroundPosition: city.bgPosition,
                    backgroundSize: city.bgSize,
                  }}
                >
                  <div className="absolute top-44 right-6 flex space-x-4">
                    {index % 2 === 0 ? (
                      <Link href={city.linkHotels}>
                        <button className="bg-teal-200 opacity-80 font-bold text-black py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300 z-10">
                          Book Now
                        </button>
                      </Link>
                    ) : null}
                    {index % 2 === 1 ? (
                      <Link href={city.linkFlights}>
                        <button className="bg-teal-200 opacity-80 font-bold text-black py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300 z-10">
                          Flights Now
                        </button>
                      </Link>
                    ) : null}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-teal-500 p-4 rounded-b-lg cursor-pointer transition-colors duration-300 hover:bg-yellow-400">
                  <h3 className="text-white font-bold">{city.description}</h3>
                  <p className="text-white">{city.price} &gt;</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={scrollLeft}
          className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-white text-primary p-3 rounded-full shadow-lg hover:bg-primary-dark transition duration-300 z-10"
        >
          ❮
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-[-15px] top-1/2 transform -translate-y-1/2 bg-white text-primary p-3 rounded-full shadow-lg hover:bg-primary-dark transition duration-300 z-10"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
