import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaSnowflake, FaWifi, FaParking, FaCoffee } from 'react-icons/fa';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="h-screen relative bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <motion.div 
              className="text-white max-w-2xl"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <h1 className="text-6xl font-bold mb-6">Win Win GUEST</h1>
              <p className="text-xl mb-8">Experience luxury and comfort in the heart of the city</p>
              <div className="flex space-x-4">
                <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition">
                  Book Now
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
                  View Rooms
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <FaSnowflake className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">AC & Non-AC Rooms</h3>
              <p>Choose your comfort level</p>
            </div>
            <div className="text-center">
              <FaWifi className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Free Wi-Fi</h3>
              <p>Stay connected always</p>
            </div>
            <div className="text-center">
              <FaParking className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Free Parking</h3>
              <p>Secure parking space</p>
            </div>
            <div className="text-center">
              <FaCoffee className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Restaurant</h3>
              <p>Delicious dining options</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Our Rooms
          </motion.h2>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {/* AC Rooms */}
            <SwiperSlide>
              <motion.div 
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <img src="/ac-room.jpg" alt="AC Room" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">AC Deluxe Room</h3>
                  <p className="text-gray-600 mb-4">Luxurious air-conditioned rooms with modern amenities</p>
                  <p className="text-2xl font-bold text-blue-600">₹2999/night</p>
                </div>
              </motion.div>
            </SwiperSlide>

            {/* Non-AC Rooms */}
            <SwiperSlide>
              <motion.div 
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <img src="/non-ac-room.jpg" alt="Non-AC Room" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Non-AC Room</h3>
                  <p className="text-gray-600 mb-4">Comfortable rooms with natural ventilation</p>
                  <p className="text-2xl font-bold text-blue-600">₹1999/night</p>
                </div>
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Home;
