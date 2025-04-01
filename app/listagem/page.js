'use client'

import axios from "axios";
import {useEffect, useState } from "react";



export default function Listagem(){

    const [pokemons,setPokemons] = useState([]);




    async function buscaTodosPokemons() {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
        console.log(response);
        setPokemons(response.data.results)
        
    }
    


    

    
    useEffect( ()=>  {
        buscaTodosPokemons();

    },[]);

     return(
        <div>
            <h1 className="p-10 text-center text-red-700 bg-red-50 text-2xl">Lista de pokemons</h1>

            <p>Veja todos os pokemons</p>


            {
                pokemons.length != 0 ?
                    <ul className="flex flex-wrap justify-between">
                            {
                                pokemons.map((i,index) => 
                                    <li key={index} className="mx-7 my-7 flex items-center gap-4 ">
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} alt="" />
                                        <p> <strong>ID: {index+1} </strong> <br /> name: {i.name} </p>
                                    </li>
                                )
                            }
                    </ul>
                :
                        <p>Carregando...</p>
            }

            
        </div>
     );
}