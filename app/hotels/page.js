'use client';
import { useState } from 'react';


// hotels + availab.
const hotels = [
  {
    id: 1,
    name: 'Blabla Hotel NY',
    rating: 4,
    reviews: 999,
    location: 'New York • Center: 0.1 km',
    highlights: ['Sustainable', 'Indoor Pool', 'Sauna'],
    customerSays: 'Great hotel, with a chic pool and a small fine sauna area',
    price: 249.99,
    image: 'https://i.pinimg.com/564x/b0/80/d8/b080d842bea667aae9bc8c6ec1ad5190.jpg',
    mapLink: 'https://www.google.com/maps/place/New+York,+NY,+USA/@40.69754,-74.3093318,10z/data=!3m1!4b1!4m6!3m5!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728!16zL20vMDJfMjg2?entry=ttu',
    availableMonths: ['01-23 August', '05-14 September', '01-31 October'] 
  },
  {
    id: 2,
    name: 'Paradise Hotel',
    rating: 3,
    reviews: 2567,
    location: 'Saloniki • Center: 3.5 km',
    highlights: ['WiFi in Room', 'Elevator'],
    customerSays: 'The hotel is modernly furnished. Check-in was easy, check-out not necessary. Everything very nice. Also, our large dog was welcome.',
    price: 89.99,
    image: 'https://i.pinimg.com/564x/db/fa/c8/dbfac8e6f92687a3299c26a1376802fe.jpg',
    mapLink: 'https://www.google.com/maps/place/Saloniki/@40.6400639,22.9444191,10z/data=!3m1!4b1!4m6!3m5!1s0x14a849e8e6c85625:0x9c6c69f1c2b02a50!8m2!3d40.6400639!4d22.9444191!16zL20vMDE1NnE?entry=ttu',
    availableMonths: ['02-26 September', '05-31 October', '1-10 November'] 
  },
  {
    id: 3,
    name: 'Hotel One ',
    rating: 4,
    reviews: 1234,
    location: 'Maldives, Malé • Center: 10.2 km',
    highlights: ['Indoor Pool', 'Spa & Wellness', 'Garden'],
    customerSays: 'Friendly staff',
    price: 199.99,
    image: 'https://i.pinimg.com/564x/62/6e/17/626e171bd79fbfe7bee2c547b8d99ae2.jpg',
    mapLink: 'https://www.google.com/maps/place/Malé,+Maldives/@4.1754968,73.5093475,10z/data=!3m1!4b1!4m6!3m5!1s0x3f63f1c1d07b4a8b:0x1f0b8ea27d22e18e!8m2!3d4.1754968!4d73.5093475!16zL20vMDJfMjg2?entry=ttu',
    availableMonths: ['05-27 October', '01-30 November', '01-24 December']
  },
  {
    id: 4,
    name: 'Weekend Hotel Italy',
    rating: 4,
    reviews: 123,
    location: 'Lake Como • Center: 0.2 km',
    highlights: ['Indoor Pool', 'Spa & Wellness', 'Garden'],
    customerSays: 'Friendly staff',
    price: 69.99,
    image: 'https://i.pinimg.com/564x/4a/70/f4/4a70f405a23e39c21903499e2f00a47e.jpg',
    mapLink: 'https://www.google.com/maps/place/Lake+Como,+Italy/@45.9868765,9.2491583,10z/data=!3m1!4b1!4m6!3m5!1s0x4784156f964b7b7f:0x60a2e5b878a68fa7!8m2!3d45.9868765!4d9.2491583!16zL20vMDJfMjg2?entry=ttu',
    availableMonths: ['05-10 August', '08-30 September', '01-31 October'] 
  },
  {
    id: 5,
    name: 'Western Hotel',
    rating: 4,
    reviews: 6789,
    location: 'Dublin • Center: 6.5 km',
    highlights: ['Indoor Pool', 'Spa & Wellness', 'Garden'],
    customerSays: 'Friendly staff',
    price: 119.99,
    image: 'https://i.pinimg.com/564x/b9/fa/68/b9fa686ab61ef69e2f45ba77894fa0b9.jpg',
    mapLink: 'https://www.google.com/maps/place/Dublin,+Ireland/@53.3498053,-6.2603097,10z/data=!3m1!4b1!4m6!3m5!1s0x48670e0bd1f6615d:0x10100c0cc568a44d!8m2!3d53.3498053!4d-6.2603097!16zL20vMDJfMjg2?entry=ttu',
    availableMonths: ['01-30 September', '05-31 October', '03-31 November'] 
  },
];

