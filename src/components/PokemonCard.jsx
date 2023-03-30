import PropTypes from "prop-types";
import App from '../App';

function PokemonCard(pokemon) {
  
  return (
    <figure className= "pokemonCard">
      {pokemon.imgSrc? <img src = {pokemon.imgSrc} alt= {pokemon.name}/> : <p>???</p>}
      <figcaption> {pokemon.name} </figcaption>
    </figure>
  )
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  })
}


export default PokemonCard;




