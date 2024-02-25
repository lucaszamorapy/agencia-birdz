import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './cases.css';
import { Navigation, Autoplay } from 'swiper/modules';
import Modal from 'react-modal'; // Importe o componente de modal do react-modal

const Cases = () => {


  const getImagePath = (number) => {
    return `/images/cases/${number}.png`; // Caminho para a pasta public/images/clientes
  };

  const imageNumbers = Array.from({ length: 17 }, (_, i) => i + 1);



  const swiperSettings = {
    effect: 'slide',
    grabCursor: true,
    centeredSlides: true,
    modules: [Navigation, Autoplay],
    className: 'mySwiper w-full mt-6',
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 1000,
    loop: true,
    breakpoints: {
      425: { slidesPerView: 1 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 3 },
    },
  };

  return (
    <>
      <section id="cases">
        <div className="container">
          <h1 className="text-4xl text-black uppercase font-semibold text-center mt-7 lg:text-5xl">Cases</h1>
          <Swiper {...swiperSettings} navigation={true} modules={[Navigation]}>
            {imageNumbers.map((number) => (
              <SwiperSlide key={number} className="">
                <img
                  src={getImagePath(number)}
                  alt={`Slide ${number}`}
                  className="w-full"
                  onClick={() => handleImageClick(number)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Cases;
