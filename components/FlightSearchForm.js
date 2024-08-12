"use client";

import { useState } from "react";
import { LiaPlaneDepartureSolid, LiaPlaneArrivalSolid } from "react-icons/lia";

const FlightSearchForm = () => {
  const objdata = {
    flightReturn: false,
    oneWay: false,
    countryFrom: "",
    countryTo: "",
    departDate: "",
    returnDate: "",
    nearbyAirportFrom: false,
    nearbyAirportTo: false,
    directFlightOnly: false,
    passenger: 1,
    travelClass: "",
  };

  const [formSearchData, setFormSearchData] = useState(objdata);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormSearchData({
      ...formSearchData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "flightReturn") {
      setFormSearchData((prevState) => ({
        ...prevState,
        flightReturn: checked,
        oneWay: !checked,
      }));
    } else if (name === "oneWay") {
      setFormSearchData((prevState) => ({
        ...prevState,
        flightReturn: !checked,
        oneWay: checked,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formSearchData);

    const filteredData = Object.fromEntries(
      Object.entries(formSearchData).filter(([key, value]) =>
        value !== "" ? value.length > 0 : true
      )
    );

    const queryParams = new URLSearchParams(filteredData).toString();
    console.log(queryParams);
    try {
      const response = await fetch(`/api/flights?${queryParams}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const flights = await response.json();
      console.log("bekommende daten", flights);
    } catch (error) {
      console.error("Error fetching flights:", error);
    }
  };

  //  Validierung bleibt auskommentiert
  // const filteredData = Object.fromEntries(
  //   Object.entries(formSearchData).filter(
  //     ([key, value]) =>
  //       value !== "" ? value.length > 0 : true)
  //   )

  return (
    <div
      className="inset-0 z-0 bg-cover bg-center h-full w-full py-4 px-4"
      style={{ backgroundImage: "url('/background1.gif')" }}
    >
      <div className="bg-gradient-to-tr from-tertiary to-secondaryAccent p-10 rounded-badge    max-w-6xl mx-auto mt-8 sm:mb-10  sm:bottom-0 sm:left-0 sm:right-0">
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
                name="flightReturn"
                type="checkbox"
                checked={formSearchData.flightReturn}
                onChange={handleChange}
                className="form-radio text-blue-600"
              />

              <span className="ml-2 text-">RETURN</span>
            </label>
            <label className="inline-flex items-center text-black">
              <input
                type="checkbox"
                name="oneWay"
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
              <label className="font-semibold mb-2 text-gray-800">
                Country From
              </label>
              <div className="relative">
                <input
                  name="countryFrom"
                  onChange={handleChange}
                  value={formSearchData.countryFrom}
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
              <label className="font-semibold mb-2 text-gray-800">
                Country To
              </label>
              <div className="relative">
                <input
                  name="countryTo"
                  onChange={handleChange}
                  value={formSearchData.countryTo}
                  type="text"
                  placeholder="Destination city"
                  className="p-2 border  border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 w-full"
                />

                {/* Checkbox for "Add nearby airports" */}
                <label className="inline-flex items-center mt-2 text-sm text-gray-600">
                  <input
                    name="nearbyAirportTo"
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
              <label className="font-semibold mb-2 text-gray-800">Return</label>
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
                className="p-1.5  border border-green-500 rounded-lg focus:outline-none  focus:ring-3 focus:ring-blue-400 transition duration-300 w-full"
              />
            </div>

            {/* Class Selection */}

            <div className="flex flex-col sm:w-1/6 w-full">
              <label className="font-semibold mb-2 text-gray-800">Class</label>
              <select
                onChange={handleChange}
                name="travelClass"
                value={formSearchData.travelClass}
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
    </div>
  );
};

export default FlightSearchForm;
