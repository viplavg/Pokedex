import React, { useEffect, useState } from 'react'

function PokeIds({url}) {

    let [id, setId] = useState(0);

    useEffect(()=>{

        function extractId(url) {
            let stringId = url.replace(/\D/g, "");
            setId(Number(stringId.substring(1)));
        }

        extractId(url);

    },[url])

  return (
    <p className='pokemon-space'><span className='title'>Id -</span>{id}</p>
  )
}

export default PokeIds;