function HotelsPage() {
  const [sortBy, setSortBy] = useState('Best Guest Ratings'); 
  const [showCalendar, setShowCalendar] = useState(false); 
  const [availableMonths, setAvailableMonths] = useState([]); 
  const [selectedHotelId, setSelectedHotelId] = useState(null); 

  const [selectedDistances, setSelectedDistances] = useState([]);
  const [selectedMonths, setSelectedMonths] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);

  //criteria
  const sortHotels = (criteria) => {
    switch (criteria) {
      case 'Best Guest Ratings':
        return hotels.slice().sort((a, b) => b.rating - a.rating);
      case 'Distance to City Center':
        return hotels.slice().sort((a, b) => parseFloat(a.location.split(': ')[1].split(' ')[0]) - parseFloat(b.location.split(': ')[1].split(' ')[0]));
      case 'Lowest Price':
        return hotels.slice().sort((a, b) => a.price - b.price);
      default:
        return hotels;
    }
  };

  const filteredHotels = sortHotels(sortBy).filter(hotel => {
    const distance = parseFloat(hotel.location.split(': ')[1].split(' ')[0]);
    const isDistanceMatch = selectedDistances.length === 0 || selectedDistances.some(dist => {
      if (dist === 'Less than 1 km') return distance < 1;
      if (dist === 'Less than 3 km') return distance < 3;
      if (dist === 'Less than 5 km') return distance < 5;
      return true;
    });

    const isMonthMatch = selectedMonths.length === 0 || selectedMonths.some(month => hotel.availableMonths.some(avMonth => avMonth.includes(month)));

    const isPriceMatch = selectedPrices.length === 0 || selectedPrices.some(priceRange => {
      if (priceRange === '10-100 €') return hotel.price >= 10 && hotel.price <= 100;
      if (priceRange === '100-200 €') return hotel.price > 100 && hotel.price <= 200;
      if (priceRange === '200-450 €') return hotel.price > 200 && hotel.price <= 450;
      if (priceRange === '500 € and more') return hotel.price > 450;
      return true;
    });

    return isDistanceMatch && isMonthMatch && isPriceMatch;
  });

  const handleCheckAvailability = (hotelId) => {
    const hotel = hotels.find(hotel => hotel.id === hotelId);
    setAvailableMonths(hotel.availableMonths);
    setSelectedHotelId(hotelId);
    setShowCalendar(true);
  };

  const handleDistanceChange = (distance) => {
    setSelectedDistances(prev => prev.includes(distance) ? prev.filter(d => d !== distance) : [...prev, distance]);
  };

  const handleMonthChange = (month) => {
    setSelectedMonths(prev => prev.includes(month) ? prev.filter(m => m !== month) : [...prev, month]);
  };

  const handlePriceChange = (priceRange) => {
    setSelectedPrices(prev => prev.includes(priceRange) ? prev.filter(p => p !== priceRange) : [...prev, priceRange]);
  };

 //left  & top side
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl font-bold my-4 ml-8 text-teal-500">Our Top Hotels</h1>

        <div className="flex">
          <div className="w-1/4 pr-4">
            <div className="mb-4">
              <div className="mb-4 ml-8">
                <a href="https://www.google.com/maps/place/Berlin/@52.5063843,13.0944159,10z/data=!3m1!4b1!4m6!3m5!1s0x47a84e373f035901:0x42120465b5e3b70!8m2!3d52.5200066!4d13.404954!16zL20vMDE1NnE?entry=ttu" target="_blank">
                  <img src="https://www.logo.wine/a/logo/Google_Maps/Google_Maps-Logo.wine.svg" alt="Google Maps" className="mx-auto my-4 ml-4" style={{ width: '200px' }} />
                </a>
              </div>
              
              <div className="mb-4 ml-8">
                <a href={hotels[0].mapLink} target="_blank" className="text-teal-600">Show on the map</a>
              </div>

              <div className="mb-4 ml-8">
                <h2 className="text-xl font-bold mb-2">Distance to Center</h2>
                {['Less than 1 km', 'Less than 3 km', 'Less than 5 km'].map(distance => (
                  <div key={distance}>
                    <input type="checkbox" id={distance} className="mr-2" checked={selectedDistances.includes(distance)} onChange={() => handleDistanceChange(distance)} />
                    <label htmlFor={distance}>{distance}</label>
                  </div>
                ))}
              </div>

              <div className="mb-4 ml-8">
                <h2 className="text-xl font-bold mb-2">Price</h2>
                {['10-100 €', '100-200 €', '200-450 €', '500 € and more'].map(priceRange => (
                  <div key={priceRange}>
                    <input type="checkbox" id={priceRange} className="mr-2" checked={selectedPrices.includes(priceRange)} onChange={() => handlePriceChange(priceRange)} />
                    <label htmlFor={priceRange}>{priceRange}</label>
                  </div>
                ))}
              </div>

              <div className="mb-4 ml-8">
                <h2 className="text-xl font-bold mb-2">Next available dates</h2>
                {['August', 'September', 'October', 'November', 'December'].map(month => (
                  <div key={month}>
                    <input type="checkbox" id={month} className="mr-2" checked={selectedMonths.includes(month)} onChange={() => handleMonthChange(month)} />
                    <label htmlFor={month}>{month}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

           
          <div className="w-3/4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-4">
                {['Best Guest Ratings', 'Distance to City Center', 'Lowest Price'].map(option => (
                  <button
                    key={option}
                    className={`${sortBy === option ? 'text-teal-600 border-b-2 border-teal-600' : ''}`}
                    onClick={() => setSortBy(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div>
                <span className="mr-2">Select travel dates to see current offers</span>
                <button className="text-teal-600">Select dates</button>
              </div>
            </div>

            {filteredHotels.map(hotel => (
              <div key={hotel.id} className="mb-6 border rounded-lg p-4 flex">
                <img src={hotel.image} alt={hotel.name} className="mr-4 rounded-lg" style={{ width: '300px', height: '225px', objectFit: 'cover' }} />
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-bold">{hotel.name}</h2>
                      <p>{hotel.location}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold">Excellent</span>
                      <div className="bg-teal-600 text-white rounded-lg p-1 text-sm">{hotel.reviews} reviews</div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <strong>Highlights of the property:</strong> {hotel.highlights.join(' • ')}
                  </div>
                  <div className="mt-2">
                    <strong>What our customers say:</strong> "{hotel.customerSays}"
                  </div>
                  <div className="mt-2 flex justify-between items-end">
                    <button className="bg-teal-500 text-white font-bold px-4 py-2 rounded hover:bg-yellow-500" onClick={() => handleCheckAvailability(hotel.id)}>Check availability</button>
                    <div className="text-right">
                      <div>Price per night from</div>
                      <div className="text-2xl font-bold">{hotel.price} €</div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <a href={hotel.mapLink} target="_blank" rel="noopener noreferrer" className="text-teal-600">Show on the map</a>
                  </div>
                </div>
              </div>
            ))}

            {showCalendar && (
              <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold mb-4">Select the next 3 available month for {hotels.find(hotel => hotel.id === selectedHotelId)?.name}</h2>
                  <ul>
                    {availableMonths.map(month => (
                      <li key={month} className="text-lg mb-2">{month}</li>
                    ))}
                  </ul>
                  <button className="mt-4 bg-teal-500 text-white font-bold px-4 py-2 rounded hover:bg-yellow-500" onClick={() => setShowCalendar(false)}>Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelsPage;
