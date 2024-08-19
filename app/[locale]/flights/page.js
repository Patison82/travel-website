'use client';
import { useState, useEffect } from 'react';


const airlines = [
  { name: 'EasyJet' },
  { name: 'Austrian Airlines' },
  { name: 'British Airways' },
  { name: 'Lufthansa' },
  { name: 'Wizzair' },
  { name: 'Ryanair' },
  { name: 'KLM' },
  { name: 'Scandinavian Airlines' },
  { name: 'Qatar Airways' },
  { name: 'Turkish Airlines' },
  { name: 'United Airlines' },
];
//planelist
const flights = [
  {
    id: 1,
    airline: 'EasyJet',
    departure: '2024-08-14T01:00:00Z',
    arrival: '2024-08-14T04:05:00Z',
    departureAirport: 'BER Berlin',
    arrivalAirport: 'VCE Venice',
    price: 39.99,
    duration: '3 hrs 05 mins',
    type: '1 stop', 
    included: ['small bag'],
    image: 'https://i.pinimg.com/564x/e0/83/b4/e083b470d501ce6d1ccef4ce3e703984.jpg',
    stops: [
      { city: 'Paris', duration: '2 hrs' } 
    ]
  },
  {
    id: 2,
    airline: 'Lufthansa',
    departure: '2024-08-14T06:00:00Z',
    arrival: '2024-08-14T10:00:00Z',
    departureAirport: 'BER Berlin',
    arrivalAirport: 'DXB Dubai',
    price: 122.99,
    duration: '4 hrs',
    type: 'Direct flight',
    included: ['small bag', 'hand luggage', 'checked luggage'],
    image: 'https://i.pinimg.com/564x/08/ed/f2/08edf27b6ccafa2ff4986f30e34bbcec.jpg'
  },
  {
    id: 3,
    airline: 'Ryanair',
    departure: '2024-08-14T12:40:00Z',
    arrival: '2024-08-14T18:30:00Z',
    departureAirport: 'BER Berlin',
    arrivalAirport: 'BCN Barcelona',
    price: 49.99,
    duration: '4 hrs 30 mins',
    type: '1 stop', 
    included: ['small bag'],
    image: 'https://i.pinimg.com/564x/84/55/a2/8455a25d64d22d64d5416372e304007b.jpg',
    stops: [
      { city: 'Paris', duration: '2 hrs' } 
    ]
  },
  {
    id: 4,
    airline: 'KLM',
    departure: '2024-08-14T22:00:00Z',
    arrival: '2024-08-14T06:20:00Z',
    departureAirport: 'BER-Berlin',
    arrivalAirport: 'YVR-Toronto',
    price: 469.99,
    duration: '8 hrs 20 mins',
    type: 'Direct flight',
    included: ['small bag', 'hand luggage', 'checked luggage'],
    image: 'https://i.pinimg.com/564x/8d/81/68/8d816801b457e6e5c18213ba3e5f0427.jpg'
  },
  {
    id: 5,
    airline: 'Lufthansa',
    departure: '2024-08-14T07:30:00Z',
    arrival: '2024-08-14T11:00:00Z',
    departureAirport: 'MU Munich',
    arrivalAirport: 'HAM Hamburg',
    price: 22.99,
    duration: '3 hrs',
    type: '1 stop', 
    included: ['small bag','checked luggage'],
    image: 'https://i.pinimg.com/564x/08/ed/f2/08edf27b6ccafa2ff4986f30e34bbcec.jpg',
    stops: [
      { city: 'Paris', duration: '1 hr' } 
    ]
  },
  {
    id: 6,
    airline: 'EasyJet',
    departure: '2024-08-14T08:00:00Z',
    arrival: '2024-08-14T10:00:00Z',
    departureAirport: 'BER Berlin',
    arrivalAirport: 'DUS Düsseldorf',
    price: 82.99,
    duration: '2 hrs',
    type: 'Direct flight',
    included: ['small bag', 'hand luggage', 'checked luggage'],
    image: 'https://i.pinimg.com/564x/e0/83/b4/e083b470d501ce6d1ccef4ce3e703984.jpg'
  },
  {
    id: 7,
    airline: 'Turkish Airlines',
    departure: '2024-08-14T15:40:00Z',
    arrival: '2024-08-14T18:00:00Z',
    departureAirport: 'BRE Bremen ',
    arrivalAirport: 'AYT Antalya',
    price: 299.99,
    duration: '3 hrs 20 mins',
    type: 'Direct flight',
    included: ['small bag', 'checked luggage'],
    image: 'https://i.pinimg.com/564x/17/89/d4/1789d40199ce53f43f645bdb1d7e2fe5.jpg'
  },
  {
    id: 8,
    airline: 'Ryanair',
    departure: '2024-08-14T00:40:00Z',
    arrival: '2024-08-14T10:00:00Z',
    departureAirport: 'LEJ Leipzig',
    arrivalAirport: 'ORD Chicago',
    price: 599.99,
    duration: '9 hrs 20 mins',
    type: 'Direct flight',
    included: ['small bag', 'checked luggage'],
    image: 'https://i.pinimg.com/564x/84/55/a2/8455a25d64d22d64d5416372e304007b.jpg'
  },
  {
    id: 9,
    airline: 'Turkish Airlines',
    departure: '2024-08-14T13:00:00Z',
    arrival: '2024-08-14T17:20:00Z',
    departureAirport: 'BER Berlin',
    arrivalAirport: 'IST Istanbul ',
    price: 99.99,
    duration: '4 hrs 20 mins',
    type: 'Direct flight',
    included: ['small bag', 'checked luggage'],
    image: 'https://i.pinimg.com/564x/17/89/d4/1789d40199ce53f43f645bdb1d7e2fe5.jpg'
  },
];

