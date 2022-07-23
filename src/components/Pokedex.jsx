import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pokecard from './Pokecard';

function Pokedex() {


    let types = ["Grass", "Poison", "Fire", "Flying", "Normal", "Water", "Bug", "Fairy", "Ground", "Dark", "Electric", "Fighting", "Psychic", "Rock", "Ghost", "Ice"];

    let [data, setData] = useState([]);
    let [filteredPokemons, setFilteredPokemons] = useState([]);
    let [searchAreaVisible, setSearchAreaVisible] = useState(false);
    let [page, setPage] = useState(0);
    let [type, setType] = useState([]);
    let [filteredTypes, setFilteredTypes] = useState([]);

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20`)
        .then((response)=>{
            if(response.status === 200){

                let data = response.data.results;
                console.log("Initial Data", data);
                setData(data);

            }
        })
        .catch(err => console.log(err))
    },[page]);

    function next() {
        setPage(page+20);
    }

    function prev(){
        if(page !== 0){
            setPage(page-20);
        }
    }

    function searchPokemon(name){
        
        if(name !== ""){
            let filteredPokemons = data.filter((doc,index)=>{
                return doc.name.toUpperCase().includes(name.toUpperCase());
            });

            setFilteredPokemons(filteredPokemons);
        } else {
            setFilteredPokemons([]);
        }

    }


    function filterTypes(type){ 

        console.log(type)

    }
    

  return (

    <div className='pokedex-wrapper'>

        <div className='header'>

                <div className='header-container'>

                    <div className='logo'>
                        <p>Poké<span>dex</span></p>
                    </div>

                    <div className='filter-search-area'>
                        <input 
                            type="search" 
                            placeholder="Search any pokemon" 
                            onChange={(e)=>searchPokemon(e.target.value)}
                            onFocus={()=>setSearchAreaVisible(true)}
                            onBlur={()=>{
                                if(filteredPokemons.length === 0){
                                  setSearchAreaVisible(false);
                                }
                              }}
                            />
                        <select onChange={(e)=>filterTypes(e.target.value)} name="filter">

                            <option>Select Type</option>
                            
                            {
                                types.map((typ,index)=>{
                                    return <option key={index}>{typ}</option>
                                })
                            }

                        </select>
                    </div>

                </div>

        </div>

        {
            searchAreaVisible ? (
                <div className='search-results'>
                    <div className='search-container'>
                        {
                            (filteredPokemons.length !== 0) ? (
                                <Pokecard pokemons={filteredPokemons} />
                            ) : (
                                <p className='warning'>Search a Pokemon which truly exists!!!</p>
                            )
                        }
                    </div>
                </div>
            ) : (
                <div className='pokecards-container'>

                    <Pokecard pokemons={data} />  
                    <div className='navigation'>
                        <button onClick={prev} type='button'>Previous</button>
                        <button onClick={next} type='button'>Next</button>
                    </div>
                    
                </div>
            )
        }

    </div>    

  )
}

export default Pokedex;