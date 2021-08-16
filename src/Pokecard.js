import React from "react";
import "./Pokecard.css";

const IMG_SRC = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

const Pokecard = ({ id, name, type, base_experience }) => {
  let imgSrc = `${IMG_SRC}${id}.png`;
  console.log(imgSrc);
  return (
    <div className="card">
      <div className="title"> {name} </div>
      <img src={imgSrc} alt="" />
      <div className="data">Type: {type}</div>
      <div className="data">EXP: {base_experience}</div>
    </div>
  );
};

export default Pokecard;
