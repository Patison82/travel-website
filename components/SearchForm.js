"use client";

import { useState } from "react";

const SearchForm = () => {
  const [tripType, setTripType] = useState("return"); // State for trip type (return or one-way)
  const [addNearbyFrom, setAddNearbyFrom] = useState(false); // State for "Add nearby airports" checkbox for departure city
  const [addNearbyTo, setAddNearbyTo] = useState(false); // State for "Add nearby airports" checkbox for destination city

  return (
    <div className="bg-amber-200 shadow-2xl p-10 rounded-lg max-w-6xl mx-auto mt-4 mb-10 absolute bottom-0 left-0 right-0 z-30">
      {/* Title Section */}
      <h2 className=" text-4xl font-semibold mb-6 text-teal-800 text-center  ">
        Where to next ?
      </h2>

      {/* Trip Type Section */}
      <div className="flex mb-8 space-x-10">
        <label className="inline-flex  items-center text-gray-800">
          <input
            type="radio"
            value="return"
            checked={tripType === "return"}
            onChange={() => setTripType("return")}
            className="form-radio text-blue-600"
          />

          <span className="ml-2">RETURN</span>
        </label>
        <label className="inline-flex items-center text-gray-800">
          <input
            type="radio"
            value="oneway"
            checked={tripType === "oneway"}
            onChange={() => setTripType("oneway")}
            className="form-radio text-blue-600"
          />

          <span className="ml-2">ONE-WAY</span>
        </label>
      </div>

      {/* Cities and Dates Section */}
      <div className="flex mb-6 space-x-4">
        <div className="flex flex-col w-1/4">
          {/* Departure city */}
          <label className="font-semibold mb-2 text-gray-800">From</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Departure city"
              className="p-2 border  border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 w-full"
            />

            {/* "Add nearby airports" Section */}
            <label className="inline-flex items-center mt-2 text-sm text-gray-600">
              <input
                type="checkbox"
                className="form-checkbox text-blue-600"
                checked={addNearbyFrom}
                onChange={() => setAddNearbyFrom(!addNearbyFrom)}
              />
              <span className="ml-2 text-xs">Add nearby airports</span>
            </label>
          </div>
        </div>

        {/* Destination City */}
        <div className="flex flex-col w-1/4">
          <label className="font-semibold mb-2 text-gray-800">To</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Destination city"
              className="p-2 border  border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 w-full"
            />

            {/* Checkbox for "Add nearby airports" */}
            <label className="inline-flex items-center mt-2 text-sm text-gray-600">
              <input
                type="checkbox"
                className="form-checkbox text-blue-600"
                checked={addNearbyTo}
                onChange={() => setAddNearbyTo(!addNearbyTo)}
              />
              <span className="ml-2 text-xs">Add nearby airports</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col w-1/4">
          <label className="font-semibold mb-2 text-gray-800">Depart</label>
          <input
            type="date"
            className="p-2 border  border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 w-full"
          />
        </div>

        {/* Return Date (conditionally rendered based on trip type) */}
        {tripType === "return" && (
          <div className="flex flex-col w-full md:w-1/4">
            <label className="font-semibold mb-2 text-gray-800">Return</label>
            <input
              type="date"
              className="p-2 border  border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 w-full"
            />
          </div>
        )}
      </div>

      {/* Passengers and Class Section */}
      <div className="flex  space-x-3">
        <div className="flex flex-col w-1/6">
          {/* Number of Passengers */}
          <label className="font-semibold mb-2 text-gray-800">Passengers</label>
          <input
            type="number"
            min="0"
            defaultValue="1"
            className="p-2  border border-green-500 rounded-lg focus:outline-none  focus:ring-3 focus:ring-blue-400 transition duration-300 w-full"
          />
        </div>

        {/* Class Selection */}
        <div className="flex flex-col w-1/6">
          <label className="font-semibold mb-2 text-gray-800">Class</label>
          <select className="p-2  border border-green-500 rounded-lg focus:outline-none focus:ring-3 focus:ring-blue-500 transition duration-300 w-full">
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first">First</option>
          </select>
        </div>
      </div>

      {/*  Search Button Section */}
      <div className="flex justify-end ">
        <button className="px-6 py-3 bg-teal-500 text-amber-50 font-semibold rounded-lg  hover:bg-emerald-400 transition duration-300 shadow-lg ">
          Search Flights
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
