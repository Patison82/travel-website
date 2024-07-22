"use client";

import React, { useRef } from "react";
import Link from 'next/link';

const Carousel = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const cities = [
    { 
      name: "Maldives", 
      image: "https://i.pinimg.com/564x/a0/54/a6/a054a66db6eb6b3e88371bf1642efed2.jpg",
      description: "Maldives vacation ",
      price: "Only 599 € per week ",
      link: "/destination/maldives"
    },
    { 
      name: "Chicago", 
      image: "https://i.pinimg.com/736x/42/c3/1e/42c31e128f2968ede1c91882c7cbd741.jpg",
      description: "Weekend in Chicago",
      price: "From 699 € per week",
      link: "/destination/chicago"
    },
    { 
      name: "Dublin", 
      image: "https://i.pinimg.com/564x/9b/95/a2/9b95a244321bec4c2cd31cc0b842ee1a.jpg",
      description: "Best hotels in Dublin ",
      price: "From 38 € per night ",
      link: "/destination/dublin"
    },
    { 
      name: "New York", 
      image: "https://i.pinimg.com/736x/1e/c9/91/1ec991612a5ab81b6ff9df8723214afa.jpg",
      description: "Shopping in New York",
      price: "Only 799 € per week ",
      link: "/destination/new-york"
    },
    { 
      name: "Saloniki", 
      image: "https://i.pinimg.com/564x/7c/d8/5a/7cd85a2dfd8333dbaba666498a217d88.jpg",
      description: "Car hire in Saloniki",
      price: "From 36 € ",
      link: "/destination/saloniki"
    },
    { 
      name: "Lake Como", 
      image: "https://i.pinimg.com/564x/79/f1/91/79f1914397888b1e25c2583c2b556ade.jpg",
      description: "Weekend in Lake Como",
      price: "From 70 € ",
      link: "/destination/lake-como"
    },
    { 
      name: "London", 
      image: "https://i.pinimg.com/564x/98/5b/5e/985b5e746c61040af9d268eaa53eb078.jpg",
      description: "Best hotels in London",
      price: "From 40 € ",
      link: "/destination/london"
    },
    { 
      name: "Berlin", 
      image: "https://i.pinimg.com/564x/6f/89/04/6f890475c93d2e41529a903379552d07.jpg",
      description: "Best weekend in London",
      price: "From 20 € ",
      link: "/destination/berlin"
    },
    { 
      name: "Paris", 
      image: "https://i.pinimg.com/564x/30/87/b5/3087b548130f018881ea7030cfbf352d.jpg",
      description: "Car hire in Paris",
      price: "From 25 € ",
      link: "/destination/paris"
    },
    { 
      name: "Oslo", 
      image: "https://i.pinimg.com/564x/fa/cb/46/facb46fc366aa8df3bbe81ee1fd20014.jpg",
      description: "Trip in Oslo",
      price: "Only 90 € ",
      link: "/destination/oslo"
    },
  ];

  return (
    <div className="w-[85%] mx-auto my-0 relative">
      <div
        className="carousel w-full rounded-box h-full overflow-x-scroll flex space-x-4 p-4 scrollbar-hide"
        ref={carouselRef}
       /*  style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }} */
      >
        {cities.map((city, index) => (
          <div key={index} className="carousel-item flex-none w-80">
            <Link href={city.link} className="block w-full h-64 relative">
              <img
                src={city.image}
                alt={city.description}
                className="w-full h-full object-cover rounded-t-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-teal-500 p-4 rounded-b-lg cursor-pointer transition-colors duration-300 hover:bg-yellow-400">
                <h3 className="text-white font-bold">{city.description}</h3>
                <p className="text-white">{city.price} &gt;</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 btn btn-circle hover:bg-primary z-10"
      >
        ❮
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 btn btn-circle hover:bg-primary z-10"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;