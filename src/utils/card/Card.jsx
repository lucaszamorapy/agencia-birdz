import React from 'react';
import data from "../../config/o-que-fazemos.json";

const Card = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-10 lg:grid lg:grid-cols-4">
      {data["o-que-fazemos"].map((item, index) => (
        <div className=" bg-blackBirdz flex flex-col items-center justify-center w-[250px] h-[250px] rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out lg:w-auto" key={index}>
          <img src={item.img} alt={`Imagem ${index + 1}`} />
          <h3 className="text-white mt-5">{item.tittle}</h3>
        </div>
      ))}
    </div>
  );
};

export default Card;
