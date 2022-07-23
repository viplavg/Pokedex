import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function Types({url}) {

    let [type, setType] = useState([]);

    useEffect(()=>{
        function getTypes(url){
            let stringId = url.replace(/\D/g, "");
            let id = Number(stringId.substring(1));
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res)=>{
                if(res.status === 200){
                    setType(res.data);
                }
            })
            .catch(err => console.log(err));
        }
        getTypes(url);
    },[url])
    
  return (
    <div className='types'>
        <p className='title'>Type -</p>
        {
            (type.length !== 0) && (
                type.types.map((typ, index)=>{
                    return (                        
                        <p className='pokemon-type' key={index}>{typ.type.name}</p>                       
                    );
                })
            )           
        }
    </div>
  )
}

export default Types;