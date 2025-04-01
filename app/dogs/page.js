'use client'

import axios from "axios";
import { useEffect, useState } from "react";

export default function Dogs(){

    const [dogs,setDogs] = useState([]);

    async function listarDogs() {
        const response = await axios.get("https://dog.ceo/api/breeds/image/random/50");
        console.log(response)
        setDogs(response.data.message)
    }

    async function listarPorRaca(raca) {
        const response = await axios.get("https://dog.ceo/api/breed/"+raca+"/images");
        console.log(response)
        setDogs(response.data.message)
    }


    useEffect(()=> {
        listarDogs()
    },[])

    return(
        <div>
            <h1 className="p-10 text-center text-indigo-700 bg-indigo-50 text-2xl">Lista de catoros</h1>

            
            {
                dogs != 0 ?
                    <div>
                        <h2 className="p-10">Só catorinho lindo!!!</h2>
                        <p>mostar apenas por raça</p>
                        <button onClick={(e)=> listarPorRaca("bulldog")} className="border bg-indigo-700 text-indigo-50 p-3 rounded-xl ml-2">bulldog</button>
                        <button onClick={(e)=> listarPorRaca("mix")} className="border bg-indigo-700 text-indigo-50 p-3 rounded-xl ml-2">mix</button>
                        <button onClick={(e)=> listarPorRaca("pitbull")} className="border bg-indigo-700 text-indigo-50 p-3 rounded-xl ml-2">pitbull</button>
                        <button onClick={(e)=> listarPorRaca("pinscher")} className="border bg-indigo-700 text-indigo-50 p-3 rounded-xl ml-2">pinscher</button>
                        <hr />
                        <div className="flex flex-wrap mx-auto justify-center">
                            {
                                dogs.map((i,index) =>
                                    <img key={index} src={i} width={200} className="mx-5 my-5" alt=""  />
                                )
                            
                            }
                        </div>
                    </div>
                :
                    <p>Carregando...</p>
                
            }
        </div>


    );
}