function PokemonCard(props) {
  
  return (
    <figure>
      {props.imgSrc? <img src = {props.imgSrc} alt= {props.name}/> : <p>???</p>}
      <figcaption> {props.name} </figcaption>
    </figure>
  )
}

  
export default PokemonCard;


