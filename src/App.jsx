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

    return (
      <div>
        <PokemonCard name ={pokemonList[pokemonIndex].name} imgSrc = {pokemonList[pokemonIndex].imgSrc}/>
        <NavBar setPokemonIndex ={setPokemonIndex} pokemonIndex= {pokemonIndex}/>
      </div>
    );
}

export default App;

