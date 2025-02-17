import { motion } from 'framer-motion';
import { useState } from 'react';

const Rooms = () => {
  const [filter, setFilter] = useState('all');

  const rooms = [
    {
      id: 1,
      name: 'Deluxe AC Room',
      type: 'ac',
      price: 2999,
      capacity: '2 Adults',
      size: '320 sq ft',
      amenities: ['Air Conditioning', 'TV', 'Mini Fridge', 'Wi-Fi', 'Room Service'],
      image: '/ac-deluxe.jpg'
    },
    {
      id: 2,
      name: 'Super Deluxe AC Room',
      type: 'ac',
      price: 3499,
      capacity: '3 Adults',
      size: '400 sq ft',
      amenities: ['Air Conditioning', 'TV', 'Mini Fridge', 'Wi-Fi', 'Room Service', 'Lounge Area'],
      image: '/ac-super.jpg'
    },
    {
      id: 3,
      name: 'Standard Non-AC Room',
      type: 'non-ac',
      price: 1999,
      capacity: '2 Adults',
      size: '280 sq ft',
      amenities: ['Fan', 'TV', 'Wi-Fi', 'Room Service'],
      image: '/non-ac-standard.jpg'
    },
    {
      id: 4,
      name: 'Deluxe Non-AC Room',
      type: 'non-ac',
      price: 2499,
      capacity: '2 Adults',
      size: '320 sq ft',
      amenities: ['Fan', 'TV', 'Mini Fridge', 'Wi-Fi', 'Room Service'],
      image: '/non-ac-deluxe.jpg'
    }
  ];

  const filteredRooms = filter === 'all' 
    ? rooms 
    : rooms.filter(room => room.type === filter);

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Rooms
        </motion.h1>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          <FilterButton 
            active={filter === 'all'} 
            onClick={() => setFilter('all')}
          >
            All Rooms
          </FilterButton>
          <FilterButton 
            active={filter === 'ac'} 
            onClick={() => setFilter('ac')}
          >
            AC Rooms
          </FilterButton>
          <FilterButton 
            active={filter === 'non-ac'} 
            onClick={() => setFilter('non-ac')}
          >
            Non-AC Rooms
          </FilterButton>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room, index) => (
            <motion.div
              key={room.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <img 
                src={room.image} 
                alt={room.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4">
                  {room.capacity} • {room.size}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Amenities:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {room.amenities.map((amenity, i) => (
                      <li key={i} className="text-sm text-gray-600">
                        • {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-blue-600">
                    ₹{room.price}
                    <span className="text-sm text-gray-600">/night</span>
                  </p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FilterButton = ({ active, children, onClick }) => (
  <button
    className={`px-6 py-2 rounded-full transition ${
      active 
        ? 'bg-blue-600 text-white' 
        : 'bg-white text-gray-600 hover:bg-gray-100'
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Rooms;
