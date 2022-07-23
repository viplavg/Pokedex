import React from 'react';


function PokemonImage({url}) {

    let id = 0;
    let stringId = url.replace(/\D/g, "");
    id = Number(stringId.substring(1));
    let source = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`;

  return (
    <img className='poke-image' src={source} alt="Pokemon-image" /> 
  )

}

export default PokemonImage;