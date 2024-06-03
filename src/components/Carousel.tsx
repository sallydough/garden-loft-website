import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import livingRoomImage from '/images/livingRoom.png'; // Ensure this path is correct
import './Carousel.css'

const Carousel: React.FC = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px' }}>The Garden Loft Advantage</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        pagination={{ clickable: true }}
        slidesPerView={1}
        style={{ paddingBottom: '40px' }}
      >
        <SwiperSlide>
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage} alt="Living Room" style={{ width: '100%', maxWidth: '400px', margin: '0 auto', borderRadius: '10px' }} />
            <h3>Prefabrication Efficiency</h3>
            <p>Garden Lofts are built in a controlled factory environment according to CSA standards to ensure high quality efficient construction</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage} alt="Living Room" style={{ width: '100%', maxWidth: '400px', margin: '0 auto', borderRadius: '10px' }} />
            <h3>Low Impact Design</h3>
            <p>Garden Lofts are built in a controlled factory environment according to CSA standards to ensure high quality efficient construction</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage} alt="Living Room" style={{ width: '100%', maxWidth: '400px', margin: '0 auto', borderRadius: '10px' }} />
            <h3>Eco-Friendly Construction</h3>
            <p>Garden Lofts are built in a controlled factory environment according to CSA standards to ensure high quality efficient construction</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button style={{
          background: 'none',
          border: '2px solid #000',
          padding: '10px 20px',
          borderRadius: '20px',
          cursor: 'pointer',
          fontSize: '16px'
        }}>Call Us</button>
      </div>
    </div>
  );
};

export default Carousel;
