import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from "./components/PokemonCard.jsx"
import NavBar from "./components/NavBar.jsx"

function App() {
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ]; 

    const [pokemonIndex, setPokemonIndex] = useState(0);

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
        <PokemonCard name ={pokemonList[pokemonIndex].name} imgSrc = {pokemonList[pokemonIndex].imgSrc}/>
        {pokemonIndex > 0 ? <button className= "button" onClick={handleClick}>Précédent</button> : null}
        {pokemonIndex < pokemonList.length - 1 ? <button className= "button" onClick={handleClick2}>Suivant</button> : null}
      </div>
    );
}

export default App


