"use client";

import { useState } from "react";
import { LiaPlaneDepartureSolid, LiaPlaneArrivalSolid } from "react-icons/lia";
import GifBackground from "./GifBackground";

const FlightSearchForm = () => {
  // const [tripType, setTripType] = useState("return"); // State for trip type (return or one-way)
  // const [addNearbyFrom, setAddNearbyFrom] = useState(false); // State for "Add nearby airports" checkbox for departure city
  // const [addNearbyTo, setAddNearbyTo] = useState(false); // State for "Add nearby airports" checkbox for destination city
  // const [directFlightsOnly, setDirectFlightsOnly] = useState(false);

  const objdata = {
    return: false,
    oneWay: true,
    from: "",
    to: "",
    departDate: "",
    returnDate: "",
    nearbyAirportFrom: false,
    nearbyAirportTo: false,
    directFlightOnly: false,
    passenger: 1,
    class: "",
  };

  const [formSearchData, setFormSearchData] = useState(objdata);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormSearchData({
      ...formSearchData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(formSearchData).toString();
    try {
       const response = await fetch(`/api/flights?${queryParams}`);
    if (!response.ok) {
       throw new Error(`Error: ${response.statusText}`);
    }
    const flights = await response.json();
    console.log(flights); 
   } catch (error) { 
      console.error('Error fetching flights:', error); 
   }
   };

  return (
    <GifBackground className="flex items-center justify-center h-screen">
      <div className="bg-gradient-to-tr from-tertiary to-secondaryAccent   p-10 rounded-badge    max-w-6xl mx-auto mt-8 sm:mb-10  sm:bottom-0 sm:left-0 sm:right-0">
        {/* Title Section */}
        <h2 className=" text-4xl font-semibold mb-6 text-primary text-center sm:text-4xl ">
          {/* Plane Icon */}
          <div className="absolute top-8  left-1/4 text-primary">
            <LiaPlaneDepartureSolid size="1em" />
          </div>
          Where to next ?
          <div className="absolute top-8  right-1/4 text-primary">
            <LiaPlaneArrivalSolid size="1em" />
          </div>
        </h2>

        {/* Trip Type Section */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-8 sm:space-x-10 sm:flex-row sm:space-y-0 ">
            <label className="inline-flex  items-center text-black">
              <input
                name="return"
                type="checkbox"
                checked={formSearchData.return}
                onChange={handleChange}
                className="form-radio text-blue-600"
              />

              <span className="ml-2 text-">RETURN</span>
            </label>
            <label className="inline-flex items-center text-black">
              <input
                type="checkbox"
                name="oneway"
                checked={formSearchData.oneWay}
                onChange={handleChange}
                className="form-radio text-blue-600"
              />

              <span className="ml-2 ">ONE-WAY</span>
            </label>
          </div>

          {/* Cities and Dates Section */}

          <div className="flex flex-col sm:flex-row mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex flex-col sm:w-1/4 w-full ">
              {/* Departure city */}
              <label className="font-semibold mb-2 text-gray-800">From</label>
              <div className="relative">
                <input
                  name="from"
                  value={formSearchData.from}
                  onChange={handleChange}
                  type="text"
                  placeholder="Departure city"
                  className="p-2 border  border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 w-full"
                />

                {/* "Add nearby airports" Section */}
                <label className="inline-flex items-center mt-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    name="nearbyAirportFrom"
                    className="form-checkbox text-blue-600"
                    checked={formSearchData.nearbyAirportFrom}
                    onChange={handleChange}
                  />
                  <span className="ml-2 text-xs">Add nearby airports</span>
                </label>
              </div>
            </div>

            {/* Destination City */}

            <div className="flex flex-col sm:w-1/4 w-full">
              <label className="font-semibold mb-2 text-gray-800">To</label>
              <div className="relative">
                <input
                  name="to"
                  onChange={handleChange}
                  value={formSearchData.to}
                  type="text"
                  placeholder="Destination city"
                  className="p-2 border  border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 w-full"
                />

                {/* Checkbox for "Add nearby airports" */}
                <label className="inline-flex items-center mt-2 text-sm text-gray-600">
                  <input
                    name="nearbyAirport"
                    type="checkbox"
                    className="form-checkbox text-blue-600"
                    checked={formSearchData.nearbyAirportTo}
                    onChange={handleChange}
                  />
                  <span className="ml-2 text-xs">Add nearby airports</span>
                </label>
              </div>
            </div>

            {/* Departure Date */}
            <div className="flex flex-col sm:w-1/4 w-full">
              <label className="font-semibold mb-2 text-gray-800">Depart</label>
              <input
                value={formSearchData.departDate}
                name="departDate"
                onChange={handleChange}
                type="date"
                className="p-2 border  border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 w-full"
              />

              {/* Direct Flights Only Section */}
              <div className="inline-flex items-center mb-6">
                <label className="inline-flex items-center mt-2 text-sm text-gray-600 ">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-600"
                    checked={formSearchData.directFlightOnly}
                    onChange={handleChange}
                    name="directFlightOnly"
                  />
                  <span className="ml-2 mr-[8rem] text-xs ">
                    Direct flights only
                  </span>
                </label>
              </div>
            </div>

            {/* Return Date (conditionally rendered based on trip type) */}
            
              <div className="flex flex-col w-full sm:w-1/4">
                <label className="font-semibold mb-2 text-gray-800">
                  Return
                </label>
                <input
                  value={formSearchData.returnDate}
                  name="returnDate"
                  onChange={handleChange}
                  type="date"
                  className="p-2 border  border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 w-full"
                />
              </div>
            {/* conditinal bis hier */}
          </div>

          {/* Passengers and Class Section */}

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-3">
            {/* Number of Passengers */}
            <div className="flex flex-col sm:w-1/6 w-full">
              <label className="font-semibold mb-2 text-gray-800">
                Passengers
              </label>
              <input
                value={formSearchData.passenger}
                name="passenger"
                onChange={handleChange}
                type="number"
                min="1"
                defaultValue="1"
                className="p-1.5  border border-green-500 rounded-lg focus:outline-none  focus:ring-3 focus:ring-blue-400 transition duration-300 w-full"
              />
            </div>

            {/* Class Selection */}

            <div className="flex flex-col sm:w-1/6 w-full">
              <label className="font-semibold mb-2 text-gray-800">Class</label>
              <select
                onChange={handleChange}
                name="class"
                value={formSearchData.class}
                className="p-2  border border-green-500 rounded-lg focus:outline-none focus:ring-3 focus:ring-blue-500 transition duration-300 w-full"
              >
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="first">First</option>
              </select>
            </div>
          </div>

          {/*  Search Button Section */}
          <div className="flex justify-end mt-6 relative">
            <button className="px-6 py-3 text-l bg-primary text-  font-semibold rounded-lg  hover:bg-tertiary transition duration-300 shadow-lg ">
              Search Flights
            </button>
          </div>
        </form>
      </div>
    </GifBackground>
  );
};

export default FlightSearchForm;

