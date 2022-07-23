import React from 'react';
import Button from './Button';
import PokeIds from './PokeIds';
import PokemonImage from './PokemonImage';
import Types from './Types';

function Pokecard({pokemons}) {

  return (
    <div className='pokecard-wrapper'>
    {
        pokemons.map((pokemon,index)=>{

            return (
                <div className='pokecard' key={index}>
                    <div className='pokemon-image'>
                      <PokemonImage url={pokemon.url}/>
                    </div>
                    <div className='pokemon-summary'>
                      <PokeIds url={pokemon.url}/>
                      <p className='pokemon-space'><span className='title'>Name -</span>{pokemon.name}</p>
                      <Types url={pokemon.url}/>
                    </div>
                    <Button />              
                </div>
            )
        })
       }
    </div>
  )
}

export default Pokecard;