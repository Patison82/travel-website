"use client"
import React, { useState } from 'react';
import HotelCard from '../../components/HotelCard';
import { subtotalState } from '../../atoms/cartState';
const Hotels = () => {
  const [cart, setCart] = useState([]);

  const data = [
    {
      id: 1,
      name: "Hotel num1",
      price: 222,
      image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Quantity: 1
    },
    {
      id: 2,
      name: "Hotel num2",
      price: 782,
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Quantity: 1
    },
    {
      id: 3,
      name: "Hotel num3",
      price: 452,
      image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Quantity: 1
    },
    {
      id: 4,
      name: "Hotel num4",
      price: 220,
      image: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Quantity: 1
    }
  ];



  return (
    <>
      <h1 className="text-center p-40">Our Hotels</h1>
      <div className="flex items-center justify-center gap-16px p-4">
        {data.map(hotel => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
      <div>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - {item.price} €</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Hotels;
