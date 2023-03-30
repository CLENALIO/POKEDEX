import React from 'react';
import {useState} from 'react';
import App from '../App';


function NavBar ({setPokemonIndex}) {

  function handleClick(e) {
    e.preventDefault();
    setPokemonIndex(pokemonIndex => pokemonIndex - 1);
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


