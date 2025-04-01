'use client'

import Image from 'next/image'
import axios from "axios";
import { useState } from "react";

export default function Home() {

  const [pokemons,setPokemons] = useState({});
  const [pesquisa,setPesquisa] = useState("");
  const [showPokemon,setShowPokemon] = useState(false);



  async function buscaPokemon() {


    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + pesquisa)
    setPokemons(response.data);
    setShowPokemon(true)
  }

  async function mudarPokemon(proximo) {
    
    let proximoId = parseInt(pokemons.id) + (proximo ? + 1 : -1);
    console.log(proximoId);

    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + proximoId);
    setPokemons(response.data);
  }

  return (
    <div>

      <form className="mx-5 mt-6" onSubmit={(e)=> e.preventDefault()}>
        <p className="">Digite o nome do pokemon</p>
        <input onChange={(e)=> setPesquisa(e.target.value)} className="border my-5 p-3 rounded-sm"/>
        <br />
        <button onClick={()=> buscaPokemon()} className="border bg-indigo-700 text-indigo-50 p-3 rounded-xl ml-2">pesquisar</button>
      </form>

      {showPokemon &&

        <div>
            {
              pokemons.id ?
              <div>
                
                <img src={pokemons.sprites.other.showdown.front_default} width={80} alt="" />
                <h2>{pokemons.name}</h2>
                <p>tipo: {pokemons.types[0].type.name}</p>
                <button onClick={()=> mudarPokemon(false)} className="border bg-indigo-700 text-indigo-50 p-3 rounded-xl ml-2">Anterior</button>
                <button onClick={()=> mudarPokemon(true)} className="border bg-indigo-700 text-indigo-50 p-3 rounded-xl ml-2">Próximo</button>

                
              </div>
            :
              <p>Carregando...</p>
            }
        </div>
      
      }

      {
        
      }

    </div>
  );
}
