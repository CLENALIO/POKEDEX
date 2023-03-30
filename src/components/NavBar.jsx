import React from 'react';
import {useState} from 'react';
import App from '../App';


function NavBar ({setPokemonIndex}) {

  const handleClick = function (e) {
    e.preventDefault()
    setPokemonIndex (pokemonIndex => pokemonIndex - 1);
  }

  const handleClick2 = function (e) {
    e.preventDefault()
    setPokemonIndex (pokemonIndex => pokemonIndex + 1);
  }


  return (
    <div>
      <button className= "button" onClick={handleClick}>Précédent</button>
      <button className= "button" onClick={handleClick2}>Suivant</button>
    </div>
  );
};

export default NavBar;


/*       {pokemonIndex > 0 ? <button className= "button" onClick={handleClick}>Précédent</button> : null}
      {pokemonIndex < pokemonList.length - 1 ? <button className= "button" onClick={handleClick2}>Suivant</button> : null}  */