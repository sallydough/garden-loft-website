import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import livingRoomImage from '/images/livingRoom.png'; // Ensure this path is correct
import './Process.css'

const Process: React.FC = () => {
  return (
    <div id="four-step-process" style={{ padding: '10px', textAlign: 'center', width:'100vw' }}>
      <h1 style={{ fontSize: "2rem", marginBottom: '30px', marginTop: '40px' }}>Owning a Garden Loft <br />is a 4-Step Process</h1>
      <Swiper
     modules={[Pagination]}
     spaceBetween={12}
     pagination={{ clickable: true }}
     slidesPerView={1.2}
     centeredSlides={true}
    //  loop={true}
     style={{ paddingBottom: '30px' }}
   

      >
        <SwiperSlide>
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage} alt="Living Room" style={{ width: '70vw', height: "50vh", margin: '0 auto', borderRadius: '1px' }} />
            <h2 style={{ textAlign: 'center' }}> <strong>STEP 1</strong></h2>
            <h3 style={{ textAlign: 'center' }}>Feasibility Analysis & Design selection</h3>
            <p style={{ textAlign: 'center' }}>Our free feasibility analysis will tell you  <br />where and how we can locate a Garden Loft on your property. Work with Our design team to select your fixtures and finishes.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage} alt="Living Room" style={{ width: '70vw', height: "50vh", margin: '0 auto', borderRadius: '1px' }} />
            <h2 style={{ textAlign: 'center' }}> <strong>STEP 2</strong></h2>
            <h3 style={{ textAlign: 'center' }}>Permits and Approvals</h3>
            <p style={{ textAlign: 'center' }}>We can take care of obtaining all the development and building permits and approvals. <br />Garden Lofts are now allowed in all Calgary neighborhoods as legal secondary suites.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage} alt="Living Room" style={{ width: '70vw', height: "50vh", margin: '0 auto', borderRadius: '1px' }} />
            <h2 style={{ textAlign: 'center' }}> <strong>STEP 3</strong></h2>
            <h3 style={{ textAlign: 'center' }}>Fabrication + Site Preparation</h3>
            <p style={{ textAlign: 'center' }}>While we build your Garden Loft to order in our Calgary-based factory <br />we prepare your backyard, install the footings, and rough-in the utilities.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ textAlign: 'center' }}>
            <img src={livingRoomImage} alt="Living Room" style={{ width: '70vw', height: "50vh", margin: '0 auto', borderRadius: '1px' }} />
            <h2 style={{ textAlign: 'center' }}> <strong>STEP 4</strong></h2>
            <h3 style={{ textAlign: 'center' }}>Installation + Site Completion</h3>
            <p style={{ textAlign: 'center' }}>We deliver your Garden Loft by truck and crane it into place. <br /> We hook up the utilities, install any decking, stairs, or ramps, and prepare the unit for occupancy.</p>
          </div>
        </SwiperSlide>
 </Swiper>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button style={{
          background: 'black',
          border: '2px solid #000',
          padding: '10px 20px',
          borderRadius: '20px',
          cursor: 'pointer',
          fontSize: '16px',
          color: 'white'
        }}>Book a Tour</button>
      </div>
    </div>
  );
};

export default Process;