//filter
function FlightsPage() {
  const [selectedBaggage, setSelectedBaggage] = useState('All');
  const [selectedStops, setSelectedStops] = useState('All');
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [maxTravelTime, setMaxTravelTime] = useState(24);
  const [departureTime, setDepartureTime] = useState([0, 23.98]);
  const [filteredFlights, setFilteredFlights] = useState(flights);
  const [sortCriteria, setSortCriteria] = useState('Popularity');

  useEffect(() => {
    const filtered = flights.filter(flight => {
      //wie viel luggage
      if (selectedBaggage !== 'All') {
        if (selectedBaggage === 'Hand luggage only' && flight.included.includes('checked luggage')) {
          return false;
        }
        if (selectedBaggage === 'Including checked luggage' && !flight.included.includes('checked luggage')) {
          return false;
        }
      }

      // wie viel stops
      if (selectedStops !== 'All') {
        if (selectedStops === 'Direct only' && flight.type !== 'Direct flight') {
          return false;
        }
        if (selectedStops === 'Max. 1 stop' && !['Direct flight', '1 stop'].includes(flight.type)) {
          return false;
        }
        if (selectedStops === '2 stop' && flight.type !== '2 stop') {
          return false;
        }
      }

      // airlines?
      if (selectedAirlines.length > 0 && !selectedAirlines.includes(flight.airline)) {
        return false;
      }

      // max.travel zeit
      const flightDuration = parseInt(flight.duration.split(' ')[0]);
      if (flightDuration > maxTravelTime) {
        return false;
      }

      // depat.zeit
      const departureParts = flight.departure.split('T')[1].split(':');
      const departureHour = parseInt(departureParts[0]) + parseInt(departureParts[1]) / 60;
      if (departureHour < departureTime[0] || departureHour > departureTime[1]) {
        return false;
      }

      return true;
    });

    // Sorting filtered flights
    const sorted = [...filtered].sort((a, b) => {
      switch (sortCriteria) {
        case 'Popularity':
          return b.points - a.points;
        case 'Cheapest flight':
          return a.price - b.price;
        case 'Fastest flight':
          return parseInt(a.duration.split(' ')[0]) - parseInt(b.duration.split(' ')[0]);
        case 'Earliest departure time':
          return new Date(a.departure) - new Date(b.departure);
        default:
          return 0;
      }
    });

    setFilteredFlights(sorted);
  }, [selectedBaggage, selectedStops, selectedAirlines, maxTravelTime, departureTime, sortCriteria]);

  return (
    <div className="bg-white p-4 mt-36">
      <div className="mb-4">
      </div>

      <div className="flex">
        <div className="w-1/4 pr-4">
          {/* luggage*/}
          <div>
            <h3 className="font-bold mb-2">Baggage</h3>
            <select 
              value={selectedBaggage} 
              onChange={(e) => setSelectedBaggage(e.target.value)} 
              className="border p-2 rounded w-full border-gray-300"
            >
              <option value="All">All</option>
              <option value="Hand luggage only">Hand luggage only</option>
              <option value="Including checked luggage">Including checked luggage</option>
            </select>
          </div>

          {/* stops*/}
          <div className="mt-4">
            <h3 className="font-bold mb-2">Stops</h3>
            <select 
              value={selectedStops} 
              onChange={(e) => setSelectedStops(e.target.value)} 
              className="border p-2 rounded w-full border-gray-300"
            >
              <option value="All">All</option>
              <option value="Direct only">Direct only</option>
              <option value="Max. 1 stop">Max. 1 stop</option>
              <option value="2 stop">2 stop</option>
            </select>
          </div>

          {/* airlines*/}
          <div className="mt-4">
            <h3 className="font-bold mb-2">Airlines</h3>
            <div className="space-y-2">
              {airlines.map(airline => (
                <div key={airline.name} className="flex items-center">
                  <input 
                    type="checkbox" 
                    id={airline.name} 
                    checked={selectedAirlines.includes(airline.name)} 
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedAirlines([...selectedAirlines, airline.name]);
                      } else {
                        setSelectedAirlines(selectedAirlines.filter(name => name !== airline.name));
                      }
                    }} 
                    className="accent-teal-500"
                  />
                  <label htmlFor={airline.name} className="ml-2">{airline.name}</label>
                </div>
              ))}
            </div>
          </div>

          {/* max.tr.zeit*/}
          <div className="mt-4">
            <h3 className="font-bold mb-2">Max. Travel Time</h3>
            <div className="relative">
              <input 
                type="range" 
                min="0" 
                max="24" 
                value={maxTravelTime} 
                onChange={(e) => setMaxTravelTime(parseInt(e.target.value))} 
                className="w-full h-2 bg-teal-600 accent-teal-500 rounded-lg cursor-pointer"
              />
              <div className="absolute top-6 left-0 right-0 flex justify-between text-sm text-black-600">
                <span>0</span>
                <span>24</span>
              </div>
              <div className="text-center mt-4 text-black-600">{maxTravelTime} hours</div>
            </div>
          </div>

          {/* dep.zeit*/}
          <div className="mt-4">
            <h3 className="font-bold mb-2">Flight Times</h3>
            <div className="relative">
              <input 
                type="range" 
                min="0" 
                max="23.98" 
                step="0.01"
                value={departureTime[1]} 
                onChange={(e) => setDepartureTime([departureTime[0], parseFloat(e.target.value)])} 
                className="w-full h-2 bg-teal-600 accent-teal-500 rounded-lg cursor-pointer"
              />
              <div className="absolute bottom-18 left-0 right-0 flex justify-between text-sm text-black-600">
                <span>00:00</span>
                <span>23:59</span>
              </div>
              <div className="h-1 bg-teal-400 absolute bottom-2 left-1/2 w-1" style={{transform: 'translateX(-50%)'}}></div>
            </div>
          </div>
        </div>

        {/* flights*/}
        <div className="w-3/4">
          <h2 className="font-bold text-xl mb-4">{filteredFlights.length} flights</h2>
          
          {/* filter top side*/}
          <div className="mb-4 flex space-x-4">
            <button
              className={`font-bold ${sortCriteria === 'Popularity' ? 'text-teal-600' : 'text-black'}`}
              onClick={() => setSortCriteria('Popularity')}
            >
              Popularity
            </button>
            <button
              className={`font-bold ${sortCriteria === 'Cheapest flight' ? 'text-teal-600' : 'text-black'}`}
              onClick={() => setSortCriteria('Cheapest flight')}
            >
              Cheapest flight
            </button>
            <button
              className={`font-bold ${sortCriteria === 'Fastest flight' ? 'text-teal-600' : 'text-black'}`}
              onClick={() => setSortCriteria('Fastest flight')}
            >
              Fastest flight
            </button>
            <button
              className={`font-bold ${sortCriteria === 'Earliest departure time' ? 'text-teal-600' : 'text-black'}`}
              onClick={() => setSortCriteria('Earliest departure time')}
            >
              Earliest departure time
            </button>
          </div>

          {/*ranking*/}
          <div className="mb-4 text-gray-600">
          Popularity rankings are based on the value of the prices and flight duration.
          </div>

          {/*filtered fligh*/}
          {filteredFlights.map(flight => (
            <div key={flight.id} className="border rounded-lg p-4 mb-4 flex justify-between items-center border-gray-300">
              <div className="flex items-center space-x-4">
                <img src={flight.image} alt={flight.airline} className="w-8 h-8" />
                <div>
                  <div className="font-bold">{flight.departure.slice(11, 16)}</div>
                  <div>{flight.departureAirport} - {flight.departure.slice(0, 10)}</div>
                </div>
                <div className="text-center">
                  <div>{flight.duration}</div>
                  <div>{flight.type}</div>
                </div>
                <div>
                  <div className="font-bold">{flight.arrival.slice(11, 16)}</div>
                  <div>{flight.arrivalAirport} - {flight.arrival.slice(0, 10)}</div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex space-x-2 mb-2">
                  <button className="text-gray-600">♡</button>
                  {flight.included.map((item, index) => (
                    <span key={index} className="text-sm text-gray-600">🧳</span>
                  ))}
                </div>
                <div className="font-bold text-2xl">{flight.price.toFixed(2)} €</div>
                <button className="bg-teal-600 text-white px-4 py-2 rounded mt-2">View offer</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlightsPage;