import React from "react";

function NavBar ({ handlePokemonClick, pokemonList }) {  
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
         <button className = "button" key={index} onClick={() => handlePokemonClick(index)}>
         {pokemon.name}</button>
      ))}
    </div>
);}

export default NavBar;