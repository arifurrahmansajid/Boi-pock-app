import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import booksData from '../../../public/booksData.json';
import { Link } from 'react-router';

const Banner = () => {
 

  
  return (
    <div className="px-4 py-8 lg:px-16 lg:py-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl mx-2 lg:mx-0 shadow-lg">
      <div className="max-w-7xl mx-auto">
       
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
            renderBullet: (index, className) => {
              return `<span class="${className} bg-indigo-600 opacity-50 hover:opacity-100 transition-opacity duration-300"></span>`;
            }
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect="fade"
          fadeEffect={{
            crossFade: true
          }}
          spaceBetween={30}
          slidesPerView={1}
          className="relative rounded-2xl overflow-hidden"
        >
          {booksData.map((book, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-6 lg:p-10 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl">
                <div className="lg:w-1/3 w-full h-64 lg:h-96 relative group overflow-hidden rounded-xl shadow-xl">
                  <img
                    src={book.image}
                    alt={book.bookName}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">Click for details</span>
                  </div>
                </div>
                
                <div className="lg:w-2/3 space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">{book.bookName}</h3>
                  <p className="text-lg text-indigo-600 font-semibold">By: {book.author}</p>
                  <div className="inline-block bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                    {book.category}
                  </div>
                  <p className="text-gray-600 text-lg mt-4 line-clamp-3">
                    {book.description || "A captivating read that will keep you engaged from start to finish."}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-6">
                    <Link to={`/bookDetails/${book.bookId}`}>
                    <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      View Details
                    </button>
                    </Link>
                    <button className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-all duration-300">
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          
          <div className="swiper-button-next !text-indigo-600 !bg-white !w-12 !h-12 rounded-full !shadow-lg after:!text-xl after:!font-bold hover:!scale-110 transition-transform"></div>
          <div className="swiper-button-prev !text-indigo-600 !bg-white !w-12 !h-12 rounded-full !shadow-lg after:!text-xl after:!font-bold hover:!scale-110 transition-transform"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;