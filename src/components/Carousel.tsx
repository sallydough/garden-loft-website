import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import livingRoomImage from '/images/livingRoom.png'; // Ensure this path is correct
import './Carousel.css'

const Carousel: React.FC = () => {
  return (
    <section id="garden-loft-advantage" style={{ padding: '20px', textAlign: 'center', width: "100vw" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: '30px', marginTop: '40px' }}>The Garden Loft Advantage</h1>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        pagination={{ clickable: true }}
        slidesPerView={1.5}
        style={{ paddingBottom: '30px' }}
      >
        <SwiperSlide>
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage} alt="Living Room" style={{ width: '70vw', height: "60vh", margin: '0 auto', borderRadius: '1px' }} />
            <h3 style={{ textAlign: 'left' }}>Prefabrication Efficiency</h3>
            <p style={{ textAlign: 'left' }}>Garden Lofts are built in a controlled factory environment according to CSA standards to ensure high quality efficient construction</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage} alt="Living Room" style={{ width: '70vw', height: "60vh", margin: '0 auto', borderRadius: '1px' }} />
            <h3 style={{ textAlign: 'left' }}>Prefabrication Efficiency</h3>
            <p style={{ textAlign: 'left' }}>Garden Lofts are built in a controlled factory environment according to CSA standards to ensure high quality efficient construction</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage} alt="Living Room" style={{ width: '70vw', height: "60vh", margin: '0 auto', borderRadius: '1px' }} />
            <h3 style={{ textAlign: 'left' }}>Prefabrication Efficiency</h3>
            <p style={{ textAlign: 'left' }}>Garden Lofts are built in a controlled factory environment according to CSA standards to ensure high quality efficient construction</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage} alt="Living Room" style={{ width: '70vw', height: "60vh", margin: '0 auto', borderRadius: '1px' }} />
            <h3 style={{ textAlign: 'left' }}>Prefabrication Efficiency</h3>
            <p style={{ textAlign: 'left' }}>Garden Lofts are built in a controlled factory environment according to CSA standards to ensure high quality efficient construction</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage} alt="Living Room" style={{ width: '70vw', height: "60vh", margin: '0 auto', borderRadius: '1px' }} />
            <h3 style={{ textAlign: 'left' }}>Prefabrication Efficiency</h3>
            <p style={{ textAlign: 'left' }}>Garden Lofts are built in a controlled factory environment according to CSA standards to ensure high quality efficient construction</p>
          </div>
        </SwiperSlide>
       
      </Swiper>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button style={{
          background: 'none',
          border: '2px solid rgb(240, 212, 5)',
          padding: '10px 20px',
          borderRadius: '20px',
          cursor: 'pointer',
          fontSize: '16px'
        }}>Call Us</button>
      </div>
    </section>
  );
};

export default Carousel;
