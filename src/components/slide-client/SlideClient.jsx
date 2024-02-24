import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "./slide-client.css";

const SlideClient = () => {
  // Função para gerar o caminho da imagem com base no número
  const getImagePath = (number) => {
    return `/images/clientes/${number}.png`; // Caminho para a pasta public/images/clientes
  };

  // Array com números de 1 a 30
  const imageNumbers = Array.from({ length: 29 }, (_, i) => i + 1);

  const swiperSettings = {
    effect: "slide",
    grabCursor: true,
    centeredSlides: true,
    modules: [Pagination, Autoplay],
    className: "mySwiper w-full mt-6",
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 975, // Defina uma velocidade alta para que pareça contínuo
    loop: true, // Ativa o looping infinito
    breakpoints: {
      425: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <>
      <Swiper {...swiperSettings} className="mySwiper">
        {imageNumbers.map((number) => (
          <SwiperSlide key={number}>
            <img src={getImagePath(number)} alt={`Slide ${number}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SlideClient;
