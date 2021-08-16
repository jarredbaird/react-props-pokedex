import React from "react";
import Pokecard from "./Pokecard";

const Pokedex = ({ pokemon }) => {
  return (
    <>
      <h1>Pokedex</h1>
      <div>
        {pokemon.map((pok) => (
          <Pokecard
            id={pok.id}
            name={pok.name}
            type={pok.type}
            base_experience={pok.base_experience}
          />
        ))}
      </div>
    </>
  );
};

export default Pokedex;
